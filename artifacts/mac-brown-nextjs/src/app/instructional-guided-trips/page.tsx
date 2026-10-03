import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { PriceTag } from "@/components/price-tag";
import { serviceSchema } from "@/lib/schema";
import FaqSection from "@/components/faq-section";
import type { FaqItem } from "@/components/faq-section";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Guided Fly Fishing Trips — Bryson City, NC" },
  description: "Guided wade, float, and lake fly fishing trips in Bryson City, NC. Led by an FFI Master Casting Instructor with 35+ years on the water.",
  alternates: { canonical: "https://macbrownflyfish.com/instructional-guided-trips/" },
  openGraph: {
    title: "Guided Fly Fishing Trips & Clinics — Smoky Mountains, NC",
    description: "Float trips, wade trips, and lake trips in Western North Carolina guided by one of the most experienced fly fishing instructors in the Southeast.",
    url: "https://macbrownflyfish.com/instructional-guided-trips/",
    images: [{ url: "https://macbrownflyfish.com/images/guide-trip-1.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guided Fly Fishing Trips & Clinics — Smoky Mountains, NC",
    images: ["https://macbrownflyfish.com/images/guide-trip-1.webp"],
  },
};

const trips = [
  {
    label: "Float Trips with Our Fly Fishing Guides",
    detail: "Drift the Tuckasegee River & Delayed Harvest section from a Clackacraft drift boat.",
    location: "Bryson City, NC",
    availability: "Year-round · Tuckasegee River",
    priceKey: "guidedWadeOrFloat",
    href: "/guided-float-fly-fishing-trips",
    bookHref: "/reserve",
  },
  {
    label: "Wade Trips with Our Fly Fishing Guides",
    detail: "Wade mountain streams and GSMNP waters with an FFI Master Instructor at your side.",
    location: "Bryson City, NC",
    availability: "Year-round · Mountain Streams",
    priceKey: "guidedWadeOrFloat",
    href: "/guided-wade-fly-fishing-trips",
    bookHref: "/reserve",
  },
  {
    label: "Lake Trips with Our Fly Fishing Guides",
    detail: "Stillwater fly fishing on Fontana, Cheoah, and the mountain lakes of the Smokies.",
    location: "Bryson City, NC",
    availability: "Year-round · Fontana · Cheoah",
    priceKey: "guidedLakeTrip",
    href: "/guided-lake-fly-fishing-trips",
    bookHref: "/reserve",
  },
];

const guidedTripFaqs: FaqItem[] = [
  { q: "Who is Mac Brown and what makes these trips instructional?", a: "Mac Brown is the only FFI Master Casting Instructor in North Carolina — the highest casting credential awarded by Fly Fishers International — and a certified casting examiner for FFI who tests and certifies other instructors. He is the author of Casting Angles and has been guiding in Western North Carolina since 1987. 'Instructional' means Mac explains the water, the fish, the flies, and the presentation as you fish — you understand why a drift worked or why it did not, not just whether you caught fish." },
  { q: "What types of guided fly fishing trips are available in Bryson City, NC?", a: "Three formats are available from Bryson City: float trips drifting the Tuckasegee River from a Clackacraft drift boat, wade trips on wild mountain streams and Great Smoky Mountains National Park waters, and lake trips on Fontana and Cheoah targeting trophy trout in stillwater. All three are instructional, open to all skill levels, and include all rods, reels, flies, and terminal tackle." },
  { q: "What is the difference between a float trip and a wade trip?", a: "Float trips drift the Tuckasegee River and Delayed Harvest section from a Clackacraft drift boat — covering miles of productive water and reaching stretches wading anglers never reach. Wade trips put you directly in the river on mountain streams and GSMNP waters, working technical trout water up close. Wade trips are the most hands-on skill-building experience; float trips cover the most ground and are excellent for anglers of any physical ability." },
  { q: "What fish will we target?", a: "Wild rainbow and brown trout are the primary targets on float and wade trips. GSMNP streams also hold native brook trout in the upper elevations — one of the most beautiful trout in North America. Lake trips target trophy brown trout, rainbow trout, and smallmouth bass on Fontana and Cheoah. Mac selects the technique — nymphing, dry fly, wet fly, or streamer — based on what the fish are doing that day." },
  { q: "How much do guided fly fishing trips cost in Bryson City, NC?", a: "Float and wade trips are $700 for a half day and $800 for a full day, for 1–2 anglers at the same rate. Lake trips on Fontana and Cheoah are $875. All gear is provided — TFO rods, Scientific Anglers fly lines, all flies, leaders, and tippet. Lunches are not included." },
  { q: "Do I need experience for a guided fly fishing trip?", a: "No experience is needed. Every guided trip with Mac Brown Fly Fish is instructional — built around making you a better angler regardless of your starting point. Beginners learn fly casting, reading water, and presentation from the ground up. Experienced anglers leave with sharper technique and a clearer understanding of exactly what to work on next." },
  { q: "Is a fishing license required?", a: "Yes — a valid North Carolina Inland Fishing License (in-state or out-of-state) is required for all anglers 16 and older. There is no trout stamp in NC. For out-of-state visitors fishing the Tuckasegee River between October and May, the Mountain Heritage Trout Waters Day License is a cheaper optional alternative — not required, just a money-saving option. Purchase at ncwildlife.org or any local sporting goods store in Bryson City." },
  { q: "What is the cancellation and payment policy?", a: "Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee — to avoid fees, we accept Zelle, Venmo, and personal check. For rescheduling: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you." },
];

export default function InstructionalGuidedTrips() {
  return (
    <div className="w-full">
      <SchemaScript schema={serviceSchema({ price: "700", name: "Guided Fly Fishing Trips — Bryson City, NC", description: "Guided fly fishing trips in the Great Smoky Mountains of North Carolina, led by Mac Brown — the only FFI Master Casting Instructor in North Carolina, a certified casting examiner for Fly Fishers International, and the author of Casting Angles. Three formats are available from Bryson City: float trips drifting the Tuckasegee River from a Clackacraft drift boat, wade trips on wild mountain streams and Great Smoky Mountains National Park waters, and lake trips on Fontana and Cheoah targeting the largest fish in the region. Mac weaves instruction into every trip — you leave a better angler than you arrived. All rods, reels, flies, and terminal tackle provided. Mac has been guiding in Western North Carolina since 1987.", url: "/instructional-guided-trips", image: "https://macbrownflyfish.com/images/guide-trip-1.webp" })} />
      <SchemaScript schema={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Guided Fly Fishing Trips — Mac Brown Fly Fish",
        "description": "Three guided fly fishing trip formats in Bryson City, NC: float trips on the Tuckasegee River, wade trips on wild Smoky Mountain streams, and lake trips on Fontana and Cheoah.",
        "url": "https://macbrownflyfish.com/instructional-guided-trips/",
        "numberOfItems": 3,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Service",
              "serviceType": "Guided Fishing Trip",
              "name": "Guided Float Fly Fishing Trip — Tuckasegee River, Bryson City NC",
              "url": "https://macbrownflyfish.com/guided-float-fly-fishing-trips/",
              "description": "Drift the Tuckasegee River and Delayed Harvest section from a Clackacraft drift boat. Year-round float trips in Bryson City, NC guided by an FFI Master Casting Instructor. All gear provided — TFO rods, Scientific Anglers fly lines, leaders, and flies.",
              "areaServed": { "@type": "Place", "name": "Bryson City, NC" },
              "offers": {
                "@type": "Offer",
                "price": "700",
                "priceCurrency": "USD",
                "name": "Half-Day Guided Float Trip",
                "availability": "https://schema.org/InStock",
                "url": "https://macbrownflyfish.com/reserve/"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Service",
              "serviceType": "Guided Fishing Trip",
              "name": "Guided Wade Fly Fishing Trip — Great Smoky Mountains, NC",
              "url": "https://macbrownflyfish.com/guided-wade-fly-fishing-trips/",
              "description": "Wade fish wild mountain streams and Great Smoky Mountains National Park waters in Bryson City, NC. Year-round wade trips guided by an FFI Master Casting Instructor. All gear provided — TFO rods, Scientific Anglers fly lines, leaders, and flies.",
              "areaServed": { "@type": "Place", "name": "Bryson City, NC" },
              "offers": {
                "@type": "Offer",
                "price": "700",
                "priceCurrency": "USD",
                "name": "Half-Day Guided Wade Trip",
                "availability": "https://schema.org/InStock",
                "url": "https://macbrownflyfish.com/reserve/"
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Service",
              "serviceType": "Guided Fishing Trip",
              "name": "Guided Lake Fly Fishing Trip — Fontana & Cheoah Lakes, NC",
              "url": "https://macbrownflyfish.com/guided-lake-fly-fishing-trips/",
              "description": "Stillwater fly fishing on Fontana Lake and Cheoah Lake in Western North Carolina. Year-round lake trips guided by an FFI Master Casting Instructor. All gear provided — TFO rods, Scientific Anglers fly lines, leaders, and flies.",
              "areaServed": { "@type": "Place", "name": "Bryson City, NC" },
              "offers": {
                "@type": "Offer",
                "price": "875",
                "priceCurrency": "USD",
                "name": "Guided Lake Trip",
                "availability": "https://schema.org/InStock",
                "url": "https://macbrownflyfish.com/reserve/"
              }
            }
          }
        ]
      }} />
      <SchemaScript schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": guidedTripFaqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      }} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/guide-trip-1.webp")}
          srcSet={`${img("/images/guide-trip-1-1280.webp")} 1280w, ${img("/images/guide-trip-1.webp")} 1920w`}
          sizes="100vw"
          alt="Guided fly fishing trip in the Great Smoky Mountains with Mac Brown Fly Fish — Bryson City, NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex flex-col items-end justify-end pb-16 md:pb-24 px-8 md:px-12 text-right">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">FFI Master Instructor · Bryson City, NC · Great Smoky Mountains</p>
          <h1 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Fly Fishing Guides & Guided Trips — Bryson City, NC
          </h1>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground leading-relaxed mb-3">
            Mac Brown Fly Fish offers guided fly fishing trips on the finest wild trout water in the Smoky Mountains — float trips on the Tuckasegee River targeting wild rainbow and brown trout, wade trips on mountain streams in Great Smoky Mountains National Park, and lake trips on Fontana and Cheoah for trophy trout and smallmouth bass. Mac Brown is the only FFI Master Casting Instructor in North Carolina, a certified FFI casting examiner, and the author of <em>Casting Angles</em> — guiding and teaching in Bryson City since 1987. Float and wade trips run <PriceTag priceKey="guidedWadeOrFloat" part="half" as="span" /> half day / <PriceTag priceKey="guidedWadeOrFloat" part="full" as="span" /> full day for 1–2 anglers at the same rate; lake trips are <PriceTag priceKey="guidedLakeTrip" as="span" />. All rods, reels, flies, and waders are provided. Every trip is instructional — Mac builds your skills as you fish, from reading water to presenting the fly. All skill levels welcome, including complete beginners.
          </p>
          <p className="font-serif italic text-foreground/70 text-lg">Every cast teaches you something — that&apos;s the difference.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every guided trip with Mac Brown Fly Fish is built around one thing: making you a better angler. Whether you're drifting the Tuckasegee in a Clackacraft, wading a mountain stream in Great Smoky Mountains National Park, or reading stillwater on Fontana Lake, instruction is woven into every moment of the day. This is never just a fishing trip.
          </p>
        </div>
      </section>

      {/* TRIP CARDS */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Choose Your Experience</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-16">Three Ways to Fish With Mac Brown</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trips.map((trip) => (
              <div key={trip.href} className="border border-border bg-white flex flex-col p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4">{trip.label}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{trip.detail}</p>
                <div className="space-y-2 mb-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} className="shrink-0" />
                    <span>{trip.availability}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="shrink-0" />
                    <span>{trip.location}</span>
                  </div>
                </div>
                <PriceTag priceKey={trip.priceKey} className="font-serif text-2xl font-bold text-primary mb-5" />
                <div className="flex flex-col gap-2">
                  <a
                    href={trip.bookHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.12em] px-4 py-3 hover:bg-primary/90 transition-colors"
                  >
                    Book Now <ArrowRight size={12} />
                  </a>
                  <Link
                    href={trip.href}
                    className="inline-flex items-center justify-center gap-2 border border-border text-foreground text-xs font-semibold uppercase tracking-[0.12em] px-4 py-3 hover:bg-muted/30 transition-colors"
                  >
                    Learn More <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO DIVIDER */}
      <div className="grid grid-cols-2 gap-0">
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/client-float-1.webp")} alt="Float trip on the Tuckasegee River — Mac Brown Fly Fish, Bryson City NC" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/fall-pool-reflection.webp")} srcSet={`${img("/images/fall-pool-reflection-1280.webp")} 1280w, ${img("/images/fall-pool-reflection.webp")} 1600w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Mountain lake stillwater fly fishing in the Smoky Mountains — Mac Brown Fly Fish" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      {/* WHAT EVERY TRIP INCLUDES */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Every Trip</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12">What Every Trip Includes</h2>
          <ul className="space-y-5 text-left">
            {[
              "All gear provided — rods, reels, leaders, and flies matched to the water and conditions of the day",
              "Guides certified in first aid, CPR, and 40+ years rowing experience",
              "FFI Certified Casting Instructors on Every Trip",
              "Intimate knowledge of regional hatches built from decades of streamside observation",
              "Instruction woven into every moment of the day — this is never just a fishing trip",
              "Solo or two-person bookings at the same rate — great days on the water are better shared",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-muted-foreground leading-relaxed">
                <span className="text-primary mt-1 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection items={guidedTripFaqs} />

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
              Call (828) 736-1469
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
