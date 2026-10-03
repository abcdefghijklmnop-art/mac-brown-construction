import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { img } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "From the River — Fly Fishing Guide School Blog" },
  description:
    "Fly casting technique, nymphing, reading water, and guide training tips from Mac Brown's Fly Fishing Guide School in Bryson City, NC.",
  alternates: { canonical: "https://flyfishingguideschool.com/blog/" },
  openGraph: {
    title: "From the River — Fishing Blog | Fly Fishing Guide School",
    description:
      "Articles on fly casting technique, nymphing, reading water, and guide training from Mac Brown's Fly Fishing Guide School in Bryson City, NC.",
    url: "https://flyfishingguideschool.com/blog/",
    type: "website",
    images: [{ url: "/images/smokies-river-fall.webp", width: 1920, height: 1280, alt: "Fly fishing the Smoky Mountains — Fly Fishing Guide School" }],
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogListing() {
  const visible = blogPosts.filter((p) => !p.hidden);
  return (
    <>
      <section className="relative h-64 md:h-80 flex items-end justify-center overflow-hidden">
        <img
          src={img("/images/smokies-river-fall.webp")}
          alt="Smoky Mountains river"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center pb-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            From the Water
          </h1>
          <p className="mt-2 text-white/80 text-lg italic">
            Articles on technique, reading water, and the craft of guiding
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-1">
          {visible.map((post) => (
            <article
              key={post.slug}
              className="grid md:grid-cols-[280px_1fr] gap-0 overflow-hidden border border-border rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <Link href={`/blog/${post.slug}/`} className="block overflow-hidden">
                <img
                  src={img(post.img)}
                  alt={post.title}
                  className="w-full h-52 md:h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3 leading-snug">
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="mt-5 inline-block text-xs font-semibold uppercase tracking-widest text-primary hover:underline"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
