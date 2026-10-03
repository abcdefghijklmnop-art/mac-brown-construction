import { Router } from "express";
import https from "https";

const router = Router();

const RSS_URL = "https://feeds.captivate.fm/the-articulate-fly/";
const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

interface Episode {
  uuid: string;
  title: string;
  season: number;
  ep: number;
  date: string;
  rawTitle: string;
}

let cache: { episodes: Episode[]; fetchedAt: number } | null = null;

function fetchRss(): Promise<string> {
  return new Promise((resolve, reject) => {
    const req = https.get(RSS_URL, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      const chunks: Buffer[] = [];
      res.on("data", (c: Buffer) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
      res.on("error", reject);
    });
    req.on("error", reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error("RSS fetch timeout")); });
  });
}

function decodeEntities(str: string): string {
  return str
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function parseEpisodes(xml: string): Episode[] {
  const items = xml.split("<item>").slice(1);
  const episodes: Episode[] = [];

  for (const item of items) {
    const rawTitle = decodeEntities(
      item.match(/<title><!\[CDATA\[(.*?)\]\]>/s)?.[1] ||
      item.match(/<title>(.*?)<\/title>/s)?.[1] ||
      ""
    );

    // Only include Mac Brown episodes
    if (!rawTitle.includes("Mac Brown")) continue;

    const guid = item.match(/<guid[^>]*>(.*?)<\/guid>/s)?.[1]?.trim() ?? "";
    const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/s)?.[1]?.trim() ?? "";

    // Parse season and episode number from "S8, Ep 25: ..." or "S8, Ep 25 ..."
    const seMatch = rawTitle.match(/S(\d+),?\s*Ep\.?\s*(\d+)/i);
    const season = seMatch ? parseInt(seMatch[1], 10) : 0;
    const ep = seMatch ? parseInt(seMatch[2], 10) : 0;

    // Clean up title — remove "S8, Ep 25: " prefix
    const title = rawTitle.replace(/^S\d+,?\s*Ep\.?\s*\d+[:\-–]\s*/i, "").trim();

    // Convert pubDate to ISO date string
    const dateObj = pubDate ? new Date(pubDate) : new Date(0);
    const date = dateObj.toISOString().slice(0, 10);

    // Extract UUID from GUID (Captivate GUIDs are UUIDs)
    const uuid = guid.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i)?.[0] ?? guid;

    if (uuid) {
      episodes.push({ uuid, title, season, ep, date, rawTitle });
    }
  }

  // Newest first
  return episodes.sort((a, b) => b.date.localeCompare(a.date));
}

router.get("/podcasts", async (req, res) => {
  const now = Date.now();

  if (cache && now - cache.fetchedAt < CACHE_TTL_MS) {
    req.log.info("Serving podcasts from cache");
    res.json({ episodes: cache.episodes, source: "cache" });
    return;
  }

  try {
    const xml = await fetchRss();
    const episodes = parseEpisodes(xml);
    cache = { episodes, fetchedAt: now };
    req.log.info({ count: episodes.length }, "Fetched and cached podcast episodes");
    res.json({ episodes, source: "live" });
  } catch (err) {
    req.log.error(err, "Failed to fetch podcast RSS");
    // Return stale cache if available
    if (cache) {
      res.json({ episodes: cache.episodes, source: "stale-cache" });
    } else {
      res.status(500).json({ error: "Failed to fetch podcast episodes" });
    }
  }
});

export default router;
