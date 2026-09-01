"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, X } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const GOOGLE_BUSINESS_URL = "https://share.google/BcFWQvmmlacSzEAbU";
const SMOKY_MOUNTAINS_IMAGES_URL = "https://www.google.com/search?q=great+smoky+mountains+images&udm=2";

const photos = [
  { src: `${BASE}/images/smokies-river-fall.webp`,              caption: "Tuckasegee River in full fall color",            category: "Waters", span: "tall"   },
  { src: `${BASE}/images/wild-brown-trout.webp`,                caption: "Wild brown trout — Southern Appalachians",       category: "Fish",   span: "wide"   },
  { src: `${BASE}/images/guide-school-casting.webp`,            caption: "On-water casting instruction",                   category: "School", span: "normal" },
  { src: `${BASE}/images/fly-casting-instruction.webp`,         caption: "FFI Master Casting Instructor at work",          category: "School", span: "normal" },
  { src: `${BASE}/images/smoky-mountains-panorama.webp`,        caption: "Great Smoky Mountains — western North Carolina", category: "Waters", span: "tall"   },
  { src: `${BASE}/images/guide-school-rowing.webp`,             caption: "Students learning to row a drift boat",          category: "School", span: "normal" },
  { src: `${BASE}/images/salmon-river-rowing.webp`,             caption: "Rowing on moving water",                         category: "Waters", span: "normal" },
  { src: `${BASE}/images/fly-school-1.webp`,                    caption: "Fly Fishing Guide School — Bryson City NC",      category: "School", span: "tall"   },
  { src: `${BASE}/images/guide-trip-3.webp`,                    caption: "Guided wade trip on the Tuckasegee",             category: "Waters", span: "normal" },
  { src: `${BASE}/images/advanced-casting-class-atlanta-ga.webp`, caption: "Advanced casting class",                       category: "School", span: "normal" },
  { src: `${BASE}/images/youth-kids-casting-class.webp`,        caption: "Youth casting clinic — next generation",         category: "School", span: "normal" },
];

const galleryFaqs = [
  {
    q: "What do four days at Fly Fishing Guide School actually look like?",
    a: "A mix of on-water casting instruction, drift boat training, and real time on wild trout water in the Great Smoky Mountains. Students spend their days rotating between hands-on coaching, rigging and tactics, and guided sessions on rivers like the Tuckasegee — the same structure shown throughout this gallery.",
  },
  {
    q: "Is Fly Fishing Guide School only for people who want to become professional guides?",
    a: "No. Most students attend simply to become stronger, more confident recreational anglers — not to pursue guiding as a career. The school works equally well for both: everyone trains on the same curriculum and the same water, whether your goal is a lifetime of better fishing or a future behind the oars.",
  },
  {
    q: "Do I need any experience to attend?",
    a: "No experience is necessary. Programs are built to meet beginners exactly where they are, with all instruction designed around a no-guesswork, structured foundation — not trial and error.",
  },
  {
    q: "What rivers and water will I fish at Fly Fishing Guide School?",
    a: "Students train on wild trout water throughout the Great Smoky Mountains region, including the Tuckasegee River, with access to over 2,400 miles of wild trout water in Swain County alone.",
  },
  {
    q: "Is the school suitable for kids or families?",
    a: "Yes. Youth casting clinics are part of the program, and the gallery includes students of all ages — from first-time youth anglers to adults building a lifetime skill.",
  },
];

const CATEGORIES = ["All", "School", "Waters", "Fish"];

type Photo = typeof photos[0];

function GalleryCard({ photo, onClick }: { photo: Photo; onClick: () => void }) {
  return (
    <div
      className={`group relative overflow-hidden cursor-pointer bg-muted/20 ${photo.span === "wide" ? "md:col-span-2" : ""} ${photo.span === "tall" ? "md:row-span-2" : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View photo: ${photo.caption}`}
      onKeyDown={e => e.key === "Enter" && onClick()}
    >
      <div className={`w-full overflow-hidden ${photo.span === "tall" ? "h-[480px]" : "h-[240px]"}`}>
        <img src={photo.src} alt={photo.caption}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/70 block mb-1">{photo.category}</span>
        <p className="text-sm font-medium text-white leading-snug">{photo.caption}</p>
      </div>
    </div>
  );
}

