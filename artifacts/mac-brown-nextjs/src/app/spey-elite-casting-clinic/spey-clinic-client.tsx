"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, ChevronUp, MapPin, Calendar } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { img } from "@/lib/asset";
import { PriceTag } from "@/components/price-tag";

const whoForItems = [
  "Single-hand casters ready to add a powerful new dimension to their fly fishing",
  "Trout anglers wanting to reach water and make presentations currently beyond their range",
  "Steelhead and salmon anglers building the foundational skills the pursuit demands",
  "Guides and shop staff pursuing FFI Two-Handed Casting Instructor certification",
  "Anyone who has attempted Spey casting on their own and hit a frustrating wall",
];

const curriculum = [
  {
    title: "Anchor Placement & D-Loop Formation",
    body: "The foundation every Spey cast is built on. Most self-taught two-handed casters struggle here without knowing it — and every downstream problem traces back to this one upstream cause. Get anchor placement right and the rest of the cast begins to make sense immediately.",
  },
  {
    title: "Skagit Casting",
    body: "Short, powerful, and built for heavy flies, sink tips, and tight bankside quarters. The Skagit system is the workhorse of Spey fishing — practical, adaptable, and devastatingly effective when executed correctly.",
  },
  {
    title: "Scandi Casting",
    body: "Long, elegant, and built for distance and delicacy on open water. Understanding when to reach for Skagit versus Scandi — and why — is as important as mastering both systems.",
  },
  {
    title: "Switch Rod Techniques",
    body: "The versatile bridge between single-hand and full Spey. An increasingly essential tool for trout anglers on big water and one of the fastest-growing disciplines in the sport.",
  },
  {
    title: "Sustained Anchor Casts",
    body: "Snake roll, Perry Poke, Snap-T, Double Spey — each cast has its conditions, its logic, and its specific advantages. You will learn not just how to execute each one but precisely when and why to reach for it.",
  },
  {
    title: "Running Line & Shooting Head Systems",
    body: "How different head configurations change casting behavior, and how to adjust your technique to match the system you are fishing — a critical skill most anglers never fully develop.",
  },
  {
    title: "Aerial Mending & Presentation",
    body: "Getting the fly to the fish is only half the job. Two-handed rod mending opens up drift presentations and current management that single-hand anglers simply cannot achieve. This alone is worth the weekend.",
  },
  {
    title: "FFI Two-Handed Certification Preparation",
    body: "For candidates pursuing the credential — complete task preparation, mock testing, and diagnostic feedback from FFI Level 2 examiners with a near-100% certification pass rate over many years.",
  },
];

