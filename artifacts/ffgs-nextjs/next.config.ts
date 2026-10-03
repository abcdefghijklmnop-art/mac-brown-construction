import type { NextConfig } from "next";

const basePath = process.env.BASE_PATH?.replace(/\/$/, "") ?? "";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  basePath,
  ...(isDev ? { output: "export" as const } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  transpilePackages: ["@workspace/schedule"],
  allowedDevOrigins: ["*.spock.replit.dev", "*.replit.dev"],
  async redirects() {
    return [
      // WordPress query-param URLs → redirect rather than just block
      // has: [{type:"query"}] matches the param regardless of value (including no value)
      { source: "/", has: [{ type: "query", key: "cat" }],     destination: "/blog/", permanent: true },
      { source: "/", has: [{ type: "query", key: "p" }],       destination: "/blog/", permanent: true },
      { source: "/", has: [{ type: "query", key: "page_id" }], destination: "/",      permanent: true },

      // /blog-post/ → /blog/ (permanent, wildcard — covers all old blog-post URLs)
      { source: "/blog-post/:path*", destination: "/blog/:path*", permanent: true },

      // AMP catch-alls — direct one-hop for known AMP URLs to avoid chain redirects
      { source: "/raft-oar-frames/setting-up-an-oar-frame/amp/", destination: "/blog/setting-up-an-oar-frame/", permanent: true },
      { source: "/:path*/amp/", destination: "/:path*/", permanent: true },
      // One-hop ?amp fixes — paths whose base URL also redirects (prevents 2-hop chain)
      { source: "/waiver-form/", has: [{ type: "query", key: "amp" }], destination: "/reservation-form/", permanent: true },
      // One-hop ?noamp fixes — paths whose base URL also redirects (prevents 2-hop chain)
      { source: "/fly-fishing-instruction/fly-fishing-and-fly-casting-entropy-or-evolution/", has: [{ type: "query", key: "noamp" }], destination: "/blog/fly-fishing-and-fly-casting-entropy-or-evolution/", permanent: true },
      // NOTE: self-referencing ?amp/?noamp redirects (same source/destination path) were removed
      // 2026-07-09 — they looped forever because redirects() runs before middleware.ts, which
      // already strips amp/noamp/nonamp query params generically for every path (including "/").


      // --- Old page slugs that changed ---
      {
        source: "/meet-instructors/",
        destination: "/meet-rowing-fly-casting-fly-fishing-instructors/",
        permanent: true,
      },
      {
        source: "/top-fly-fishing-guide-school-atlanta-ga/",
        destination: "/atlanta-fly-fishing-guide-school/",
        permanent: true,
      },
      {
        source: "/newsletter/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/testimonials/testimonials-fly-fishing-guide-school/",
        destination: "/testimonials-kudos/",
        permanent: true,
      },
      {
        source: "/waiver-form/",
        destination: "/reservation-form/",
        permanent: true,
      },

      // --- Blog posts: old nested WP paths → new /blog/[slug] ---
      {
        source: "/raft-oar-frames/setting-up-an-oar-frame/",
        destination: "/blog/setting-up-an-oar-frame/",
        permanent: true,
      },
      {
        source: "/loop-publication/loop-publication-2017-ffi-fair/",
        destination: "/blog/loop-publication-2017-ffi-fair/",
        permanent: true,
      },
      {
        source: "/bryson-city/southern-appalachian-fly-fishing-museum-induction/",
        destination: "/blog/southern-appalachian-fly-fishing-museum-induction/",
        permanent: true,
      },
      {
        source: "/fall-fly-fishing/evolution-fly-casting-instruction-fly-fishing-lessons/",
        destination: "/blog/evolution-fly-casting-instruction-fly-fishing-lessons/",
        permanent: true,
      },
      {
        source: "/fly-fishing-guide-school/fly-fishing-classes-north-carolina-smoky-mountains/",
        destination: "/blog/fly-fishing-classes-north-carolina-smoky-mountains/",
        permanent: true,
      },
      {
        source: "/fly-fishing-instruction/learn-how-become-fly-fishing-guide-instructor/",
        destination: "/blog/learn-how-to-become-a-fly-fishing-guide-and-instructor/",
        permanent: true,
      },
      {
        source: "/fly-fishing-instruction/fly-fishing-and-fly-casting-entropy-or-evolution/",
        destination: "/blog/fly-fishing-and-fly-casting-entropy-or-evolution/",
        permanent: true,
      },
      {
        source: "/fly-fishing-instruction/fly-casting-style-substance-intent/",
        destination: "/blog/fly-casting-style-substance-intent/",
        permanent: true,
      },
      {
        source: "/angling-techniques/get-down-nymphing/",
        destination: "/blog/get-down-nymphing/",
        permanent: true,
      },

      // --- WordPress category archive pages → blog index ---
      {
        source: "/category/:slug*/",
        destination: "/blog/",
        permanent: true,
      },

      // --- Paginated tag pages (/tag/foo/page/2/) ---
      { source: "/tag/:tag/page/:num/", destination: "/blog/", permanent: true },

      // --- Tags → the specific blog posts that contain them ---
      // Tags from "Southern Appalachian Fly Fishing Museum Induction"
      { source: "/tag/simons-welter/", destination: "/blog/southern-appalachian-fly-fishing-museum-induction/", permanent: true },
      { source: "/tag/chris-lee/", destination: "/blog/southern-appalachian-fly-fishing-museum-induction/", permanent: true },
      { source: "/tag/jim-estes/", destination: "/blog/southern-appalachian-fly-fishing-museum-induction/", permanent: true },
      { source: "/tag/martin-droz/", destination: "/blog/southern-appalachian-fly-fishing-museum-induction/", permanent: true },
      { source: "/tag/carl-mcneil/", destination: "/blog/southern-appalachian-fly-fishing-museum-induction/", permanent: true },
      { source: "/tag/paul-arden/", destination: "/blog/southern-appalachian-fly-fishing-museum-induction/", permanent: true },
      { source: "/tag/pat-wise/", destination: "/blog/southern-appalachian-fly-fishing-museum-induction/", permanent: true },
      { source: "/tag/lee-cummings/", destination: "/blog/southern-appalachian-fly-fishing-museum-induction/", permanent: true },
      { source: "/tag/brian-henderson/", destination: "/blog/southern-appalachian-fly-fishing-museum-induction/", permanent: true },
      { source: "/tag/michael-bradley/", destination: "/blog/southern-appalachian-fly-fishing-museum-induction/", permanent: true },
      { source: "/tag/davy-wotton/", destination: "/blog/southern-appalachian-fly-fishing-museum-induction/", permanent: true },
      // Tags from "Loop Publication & 2017 FFI Fair" (bruce-richards has a dedicated section there)
      { source: "/tag/todd-somsel/", destination: "/blog/loop-publication-2017-ffi-fair/", permanent: true },
      { source: "/tag/bruce-williams/", destination: "/blog/loop-publication-2017-ffi-fair/", permanent: true },
      { source: "/tag/lee-davidson/", destination: "/blog/loop-publication-2017-ffi-fair/", permanent: true },
      { source: "/tag/bruce-richards/", destination: "/blog/loop-publication-2017-ffi-fair/", permanent: true },
      { source: "/tag/carl-zarelli/", destination: "/blog/loop-publication-2017-ffi-fair/", permanent: true },
      { source: "/tag/david-lambert/", destination: "/blog/loop-publication-2017-ffi-fair/", permanent: true },
      { source: "/tag/whitney-gould/", destination: "/blog/loop-publication-2017-ffi-fair/", permanent: true },
      { source: "/tag/jason-borger/", destination: "/blog/loop-publication-2017-ffi-fair/", permanent: true },
      // Tags from "Fly Casting Style, Substance & Intent" (mark-huber inspired the whole post)
      { source: "/tag/al-kyte/", destination: "/blog/fly-casting-style-substance-intent/", permanent: true },
      { source: "/tag/al-buhr/", destination: "/blog/fly-casting-style-substance-intent/", permanent: true },
      { source: "/tag/mark-huber/", destination: "/blog/fly-casting-style-substance-intent/", permanent: true },
      { source: "/tag/chris-korich/", destination: "/blog/fly-casting-style-substance-intent/", permanent: true },
      { source: "/tag/mac-brown-fly-fish/", destination: "/blog/fly-casting-style-substance-intent/", permanent: true },
      { source: "/tag/teaching/", destination: "/blog/fly-casting-style-substance-intent/", permanent: true },
      // Tags from "Fly Fishing Classes in NC Smoky Mountains"
      { source: "/tag/nantahala-national-forest/", destination: "/blog/fly-fishing-classes-north-carolina-smoky-mountains/", permanent: true },
      // --- Catch-all for all remaining tags → blog index ---
      {
        source: "/tag/:slug*/",
        destination: "/blog/",
        permanent: true,
      },

      // --- Author archive pages → blog index ---
      { source: "/author/:slug*/", destination: "/blog/", permanent: true },

      // --- Missing pages from old WordPress site ---
      {
        source: "/contact/",
        destination: "/reservation-form/",
        permanent: true,
      },
      {
        source: "/meet-our-instructors/",
        destination: "/meet-rowing-fly-casting-fly-fishing-instructors/",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "/testimonials-kudos/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
