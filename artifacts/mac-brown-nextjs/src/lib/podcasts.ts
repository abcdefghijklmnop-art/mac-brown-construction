import https from "https";

export interface Episode {
  uuid: string;
  title: string;
  season: number;
  ep: number;
  date: string;
  rawTitle: string;
  link: string;
  overview: string;
  keyTakeaways: string[];
  techniques: string;
}

const RSS_URL = "https://feeds.captivate.fm/the-articulate-fly/";
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;

const LEGACY_LINK_MAP: Record<string, string> = {
  "https://www.thearticulatefly.com/podcast/taf78":
    "https://fly-fishing-podcast.thearticulatefly.com/s1-ep-78-mac-brown-fly-fishing-guide-instructor-and-casting-guru/",
  "https://www.thearticulatefly.com/podcast/taf445":
    "https://fly-fishing-podcast.thearticulatefly.com/s3-ep-180-casting-angles-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/taf458":
    "https://fly-fishing-podcast.thearticulatefly.com/s4-ep-13-casting-angles-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/casting-angles-mac-brown-taf618":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-11-casting-angles-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/casting-angles-mac-brown-taf625":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-18-casting-angles-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/casting-angles-mac-brown-taf637":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-30-casting-angles-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/casting-angles-mac-brown-taf643":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-36-casting-angles-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/casting-angles-mac-brown-taf649":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-42-casting-angles-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/casting-angles-mac-brown-taf655":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-48-casting-angles-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/casting-angles-mac-brown-taf660":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-53-casting-angles-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/casting-angles-mac-brown-taf667":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-60-casting-angles-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/casting-angles-mac-brown-taf675a":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-68-casting-angles-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/casting-angles-mac-brown-taf681":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-74-casting-angles-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/fly-line-essentials-mac-brown-taf692":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-85-fly-line-essentials-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/fly-line-essentials-mac-brown-taf697":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-90-fly-line-essentials-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/fly-line-essentials-mac-brown-taf703":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-96-fly-line-essentials-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/fly-line-essentials-mac-brown-taf710":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-103-fly-line-essentials-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/fly-line-essentials-mac-brown-taf715":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-108-fly-line-essentials-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/fly-line-essentials-mac-brown-taf721":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-114-fly-line-essentials-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/fly-line-essentials-mac-brown-taf729":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-122-fly-line-essentials-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/casting-angles-mac-brown-taf734":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-127-casting-angles-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/casting-angles-mac-brown-taf739":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-132-casting-angles-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/casting-angles-mac-brown-taf744":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-137-casting-angles-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/casting-angles-mac-brown-taf750":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-143-casting-angles-with-mac-brown/",
  "https://www.thearticulatefly.com/podcast/casting-angles-mac-brown-taf755":
    "https://fly-fishing-podcast.thearticulatefly.com/s5-ep-148-casting-angles-with-mac-brown/",
};

let episodeCache: { episodes: Episode[]; fetchedAt: number } | null = null;

function fetchRss(): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = https.get(RSS_URL, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      const chunks: Buffer[] = [];
      res.on("data", (c: Buffer) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
      res.on("error", reject);
    });
    r.on("error", reject);
    r.setTimeout(15000, () => { r.destroy(); reject(new Error("RSS fetch timeout")); });
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

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function parseEpisodes(xml: string): Episode[] {
  const items = xml.split("<item>").slice(1);
  const episodes: Episode[] = [];

  for (const item of items) {
    const rawTitle = decodeEntities(
      item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]>/)?.[1] ||
      item.match(/<title>([\s\S]*?)<\/title>/)?.[1] ||
      ""
    );

    if (!rawTitle.includes("Mac Brown")) continue;

    const guid = item.match(/<guid[^>]*>([\s\S]*?)<\/guid>/)?.[1]?.trim() ?? "";
    const pubDate = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1]?.trim() ?? "";
    const rawLink = (
      item.match(/<link><!\[CDATA\[([\s\S]*?)\]\]>/)?.[1] ||
      item.match(/<link>([\s\S]*?)<\/link>/)?.[1] ||
      ""
    ).trim();
    const link = LEGACY_LINK_MAP[rawLink] ?? rawLink;

    const rawContent =
      item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]>/)?.[1] ||
      item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]>/)?.[1] ||
      "";

    const overviewMatch = rawContent.match(/<h2>Episode Overview<\/h2>\s*<p>([\s\S]*?)<\/p>/i);
    const overview = overviewMatch ? stripHtml(overviewMatch[1]) : "";

    const takeawaysMatch = rawContent.match(/<h2>Key Takeaways<\/h2>\s*<ul>([\s\S]*?)<\/ul>/i);
    const keyTakeaways: string[] = [];
    if (takeawaysMatch) {
      for (const m of takeawaysMatch[1].matchAll(/<li>([\s\S]*?)<\/li>/gi)) {
        const text = stripHtml(m[1]);
        if (text) keyTakeaways.push(text);
      }
    }

    const techniquesMatch = rawContent.match(/<h2>Techniques(?:[^<]*)<\/h2>\s*<p>([\s\S]*?)<\/p>/i);
    const techniques = techniquesMatch ? stripHtml(techniquesMatch[1]) : "";

    const seMatch = rawTitle.match(/S(\d+),?\s*Ep\.?\s*(\d+)/i);
    const season = seMatch ? parseInt(seMatch[1], 10) : 0;
    const ep = seMatch ? parseInt(seMatch[2], 10) : 0;

    const title = rawTitle.replace(/^S\d+,?\s*Ep\.?\s*\d+[:\-–]\s*/i, "").trim();
    const dateObj = pubDate ? new Date(pubDate) : new Date(0);
    const date = dateObj.toISOString().slice(0, 10);
    const uuid = guid.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i)?.[0] ?? guid;

    if (uuid) episodes.push({ uuid, title, season, ep, date, rawTitle, link, overview, keyTakeaways, techniques });
  }

  return episodes.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getEpisodes(): Promise<Episode[]> {
  const now = Date.now();
  if (episodeCache && now - episodeCache.fetchedAt < CACHE_TTL_MS) {
    return episodeCache.episodes;
  }
  const xml = await fetchRss();
  const episodes = parseEpisodes(xml);
  episodeCache = { episodes, fetchedAt: now };
  return episodes;
}
