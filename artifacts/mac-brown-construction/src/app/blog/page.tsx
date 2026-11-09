import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Green Building Tips & Home Construction Insights",
  description:
    "Green building techniques, ICF foundation tips, timber frame construction, and energy-efficient home building insights from Mac Brown Construction in Bryson City, NC.",
  alternates: { canonical: "/blog/" },
};

const posts = [
  {
    title: "Timber Frame Hybrid Construction",
    excerpt:
      "Timber frame hybrid construction can be aesthetically pleasing due to the craftsmanship of using indigenous local hardwoods. The overall project combines timber with state-of-the-art insulating practices to yield very high efficiency, maintaining comfort in the home.",
    href: "/wall-plates/timber-frame-hybrid-construction/",
    img: img("/images/timber-frame.webp"),
    imgMobile: img("/images/mobile/timber-frame.webp"),
    category: "Wall Plates",
    tags: ["timber-frame", "wall-plates", "p-2000"],
  },
  {
    title: "Frost Proof Footings",
    excerpt:
      "With cold weather around, this is a good time to discuss the use of frost proof footings. The use of EPS foam in two inch thickness makes a huge difference, especially when used with ICFs (insulated concrete forms).",
    href: "/foundations/frost-proof-footings/",
    img: img("/images/icf-foundation.webp"),
    imgMobile: img("/images/mobile/icf-foundation.webp"),
    category: "Foundations",
    tags: ["frost-proof-footings", "icf", "bryson-city"],
  },
];

export default function Page() {
  return (
    <>
      {/* Header */}
      <div className="bg-primary py-20 px-6 text-center pt-32">
        <p className="text-primary-foreground/80 text-xs font-semibold uppercase tracking-[0.35em] mb-3">Mac Brown Construction</p>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground">Building Tips & Insights</h1>
        <p className="text-primary-foreground/80 text-sm mt-4 max-w-xl mx-auto">
          Green building techniques, energy-saving methods, and construction insights from western North Carolina.
        </p>
      </div>

      {/* Posts */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          {posts.map((post) => (
            <article key={post.href} className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-border overflow-hidden group">
              <div className="md:col-span-2 aspect-[4/3] md:aspect-auto overflow-hidden">
                <img
                  src={post.img}
                  srcSet={post.imgMobile ? `${post.imgMobile} 1280w, ${post.img} 1920w` : undefined}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-48"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="md:col-span-3 p-8 flex flex-col">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-3">{post.category}</p>
                <h2 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  <Link href={post.href}>{post.title}</Link>
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <Link
                    href={post.href}
                    className="text-xs font-semibold uppercase tracking-[0.15em] text-primary flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight size={12} />
                  </Link>
                  <div className="flex gap-2 flex-wrap justify-end">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-medium uppercase tracking-[0.1em] bg-muted px-2 py-0.5 text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
