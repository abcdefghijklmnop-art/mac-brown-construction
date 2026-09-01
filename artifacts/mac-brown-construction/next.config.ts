import type { NextConfig } from "next";

const basePath = process.env.BASE_PATH?.replace(/\/$/, "") ?? "";

const nextConfig: NextConfig = {
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: ["*.spock.replit.dev", "*.replit.dev"],
  async redirects() {
    return [
      // About — old WordPress paths → /about/
      { source: "/custom-home-builder-and-contractor", destination: "/about/", permanent: true },
      { source: "/custom-home-builder-and-contractor/", destination: "/about/", permanent: true },
      { source: "/bryson-city-general-contractor", destination: "/about/", permanent: true },
      { source: "/bryson-city-general-contractor/", destination: "/about/", permanent: true },
      { source: "/author/admin", destination: "/about/", permanent: true },
      { source: "/author/admin/", destination: "/about/", permanent: true },

      // Blog posts — old /blog/ paths → canonical category-based URLs
      { source: "/blog/timber-frame-hybrid-construction", destination: "/wall-plates/timber-frame-hybrid-construction/", permanent: true },
      { source: "/blog/timber-frame-hybrid-construction/", destination: "/wall-plates/timber-frame-hybrid-construction/", permanent: true },
      { source: "/blog/frost-proof-footings", destination: "/foundations/frost-proof-footings/", permanent: true },
      { source: "/blog/frost-proof-footings/", destination: "/foundations/frost-proof-footings/", permanent: true },

      // Legacy blog index URLs
      { source: "/blog-post", destination: "/blog/", permanent: true },
      { source: "/blog-post/", destination: "/blog/", permanent: true },

      // Legacy category + tag archives
      { source: "/category/foundations", destination: "/blog/", permanent: true },
      { source: "/category/foundations/", destination: "/blog/", permanent: true },
      { source: "/category/wall-plates", destination: "/blog/", permanent: true },
      { source: "/category/wall-plates/", destination: "/blog/", permanent: true },
      { source: "/tag/:tag*", destination: "/blog/", permanent: true },
    ];
  },
  output: "export",
};

export default nextConfig;
