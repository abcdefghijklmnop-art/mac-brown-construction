import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { PriceTag } from "@/components/price-tag";
import { serviceSchema, faqPageSchema } from "@/lib/schema";
import FaqSection, { type FaqItem } from "@/components/faq-section";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Guided Lake Fly Fishing Trips — Smoky Mountain Lakes, NC" },
  description: "Fly fish the lakes of the Smoky Mountains for bass, trout, and more. Guided instructional lake trips with Mac Brown Fly Fish.",
  alternates: { canonical: "https://macbrownflyfish.com/guided-lake-fly-fishing-trips/" },
  openGraph: {
    title: "Guided Lake Trips — Stillwater Fly Fishing in the Smoky Mountains",
    description: "The lakes of the Smoky Mountains are one of fly fishing's best kept secrets. Cold, deep, and full of fish that most anglers never think to target with a fly rod.",
    url: "https://macbrownflyfish.com/guided-lake-fly-fishing-trips/",
    images: [{ url: "https://macbrownflyfish.com/images/fall-pool-reflection.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guided Lake Trips — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/fall-pool-reflection.webp"],
  },
};

const lakeFaqs: FaqItem[] = [
  {
    q: "Who guides the lake trips?",
    a: "Mac Brown is the only FFI Master Casting Instructor in North Carolina — the highest casting credential awarded by Fly Fishers International — and a certified casting examiner for FFI. He is the author of Casting Angles and has been guiding stillwater lake trips on Fontana and Cheoah since 1987. Lake trips are instructional — Mac teaches the specific stillwater skills that most river anglers have never developed.",
  },
  {
    q: "What fish will we target on a lake trip?",
    a: "Fontana Lake and Cheoah Lake hold trophy-class brown trout, rainbow trout, and smallmouth bass in cold, deep water. Lake trout run significantly larger on average than river fish — fish in the five-to-ten pound range are not unusual on productive days. The best lake fishing runs from late fall through early spring when water temperatures are coldest and the biggest fish are most active and accessible.",
  },
  {
    q: "What is the best season for a lake fly fishing trip?",
    a: "Late fall through early spring — October through April — is prime stillwater season on Fontana and Cheoah. Cold water concentrates the largest fish in accessible depths and makes them aggressive. Summer lake fishing requires deeper presentations and more technical approach. Mac adjusts fly selection, sink rate, and retrieve based on water temperature and what the fish are doing that day.",
  },
  {
    q: "Do I need prior experience?",
    a: "No experience needed. Guided lake trips are instructional — Mac reads your skill level and builds from there. River anglers transitioning to stillwater are especially well served: Mac teaches retrieve patterns, sink rates, and fish-locating skills that are genuinely different from river technique. All gear is provided and matched to the species and conditions of the day.",
  },
  {
    q: "Are lunches included on lake trips?",
    a: "Lunches are not included on guided lake trips. We recommend bringing snacks, water, and a lunch for full-day trips. There are restaurants and grocery options in Bryson City for provisioning before departure.",
  },
  {
    q: "What should I bring?",
    a: "Rain gear — mountain weather changes fast. Warm layers — lake mornings are cold, especially fall through spring. Polarized sunglasses for spotting fish. A hat with a brim. Sunscreen and lip balm. Clothing in earth tones. Snacks and a lunch for full-day trips. We provide all rods, reels, flies, and lines — including multiple sink rate options for fishing different depths throughout the day.",
  },
  {
    q: "Is a fishing license required?",
    a: "Yes — a valid North Carolina Inland Fishing License (in-state or out-of-state) is required for all anglers 16 and older. There is no trout stamp in NC. Purchase at ncwildlife.org or any local sporting goods store in Bryson City.",
  },
  {
    q: "What is the cancellation and payment policy?",
    a: "Payment in full is required at the time of booking. Online bookings via Swipe carry a small processing fee — to avoid fees, we accept Zelle, Venmo, and personal check. For rescheduling: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you.",
  },
];

