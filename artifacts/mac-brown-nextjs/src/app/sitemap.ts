import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

const BASE = "https://macbrownflyfish.com";

// Keep in sync with NOINDEX_SLUGS in blog/[slug]/page.tsx — noindexed posts
// must not appear in the sitemap (conflicting signals to Google).
const NOINDEX_SLUGS = new Set([
  "tuckasegee-fly-fishing-report-2016",
  "tuckasegee-river-delayed-harvest-trout-fishing",
  "epic-trout-fishing-may-bryson-city-nc",
  "deep-creek-fishing-report",
  "fly-fishing-report-bryson-city-nc",
  "nantahala-river-fly-fishing-report",
  "upper-nantahala-river-fly-fishing-report",
  "fall-delayed-harvest-trout-fishing-season-nc",
]);

// lastmod = date content was last meaningfully changed.
// Do NOT use new Date() — Google ignores lastmod that always shows today.
const staticPages = [
  { path: "/", priority: 1.0, freq: "weekly" as const, lastmod: "2026-08-04" },
  { path: "/bio-mac-brown/", priority: 0.9, freq: "monthly" as const, lastmod: "2026-08-04" },
  { path: "/programs-overview/", priority: 0.9, freq: "monthly" as const, lastmod: "2026-07-04" },
  { path: "/fly-fishing-guide-school/", priority: 0.9, freq: "monthly" as const, lastmod: "2026-07-07" },
  { path: "/masterclass-fly-casting-workshop/", priority: 0.9, freq: "monthly" as const, lastmod: "2026-01-15" },
  { path: "/smoky-mountain-weekend-schools/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-01-15" },
  { path: "/fly-casting-mastery-workshop/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-06-29" },
  { path: "/drift-boat-rowing-school/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-04" },
  { path: "/saltwater-fly-casting-elite-masterclass-workshop/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-01-15" },
  { path: "/dry-fly-clinic/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-06-24" },
  { path: "/nymph-fishing-clinic/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-06-24" },
  { path: "/streamer-clinic/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-06-24" },
  { path: "/wet-fly-clinic/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-06-24" },
  { path: "/spey-elite-casting-clinic/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-06-24" },
  { path: "/spey-casting-clinics-nc/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-07" },
  { path: "/saltwater-fly-casting-school-nc/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-07" },
  { path: "/fly-casting-school-north-carolina/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-07" },
  { path: "/trout-fishing-seasons-smokies/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-07" },
  { path: "/great-smoky-mountains-fly-fishing/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/fly-casting-instruction/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-07" },
  { path: "/dry-fly-school-north-carolina/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-07" },
  { path: "/wet-fly-instruction-smokies/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-07" },
  { path: "/nymph-fishing-school-nc/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-07" },
  { path: "/streamer-fishing-masterclass-nc/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-07" },
  { path: "/online-fly-casting-lessons/", priority: 0.8, freq: "monthly" as const, lastmod: "2025-09-01" },
  { path: "/instructional-guided-trips/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/guided-wade-fly-fishing-trips/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-07" },
  { path: "/guided-float-fly-fishing-trips/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-07" },
  { path: "/guided-lake-fly-fishing-trips/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-07" },
  { path: "/group-corporate-fly-fishing/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-06-19" },
  { path: "/fly-fishing-seminars/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-06-19" },
  { path: "/fly-fishing-certifications/", priority: 0.7, freq: "monthly" as const, lastmod: "2025-09-01" },
  { path: "/casting-angles/", priority: 0.7, freq: "monthly" as const, lastmod: "2025-09-01" },
  { path: "/mcleods-highland-fly-fishing/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-04" },
  { path: "/asheville-nc-guided-trout-fishing-trips/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/atlanta-fly-fishing/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/charlotte-fly-fishing/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-15" },
  { path: "/chattanooga-fly-fishing/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-15" },
  { path: "/knoxville-fly-fishing/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/raleigh-fly-fishing/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-15" },
  { path: "/gatlinburg-fly-fishing/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/franklin-nc-fly-fishing/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/highlands-nc-fly-fishing-trips/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/cashiers-nc-guided-trout-fishing/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/sylva-nc-fly-fishing/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/bryson-city-fly-fishing/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-15" },
  { path: "/cherokee-trophy-water/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-07" },
  { path: "/trout-fishing-nc/", priority: 0.7, freq: "monthly" as const, lastmod: "2025-09-01" },
  { path: "/kids-trout-fishing-trips/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-07" },
  { path: "/bryson-city-fly-fishing-report-hatch-chart/", priority: 0.7, freq: "weekly" as const, lastmod: "2026-06-01" },
  { path: "/wnc-fly-fishing-trail/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-07-08" },
  { path: "/learn-to-fly-fish-bryson-city/", priority: 0.7, freq: "monthly" as const, lastmod: "2025-09-01" },
  { path: "/blog/", priority: 0.8, freq: "weekly" as const, lastmod: "2026-07-08" },
  { path: "/podcasts/", priority: 0.7, freq: "weekly" as const, lastmod: "2026-01-01" },
  { path: "/photo-gallery/", priority: 0.6, freq: "monthly" as const, lastmod: "2026-07-04" },
  { path: "/events-calendar/", priority: 0.7, freq: "weekly" as const, lastmod: "2026-07-07" },
  { path: "/testimonials-kudos/", priority: 0.6, freq: "monthly" as const, lastmod: "2026-06-19" },
  { path: "/mission-statement/", priority: 0.5, freq: "monthly" as const, lastmod: "2025-09-01" },
  { path: "/gift-certificates/", priority: 0.6, freq: "monthly" as const, lastmod: "2025-09-01" },
  { path: "/sponsors/", priority: 0.5, freq: "monthly" as const, lastmod: "2025-09-01" },
  { path: "/contact/", priority: 0.7, freq: "monthly" as const, lastmod: "2026-06-24" },
  { path: "/book/", priority: 0.8, freq: "monthly" as const, lastmod: "2026-07-04" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map(({ path, priority, freq, lastmod }) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(lastmod),
      changeFrequency: freq,
      priority,
    })),
    ...blogPosts
      .filter((post) => !NOINDEX_SLUGS.has(post.slug))
      .map((post) => ({
        url: `${BASE}/blog/${post.slug}/`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
  ];
}
