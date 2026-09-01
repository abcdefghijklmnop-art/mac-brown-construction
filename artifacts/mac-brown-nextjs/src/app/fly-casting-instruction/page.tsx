import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Phone, Video } from "lucide-react";
import FaqSection from "@/components/faq-section";
import { SchemaScript } from "@/components/schema-script";
import { PriceTag } from "@/components/price-tag";
import { courseSchema, faqPageSchema } from "@/lib/schema";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Fly Casting Instruction & Lessons — Smoky Mountains, NC" },
  description: "Private fly casting lessons in Bryson City, NC — $400 per hour with Mac Brown, the only FFI Master Casting Instructor in North Carolina and FFI Lifetime Achievement Award recipient. Single-hand, switch, Spey, and online coaching available.",
  alternates: { canonical: "https://macbrownflyfish.com/fly-casting-instruction/" },
  openGraph: {
    title: "Fly Casting Instruction — Mac Brown Fly Fish",
    description: "Expert fly casting instruction in Bryson City, NC. All skill levels welcome. Mac Brown is North Carolina's only FFI Master Casting Instructor.",
    url: "https://macbrownflyfish.com/fly-casting-instruction/",
    images: [{ url: "https://macbrownflyfish.com/images/advanced-casting-class-atlanta-ga.webp" }],
  },
  twitter: { card: "summary_large_image" },
};

const castingFaqs = [
  {
    q: "Who is Mac Brown and why learn from him?",
    a: "Mac Brown is the only FFI Master Casting Instructor in North Carolina — the highest casting designation in the sport — and the recipient of the FFI Lifetime Achievement Award (2023), the Mel Krieger Casting Instructor Award (2021) for outstanding contribution to fly casting instruction, and a Southern Fly Fishing Hall of Fame inductee. He is the author of Casting Angles and Field & Stream Angler of the Year. Mac has been teaching fly casting in Bryson City since 1987, presenting at The Fly Fishing Show since 1994, and coaching Fly Fishing Team USA members. That is four-plus decades of standing on the bank, watching students cast, and building a genuine passion for getting this right.",
  },
  {
    q: "What makes 40+ years of teaching experience different from reading about casting or watching videos?",
    a: "Technique can be copied. Language is earned. After more than four decades of watching what works and what doesn't — across complete beginners, advanced competitors, and instructors learning to teach — Mac has developed a vocabulary for explaining fly casting that is specific, clear, and immediately actionable. He knows which words produce lightbulb moments and which ones create more confusion. He knows when to say more and when to step back and let the cast speak for itself. That language is the difference between leaving a lesson with a list of tips and leaving with a physical, felt understanding of what you are doing and why. It is something you only build through decades of caring deeply about whether the student actually improves — not just whether they heard the right words.",
  },
  {
    q: "How much do fly casting lessons cost?",
    a: "Private fly casting lessons are $400 per hour for 1–2 people at the same rate. A 2-hour session is $800; a 3-hour block is $1,200. Online video coaching via FaceTime, Zoom, or Skype runs at the same rate. Specialty multi-day schools — Masterclass Casting Workshop, Spey Elite, Saltwater Masterclass — are priced separately.",
  },
  {
    q: "What does a fly casting lesson cover?",
    a: "Every session is tailored to the individual. Mac diagnoses your specific faults, explains the mechanics behind each correction, and gives you repeatable drills that hold. Topics include loop control, accuracy, distance, haul mechanics, reach casts and slack-line presentations, mending, single-hand Spey, and switch and two-handed Skagit or Scandi technique — or whatever aspect of your cast is holding you back. The focus is always on what you need most, not a fixed curriculum.",
  },
  {
    q: "How long is a session and what should I expect?",
    a: "Standard sessions are one hour ($400). Most anglers see significant, measurable improvement in a single session — not because of talent, but because casting faults are diagnosable and correctable when you know what you are looking for. A 2-hour or 3-hour block allows for deeper work across multiple areas and is recommended for anglers with specific goals, those preparing for a destination trip, or those working toward FFI casting certification.",
  },
  {
    q: "What skill level is this for?",
    a: "All skill levels — complete beginners through advanced and instructor-level casters. Beginners build the right foundation from day one rather than reinforcing habits that work against them later. Intermediate anglers eliminate the specific faults quietly costing them fish. Advanced casters refine loop control, distance, and specialty presentations. Instructors work on pedagogy and demonstration casts. Every session starts exactly where you are.",
  },
  {
    q: "Is fly casting instruction the right choice if I just want to catch more fish?",
    a: "Yes — and it is the fastest path there. The cast is the delivery system for everything else you know about fly fishing: hatch knowledge, reading water, fly selection. None of it lands without a cast that gets the fly where it needs to be and presents it the way it needs to be presented. One session fixes the thing that has been quietly working against you for years. That investment pays off every time you are on the water for the rest of your fishing life.",
  },
  {
    q: "Do I need my own gear for a casting lesson?",
    a: "No. All rods, reels, lines, and leaders are provided. You are welcome to bring your own rod if you want Mac to work with your specific setup — instruction on your own equipment is actually encouraged, especially if you are preparing for a specific type of fishing or working toward certification.",
  },
  {
    q: "Can I take fly casting lessons online?",
    a: "Yes — online video coaching is available worldwide via FaceTime, Zoom, or Skype at the same hourly rate as in-person sessions. All you need is a smartphone and open space. Mac has coached students on six continents this way. Real-time feedback from someone who has spent four decades developing the right language for this produces real-time improvement.",
  },
  {
    q: "What is the cancellation and payment policy?",
    a: "Payment in full is required at the time of booking. Online bookings carry a small processing fee — to avoid fees, we accept Zelle, Venmo, and personal check. For rescheduling: 30+ days out we can assist; within 30 days, full charge applies. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you.",
  },
];

