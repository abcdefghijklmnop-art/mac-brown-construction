import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { courseSchema, faqPageSchema } from "@/lib/schema";
import FaqSection from "@/components/faq-section";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Spey Casting Clinics & Two-Handed Instruction — Bryson City, NC" },
  description:
    "Spey casting clinics and two-handed fly rod instruction in Bryson City, North Carolina. Complete beginners welcome — no Spey experience needed. Taught by Mac Brown, NC's only FFI Master Casting Instructor, on the Tuckasegee River.",
  alternates: { canonical: "https://macbrownflyfish.com/spey-casting-clinics-nc/" },
  openGraph: {
    title: "Spey Casting Clinics & Two-Handed Instruction — Smoky Mountains, NC",
    description:
      "Spey casting clinics in the Smoky Mountains of North Carolina. Weekend clinics and private instruction — absolute beginners welcome, all gear provided.",
    url: "https://macbrownflyfish.com/spey-casting-clinics-nc/",
    images: [{ url: "https://macbrownflyfish.com/images/tuck-river-spey.webp" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Who is Mac Brown and why should I trust him for Spey instruction?",
    a: "Mac Brown is the only FFI Master Casting Instructor in North Carolina — the highest casting credential that exists, awarded by Fly Fishers International. He has been teaching fly casting and guiding in Bryson City since 1987, is a certified casting examiner for FFI (meaning he tests and certifies other instructors), and has presented at The Fly Fishing Show every year since 1994. He is also the author of Casting Angles. He is not a weekend guide who picked up a Spey rod a few years ago. Two-handed casting has been part of his curriculum for decades.",
  },
  {
    q: "I've only ever cast a regular fly rod. Will I be completely lost?",
    a: "Not at all — and in some ways it is actually easier to learn Spey without a lot of single-hand habits baked in. We start from absolute zero. Mac will show you how to hold the rod, how to feel the line load, and how to make your first clean cast. Most students are making real Spey casts within the first couple of hours. There is nothing to unlearn if you are starting fresh.",
  },
  {
    q: "Do I need to buy a Spey rod before I show up?",
    a: "No. Do not spend money on gear before you know what you actually like. We provide premium, properly matched two-handed rods, reels, and Spey lines for you to use during the clinic. That way you get to feel several different setups before committing to anything. If you already own a two-handed rod and want instruction specific to your gear, bring it — but it is not required.",
  },
  {
    q: "What is the actual point of a two-handed rod? Why not just use my regular rod?",
    a: "A two-handed rod lets you cast impressive distances without any room behind you for a backcast. If you have ever lost a fly in the trees, stood against a cliff wall and felt stuck, or watched a fish rising just out of reach — Spey casting completely solves all three of those problems. The river itself loads the cast. You are not fighting gravity with a backcast. You are using the weight of the line on the water to fire it across the river with surprisingly little effort.",
  },
  {
    q: "My shoulder and arm wear out after a few hours of casting. Is Spey easier on the body?",
    a: "This is one of the best reasons to learn Spey, and it is genuinely underappreciated. Because you hold the rod with both hands and use the water to load the cast, you distribute the work across both arms, your wrists, and your core — instead of hammering the same shoulder over and over. Anglers who have had shoulder surgery, rotator cuff issues, or who simply feel their single-hand casting stamina declining come to Spey and find they can fish longer, cast farther, and feel fine at the end of the day. Plenty of accomplished Spey anglers are in their sixties and seventies and casting distances most younger single-hand casters can't touch.",
  },
  {
    q: "Where do the clinics take place?",
    a: "Weekend clinics begin on land — a field or lawn setting where you learn the movements without the variable of moving water. Once the basic cast is locked in, we move to the Tuckasegee River, right in Bryson City, where the wide open runs give you plenty of room to practice long-distance presentations. Private instruction can take place on the water from session one depending on your goals.",
  },
  {
    q: "Is this just for steelhead or salmon anglers?",
    a: "Not even close. Yes, Spey originated in Atlantic salmon fishing on Scottish rivers — but it applies just as well to trout fishing here in the Smokies. Any situation where you need distance, need to cast without a backcast, or want to cover water efficiently is a Spey situation. More and more trout anglers are picking up two-handed rods and realizing they should have done it years ago.",
  },
  {
    q: "Can I book just one private Spey lesson instead of a full weekend?",
    a: "Yes. Private hourly instruction is available for anyone who wants to try a two-handed rod for the first time, work through a specific problem, or get a foundation before committing to a full weekend clinic. One hour is enough to understand the basic cast and leave with something to practice. The weekend clinic is for those who want to go much deeper.",
  },
];

const curriculumMatrix = [
  {
    concept: "Anchor Placement",
    benefit: "Keep your fly out of the trees and bushes behind you — permanently.",
  },
  {
    concept: "D-Loop & Line Loading",
    benefit: "Let the river do the work so your first cast is as strong as your fiftieth.",
  },
  {
    concept: "Change of Direction",
    benefit: "Pivot and cast any angle without stripping in your whole line and starting over.",
  },
  {
    concept: "Two-Handed Rod Efficiency",
    benefit: "Both hands share the load — your shoulder stays comfortable all day long.",
  },
  {
    concept: "Distance & Loop Control",
    benefit: "Reach the far bank with clean, accurate presentations — not just guesswork.",
  },
  {
    concept: "Mending & Swing Control",
    benefit: "Keep your fly in the strike zone longer across complex, conflicting currents.",
  },
];

export default function SpeyCastingClinicsNC() {
  return (
    <div className="w-full">
      <SchemaScript
        schema={courseSchema({
          name: "Spey Casting Clinics & Two-Handed Fly Rod Instruction — Bryson City, NC",
          description:
            "Spey casting clinics and two-handed fly rod instruction in Bryson City, North Carolina, taught by Mac Brown — the only FFI Certified Master Casting Instructor in North Carolina and a certified casting examiner for Fly Fishers International. Weekend clinics begin on land and move to the Tuckasegee River in Bryson City. Mac has been teaching two-handed casting in the Smoky Mountains since 1987. Complete beginners are welcome with zero Spey experience required. Students learn anchor placement, D-loop mechanics, change of direction, and long-distance presentation — all in plain language with no jargon.",
          url: "/spey-casting-clinics-nc",
          image: "https://macbrownflyfish.com/images/tuck-river-spey.webp",
          educationalLevel: "Beginner",
          coursePrerequisites: "No prior Spey or two-handed casting experience required. Single-hand fly fishing experience is helpful but not mandatory.",
          teaches: [
            "Anchor placement and D-loop setup",
            "Two-handed rod grip and stance",
            "Basic Spey casts: Single Spey, Double Spey, Snap-T",
            "Change of direction casting",
            "Line mending and swing control",
            "Long-distance presentation on moving water",
            "Casting fault recognition and self-correction",
          ],
        })}
      />
      <SchemaScript schema={faqPageSchema(faqs)} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/tuck-river-spey.webp")}
          srcSet={`${img("/images/mobile/tuck-river-spey.webp")} 800w, ${img("/images/tuck-river-spey.webp")} 1920w`}
          sizes="100vw"
          alt="Mac Brown Spey casting on the Tuckasegee River in Bryson City, North Carolina"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-end justify-end pb-14 pr-8 md:pb-20 md:pr-16 max-w-3xl ml-auto text-right">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70 mb-3">
            SMOKY MOUNTAINS · BRYSON CITY, NORTH CAROLINA · SINCE 1987
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Spey Casting Clinics &amp; Two-Handed Instruction
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <Link
              href="/fly-casting-instruction"
              className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-white/90 transition-colors"
            >
              Book a Private Lesson <ArrowRight size={14} />
            </Link>
            <Link
              href="/spey-elite-casting-clinic"
              className="inline-flex items-center gap-2 border border-white text-white text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-white/10 transition-colors"
            >
              Weekend Clinic Details <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every angler who has ever lost a fly in the trees, stood with a cliff at their back, or watched a fish rising just out of reach has already met the problem that Spey casting solves. A two-handed rod turns the river itself into your casting engine — no backcast required, no room needed, and distances that feel almost effortless once the cast clicks. Mac Brown is the only FFI Master Casting Instructor in North Carolina, a certified casting examiner for Fly Fishers International, and the author of <em>Casting Angles</em>. He has been teaching two-handed casting in the Smoky Mountains since 1987. Clinics run on both land and water. Zero Spey experience required.
          </p>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed italic">
            The river does the work. You just have to learn to get out of its way.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            What Is a Spey Rod, Really?
          </h2>
          <p>
            A Spey rod is simply a longer fly rod — usually 12 to 15 feet — that you hold with both hands. Instead of throwing a backcast over your shoulder into the space behind you, you use the surface of the water to load the rod. The line rolls up into a shape called a D-loop, and when you sweep forward, that stored energy unloads across the river in a clean, controlled arc.
          </p>
          <p>
            The practical result: you can cast 60, 70, 80 feet of line in situations where a single-hand cast is completely impossible. Trees behind you? Gone as a problem. Cliff wall at your back? Handled. Fish rising on the far bank that your regular rod can&apos;t reach? Now reachable. You are not fighting the environment anymore. You are using it.
          </p>
          <p>
            There is a common assumption that Spey casting is for experts only — for people who fish salmon rivers in Scotland or chase steelhead in the Pacific Northwest. That assumption is wrong. Spey casting is learnable, it works on trout water right here in Western North Carolina, and the first lesson tends to surprise people with how fast it starts to feel natural.
          </p>
          <blockquote className="border-l-2 border-primary pl-5 italic text-foreground/80">
            "The moment a student makes their first clean Spey cast — line rolling out over the water with no backcast — the look on their face says everything. It feels like cheating. It is not cheating. It is just a better tool for the right situation."
          </blockquote>
        </div>
      </section>

      {/* FORK IN THE RIVER */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Two Paths
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Where Do You Fit?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Whether you want to dip a toe in or dive all the way, there is a right starting point for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Path A */}
            <div className="bg-white border border-border p-8 flex flex-col">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-3">Path A</p>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Private Spey Lessons — Try It First
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                The right choice if you want to pick up a two-handed rod for the first time, see how it feels, and get honest answers before committing to a full weekend. One hour with Mac is enough to understand the basic cast and leave with something real to build on. Completely private — one or two people, all gear provided.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Never held a Spey rod — perfect starting point",
                  "Want to try before buying any gear",
                  "One specific problem to work through",
                  "Prefer to go at your own pace",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/fly-casting-instruction"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/90 transition-colors w-full justify-center"
              >
                Book a Private Spey Lesson <ArrowRight size={14} />
              </Link>
            </div>

            {/* Path B */}
            <div className="bg-white border border-border p-8 flex flex-col">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-3">Path B</p>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                2-Day Spey Weekend School — We Build It From Scratch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                Two full days where we slow everything down and build the right movements from the ground up. No prior Spey experience required — that is the entire point. You start on land so the basic shapes feel natural before you ever touch the water, then you take them to the river and feel them work. You leave with curriculum handouts, a personal written assessment from Mac, and a clear, honest picture of exactly where to go next. All rods, reels, and lines are provided. Nobody is judging your starting point.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Complete beginners welcome — we start where you are",
                  "Two full days on land and on the water",
                  "Written curriculum handouts you take home",
                  "All rods, reels, and Spey lines provided",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/spey-elite-casting-clinic"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/90 transition-colors w-full justify-center"
              >
                See the Spey Elite Weekend Clinic <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SPEY AS YOU AGE */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Still Casting Hard at 60, 65, 70 — Here Is Why
          </h2>
          <p>
            Here is something nobody talks about enough: Spey casting is genuinely kind to the body in a way that single-hand overhead casting is not. When you cast a single-hand fly rod all day, the same shoulder takes the load on every single cast — hundreds of times, hour after hour. That is a repetitive motion problem, and it catches up with most anglers eventually.
          </p>
          <p>
            A two-handed rod changes the equation. You hold the rod with both hands and use a sweeping motion that distributes the work across both arms, your wrists, and your core. You are not hammering the same shoulder on every stroke. As a result, anglers who have had shoulder surgery, rotator cuff issues, or who simply notice their single-hand stamina fading find that they can fish longer, cast farther, and feel completely fine at the end of a full day.
          </p>
          <p>
            Some of the most accomplished Spey casters Mac knows are in their sixties and seventies — and they are reaching distances that stop younger single-hand anglers in their tracks. Age does not hold you back from Spey casting. For a lot of anglers, it is exactly the right reason to start.
          </p>
        </div>
      </section>

      {/* CURRICULUM MATRIX */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">What You Will Learn</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              What We Work On — And What It Gets You
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Every skill in the curriculum has a direct payoff on the water. Nothing taught for the sake of teaching it.
            </p>
          </div>

          <div className="divide-y divide-border border border-border">
            <div className="grid grid-cols-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.2em] px-6 py-3">
              <span>What We Work On</span>
              <span>What You Get Out of It</span>
            </div>
            {curriculumMatrix.map((row) => (
              <div key={row.concept} className="grid grid-cols-2 px-6 py-5 gap-6 bg-white hover:bg-muted/20 transition-colors">
                <div className="font-medium text-foreground text-sm">{row.concept}</div>
                <div className="text-muted-foreground text-sm leading-relaxed">{row.benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO DIVIDER */}
      <section className="grid grid-cols-2 h-64 md:h-96">
        <div className="overflow-hidden">
          <img
            src={img("/images/fall-river-fishing.webp")}
            srcSet={`${img("/images/mobile/fall-river-fishing.webp")} 800w, ${img("/images/fall-river-fishing.webp")} 1920w`}
            sizes="50vw"
            alt="Fall fly fishing on a Smoky Mountain river"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={img("/images/casting-class-2.webp")}
            srcSet={`${img("/images/mobile/casting-class-2.webp")} 800w, ${img("/images/casting-class-2.webp")} 1920w`}
            sizes="50vw"
            alt="Fly casting instruction in the Smoky Mountains"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* HOW MAC TEACHES */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            How Mac Teaches — Feel First, Talk Second
          </h2>
          <p>
            Spey casting is a physical skill, and physical skills are learned through feel — not through a lecture on geometry. Mac does not stand on the bank and recite rules. He watches you cast, finds exactly where the movement breaks down, and gives you one simple fix that your body can actually do right now. Then you do it again. Then again. The cast improves before you fully understand why — and the understanding follows naturally.
          </p>
          <p>
            Weekend clinics start on land deliberately. No moving water, no fish to distract you — just the movements. Once you can feel the rod load and unload cleanly in a field, moving to the river becomes straightforward instead of overwhelming. Mac has been teaching this sequence since 1987, and it works.
          </p>
          <p>
            Every student is built differently and moves differently. No single rigid stance or technique is imposed on anyone. What works for a six-foot-two former college pitcher is not what works for a five-foot-four retiree who has never thrown anything overhead. Mac adjusts to you, not the other way around.
          </p>
          <ul className="space-y-3 pt-2">
            {[
              "Start on land — nail the movement before adding moving water",
              "Mac finds what is wrong before telling you how to fix it",
              "Every drill is simple, repeatable, and something you can practice on your own",
              "Honest feedback — including what you are already doing well",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base">
                <Check size={15} className="text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQS */}
      <FaqSection items={faqs} />

      {/* LOCAL LOGISTICS */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Location &amp; What&apos;s Included
              </h2>
              <p>
                All instruction takes place in and around Bryson City, North Carolina — in the heart of the Great Smoky Mountains. Weekend clinics begin on land in a field or lawn setting, then move to the Tuckasegee River, right in Bryson City, where the wide open runs give you room to make real casts and put the movements into practice.
              </p>
              <p>
                <strong className="text-foreground">All tackle is fully provided.</strong> That means matched two-handed rods, Spey reels, and specialized Spey lines — everything you need to cast properly and learn what you actually like before spending a dime on gear. Bring your own setup if you want instruction specific to your equipment, but it is never required.
              </p>
              <div className="space-y-2 pt-2">
                {[
                  "Clinics start on land — Bryson City, NC",
                  "Tuckasegee River — on the water in Bryson City",
                  "All two-handed rods, reels, and Spey lines provided",
                  "Weekend clinic: 2 full days, small group",
                  "Private lessons: 1–2 students, available year-round",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <Check size={13} className="text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-primary text-primary-foreground p-8">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground/70 mb-4">
                Ready to Start
              </p>
              <h3 className="font-serif text-2xl font-bold mb-4">
                Try It Once. You Will Understand.
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-8 text-sm">
                One private session is enough to feel the difference. Book a lesson, ask a question, or get honest advice on which path is right for you.
              </p>
              <div className="space-y-3">
                <Link
                  href="/fly-casting-instruction"
                  className="flex items-center justify-between gap-2 bg-white text-primary text-xs font-semibold uppercase tracking-[0.15em] px-6 py-4 hover:bg-white/90 transition-colors"
                >
                  Book a Private Lesson <ArrowRight size={14} />
                </Link>
                <Link
                  href="/spey-elite-casting-clinic"
                  className="flex items-center justify-between gap-2 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.15em] px-6 py-4 hover:bg-white/10 transition-colors"
                >
                  Weekend Clinic Details <ArrowRight size={14} />
                </Link>
                <a
                  href="tel:+18287361447"
                  className="flex items-center justify-between gap-2 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.15em] px-6 py-4 hover:bg-white/10 transition-colors"
                >
                  Call (828) 736-1447 <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