function Lightbox({ photo, onClose, onPrev, onNext }: { photo: Photo; onClose: () => void; onPrev: () => void; onNext: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center" onClick={onClose}>
      <button onClick={onClose} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors" aria-label="Close">
        <X size={28} />
      </button>
      <button onClick={e => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 text-white/60 hover:text-white text-4xl font-thin transition-colors" aria-label="Previous photo">‹</button>
      <div className="max-w-4xl max-h-[85vh] px-16 flex flex-col items-center gap-4" onClick={e => e.stopPropagation()}>
        <img src={photo.src} alt={photo.caption} className="max-h-[75vh] max-w-full object-contain" />
        <div className="text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 block mb-1">{photo.category}</span>
          <p className="text-sm text-white/80 font-light">{photo.caption}</p>
        </div>
      </div>
      <button onClick={e => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 text-white/60 hover:text-white text-4xl font-thin transition-colors" aria-label="Next photo">›</button>
    </div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? photos : photos.filter(p => p.category === activeCategory);

  return (
    <div className="w-full">
      {lightboxIdx !== null && (
        <Lightbox
          photo={filtered[lightboxIdx]}
          onClose={() => setLightboxIdx(null)}
          onPrev={() => setLightboxIdx(i => i !== null ? (i - 1 + filtered.length) % filtered.length : 0)}
          onNext={() => setLightboxIdx(i => i !== null ? (i + 1) % filtered.length : 0)}
        />
      )}

      <section className="pt-36 pb-16 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Bryson City, NC · Great Smoky Mountains · Est. 1987
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground leading-tight mb-8">
            Life on the Water
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Most students come to Fly Fishing Guide School simply to become better anglers — to fish with confidence, read water like a local, and finally cast without fighting the rod. A smaller number use the exact same four days as their first step toward professional guiding.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Either way, you&apos;re training on the same wild trout water in the Great Smoky Mountains, under the same FFI Master Certified Instructors, with 450+ years of combined experience between them. These photos show what those four days actually look like — on the water, in the boat, and on the line.
          </p>
          <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-muted/30 transition-colors">
            View All Photos &amp; Reviews on Google <ArrowRight size={13} />
          </a>
        </div>
      </section>

      <section className="py-8 border-b border-border sticky top-16 z-30 bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground mr-2">Filter</span>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold uppercase tracking-[0.1em] px-4 py-2 transition-colors border ${activeCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-background text-foreground border-border hover:border-primary hover:text-primary"}`}>
              {cat}
              <span className="ml-1.5 text-[10px] opacity-60">
                {cat === "All" ? photos.length : photos.filter(p => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="py-8 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-24">No photos in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-auto">
              {filtered.map((photo, idx) => (
                <GalleryCard key={photo.src} photo={photo} onClick={() => setLightboxIdx(idx)} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Explore the Region</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                The Great Smoky Mountains — Your Classroom
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Great Smoky Mountains National Park is the most visited national park in America —
                and for good reason. Ancient hardwood forests, cascading waterfalls, wild trout streams,
                and mountain ridges that turn gold every October. This is the landscape you&apos;ll be fishing
                and learning in for all four days.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Browse thousands of regional photos from across western North Carolina — the rivers,
                the peaks, the wildlife, and the water you&apos;ll be standing in.
              </p>
              <a href={SMOKY_MOUNTAINS_IMAGES_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-muted/30 transition-colors">
                Explore Smoky Mountains Images <ArrowRight size={13} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { src: `${BASE}/images/smoky-mountains-panorama.webp`, alt: "Great Smoky Mountains panorama — Fly Fishing Guide School, Bryson City NC" },
                { src: `${BASE}/images/smokies-river-fall.webp`, alt: "Tuckasegee River in fall — fly fishing near Bryson City NC" },
                { src: `${BASE}/images/salmon-river-rowing.webp`, alt: "Rowing a drift boat on the Tuckasegee River — Fly Fishing Guide School" },
                { src: `${BASE}/images/guide-trip-3.webp`, alt: "Student wading a mountain trout stream — Fly Fishing Guide School, Bryson City NC" },
              ].map(({ src, alt }) => (
                <div key={src} className="h-48 overflow-hidden">
                  <img src={src} alt={alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            See More on Google &amp; Leave a Review
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Our full photo library lives on our Google Business page — and if you&apos;ve attended the school,
            we&apos;d be honored if you shared your experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary/90 transition-colors">
              View Us on Google <ArrowRight size={14} />
            </a>
            <a href="https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsdiI1n6cGQ" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-muted/30 transition-colors">
              Leave a Google Review <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">Questions about the school</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight">
            Common questions
          </h2>
          <div className="divide-y divide-border">
            {galleryFaqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                  <h3 className="font-serif text-lg font-bold text-foreground group-open:text-primary transition-colors pr-4">{faq.q}</h3>
                  <ChevronDown className="w-5 h-5 text-primary shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to be in the photos?
          </h2>
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            Schools fill months in advance. Reserve your spot and join us on the water.
          </p>
          <Link href="/reservation-form/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary/90 transition-colors">
            Reserve Your Spot <ArrowRight size={14} />
          </Link>
          <div className="flex justify-center gap-6 mt-6 text-xs font-medium uppercase tracking-[0.15em]">
            <Link href="/fly-fishing-guide-school/" className="text-primary hover:underline">School Overview</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link href="/meet-rowing-fly-casting-fly-fishing-instructors/" className="text-primary hover:underline">Meet the Instructors</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
