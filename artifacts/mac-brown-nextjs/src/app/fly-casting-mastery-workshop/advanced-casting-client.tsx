"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, ChevronUp, MapPin, Calendar } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { img } from "@/lib/asset";
import { PriceTag } from "@/components/price-tag";

const whoForItems = [
  "Anyone who loves the sport and wants to understand their casting at a deeper level",
  "Anglers who feel like they've hit a ceiling and want to know why",
  "Self-taught casters ready to move from guesswork to real mechanics",
  "Fly fishers who want to cast further, more accurately, and with less effort",
  "Guides and shop staff who want to teach more effectively on the water",
  "Anglers pursuing FFI CI or MCI certification",
];

const highlights = [
  {
    title: "Two Simple Rules That Change Everything",
    body: "The whole sport runs on two rules — and once they click, your cast starts making sense for the first time. We start here and build everything on top of it. It sounds simple because it is, and that simplicity is exactly what makes it powerful.",
  },
  {
    title: "Your Stroke, Explained",
    body: "Pause. Power. Path. Three things that control every cast you'll ever make — on any rod, any line, any water. We break them apart, show you what each one does, and put them back together in a way that sticks. No guessing at the water anymore.",
  },
  {
    title: "How You Hold the Rod Matters More Than You Think",
    body: "Grip affects everything from soft presentations to distance. We cover the three casting methods and show you why whole-arm casting gives you a range of control that no other approach can match — the same foundation tournament casters have used for over a century.",
  },
  {
    title: "Read Your Loop, Fix Your Cast",
    body: "Your loop tells you exactly what happened — no guessing required. Learn to read what you see in the air, understand what caused it, and know the one adjustment that straightens it out. This self-sufficiency keeps you growing long after the school is over.",
  },
  {
    title: "Fishing Casts That Work on Real Water",
    body: "Curves, slack-line presentations, accuracy casts — the techniques that get your fly where fish are, drag-free, in real current. Not range work. Real-water presentation skills that make an immediate difference in how and where you fish.",
  },
  {
    title: "Distance Without Working Harder",
    body: "Hauling and shooting line, broken into pieces you can actually feel. We help you find the effortless timing that distance casters talk about — more line in the air, less muscle, better results. A skill that pays off every time you step to the water.",
  },
  {
    title: "Water You've Never Been Able to Fish",
    body: "Roll casts, single-handed Spey, and change-of-direction casts — the techniques that open up the water you've always walked past. If you fish moving water with trees at your back, these become some of the most-used casts in your bag.",
  },
  {
    title: "A Foundation That Keeps Growing With You",
    body: "This workshop is the same curriculum at the heart of the FFI certification pathway — a road that has produced hundreds of fly fishing instructors over the decades. Whether you want to fish better for yourself or eventually help others learn, you leave with a foundation built to last.",
  },
];

