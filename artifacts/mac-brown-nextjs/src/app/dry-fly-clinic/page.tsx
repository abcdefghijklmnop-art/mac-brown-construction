import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Calendar } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { courseSchema, faqPageSchema } from "@/lib/schema";
import FaqAccordion from "./faq-accordion";
import { img } from "@/lib/asset";
import { PriceTag } from "@/components/price-tag";

export const metadata: Metadata = {
  title: { absolute: "Dry Fly Fishing Weekend Clinic | Smoky Mountains NC" },
  description: "Master dry fly fishing for wild trout in the Smoky Mountains. Learn presentation, drift, and fly selection in a hands-on clinic setting.",
  alternates: { canonical: "https://macbrownflyfish.com/dry-fly-clinic/" },
  openGraph: {
    title: "Comprehensive Dry Fly Clinic — Mac Brown Fly Fish, Bryson City NC",
    description: "Weekend dry fly fishing school in the Great Smoky Mountains. Drag-free drifts, hatch matching, presentation casts. All skill levels. Bryson City, NC.",
    url: "https://macbrownflyfish.com/dry-fly-clinic/",
    images: [{ url: "https://macbrownflyfish.com/images/fall-pool-reflection.webp" }],
  },
  twitter: { card: "summary_large_image" },
};

const curriculum = [
  { title: "The Anatomy of a Drag-Free Drift", body: "Drag is the enemy — and it is operating far more often than most anglers recognize. Learn to see drag before the fish does: micro-drag, drag shadow, and the subtle belly in the line that telegraphs an unnatural drift before the fly ever reaches the lie. Understanding what drag actually is, where it originates, and how the current acts on your fly line and leader is the foundation everything else is built on." },
  { title: "Reading Rising Fish", body: "Not all rises are equal. The subtle sip, the aggressive head-and-tail, the splashy take — each tells you something specific about what the fish is eating, where it is positioned in the water column, and how urgently it is feeding. Learn to decode rise forms in real time, identify feeding lanes with precision, and approach fish in a way that maximizes your opportunity before you ever make a cast." },
  { title: "Presentation Casts for Surface Fishing", body: "The reach cast, the curve cast, the pile cast, the parachute cast, the dump cast — these are not advanced techniques for the elite. They are essential tools for anyone who wants to place a dry fly precisely and keep it drag-free long enough to matter. Each cast is taught in context: when to use it, why it works, and how to execute it cleanly under the pressure of a feeding fish." },
  { title: "Approach & Wading Strategy", body: "Getting close enough to cast accurately without spooking the fish is a skill that is almost never discussed seriously in fly fishing education. Water displacement, vibration, silhouette, the angle of your approach relative to the sun — all of these affect your success before you make a single cast. Learn to read the water and position yourself for the best possible chance at each fish." },
  { title: "Leader Design & Tippet Selection", body: "For dry fly fishing, the leader is not an afterthought — it is a precision instrument. Length, taper, material, and tippet diameter all affect how your fly lands, how it drifts, and whether a fish takes or refuses. Learn to design and build leaders for specific water types, current speeds, and fly sizes — and understand when and how to adjust throughout the day." },
  { title: "Entomology for the Dry Fly Angler", body: "You do not need an entomology degree to match a hatch effectively. You need to understand the lifecycle stages that matter — emergers, duns, and spinners — for the four major orders: mayflies, caddisflies, stoneflies, and midges. Learn to identify what fish are targeting, what stage of the hatch you are in, and which imitation to reach for — in minutes, not hours." },
  { title: "Pattern Selection & Matching the Hatch", body: "Imitation and presentation are a partnership. The best fly in the wrong drift is a refusal. The right fly in a perfect drift is a take. Learn how to match the hatch with confidence — when size matters more than pattern, when color is the trigger, when a parachute outfishes a comparadun, and when breaking from the hatch entirely is the right call." },
  { title: "Mending After Delivery", body: "The cast is only the beginning. What you do with the line after it lands — upstream mend, downstream mend, stack mend, aerial mend — determines whether your fly drifts naturally or drags immediately. Learn to mend with intention: reading the current, anticipating where drag will originate, and correcting it before it costs you the drift." },
  { title: "Reading the Hatch — Timing & Duration", body: "Hatches are not random. They respond to water temperature, barometric pressure, time of day, and season. Learn to predict when a hatch will begin, how long it will last, which flies will emerge in sequence, and how to be in the right place at the right time — positioned, rigged, and ready — when the water comes alive." },
];

