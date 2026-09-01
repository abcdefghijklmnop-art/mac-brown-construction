import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Calendar } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { courseSchema, faqPageSchema } from "@/lib/schema";
import FaqAccordion from "./faq-accordion";
import { img } from "@/lib/asset";
import { PriceTag } from "@/components/price-tag";

export const metadata: Metadata = {
  title: { absolute: "Euro & Nymphing Weekend Clinic | Smoky Mountains NC" },
  description: "Take your nymph fishing to the next level. Mac Brown's nymph clinic covers Euro nymphing, indicator fishing, and reading the water in the Smoky Mountains.",
  alternates: { canonical: "https://macbrownflyfish.com/nymph-fishing-clinic/" },
  openGraph: {
    title: "Comprehensive Nymph Fishing Clinic — Mac Brown Fly Fish, Bryson City NC",
    description: "Weekend nymph fishing school in the Great Smoky Mountains. Indicator nymphing, Euro nymphing, rigging systems, strike detection. All skill levels. Bryson City, NC.",
    url: "https://macbrownflyfish.com/nymph-fishing-clinic/",
    images: [{ url: "https://macbrownflyfish.com/images/rainbow-trout.webp" }],
  },
  twitter: { card: "summary_large_image" },
};

const curriculum = [
  { title: "Understanding the Subsurface World", body: "Nymphing begins below the surface — and most anglers fish it blind. Learn to read the water column: where nymphs concentrate, how current speed and depth affect their behavior, where trout hold to intercept them, and how water temperature, season, and light conditions change everything. This subsurface awareness is what separates productive nymph fishing from guessing." },
  { title: "Rigging Systems — From Simple to Precise", body: "Single nymph, tandem rig, drop shot, New Zealand strike indicator, and Euro leader setups — each has specific conditions where it outperforms the others. Learn to build and adjust each rig quickly, understand the logic behind each setup, and develop the judgment to know which system to reach for based on what the water and the fish are telling you." },
  { title: "Indicator Nymphing — Setup, Depth & Strike Detection", body: "The strike indicator is one of the most misunderstood tools in fly fishing. Most anglers set it and forget it — then miss half their strikes. Learn to set indicator depth precisely for the water you are fishing, adjust it as conditions change, and read the indicator with the attention it deserves: every pause, twitch, and hesitation is information about what is happening below the surface." },
  { title: "Tight-Line & Euro Nymphing Fundamentals", body: "European nymphing techniques — Czech nymphing, Polish nymphing, French leader fishing — have transformed competitive fly fishing and are increasingly dominating mountain trout rivers worldwide. Learn the fundamental tight-line approach: leader construction, rod position, contact with the fly, and the direct strike detection that makes this system so devastatingly effective in the right conditions." },
  { title: "High-Stick Nymphing — The Mountain River Standard", body: "In the pocket water and runs of the Great Smoky Mountains, high-stick nymphing is often the most productive approach on the stream. Learn to keep the line off the water, maintain contact with the fly throughout the drift, and cover pocket water systematically — fishing the seams, the edges, and the cushions behind rocks where the largest fish in the run are holding." },
  { title: "Weight Selection & Adjustment", body: "Getting the fly to the right depth in the shortest possible drift is a function of weight — and most anglers either over-weight or under-weight their rigs constantly. Learn to assess depth and current speed, select the right weight for the situation, and adjust in real time as conditions change throughout the day. Proper weight is not a set-it-and-forget-it decision — it is an ongoing conversation with the water." },
  { title: "Detecting Subtle Strikes", body: "The majority of nymph strikes are not dramatic. They are a pause, a slight acceleration of the indicator, a change in direction, a moment of unexpected resistance in the line. Train your eyes and your hands to recognize these signals and respond before the fish feels resistance and rejects the fly. Strike detection is a skill — and like all skills, it is built through deliberate practice with good instruction." },
  { title: "Reading Subsurface Water", body: "The surface of the river reveals where fish can hold — but not always where they are holding. Learn to read the hydraulics beneath the surface: how deep water slows current, how the trough behind a boulder creates a feeding lane, how subsurface structure creates the ambush points where large trout spend most of their time. This is the water reading that makes nymph fishing a precision discipline." },
  { title: "Seasonal Nymphing Strategies", body: "Nymphing in March is not the same as nymphing in August — and understanding how fish behavior, water temperature, and insect activity change across the season changes how you rig, where you fish, and how you present the fly. Learn the seasonal patterns that apply to the mountain rivers of the Southern Appalachians and translate them to any trout river you will ever fish." },
];

