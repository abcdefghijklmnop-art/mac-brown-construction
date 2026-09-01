"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, ChevronUp, ArrowRight, Phone, Star, Calendar, MapPin } from "lucide-react";
import { img } from "@/lib/utils";
import { MBFF_CERTIFICATIONS } from "@/lib/mbff";
import { useSchedule } from "@/hooks/use-schedule";

const curriculum = [
  {
    title: "Fly Casting — Mechanics & Style",
    body: "Every school begins with casting. You'll build an efficient, elegant loop from the ground up — understanding stroke mechanics, trajectory, timing, and load. Both overhead and roll casting are covered to a standard you can teach.",
  },
  {
    title: "Reading Water",
    body: "The river is a puzzle. We break it into its components — seams, pockets, pools, riffles, and tailouts — and show you exactly where fish hold, feed, and rest at every water level and season.",
  },
  {
    title: "Entomology & Hatch Matching",
    body: "Western NC holds dozens of trout food sources. You'll learn to identify mayflies, caddisflies, stoneflies, midges, and terrestrials — and match presentation, pattern, and drift to what fish are actually eating.",
  },
  {
    title: "Strategies, Tactics & Mechanics",
    body: "Mac Brown's three-part framework for consistent fishing. Strategies are big-picture decisions; tactics are river-level adjustments; mechanics are the execution. Students who internalize all three fish at a completely different level.",
  },
  {
    title: "River Navigation",
    body: "On-water river navigation rowing is a cornerstone of guide training. You'll learn how to position the boat, ferry across currents, back-row through technical water, and set up clients for high-percentage presentations.",
  },
  {
    title: "Client Communication & Service",
    body: "Great guiding is as much about people as it is about fish. We cover pre-trip communication, on-stream instruction, managing expectations, keeping clients comfortable, and building a repeat clientele.",
  },
  {
    title: "Knots, Rigging & Equipment",
    body: "You can't guide without fast, reliable knots. We cover the clinch, non-slip loop, blood knot, surgeon's knot, and Perfection loop — plus leader construction, tippet selection, and rod/reel setup for all conditions.",
  },
  {
    title: "Licensing & Business Basics",
    body: "We walk through the NC guide licensing process, liability considerations, insurance options, pricing structure, and how to find your first clients. Students leave with a realistic roadmap to their first paying trips.",
  },
  {
    title: "On-Stream Application",
    body: "Every concept is applied on water — not in a classroom. Each day includes guided fishing time on the Tuckasegee River and wild streams inside Great Smoky Mountains National Park where you practice skills in real conditions.",
  },
];

