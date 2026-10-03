import { Router } from "express";
import https from "https";

const router = Router();

const WP_API = "https://macbrownflyfish.com/wp-json/wp/v2/posts?per_page=100&_fields=id,title,excerpt,date,slug,link,categories&orderby=date&order=desc";
const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  url: string;
  category: string;
}

// Map WP category IDs → display category
const CAT_MAP: Record<number, string> = {
  418: "Technique", 163: "Technique", 144: "Technique", 435: "Technique",
  362: "Technique", 177: "Technique", 199: "Technique", 765: "Technique",
  274: "Technique", 412: "Technique", 807: "Technique", 865: "Technique",
  190: "Technique", 139: "Technique", 155: "Technique", 182: "Technique",
  429: "Technique", 647: "Technique", 929: "Technique",
  249: "Fishing Reports", 206: "Fishing Reports", 355: "Fishing Reports",
  288: "Fishing Reports", 262: "Fishing Reports", 438: "Fishing Reports",
  528: "Fishing Reports", 830: "Fishing Reports",
  643: "Guide Trips", 677: "Guide Trips", 529: "Guide Trips",
  638: "Trip Stories",
  159: "Instruction", 392: "Instruction",
};

let cache: { posts: BlogPost[]; fetchedAt: number } | null = null;

function fetchJson(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      const chunks: Buffer[] = [];
      res.on("data", (c: Buffer) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
      res.on("error", reject);
    });
    req.on("error", reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error("WP API fetch timeout")); });
  });
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#8217;/g, "'").replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&#8230;/g, "…")
    .replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}

function parsePosts(raw: unknown[]): BlogPost[] {
  return raw.map((item: unknown) => {
    const p = item as {
      id: number;
      title: { rendered: string };
      excerpt: { rendered: string };
      date: string;
      slug: string;
      link: string;
      categories: number[];
    };
    const categoryId = p.categories?.[0] ?? 0;
    const category = CAT_MAP[categoryId] ?? "Technique";
    return {
      id: p.id,
      title: stripHtml(p.title.rendered),
      excerpt: stripHtml(p.excerpt.rendered),
      date: p.date.slice(0, 10),
      slug: p.slug,
      url: p.link,
      category,
    };
  });
}

router.get("/blog-posts", async (req, res) => {
  const now = Date.now();

  if (cache && now - cache.fetchedAt < CACHE_TTL_MS) {
    req.log.info("Serving blog posts from cache");
    res.json({ posts: cache.posts, source: "cache" });
    return;
  }

  try {
    const json = await fetchJson(WP_API);
    const raw = JSON.parse(json) as unknown[];
    const posts = parsePosts(raw);
    cache = { posts, fetchedAt: now };
    req.log.info({ count: posts.length }, "Fetched and cached blog posts from WordPress");
    res.json({ posts, source: "live" });
  } catch (err) {
    req.log.error(err, "Failed to fetch blog posts from WordPress");
    if (cache) {
      res.json({ posts: cache.posts, source: "stale-cache" });
    } else {
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  }
});

export default router;