export default function FlyFishingInstruction() {
  return (
    <div className="w-full">
      <SchemaScript schema={courseSchema({
        price: "400",
        name: "Private Fly Casting Instruction — Mac Brown, Bryson City NC",
        description: "Private fly casting instruction with Mac Brown — the only FFI Master Casting Instructor in North Carolina, recipient of the FFI Lifetime Achievement Award (2023) and the Mel Krieger Casting Instructor Award (2021), Southern Fly Fishing Hall of Fame inductee, author of Casting Angles, and featured instructor at The Fly Fishing Show since 1994. Mac has been teaching fly casting in Bryson City since 1987 — over four decades of developing the language and approach that produces real, measurable improvement in a single session. Sessions are completely private (one to two students) and tailored to the individual: complete beginners learn foundational mechanics while experienced anglers address specific faults, develop specialty casts, or prepare for casting certification. All skill levels welcome. Online video coaching available worldwide.",
        url: "/fly-casting-instruction",
        image: "https://macbrownflyfish.com/images/advanced-casting-class-atlanta-ga.webp",
        educationalLevel: "AllLevels",
        coursePrerequisites: "No experience required. Sessions are fully customized from complete beginner through advanced and instructor-level casting.",
        teaches: [
          "Fly casting fundamentals and grip",
          "Loop control and casting stroke timing",
          "Reach casts and slack-line presentations",
          "Distance casting and shooting line",
          "Roll cast and water-loaded casts",
          "Casting fault diagnosis and self-correction",
          "Single-hand Spey and switch casts",
        ],
      })} />
      <SchemaScript schema={faqPageSchema(castingFaqs)} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/advanced-casting-class-atlanta-ga.webp")}
          alt="Fly casting instruction class"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex flex-col items-end justify-end pb-16 md:pb-24 px-8 md:px-12 text-right">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            Bryson City, North Carolina · All Skill Levels Welcome · Since 1987
          </p>
          <h1 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Fly Casting Lessons &amp; Instruction — Bryson City, NC
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/reserve"
              className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Book 1-Hour — <PriceTag priceKey="flyCastingInstruction" as="span" /> <ArrowRight size={14} />
            </Link>
            <Link
              href="/reserve"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Book 2-Hour — $800
            </Link>
            <Link
              href="/reserve"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Book 3-Hour — $1,200
            </Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed mb-3">
            Mac Brown Fly Fish offers private fly casting instruction in Bryson City, North Carolina — led by Mac Brown, the only FFI Master Casting Instructor in North Carolina, recipient of the FFI Lifetime Achievement Award, and author of <em>Casting Angles</em>, teaching since 1987. Sessions are <PriceTag priceKey="flyCastingInstruction" as="span" /> per hour for 1–2 people at the same rate; 2-hour ($800) and 3-hour ($1,200) blocks available. Single-hand, switch, and Spey casting for all skill levels — complete beginners through advanced and instructor-level casters. Online video coaching available worldwide via FaceTime, Zoom, or Skype at the same rate. Over four decades of developing the language that makes casting click.
          </p>
          <p className="font-serif italic text-foreground/70 text-lg">Because the cast is everything.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Fly Casting Instruction — Because the Cast Is Everything</h2>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Bryson City, NC · All Skill Levels Welcome</p>
          <p>
            Here is the truth about fly fishing that nobody tells you at the fly shop: casting is genuinely complex. It is a physical skill built on physics, timing, and feel — and without a solid foundation, every hour of practice on the water is quietly reinforcing habits that are working against you. The good news? Most of those habits can be identified and corrected in a single session. That is not a sales pitch. That is four decades of watching it happen.
          </p>
          <p>
            If you are a lifelong learner seeking growth with your casting — solving conflicting currents, gaining sufficient distance in the wind, achieving stealthier presentations, and advancing your line control to a whole new level — this instruction is right up your alley.
          </p>
          <p>
            Fly casting instruction is the single fastest way to build the foundational skills that everything else in fly fishing depends on. Not the second fastest. The fastest. Bar none.
          </p>
          <blockquote className="border-l-2 border-primary pl-5 italic text-foreground/80">
            "I have spent a lifetime casting and continue to deepen my understanding of what is possible when casting a fly line. That journey never ends — and it is one of the great joys of the sport."
          </blockquote>
        </div>
      </section>

      {/* PHOTO DIVIDER */}
      <div className="grid grid-cols-2">
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/advanced-casting-class-atlanta-ga.webp")} alt="Mac Brown leading an advanced fly casting clinic — Mac Brown Fly Fish, Bryson City NC" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/youth-kids-casting-class.webp")} alt="Youth fly casting clinic with Mac Brown in Western North Carolina — Mac Brown Fly Fish" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* WHY CASTING IS WORTH TAKING SERIOUSLY */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Why Casting Is Worth Taking Seriously</h2>
          <p>
            The fly cast is the only delivery system between you and the fish you are pursuing. Your fly selection, your knowledge of the hatch, your ability to read the water — none of it matters if the cast does not get the fly where it needs to be, presented the way it needs to be presented. The rod and line are your only tools. Everything rides on how well you use them.
          </p>
          <p>
            Tournament fly casting has been refining and testing these mechanics since the late 1850s — which means the principles behind an efficient, accurate cast are not opinions or preferences. They are proven, repeatable, and learnable by anyone willing to understand them.
          </p>
          <p>
            Consider this: the number one complaint among fly fishing guides internationally — from Patagonia to New Zealand to Alaska — is that clients arrive having traveled enormous distances to fish extraordinary water with casting that simply is not ready for it. All that planning, expense, and anticipation, undermined by something that a good lesson could have fixed months earlier. Do not be that angler. You are better than that — you just need someone to show you how.
          </p>
        </div>
      </section>

      {/* WHAT A LESSON ACTUALLY DOES */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">What a Lesson Actually Does</h2>
          <p>
            A casting lesson saves you decades of practicing what you didn't need. That is not an exaggeration. It is the consistent experience of every student who has stood on the bank here and had a fundamental flaw corrected for the first time — the look of recognition on their face when something that felt impossible suddenly makes complete sense.
          </p>
          <p>
            The physical skill of controlling a fly line becomes consistent once three things happen: you can see it clearly, you understand why it works, and you know it is genuinely attainable. A lesson creates all three of those conditions in a single session. Curiosity does the rest.
          </p>
          <p>
            Having intent behind every cast is everything. Whether you are laying out a dead drift — one of the true grails of the sport — threading a tight loop through streamside brush or presenting a fly across a long flat to a rising fish, the angler with a clear understanding of line control and casting mechanics has an enormous advantage over the one who is guessing. False casting is wasted fishing time. Efficient casting is more fly on the water, more presentations to fish, more results.
          </p>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col xl:flex-row gap-16 items-center">
          <div className="flex-1 min-w-0 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">What You'll Learn</h2>
            <p>
              Lessons cover whatever your fishing demands — from the foundational overhead stroke to advanced line control, elliptical casting, presentation angles, and specialty techniques including single-hand, Skagit, and double-handed casting. Every session is tailored to where you are and exactly where you want to go. Fundamentals tend to be emphasized heavily during most lesson plans.
            </p>
            <p>
              The anticipation of casting to a rising fish and watching it eat your fly is one of fly fishing's most exhilarating moments. Instruction makes that moment happen more often — and on purpose rather than by accident.
            </p>
          </div>
          <div className="hidden xl:block xl:w-[45%] shrink-0">
            <img
              src={img("/images/youth-kids-casting-class.webp")}
              alt="Youth fly casting clinic in the Smoky Mountains"
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      {/* THE INSTRUCTION */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">The Instruction</h2>
          <p>
            The rate for a casting lesson is $400 per hour. The top golf instructors in the world charge considerably more for the same investment in a technical skill. We are totally confident that you will witness many lightbulb moments as we like to call them during this instruction.
          </p>
          <p>
            Mac Brown is a Master Casting Instructor certified through Fly Fishers International — the highest casting designation in the sport, held by fewer than a few hundred people worldwide, and the only one in North Carolina. He diagnoses casting faults for instant, measurable improvement. He teaches, mentors, coaches, and trains other casting instructors, as well as anglers of every level from first timers to competitors.
          </p>
          <p>
            <Link href="/fly-fishing-certifications" className="inline-flex items-center gap-1 text-primary font-semibold text-sm underline underline-offset-4 hover:text-primary/80 transition-colors">
              View Mac Brown's full fly casting credentials →
            </Link>
          </p>
          <p>
            This is not a parking lot lesson with borrowed gear and good intentions with ridiculous statements from lack of understanding casting fundamentals. I am sure you have heard many of those types of statements like "let the rod do the work", or "anchors help to load the rod", and the hundreds of other statements that bring more confusion than logic. This is the real thing.
          </p>
          <blockquote className="border-l-2 border-primary pl-5 italic text-foreground/80">
            "All skill levels are welcome. Beginners build the right foundation from day one. Advanced casters finally fix the thing that has been quietly holding them back for years. Either way, you leave better than you arrived."
          </blockquote>
        </div>
      </section>

      {/* BOOKING WIDGET */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Reserve Your Session</p>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-10 text-center">Book Fly Casting Instruction</h2>
          <div className="bg-white border border-border p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">1, 2, or 3 Hours</p>
                <h3 className="font-serif text-xl font-bold text-foreground">Fly Casting Instruction</h3>
              </div>
              <PriceTag priceKey="flyCastingInstruction" className="font-serif text-2xl font-bold text-primary shrink-0 ml-4" />
            </div>
            <ul className="space-y-2.5 mb-8">
              {[
                "1–2 people, same rate",
                "Single-hand, switch, or spey",
                "Any skill level welcome",
                "Private, focused session",
              ].map((inc, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check size={13} className="text-primary shrink-0" />{inc}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              {[
                { label: "Book 1-Hour", url: "/reserve" },
                { label: "Book 2-Hour", url: "/reserve" },
                { label: "Book 3-Hour", url: "/reserve" },
              ].map((btn, i) => (
                <Link
                  key={i}
                  href={btn.url}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-primary/90 transition-colors flex-1"
                >
                  {btn.label} <ArrowRight size={13} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ONLINE VIDEO COACHING WIDGET */}
      <section className="py-12 bg-muted/20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white border border-border p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Video size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Live · Global · All Skill Levels</p>
                  <h3 className="font-serif text-xl font-bold text-foreground">Online Video Coaching</h3>
                </div>
              </div>
              <PriceTag priceKey="flyCastingInstruction" className="font-serif text-2xl font-bold text-primary shrink-0 ml-4" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Can't make it to Bryson City? Get the same expert instruction live via FaceTime, Zoom, or Skype — from anywhere in the world. Real-time feedback, immediate improvement.
            </p>
            <ul className="space-y-2.5 mb-8">
              {[
                "FaceTime, Zoom, or Skype — your choice",
                "Same direct feedback as an in-person lesson",
                "Proven with students on 6 continents",
                "All you need is a smartphone and open space",
              ].map((inc, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check size={13} className="text-primary shrink-0" />{inc}
                </li>
              ))}
            </ul>
            <Link
              href="/online-fly-casting-lessons"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-primary/90 transition-colors w-full"
            >
              Learn More & Book Online <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <FaqSection items={castingFaqs} />

      {/* CTA */}
      <section className="py-28 bg-primary text-primary-foreground text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready to cast better?</h2>
          <p className="text-primary-foreground/75 mb-10 leading-relaxed text-lg">
            Book a session or call to talk through what you're working on. One hour changes everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Book a Lesson <ArrowRight size={14} />
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