const faqs = [
  {
    q: "What does the Fly Casting Mastery Workshop cover?",
    a: "The Fly Casting Mastery Workshop is two full days of hands-on casting instruction in Bryson City, NC with FFI Master Casting Instructors. You will learn the two foundational rules that govern every cast, how to understand and control your stroke, how to read your loop and fix it on your own, real-water presentation casts (curves, slack-line, accuracy), distance casting without extra effort, roll casts and change-of-direction casts that open up water you have never been able to fish, and single and double-handed techniques. Everything is learned through guided drills you can take home and keep using. This is the same curriculum at the core of the FFI certification pathway that has produced hundreds of fly fishing instructors — whether you want to fish better for yourself or eventually teach, this workshop builds a foundation that keeps growing with you.",
  },
  {
    q: "How much does the Fly Casting Mastery Workshop cost?",
    a: "The Fly Casting Mastery Workshop is $1,550 per person for both full days of instruction.",
  },
  {
    q: "What skill level is required?",
    a: "This workshop is for any angler who has some prior casting experience and wants to genuinely improve. If you have fished a season or two and want to understand your cast at a deeper level, this is built for you. Those brand new to fly fishing will get more from a weekend school or private lesson first.",
  },
  {
    q: "Is gear provided for the casting school?",
    a: "All rods, reels, and lines needed for instruction are provided. Participants are encouraged to bring their own rod if they want specific work on their personal setup.",
  },
  {
    q: "What is the cancellation and payment policy?",
    a: "CANCELLATION: Weather and emergencies — we will always work with you. Dates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance at the time of reservation. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you.\n\nPAYMENT: Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee. To avoid fees entirely, we accept Zelle, Venmo, and personal check at no additional cost — just use the contact form and let us know your preferred method.",
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Fly Casting Mastery Workshop — 2026 Sessions",
  url: "https://macbrownflyfish.com/fly-casting-mastery-workshop/",
  itemListElement: [
    {
      "@type": "EducationEvent",
      position: 1,
      name: "Fly Casting Mastery Workshop — Spring Session",
      description:
        "Two-day fly casting school covering loop control, distance, accuracy, and advanced fishing casts with NC's only FFI Master Casting Instructor.",
      startDate: "2026-04-11",
      endDate: "2026-04-12",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Mac Brown Fly Fish — Bryson City, NC",
        address: {
          "@type": "PostalAddress",
          streetAddress: "779 West Deep Creek Rd",
          addressLocality: "Bryson City",
          addressRegion: "NC",
          postalCode: "28713",
          addressCountry: "US",
        },
      },
      organizer: { "@type": "Person", name: "Mac Brown", url: "https://macbrownflyfish.com/bio-mac-brown/" },
      performer: { "@type": "Person", name: "Mac Brown", url: "https://macbrownflyfish.com/bio-mac-brown/" },
      offers: { "@type": "Offer", price: "1550", priceCurrency: "USD", availability: "https://schema.org/InStock", validFrom: "2026-01-01", url: "https://macbrownflyfish.com/reserve/" },
      url: "https://macbrownflyfish.com/fly-casting-mastery-workshop/",
      image: "https://macbrownflyfish.com/images/masterclass/mc-07.webp",
    },
    {
      "@type": "EducationEvent",
      position: 2,
      name: "Fly Casting Mastery Workshop — Summer Session I",
      description:
        "Two-day fly casting school covering loop mechanics, 3D fishing casts, aerial mending, change of direction, and single and double-handed techniques with NC's only FFI Master Casting Instructor.",
      startDate: "2026-07-11",
      endDate: "2026-07-12",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Mac Brown Fly Fish — Bryson City, NC",
        address: {
          "@type": "PostalAddress",
          streetAddress: "779 West Deep Creek Rd",
          addressLocality: "Bryson City",
          addressRegion: "NC",
          postalCode: "28713",
          addressCountry: "US",
        },
      },
      organizer: { "@type": "Person", name: "Mac Brown", url: "https://macbrownflyfish.com/bio-mac-brown/" },
      performer: { "@type": "Person", name: "Mac Brown", url: "https://macbrownflyfish.com/bio-mac-brown/" },
      offers: { "@type": "Offer", price: "1550", priceCurrency: "USD", availability: "https://schema.org/InStock", validFrom: "2026-01-01", url: "https://macbrownflyfish.com/reserve/" },
      url: "https://macbrownflyfish.com/fly-casting-mastery-workshop/",
      image: "https://macbrownflyfish.com/images/masterclass/mc-07.webp",
    },
    {
      "@type": "EducationEvent",
      position: 3,
      name: "Fly Casting Mastery Workshop — Summer Session II",
      description:
        "Two-day fly casting school covering loop mechanics, 3D fishing casts, aerial mending, change of direction, and single and double-handed techniques with NC's only FFI Master Casting Instructor.",
      startDate: "2026-07-18",
      endDate: "2026-07-19",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Mac Brown Fly Fish — Bryson City, NC",
        address: {
          "@type": "PostalAddress",
          streetAddress: "779 West Deep Creek Rd",
          addressLocality: "Bryson City",
          addressRegion: "NC",
          postalCode: "28713",
          addressCountry: "US",
        },
      },
      organizer: { "@type": "Person", name: "Mac Brown", url: "https://macbrownflyfish.com/bio-mac-brown/" },
      performer: { "@type": "Person", name: "Mac Brown", url: "https://macbrownflyfish.com/bio-mac-brown/" },
      offers: { "@type": "Offer", price: "1550", priceCurrency: "USD", availability: "https://schema.org/InStock", validFrom: "2026-01-01", url: "https://macbrownflyfish.com/reserve/" },
      url: "https://macbrownflyfish.com/fly-casting-mastery-workshop/",
      image: "https://macbrownflyfish.com/images/masterclass/mc-07.webp",
    },
    {
      "@type": "EducationEvent",
      position: 4,
      name: "Fly Casting Mastery Workshop — Fall Session",
      description:
        "Two-day fly casting school covering loop control, distance, accuracy, and advanced fishing casts with NC's only FFI Master Casting Instructor.",
      startDate: "2026-09-26",
      endDate: "2026-09-27",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Mac Brown Fly Fish — Bryson City, NC",
        address: {
          "@type": "PostalAddress",
          streetAddress: "779 West Deep Creek Rd",
          addressLocality: "Bryson City",
          addressRegion: "NC",
          postalCode: "28713",
          addressCountry: "US",
        },
      },
      organizer: { "@type": "Person", name: "Mac Brown", url: "https://macbrownflyfish.com/bio-mac-brown/" },
      performer: { "@type": "Person", name: "Mac Brown", url: "https://macbrownflyfish.com/bio-mac-brown/" },
      offers: { "@type": "Offer", price: "1550", priceCurrency: "USD", availability: "https://schema.org/InStock", validFrom: "2026-01-01", url: "https://macbrownflyfish.com/reserve/" },
      url: "https://macbrownflyfish.com/fly-casting-mastery-workshop/",
      image: "https://macbrownflyfish.com/images/masterclass/mc-07.webp",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Advanced2DayFlyCastingSchool() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full">
      <SchemaScript schema={itemListSchema} />
      <SchemaScript schema={faqSchema} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[500px] sm:min-h-[380px] overflow-hidden">
        <img
          src={img("/images/masterclass/mc-10.webp")}
          srcSet={`${img("/images/mobile/mc-10.webp")} 1280w, ${img("/images/masterclass/mc-10.webp")} 1920w`}
          sizes="100vw"
          alt="Fly Casting Mastery Workshop group session with Mac Brown — Mac Brown Fly Fish, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16 sm:pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            FFI Master Instructor · Bryson City, NC · Great Smoky Mountains
          </p>
          <h1 className="font-serif text-4xl sm:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
            Fly Casting Mastery Workshop
          </h1>
          <p className="text-white/80 text-lg md:text-xl mt-4 sm:mt-6 max-w-2xl leading-relaxed">
            Two days. Real mechanics. Results that stay with you on every river for the rest of your life.
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
              View Full Curriculum
            </Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            The Fly Casting Mastery Workshop is an intensive 2-day casting school in Bryson City, North Carolina — $1,550, led by FFI Master Casting Instructors. It covers loop control, distance casting, accuracy, single-hand, switch, and Spey techniques. The workshop is built for any angler ready to fish at a level they&apos;ve never reached, and has produced hundreds of successful candidates on the FFI Certified Casting Instructor (CCI) and Master Casting Instructor (MCI) certification pathway.
          </p>
        </div>
      </section>

      {/* SESSION DATE CARD */}
      <section className="bg-primary text-white py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Calendar className="w-6 h-6 text-white/60 shrink-0" />
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">2026 Sessions</p>
              <p className="text-xl font-semibold">April 11–12 &nbsp;&middot;&nbsp; July 11–12 &nbsp;&middot;&nbsp; July 18–19 &nbsp;&middot;&nbsp; September 26–27</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-white/60 shrink-0" />
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Location</p>
              <p className="text-xl font-semibold">Bryson City, NC · Great Smoky Mountains</p>
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
                Fly Casting
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                For the Growth Minded Angler
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  The Fly Casting Mastery Workshop is two full days of some of the most enjoyable fly casting
                  education you will ever experience — in the heart of the Great Smoky Mountains, with instructors
                  who love this sport as much as you do. You do not have to be an expert caster to get tremendous
                  value out of this workshop. You just have to want to grow.
                </p>
                <p>
                  Over two days you will develop a real feel for your cast — what is actually happening, why
                  things go sideways, and exactly how to fix it. The concepts click fast, the improvements show
                  up immediately on the water, and most students leave wondering why nobody ever explained it
                  this clearly before.
                </p>
              </div>
              <blockquote className="mt-8 border-l-4 border-primary pl-5">
                <p className="text-foreground font-medium italic leading-relaxed">
                  "The moment a student has a genuine light-bulb moment — when loop control suddenly makes complete sense
                  — is one of the greatest rewards in teaching. These weekends are full of those moments."
                </p>
              </blockquote>
            </div>
            <div className="hidden xl:block xl:w-[40%] shrink-0">
              <img
                src={img("/images/masterclass/mc-09.webp")}
                alt="Mac Brown one-on-one fly casting instruction at the Fly Casting Mastery Workshop — Bryson City NC"
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
            Who This School Is For
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12">
            You don't need to be an expert. You just need to want to improve.
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
          src={img("/images/img-20210312a.webp")}
          alt="Fly casting school instruction outdoors at Mac Brown Fly Fish — Fly Casting Mastery Workshop, Bryson City NC"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CURRICULUM HIGHLIGHTS */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
              What You Will Learn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Curriculum Highlights</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Two full days covering the mechanics, casts, and concepts that move any fly angler from where they are
              to somewhere they have never been.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {highlights.map((item, i) => (
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
          <div className="text-center border border-primary/20 bg-primary/5 p-8">
            <p className="text-foreground font-medium mb-2">
              This school shares its curriculum with the Masterclass Casting Workshop.
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              The full topic list — including discussion topics, on-water tasks, and teaching skills —
              is on the Masterclass page.
            </p>
            <Link
              href="/masterclass-fly-casting-workshop"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              View Full Curriculum on the Masterclass Page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* THE TWO THINGS */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4 text-center">The Breakthroughs</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-10 text-center leading-tight">
            The two things that will change your casting permanently
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-white/20 p-8">
              <h3 className="font-serif text-xl font-bold mb-4">Loop Control</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Most casters have a vague idea of what a good loop looks like. Very few understand exactly why it forms
                the way it does — and how to shape it with intention. Once that becomes clear, everything else in fly
                casting starts to make sense in a new way.
              </p>
            </div>
            <div className="border border-white/20 p-8">
              <h3 className="font-serif text-xl font-bold mb-4">Less Is More</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Loop efficiency is not about power — it is about the precise application of the right amount of force at
                exactly the right moment. When students feel this for the first time, the change in their casting is
                immediate and it never goes back.
              </p>
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
              Mac Brown and his team of <strong className="text-foreground">Master Casting Instructors</strong> — all
              FFI Level 2 examiners — conduct the Fly Casting Mastery Workshop. Their track record in producing
              dramatically improved casters and successful certification candidates is nearly 100% across many years and
              hundreds of participants.
            </p>
            <p>
              World-class guest instructors join throughout the year — bringing global perspectives on casting education
              that simply are not available anywhere else in the Southeast.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-10 justify-center">
            <Link
              href="/bio-mac-brown"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              About Mac Brown <ArrowRight className="w-4 h-4" />
            </Link>
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
              Official FFI Single-Hand Exam Documents
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Download the current official exam evaluation forms for both the CI and MCI certifications.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="/downloads/CI-exam-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3 border border-border p-6 hover:border-primary/50 hover:bg-muted/30 transition-colors group"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
                  CI · Updated February 2025
                </p>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                  Casting Instructor Performance Exam
                </h3>
              </div>
              <span className="text-xs font-medium text-primary mt-auto">Download PDF →</span>
            </a>
            <a
              href="/downloads/MCI-exam-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3 border border-border p-6 hover:border-primary/50 hover:bg-muted/30 transition-colors group"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
                  MCI · Updated February 2025
                </p>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                  Master Casting Instructor Performance Exam
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
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">April 11–12 · July 11–12 · July 18–19 · September 26–27, 2026 · Bryson City, NC</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Enrollment is limited.<br />All four sessions fill early.
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            Two days of the most substantive fly casting instruction in the Southeast. Small groups. World-class faculty. Results that travel home with you and stay.
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
