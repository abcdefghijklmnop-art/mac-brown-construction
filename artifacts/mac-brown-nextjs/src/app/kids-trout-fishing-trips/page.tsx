import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone, ArrowRight } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { serviceSchema } from "@/lib/schema";
import { img } from "@/lib/asset";
import FaqAccordion from "./faq-accordion";

const kidsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Mac Brown and is he good with kids?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mac Brown is the only FFI Master Casting Instructor in North Carolina and has been teaching fly fishing since 1987. He is known for meeting every student — including kids — exactly where they are. Mac has been teaching children to fly fish on the Tuckasegee River for decades. The goal on every kids trip is simple: catch fish, build confidence, and make sure your child has a great day.",
      },
    },
    {
      "@type": "Question",
      name: "How old does my child need to be for a kids fly fishing trip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We welcome kids ages 5 and up. Younger children do best with a half-day trip — it covers the fundamentals without pushing past the point where it stops being fun. Older kids and teens are ready for a full day on the water.",
      },
    },
    {
      "@type": "Question",
      name: "Do we need any gear or experience for a kids fly fishing trip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "None. Mac Brown Fly Fish provides everything — fly rods, reels, lines, flies, and waders if needed. No fly fishing experience is required for kids or adults.",
      },
    },
    {
      "@type": "Question",
      name: "Does my child need a fishing license?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NC fishing licenses are required for anglers 16 and older only. Kids under 16 do not need a fishing license to fish in North Carolina. There is no trout stamp in NC.",
      },
    },
    {
      "@type": "Question",
      name: "How long is a kids fly fishing trip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend a half-day trip for younger kids and first-timers. It covers casting fundamentals, reading water, presentation, and catching fish without going past the point where it stops being fun. Full-day trips are available for older kids and teens ready for a serious day on the water.",
      },
    },
    {
      "@type": "Question",
      name: "Are lunches included on kids fly fishing trips?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lunches are not included. We recommend bringing snacks, water, and a lunch — kids burn energy fast on the water. There are restaurants and grocery options in Bryson City for provisioning before departure.",
      },
    },
    {
      "@type": "Question",
      name: "Is a kids fly fishing trip private or with other groups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Private trips only — your family, no one else. Every kids trip is tailored to your child's age, attention span, physical ability, and goals on the water. No strangers, no pressure, no rushing.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: { absolute: "Kids Fly Fishing Trips — Smoky Mountains, Bryson City NC" },
  description: "Kids fly fishing trips in Bryson City, NC — ages 5 and up, all gear provided, private trips only. Expert instruction on the wild streams of the Smoky Mountains.",
  alternates: { canonical: "https://macbrownflyfish.com/kids-trout-fishing-trips/" },
  openGraph: {
    title: "Kids Fly Fishing Trips — Great Smoky Mountains | Mac Brown Fly Fish",
    description: "Introduce your kids to fly fishing in the Smoky Mountains. Expert instruction, all gear provided, ages 5 and up. Bryson City, NC.",
    url: "https://macbrownflyfish.com/kids-trout-fishing-trips/",
    images: [{ url: "https://macbrownflyfish.com/images/youth-kids-casting-class.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids Fly Fishing Trips — Great Smoky Mountains | Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/youth-kids-casting-class.webp"],
  },
};

export default function KidsTroutFishingTripsPage() {
  return (
    <>
      <SchemaScript schema={serviceSchema({
        name: "Kids Fly Fishing Trips — Great Smoky Mountains",
        description: "Guided fly fishing trips and instruction for kids and families in the Great Smoky Mountains of North Carolina, led by Mac Brown — the only FFI Master Casting Instructor in North Carolina and a certified casting examiner for Fly Fishers International. These private trips introduce kids to fly casting, reading water, and catching their first trout on wild mountain streams in and around Bryson City, NC. Mac has been teaching young anglers since 1987 with a patient, encouraging approach that meets kids where they are — ages 5 and up, no experience required. All rods, reels, flies, and gear are provided.",
        url: "https://macbrownflyfish.com/kids-trout-fishing-trips/",
        image: "https://macbrownflyfish.com/images/youth-kids-casting-class.webp",
      })} />
      <SchemaScript schema={kidsFaqSchema} />

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[560px] flex items-center justify-center text-white text-center overflow-hidden">
        <img
          src={img("/images/youth-kids-casting-class.webp")}
          alt="Kids fly fishing casting class in the Smoky Mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
            Kids Fly Fishing Trips
          </h1>
          <p className="text-lg md:text-2xl italic font-light mb-8 text-slate-200">
            Smoky Mountains · Bryson City, North Carolina
          </p>
          <Link
            href="/reserve"
            className="inline-flex items-center gap-2 bg-[hsl(215,55%,28%)] hover:bg-[hsl(215,55%,22%)] text-white font-semibold px-8 py-4 rounded transition-colors text-lg"
          >
            Book a Trip <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* AEO */}
      <section className="py-12 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted-foreground text-lg leading-relaxed">Kids trout fishing trips in the Smoky Mountains of Bryson City, NC are available year-round for children ages 5 and up — all gear provided, no experience required. Children learn fly fishing fundamentals at an exponential pace compared to adults — no bad habits to unlearn, no pride to overcome. A half-day guided wade trip on the Tuckasegee River delayed harvest section is the ideal first fly fishing experience for young anglers. Mac Brown has been introducing children to fly fishing in the Smoky Mountains since 1987 — including coaching Fly Fishing Team USA Youth to multiple World Championships.</p>
        </div>
      </section>

      {/* Details Strip */}
      <section className="bg-[hsl(215,55%,28%)] text-white py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Availability", value: "Year-Round" },
            { label: "Ages", value: "5 and Up" },
            { label: "Group Size", value: "Private — Your Family Only" },
            { label: "Gear", value: "All Provided" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs uppercase tracking-widest text-blue-200 mb-1">{label}</p>
              <p className="font-semibold text-base">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            Mac Brown Fly Fish offers kids trout fishing trips in Bryson City, North Carolina on the wild streams of the Great Smoky Mountains — year-round, all gear provided, private trips for your family only. Ages 5 and up welcome, with a half-day trip the ideal starting point for younger anglers. Kids are the best students on the water — no bad habits to unlearn, and they pick it up fast.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            The Right Start Changes Everything
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Kids learn fly fishing faster than adults — their instincts haven&apos;t been overwritten by bad habits, and their enthusiasm is real. A good first experience on the water can spark a lifetime of fly fishing. Mac Brown has been introducing young anglers to the Smoky Mountains streams since 1987, and the approach is the same every time: patient, fun, and built around the fish.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            Bryson City sits at the gateway to the Great Smoky Mountains National Park — some of the most beautiful wild trout water in the Eastern United States. Your kids will be casting to real fish in a real river, surrounded by mountain wilderness.
          </p>
          <blockquote className="border-l-4 border-[hsl(215,55%,28%)] pl-6 text-left text-xl italic text-slate-700 font-light">
            &ldquo;Watching a kid land their first trout on a fly — that never gets old. It&apos;s one of the best parts of this job.&rdquo;
            <footer className="mt-3 text-base not-italic text-slate-500">— Mac Brown</footer>
          </blockquote>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Who This Is For</h2>
          <ul className="space-y-4">
            {[
              "First-time anglers with no fly fishing experience at all",
              "Kids who have fished before but want to learn the fly fishing way",
              "Families visiting the Smoky Mountains looking for a memorable outdoor experience",
              "Young anglers ages 5 and up — half-day trips for younger kids, full days for older",
              "Parents who want to fish alongside their kids and learn together",
              "Scouts, homeschool groups, or small friend groups (private trips for your group only)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700 text-base">
                <Check className="h-5 w-5 text-[hsl(215,55%,28%)] mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Photo Divider */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src={img("/images/youth-brown-trout.webp")}
              alt="Young angler holding a brown trout caught in the Smoky Mountains"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src={img("/images/youth-group-instruction.webp")}
              alt="Youth group fly fishing instruction in Western North Carolina"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* What They'll Learn */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-3 text-center">What the Day Covers</h2>
          <p className="text-center text-slate-500 mb-12 max-w-xl mx-auto">
            Every trip is tailored to your child&apos;s age and attention span — Mac reads the student and adjusts accordingly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Casting Fundamentals",
                body: "The foundation of everything. Mac teaches the basic fly cast in a way that sticks — breaking it into easy pieces and building from there. Most kids are casting fishable loops within the first 30 minutes.",
              },
              {
                title: "Reading the Water",
                body: "Where do the trout live, and why? Kids learn to see a river as a fish sees it — finding the seams, pockets, and pools that hold fish. It's a puzzle, and most kids love solving it.",
              },
              {
                title: "Presentation & Drift",
                body: "Getting the fly to float naturally over the fish. This is where real trout fishing happens, and Mac teaches it simply: put the fly where the fish are, let it drift like real food.",
              },
              {
                title: "Hooksets & Playing Fish",
                body: "The exciting part. When a trout takes — what do you do? Mac walks every young angler through the hookset, the fight, and bringing the fish to hand safely for a photo and release.",
              },
              {
                title: "Catch & Release",
                body: "Handling fish gently, keeping them wet, and letting them go strong. Kids leave with a respect for the resource — and an understanding of why wild trout are worth protecting.",
              },
              {
                title: "The Gear & the River",
                body: "Fly rods, reels, lines, and flies explained at the right level. How waders work, how to walk a river safely, and how to spot wildlife along the way. The full Smoky Mountains experience.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-8 h-0.5 bg-[hsl(215,55%,28%)] mb-4" />
                <h3 className="font-bold text-slate-800 text-lg mb-3">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">Ready to Go Further?</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            A kids trip is often just the beginning. Once they&apos;re hooked, there&apos;s a full world of fly fishing to grow into — Mac offers programs at every level.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Learn to Fly Fish",
                desc: "The complete beginner path — casting lessons, guided trips, and schools for new anglers of any age who want a strong foundation.",
                link: "/learn-to-fly-fish-bryson-city",
                cta: "Get started",
              },
              {
                title: "Weekend Schools",
                desc: "Two-day immersion programs covering casting, tactics, water reading, and guided river time. Great for kids ready for a deeper dive.",
                link: "/smoky-mountain-weekend-schools",
                cta: "See the schools",
              },
              {
                title: "Guided Wade Trips",
                desc: "A full day in the water — moving, reading, casting, and catching. Perfect for older kids and teenagers ready for a serious day of fishing.",
                link: "/guided-wade-fly-fishing-trips",
                cta: "See wade trips",
              },
            ].map(({ title, desc, link, cta }) => (
              <div key={title} className="border border-slate-200 rounded-lg p-6 flex flex-col">
                <h3 className="font-bold text-slate-800 text-xl mb-3">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{desc}</p>
                <Link
                  href={link}
                  className="inline-flex items-center gap-2 text-[hsl(215,55%,28%)] font-semibold text-sm hover:underline"
                >
                  {cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Your Instructor</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            Mac Brown is the only FFI Master Certified Fly Casting Instructor in North Carolina — the highest certification in the sport. He has been guiding and teaching on the Smoky Mountains streams of Western North Carolina since 1987, with tens of thousands of students across every age and skill level.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Kids trips are some of his favorites. The patience required is built into his approach — Mac meets every student where they are and moves at their pace. No frustration, no pressure, just good fishing.
          </p>
          <Link
            href="/bio-mac-brown"
            className="inline-flex items-center gap-2 text-[hsl(215,55%,28%)] font-semibold hover:underline"
          >
            More about Mac <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Common Questions</h2>
          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[hsl(215,55%,28%)] text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book a Kids Fly Fishing Trip
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Private trips for your family — year-round, all gear provided, ages 5 and up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reserve"
              className="inline-flex items-center justify-center gap-2 bg-white text-[hsl(215,55%,28%)] hover:bg-slate-100 font-semibold px-8 py-4 rounded transition-colors"
            >
              Reserve a Trip <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+18287360045"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded transition-colors"
            >
              <Phone className="h-5 w-5" /> (828) 736-0045
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
