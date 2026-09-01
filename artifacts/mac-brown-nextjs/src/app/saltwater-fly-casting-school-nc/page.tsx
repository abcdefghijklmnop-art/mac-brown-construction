import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { courseSchema, faqPageSchema } from "@/lib/schema";
import FaqSection from "@/components/faq-section";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Saltwater Fly Casting Schools & Instruction in North Carolina" },
  description:
    "Saltwater fly casting schools and instruction in Bryson City, NC. Prepare for your next bonefish, tarpon, or permit trip with Mac Brown — the only FFI Master Casting Instructor in North Carolina. Private lessons and weekend clinics available.",
  alternates: { canonical: "https://macbrownflyfish.com/saltwater-fly-casting-school-nc/" },
  openGraph: {
    title: "Saltwater Fly Casting Schools & Instruction — Smoky Mountains, NC",
    description:
      "Don't let your cast cost you the trip of a lifetime. Saltwater fly casting schools and private instruction with Mac Brown in Bryson City, NC. All tackle provided.",
    url: "https://macbrownflyfish.com/saltwater-fly-casting-school-nc/",
    images: [{ url: "https://macbrownflyfish.com/images/casting-class-1.webp" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Who is Mac Brown and why should I trust him to prepare me for a saltwater trip?",
    a: "Mac Brown is the only FFI Master Casting Instructor in North Carolina — the highest casting credential that exists, awarded by Fly Fishers International. He is also a certified casting examiner for FFI, meaning he tests and certifies other instructors. He has been teaching fly casting in Bryson City since 1987 and has been presenting at The Fly Fishing Show since 1994. He is the author of Casting Angles. He has spent decades preparing anglers for exactly this situation — the expensive trip where the casting has to show up.",
  },
  {
    q: "I have a trip booked for the flats in three months. Is it too late to fix my cast?",
    a: "Three months is plenty of time. One or two focused sessions will accomplish more than a year of casual practice on your own. We work on the exact things that break down in saltwater — wind delivery, quick presentations, accuracy under pressure — and we work on them until they stick. When your guide calls a fish, you will be ready to drop the fly where it needs to go instead of tangling your line around your feet.",
  },
  {
    q: "What if I can't cast 80 feet? Am I going to fail on my trip?",
    a: "Distance is not what saves a saltwater trip — accuracy and speed are. A clean, accurate delivery at 40 to 50 feet in under three seconds is what actually catches bonefish and permit. We spend the majority of our time on exactly that: fast, accurate presentations in wind, not impressing anyone with long casts on a calm day. Distance comes naturally once your mechanics are dialed in.",
  },
  {
    q: "Is casting a heavy 10-weight rod going to destroy my shoulder?",
    a: "Only if you are doing it wrong. When anglers try to muscle a heavy saltwater rod with brute strength, they are sore by lunchtime and their accuracy collapses by the afternoon. We teach you to cast using rod flex and timing rather than raw force — which means you can cast heavy lines all day without wearing out, and your presentations are actually more accurate because you are not fighting the rod.",
  },
  {
    q: "Do I need to bring my own saltwater fly rod and gear?",
    a: "No. We provide everything: premium saltwater rods in 8, 9, 10, and 11-weight, matched reels, and specialized saltwater lines. If you own a saltwater setup and want instruction specific to your gear, bring it — but it is never required. Many anglers use their first session to try several different rod weights before committing to a purchase.",
  },
  {
    q: "Where does saltwater casting instruction take place?",
    a: "All instruction takes place in and around Bryson City, North Carolina. We use a field or lawn setting that gives you the room to make full-length presentations without any distractions. Once the delivery is clean, we can move to the water. The grass field is ideal for saltwater prep — it mimics the open sight lines of a flat without the pressure of fish.",
  },
  {
    q: "How far in advance should I book before my saltwater trip?",
    a: "As early as possible, but we work with what you have. Six weeks out is comfortable. Two weeks out is tight but workable. If your trip is in ten days and you are panicking about your cast, call us — we will do our best to get you in. Private lessons are one to two people maximum, so availability is real. Do not wait until you are on the plane.",
  },
];

const curriculumMatrix = [
  {
    concept: "Double Haul & Line Speed",
    benefit: "Cut right through stiff ocean winds without your loop collapsing before the fly lands.",
  },
  {
    concept: "Quick-Delivery Presentation",
    benefit: "Get a fly in the air and on target in under three seconds when a fish appears out of nowhere.",
  },
  {
    concept: "Heavy-Rod Casting Efficiency",
    benefit: "Cast an 8 to 11-weight rod all day long without straining your arm or shoulder.",
  },
  {
    concept: "Wind Tracking & Loop Control",
    benefit: "Keep your cast on a straight, tight path even when the wind is coming from a bad angle.",
  },
  {
    concept: "Accuracy Under Pressure",
    benefit: "Put the fly exactly where it needs to go — even when your heart rate is through the roof.",
  },
  {
    concept: "Stripping & Shooting Line",
    benefit: "Manage your running line cleanly so it shoots fast instead of tangling around your feet.",
  },
];

export default function SaltwaterFlyCastingSchoolNC() {
  return (
    <div className="w-full">
      <SchemaScript
        schema={courseSchema({
          name: "Saltwater Fly Casting Schools & Instruction in North Carolina",
          description:
            "Saltwater fly casting schools and private instruction in Bryson City, North Carolina, taught by Mac Brown — the only FFI Master Casting Instructor in North Carolina and a certified casting examiner for Fly Fishers International. Mac has been preparing anglers for saltwater destination trips since 1987 and presenting at The Fly Fishing Show since 1994. Students learn wind management, quick-delivery accuracy, double haul, and the heavy-rod efficiency needed for bonefish, tarpon, permit, and redfish. Private lessons and two-day weekend clinics available. No prior saltwater experience required — freshwater fly anglers are the primary audience.",
          url: "/saltwater-fly-casting-school-nc",
          image: "https://macbrownflyfish.com/images/casting-class-1.webp",
          educationalLevel: "AllLevels",
          coursePrerequisites:
            "Basic fly casting experience is helpful. No prior saltwater fly casting experience required. Designed to prepare freshwater fly anglers for their first or next saltwater destination trip.",
          teaches: [
            "Double haul for wind-cutting line speed",
            "Quick-delivery accuracy under pressure",
            "Heavy-rod casting efficiency without shoulder strain",
            "Wind management and tracking",
            "Stripping basket management and line control",
            "Distance accuracy for bonefish, tarpon, and permit presentations",
            "Casting fault recognition and self-correction",
          ],
        })}
      />
      <SchemaScript schema={faqPageSchema(faqs)} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/masterclass/mc-10.webp")}
          srcSet={`${img("/images/mobile/mc-10.webp")} 1280w, ${img("/images/masterclass/mc-10.webp")} 1920w`}
          sizes="100vw"
          alt="Mac Brown teaching fly casting at the Masterclass Workshop — saltwater preparation instruction"
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
            Saltwater Fly Casting Schools &amp; Instruction in North Carolina
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <Link
              href="/fly-casting-instruction"
              className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-white/90 transition-colors"
            >
              Book a Private Lesson <ArrowRight size={14} />
            </Link>
            <Link
              href="/saltwater-fly-casting-elite-masterclass-workshop"
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
            Most fly anglers who blow an expensive saltwater trip do not blow it because they lack heart or commitment — they blow it because their cast was never tested in wind, their delivery takes too long, or their loop collapses the moment the rod gets heavier. That is a fixable problem. Mac Brown is the only FFI Master Casting Instructor in North Carolina, a certified casting examiner for Fly Fishers International, and the author of <em>Casting Angles</em>. He has been preparing anglers for destination trips since 1987. This is a judgment-free clinic. No experience is too little and no cast is too broken to fix before your trip.
          </p>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed italic">
            You put too much money into that trip to let your cast be the thing that costs you the fish.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            The Flats Are Not Forgiving. Your Preparation Can Be.
          </h2>
          <p>
            Saltwater fly fishing operates on a different clock than trout fishing. On a bonefish flat or a tarpon channel, you often get one shot. The fish materializes out of nowhere, your guide calls the distance and direction, and you have roughly three seconds to put the fly in the right place. There is no second cast to get it right. There is no roll cast to buy time. There is just you, a heavy rod, a stiff wind, and the pressure of knowing that the trip cost a lot of money to get to.
          </p>
          <p>
            The good news: the skills that make saltwater fly fishing work are completely trainable. The double haul, the quick delivery, the ability to cast a 10-weight accurately at 45 feet into a crosswind — none of it is a mystery, and none of it requires you to be an expert before you start. It requires good instruction and enough repetition for it to start feeling automatic.
          </p>
          <p>
            That is exactly what this school does. Mac Brown has been preparing anglers for bonefish, tarpon, permit, and redfish trips for decades — in a setting where there is no fish pressure, no guide watching, no money on the line. Just clean work on the exact skills that will either save or cost your trip.
          </p>
          <blockquote className="border-l-2 border-primary pl-5 italic text-foreground/80">
            "The anglers who struggle on saltwater flats are almost never struggling because they are not skilled enough. They are struggling because nobody ever showed them how to cast a heavy rod efficiently and deliver fast. One session of focused work on that specific problem changes everything."
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
              How Do You Want to Prepare?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              One path is fast and focused. The other goes deep. Both will change what happens when a fish appears.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Path A */}
            <div className="bg-white border border-border p-8 flex flex-col">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-3">Path A</p>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Private Saltwater Casting Lesson — Fast-Track Fix
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                Ideal if your trip is coming up and you need a focused, honest session on exactly what is breaking down. One hour with Mac will identify the specific problems in your double haul, your delivery timing, or your wind tracking — and give you a clear, repeatable fix you can take to the flats. Completely private: one or two people, all saltwater tackle provided.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Trip coming up — need a fast, targeted fix",
                  "Specific problem: double haul, wind tracking, accuracy",
                  "Want to try a heavier rod before buying one",
                  "Prefer to go at your own pace, one-on-one",
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
                Book a Private Saltwater Lesson <ArrowRight size={14} />
              </Link>
            </div>

            {/* Path B */}
            <div className="bg-white border border-border p-8 flex flex-col">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-3">Path B</p>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                2-Day Saltwater Weekend School — We Build It From Scratch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                Two full days where we slow everything down and build the right habits from the ground up. No experience with saltwater casting required — that is the entire point. You will learn how to handle a heavier rod comfortably, how to push a cast through wind, and how to get a fly on target fast. By the end of day two you will cast with a confidence you did not arrive with. Everything is provided. Nobody is judging your starting point.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Complete beginners welcome — we start where you are",
                  "Two full days, no rushing, small group",
                  "All saltwater rods, reels, and lines provided",
                  "Leave with repeatable skills, not just notes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/saltwater-fly-casting-elite-masterclass-workshop"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/90 transition-colors w-full justify-center"
              >
                See the Weekend Saltwater School <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FRESHWATER ANGLERS STRUGGLE */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Why Good Trout Anglers Struggle on Saltwater Flats
          </h2>
          <p>
            This is not a knock — it is just physics. Trout fishing rewards patience. You can take your time, reposition, try again. The rod is light, the line is light, and the pressure is manageable. Saltwater fishing demands the opposite: fast, accurate, heavy, into the wind, on the first try. A skilled trout angler who has never practiced these specific mechanics will struggle — not because they are not a good angler, but because the skill set is genuinely different.
          </p>
          <p>
            The single biggest gap is usually the double haul. On a trout rod, you probably do not need it. On a 10-weight in a 20-mile-an-hour crosswind, you absolutely do — and doing it wrong collapses your loop and kills your distance. The second gap is delivery speed: saltwater presentations need to happen in two or three seconds, not six or eight. The third gap is simply not being used to the weight of a heavy rod, which leads to casting with your arm instead of the rod, which leads to a sore shoulder and inaccurate casts.
          </p>
          <p>
            All three of these problems are solvable. That is exactly what this school addresses.
          </p>
        </div>
      </section>

      {/* CURRICULUM MATRIX */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">
              What You Will Learn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              What We Work On — And What It Gets You
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Every skill directly maps to a real moment on the flats. Nothing is taught in a vacuum.
            </p>
          </div>

          <div className="divide-y divide-border border border-border">
            <div className="grid grid-cols-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.2em] px-6 py-3">
              <span>What We Work On</span>
              <span>What You Get Out of It</span>
            </div>
            {curriculumMatrix.map((row) => (
              <div
                key={row.concept}
                className="grid grid-cols-2 px-6 py-5 gap-6 bg-white hover:bg-muted/20 transition-colors"
              >
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
            src={img("/images/casting-class-2.webp")}
            srcSet={`${img("/images/mobile/casting-class-2.webp")} 800w, ${img("/images/casting-class-2.webp")} 1920w`}
            sizes="50vw"
            alt="Fly casting instruction in the Smoky Mountains"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={img("/images/fall-river-fishing.webp")}
            srcSet={`${img("/images/mobile/fall-river-fishing.webp")} 800w, ${img("/images/fall-river-fishing.webp")} 1920w`}
            sizes="50vw"
            alt="Fly fishing in the Smoky Mountains, Western North Carolina"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* HOW MAC TEACHES */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            How Mac Teaches — What You Feel, Not What You Remember
          </h2>
          <p>
            When you are standing on a flat with a fish coming toward you, you cannot stop and think through a checklist. The cast either happens or it does not. That means the goal of preparation is not to give you rules to memorize — it is to get the movement so ingrained that it runs on its own when the pressure is on.
          </p>
          <p>
            Mac watches you cast, finds exactly where things are breaking down, and gives you one specific correction at a time. Not a lecture. Not a list of what you are doing wrong. One thing, clearly explained, with a drill that makes the difference immediately obvious in how the rod feels when you do it right. That feeling — the rod loading correctly, the line unrolling cleanly — is what gets locked in.
          </p>
          <p>
            For saltwater preparation specifically, Mac runs you through realistic scenarios: wind from different angles, quick target switches, stripping and re-presenting on a short clock. The goal is not a perfect cast in ideal conditions. The goal is a functional, accurate cast when everything is slightly wrong — which is what the flats actually look like.
          </p>
          <ul className="space-y-3 pt-2">
            {[
              "One correction at a time — not a wall of notes you will forget by tomorrow",
              "Realistic scenarios that mirror actual saltwater fishing pressure",
              "Honest feedback on what is working and what still needs time",
              "Every drill designed to carry over when you are standing on the water for real",
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

      {/* LOCAL LOGISTICS + CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Location &amp; What&apos;s Included
              </h2>
              <p>
                All instruction takes place in Bryson City, North Carolina — in the heart of the Great Smoky Mountains. Saltwater casting clinics are run in an open field or lawn setting that gives you the long sight lines and room to make full-length presentations. No river current to manage, no fish to distract you — just focused, realistic practice in the conditions that actually matter.
              </p>
              <p>
                <strong className="text-foreground">All saltwater tackle is fully provided.</strong> Premium rods in 8, 9, 10, and 11-weight. Matched saltwater reels and specialized lines. Everything you need to cast properly and figure out what rod weight feels right before you invest in gear. Bring your own setup if you want instruction specific to your equipment — but it is never required.
              </p>
              <div className="space-y-2 pt-2">
                {[
                  "Bryson City, NC — open field setting, year-round",
                  "All saltwater rods, reels, and lines provided",
                  "Private lessons: 1–2 students maximum",
                  "Weekend clinic: 2 full days, small group",
                  "No saltwater experience required",
                  "Book early — availability is limited",
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
                Don&apos;t Leave It to Chance
              </p>
              <h3 className="font-serif text-2xl font-bold mb-4">
                Prepare Before the Trip. Not After.
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-8 text-sm">
                One focused session is enough to know what is wrong and start fixing it. Book a lesson, ask a question, or find out which option fits your timeline.
              </p>
              <div className="space-y-3">
                <Link
                  href="/fly-casting-instruction"
                  className="flex items-center justify-between gap-2 bg-white text-primary text-xs font-semibold uppercase tracking-[0.15em] px-6 py-4 hover:bg-white/90 transition-colors"
                >
                  Book a Private Lesson <ArrowRight size={14} />
                </Link>
                <Link
                  href="/saltwater-fly-casting-elite-masterclass-workshop"
                  className="flex items-center justify-between gap-2 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.15em] px-6 py-4 hover:bg-white/10 transition-colors"
                >
                  2-Day Saltwater Masterclass <ArrowRight size={14} />
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
