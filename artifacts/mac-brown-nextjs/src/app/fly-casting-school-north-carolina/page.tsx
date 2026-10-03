import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { courseSchema, faqPageSchema } from "@/lib/schema";
import FaqSection from "@/components/faq-section";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Fly Casting School & Private Instruction — Bryson City, NC" },
  description:
    "Fly casting school and private instruction in the Smoky Mountains. Beginners welcome — no experience needed. Expert coaching from Mac Brown, NC's only FFI Master Casting Instructor, in Bryson City, NC.",
  alternates: { canonical: "https://macbrownflyfish.com/fly-casting-school-north-carolina/" },
  openGraph: {
    title: "Fly Casting School & Private Instruction — Smoky Mountains, NC",
    description:
      "Fly casting school and private instruction in Bryson City, NC. Absolute beginners to advanced anglers — all skill levels, no prior experience needed.",
    url: "https://macbrownflyfish.com/fly-casting-school-north-carolina/",
    images: [{ url: "https://macbrownflyfish.com/images/casting-class-1.webp" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Who is Mac Brown and why should I trust him as my instructor?",
    a: "Mac Brown is the only FFI Master Casting Instructor in the state of North Carolina — that is the highest casting credential that exists, awarded by Fly Fishers International. He has been teaching fly casting and guiding in Bryson City since 1987, has been a certified casting examiner for decades (meaning he is qualified to test and certify other instructors), and has presented at The Fly Fishing Show every year since 1994. He is also the author of Casting Angles. In short: he is not a weekend guide who also does a few lessons. Teaching is what he has built his career around for nearly forty years.",
  },
  {
    q: "Do I need any experience at all to take a lesson?",
    a: "None whatsoever. Mac has been teaching complete beginners since 1987 — people who have never held a fly rod in their life. The whole point of the first lesson is to start from zero and build a real foundation, not to assume you already know something. Show up, and the rest gets handled.",
  },
  {
    q: "What do I need to bring to my first lesson?",
    a: "Nothing except yourself and clothes you can move in. All rods, reels, lines, and leaders are provided. If you already have your own setup and want instruction specific to your gear, bring it — but it is absolutely not required.",
  },
  {
    q: "How long before I can actually cast?",
    a: "Most students are making recognizable fly casts within the first 20–30 minutes of a session. That does not mean perfect — it means functional and improving. The goal of the first lesson is not to make you an expert. It is to give you a solid foundation you can actually build on instead of reinforcing bad habits.",
  },
  {
    q: "How much does a fly casting lesson cost?",
    a: "Private instruction is $400 per hour for one or two people at the same rate. A 3-hour block is $1,200. All gear is provided. There is no upsell — you pay for the instruction, you get the instruction.",
  },
  {
    q: "Can two people take a lesson together?",
    a: "Yes — one or two students at the same hourly rate. It works well for couples, friends, or parent and child. If one person is significantly more advanced than the other, two separate sessions may be more effective — just ask and Mac will give you an honest answer.",
  },
  {
    q: "I tried to learn before and it never clicked. Is this different?",
    a: "Almost certainly yes — and the reason is usually the explanation, not you. Mac has spent four decades developing the specific language and analogies that make fly casting mechanics understandable to real people. If something did not click before, it is very likely because nobody explained it in a way your body could actually respond to. That is the whole point of in-person instruction with someone who has been doing this since 1987.",
  },
  {
    q: "Where do lessons take place?",
    a: "Lessons are conducted on the Tuckasegee River or in a yard or field setting — whichever makes the most sense for your skill level and goals. Everything is within Bryson City, NC and the surrounding Western North Carolina area.",
  },
  {
    q: "Is there a beginner school option or only private lessons?",
    a: "Both. Private instruction ($400/hr) is the fastest path for most beginners — you get Mac's full attention and the session is built entirely around your specific faults and goals. For those who want a structured multi-day school experience, the Fly Casting Instruction page and Masterclass pages have full program details.",
  },
];

const curriculumMatrix = [
  {
    concept: "Loop Control & Efficiency",
    benefit: "Spend more time fishing and less time untangling knots in the wind.",
  },
  {
    concept: "Biomechanical Diagnostics",
    benefit:
      "Find your natural rhythm so your shoulder doesn't ache after a full day on the river.",
  },
  {
    concept: "Line Speed & Hauling",
    benefit:
      "Effortlessly reach that rising trout on the far bank without spooking it.",
  },
  {
    concept: "Presentation & Accuracy",
    benefit: "Place the fly exactly where the fish are — not close, exactly there.",
  },
  {
    concept: "Mending & Drift Control",
    benefit:
      "Achieve a dead drift in complex currents so the fish sees your fly the way nature intended.",
  },
  {
    concept: "Timing & Rod Load",
    benefit:
      "Feel when the rod is fully loaded — and stop fighting the cast instead of letting it work.",
  },
];

export default function FlyCastingSchoolNC() {
  return (
    <div className="w-full">
      <SchemaScript
        schema={courseSchema({
          price: "400",
          name: "Fly Casting School & Private Instruction — Bryson City, NC",
          description:
            "Fly casting school and private instruction in Bryson City, North Carolina, taught by Mac Brown — the only FFI Certified Master Casting Instructor in North Carolina and a certified casting examiner for Fly Fishers International. Mac has been teaching fly casting in the Smoky Mountains since 1987 and has presented at The Fly Fishing Show every year since 1994. Complete beginners are welcome with no prior experience required. Students learn how to cast a fly rod, control the line, and accurately deliver a fly to rising trout — using plain-language coaching that clicks fast. Private instruction is tailored to each student's pace, goals, and current skill level.",
          url: "/fly-casting-school-north-carolina",
          image: "https://macbrownflyfish.com/images/casting-class-1.webp",
          educationalLevel: "Beginner",
          coursePrerequisites: "No prior fly fishing or fly casting experience required. Beginners are the primary audience.",
          teaches: [
            "Fly rod grip and stance",
            "Basic overhead cast",
            "Line control and mending",
            "Roll cast",
            "Accurate fly presentation to rising trout",
            "Reading water to find fish",
            "Casting fault recognition and self-correction",
          ],
        })}
      />
      <SchemaScript schema={faqPageSchema(faqs)} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/casting-class-1.webp")}
          srcSet={`${img("/images/mobile/casting-class-1.webp")} 800w, ${img("/images/casting-class-1.webp")} 1920w`}
          sizes="100vw"
          alt="Fly casting instruction on the river — Bryson City, NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-end justify-end pb-16 md:pb-24 px-8 md:px-12 text-right">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            Smoky Mountains · Bryson City, North Carolina · Since 1987
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            Fly Casting School &amp; Private Instruction
          </h1>
          <h2 className="font-serif text-base md:text-lg text-white/80 italic mb-8">
            Smoky Mountains · Bryson City, North Carolina
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/reserve"
              className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Book a Session <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Mac Brown has been teaching fly casting in Bryson City, North Carolina since 1987. He is the only FFI Master Casting Instructor in North Carolina — the highest casting credential available — and has been a certified casting examiner for decades, testing and certifying instructors from across the country. He has presented at The Fly Fishing Show every year since 1994 and is the author of <em>Casting Angles</em>. The reason beginners click with his teaching faster than they expect is simple: he explains fly casting in plain, everyday language using comparisons that connect instantly — no confusing terms, no rigid rules you cannot feel. Complete beginners, self-taught anglers, and experienced casters who have hit a wall are all welcome. No experience required.
          </p>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed italic">
            You do not need to know anything to start. You just need to show up.
          </p>
        </div>
      </section>

      {/* HOOK / INTRO */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Everyone Starts Somewhere. Most People Start Wrong.
          </h2>
          <p>
            Here is something nobody tells you before your first fly casting lesson: the sport looks complicated because the explanations are usually terrible. When someone describes casting as <em>"a ten-to-two clock motion"</em> and starts drawing diagrams in the dirt, your brain shuts off — and that is not your fault. That is a teaching problem.
          </p>
          <p>
            Mac Brown has been solving that problem since 1987. What he figured out over nearly four decades of coaching is that beginners do not need more information — they need the right comparison at the right moment. The one that makes the rod suddenly feel alive in your hand. The one that turns a confusing movement into something your body just gets. New students are regularly surprised by how fast something clicks that they had been struggling with for months on their own.
          </p>
          <p>
            The most common thing first-timers say at the end of a session: <em>"Why didn&apos;t anyone explain it like that the first time?"</em>
          </p>
          <p>
            If you have never held a fly rod, that is a perfect place to start. If you have been fishing for years and something still feels off, that is fixable too. Either way, the answer is the same: get in front of someone who can actually see what is happening and explain it in a way that makes sense.
          </p>
          <blockquote className="border-l-2 border-primary pl-5 italic text-foreground/80">
            "The cast is everything. Every other skill in fly fishing — reading water, selecting patterns, managing the drift — depends entirely on your ability to put the fly where you intend. That starts here."
          </blockquote>
        </div>
      </section>

      {/* FORK IN THE RIVER */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">Choose Your Path</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Fork in the River
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Two distinct tracks — same expert coaching. Pick the one that matches where you are right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Path A */}
            <div className="bg-white border border-border p-8 flex flex-col">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-3">Path A</p>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Beginner &amp; Recreational Skills Improvement
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                Perfect for first-timers, novice casters, and self-taught anglers who want to eliminate tangles, fix basic timing, and build real confidence on the water. If you have never held a fly rod — or if you have, but something has never quite clicked — this is where it starts to make sense. All gear is provided. No prior knowledge assumed. Just show up ready to learn.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Complete beginners — zero experience required",
                  "Self-taught anglers with persistent bad habits",
                  "Vacation or recreational anglers wanting more fish",
                  "Anyone who has watched YouTube and still feels lost",
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
                Private Instruction — Start Here <ArrowRight size={14} />
              </Link>
            </div>

            {/* Path B */}
            <div className="bg-white border border-border p-8 flex flex-col">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-3">Path B</p>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                The Two-Day Casting School
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                Two full days of structured instruction — curriculum handouts, a personal student assessment, and a clear plan mapped out specifically for where you want your fly fishing to go. Whether you are brand new or have been fishing for years, you leave knowing exactly what to work on and why. This is the most complete picture of your casting you can get in a single weekend.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Two full days of hands-on instruction with Mac",
                  "Written curriculum handouts you keep and take home",
                  "A personal student assessment tailored to your casting",
                  "A clear path forward — so you know exactly what to work on next",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/fly-casting-mastery-workshop"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/90 transition-colors w-full justify-center"
              >
                See the Two-Day Masterclass <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM MATRIX */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">What You Will Learn</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              What We Work On — And Why It Matters
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Every skill you learn here pays off directly on the water. Nothing taught for the sake of teaching it.
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
      <section className="grid grid-cols-1 sm:grid-cols-2">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={img("/images/casting-class-2.webp")}
            srcSet={`${img("/images/mobile/casting-class-2.webp")} 800w, ${img("/images/casting-class-2.webp")} 1920w`}
            sizes="(max-width: 640px) 100vw, 50vw"
            alt="Fly casting instruction on the river"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={img("/images/fly-school-1.webp")}
            srcSet={`${img("/images/mobile/fly-school-1.webp")} 800w, ${img("/images/fly-school-1.webp")} 1920w`}
            sizes="(max-width: 640px) 100vw, 50vw"
            alt="Fly casting school group instruction"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* PEDAGOGY */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            How Mac Teaches — Feel First, Explanation Second
          </h2>
          <p>
            Fly casting is not a math problem. Barking rules and angles at someone standing in a river does not work, because you cannot feel a rule. What you can feel is whether the rod is working with you or against you. Whether the line is rolling out clean or collapsing. Whether something just clicked or something is still off.
          </p>
          <p>
            Mac builds every lesson around that feeling — finding the exact moment where your cast starts to go wrong, then giving you a simple, repeatable fix that your body can actually remember. No single rigid stance is forced on anyone. People are built differently and move differently. The teaching adjusts to you, not the other way around.
          </p>
          <p>
            Most students see real, noticeable improvement within the first hour. That is not a sales promise — it is a pattern that has repeated across four decades of teaching everyone from five-year-olds in the backyard to fishing guides preparing to teach others.
          </p>
          <ul className="space-y-3 pt-2">
            {[
              "Mac finds what is wrong before telling you how to fix it — so you understand why, not just what",
              "Every correction comes with a simple drill you can practice on your own",
              "The teaching adjusts to your body, your goals, and your pace",
              "Honest feedback — including what you are already doing right",
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
                All instruction takes place in and around Bryson City, North Carolina — in the heart of the Great Smoky Mountains. Sessions are conducted on the Tuckasegee River and in yard/field settings depending on skill level and goals.
              </p>
              <p>
                <strong className="text-foreground">All premium tackle is fully provided.</strong> That means rods, reels, lines, and leaders — everything you need to cast and fish effectively is on hand. You are welcome to bring your own setup if you want instruction specific to your equipment.
              </p>
              <div className="space-y-2 pt-2">
                {[
                  "Bryson City, NC — Tuckasegee River",
                  "Great Smoky Mountains National Park streams available",
                  "All premium rods, reels, and lines provided",
                  "Private sessions — 1 or 2 students at the same rate",
                  "Available year-round by appointment",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <Check size={13} className="text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[hsl(215,55%,28%)] text-white p-10 space-y-6">
              <h3 className="font-serif text-2xl font-bold">Ready to Book or Just Have a Question?</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                No commitment required to reach out. If you are not sure which track is right for you, a quick message is all it takes. Mac personally responds to every inquiry.
              </p>
              <div className="space-y-3 pt-2">
                <Link
                  href="/reserve"
                  className="flex items-center justify-center gap-2 bg-white text-[hsl(215,55%,28%)] text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-white/90 transition-colors w-full"
                >
                  Book a Session <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-white/10 transition-colors w-full"
                >
                  Ask a Question First
                </Link>
                <a
                  href="tel:+18287361469"
                  className="flex items-center justify-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-white/10 transition-colors w-full"
                >
                  Call 828-736-1469
                </a>
              </div>
              <p className="text-white/50 text-xs pt-2">
                Bryson City, NC · All skill levels · Since 1987
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
