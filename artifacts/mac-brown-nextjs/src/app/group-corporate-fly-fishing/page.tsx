import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Phone } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import FaqSection from "@/components/faq-section";
import { serviceSchema, faqPageSchema } from "@/lib/schema";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Group & Corporate Fly Fishing Trips — Smoky Mountains, NC" },
  description: "Plan a corporate outing or group fly fishing experience in Western North Carolina. Custom packages for teams, clients, and special events.",
  alternates: { canonical: "https://macbrownflyfish.com/group-corporate-fly-fishing/" },
  openGraph: {
    title: "Corporate & Group Fly Fishing Events — Mac Brown Fly Fish | Bryson City, NC",
    description: "Custom corporate and group fly fishing events in Bryson City, NC. Serving Fortune 500 companies since 1988. All gear provided, fully custom programs, world-class instruction in the Great Smoky Mountains.",
    url: "https://macbrownflyfish.com/group-corporate-fly-fishing/",
    images: [{ url: "https://macbrownflyfish.com/images/blog/usa-youth-fly-fishing-team-clinic.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate & Group Fly Fishing Events — Mac Brown Fly Fish | Bryson City, NC",
    images: ["https://macbrownflyfish.com/images/blog/usa-youth-fly-fishing-team-clinic.webp"],
  },
};

const included = [
  {
    title: "Fly Casting Instruction",
    desc: "Professional casting instruction from NC's only Master Casting Instructor. Every participant learns the fundamentals — regardless of prior experience. Most people are making fishable casts within the first hour.",
  },
  {
    title: "Guided Wade Trips",
    desc: "Get in the water on the finest trout streams in the eastern United States. Groups wade together with professional guides providing real-time instruction and support for every participant.",
  },
  {
    title: "Guided Float Trips",
    desc: "Drift the Tuckasegee River in drift boats — comfortable, scenic, and deeply productive. An excellent option for groups that include participants who prefer not to wade.",
  },
  {
    title: "Hookset & Fish Playing",
    desc: "The moment a fish takes the fly is when everything comes together. Groups learn proper hookset technique, playing fish under pressure, and landing fish cleanly — skills that require focus and finesse.",
  },
  {
    title: "School Atmosphere Option",
    desc: "For groups wanting deeper instruction the program can be structured as a school — covering casting mechanics, water reading, entomology, tactics, and techniques in a focused educational format.",
  },
  {
    title: "Team Building Framework",
    desc: "Psychology-designed team building components can be integrated throughout the day — using the fly fishing environment as the backdrop for exercises in communication, problem-solving, and collaborative achievement.",
  },
];

const groupTypes = [
  {
    title: "Corporate Teams",
    desc: "Sales teams, leadership retreats, department outings, new employee onboarding, client entertainment. Fortune 500 companies have trusted us since 1988 to deliver an experience that reflects well on their brand.",
  },
  {
    title: "Special Groups",
    desc: "Bachelor and bachelorette parties, family reunions, birthday celebrations, anniversary trips, scout troops, church groups, and any gathering looking for a genuinely memorable outdoor experience.",
  },
  {
    title: "Educational Groups",
    desc: "Schools, universities, youth organizations, and continuing education programs. Fly fishing provides a rich platform for teaching ecology, entomology, conservation, and outdoor skills.",
  },
];

const rivers = [
  "Tuckasegee River",
  "Tuckasegee River Delayed Harvest",
  "Nantahala River",
  "Upper Nantahala Delayed Harvest",
  "Snowbird Creek Delayed Harvest",
  "Little Tennessee River",
  "Pigeon River",
  "Deep Creek, Forney Creek, Hazel Creek",
  "Noland Creek, Cataloochee Creek",
  "Little River & others in Great Smoky Mountains National Park",
  "Cherokee Fly Fishing Only Section",
  "WNC Fly Fishing Trail Waters",
];

const cities = [
  "Bryson City, Cherokee, Sylva, NC",
  "Maggie Valley, Waynesville, NC",
  "Highlands, Cashiers, Franklin, NC",
  "Murphy, Andrews, Robbinsville, NC",
  "Charlotte & Raleigh, NC",
  "Asheville, NC",
  "Gatlinburg, Pigeon Forge, TN",
  "Knoxville & Sevierville, TN",
  "Atlanta, GA",
  "Greenville & Spartanburg, SC",
  "Great Smoky Mountains National Park",
  "Blue Ridge Parkway",
];

const whyUs = [
  { title: "Original & Most Experienced", desc: "Running corporate and group fly fishing events since 1988 — longer than any other operation in Western North Carolina. Fortune 500 companies have trusted us for over three decades." },
  { title: "NC's Only Master Casting Instructor", desc: "Mac Brown holds the highest casting certification in fly fishing — held by fewer than a few hundred people worldwide. Your group gets the finest instruction available anywhere in the region." },
  { title: "Fully Custom Programs", desc: "Every program is built specifically for your group — size, goals, skill levels, and schedule all considered. Nothing is off the shelf. Nothing is one-size-fits-all." },
  { title: "All Gear Provided", desc: "Every rod, reel, fly, and leader is provided for every participant. Your group shows up and we handle everything else." },
  { title: "Professional Guide Team", desc: "FFI certified casting instructors and experienced professionals who know how to teach, encourage, and inspire participants of every background and skill level." },
  { title: "The Finest Setting Available", desc: "The Great Smoky Mountains National Park and the rivers of Western North Carolina provide an outdoor setting that no conference room or manufactured team building venue can come close to matching." },
];

const groupFaqs = [
  {
    q: "What does a corporate fly fishing event with Mac Brown Fly Fish include?",
    a: "Corporate and group fly fishing events are fully guided days on the wild trout rivers of the Great Smoky Mountains. All gear — rods, reels, flies, leaders, waders, and boots — is provided for every participant. Mac and his staff provide continuous fly casting instruction, fish-finding guidance, and river education throughout the day. Events are customized to your group's experience level and goals.",
  },
  {
    q: "How many people can attend a group fly fishing event?",
    a: "Mac Brown Fly Fish has served groups from 2 to 200+ participants. For guided fishing days, groups are organized into small guide-to-angler ratios for maximum instruction and fish contact. For larger corporate events, additional licensed guides are brought in to ensure everyone gets real time on the water.",
  },
  {
    q: "How much do group and corporate fly fishing events cost?",
    a: "Pricing is customized based on group size, duration, and program type. Contact Mac Brown Fly Fish directly with your group size, dates, and goals for a custom proposal. Standard guided trips for private groups start at the same rates as individual guided days.",
  },
  {
    q: "Where do group fly fishing events take place?",
    a: "Group and corporate events take place on the wild trout rivers and streams of the Great Smoky Mountains — including the Tuckasegee River, the Nantahala River, and the surrounding water of Swain County. These rivers are within 30 minutes of Bryson City and offer world-class trout fishing in a spectacular mountain setting.",
  },
  {
    q: "What is the cancellation and payment policy?",
    a: "CANCELLATION: Weather and emergencies — we will always work with you. Dates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance at the time of reservation. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you.\n\nPAYMENT: Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee. To avoid fees entirely, we accept Zelle, Venmo, and personal check at no additional cost — just use the contact form and let us know your preferred method.",
  },
];

export default function GroupCorporateFlyFishing() {
  return (
    <div className="w-full">
      <SchemaScript schema={serviceSchema({ name: "Corporate & Group Fly Fishing Events", description: "Custom corporate and group fly fishing events in Bryson City, NC. Serving Fortune 500 companies since 1988. All gear provided. Great Smoky Mountains.", url: "/group-corporate-fly-fishing", image: "https://macbrownflyfish.com/images/blog/usa-youth-fly-fishing-team-clinic.webp" })} />
      <SchemaScript schema={faqPageSchema(groupFaqs)} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/casting-class-2.webp")}
          alt="Corporate and group fly fishing events in Bryson City NC — Mac Brown Fly Fish"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex flex-col items-end justify-end pb-16 md:pb-24 px-8 md:px-12 text-right">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            Corporate &amp; Group Events · Bryson City, NC · Since 1988
          </p>
          <h1 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Corporate &amp; Group Fly Fishing — Bryson City, NC
          </h1>
          <p className="text-white/70 text-base md:text-lg font-serif italic max-w-2xl">
            Custom-built fly fishing experiences for corporate teams, groups, and organizations — in the most beautiful outdoor setting in the eastern United States.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="tel:+18287360019"
              className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              <Phone size={14} /> Call to Plan Your Event
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Send Us a Message <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Mac Brown Fly Fish offers corporate and group fly fishing events in Bryson City, North Carolina — fully custom programs for Fortune 500 companies, sales teams, executive retreats, and friend groups since 1988. All gear provided, all group sizes welcome, all skill levels accommodated. No two programs are alike.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Since 1988</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            The Original Corporate Fly Fishing Experience in Western NC
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Mac Brown Fly Fish has been running group and corporate fly fishing events in the Bryson City, NC region since 1988 — longer than any other operation in Western North Carolina. In that time we have worked with Fortune 500 companies including Coca-Cola, BMW America, Georgia Power and Light, and many others — customizing every program to meet the specific goals, size, and culture of each group.
            </p>
            <p>
              What makes fly fishing uniquely powerful as a corporate experience is what it demands from participants — patience, focus, communication, reading the environment, and adjusting in real time to conditions beyond your control. These are not just fly fishing skills. They are leadership skills. And the mountain rivers of the Great Smoky Mountains provide a setting that no conference room, no ropes course, and no retreat center can replicate.
            </p>
            <p>
              We have seen these same participants on the water many years later — people who discovered a genuine passion for fly fishing through a corporate event and never looked back. That kind of lasting impact is the measure of an experience worth having. It is always a special moment to recognize a face from a group event of many years ago — now a dedicated angler who credits that day with changing the way they spend their time outdoors.
            </p>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="bg-primary py-12 px-6">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-4 gap-6 text-center text-white">
          {[
            { stat: "35+", label: "Years of corporate events" },
            { stat: "Fortune 500", label: "Companies served" },
            { stat: "100%", label: "Custom-built programs" },
            { stat: "All sizes", label: "Small groups to large" },
          ].map((item, i) => (
            <div key={i}>
              <p className="font-serif text-3xl font-bold mb-1">{item.stat}</p>
              <p className="text-white/70 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Program Details</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            What Your Group Experience Includes
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
            <p>
              Every corporate and group program is custom-built from the ground up — tailored specifically to your organization's goals, group size, skill levels, and schedule. No two programs are identical because no two groups are identical.
            </p>
            <p>
              We have had top professionals in psychology create team building frameworks for these programs — setting up an environment and learning structure that is second to none in the nation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {included.map((item, i) => (
              <div key={i} className="bg-background border border-border p-6">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Who It&apos;s For</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center leading-tight">
            Perfect For Any Group
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {groupTypes.map((item, i) => (
              <div key={i} className="bg-background border border-border p-6">
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WATERS SERVED */}
      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Locations</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            Waters &amp; Areas Served
          </h2>
          <p className="text-muted-foreground text-center leading-relaxed mb-12 max-w-2xl mx-auto">
            Group programs are available on every major piece of water in the Western NC region — and we serve groups traveling from cities throughout the Southeast.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-background border border-border p-6">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4">Rivers &amp; Streams</h3>
              <ul className="space-y-2">
                {rivers.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={13} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background border border-border p-6">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4">Cities &amp; Regions Served</h3>
              <ul className="space-y-2">
                {cities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={13} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MAC BROWN */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Why Us</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center leading-tight">
            Why Mac Brown Fly Fish for Your Group Event
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {whyUs.map((item, i) => (
              <div key={i} className="bg-background border border-border p-6">
                <h3 className="font-serif text-base font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING NOTE */}
      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-primary text-white p-10 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Pricing &amp; Planning</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Pricing varies based on group size, program length, water selection, and the specific components included. All programs must be planned well in advance to ensure guide availability, water access, and the custom preparation your group deserves.
            </p>
            <p className="text-white font-semibold mb-8">
              The earlier you reach out the better — popular dates fill quickly and custom programs require lead time to build properly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18287360019"
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
              >
                <Phone size={14} /> (828) 736-0019
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
              >
                Send Us a Message <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS TEASER */}
      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Lasting Impact</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            The Experience Speaks for Itself
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The true measure of a corporate fly fishing event is not what happens on the day — it is what happens in the years that follow. We regularly see participants from group events of many years ago still on the water, still improving, still passionate about a sport they discovered through a company outing. That is the lasting impact of an experience done right.
          </p>
          <Link href="/testimonials-kudos" className="text-sm font-semibold uppercase tracking-wider text-primary">
            Read what past clients are saying →
          </Link>
        </div>
      </section>

      <FaqSection items={groupFaqs} />

      {/* CTA */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Plan Your Event</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Bring Your Group to the River
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            Fortune 500 companies have trusted Mac Brown Fly Fish to deliver unforgettable corporate fly fishing experiences since 1988. Your group deserves the same — a fully custom program, world-class instruction, and the most beautiful outdoor setting in the eastern United States.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18287360019"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              <Phone size={14} /> (828) 736-0019
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Send Us a Message <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
