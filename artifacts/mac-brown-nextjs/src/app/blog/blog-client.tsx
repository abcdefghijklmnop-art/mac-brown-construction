"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { img } from "@/lib/asset";

type Cat = "All" | "Technique" | "Fishing Reports" | "Guide Trips" | "Trip Stories" | "Instruction";
const cats: Cat[] = ["All", "Technique", "Fishing Reports", "Guide Trips", "Trip Stories", "Instruction"];

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

const visiblePosts = blogPosts.filter(p => !p.hidden);

export default function Blog() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? visiblePosts : visiblePosts.filter(p => p.category === active);
  const featured = visiblePosts[0];
  const grid = active === "All" ? filtered.slice(1) : filtered;

  return (
    <div className="w-full">
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={img("/images/rainbow-trout.webp")} alt="Rainbow trout caught fly fishing in Western North Carolina — Mac Brown Fly Fish" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Reports & Insights</p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">Fly Fishing Blog — Smoky Mountains & Bryson City, NC</h1>
        </div>
      </section>

      <section className="py-10 border-b border-border/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground leading-relaxed">
            Mac Brown Fly Fish has been writing about fly fishing since 1987 — decades of articles covering fly casting mechanics, fly fishing definitions, fly fishing terminology, hatch matching, teaching, nymph fishing, streamer tactics, leader construction, dry fly presentation, and guided fly fishing in the Smoky Mountains of Western North Carolina. Written by Mac Brown, the only FFI Master Casting Instructor in the state, with 55+ years of on-water experience and university research in fly casting and tackle performance at Western Carolina University.
          </p>
        </div>
      </section>

      {active === "All" && (
        <section className="py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={img(featured.img)} alt={featured.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">{featured.category} &mdash; {formatDate(featured.date)}</p>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">{featured.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 line-clamp-4">{featured.excerpt}</p>
                <Link href={`/blog/${featured.slug}`} className="inline-flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-[0.15em] hover:gap-4 transition-all">
                  Read Article <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 mb-14 overflow-x-auto pb-1">
            {cats.map(c => (
              <button key={c} onClick={() => setActive(c)} className={`text-xs font-medium uppercase tracking-[0.15em] pb-1 whitespace-nowrap border-b-2 transition-colors ${active === c ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {grid.map(p => (
              <Link key={p.id} href={`/blog/${p.slug}`} className="group block">
                <div className="aspect-[16/10] overflow-hidden mb-5">
                  <img src={img(p.img)} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-3">{p.category} &mdash; {formatDate(p.date)}</p>
                <h3 className="font-serif text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">{p.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-[0.15em] group-hover:gap-4 transition-all">Read <ArrowRight size={12} /></span>
              </Link>
            ))}
          </div>
          {grid.length === 0 && <p className="text-center text-muted-foreground py-20">No posts in this category.</p>}
          <p className="text-center text-muted-foreground text-xs mt-16 uppercase tracking-widest">{filtered.length} article{filtered.length !== 1 ? "s" : ""}</p>
        </div>
      </section>
    </div>
  );
}
