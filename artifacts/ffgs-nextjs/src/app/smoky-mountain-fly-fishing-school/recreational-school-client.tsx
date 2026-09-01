"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, ChevronUp, ArrowRight, Phone, Calendar, MapPin } from "lucide-react";
import { img } from "@/lib/utils";
import { useSchedule } from "@/hooks/use-schedule";

const curriculum = [
  {
    title: "Casting With Confidence",
    body: "You'll learn to cast smoothly and accurately, building a cast that holds up even on tricky water — without needing to know a single technical term going in. We teach it the way it should feel: natural, not robotic.",
  },
  {
    title: "Knowing Where the Fish Are",
    body: "Rivers aren't random — there's always a reason fish are holding where they are. We'll teach you to look at any stretch of water and know where they're likely waiting, instead of guessing and hoping.",
  },
  {
    title: "Fishing on Top of the Water",
    body: "There's nothing like watching a trout rise and take your fly right off the surface. We'll teach you how to present a fly so it looks natural enough to fool a hungry fish, and how to read the water so you know when to expect it.",
  },
  {
    title: "Fishing Below the Surface",
    body: "Most of the time, trout are feeding underwater where you can't see them. We'll show you simple, effective ways to fish below the surface and actually feel or notice the moment a fish takes — even when you can't see a thing.",
  },
  {
    title: "Fishing for the Big Ones",
    body: "Sometimes the best way to catch a trout is to make it chase. We'll show you how to fish larger flies that imitate baitfish, and how to know when this approach is worth trying.",
  },
  {
    title: "An Old, Simple Way to Fish a Lot of Water",
    body: "Long before modern gear and techniques, anglers caught plenty of trout swinging a simple wet fly through the current. It's one of the most relaxing, effective ways to cover a stretch of river — and we'll teach you how.",
  },
  {
    title: "Knowing What the Fish Are Eating",
    body: "No need to memorize anything in Latin. We'll show you how to notice what's around you on the water and pick a fly that makes sense for the moment.",
  },
  {
    title: "Setting Up Your Line the Right Way",
    body: "A few small adjustments to how your line is set up make a huge difference in how many fish you catch. We'll show you simple, practical rigging that works — no need to overthink it.",
  },
  {
    title: "Time on the Water, Not in a Classroom",
    body: "Every concept is taught on real rivers, in real conditions — alongside instructors who've spent decades on these exact streams.",
  },
];

const faqs = [
  {
    q: "Who is the Smoky Mountain Fly Fishing School for recreational anglers?",
    a: "It is for serious fly fishers who want to fish at a level they have never reached — not to guide professionally, but to genuinely understand trout streams from the inside out. If you have spent years on the water and still feel like something is missing, this is where you close that gap. Students come from all experience levels; what they share is a real desire to improve.",
  },
  {
    q: "How is this different from the guide training track?",
    a: "The curriculum, instructor team, and on-water time are identical. The difference is in what you are working toward. Guide track students add NC guide licensing, client communication, and business basics to the same casting, water reading, and fishing curriculum. Recreational track students focus entirely on their own skills — no licensing, no client management. Both leave fishing at a completely different level.",
  },
  {
    q: "What does the curriculum cover?",
    a: "How to cast well, how to find fish, how to fish on top with a dry fly, how to fish below the surface, how to fish bigger flies for bigger trout, how to swing a wet fly through a run, what trout are eating and how to match it, and how to set your line up correctly. Every day includes real fishing time on the Tuckasegee River and local mountain creeks — not just classroom talk.",
  },
  {
    q: "What skill level do I need?",
    a: "Any level is fine. We've had complete beginners do great, and we've had people who've been fishing for twenty years who still left with things they'd never been shown. We meet you where you are. The only thing that matters is that you genuinely want to improve.",
  },
  {
    q: "What is included in tuition?",
    a: "Tuition covers everything in the program — daily time on the river, access to over 100 fly rods so you can try different setups, fly tying instruction and materials, and Mac Brown's personal library of 300+ fly fishing books and DVDs. If you need to borrow gear, just let us know in advance.",
  },
  {
    q: "How many students per school?",
    a: "Enrollment is intentionally limited — small class sizes for greater specialized instruction. Every student gets substantial individual time with our Master Instructors. With the faculty credentials assembled here, you receive a level of individual attention that simply does not exist anywhere else in the eastern United States.",
  },
  {
    q: "When does it run?",
    a: "Sessions run March through November in Bryson City, North Carolina. Bryson City's milder mountain climate allows a longer season than any other school in the region — wild trout water at peak condition from early spring through late fall.",
  },
  {
    q: "What should I bring?",
    a: "Fly fishing gear (rod, reel, waders, wading boots), weather-appropriate clothing, a hat, polarized sunglasses, a box of flies (we will advise on patterns), and a notebook. Loaner gear can be arranged with advance notice.",
  },
  {
    q: "Is lodging included?",
    a: "Lodging is not included in the tuition, but Bryson City has excellent options at every price point — from riverside cabins and downtown B&Bs to hotels within minutes of the water. We are happy to recommend our favorites. Most students stay five to six nights.",
  },
  {
    q: "How far in advance does it book up?",
    a: "Sessions — especially spring and fall — fill months in advance. If you have a specific date range in mind, reach out as early as possible. Early reservation is strongly recommended.",
  },
];

