"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { faqPageSchema } from "@/lib/schema";
import { useSchedule } from "@/hooks/use-schedule";
import { PriceTag } from "@/components/price-tag";
import { img } from "@/lib/asset";

const discussionTopics = [
  "History of fly casting and where the sport is headed",
  "Intent and fly casting — the most important concept most anglers never fully grasp",
  "Understanding body movements for successful loop control",
  "Fly casting myths debunked — clearing up the fallacies driving regression today",
  "Skills for teaching others — analogies, pantomime, and keeping it simple",
  "Separation of style and substance",
  "Gear considerations — leaders, fly lines, and fly rods",
  "Basic mechanics of the cast, explained from the ground up",
  "Rod loading — from the butt, not just the tip",
  "How effort and force shape every cast you make",
  "Loop efficiency and shape — the two things most lacking in fly casting instruction today",
  "Diagnostics for analyzing the cast",
  "The '5 Essentials' — essential or not? A real discussion",
  "Casting conditions — wind, humidity, atmospheric pressure",
  "Gear adjustments for changing conditions",
];

const outsideTasks = [
  "Complete casting skill sets applied on the tape",
  "Pantomime motions translated to the rod",
  "Drills and exercises designed for teaching others",
  "3D fishing casts — presentation, presentation, presentation",
  "Curves, piles, tucks, accuracy casts, slack-line presentations",
  "Single and double-handed techniques",
  "Fly line hauling and shooting line drills",
  "Advanced casting drills",
  "Aerial mending during and after the stroke",
  "Transverse waves in fly casting",
  "Change of direction — single-handed Spey keys to the kingdom",
];

const whoForItems = [
  "Anyone who loves the sport and wants to understand it at a deeper level",
  "Anglers who feel like they've hit a ceiling and want to know why",
  "Guides and shop staff who want to teach more effectively on the water",
  "Self-taught casters ready to move from guesswork to real understanding",
  "Anglers pursuing FFI CI or MCI certification",
];

const whatToBring = [
  "A 7-weight rod with a bright-colored fly line (Scientific Anglers Expert Distance is ideal)",
  "A 7.5 to 8-foot leader",
  "A notebook and pen — you will want to take notes",
  "If you are preparing for FFI CI or MCI certification, downloading the CI test PDF from the FFI website before you arrive will give you a head start — though it is not required to attend",
  "A 100-foot tape measure and cones for practice sessions (recommended)",
  "A relaxed grip and an open mind",
];

const galleryImages = [
  { src: img("/images/masterclass/mc-10.webp"), alt: "Masterclass casting session outdoors" },
  { src: img("/images/masterclass/mc-11.webp"), alt: "Students casting on the lawn" },
  { src: img("/images/masterclass/mc-12.webp"), alt: "Mac Brown instructing a student" },
  { src: img("/images/masterclass/mc-13.webp"), alt: "Group casting session" },
  { src: img("/images/masterclass/mc-07.webp"), alt: "Class group photo outdoors" },
  { src: img("/images/masterclass/mc-09.webp"), alt: "Mac Brown demonstrating casting" },
  { src: img("/images/masterclass/mc-02.webp"), alt: "Indoor casting clinic" },
  { src: img("/images/masterclass/mc-03.webp"), alt: "Masterclass group photo" },
  { src: img("/images/masterclass/mc-05.webp"), alt: "Fly Fishing Show class group" },
  { src: img("/images/masterclass/mc-08.webp"), alt: "Casting clinic at the show" },
  { src: img("/images/masterclass/mc-15.webp"), alt: "Mac Brown with Gary Borger" },
  { src: img("/images/masterclass/mc-18.webp"), alt: "Mac Brown at The Fly Fishing Show" },
];

