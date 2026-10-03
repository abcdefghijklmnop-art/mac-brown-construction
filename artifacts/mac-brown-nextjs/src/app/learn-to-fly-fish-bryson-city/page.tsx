import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Phone } from "lucide-react";

import { SchemaScript } from "@/components/schema-script";
import { courseSchema, faqPageSchema } from "@/lib/schema";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Learn to Fly Fish in Bryson City, NC — Beginner Lessons" },
  description: "Never fly fished before? Start here. Beginner fly fishing lessons in Bryson City, NC with patient, expert instruction from Mac Brown Fly Fish.",
  alternates: { canonical: "https://macbrownflyfish.com/learn-to-fly-fish-bryson-city/" },
  openGraph: {
    title: "Learn to Fly Fish in Bryson City, NC — Mac Brown Fly Fish | Great Smoky Mountains",
    description: "Beginner fly fishing lessons, schools, and guided instruction in Bryson City, NC. Mac Brown is the only FFI Master Certified Instructor in North Carolina — teaching since 1987.",
    url: "https://macbrownflyfish.com/learn-to-fly-fish-bryson-city/",
    images: [{ url: "https://macbrownflyfish.com/images/blog/troutfest-fly-casting-instruction.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn to Fly Fish in Bryson City, NC — Mac Brown Fly Fish | Great Smoky Mountains",
    images: ["https://macbrownflyfish.com/images/blog/troutfest-fly-casting-instruction.webp"],
  },
};

const options = [
  {
    title: "Private Fly Casting Lessons",
    desc: "The fastest path to improvement. One-on-one instruction tailored entirely to your current skill level and specific goals. Mac diagnoses exactly what needs to change and gives you the tools to change it — permanently. $400 per hour.",
    link: "/fly-casting-instruction",
    cta: "Learn about casting lessons",
  },
  {
    title: "Guided Wade Trips",
    desc: "The most immersive learning experience available. You are in the water — reading it, moving through it, fishing it with a guide beside you providing real-time instruction on every cast, every presentation, and every fish. The day covers fly casting, water reading, tactics, hooksets, and playing fish. All gear provided.",
    link: "/guided-wade-fly-fishing-trips",
    cta: "Learn about wade trips",
  },
  {
    title: "Guided Float Trips",
    desc: "Fish the Tuckasegee River from a drift boat — covering miles of productive water while receiving instruction on every technique the day calls for. Nymphing, wading approach, reading current seams, managing your drift — all taught on the water in the context of actually fishing. All gear provided.",
    link: "/guided-float-fly-fishing-trips",
    cta: "Learn about float trips",
  },
  {
    title: "Weekend Fly Fishing Schools",
    desc: "Two-day immersion programs that compress months of self-directed learning into a single weekend. Small groups, structured curriculum, classroom sessions in the morning and guided river time in the afternoon. Designed for beginners and improvers who want a complete foundation.",
    link: "/smoky-mountain-weekend-schools",
    cta: "Learn about weekend schools",
  },
  {
    title: "Masterclass Casting Workshop",
    desc: "An intensive casting program for anglers ready to take their technique to the next level. Advanced presentations, specialty casts, and the deeper mechanics of efficient casting — taught by the only Master Certified Instructor in North Carolina.",
    link: "/masterclass-fly-casting-workshop",
    cta: "Learn about the Masterclass",
  },
  {
    title: "Online Casting Lessons",
    desc: "Casting instruction via video — send Mac a recording of your casting and receive a detailed analysis with specific corrections. A practical option if you can't make it to Bryson City, or as preparation before a guided day on the water.",
    link: "/fly-casting-instruction",
    cta: "Learn about online lessons",
  },
];

const beginnerFaq = [
  {
    q: "How do I learn to fly fish in Bryson City, NC?",
    a: "The best way to learn is a guided wade trip with Mac Brown Fly Fish — you spend a full day on the river learning casting, reading water, fly selection, and how to actually catch trout. Mac has taught complete beginners for nearly four decades and structures every lesson from the ground up. A private casting lesson is the fastest way to build casting mechanics specifically.",
  },
  {
    q: "Do I need any experience or gear to start fly fishing?",
    a: "None. All rods, reels, lines, leaders, flies, and waders are provided on every guided trip and casting lesson. No experience is necessary — most beginners are casting and catching trout within a single day.",
  },
  {
    q: "What is the best option for a complete beginner?",
    a: "A guided wade trip is the most complete beginner experience — you learn casting, reading water, tactics, and how to catch fish in a single day on the wild trout rivers of the Great Smoky Mountains. A private casting lesson is the fastest path to a reliable cast. Both are excellent starting points.",
  },
  {
    q: "Is fly fishing accessible for older anglers and families?",
    a: "Absolutely. Mac guides people of all ages and abilities. Float trips are especially accessible — you fish from a comfortable drift boat while the guide handles the rowing and navigation. Wade trips can be tailored to easy, low-gradient water for any fitness level.",
  },
  {
    q: "What is the cancellation and payment policy?",
    a: "CANCELLATION: Weather and emergencies — we will always work with you. Dates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance at the time of reservation. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you.\n\nPAYMENT: Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee. To avoid fees entirely, we accept Zelle, Venmo, and personal check at no additional cost — just use the contact form and let us know your preferred method.",
  },
];

const whatToExpect = [
  "All gear provided — rods, reels, lines, leaders, flies, and waders",
  "No experience necessary — instruction starts from wherever you are",
  "Casting fundamentals covered before you ever step in the river",
  "Water reading and fish identification as part of every guided day",
  "Real-time correction and feedback throughout the session",
  "Fly selection and rigging taught in context — not in a classroom",
  "Hooksets, fighting fish, and proper catch-and-release handled",
  "A clear plan for continuing your development after the trip",
];

const brysonCityWaters = [
  "Nantahala River",
  "Tuckasegee River",
  "Great Smoky Mountains National Park",
  "Fontana Lake",
  "Native Brook Trout Streams",
];

export default function LearnToFlyFishBrysonCity() {
  return (
    <div className="w-full">
      <SchemaScript schema={courseSchema({
        name: "Learn to Fly Fish in Bryson City, NC — Beginner Fly Fishing Lessons",
        description: "Beginner fly fishing lessons and instruction in Bryson City, North Carolina, taught by Mac Brown — the only FFI Master Casting Instructor in North Carolina and the author of Casting Angles. Mac has been teaching complete beginners on the Tuckasegee River since 1987. This page is a guide to every beginner option available — private lessons, weekend schools, and guided half-days — all designed for people who have never held a fly rod. No experience, no gear, and no jargon required.",
        url: "/learn-to-fly-fish-bryson-city",
        image: "https://macbrownflyfish.com/images/blog/troutfest-fly-casting-instruction.webp",
        educationalLevel: "Beginner",
        coursePrerequisites: "No prior fly fishing or fly casting experience required. Complete beginners are the primary audience.",
        teaches: [
          "Fly rod grip and basic casting stroke",
          "Overhead cast fundamentals",
          "Roll cast and water-loaded presentations",
          "Reading water and understanding trout habitat",
          "Basic fly selection and rigging",
          "Landing and handling trout safely",
        ],
      })} />
      <SchemaScript schema={faqPageSchema(beginnerFaq)} />
      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/casting-class-1.webp")}
          srcSet={`${img("/images/mobile/casting-class-1.webp")} 800w, ${img("/images/casting-class-1.webp")} 1920w`}
          sizes="100vw"
          alt="Learn to fly fish in Bryson City NC — Mac Brown Fly Fish, Smoky Mountains"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            Bryson City, NC · Great Smoky Mountains · Since 1987
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-5">
            Learn to Fly Fish<br />in Bryson City, NC
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Book a Lesson or Trip <ArrowRight size={14} />
            </Link>
            <Link
              href="/instructional-guided-trips"
              className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* STAT BANNER */}
      <section className="bg-primary py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white text-lg md:text-xl font-semibold leading-relaxed">
            A NCWRC creel study reveals that only{" "}
            <span className="font-black text-3xl md:text-4xl">2%</span> of anglers catch over{" "}
            <span className="font-black text-3xl md:text-4xl">90%</span> of the trout.
          </p>
          <p className="text-white/70 mt-3 text-base md:text-lg">
            A fly fishing lesson is the fastest way to move from the 98% to the 2%.
          </p>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Learn to fly fish in Bryson City, North Carolina with Mac Brown Fly Fish — the original fly fishing instructor in Western NC since 1987. The only FFI Master Casting Instructor in the state teaches complete beginners the correct foundation from day one. Guided trips, private casting lessons, and weekend schools available year-round. All gear provided, no experience necessary.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Bryson City, NC</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            Anyone Can Learn to Fly Fish — And Learn It the Right Way
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Fly fishing looks complicated from the outside. The casting, the insects, the reading of water, the rigging — it can feel like an enormous amount to absorb before you ever catch a fish. The truth is simpler than it appears. With the right instruction in the right setting, most beginners are casting confidently, reading the river, and catching trout on their own presentations within a single day.
            </p>
            <p>
              Mac Brown Fly Fish has been teaching fly fishing for trout in the Smoky Mountains town of Bryson City, NC since 1987 — longer than any other outfitter in the region. Mac is the only FFI Master Certified Instructor in the state of North Carolina, and teaching fly fishing has been his full-time occupation for nearly four decades. The knowledge, the patience, and the water are all here. The only thing missing is you.
            </p>
            <p>
              Beginners through advanced anglers all gain a stronger foundation through proper instruction. The goal is always the same — to increase your skill level to the point where you can go to the water on your own and succeed. That independence, built on a genuine understanding of what to do and when to do it, is the most valuable thing any fly fishing lesson can deliver.
            </p>
          </div>
        </div>
      </section>

      {/* PHOTO DIVIDER */}
      <div className="grid grid-cols-2 gap-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={img("/images/casting-class-1.webp")}
            srcSet={`${img("/images/mobile/casting-class-1.webp")} 800w, ${img("/images/casting-class-1.webp")} 1920w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Fly casting instruction in the Smoky Mountains — Mac Brown Fly Fish Bryson City NC"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="aspect-square overflow-hidden">
          <img
            src={img("/images/client-float-1.webp")}
            srcSet={`${img("/images/client-float-1-800.webp")} 800w, ${img("/images/client-float-1.webp")} 1080w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Guided fly fishing on the Tuckasegee River near Bryson City NC — Mac Brown Fly Fish"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* OPTIONS */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Programs</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            How You Can Learn — Every Option Available
          </h2>
          <p className="text-muted-foreground text-center leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether you want private instruction, a guided day on the water, a structured weekend school, or a remote video lesson — there is a format that fits your schedule and skill level.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {options.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="bg-background border border-border p-6 hover:border-primary/40 transition-colors block"
              >
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{item.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BRYSON CITY */}
      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">The Location</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            Why Bryson City Is the Best Place in the East to Learn
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Bryson City is not just a convenient base — it is the center of what serious anglers call the Trout Mecca of the South. Swain County holds more miles of quality wild trout water than any other county in North Carolina. The Nantahala River runs cold and clear through the gorge to the west. The Great Smoky Mountains National Park — one of the largest protected wild trout fisheries in the eastern United States — begins at the edge of town.
            </p>
            <p>
              The Tuckasegee River flows through the valley nearby, offering one of the most productive and accessible beginner fisheries in the Southeast on the Delayed Harvest section from fall through spring. Remote backcountry streams with native brook trout are within an hour's drive. Fontana Lake and the Smoky Mountain stillwaters are accessible by boat. Every type of fly fishing available in the eastern half of the country is available within a short drive of Bryson City.
            </p>
            <p>
              This is not a place you come to learn fly fishing and then have to travel somewhere else to use it. The water where you learn is the same world-class water you will return to season after season.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            {brysonCityWaters.map((water, i) => (
              <span key={i} className="text-xs font-semibold uppercase tracking-wider text-primary border border-primary/30 px-3 py-1">
                {water}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MAC */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Your Instructor</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            Learn from NC's Only Master Casting Instructor
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Mac Brown holds the highest casting certification available from the Fly Fishers International — Master Certified Instructor. He is the only person in North Carolina to hold this credential, and one of a small number of instructors in the entire country who has achieved it.
            </p>
            <p>
              Teaching is not a secondary activity for Mac. It has been the primary focus of his professional life since 1987 — longer than nearly any other full-time fly fishing instructor in the eastern United States. The curriculum he has developed over nearly four decades is built on what actually works in real conditions on real water with real beginners, not on theoretical ideals.
            </p>
            <p>
              Mac diagnoses casting faults for immediate, measurable improvement — giving you specific, repeatable corrections that hold long after the session ends. This is not a parking lot lesson with borrowed gear and broad generalizations. Nearly four decades of full-time teaching show in the results.
            </p>
          </div>
          <blockquote className="mt-10 border-l-4 border-primary pl-6">
            <p className="font-serif text-lg italic text-foreground leading-relaxed">
              "The goal of every lesson is simple: to give you the tools to go to the water on your own and succeed. Not to make you dependent on a guide — but to make you independent."
            </p>
            <footer className="mt-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">— Mac Brown</footer>
          </blockquote>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Getting Started</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center leading-tight">
            What to Expect on Your First Day
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {whatToExpect.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-background border border-border p-4">
                <Check size={15} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Common Questions</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-0">
            {beginnerFaq.map((item, i) => (
              <div key={i} className="border-b border-border py-6">
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">{item.q}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm whitespace-pre-line">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Start Here</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Ready to Learn to Fly Fish in Bryson City?
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            The water is here. The instruction is here. The only thing missing is you. Reach out and we'll help you choose the right program for your experience level and schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Book a Lesson or Trip <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+18287360019"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              <Phone size={14} /> (828) 736-0019
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
