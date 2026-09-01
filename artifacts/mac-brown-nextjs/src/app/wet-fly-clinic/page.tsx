import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Calendar } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { courseSchema, faqPageSchema } from "@/lib/schema";
import FaqAccordion from "./faq-accordion";
import { img } from "@/lib/asset";
import { PriceTag } from "@/components/price-tag";

export const metadata: Metadata = {
  title: { absolute: "Wet Fly Fishing Weekend Clinic | Smoky Mountains NC" },
  description: "Learn traditional and modern wet fly techniques for trout in Western North Carolina. Small group clinic with expert instruction.",
  alternates: { canonical: "https://macbrownflyfish.com/wet-fly-clinic/" },
  openGraph: {
    title: "Comprehensive Wet Fly Clinic — Mac Brown Fly Fish, Bryson City NC",
    description: "Weekend wet fly fishing school in the Great Smoky Mountains. Soft hackle swings, water coverage, pattern selection. All skill levels. Bryson City, NC.",
    url: "https://macbrownflyfish.com/wet-fly-clinic/",
    images: [{ url: "https://macbrownflyfish.com/images/fall-river-fishing.webp" }],
  },
  twitter: { card: "summary_large_image" },
};

const curriculum = [
  { title: "History & Heritage of the Wet Fly", body: "The wet fly is the oldest fly fishing technique — centuries old, born on the chalk streams and spate rivers of the British Isles and refined across generations of thoughtful anglers. Understanding where the technique came from, why it worked then, and why it works so well now gives every angler a deeper appreciation of what they are doing when they swing a soft hackle through a riffle. This is not just history — it is context that makes you fish better." },
  { title: "Understanding the Wet Fly Swing", body: "The classic downstream wet fly swing is deceptively simple in appearance and deeply nuanced in execution. Learn to control the angle, the speed, and the depth of the swing to present the fly at the right pace through the fish's feeding lane — covering water efficiently, triggering takes on the hang, and reading the river's response to know when to move and when to slow down." },
  { title: "Water Coverage & Quartering Presentations", body: "One of the greatest advantages of wet fly fishing is the ability to cover water systematically — quartering downstream through a pool, working the far bank seam, or swinging a soft hackle through a riffle without spooking every fish in the run. Learn to read the water from the bank, plan your approach, and fish a run from top to bottom with the efficiency that produces consistent results." },
  { title: "Upstream Wet Fly — The Forgotten Presentation", body: "While the downstream swing is classic, fishing wet flies upstream — dead-drifted, with subtle manipulation — accounts for fish that the swing will never reach and in conditions where the downstream approach is impractical. Learn when to fish upstream, how to control the drift, and how to detect the subtle takes that define this approach." },
  { title: "Indicator & Dead-Drift Wet Fly", body: "Not every situation calls for a swung fly. In high, cold water — or in pools where fish are feeding in specific lanes — a dead-drifted wet fly under an indicator is often the most effective approach on the stream. Learn how to rig for this presentation, how to read the indicator, and how to transition between swinging and dead-drifting based on what the water and the fish are telling you." },
  { title: "Fly Selection — Soft Hackles, Spiders & Traditional Wets", body: "The wet fly selection can be daunting — spiders, soft hackles, traditional winged wets, flymphs, and emerger patterns all have their place. Learn the logic behind pattern selection: when to fish a Partridge & Orange versus a Hare's Ear Flymph, how color and silhouette trigger takes in different light conditions, and how to build a compact, effective wet fly box for mountain trout rivers." },
  { title: "Depth Control & Sink Rates", body: "Getting the fly to the right depth is as important as the swing itself. Understand how leader length, tippet material, fly weight, and mend choices affect where your fly fishes in the water column — and how to adjust on the fly when the fish are telling you the presentation is wrong." },
  { title: "Wake Flies & Surface Presentations", body: "The induced take — the moment a wet fly rises toward the surface at the end of the swing and a fish crashes it — is one of the most exciting moments in all of fly fishing. Learn to fish wake flies and skated presentations intentionally, understand which conditions trigger surface aggression, and set up the induced take as a deliberate strategy rather than a happy accident." },
  { title: "Reading Water for Wet Fly Fishing", body: "Wet fly fishing reveals the river differently than dry fly or nymph fishing. Understanding current seams, pool structure, pocket water, and transition zones from a wet fly perspective — where the fish are holding in the water column and why — changes how you read every river you will ever fish from this point forward." },
];

const whoForItems = [
  "Anglers who have never tried wet fly fishing and want to learn it from the ground up",
  "Dry fly and nymph anglers looking to expand their technique and cover more water",
  "Anyone who has struggled to consistently catch fish in flowing water and wants a different approach",
  "Anglers interested in traditional technique and the heritage of the sport",
  "Guides and instructors wanting to add wet fly presentations to their teaching repertoire",
  "Anyone who loves covering water and wants to do it with purpose and precision",
];