const faqs = [
  {
    q: "What is the Masterclass Fly Casting Workshop?",
    a: "The Masterclass Fly Casting Workshop is an intensive 2-day casting school in Bryson City, North Carolina, led by FFI Master Casting Instructors. It covers advanced loop control, distance casting, accuracy, single-hand, switch, and Spey techniques, casting history, intent and mechanics, and the teaching skills needed to pass knowledge on. Includes an evening discussion on the second day covering topics not covered in standard instruction.",
  },
  {
    q: "How much does the Masterclass Casting Workshop cost?",
    a: "The Masterclass Fly Casting Workshop is $1,550 per person for both full days of instruction, practice, and the evening discussion session.",
  },
  {
    q: "Who is the Masterclass workshop for?",
    a: "The Masterclass is for any angler who has some casting experience and wants to genuinely improve — whether you want to cast further, fish more effectively, teach others, or simply understand what is actually happening when you cast. Anglers preparing for FFI CI or MCI certification also attend, but certification is not required or expected.",
  },
  {
    q: "What casting styles are covered?",
    a: "The workshop covers single-hand, switch, and Spey casting — including loop control, trajectory, timing, distance, accuracy, haul mechanics, and presentation. The second day includes an evening discussion covering casting history, intent, teaching philosophy, and fly casting mechanics.",
  },
  {
    q: "What is the cancellation and payment policy?",
    a: "CANCELLATION: Weather and emergencies — we will always work with you. Dates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance at the time of reservation. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you.\n\nPAYMENT: Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee. To avoid fees entirely, we accept Zelle, Venmo, and personal check at no additional cost — just use the contact form and let us know your preferred method.",
  },
];