const faqs = [
  {
    q: "How much does fly fishing guide school cost?",
    a: "Tuition for the Fly Fishing Guide School in Bryson City, NC is $4,850 for the full program. No comparable program exists in the eastern United States — four FFI Master Certified Casting Instructors, four days on some of the most productive wild trout water on the East Coast, and a career network that has placed graduates across the Southeast and out west. Lodging is not included and is arranged separately by each student.",
  },
  {
    q: "What does the Fly Fishing Guide School week cover?",
    a: "The four-day program runs Thursday through Sunday and covers dry fly and nymph fishing, drift boat rowing, stream entomology, streamer and wet fly tactics, switch rod and Spey casting, client communication, and the business of guiding — including licensing, permitting, and job placement. Every topic is taught by a featured group of educators that includes FFI Master Certified Casting Instructors, Fly Fishing Team USA members, and Team USA coaches — 450+ combined years of professional experience on the water.",
  },
  {
    q: "What is included in the Fly Fishing Guide School tuition?",
    a: "Tuition covers the full four-day program — daily on-water sessions on the Tuckasegee River and Smoky Mountain wild streams; access to 100+ high-end fly rods and multiple fly line tapers; a complete fly tying setup; switch rod and double-handed rod instruction; Mac Brown's personal library of 300+ fly fishing books and DVDs; a worldwide job placement directory; and the graduation celebration on the final evening. Loaner gear is available with advance notice.",
  },
  {
    q: "How do I enroll in the Fly Fishing Guide School?",
    a: "Enrollment begins with the reservation form at flyfishingguideschool.com. Sessions run March through November in Bryson City, NC and fill months in advance. Contact the school directly at (828) 736-1469 or flyfishingguideschool@gmail.com to check availability for specific dates.",
  },
  {
    q: "How much do fly fishing guides make?",
    a: "Entry-level fly fishing guides working for an outfitter or lodge typically earn between $2,400 and $3,000 per month. Experienced independent guides working their home water earn significantly more, often supplementing income with casting instruction, schools, and clinics.",
  },
  {
    q: "When does the Fly Fishing Guide School run?",
    a: "The Fly Fishing Guide School runs March through November in Bryson City, North Carolina. Bryson City's milder winters allow longer seasons than any other guide school in the country. Sessions fill months in advance — early reservation is strongly recommended.",
  },
  {
    q: "Who is the guide school for?",
    a: "The school was built for growth-minded people — those serious about closing the gap between where they are now and what they're capable of on the water. Two groups attend: career changers ready to guide professionally, and serious anglers who want to fish at a completely different level. What both share is access to a featured group of educators that includes FFI Master Certified Casting Instructors, Fly Fishing Team USA members, World Championship medalists, Team USA coaches, Hall of Fame inductees, and 450+ combined years of on-water experience. The instruction is identical for both. Both leave transformed.",
  },
  {
    q: "What does a typical day look like?",
    a: "Days run roughly 7am–5pm and are split between classroom sessions with FFI Master Casting Instructors, casting practice on the lawn and river, drift boat training, and on-stream fishing application on the Tuckasegee River and Smoky Mountain wild streams. Evening sessions are available for additional casting work or direct Q&A with Mac Brown and the instructor team.",
  },
  {
    q: "What skill level do I need?",
    a: "Intermediate fly fishing experience is helpful but not required. Students who have never fly fished have attended and done extremely well. We meet you where you are and build from there.",
  },
  {
    q: "How many students per school?",
    a: "Enrollment is intentionally limited — small class sizes for greater specialized instruction. Every student gets substantial individual time with our Master Instructors. When you're learning from the only FFI Master Casting Instructor in North Carolina alongside Fly Fishing Team USA members, Team USA coaches, and Hall of Fame inductees, that ratio matters.",
  },
  {
    q: "What should I bring?",
    a: "Fly fishing gear (rod, reel, waders, wading boots), weather-appropriate clothing for 4 days on the water, a hat, polarized sunglasses, a box of flies (we'll advise on patterns), and a notebook. Loaner gear can be arranged with advance notice.",
  },
  {
    q: "Is lodging included?",
    a: "Lodging is not included in the tuition, but Bryson City has excellent options at every price point — from riverside cabins to downtown B&Bs and hotels. We're happy to recommend our favorites. Most students stay 5–6 nights.",
  },
  {
    q: "How far in advance do schools book up?",
    a: "Schools often book several months in advance, especially spring and fall sessions. If you have a specific date range in mind, contact us as early as possible to check availability.",
  },
  {
    q: "Do you offer job placement after graduation?",
    a: "We maintain an active network of outfitters, lodges, and shops throughout the Southeast and beyond. We actively advocate for our graduates and have placed students in guide positions across North Carolina, Tennessee, Georgia, and out west.",
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

export default function GuideSchool() {
  const { guideSchoolSessions, pricing, programsYear } = useSchedule();
  const nextSession = findNextSession(guideSchoolSessions, programsYear);
  return (
    <div className="w-full">
      <section className="relative w-full aspect-video max-h-screen min-h-[520px] overflow-hidden">
        <img
          src={img("/images/tuckasegee-sunrise.webp")}
          srcSet={`${img("/images/tuckasegee-sunrise-1280.webp")} 1280w, ${img("/images/tuckasegee-sunrise.webp")} 1920w`}
          sizes="100vw"
          alt="Tuckasegee River at sunrise — Fly Fishing Guide School, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/35" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-24 pt-20 px-6 text-center">
          <p className="text-white/55 text-[10px] font-medium uppercase tracking-[0.4em] mb-5">
            Est. 1987 · Bryson City, NC
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-5">
            Fly Fishing
            <br />
            Guide School
          </h1>
          <p className="font-serif italic text-white/75 text-xl md:text-2xl mb-10">
            Four days that change the way you fish — and the way you live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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

      {/* AEO */}
      <section className="py-12 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm text-muted-foreground mb-6 pb-6 border-b border-border/50">
            Not pursuing a guide career — just want to fish better?{" "}
            <Link href="/smoky-mountain-fly-fishing-school/" className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors">
              See the Smoky Mountain Fly Fishing School for Recreational Anglers →
            </Link>
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Four days in Bryson City, North Carolina changes the way you fish forever — or <Link href="/blog/learn-how-to-become-a-fly-fishing-guide-and-instructor/" className="underline underline-offset-4 hover:text-foreground transition-colors">launches the guiding career you have been thinking about for years</Link>. The Fly Fishing Guide School curriculum covers fly casting mechanics at the Master Instructor level, whitewater rowing, water reading from both wading and rowing positions, rigging for every situation, stream entomology in the field, guiding methodology, client communication, and the business of professional guiding. Students leave understanding fly fishing from the inside out — the strategy and the confidence that comes from learning it correctly under the most credentialed instructor team assembled anywhere in the eastern United States. Tuition {pricing.guideSchool.display}. Sessions March through November.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4 italic">
            Since 1987, the school has produced guides, casting instructors, and career-changers from across the country — four days, on real water, with the most credentialed fly fishing faculty in the East.
          </p>
        </div>
      </section>

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
                    <span className="text-[10px] font-bold uppercase tracking-wider no-underline not-italic opacity-100" style={{textDecoration:"none"}}>Sold Out</span>
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

      <section className="py-28 md:py-36">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">
            FFI Master Casting Instructors · Since 1987
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
            The most comprehensive fly fishing school in the nation.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            The Fly Fishing Guide School trains aspiring professional guides and serious skill-builders in Bryson City, North Carolina — four days, world-class faculty, and the most diverse trout water classroom in the eastern United States. Sessions run March through November. Tuition is {pricing.guideSchool.display}.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Since 1987, the Fly Fishing Guide School has trained anglers and
            career-changers on the wild trout streams of the Smoky Mountains.
            Four days of intensive, on-water education covering everything from
            casting mechanics and drift boat rowing to entomology, client
            relations, and NC guide licensing — with an instructor-to-student
            ratio that ensures you get real, individual attention.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            When you are serious about a genuine transformation in your skills —
            not just collecting tips, but rebuilding the way you read water,
            cast, and think on a river — the qualifications of the people
            teaching you are everything. Our team holds credentials that simply
            do not exist at any other school in the United States.{" "}
            <Link
              href="/meet-rowing-fly-casting-fly-fishing-instructors/"
              className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors"
            >
              Meet every instructor →
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

      <section className="py-10 border-b border-border">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground mb-4">As Featured In</p>
          <p className="font-serif text-lg italic text-foreground/75 leading-relaxed mb-3">
            &ldquo;If, when we practice, we can produce one more good cast and one fewer poor cast each time, then we are headed in the right direction.&rdquo;
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">Miss Pursuit</p>
          <a
            href="https://misspursuit.com/humbled-flyfisher-with-mac-brown-fly-fish/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-[0.15em] text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
          >
            Read the full school review →
          </a>
        </div>
      </section>

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
              "Lifelong learners always seeking to improve",
              "Fly fishers that are driven to develop a process that leads to success onstream",
              "Career changers who want to become professional fly fishing guides",
              "Serious anglers ready to fish at a level they've never reached",
              "Fly casters who want to understand the mechanics behind their loop",
              "Anyone who wants to understand trout streams from the inside out",
              "Anglers frustrated with inconsistent success on technical water",
              "Those who want to understand entomology and hatch matching deeply",
              "Aspiring instructors who need a foundation built by Master Instructors",
              "Anyone who has ever thought about a career on the water",
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

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-video overflow-hidden">
          <img
            src={img("/images/brown-trout-tuck-fall.webp")}
            srcSet={`${img("/images/brown-trout-tuck-fall-1280.webp")} 1280w, ${img("/images/brown-trout-tuck-fall.webp")} 1920w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Fall brown trout on the Tuckasegee River — Fly Fishing Guide School Bryson City NC"
            className="w-full h-full object-cover object-[center_60%]"
            loading="lazy"
          />
        </div>
        <div className="aspect-video overflow-hidden">
          <img
            src={img("/images/cedar-post-group.webp")}
            srcSet={`${img("/images/cedar-post-group-1280.webp")} 1280w, ${img("/images/cedar-post-group.webp")} 1920w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Guide school group at Cedar Post Lodge — Fly Fishing Guide School Bryson City NC"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

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

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-video overflow-hidden">
          <img
            src={img("/images/smokies-river-fall.webp")}
            srcSet={`${img("/images/smokies-river-fall-1280.webp")} 1280w, ${img("/images/smokies-river-fall.webp")} 1920w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Tuckasegee River in fall — Fly Fishing Guide School"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="aspect-video overflow-hidden">
          <img
            src={img("/images/guide-trip-3.webp")}
            alt="On-stream guide school training — Bryson City NC"
            className="w-full h-full object-cover object-[center_30%]"
            loading="lazy"
          />
        </div>
      </section>

      <section className="py-28 md:py-36 bg-muted/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
                Where We Fish
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Bryson City &amp; the Smoky Mountains
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Bryson City, NC sits at the edge of Great Smoky Mountains
                National Park — home to some of the finest wild trout fishing in
                the eastern United States. The Tuckasegee River and the wild streams of Great Smoky Mountains National Park provide a variety of water types that make the perfect classroom.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Students fish freestone streams loaded with wild brown and
                rainbow trout, practice rowing on moving water, and learn to
                read the same rivers that have shaped Mac Brown&apos;s 40+ years of
                guiding. There is no better classroom in the Southeast.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
                The Instructor Team
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                The Most Credentialed Faculty in the East
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Four FFI Master Certified Casting Instructors. Three Fly Fishing Team USA members. Four Team USA coaches. Two Hall of Fame inductees. Five certified whitewater rowing professionals. 450+ combined years on the water. These are not seasonal guides who love the lifestyle — they are the people who certify, govern, and coach the rest of the fly fishing industry.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                World-class instruction for growth-minded people — whether your goal is to guide professionally or fish at a completely different level. Both groups leave transformed.
              </p>
              <Link
                href="/meet-rowing-fly-casting-fly-fishing-instructors/"
                className="inline-flex items-center gap-1 text-primary font-semibold text-sm underline underline-offset-4 hover:text-primary/80 transition-colors"
              >
                Meet the full instructor team →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { name: "Mac Brown", role: "Head Instructor & Founder", credential: "FFI Master Certified Casting Instructor · Lifetime Achievement Award · Field & Stream Angler of the Year", photo: "/images/instructors/mac-brown.webp", slug: "mac-brown" },
              { name: "Eric Cook", role: "FFI Master Certified Casting Instructor", credential: "FFI Board of Governors member · Instructor of the Year nominee · Atlanta Fly Fishing School", photo: "/images/instructors/eric-cook.webp", slug: "eric-cook" },
              { name: "Tom Rueping", role: "FFI Master Certified Casting Instructor", credential: "FFI Instructor & Mentor of the Year nominee · SE Council CICP Coordinator · Lee University Lead Instructor", photo: "/images/instructors/tom-rueping.webp", slug: "tom-rueping" },
              { name: "Michael Bradley", role: "Fly Fishing Team USA", credential: "World Championship: Team Bronze & Individual Bronze · 11 FFTUSA competition medals · 4× Rumble champion", photo: "/images/instructors/michael-bradley.webp", slug: "michael-bradley" },
              { name: "Ken Kastorff", role: "ACA Hall of Fame Inductee", credential: "50+ years on the water · Co-founder, Endless River Adventures · Co-developed the C-to-C roll technique", photo: "/images/instructors/ken-kastorff.webp", slug: "ken-kastorff" },
              { name: "Pip Coe", role: "Outdoor Educator & Whitewater Professional", credential: "34+ years NOLS Field Instructor · 7 years Nantahala Outdoor Center · Wyoming Woman of Influence", photo: "/images/instructors/pip-coe.webp", slug: "pip-coe" },
              { name: "Tony Brooks", role: "FFI Certified Casting Instructor", credential: "45+ years on the water · Professional guide since 2009 · U.S. National Championship competitor", photo: "/images/instructors/tony-brooks.webp", slug: "tony-brooks" },
              { name: "Will Percy", role: "Guide & Community Advocate", credential: "Guide School graduate · Trained under FFI Masters & Team USA · Project Healing Waters founder", photo: "/images/instructors/will-percy.webp", slug: "will-percy" },
            ].map((instructor) => (
              <Link key={instructor.slug} href={`/instructors/${instructor.slug}/`} className="group block">
                <div className="aspect-square overflow-hidden mb-3 bg-muted">
                  <img
                    src={img(instructor.photo)}
                    alt={instructor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary mb-1 leading-tight">{instructor.role}</p>
                <p className="font-serif font-bold text-foreground text-sm mb-1">{instructor.name}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{instructor.credential}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/meet-rowing-fly-casting-fly-fishing-instructors/"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-[0.15em] hover:gap-4 transition-all"
            >
              Full Instructor Profiles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              FAQ
            </h2>
          </div>
          <div>
            {faqs.map((f, i) => (
              <FAQ
                key={f.q}
                q={f.q}
                a={i === 0
                  ? `Tuition for the Fly Fishing Guide School in Bryson City, NC is ${pricing.guideSchool.display} for the full program. No comparable program exists in the eastern United States — four FFI Master Certified Casting Instructors, four days on some of the most productive wild trout water on the East Coast, and a career network that has placed graduates across the Southeast and out west. Lodging is not included and is arranged separately by each student.`
                  : f.a}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 md:py-36 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
              From Our Graduates
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              What Students Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Shawn Phelan", text: "After nearly 30 years of fly fishing, I'd felt as though I'd hit a ceiling. Mac and Tony turned this completely around within the first day. The depth of knowledge shared during the school was nothing short of extraordinary." },
              { name: "Andre Lubart", text: "Mac and his staff far exceeded the week's objectives with a level of personalized attention, practical application, and generosity of knowledge I did not expect. One of the best weeks of my life." },
              { name: "Jonathan Wurl", text: "My casting is completely different since applying what I've learned, and the strategy and tactics that we were taught have completely changed the way I approach the river." },
            ].map((t, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="flex gap-0.5 mb-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="font-serif text-lg font-bold text-foreground leading-snug">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/testimonials-kudos/"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-[0.15em] hover:gap-4 transition-all"
            >
              Read All Reviews <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-24 text-center px-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-primary-foreground/70 mb-5">
          Schools Fill Months in Advance
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Change Your Life on the Water?
        </h2>
        <p className="text-primary-foreground/90 text-base mb-10 max-w-lg mx-auto leading-relaxed">
          Contact us to check availability, ask questions, or reserve your seat.
          We&apos;ll respond within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact-information-best-fly-fishing-guide-school/"
            className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
          >
            Inquire &amp; Register <ArrowRight size={14} />
          </Link>
          <a
            href="tel:+18287361469"
            className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary-foreground/10 transition-colors"
          >
            <Phone size={14} /> (828) 736-1469
          </a>
        </div>
      </section>
    </div>
  );
}
