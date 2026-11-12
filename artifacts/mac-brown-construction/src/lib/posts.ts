// Single source of truth for blog posts: titles, paths, and dates.
// When you edit a post, update its `modified` date here. The Article schema,
// the visible "Updated" date, the blog index, and sitemap.xml all read from it.

export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  path: string;
  image: string;
  published: string; // YYYY-MM-DD
  modified: string; // YYYY-MM-DD
};

export const POSTS: Post[] = [
  {
    slug: "timber-frame-hybrid-construction",
    title: "Timber Frame Hybrid Construction",
    description:
      "Timber frame hybrid homes using indigenous local hardwoods, wide wall plates, and P-2000 insulation for beautiful, energy-efficient construction in the Smoky Mountains — Mac Brown Construction.",
    excerpt:
      "Timber frame hybrid construction can be aesthetically pleasing due to the craftsmanship of using indigenous local hardwoods. The overall project combines timber with state-of-the-art insulating practices to yield very high efficiency, maintaining comfort in the home.",
    category: "Wall Plates",
    path: "/wall-plates/timber-frame-hybrid-construction/",
    image: "/images/timber-frame.webp",
    published: "2024-12-15",
    modified: "2026-11-11",
  },
  {
    slug: "frost-proof-footings",
    title: "Frost Proof Footings",
    description:
      "How ICF foundations and frost proof footings using 2-inch EPS foam protect mountain homes from ground energy loss — a cost-effective building technique from Mac Brown Construction, Bryson City, NC.",
    excerpt:
      "With cold weather around, this is a good time to discuss the use of frost proof footings. The use of EPS foam in two inch thickness makes a huge difference, especially when used with ICFs (insulated concrete forms).",
    category: "Foundations",
    path: "/foundations/frost-proof-footings/",
    image: "/images/icf-foundation.webp",
    published: "2024-12-01",
    modified: "2026-11-11",
  },
];

export function getPost(slug: string): Post {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) throw new Error(`Unknown post: ${slug}`);
  return post;
}

export function formatDate(d: string): string {
  return new Date(`${d}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

// Last-modified dates for non-blog pages (used by sitemap.xml).
// Update a page's date here whenever its content changes.
export const PAGE_DATES: Record<string, string> = {
  "/": "2026-11-11",
  "/about/": "2026-11-11",
  "/custom-home-builder/": "2026-11-11",
  "/contact/": "2026-11-11",
};