const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function findNextSession(sessions: Array<{ dates: string; soldOut?: boolean }>, year: number) {
  const today = new Date(); today.setHours(0,0,0,0);
  for (const s of sessions) {
    const m = s.dates.match(/^([A-Za-z]+)\s+(\d+)/);
    if (!m) continue;
    const mi = MONTH_NAMES.findIndex(mn => mn.toLowerCase() === m[1].toLowerCase());
    if (mi === -1) continue;
    if (new Date(year, mi, parseInt(m[2])) >= today) return s;
  }
  return null;
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-serif text-lg font-bold text-foreground leading-snug">
          {q}
        </span>
        {open ? (
          <ChevronUp size={18} className="text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <p className="pb-5 text-muted-foreground text-sm leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function RecreationalSchool() {
  const { pricing, guideSchoolSessions, programsYear } = useSchedule();
  const nextSession = findNextSession(guideSchoolSessions, programsYear);
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[520px] overflow-hidden">
        <img
          src={img("/images/client-nantahala-brown.webp")}
          srcSet={`${img("/images/mobile/client-nantahala-brown.webp")} 1280w, ${img("/images/client-nantahala-brown.webp")} 1920w`}
          sizes="100vw"
          alt="Angler with a big brown trout on the Tuckasegee River — Smoky Mountain Fly Fishing School, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/35" />
        <div className="absolute inset-0 flex flex-col items-start justify-end pb-16 md:pb-24 px-8 md:px-12 text-left">
          <p className="text-white/55 text-[10px] font-medium uppercase tracking-[0.4em] mb-5">
            Est. 1987 · Bryson City, NC
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-5">
            Fly Fishing School
            <br />
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">Smoky Mountains</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/reservation-form/"
              className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Reserve Your Seat <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+18287361469"
              className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              <Phone size={14} /> (828) 736-1469
            </a>
          </div>
        </div>
      </section>

      {/* DETAILS STRIP */}
      <div className="bg-primary text-primary-foreground py-5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-center flex-wrap">
          <div className="flex items-center gap-3">
            <Calendar size={16} className="shrink-0 opacity-70" />
            <span className="text-sm font-semibold tracking-wide">
              {nextSession ? `Next: ${nextSession.dates}, ${programsYear}` : `Sessions March–November ${programsYear}`}
            </span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <div className="flex items-center gap-3">
            <MapPin size={16} className="shrink-0 opacity-70" />
            <span className="text-sm font-semibold tracking-wide">Bryson City, NC</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <span className="text-sm font-bold tracking-wide">{pricing.guideSchool.display} · 4-Day Program</span>
        </div>
      </div>

      {/* UPCOMING SESSIONS */}
      <section className="py-16 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-2">
                2026 Sessions
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Upcoming School Dates
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {guideSchoolSessions.map((s) => (
                <span
                  key={s.month}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold border ${
                    s.soldOut
                      ? "border-border text-muted-foreground line-through opacity-50"
                      : "border-primary text-primary bg-primary/5"
                  }`}
                >
                  {s.dates}
                  {s.soldOut && (
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{textDecoration:"none"}}>Sold Out</span>
                  )}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Schools book months in advance — contact us early to secure your preferred session.{" "}
            <Link href="/reservation-form/" className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors">
              Reserve your seat →
            </Link>
          </p>
        </div>
      </section>

      {/* AEO */}
      <section className="py-12 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted-foreground text-lg leading-relaxed">
            The Fly Fishing Guide School in Bryson City, North Carolina enrolls recreational anglers alongside career-track students — the same curriculum, the same instructors, the same time on the water. Serious anglers who have spent years fishing but never had access to this level of coaching leave catching more fish, understanding why — and wondering why they waited so long. Four days on the Tuckasegee River and local mountain creeks with the best fly fishing instructors in the eastern United States.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4 italic">
            Not about a career — about becoming the angler you have always wanted to be.
          </p>
        </div>
      </section>

      {/* INTRO with H2 */}
      <section className="py-28 md:py-36">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">
            FFI Master Casting Instructors · Since 1987
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
            Smoky Mountain Fly Fishing School for Recreational Anglers
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Most fly fishers hit a wall. They&apos;ve been at it for years — read the books, watched the videos, tried different flies — and still can&apos;t figure out why the fish aren&apos;t biting, why casts fall apart, why they keep watching other people catch fish while they don&apos;t. It&apos;s almost never the fly.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            This school fixes that. The exact same four-day program that trains professional fly fishing guides is open to anyone who just wants to fish better. Same water, same instructors, same level of attention — you just leave as a much better angler instead of a licensed guide. What you take home is the ability to walk up to any stretch of river, figure out where the fish are, and catch them.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Tuition {pricing.guideSchool.display}. Sessions run March through November. Small groups — every student gets real individual time with the instructors.{" "}
            <Link
              href="/meet-rowing-fly-casting-fly-fishing-instructors/"
              className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors"
            >
              Meet the instructor team →
            </Link>
          </p>
          <blockquote className="border-l-4 border-primary pl-6 text-left max-w-xl mx-auto">
            <p className="font-serif text-xl italic text-foreground leading-snug mb-3">
              &ldquo;Every stream has a code. We teach you how to crack it.&rdquo;
            </p>
            <footer className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              — Mac Brown, FFI Master Casting Instructor
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CROSS-LINK to career track */}
      <section className="py-8 bg-muted/40 border-y border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            <Link href="/blog/learn-how-to-become-a-fly-fishing-guide-and-instructor/" className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors">Thinking about guiding professionally instead?</Link>{" "}
            <Link href="/fly-fishing-guide-school/" className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors">
              See the Fly Fishing Guide School career track →
            </Link>
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Is This School Right for You?
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Who This Is For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "You've been fly fishing a while but you're still not catching much",
              "You drive home from the river wondering what went wrong — again",
              "You watch other people catch fish and have no idea what they're doing differently",
              "You see fish rising and can't figure out what to throw at them",
              "You've watched the videos, read the books, and still feel lost on the water",
              "You want someone to actually watch you fish and tell you what to fix",
              "You're tired of guessing — you want to know what's actually going on out there",
              "You want to fish the way guides fish, but guiding isn't the goal",
              "You're ready to spend a few days becoming a completely different angler",
              "You've always wondered if a real school would help — it will",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="h-5 w-5 bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={11} className="text-primary-foreground" />
                </div>
                <p className="text-sm text-foreground leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO DIVIDER */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-video overflow-hidden">
          <img
            src={img("/images/client-woman-brown-trout.webp")}
            srcSet={`${img("/images/client-woman-brown-trout-1280.webp")} 1280w, ${img("/images/client-woman-brown-trout.webp")} 1920w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Angler with brown trout on the Tuckasegee River — Fly Fishing School Bryson City NC"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="aspect-video overflow-hidden">
          <img
            src={img("/images/fly-casting-instruction.webp")}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Fly casting instruction — Smoky Mountain Fly Fishing School"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
              What You&apos;ll Learn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Four Days of Curriculum
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {curriculum.map((c) => (
              <div key={c.title}>
                <div className="w-8 h-[2px] bg-primary mb-4" />
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {c.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO DIVIDER 2 */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-video overflow-hidden">
          <img
            src={img("/images/brown-trout-tuck-fall.webp")}
            srcSet={`${img("/images/brown-trout-tuck-fall-1280.webp")} 1280w, ${img("/images/brown-trout-tuck-fall.webp")} 1920w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Fall brown trout on the Tuckasegee River — Smoky Mountain Fly Fishing School"
            className="w-full h-full object-cover object-[center_60%]"
            loading="lazy"
          />
        </div>
        <div className="aspect-video overflow-hidden">
          <img
            src={img("/images/rainbow-trout-hand.webp")}
            srcSet={`${img("/images/mobile/rainbow-trout-hand.webp")} 1280w, ${img("/images/rainbow-trout-hand.webp")} 1920w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Rainbow trout — Smoky Mountain wild trout streams"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 md:py-36">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          {faqs.map((faq) => (
            <FAQ key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-primary-foreground/60 mb-6">
            Bryson City, NC · Sessions March–November
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-8">
            Four days. Real water. Master Instructors.
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Four days on the Tuckasegee River and local mountain creeks under the most credentialed fly fishing faculty in the eastern United States. Tuition {pricing.guideSchool.display}. Sessions fill months in advance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation-form/"
              className="inline-flex items-center gap-2 bg-white text-primary text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Reserve Your Seat <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+18287361469"
              className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              <Phone size={14} /> (828) 736-1469
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