export default function WetFlyClinic() {
  return (
    <div className="w-full">
      <SchemaScript schema={courseSchema({
        price: "1550",
        name: "Comprehensive Wet Fly Clinic — Weekend School, Bryson City NC",
        description: "Weekend wet fly fishing clinic in Bryson City, North Carolina, taught by Mac Brown — the only FFI Master Casting Instructor in North Carolina and the author of Casting Angles. Students learn the art of swinging soft hackles and wet flies through classic trout water on the Tuckasegee River: water coverage, depth control, reading conflicting currents, and the subtle takes that wet fly fishing demands. Mac has been guiding and teaching wet fly technique in the Smoky Mountains since 1987. All skill levels welcome.",
        url: "/wet-fly-clinic",
        image: "https://macbrownflyfish.com/images/fall-river-fishing.webp",
        educationalLevel: "AllLevels",
        coursePrerequisites: "Basic fly casting ability recommended. No prior wet fly or soft hackle experience required.",
        teaches: [
          "Soft hackle and wet fly pattern selection",
          "The classic across-and-downstream swing",
          "Water coverage and reading wet fly water",
          "Depth control with split shot, sink tips, and fly weight",
          "Detecting subtle wet fly takes",
          "Current seam identification and positioning",
          "Rigging systems for wet fly and soft hackle fishing",
        ],
        sessions: [{ startDate: "2026-06-06", endDate: "2026-06-07" }],
      })} />
      <SchemaScript schema={faqPageSchema([
        { q: "What does the Wet Fly Clinic cover?", a: "The Comprehensive Wet Fly Clinic covers the foundational and advanced techniques of wet fly fishing — traditional downstream swing, active retrieve, and soft hackle presentations. The clinic covers rigging, reading water for wet fly opportunities, pattern selection, and the approach and line management skills that make wet fly fishing consistently productive." },
        { q: "How much does the Wet Fly Clinic cost?", a: "The Comprehensive Wet Fly Clinic is $1,550 per person for both days of on-water instruction. All gear is provided." },
        { q: "Why should I learn wet fly fishing?", a: "Wet flies fish throughout the water column at distance and are consistently the most productive method when conditions align — particularly during emerging hatches when fish won't commit to a dry fly. It is the oldest form of fly fishing and one of the most underutilized techniques today. Anglers who learn to fish wet flies properly report immediate improvement in their catch rates on difficult days." },
        { q: "Where does the Wet Fly Clinic fish?", a: "The clinic fishes the mountain rivers and streams of the Great Smoky Mountains — including the Tuckasegee, the Nantahala, and surrounding watershed. These rivers offer ideal conditions for wet fly presentations across multiple technique styles." },
        { q: "What is the cancellation and payment policy?", a: "CANCELLATION: Weather and emergencies — we will always work with you. Dates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance at the time of reservation. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you. PAYMENT: Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee. To avoid fees entirely, we accept Zelle, Venmo, and personal check at no additional cost — just use the contact form and let us know your preferred method." },
      ])} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[500px] sm:min-h-[380px] overflow-hidden">
        <img src={img("/images/fall-river-fishing.webp")} srcSet={`${img("/images/fall-river-fishing-1280.webp")} 1280w, ${img("/images/fall-river-fishing.webp")} 1440w`} sizes="100vw" alt="Fall fly fishing in the Great Smoky Mountains — Comprehensive Wet Fly Clinic, Mac Brown Fly Fish" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16 sm:pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Smoky Mountain Weekend Schools · Bryson City, NC</p>
          <h1 className="font-serif text-4xl sm:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">Wet Fly Fishing Clinic — Smoky Mountains, NC</h1>
          <p className="font-serif italic text-white/70 text-lg md:text-xl mt-4 sm:mt-5 max-w-2xl">The oldest technique — and one of the most consistently productive.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-10">
            <Link href="/reserve" className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">Inquire &amp; Register <ArrowRight size={14} /></Link>
            <Link href="/smoky-mountain-weekend-schools" className="inline-flex items-center gap-2 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors">All Weekend Schools</Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            The Comprehensive Wet Fly Clinic is a weekend fly fishing school in Bryson City, North Carolina — <PriceTag priceKey="weekendFlyFishingSchool" as="span" />, covering the oldest and most underutilized technique in fly fishing. Wet flies fish throughout the water column at distance and are consistently the most productive method when conditions align. Taught on the wild streams of the Great Smoky Mountains by FFI Certified Instructors.
          </p>
        </div>
      </section>

      {/* DETAILS STRIP */}
      <div className="bg-primary text-primary-foreground py-5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
          <div className="flex items-center gap-3"><Calendar size={16} className="shrink-0 opacity-70" /><span className="text-sm font-semibold tracking-wide">June 6–7, 2026</span></div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <div className="flex items-center gap-3"><MapPin size={16} className="shrink-0 opacity-70" /><span className="text-sm font-semibold tracking-wide">Bryson City, NC · Great Smoky Mountains</span></div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <PriceTag priceKey="weekendFlyFishingSchool" as="span" className="text-sm font-bold tracking-wide" />
        </div>
      </div>

      {/* INTRO */}
      <section className="py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">The wet fly is the oldest technique in fly fishing and one of the most overlooked by modern anglers who have been told the story that nymphing is more productive or dry fly fishing is more refined. Neither claim is consistently true. Wet flies fish throughout the water column at distance, cover more water per hour than almost any other method, and produce takes that are among the most exciting in the sport.</p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-6">The soft hackle swing, the traditional wet fly presentation, the induced take at the end of the drift — these are techniques that consistently fool the most fish on the most water and are taught at only a fraction of the fly fishing schools in operation today. This clinic changes that.</p>
          <blockquote className="mt-10 border-l-2 border-primary pl-6 text-left max-w-xl mx-auto">
            <p className="font-serif text-lg italic text-foreground">"The wet fly is the quiet secret of the most consistently successful anglers on the stream. It has been for centuries. Learn it properly and you will never look at a piece of moving water the same way again."</p>
          </blockquote>
        </div>
      </section>

      {/* WHO FOR */}
      <section className="py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-4">Who This Clinic Is For</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">The most<br />overlooked technique.</h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">Whether you are entirely new to wet fly fishing or you have swung flies for years without understanding why they work, this clinic builds genuine, lasting skill.</p>
            </div>
            <div className="lg:w-2/3">
              <ul className="space-y-4">
                {whoForItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted-foreground leading-relaxed">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO DIVIDER */}
      <div className="grid grid-cols-2 gap-0">
        <div className="aspect-video overflow-hidden"><img src={img("/images/dsc-2190.webp")} srcSet={`${img("/images/dsc-2190-1280.webp")} 1280w, ${img("/images/dsc-2190.webp")} 1920w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Mountain river in the Great Smoky Mountains — wet fly fishing water" className="w-full h-full object-cover" /></div>
        <div className="aspect-video overflow-hidden"><img src={img("/images/fall-pool-reflection.webp")} srcSet={`${img("/images/fall-pool-reflection-1280.webp")} 1280w, ${img("/images/fall-pool-reflection.webp")} 1600w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Fall pool reflection on a mountain river — classic wet fly water, Bryson City NC" className="w-full h-full object-cover" /></div>
      </div>

      {/* CURRICULUM */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">What You Will Learn</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-16">Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((item, i) => (
              <div key={i} className="bg-white border border-border p-7 flex flex-col">
                <div className="w-8 h-0.5 bg-primary mb-5" />
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-muted/30 border-y border-border">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Common Questions</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
          <FaqAccordion />
        </div>
      </section>

      {/* BOOKING WIDGET */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-10">Ready to Book</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <div className="bg-white border border-border p-8 flex flex-col">
              <div className="mb-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5">2-Day School</p>
                <h2 className="font-serif text-xl font-bold text-foreground">Comprehensive Wet Fly Clinic</h2>
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                {["All skill levels welcome", "Bryson City, NC · Great Smoky Mountains", "Small groups — hands-on instruction", "All equipment provided", "2026 dates available"].map((inc, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground"><Check size={13} className="text-primary shrink-0" />{inc}</li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-primary/90 transition-colors">Book This Clinic <ArrowRight size={13} /></Link>
                <a href="tel:+18287361469" className="inline-flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-[0.15em] pt-2 hover:text-foreground transition-colors">Call (828) 736-1469</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-primary text-primary-foreground text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Learn the technique most anglers overlook.</h2>
          <p className="text-primary-foreground/75 mb-10 leading-relaxed text-lg">Enrollment is limited. Contact us to check availability for 2026 dates and secure your spot in the Comprehensive Wet Fly Clinic.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">Inquire &amp; Register <ArrowRight size={14} /></Link>
            <a href="tel:+18287361469" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors">Call (828) 736-1469</a>
          </div>
          <p className="mt-10 text-primary-foreground/50 text-sm">
            <Link href="/smoky-mountain-weekend-schools" className="underline underline-offset-4 hover:text-primary-foreground transition-colors">View all four weekend schools →</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
