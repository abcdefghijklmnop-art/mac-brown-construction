import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // Next.js build artifacts — never pages
          "/_next/static/",
          "/_next/image/",
          // WordPress query-param junk (belt + suspenders with the next.config.ts redirects)
          "/?page_id=",
          "/?p=",
          "/?cat=",
          "/?cat",
          "/?amp",
          "/?noamp=",
          "/?nonamp=",
          // WordPress structural URLs
          "/category/",
          "/feed/",
          "/blog/page/",
          "/wp-admin/",
          "/wp-login.php",
          "/wp-login/",
          "/wp-content/themes/",
          "/xmlrpc.php",
          // NOTE: /tag/ intentionally NOT blocked — all /tag/* URLs have 301 redirects in
          // next.config.ts. Blocking /tag/ prevents Googlebot from following those redirects,
          // which leaves stale indexed tag pages in the index forever.
        ],
      },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Meta-ExternalFetcher", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
    ],
    sitemap: "https://flyfishingguideschool.com/sitemap.xml",
  };
}