export default function MasterclassCastingWorkshop() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { masterclassSessions, masterclassDatesSummary, pricing } = useSchedule();

  return (
    <div className="w-full">
      <SchemaScript schema={faqPageSchema([
        { q: "What is the Masterclass Fly Casting Workshop?", a: "The Masterclass Fly Casting Workshop is an intensive 2-day casting school in Bryson City, North Carolina, led by FFI Master Casting Instructors. It covers advanced loop control, distance casting, accuracy, single-hand, switch, and Spey techniques, casting history, intent and mechanics, and the teaching skills needed to pass knowledge on." },
        { q: "How much does the Masterclass Casting Workshop cost?", a: "The Masterclass Fly Casting Workshop is $1,550 per person for both full days of instruction, practice, and the evening discussion session." },
        { q: "Who is the Masterclass workshop for?", a: "The Masterclass is for any angler who has some casting experience and wants to genuinely improve — whether you want to cast further, fish more effectively, teach others, or simply understand what is actually happening when you cast. Anglers preparing for FFI CI or MCI certification also attend, but certification is not required or expected." },
        { q: "What casting styles are covered?", a: "The workshop covers single-hand, switch, and Spey casting — including loop control, trajectory, timing, distance, accuracy, haul mechanics, and presentation. The second day includes an evening discussion covering casting history, intent, teaching philosophy, and fly casting mechanics." },
        { q: "What is the cancellation and payment policy?", a: "CANCELLATION: Weather and emergencies — we will always work with you. Dates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance at the time of reservation. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you. PAYMENT: Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee. To avoid fees entirely, we accept Zelle, Venmo, and personal check at no additional cost — just use the contact form and let us know your preferred method." },
      ])} />

      <section className="relative w-full aspect-video max-h-screen min-h-[500px] sm:min-h-[380px] overflow-hidden">
        <img src={img("/images/masterclass/mc-10.webp")} alt="Masterclass Casting Workshop — Mac Brown Fly Fish, Bryson City NC" className="absolute inset-0 w-full h-full object-cover object-center" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16 sm:pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Advanced Fly Casting · Bryson City, NC · Est. 1987</p>
          <h1 className="font-serif text-4xl sm:text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-4 sm:mb-5">Masterclass Fly Casting Workshop — Bryson City, NC</h1>
          <p className="text-white/70 text-base md:text-lg font-serif italic max-w-2xl">Two days. The most concentrated casting education available in the Southeast.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-10">
            <Link href="/reserve" className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">Reserve Your Spot <ArrowRight size={14} /></Link>
            <Link href="/events-calendar" className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors">2026 Dates</Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            The Masterclass Fly Casting Workshop is an intensive 2-day casting school in Bryson City, North Carolina — <PriceTag priceKey="masterclassWorkshop" as="span" />, led by FFI Master Casting Instructors. Covers loop control, distance casting, accuracy, single-hand, switch, and Spey techniques. Built for any angler ready to fish at a level they have never reached, or the hundreds of successful candidates who have gone down the certification pathway through FFI.
          </p>
        </div>
      </section>

      <section className="bg-primary py-5 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
          <span className="flex items-center gap-2"><Calendar size={14} className="text-white/60" /> {masterclassDatesSummary}</span>
          <span className="flex items-center gap-2"><MapPin size={14} className="text-white/60" /> Bryson City, NC</span>
          <span className="font-bold text-white">{pricing.masterclassWorkshop.display} per person · 2 Full Days</span>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">Fly Casting for the Growth Minded Angler</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>The Masterclass Casting Workshop is two full days of some of the most enjoyable fly casting education you will ever experience — in the heart of the Great Smoky Mountains, with instructors who love sharing this sport as much as you love fishing it. You do not have to be an expert. You just have to love fly fishing and want to keep getting better.</p>
            <p>Over two days you will develop a real understanding of your cast — what is actually happening, what to do when things go sideways, and how to keep improving long after you go home. Most students leave wondering why nobody ever explained it this clearly before. And a lot of them come back.</p>
            <blockquote className="pl-5 border-l-2 border-primary font-serif italic text-foreground/80">"The goal isn't to make you a better caster for a weekend. It's to permanently change the way you understand what you're doing — and give you the tools to keep improving on your own for the rest of your life."</blockquote>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Choose Your Workshop</p>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-10 text-center">Three Masterclass Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {masterclassSessions.map((session) => (
              <div key={session.dates} className="bg-white border border-border p-8 flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-2">{session.dates}</p>
                <h3 className="font-serif text-lg font-bold text-foreground mb-3 leading-snug">{session.program}</h3>
                <div className="flex items-center gap-2 mb-5 text-xs text-muted-foreground"><MapPin size={12} className="text-primary shrink-0" />Bryson City, NC</div>
                <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-border">
                  <Link href="/reserve" className="inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.12em] px-5 py-2.5 hover:bg-primary/90 transition-colors w-full">Book Now</Link>
                  {session.href && <Link href={session.href} className="inline-flex items-center justify-center gap-1.5 border border-border text-foreground text-xs font-semibold uppercase tracking-[0.12em] px-5 py-2.5 hover:bg-muted/50 transition-colors w-full">Details <ArrowRight size={11} /></Link>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Indoor Discussion Topics</p>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">The Theory Behind the Technique</h2>
              <div className="space-y-2">
                {discussionTopics.map((t, i) => (
                  <div key={i} className="flex items-start gap-3"><Check size={13} className="text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground text-sm leading-relaxed">{t}</span></div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">On-Water Tasks</p>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Applied on the Tape</h2>
              <div className="space-y-2">
                {outsideTasks.map((t, i) => (
                  <div key={i} className="flex items-start gap-3"><Check size={13} className="text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground text-sm leading-relaxed">{t}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
        {galleryImages.map((img, i) => (
          <div key={i} className="aspect-square overflow-hidden">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>
        ))}
      </div>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Who This Is For</p>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Is This Workshop Right for You?</h2>
              <div className="space-y-3">
                {whoForItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white border border-border p-4"><Check size={14} className="text-primary mt-0.5 shrink-0" /><span className="text-sm text-muted-foreground leading-relaxed">{item}</span></div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">What to Bring</p>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Come Prepared</h2>
              <div className="space-y-3">
                {whatToBring.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white border border-border p-4"><Check size={14} className="text-primary mt-0.5 shrink-0" /><span className="text-sm text-muted-foreground leading-relaxed">{item}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-border">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Questions</p>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border last:border-0">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left gap-4">
                <span className="font-semibold text-foreground text-sm">{faq.q}</span>
                {openFaq === i ? <ChevronUp size={16} className="text-muted-foreground shrink-0" /> : <ChevronDown size={16} className="text-muted-foreground shrink-0" />}
              </button>
              {openFaq === i && <p className="text-muted-foreground text-sm leading-relaxed pb-5 whitespace-pre-line">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-primary text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">Reserve Your Workshop Spot</h2>
          <p className="text-white/70 mb-8">Limited enrollment. Early registration is strongly recommended.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">Book Online <ArrowRight size={14} /></Link>
            <a href="mailto:macbrownflyfish@gmail.com" className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors">Email Mac</a>
          </div>
        </div>
      </section>
    </div>
  );
}
