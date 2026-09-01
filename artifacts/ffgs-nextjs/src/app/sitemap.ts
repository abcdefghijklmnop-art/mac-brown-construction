import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";
import { instructors } from "@/data/instructors-data";

const BASE = "https://flyfishingguideschool.com";

// lastmod = date content was last meaningfully changed.
// Do NOT use new Date() — Google ignores lastmod that always shows today.
const staticPages = [
  { path: "/", priority: 1.0, freq: "weekly" as const, lastmod: "2026-08-04" },
  { path: "/fly-fishing-guide-school/", priority: 0.9, freq: "monthly" as const, lastmod: "2026-07-07" },
  { path: "/meet-rowing-fly-casting-fly-fishing-instructors/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-04" },
  { path: "/guide-school-locations/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-07" },
  { path: "/contact-information-best-fly-fishing-guide-school/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-06-24" },
  { path: "/reservation-form/", priority: 0.7, freq: "monthly" as const, lastmod: "2025-09-01" },
  { path: "/blog/", priority: 0.7, freq: "weekly" as const, lastmod: "2026-07-08" },
  { path: "/gallery-fly-fishing-guide-school/", priority: 0.6, freq: "monthly" as const, lastmod: "2026-07-04" },
  { path: "/necessary-items-fly-fishing-guide-school/", priority: 0.6, freq: "monthly" as const, lastmod: "2026-07-04" },
  { path: "/testimonials-kudos/", priority: 0.6, freq: "monthly" as const, lastmod: "2025-09-01" },
  { path: "/is-fly-fishing-guide-school-worth-it/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-08-04" },
  { path: "/fly-fishing-guide-certification/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-04" },
  { path: "/mission-statement/", priority: 0.5, freq: "monthly" as const, lastmod: "2026-07-04" },
  { path: "/new-to-fly-fishing/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-08-04" },
  { path: "/smoky-mountain-fly-fishing-school/", priority: 0.85, freq: "monthly" as const, lastmod: "2026-07-07" },
  { path: "/asheville-fly-fishing-guide-school/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/atlanta-fly-fishing-guide-school/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/birmingham-fly-fishing-guide-school/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/bryson-city-fly-fishing-guide-school/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/charlotte-fly-fishing-guide-school/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/chattanooga-fly-fishing-guide-school/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/greenville-sc-fly-fishing-guide-school/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/knoxville-fly-fishing-guide-school/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/nashville-fly-fishing-guide-school/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/raleigh-fly-fishing-guide-school/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map(({ path, priority, freq, lastmod }) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(lastmod),
      changeFrequency: freq,
      priority,
    })),
    ...blogPosts.filter((p) => !p.hidden).map((post) => ({
      url: `${BASE}/blog/${post.slug}/`,
      lastModified: new Date(post.dateModified ?? post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...instructors.map((instructor) => ({
      url: `${BASE}/instructors/${instructor.slug}/`,
      lastModified: new Date("2026-06-23"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