const whoForItems = [
  "Beginners who want to learn the most consistently productive technique in trout fly fishing",
  "Anglers who have tried nymphing but are frustrated by poor hook-up rates and missed strikes",
  "Dry fly anglers who want to keep catching fish when the surface is not active",
  "Anyone who wants to understand Euro nymphing and tight-line techniques properly",
  "Guides and instructors who want to refine their nymphing instruction and rigging knowledge",
  "Anglers preparing for a trip to technical nymph water who want to arrive with real skills",
];

export default function NymphFishingClinic() {
  return (
    <div className="w-full">
      <SchemaScript schema={courseSchema({
        price: "1550",
        name: "Nymph Fishing Clinic — Weekend School, Bryson City NC",
        description: "Weekend nymph fishing clinic in Bryson City, North Carolina, taught by Mac Brown — the only FFI Master Casting Instructor in North Carolina and the author of Casting Angles. Students learn both traditional indicator nymphing and Euro nymphing (tight-line technique), rigging systems, strike detection, and how to read subsurface water on the Tuckasegee River. Mac has been teaching nymph fishing in the Smoky Mountains since 1987. All skill levels welcome — nymphing accounts for the majority of trout caught on a fly rod, and this clinic covers it from the ground up.",
        url: "/nymph-fishing-clinic",
        image: "https://macbrownflyfish.com/images/rainbow-trout.webp",
        educationalLevel: "AllLevels",
        coursePrerequisites: "Basic fly casting ability recommended. No prior nymph fishing experience required — both indicator and Euro approaches are taught from fundamentals.",
        teaches: [
          "Indicator nymphing setup and depth adjustment",
          "Euro nymphing and tight-line technique",
          "Strike detection and hook-set timing",
          "Rigging systems for different water types",
          "Reading subsurface water and locating holding fish",
          "Fly selection for nymph fishing across seasons",
          "Approach and wading position for nymph presentations",
        ],
        sessions: [{ startDate: "2026-05-23", endDate: "2026-05-24" }],
      })} />
      <SchemaScript schema={faqPageSchema([
        { q: "What does the Nymph Fishing Clinic cover?", a: "The Comprehensive Nymph Fishing Clinic covers indicator nymphing, tight-line nymphing, and Euro nymphing methods — including depth control, rigging, weight selection, reading water for productive holding lies, hookset timing, and the presentation angles that produce most of the fish on most days on most rivers." },
        { q: "How much does the Nymph Fishing Clinic cost?", a: "The Comprehensive Nymph Fishing Clinic is $1,550 per person for both days of on-water instruction. All gear is provided." },
        { q: "What nymphing methods are taught?", a: "The clinic teaches indicator nymphing, tight-line nymphing, and Euro nymphing — including Czech and French nymphing techniques. The emphasis is on understanding when each method is most effective and developing the depth control, drift reading, and hookset timing that most anglers never fully develop." },
        { q: "Where does the Nymph Fishing Clinic fish?", a: "The clinic fishes the mountain rivers and streams of the Great Smoky Mountains — including the Tuckasegee, the Nantahala, and surrounding watershed. Nymph fishing is productive year-round on these rivers, making this clinic effective in any season." },
        { q: "What is the cancellation and payment policy?", a: "CANCELLATION: Weather and emergencies — we will always work with you. Dates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance at the time of reservation. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you. PAYMENT: Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee. To avoid fees entirely, we accept Zelle, Venmo, and personal check at no additional cost — just use the contact form and let us know your preferred method." },
      ])} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[500px] sm:min-h-[380px] overflow-hidden">
        <img src={img("/images/rainbow-trout.webp")} srcSet={`${img("/images/rainbow-trout-1280.webp")} 1280w, ${img("/images/rainbow-trout.webp")} 1920w`} sizes="100vw" alt="Rainbow trout in the net — Comprehensive Nymph Fishing Clinic, Mac Brown Fly Fish, Bryson City NC" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16 sm:pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Smoky Mountain Weekend Schools · Bryson City, NC</p>
          <h1 className="font-serif text-4xl sm:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">Nymph Fishing Clinic — Smoky Mountains, NC</h1>
          <p className="font-serif italic text-white/70 text-lg md:text-xl mt-4 sm:mt-5 max-w-2xl">Where the majority of trout are caught — taught precisely.</p>
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
            The Comprehensive Nymph Fishing Clinic is a weekend fly fishing school in Bryson City, North Carolina — <PriceTag priceKey="weekendFlyFishingSchool" as="span" />, covering indicator nymphing, tight-line, and Euro nymphing methods, depth control, rigging, and the hookset timing most anglers never develop. The most productive technique on most days — taught on the wild streams of the Great Smoky Mountains by FFI Certified Instructors.
          </p>
        </div>
      </section>

      {/* DETAILS STRIP */}
      <div className="bg-primary text-primary-foreground py-5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
          <div className="flex items-center gap-3"><Calendar size={16} className="shrink-0 opacity-70" /><span className="text-sm font-semibold tracking-wide">May 23–24, 2026</span></div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <div className="flex items-center gap-3"><MapPin size={16} className="shrink-0 opacity-70" /><span className="text-sm font-semibold tracking-wide">Bryson City, NC · Great Smoky Mountains</span></div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <PriceTag priceKey="weekendFlyFishingSchool" as="span" className="text-sm font-bold tracking-wide" />
        </div>
      </div>

      {/* INTRO */}
      <section className="py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">Nymphing accounts for the majority of trout caught on a fly rod — and most anglers are leaving fish on the table with poor rigs, incorrect depth, and strike detection that misses far more takes than it catches. The gap between average nymph fishing and good nymph fishing is not talent. It is instruction and deliberate practice.</p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-6">This clinic covers the full spectrum — from traditional indicator nymphing to European tight-line techniques — with a heavy emphasis on the rigging systems, the water reading, and the strike detection that turn nymphing from a guessing game into a precision discipline. You will leave with a clear understanding of what you were doing wrong and exactly how to fix it.</p>
          <blockquote className="mt-10 border-l-2 border-primary pl-6 text-left max-w-xl mx-auto">
            <p className="font-serif text-lg italic text-foreground">"Most anglers are catching one fish for every four that take their nymph. The four they miss are not bad luck — they are a fixable problem. We fix it here."</p>
          </blockquote>
        </div>
      </section>

      {/* WHO FOR */}
      <section className="py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-4">Who This Clinic Is For</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">Stop leaving<br />fish on the table.</h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">Whether you are just picking up a nymph rig for the first time or you have been nymphing for years with inconsistent results, this clinic rebuilds your approach on a foundation that works.</p>
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
        <div className="aspect-[4/3] overflow-hidden"><img src={img("/images/upper-nantahala-nick.webp")} alt="Nymph fishing the upper Nantahala River in the Great Smoky Mountains" className="w-full h-full object-cover" /></div>
        <div className="aspect-[4/3] overflow-hidden"><img src={img("/images/client-rainbow-1.webp")} srcSet={`${img("/images/client-rainbow-1-800.webp")} 800w, ${img("/images/client-rainbow-1.webp")} 1323w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Client with a rainbow trout caught nymph fishing in Western North Carolina" className="w-full h-full object-cover object-top" /></div>
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
                <h2 className="font-serif text-xl font-bold text-foreground">Comprehensive Nymph Fishing Clinic</h2>
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Turn nymphing into a precision discipline.</h2>
          <p className="text-primary-foreground/75 mb-10 leading-relaxed text-lg">Enrollment is limited. Contact us to check availability for 2026 dates and secure your spot in the Comprehensive Nymph Fishing Clinic.</p>
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
