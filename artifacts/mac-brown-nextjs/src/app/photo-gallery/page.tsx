import type { Metadata } from "next";
import { img } from "@/lib/asset";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import GalleryGrid from "./gallery-grid";

const mbffFaqs = [
  {
    q: "What types of trips and experiences does Mac Brown Fly Fish offer?",
    a: "Mac Brown Fly Fish offers guided wade trips, drift boat float trips, lake fly fishing, and a full range of casting schools and clinics — including the Fly Fishing Guide School, Masterclass Casting Workshop, Smoky Mountain Weekend School, Spey Clinic, and Saltwater Clinic. Youth casting programs and group instruction are also available.",
  },
  {
    q: "Where does Mac Brown guide and teach fly fishing?",
    a: "Mac Brown is based in Bryson City, NC, guiding on the Tuckasegee River, the Nantahala River, and throughout the Great Smoky Mountains region. Specialty programs have also taken students to Montana, the Salmon River, and other destination waters.",
  },
  {
    q: "Do I need experience to book a guided trip or school?",
    a: "No experience is necessary. Guided trips and schools are designed for all skill levels — from first-time anglers to experienced fly fishers looking to sharpen specific techniques. Mac Brown and his instructors meet every student exactly where they are.",
  },
  {
    q: "Does Mac Brown offer fly fishing for kids and families?",
    a: "Yes. Youth casting clinics and family-friendly guided trips are a regular part of the program, and many of the photos in this gallery feature young anglers landing their first wild trout on the Tuckasegee.",
  },
  {
    q: "What makes the Smoky Mountains such a great fly fishing destination?",
    a: "Great Smoky Mountains National Park protects the headwaters of every stream in western North Carolina — no agriculture, no development upstream. The result is some of the highest densities of wild native brook trout, rainbows, and brown trout in the eastern United States, year-round.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Fly Fishing Photo Gallery — Smoky Mountain Wild Trout" },
  description: "Photos from the rivers and streams of Western North Carolina. Wild trout, guided trips, casting schools, and mountain scenery from Mac Brown Fly Fish.",
  alternates: { canonical: "https://macbrownflyfish.com/photo-gallery/" },
  openGraph: {
    title: "Fly Fishing Photo Gallery | Mac Brown Fly Fish",
    description: "Photos from guided trips, casting schools, and the wild rivers of the Great Smoky Mountains.",
    url: "https://macbrownflyfish.com/photo-gallery/",
  },
};

export default function PhotoGallery() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What types of trips and experiences does Mac Brown Fly Fish offer?",
            "acceptedAnswer": { "@type": "Answer", "text": "Mac Brown Fly Fish offers guided wade trips, drift boat float trips, lake fly fishing, and casting schools and clinics including the Fly Fishing Guide School, Masterclass Casting Workshop, Smoky Mountain Weekend School, Spey Clinic, and Saltwater Clinic. Youth casting programs and group instruction are also available." }
          },
          {
            "@type": "Question",
            "name": "Where does Mac Brown guide and teach fly fishing?",
            "acceptedAnswer": { "@type": "Answer", "text": "Mac Brown is based in Bryson City, NC, guiding on the Tuckasegee River, the Nantahala River, and throughout the Great Smoky Mountains region. Specialty programs have also taken students to Montana, the Salmon River, and other destination waters." }
          },
          {
            "@type": "Question",
            "name": "Do I need experience to book a guided trip or school with Mac Brown Fly Fish?",
            "acceptedAnswer": { "@type": "Answer", "text": "No experience is necessary. Guided trips and schools are designed for all skill levels — from first-time anglers to experienced fly fishers looking to sharpen specific techniques." }
          },
          {
            "@type": "Question",
            "name": "Does Mac Brown Fly Fish offer fly fishing for kids and families?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Youth casting clinics and family-friendly guided trips are a regular part of the program, with many gallery photos featuring young anglers landing their first wild trout on the Tuckasegee." }
          },
          {
            "@type": "Question",
            "name": "What makes the Smoky Mountains a great fly fishing destination?",
            "acceptedAnswer": { "@type": "Answer", "text": "Great Smoky Mountains National Park protects the headwaters of every stream in western North Carolina — no agriculture, no development upstream — resulting in some of the highest densities of wild native brook trout, rainbows, and brown trout in the eastern United States, year-round." }
          },
        ],
      }) }} />
    <div className="w-full">
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src={img("/images/appalachian-panorama.webp")} srcSet={`${img("/images/mobile/appalachian-panorama.webp")} 800w, ${img("/images/appalachian-panorama.webp")} 1920w`} sizes="100vw" alt="Appalachian panorama — Mac Brown Fly Fish" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-start justify-end pb-16 md:pb-24 px-8 md:px-12 text-left">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Smoky Mountains & Beyond</p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">Photo Gallery</h1>
        </div>
      </section>

      {/* AEO */}
      <section className="py-12 border-b border-border">
        <div className="max-w-4xl mx-auto px-8">
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            These photos span nearly four decades of guiding and teaching fly fishing in the Great Smoky Mountains — wild trout on the Tuckasegee and Nantahala, drift boat float trips, casting schools and clinics, youth programs, and the mountain landscape that makes it all possible. Mac Brown is an FFI Master Certified Casting Instructor based in Bryson City, NC since 1987, and one of the most recognized fly fishing educators in the country.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mt-4 font-serif italic">
            Every photo here started with a single trip — and yours is waiting.
          </p>
        </div>
      </section>

      <GalleryGrid />

      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">About Mac Brown Fly Fish</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight">
            Common questions
          </h2>
          <div className="divide-y divide-border">
            {mbffFaqs.map((faq) => (
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

      <section className="bg-[hsl(215,55%,28%)] py-20 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Bryson City, NC</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to Make Your Own Memories?</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Every photo here started with a single trip. Wade a wild Smoky Mountain stream, learn to cast with an FFI Master Instructor, or spend four days training to guide — your story starts with a reservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-[hsl(215,55%,28%)] text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              Reserve Now <ArrowRight size={13} />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors">
              Ask a Question
            </Link>
          </div>
          <p className="mt-8 text-white/50 text-sm">Call us at <a href="tel:+18287361469" className="text-white/70 hover:text-white transition-colors">(828) 736-1469</a></p>
        </div>
      </section>
    </div>
    </>
  );
}
