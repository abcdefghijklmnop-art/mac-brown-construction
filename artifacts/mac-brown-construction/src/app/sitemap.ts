import type { MetadataRoute } from "next";
import { POSTS, PAGE_DATES } from "@/lib/posts";
import { SITE_ORIGIN } from "@/lib/schema";

export const dynamic = "force-static";

// Generates /sitemap.xml at build time with real per-page lastmod dates.
export default function sitemap(): MetadataRoute.Sitemap {
  const latestPost = POSTS.map((p) => p.modified).sort().at(-1)!;
  return [
    ...Object.entries(PAGE_DATES).map(([path, date]) => ({
      url: `${SITE_ORIGIN}${path}`,
      lastModified: date,
    })),
    { url: `${SITE_ORIGIN}/blog/`, lastModified: latestPost },
    ...POSTS.map((p) => ({ url: `${SITE_ORIGIN}${p.path}`, lastModified: p.modified })),
  ];
}