const faqs = [
  {
    q: "What is the Spey Elite Casting Clinic?",
    a: "The Spey Elite Casting Clinic is an intensive 2-day program covering switch rod and Spey casting mechanics — anchor placement, D-loop formation, two-handed rod mechanics, line selection, advanced casts, and the presentation techniques required for steelhead, salmon, and large-water trout fishing. Led by FFI Master Casting Instructors in Bryson City, North Carolina.",
  },
  {
    q: "How much does the Spey Elite Casting Clinic cost?",
    a: "The Spey Elite Casting Clinic is $1,550 per person for both full days of instruction.",
  },
  {
    q: "Do I need prior Spey casting experience?",
    a: "Some familiarity with single-hand fly casting is helpful, but prior Spey casting experience is not required. The clinic begins with foundational two-handed mechanics and progresses to advanced casts. Participants with existing Spey experience will focus on refining technique and eliminating faults.",
  },
  {
    q: "Is two-handed rod gear provided?",
    a: "Yes — all two-handed rods and lines are provided. Participants are welcome to bring their own Spey or switch rod if they want specific work on their personal setup.",
  },
  {
    q: "What is the cancellation and payment policy?",
    a: "CANCELLATION: Weather and emergencies — we will always work with you. Dates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance at the time of reservation. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you.\n\nPAYMENT: Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee. To avoid fees entirely, we accept Zelle, Venmo, and personal check at no additional cost — just use the contact form and let us know your preferred method.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SpeyEliteCastingClinic() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full">
      <SchemaScript schema={faqSchema} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[500px] sm:min-h-[380px] overflow-hidden">
        <img
          src={img("/images/masterclass/mc-13.webp")}
          alt="Spey casting instruction group session at Mac Brown Fly Fish, Bryson City NC — two-handed fly casting clinic"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16 sm:pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            FFI Master Instructor · Bryson City, NC · Tuckasegee River
          </p>
          <h1 className="font-serif text-4xl sm:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
            Spey Elite Casting Clinic
          </h1>
          <p className="text-white/80 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
            Two-Handed Fly Casting School — Great Smoky Mountains
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-10">
            <Link
              href="/reserve"
              className="inline-flex items-center gap-2 bg-white text-foreground px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-white/90 transition-colors"
            >
              Book Your Spot <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/masterclass-fly-casting-workshop"
              className="inline-flex items-center gap-2 border border-white/50 text-white px-8 py-3.5 text-sm font-semibold tracking-wide hover:border-white hover:bg-white/10 transition-colors"
            >
              View All Casting Clinics
            </Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            The Spey Elite Casting Clinic in Bryson City, North Carolina is an intensive 2-day program covering switch rod and Spey casting mechanics, anchor placement, D-loop formation, and advanced two-handed casting techniques — <PriceTag priceKey="masterclassWorkshop" as="span" />, led by FFI Master Casting Instructors. All two-handed rods and lines provided.
          </p>
        </div>
      </section>

      {/* SESSION DATE CARD */}
      <section className="bg-primary text-white py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Calendar className="w-6 h-6 text-white/60 shrink-0" />
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Next Session</p>
              <p className="text-xl font-semibold">July 11–12, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-white/60 shrink-0" />
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Location</p>
              <p className="text-xl font-semibold">Bryson City, NC · Tuckasegee River</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Investment</p>
              <PriceTag priceKey="masterclassWorkshop" as="p" className="text-xl font-semibold" />
            </div>
          </div>
          <Link
            href="/reserve"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-primary px-7 py-3 text-sm font-bold tracking-wide hover:bg-white/90 transition-colors"
          >
            Enroll Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* OPENING */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col xl:flex-row gap-16 items-center">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
                Southeast's Premier Spey Instruction
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                The most powerful, elegant cast in fly fishing is closer than you think.
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Most anglers who watch Spey casting for the first time feel one of two things: pure inspiration or
                  quiet intimidation. The sweeping D-loop, the effortless distance, the way a well-executed cast unrolls
                  across a wide river like it was pulled from the water itself — it looks like something reserved for a
                  very specific kind of angler.
                </p>
                <p>
                  It isn't. With the right instruction, two-handed casting is not only learnable but transformational —
                  opening up water, techniques, and a dimension of fly fishing that single-hand anglers never access. The
                  barrier is not talent or experience. It is instruction.
                </p>
                <p>
                  The <strong className="text-foreground">Spey Elite Casting Clinic in Bryson City, North Carolina</strong>{" "}
                  is the Southeast's premier destination for two-handed fly casting instruction. Whether you are picking
                  up a switch rod for the first time, looking to refine mechanics you've been working on for years, or
                  pursuing FFI Two-Handed Casting Instructor certification, this clinic delivers.
                </p>
              </div>
            </div>
            <div className="hidden xl:block xl:w-[40%] shrink-0">
              <img
                src={img("/images/masterclass/mc-12.webp")}
                alt="Mac Brown providing two-handed Spey casting instruction at the Tuckasegee River — Mac Brown Fly Fish Bryson City NC"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Who This Clinic Is For
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12">
            If you've ever watched someone Spey cast and thought —{" "}
            <em>I want to do that</em> — this weekend is your answer.
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            {whoForItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PHOTO DIVIDER */}
      <div className="w-full aspect-[16/6] overflow-hidden">
        <img
          src={img("/images/masterclass/mc-12.webp")}
          alt="Spey casting instruction at Mac Brown Fly Fish — two-handed fly casting clinic, Bryson City NC"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CURRICULUM */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Full Curriculum</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">What You Will Learn</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Two full days covering every major system and cast — from anchor fundamentals to FFI certification
              preparation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {curriculum.map((item, i) => (
              <div key={i} className="border border-border p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs font-bold">{i + 1}</span>
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-9">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE VENUE */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col xl:flex-row gap-16 items-center">
            <div className="hidden xl:block xl:w-[40%] shrink-0">
              <img
                src={img("/images/masterclass/mc-08.webp")}
                alt="Spey casting clinic at The Fly Fishing Show — Mac Brown Fly Fish Bryson City NC"
                className="w-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">The Venue</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                One of the finest Spey teaching venues in the eastern United States.
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  The <strong className="text-foreground">Tuckasegee River</strong> running through Bryson City, North
                  Carolina is wide enough for full Spey casting, varied enough to practice every anchor position and
                  presentation angle, and beautiful enough to make every hour on the water feel like a privilege.
                </p>
                <p>
                  Bryson City sits within easy reach of{" "}
                  <strong className="text-foreground">
                    Asheville, Cherokee, and the heart of Great Smoky Mountains National Park
                  </strong>
                  . Many participants extend their stay to fish the surrounding water — some of the finest wild trout
                  streams in the eastern United States.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">The Instruction</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            North Carolina's only FFI Master Casting Instructor.
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed max-w-3xl mx-auto text-left">
            <p>
              Mac Brown is North Carolina's only{" "}
              <strong className="text-foreground">FFI Master Casting Instructor</strong> and an FFI Level 2 examiner
              with decades of two-handed casting experience. His team brings a{" "}
              <strong className="text-foreground">near-100% certification pass rate</strong> for CI and MCI candidates
              over many years.
            </p>
            <p>
              World-class guest instructors with international Spey credentials join select clinics throughout the year
              — bringing perspectives shaped by steelhead rivers in the Pacific Northwest and Atlantic salmon runs in
              Iceland.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-10 justify-center">
            <Link
              href="/bio-mac-brown"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              About Mac Brown <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://www.flyfishersinternational.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              FFI Two-Handed Certification Info <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>
          <div className="divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <button
                  className="w-full flex items-center justify-between gap-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-foreground">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <p className="mt-4 text-muted-foreground leading-relaxed text-sm whitespace-pre-line">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATION DOWNLOADS */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
              FFI Certification Resources
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Official FFI Two-Handed Exam Documents
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Download the current official exam evaluation forms for both the THCI and THMCI certifications.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="/downloads/THCI-exam-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3 border border-border p-6 hover:border-primary/50 hover:bg-muted/30 transition-colors group"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
                  THCI · Updated January 2026
                </p>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                  Two Hand Casting Instructor Performance Exam
                </h3>
              </div>
              <span className="text-xs font-medium text-primary mt-auto">Download PDF →</span>
            </a>
            <a
              href="/downloads/THMCI-exam-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3 border border-border p-6 hover:border-primary/50 hover:bg-muted/30 transition-colors group"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
                  THMCI · Updated January 2026
                </p>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                  Two Hand Master Casting Instructor Performance Exam
                </h3>
              </div>
              <span className="text-xs font-medium text-primary mt-auto">Download PDF →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            Southeast's Premier Two-Handed Instruction
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            July 11–12, 2026 · Bryson City, NC
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            The Tuckasegee River. The Southeast's finest Spey teaching venue. Limited enrollment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reserve"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary text-sm font-bold px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Enroll Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-sm font-semibold px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Inquire
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