const whoForItems = [
  "Beginners who want to learn dry fly fishing correctly from the start",
  "Intermediate anglers who are tired of watching other people catch rising fish",
  "Experienced anglers who want to close the gap between what they know and what they can execute",
  "Anyone who has struggled with drag and wants to finally understand why it happens and how to prevent it",
  "Anglers preparing for a specific trip — a hatch, a destination, a season — who want to arrive ready",
  "Anyone who loves watching a fish eat a dry fly and wants to do it more often",
];

export default function DryFlyClinic() {
  return (
    <div className="w-full">
      <SchemaScript schema={courseSchema({
        price: "1550",
        name: "Comprehensive Dry Fly Clinic — Weekend School, Bryson City NC",
        description: "Weekend dry fly fishing clinic in Bryson City, North Carolina, taught by Mac Brown — the only FFI Master Casting Instructor in North Carolina and the author of Casting Angles. Students learn to identify hatches, match the hatch, achieve drag-free drifts, and present effectively to rising fish on the Tuckasegee River. Mac has been guiding and teaching on these waters since 1987. All skill levels are welcome — from first-time dry fly anglers to experienced trout fishers who want to sharpen their approach to surface fishing.",
        url: "/dry-fly-clinic",
        image: "https://macbrownflyfish.com/images/fall-pool-reflection.webp",
        educationalLevel: "AllLevels",
        coursePrerequisites: "Basic fly casting ability recommended. Experience with an overhead cast is helpful. No prior dry fly fishing experience required.",
        teaches: [
          "Hatch identification and matching the hatch",
          "Drag-free drift and upstream mending",
          "Presentation casts for technical dry fly water",
          "Reading rising fish and feeding lanes",
          "Leader and tippet selection for dry flies",
          "Fly pattern selection across seasons and hatches",
          "Approach and positioning to avoid spooking fish",
        ],
        sessions: [{ startDate: "2026-06-13", endDate: "2026-06-14" }],
      })} />
      <SchemaScript schema={faqPageSchema([
        { q: "What does the Dry Fly Clinic cover?", a: "The Comprehensive Dry Fly Clinic covers surface presentations, reading rises, matching the hatch, drag-free drift, the approach and mending skills that fool selective trout, and the casting accuracy required for dry fly fishing. Both days are spent on the wild trout streams of the Great Smoky Mountains with FFI Certified Instructors." },
        { q: "How much does the Dry Fly Clinic cost?", a: "The Comprehensive Dry Fly Clinic is $1,550 per person for both days of on-water instruction. All gear is provided." },
        { q: "What skill level do I need for the Dry Fly Clinic?", a: "All skill levels are welcome. The clinic is designed to meet every participant where they are — whether you have never matched a hatch or you are an experienced angler looking to fill technical gaps in your dry fly game." },
        { q: "Where does the Dry Fly Clinic fish?", a: "The clinic fishes the mountain rivers and streams of the Great Smoky Mountains — including the Tuckasegee, the Nantahala, and surrounding watershed. These rivers offer excellent dry fly fishing with multiple hatch cycles throughout the season." },
        { q: "What is the cancellation and payment policy?", a: "CANCELLATION: Weather and emergencies — we will always work with you. Dates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance at the time of reservation. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you. PAYMENT: Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee. To avoid fees entirely, we accept Zelle, Venmo, and personal check at no additional cost — just use the contact form and let us know your preferred method." },
      ])} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[500px] sm:min-h-[380px] overflow-hidden">
        <img src={img("/images/fall-pool-reflection.webp")} srcSet={`${img("/images/fall-pool-reflection-1280.webp")} 1280w, ${img("/images/fall-pool-reflection.webp")} 1600w`} sizes="100vw" alt="Fall pool on a mountain river — Comprehensive Dry Fly Clinic, Mac Brown Fly Fish, Bryson City NC" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16 sm:pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Smoky Mountain Weekend Schools · Bryson City, NC</p>
          <h1 className="font-serif text-4xl sm:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">Dry Fly Fishing Clinic — Smoky Mountains, NC</h1>
          <p className="font-serif italic text-white/70 text-lg md:text-xl mt-4 sm:mt-5 max-w-2xl">The pinnacle of the sport — taught properly.</p>
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
            The Comprehensive Dry Fly Clinic is a weekend fly fishing school in Bryson City, North Carolina — <PriceTag priceKey="weekendFlyFishingSchool" as="span" />, covering surface presentations, reading rises, matching the hatch, drag-free drift, and the approach skills that fool selective trout. Taught on the wild streams of the Great Smoky Mountains by FFI Certified Instructors. All gear provided, limited enrollment.
          </p>
        </div>
      </section>

      {/* DETAILS STRIP */}
      <div className="bg-primary text-primary-foreground py-5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
          <div className="flex items-center gap-3"><Calendar size={16} className="shrink-0 opacity-70" /><span className="text-sm font-semibold tracking-wide">June 13–14, 2026</span></div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <div className="flex items-center gap-3"><MapPin size={16} className="shrink-0 opacity-70" /><span className="text-sm font-semibold tracking-wide">Bryson City, NC · Great Smoky Mountains</span></div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <PriceTag priceKey="weekendFlyFishingSchool" as="span" className="text-sm font-bold tracking-wide" />
        </div>
      </div>

      {/* INTRO */}
      <section className="py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">A truly drag-free drift is rarer than most anglers realize and more achievable than they think. Most dry fly fishing failures are not fly selection problems — they are presentation problems. The fish refused because the fly was dragging, the approach spooked the lie, or the cast put the line over the fish before the fly arrived. This clinic fixes all of that.</p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-6">Over two days in the mountain rivers of the Great Smoky Mountains, you will learn the casts, the line control, the leader design, the water reading, and the hatch-matching skills that make rising fish a genuine target — not a frustrating mystery. Every concept is taught in context, on the water, with immediate feedback and real fish in front of you.</p>
          <blockquote className="mt-10 border-l-2 border-primary pl-6 text-left max-w-xl mx-auto">
            <p className="font-serif text-lg italic text-foreground">"The drag-free drift is not a happy accident. It is an engineering problem with a clear solution — and once you understand what's causing your drag, you will never look at a rising fish the same way again."</p>
          </blockquote>
        </div>
      </section>

      {/* WHO FOR */}
      <section className="py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-4">Who This Clinic Is For</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">All levels.<br />One goal.</h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">Whether you have never caught a fish on a dry fly or you are chasing your first technical hatch, this clinic meets you where you are and moves you forward.</p>
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
        <div className="aspect-video overflow-hidden"><img src={img("/images/tuckasegee-summer.webp")} srcSet={`${img("/images/tuckasegee-summer-1280.webp")} 1280w, ${img("/images/tuckasegee-summer.webp")} 1920w`} sizes="(max-width: 768px) 100vw, 50vw" alt="The Tuckasegee River in summer — ideal dry fly water, Bryson City NC" className="w-full h-full object-cover" /></div>
        <div className="aspect-video overflow-hidden"><img src={img("/images/brown-trout.webp")} alt="Brown trout — the target species of the Smoky Mountain dry fly clinic" className="w-full h-full object-cover" /></div>
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
                <h2 className="font-serif text-xl font-bold text-foreground">Comprehensive Dry Fly Clinic</h2>
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to stop watching rising fish?</h2>
          <p className="text-primary-foreground/75 mb-10 leading-relaxed text-lg">Enrollment is limited. Contact us to check availability for 2026 dates and secure your spot in the Comprehensive Dry Fly Clinic.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">Inquire &amp; Register <ArrowRight size={14} /></Link>
            <a href="tel:+18287361469" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors">Call (828) 736-1469</a>
          </div>
          <p className="mt-10 text-primary-foreground/50 text-sm">
            <Link href="/smoky-mountain-weekend-schools" className="underline underline-offset-4 hover:text-primary-foreground transition-colors">View all four weekend schools →</Link>
          </p>
          <p className="mt-3 text-primary-foreground/50 text-sm">
            <Link href="/blog/dry-fly-philosophy-floating-fly" className="underline underline-offset-4 hover:text-primary-foreground transition-colors">Mac's dry fly philosophy, published in The Floating Fly →</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
