import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { PriceTag } from "@/components/price-tag";
import { serviceSchema } from "@/lib/schema";
import FaqSection from "@/components/faq-section";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Guided Float Trips — Drift Boat, WNC Rivers, Bryson City NC" },
  description: "Float the Tuckasegee River from a drift boat with Bryson City's most credentialed guide. Guided float trips for all skill levels — all gear provided.",
  alternates: { canonical: "https://macbrownflyfish.com/guided-float-fly-fishing-trips/" },
  openGraph: {
    title: "Guided Float Fly Fishing Trips — Tuckasegee River, Bryson City NC",
    description: "Drift the Tuckasegee River from a Clackacraft drift boat with an FFI Master Instructor. Guided float trips in Bryson City, NC — all skill levels, all gear provided.",
    url: "https://macbrownflyfish.com/guided-float-fly-fishing-trips/",
    images: [{ url: "https://macbrownflyfish.com/images/client-float-1.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guided Float Fly Fishing Trips — Tuckasegee River, Bryson City NC",
    images: ["https://macbrownflyfish.com/images/client-float-1.webp"],
  },
};

export default function InstructionalFloatTrips() {
  return (
    <div className="w-full">
      <SchemaScript schema={serviceSchema({ price: "700", name: "Guided Float Fly Fishing Trips", description: "Guided drift boat fly fishing trips on the Tuckasegee River and Delayed Harvest section in Bryson City, North Carolina, led by Mac Brown — the only FFI Master Casting Instructor in North Carolina and a certified casting examiner for Fly Fishers International. Mac drifts a Clackacraft drift boat through miles of productive Tuckasegee water, covering far more river in a day than wading allows, with instruction woven into every drift so you leave a better angler than you arrived. All rods, reels, flies, and terminal tackle are provided — TFO rods and Scientific Anglers fly lines. Mac has been guiding float trips in Western North Carolina since 1987. All skill levels welcome.", url: "/guided-float-fly-fishing-trips", image: "https://macbrownflyfish.com/images/client-float-1.webp" })} />
      <SchemaScript schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Who guides the float trips?", "acceptedAnswer": { "@type": "Answer", "text": "Mac Brown is the only FFI Master Casting Instructor in North Carolina — the highest casting credential awarded by Fly Fishers International — and a certified casting examiner for FFI. He is the author of Casting Angles and has been running guided drift boat trips on the Tuckasegee since 1987 — the first professional outfitter on this water. Every float trip is instructional: Mac explains what he sees in the water, why he is fishing it a certain way, and how to replicate what works." } },
          { "@type": "Question", "name": "What fish will we target on a guided float trip?", "acceptedAnswer": { "@type": "Answer", "text": "Rainbow and brown trout are the primary targets. On the Delayed Harvest section from October through May, stocked fish in exceptional numbers mix with wild fish throughout the river. Outside that season, float trips shift to the upper Tuckasegee and accessible stretches where wild rainbow and brown trout hold year-round. Mac matches the technique — nymphing, dry fly, wet fly, or streamers — to whatever the fish are doing that day." } },
          { "@type": "Question", "name": "What is the Delayed Harvest section of the Tuckasegee?", "acceptedAnswer": { "@type": "Answer", "text": "The Delayed Harvest section runs from October through May. The water is stocked with large numbers of rainbow and brown trout during this period, and all fish are catch-and-release only. A float trip covers several miles of this section in a single day — reaching pools and runs that wade anglers never reach. It is the most productive guided trout water in Western NC during those months." } },
          { "@type": "Question", "name": "Do I need prior experience for a guided float trip?", "acceptedAnswer": { "@type": "Answer", "text": "No experience needed. Every float trip is instructional — Mac meets you exactly where you are and builds from there. Beginners learn fly casting and presentation from the drift boat. Experienced anglers cover water with more precision and work specific techniques. The day is always built around you." } },
          { "@type": "Question", "name": "Are lunches included on float trips?", "acceptedAnswer": { "@type": "Answer", "text": "Lunches are not included on guided float trips. We recommend bringing snacks, water, and a lunch for full-day trips. There are restaurants and grocery options in Bryson City for provisioning before an early morning departure." } },
          { "@type": "Question", "name": "Is a fishing license required for a guided float trip?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — a valid North Carolina Inland Fishing License (in-state or out-of-state) is required for all anglers 16 and older. There is no trout stamp in NC. For out-of-state visitors fishing the Tuckasegee between October and May, the Mountain Heritage Trout Waters Day License is a cheaper optional alternative — not required, just a money-saving option. Purchase at ncwildlife.org or any local sporting goods store in Bryson City." } },
          { "@type": "Question", "name": "What should I bring on a guided fly fishing float trip?", "acceptedAnswer": { "@type": "Answer", "text": "Rain gear, warm layers, polarized sunglasses, a brimmed hat, sunscreen, clothing in earth tones, and snacks or a lunch for full-day trips. We provide TFO rods, Scientific Anglers fly lines, all flies, leaders, and tippet — everything needed to fish." } },
          { "@type": "Question", "name": "What is the cancellation and payment policy?", "acceptedAnswer": { "@type": "Answer", "text": "Payment in full is required at the time of booking. Online bookings via Swipe carry a small processing fee — to avoid fees, we accept Zelle, Venmo, and personal check. For rescheduling: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you." } },
        ],
      }} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/salmon-river-rowing.webp")}
          srcSet={`${img("/images/mobile/salmon-river-rowing.webp")} 800w, ${img("/images/salmon-river-rowing.webp")} 1024w`}
          sizes="100vw"
          alt="Guided float trip on the Tuckasegee River — Mac Brown Fly Fish, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex flex-col items-end justify-end pb-16 md:pb-24 px-8 md:px-12 text-right">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            Bryson City, North Carolina · Tuckasegee River · Since 1987
          </p>
          <h1 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            Guided Float Fly Fishing Trips — Bryson City, NC
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/reserve"
              className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Book Float Trip — <PriceTag priceKey="guidedWadeOrFloat" part="full" as="span" /> <ArrowRight size={14} />
            </Link>
            <Link
              href="/reserve"
              className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Half Day — <PriceTag priceKey="guidedWadeOrFloat" part="half" as="span" />
            </Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground leading-relaxed mb-3">
            Float the Tuckasegee River from a Clackacraft drift boat with Mac Brown — the only FFI Master Casting Instructor in North Carolina, a certified FFI casting examiner, and the author of <em>Casting Angles</em>, guiding this water since 1987. Guided float trips target wild and stocked rainbow trout and brown trout on the Delayed Harvest section — the most productive guided trout water in Western NC from October through May — covering miles of river in a day and reaching pools no wade angler ever sees. <PriceTag priceKey="guidedWadeOrFloat" part="half" as="span" /> half day / <PriceTag priceKey="guidedWadeOrFloat" part="full" as="span" /> full day, 1–2 anglers at the same rate. All TFO rods, Scientific Anglers fly lines, all flies, leaders, and tippet provided. Every trip is instructional. No experience required.
          </p>
          <p className="font-serif italic text-foreground/70 text-lg">Drift the River. Cover Water Nobody Else Reaches.</p>
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

      {/* GUIDED FLOAT TRIPS */}
      <section className="py-28 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col xl:flex-row gap-16">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-4">Guided Float Trips</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-2">
                Float the Tuckasegee River with Bryson City's Most Credentialed Guides
              </h2>
              <h3 className="font-serif text-xl text-muted-foreground italic mb-4">Drift the river. Cover water nobody else reaches.</h3>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Some days the river is best experienced from the water itself — drifting through it, reading it from a new angle, covering stretches of productive water that wading anglers never reach. A guided float trip opens up a completely different dimension of fly fishing, and on the rivers of Western North Carolina, that dimension is extraordinary.
                </p>
                <p>
                  Mac Brown Fly Fish has been running guided float trips on these waters since 1987 — the first professional outfitter in the region to do so. What began as a pioneer operation is now a benchmark that others measure themselves against. That kind of longevity isn't luck. It's the result of knowing this fishery more intimately than anyone else on the water.
                </p>
                <p>
                  The crown jewel of the float experience is the Delayed Harvest section of the Tuckasegee River, flowing through the valley towns of Webster and Bryson City — consistently among the finest float fishing water in the Southeast. Trips run aboard Clackacraft or NRS drift boats depending on water levels, rowed by guides with more time on this specific water than anyone else in the region.
                </p>
                <p>
                  The float fishing calendar is rich and varied. Spring and fall bring exceptional trout fishing as hatches align with cooling water and fish become aggressive and predictable. Winter float trips offer a quieter, more intimate experience — fish concentrated, rewards significant. When summer warms the upper river, the game shifts beautifully to smallmouth bass — pound for pound one of the most thrilling fish on a fly rod, acrobatic and absolutely relentless when hooked.
                </p>
                <p>
                  A drift boat covers water that wading anglers simply cannot reach — long productive runs, far banks, and holding lies that see almost no pressure from foot traffic. The boat provides a stable, comfortable casting platform in any weather, keeps you warmer in cold months, and allows a level of stealth that wading disturbs. Greater water coverage means more fish encountered. More fish encountered means more learning.
                </p>
                <p className="text-sm font-medium text-foreground">
                  Float trips are ideal for: Younger and older anglers who prefer not to navigate big moving water on foot. Those visiting from Asheville, Highlands, or Cashiers looking for the finest float water in the region. Anyone wanting to cover maximum water and experience the river from a completely new perspective.
                </p>
              </div>

              {/* BOOKING CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                <div className="bg-white border border-border p-6 flex flex-col">
                  <span className="text-xs font-semibold tracking-wider text-primary bg-primary/8 px-2.5 py-1 rounded self-start mb-4">River Float</span>
                  <PriceTag priceKey="guidedWadeOrFloat" part="full" className="font-serif text-3xl font-bold text-primary mb-1" />
                  <p className="text-xs text-muted-foreground mb-4">6 Hours · 1–2 anglers</p>
                  <Link
                    href="/reserve"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3.5 hover:bg-primary/90 transition-colors"
                  >
                    Book Now <ArrowRight size={13} />
                  </Link>
                </div>
                <div className="bg-white border border-border p-6 flex flex-col">
                  <span className="text-xs font-semibold tracking-wider text-primary bg-primary/8 px-2.5 py-1 rounded self-start mb-4">Half Day Float</span>
                  <PriceTag priceKey="guidedWadeOrFloat" part="half" className="font-serif text-3xl font-bold text-primary mb-1" />
                  <p className="text-xs text-muted-foreground mb-4">3 Hours · 1–2 anglers, same price</p>
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-muted/30 border border-border p-5 flex flex-col">
                    <span className="text-xs font-semibold tracking-wider text-primary bg-primary/8 px-2.5 py-1 rounded self-start mb-3">2-Trip Pack</span>
                    <p className="font-serif text-2xl font-bold text-primary mb-0.5">$1,400</p>
                    <p className="text-xs text-muted-foreground mb-4">2 × Half Day Float · 3 hrs each</p>
                    <a
                      href="https://swipesimple.com/links/lnk_70a10549b15a174318df91e2cab72863"
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
                    <p className="text-xs text-muted-foreground mb-4">3 × Half Day Float · 3 hrs each</p>
                    <a
                      href="https://swipesimple.com/links/lnk_310fbf32ccc07cf76c52eb511e719e42"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3 hover:bg-primary/90 transition-colors"
                    >
                      Pay by Card <ArrowRight size={13} />
                    </a>
                  </div>
                  <div className="bg-muted/30 border border-border p-5 flex flex-col">
                    <span className="text-xs font-semibold tracking-wider text-primary bg-primary/8 px-2.5 py-1 rounded self-start mb-3">3 Boats · Full Day</span>
                    <p className="font-serif text-2xl font-bold text-primary mb-0.5">$2,400</p>
                    <p className="text-xs text-muted-foreground mb-4">3 drift boats · 6 hrs · up to 6 anglers</p>
                    <a
                      href="https://swipesimple.com/links/lnk_92323bb94c637554f8019c1dca85a98c"
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

            <div className="hidden xl:flex xl:flex-col xl:w-[40%] gap-5 shrink-0">
              <img src={img("/images/client-float-1.webp")} alt="Float trip on the Tuckasegee River near Bryson City NC — Mac Brown Fly Fish" className="w-full aspect-square object-cover" />
              <img src={img("/images/salmon-river-rowing.webp")} alt="Drift boat on a Western North Carolina river — Mac Brown Fly Fish guided float trips" className="w-full aspect-[1024/405] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO DIVIDER */}
      <div className="grid grid-cols-2 gap-0">
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/client-rainbow-2.webp")} srcSet={`${img("/images/client-rainbow-2-800.webp")} 800w, ${img("/images/client-rainbow-2.webp")} 998w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Client with rainbow trout on a float trip — Mac Brown Fly Fish, Bryson City NC" className="w-full h-full object-cover object-[center_13%]" />
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

      <FaqSection />

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