export default function InstructionalLakeTrips() {
  return (
    <div className="w-full">
      <SchemaScript schema={serviceSchema({ price: "875", name: "Guided Stillwater Lake Fly Fishing Trips", description: "Guided stillwater fly fishing on Fontana Lake and Cheoah Lake in Western North Carolina, led by Mac Brown — the only FFI Master Casting Instructor in North Carolina and a certified casting examiner for Fly Fishers International. Lake trips target the largest fish in the Smoky Mountains region — trophy-class brown trout, rainbow trout, and smallmouth bass that thrive in cold, deep stillwater where most fly anglers never look. Mac teaches the specific stillwater skills that make lake fly fishing consistently productive: fly selection, retrieve patterns, and locating fish without current seams. All rods, reels, and lines provided. Mac has been guiding lake trips in Western North Carolina since 1987.", url: "/guided-lake-fly-fishing-trips", image: "https://macbrownflyfish.com/images/fall-pool-reflection.webp" })} />
      <SchemaScript schema={faqPageSchema(lakeFaqs)} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/lake-trip-hero.webp")}
          srcSet={`${img("/images/mobile/lake-trip-hero.webp")} 800w, ${img("/images/lake-trip-hero.webp")} 1600w`}
          sizes="100vw"
          alt="Mac Brown on the boat guiding a lake fly fishing trip — Fontana Lake, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-[65%_top]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex flex-col items-end justify-end pb-16 md:pb-24 px-8 md:px-12 text-right">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            Bryson City, North Carolina · Fontana · Cheoah · And Beyond
          </p>
          <h1 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            Guided Lake Fly Fishing Trips — Smoky Mountains, NC
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/reserve"
              className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Book Lake Trip — <PriceTag priceKey="guidedLakeTrip" as="span" /> <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Fish Fontana Lake and Cheoah Lake in the Smoky Mountains with Mac Brown — the only FFI Master Casting Instructor in North Carolina, a certified FFI casting examiner, and the author of <em>Casting Angles</em>, guiding these waters since 1987. Guided lake trips target trophy brown trout, rainbow trout, and smallmouth bass in the deep, cold reservoirs of the Nantahala National Forest — fish that run considerably larger than their river counterparts. Late fall through early spring is the prime season; all TFO rods, Scientific Anglers fly lines, all flies and leaders provided. <PriceTag priceKey="guidedLakeTrip" as="span" /> full day, 1–2 anglers at the same rate. No experience required.
          </p>
          <p className="mt-4 font-serif italic text-foreground/70 text-base">Stillwater Fly Fishing in the Smoky Mountains</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            There is a particular kind of patience that stillwater fishing demands — and a particular kind of reward that comes when it pays off. Lake trout are not the same fish as river trout. They are stronger, wilder, and considerably larger on average, because they spend their lives actively hunting in open water rather than holding in a current waiting for food to come to them. When one takes a fly on a lake, you feel the difference immediately.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-6">
            Guided lake trips are among the most personally rewarding experiences offered here — and for serious fly anglers looking to expand their skills and encounter genuinely large fish, they are among the most underrated opportunities in the Southeast.
          </p>
          <blockquote className="mt-10 border-l-2 border-primary pl-6 text-left max-w-xl mx-auto">
            <p className="font-serif text-lg italic text-foreground">
              "The lakes of the Smoky Mountains are one of fly fishing's best kept secrets. Cold, deep, and full of fish that most anglers never think to target with a fly rod."
            </p>
          </blockquote>
        </div>
      </section>

      {/* THE WATER */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col xl:flex-row gap-16">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-4">The Water</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-2">
                Guided Lake Fly Fishing near Bryson City, NC
              </h2>
              <h3 className="font-serif text-xl text-muted-foreground italic mb-6">Fontana. Cheoah. And the lakes between.</h3>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  The mountain lakes surrounding Bryson City form one of the most remarkable collections of coldwater fly fishing in the eastern United States. Fontana, Cheoah, Calderwood, Bear, Tanasee, Wolf, and Appalachia lakes each offer their own character, their own challenges, and their own rewards across the seasons.
                </p>
                <p>
                  Fontana Dam — the second tallest dam in North America — sends a year-round flow of cold, oxygenated water directly into Cheoah Lake below it, creating conditions that support exceptional trout fishing throughout the year. Cheoah is a personal favorite, productive in every season, and capable of producing the kind of fish that leave a lasting impression. Just below the town of Bryson City, the confluence of the Tuckasegee River and Fontana Lake offers superb early spring fishing as trout stage and move in predictable, fishable patterns.
                </p>
                <p>
                  The lakes are most productive from late fall through early spring, when cold water temperatures push trout into feeding patterns that a well-presented fly can intercept with remarkable consistency. Winter on these lakes is not a season to wait out — it is the prime season, and the anglers who embrace it are rewarded with some of the largest trout available anywhere in the region.
                </p>
              </div>

              {/* BOOKING CARD */}
              <div className="mt-10 max-w-xs">
                <div className="bg-white border border-border p-6 flex flex-col">
                  <span className="text-xs font-semibold tracking-wider text-primary bg-primary/8 px-2.5 py-1 rounded self-start mb-4">Lake Trip</span>
                  <PriceTag priceKey="guidedLakeTrip" className="font-serif text-3xl font-bold text-primary mb-1" />
                  <p className="text-xs text-muted-foreground mb-4">6 Hours · 1–2 anglers · all gear provided</p>
                  <Link
                    href="/reserve"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3.5 hover:bg-primary/90 transition-colors"
                  >
                    Book Now <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden xl:block xl:w-[38%] shrink-0 self-start overflow-hidden">
              <img src={img("/images/client-drift-brown.webp")} alt="Brown trout landed on stillwater lake near Bryson City NC — Mac Brown Fly Fish" className="w-full aspect-[3/4] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER PHOTO */}
      <div className="grid grid-cols-3 gap-0">
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/smoky-mountains.webp")} alt="Great Smoky Mountains panorama above Bryson City NC — Mac Brown Fly Fish lake trips" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/appalachian-panorama.webp")} alt="Appalachian mountain landscape in Western North Carolina — Mac Brown Fly Fish" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/fall-river-fishing.webp")} alt="Fly fishing in fall-colored mountain water in Western NC — Mac Brown Fly Fish" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* A DIFFERENT GAME */}
      <section className="py-28 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col xl:flex-row gap-16">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-4">A Different Game Entirely</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-2">
                Stillwater Fly Fishing — Skills, Tactics, and Big Fish
              </h2>
              <h3 className="font-serif text-xl text-muted-foreground italic mb-6">Stillwater demands a different mind.</h3>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Lake fishing demands a completely different set of skills, tactics, and gear than river fishing — and that difference is a large part of what makes it so compelling. Where river fishing rewards reading current and presenting a drift, lake fishing rewards understanding depth, temperature, light penetration, and the feeding behavior of fish with no current to anchor them in place.
                </p>
                <p>
                  Longer casts are essential on stillwater — presenting flies across greater distances dramatically increases the water you can cover and the fish you can reach. We carry dozens of fly lines with varying sink rates, each designed to find fish at different depths depending on the season and the time of day. Selecting the right combination on a given morning is a puzzle, and solving it is deeply satisfying.
                </p>
                <p>
                  Beyond trout, the lakes of this region offer exceptional variety depending on the season — white bass, walleye, smallmouth and largemouth bass, crappie, perch, and bluegill all provide outstanding sport for the fly angler willing to shift tactics and embrace what the season offers. A summer lake trip chasing smallmouth bass is as thrilling as any trout fishing available anywhere in these mountains.
                </p>
              </div>
            </div>
            <div className="hidden xl:block xl:w-[45%] shrink-0 self-start overflow-hidden">
              <img src={img("/images/dsc-1994.webp")} alt="Fly fishing on a Western NC mountain lake — Mac Brown Fly Fish" className="w-full aspect-video object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">What to Expect</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">On the water with Mac Brown</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Guided lake trips accommodate one or two anglers per boat, with all gear provided and fully matched to the species and conditions of the day. The same depth of instruction that defines every experience here on the rivers is present on the lakes — Mac Brown's nearly four decades of stillwater experience translates directly into faster learning, smarter decisions, and more fish to hand.
            </p>
            <p>
              Whether you're a river angler looking to add an entirely new dimension to your fly fishing, or simply someone who wants to encounter the largest trout these mountains have to offer, a guided lake trip delivers something the rivers cannot.
            </p>
            <p>
              The cold water is out there. The fish are bigger than you expect. And the silence of a mountain lake at first light, with a line unrolling over still water, is one of fly fishing's finest moments.
            </p>
          </div>
        </div>
      </section>

      <FaqSection items={lakeFaqs} />

      {/* CTA */}
      <section className="py-28 bg-primary text-primary-foreground text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Come find out what the lakes have been hiding.</h2>
          <p className="text-primary-foreground/75 mb-10 leading-relaxed text-lg">
            Call us to talk through the best season, the right water for your goals, and what to expect on a guided lake trip. We've been on these lakes for nearly four decades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reserve"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Book Lake Trip — <PriceTag priceKey="guidedLakeTrip" as="span" /> <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+18287361469"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              <Phone size={14} /> Call (828) 736-1469
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
