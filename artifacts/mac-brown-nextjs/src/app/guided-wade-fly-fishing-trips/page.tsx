import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { PriceTag } from "@/components/price-tag";
import { serviceSchema } from "@/lib/schema";
import FaqSection from "@/components/faq-section";
import type { FaqItem } from "@/components/faq-section";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Guided Wade Fly Fishing Trips — Smoky Mountains, NC" },
  description: "Wade fish wild trout streams in Great Smoky Mountains National Park with an expert guide. Guided wade trips in Bryson City, NC — all gear provided.",
  alternates: { canonical: "https://macbrownflyfish.com/guided-wade-fly-fishing-trips/" },
  openGraph: {
    title: "Guided Wade Fly Fishing Trips — Great Smoky Mountains, NC",
    description: "Wade fish wild mountain streams and GSMNP waters with an FFI Master Instructor. Guided wade trips in Bryson City, NC — all skill levels, all gear provided.",
    url: "https://macbrownflyfish.com/guided-wade-fly-fishing-trips/",
    images: [{ url: "https://macbrownflyfish.com/images/client-wading-1.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guided Wade Fly Fishing Trips — Great Smoky Mountains, NC",
    images: ["https://macbrownflyfish.com/images/client-wading-1.webp"],
  },
};

const wadeFaqs: FaqItem[] = [
  { q: "Who is Mac Brown?", a: "Mac Brown is the only FFI Master Casting Instructor in North Carolina — the highest casting credential awarded by Fly Fishers International — and a certified casting examiner for FFI. He is the author of Casting Angles and has been guiding wade trips in the Great Smoky Mountains since 1987. Every wade trip is instructional at its core — you leave understanding your fishing, not just having fished." },
  { q: "What fish will we target on a wade trip?", a: "Wild rainbow and brown trout are the primary targets on most wade trips. Great Smoky Mountains National Park streams also hold native brook trout in the upper elevations — one of the most beautiful and increasingly rare trout in North America. Mac reads the water, selects the flies, and positions you exactly where the fish are holding based on current conditions and season." },
  { q: "What is the Delayed Harvest section and when does it fish?", a: "The Delayed Harvest section of the Tuckasegee River runs from October through May and is stocked with large numbers of rainbow and brown trout — all catch-and-release. The concentrated fish and catch-and-release pressure make DH trout selective and technically interesting to fish. Outside October–May, wild trout on GSMNP streams and the upper Tuckasegee become the primary focus." },
  { q: "Do I need prior experience?", a: "No experience needed. Every wade trip is instructional — Mac meets you exactly where you are and builds from there. Beginners learn fly casting, reading water, and drag-free presentation from the ground up. Experienced anglers work on specific refinements — presentation angles, nymphing depth, reading current edges. The day is always built around you." },
  { q: "Are lunches included on wade trips?", a: "Lunches are not included on guided wade trips. We recommend bringing snacks, water, and a lunch for full-day trips. There are restaurants and grocery options in Bryson City for provisioning before an early morning departure." },
  { q: "What should I bring?", a: "Rain gear — mountain weather changes fast. Warm layers for cool mornings on the water. Polarized sunglasses for spotting fish. A hat with a brim. Sunscreen and lip balm. Clothing in earth tones. Wading shoes or boots if you have them — we provide waders if needed. Snacks and a lunch for full-day trips. We provide all rods, reels, flies, and leaders." },
  { q: "Is a fishing license required?", a: "Yes — a valid North Carolina Inland Fishing License (in-state or out-of-state) is required for all anglers 16 and older. There is no trout stamp in NC. For out-of-state visitors fishing the Tuckasegee River between October and May, the Mountain Heritage Trout Waters Day License is a cheaper optional alternative — not required, just a money-saving option. Purchase at ncwildlife.org or any local sporting goods store in Bryson City." },
  { q: "What is the cancellation and payment policy?", a: "Payment in full is required at the time of booking. Online bookings via Swipe carry a small processing fee — to avoid fees, we accept Zelle, Venmo, and personal check. For rescheduling: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you." },
];

export default function InstructionalWadeTrips() {
  return (
    <div className="w-full">
      <SchemaScript schema={serviceSchema({ price: "700", name: "Guided Wade Fly Fishing Trips", description: "Guided wade fly fishing trips in the Great Smoky Mountains of North Carolina, led by Mac Brown — the only FFI Master Casting Instructor in North Carolina and a certified casting examiner for Fly Fishers International. Wade trips target wild rainbow and brown trout on freestone mountain streams inside Great Smoky Mountains National Park and the Tuckasegee River in Bryson City. Mac reads the water, positions you correctly, and teaches you to present flies the way trout actually eat them — instruction is embedded in every session, not saved for the drive home. All rods, reels, flies, and terminal tackle provided — TFO rods and Scientific Anglers fly lines. Mac has been guiding wade trips in Western North Carolina since 1987.", url: "/guided-wade-fly-fishing-trips", image: "https://macbrownflyfish.com/images/client-wading-1.webp" })} />
      <SchemaScript schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Who is Mac Brown?", "acceptedAnswer": { "@type": "Answer", "text": "Mac Brown is the only FFI Master Casting Instructor in North Carolina — the highest casting credential awarded by Fly Fishers International — and a certified casting examiner for FFI. He is the author of Casting Angles and has been guiding wade trips in the Great Smoky Mountains since 1987. Every wade trip is instructional at its core — you leave understanding your fishing, not just having fished." } },
          { "@type": "Question", "name": "What fish will we target on a guided wade trip?", "acceptedAnswer": { "@type": "Answer", "text": "Wild rainbow and brown trout are the primary targets on most wade trips. Great Smoky Mountains National Park streams also hold native brook trout in the upper elevations. Mac reads the water, selects the flies, and positions you exactly where the fish are holding based on current conditions and season." } },
          { "@type": "Question", "name": "What is the Delayed Harvest section and when does it fish best?", "acceptedAnswer": { "@type": "Answer", "text": "The Delayed Harvest section of the Tuckasegee River runs from October through May and is stocked with large numbers of rainbow and brown trout — all catch-and-release. The fish are selective and technically interesting. Outside October–May, wild trout on GSMNP streams and the upper Tuckasegee become the primary focus." } },
          { "@type": "Question", "name": "Do I need prior experience for a guided wade trip?", "acceptedAnswer": { "@type": "Answer", "text": "No experience needed. Every wade trip is instructional — Mac meets you exactly where you are and builds from there. Beginners learn fly casting, reading water, and drag-free presentation from the ground up. Experienced anglers work on specific refinements. The day is always built around you." } },
          { "@type": "Question", "name": "Are lunches included on wade trips?", "acceptedAnswer": { "@type": "Answer", "text": "Lunches are not included on guided wade trips. We recommend bringing snacks, water, and a lunch for full-day trips. There are restaurants and grocery options in Bryson City for provisioning before an early morning departure." } },
          { "@type": "Question", "name": "Is a fishing license required for a guided wade trip?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — a valid North Carolina Inland Fishing License (in-state or out-of-state) is required for all anglers 16 and older. There is no trout stamp in NC. For out-of-state visitors fishing the Tuckasegee River between October and May, the Mountain Heritage Trout Waters Day License is a cheaper optional alternative — not required, just a money-saving option. Purchase at ncwildlife.org or any local sporting goods store in Bryson City." } },
          { "@type": "Question", "name": "What should I bring on a guided fly fishing wade trip?", "acceptedAnswer": { "@type": "Answer", "text": "Rain gear, warm layers, polarized sunglasses, a brimmed hat, sunscreen, clothing in earth tones, and snacks or a lunch for full-day trips. Wading shoes or boots if you have them — we provide waders. We provide TFO rods, Scientific Anglers fly lines, all flies, leaders, and tippet." } },
          { "@type": "Question", "name": "What is the cancellation and payment policy?", "acceptedAnswer": { "@type": "Answer", "text": "Payment in full is required at the time of booking. Online bookings via Swipe carry a small processing fee — to avoid fees, we accept Zelle, Venmo, and personal check. For rescheduling: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance. We have operated on the Golden Rule since 1987." } },
        ],
      }} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/guide-trip-1.webp")}
          srcSet={`${img("/images/guide-trip-1-1280.webp")} 1280w, ${img("/images/guide-trip-1.webp")} 1920w`}
          sizes="100vw"
          alt="Guided wade fly fishing in the Great Smoky Mountains — Mac Brown Fly Fish, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex flex-col items-end justify-end pb-16 md:pb-24 px-8 md:px-12 text-right">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            Bryson City, North Carolina · Great Smoky Mountains · Since 1987
          </p>
          <h1 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            Guided Wade Fly Fishing Trips — Bryson City, NC
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/reserve"
              className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Book Half Day — <PriceTag priceKey="guidedWadeOrFloat" part="half" as="span" /> <ArrowRight size={14} />
            </Link>
            <Link
              href="/reserve"
              className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Book Full Day — <PriceTag priceKey="guidedWadeOrFloat" part="full" as="span" />
            </Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground leading-relaxed mb-3">
            Wade wild trout streams in Great Smoky Mountains National Park and the Tuckasegee River with Mac Brown — the only FFI Master Casting Instructor in North Carolina, a certified FFI casting examiner, and the author of <em>Casting Angles</em>, guiding these waters since 1987. Guided wade trips target wild rainbow trout, brown trout, and native brook trout on GSMNP mountain streams, plus the Tuckasegee Delayed Harvest section from October through May for exceptional fish counts. <PriceTag priceKey="guidedWadeOrFloat" part="half" as="span" /> half day / <PriceTag priceKey="guidedWadeOrFloat" part="full" as="span" /> full day, 1–2 anglers at the same rate. All TFO rods, Scientific Anglers fly lines, all flies, leaders, and tippet provided. Every trip is instructional. All skill levels welcome.
          </p>
          <p className="font-serif italic text-foreground/70 text-lg">Get in the River. Learn Its Language.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Two ways to experience the finest trout water in the eastern United States. Both guided by the most experienced instructors in the region. Both built around putting you on fish and sending you home a better angler. The water decides which is right for your day — and we know this water better than anyone.
          </p>
        </div>
      </section>

      {/* GUIDED WADE TRIPS */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col xl:flex-row gap-16">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-4">Guided Wade Trips</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-2">
                Wade Fish Wild Trout Streams in the Great Smoky Mountains
              </h2>
              <h3 className="font-serif text-xl text-muted-foreground italic mb-4">Get in the river. Find your fish.</h3>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  There is a moment on the water that every angler chases — when the read was right, the presentation was clean, and the fish did exactly what you hoped it would. A guided wade trip is built around creating more of those moments, and understanding them deeply enough to repeat them on your own.
                </p>
                <p>
                  Bryson City sits at the center of what serious anglers call the Trout Mecca of the East. Swain County holds over 2,400 miles of wild trout water — mountain streams tumbling through the hemlocks of the Great Smoky Mountains National Park, the productive tailwaters of the Tuckasegee River, and stunning lakes offering a completely different challenge for anglers willing to explore them. No single day here looks quite like another, and that variety is exactly what makes this place special.
                </p>
                <p>
                  A guided wade trip puts you in the water — reading it, moving through it, learning its language. The guide is beside you, not upstream. Instruction is immediate, specific, and tied directly to what is happening in front of you in that moment. That kind of real-time learning accelerates improvement faster than anything else in the sport.
                </p>
                <p>
                  Every trip is built around what the water is doing that day. In cooler months, slow presentations on nymphs and wet flies draw fish from lies that most anglers walk right past. As temperatures rise and hatches begin, the dry fly fishing on these streams becomes some of the finest in the Appalachians — wild rainbow and brown trout rising to insects that the untrained eye misses entirely. Streamers, emergers, multi-fly rigs — every method has its season, and every session teaches something that stays with you long after the waders come off.
                </p>
                <p>
                  The wild trout in these waters demand precision. Mountain stream fish are technical targets — pressured by current, sensitive to presentation, and unforgiving of drag. That precision is exactly what a wade trip builds, one cast, one drift, one fish at a time.
                </p>
                <p className="text-sm font-medium text-foreground">
                  Wade trips are ideal for: Anglers who want full immersion in the technical craft. Those comfortable moving through water. Anyone seeking the most intimate, hands-on learning experience the river offers.
                </p>
              </div>

              {/* BOOKING CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                <div className="bg-white border border-border p-6 flex flex-col">
                  <span className="text-xs font-semibold tracking-wider text-primary bg-primary/8 px-2.5 py-1 rounded self-start mb-4">Half Day</span>
                  <PriceTag priceKey="guidedWadeOrFloat" part="half" className="font-serif text-3xl font-bold text-primary mb-1" />
                  <p className="text-xs text-muted-foreground mb-4">3 Hours · 1–2 anglers, same price</p>
                  <Link
                    href="/reserve"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3.5 hover:bg-primary/90 transition-colors"
                  >
                    Book Now <ArrowRight size={13} />
                  </Link>
                </div>
                <div className="bg-white border border-border p-6 flex flex-col">
                  <span className="text-xs font-semibold tracking-wider text-primary bg-primary/8 px-2.5 py-1 rounded self-start mb-4">Full Day</span>
                  <PriceTag priceKey="guidedWadeOrFloat" part="full" className="font-serif text-3xl font-bold text-primary mb-1" />
                  <p className="text-xs text-muted-foreground mb-4">6 Hours · 1–2 anglers</p>
                  <Link
                    href="/reserve"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3.5 hover:bg-primary/90 transition-colors"
                  >
                    Book Now <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* MULTI-TRIP PACKAGES */}
              <div className="mt-8 border-t border-border pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">Multi-Trip Packages — Pay by Card</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-muted/30 border border-border p-5 flex flex-col">
                    <span className="text-xs font-semibold tracking-wider text-primary bg-primary/8 px-2.5 py-1 rounded self-start mb-3">2-Trip Pack</span>
                    <p className="font-serif text-2xl font-bold text-primary mb-0.5">$1,400</p>
                    <p className="text-xs text-muted-foreground mb-4">2 × Half Day Wade · 3 hrs each</p>
                    <a
                      href="https://swipesimple.com/links/lnk_089b324113409b10e1dfee2ab946cf45"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3 hover:bg-primary/90 transition-colors"
                    >
                      Pay by Card <ArrowRight size={13} />
                    </a>
                  </div>
                  <div className="bg-muted/30 border border-border p-5 flex flex-col">
                    <span className="text-xs font-semibold tracking-wider text-primary bg-primary/8 px-2.5 py-1 rounded self-start mb-3">3-Trip Pack</span>
                    <p className="font-serif text-2xl font-bold text-primary mb-0.5">$2,100</p>
                    <p className="text-xs text-muted-foreground mb-4">3 × Half Day Wade · 3 hrs each</p>
                    <a
                      href="https://swipesimple.com/links/lnk_4567bac98ccaebcf0790902ef0964e42"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3 hover:bg-primary/90 transition-colors"
                    >
                      Pay by Card <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
                <p className="text-[11px] text-muted-foreground/70 mt-3">A small processing fee applies to card payments. To pay by Zelle or Venmo with no fee, use the <Link href="/reserve" className="text-primary hover:underline">reservation form</Link>.</p>
              </div>
            </div>

            <div className="hidden xl:grid xl:w-[40%] grid-cols-2 gap-3 shrink-0 overflow-hidden self-start">
              <img src={img("/images/client-wading-1.webp")} alt="Client wading a mountain trout stream on a guided trip with Mac Brown Fly Fish, Bryson City NC" className="w-full aspect-[3/4] object-cover" />
              <img src={img("/images/client-brown-1.webp")} alt="Brown trout caught on the fly with Mac Brown, Western North Carolina — Mac Brown Fly Fish" className="w-full aspect-[3/4] object-cover mt-10" />
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER PHOTO */}
      <div className="grid grid-cols-2 gap-0">
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/client-float-1.webp")} alt="Float trip on the Tuckasegee River — Mac Brown Fly Fish, Bryson City NC" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/fall-pool-reflection.webp")} srcSet={`${img("/images/fall-pool-reflection-1280.webp")} 1280w, ${img("/images/fall-pool-reflection.webp")} 1600w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Mountain pool reflection on a guided fly fishing trip — Mac Brown Fly Fish" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* WHAT EVERY TRIP INCLUDES */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Every Trip</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">What Every Trip Includes</h2>
          <p className="text-muted-foreground text-center mb-12 leading-relaxed">
            Regardless of which experience you choose, every guided trip with Mac Brown Fly Fish delivers the same foundation:
          </p>
          <ul className="space-y-5">
            {[
              "All gear provided — rods, reels, leaders, and flies matched to the water and conditions of the day",
              "Guides certified in first aid, CPR, and 40+ years rowing experience",
              "FFI Certified Casting Instructors on Every Trip",
              "Intimate knowledge of regional hatches built from decades of streamside observation",
              "Instruction woven into every moment of the day — this is never just a fishing trip",
              "Solo or two-person bookings at the same rate — great days on the water are better shared",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-muted-foreground leading-relaxed">
                <Check size={14} className="text-primary shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection items={wadeFaqs} />

      {/* CTA */}
      <section className="py-28 bg-primary text-primary-foreground text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Not sure which to choose?</h2>
          <p className="text-primary-foreground/75 mb-10 leading-relaxed text-lg">
            Call us. After one conversation about your skill level, goals, and the current conditions on the water, we'll know exactly which experience will serve you best. We've been making that call since 1987.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18287361469"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              <Phone size={14} /> Call (828) 736-1469
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
