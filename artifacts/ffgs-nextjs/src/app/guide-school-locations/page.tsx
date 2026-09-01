import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { img } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "Fly Fishing Guide School Locations — Southeast US" },
  description:
    "The Fly Fishing Guide School draws students from across the nation to Bryson City, NC. Whether you're deepening your love of fly fishing or launching a guide career — find the gateway city nearest you.",
  alternates: { canonical: "https://flyfishingguideschool.com/guide-school-locations/" },
  openGraph: {
    title: "Guide School Locations | Fly Fishing Guide School",
    description:
      "Students travel from across the nation to train at the Fly Fishing Guide School in Bryson City, NC. Find the nearest gateway city to you.",
    url: "https://flyfishingguideschool.com/guide-school-locations/",
    images: ["https://flyfishingguideschool.com/images/smoky-mountains-panorama.webp"],
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "Is the Fly Fishing Guide School only for people who want to become guides?",
    a: "Not at all — the majority of students who attend are recreational anglers who want to get significantly better at fly fishing. The school serves both paths: anglers seeking more efficiency, more fun, and a deeper enrichment of the sport, and those pursuing a professional guide career. Both are fully welcome, and both leave with skills they use for life.",
  },
  {
    q: "What's the difference between the Smoky Mountain Fly Fishing School and the Fly Fishing Guide School?",
    a: "The Smoky Mountain Fly Fishing School is the recreational program — ideal for anglers who want to improve their casting, water reading, and overall technique for the pure love of the sport. The Fly Fishing Guide School is the professional guide training program, covering casting, drift boat rowing, water reading, and the business side of operating a guide service. Both programs share the same FFI Master Certified instructors and the same world-class Smoky Mountain water.",
  },
  {
    q: "Where exactly is the school located?",
    a: "The school is based in Bryson City, North Carolina, in the heart of the Great Smoky Mountains. All instruction takes place on the Tuckasegee River and the wild streams of Great Smoky Mountains National Park — some of the finest wild trout water in the eastern United States.",
  },
  {
    q: "Do I need to arrange lodging if I'm traveling from out of town?",
    a: "Yes — students traveling more than a day-trip distance typically stay in Bryson City for the duration of the school. There are several lodging options in town and nearby, from river cabins to hotels. The school team is happy to point you in the right direction when you enroll.",
  },
  {
    q: "Is the drive from a major city really worth it?",
    a: "Every student who has made the trip says yes. The Smokies produce some of the most technically demanding wild trout fishing in the country — the kind of water that forces you to grow. Students from Atlanta, Nashville, Charlotte, Knoxville, and beyond return year after year.",
  },
];

const cities = [
  {
    name: "Asheville, NC",
    href: "/asheville-fly-fishing-guide-school/",
    drive: "1.5 hours",
    detail: "Closest gateway city — a quick drive through the mountains.",
  },
  {
    name: "Atlanta, GA",
    href: "/atlanta-fly-fishing-guide-school/",
    drive: "3 hours",
    detail: "Direct route north through the Blue Ridge foothills.",
  },
  {
    name: "Birmingham, AL",
    href: "/birmingham-fly-fishing-guide-school/",
    drive: "3.5 hours",
    detail: "Straight shot east on I-20 to the Smokies.",
  },
  {
    name: "Bryson City, NC",
    href: "/bryson-city-fly-fishing-guide-school/",
    drive: "On site",
    detail: "The school's home base — right in the heart of wild trout country.",
  },
  {
    name: "Charlotte, NC",
    href: "/charlotte-fly-fishing-guide-school/",
    drive: "2.5 hours",
    detail: "An easy western drive into the Great Smoky Mountains.",
  },
  {
    name: "Chattanooga, TN",
    href: "/chattanooga-fly-fishing-guide-school/",
    drive: "1.5 hours",
    detail: "Just over an hour east into North Carolina.",
  },
  {
    name: "Greenville, SC",
    href: "/greenville-sc-fly-fishing-guide-school/",
    drive: "2 hours",
    detail: "A scenic two-hour drive through the upstate.",
  },
  {
    name: "Knoxville, TN",
    href: "/knoxville-fly-fishing-guide-school/",
    drive: "1.5 hours",
    detail: "Cross the Smokies into Bryson City — one of the best drives in the East.",
  },
  {
    name: "Nashville, TN",
    href: "/nashville-fly-fishing-guide-school/",
    drive: "4 hours",
    detail: "Southeast across Tennessee — worth every mile.",
  },
  {
    name: "Raleigh, NC",
    href: "/raleigh-fly-fishing-guide-school/",
    drive: "4 hours",
    detail: "Cross the state to the mountains — a full day trip with lodging on site.",
  },
];

export default function GuideSchoolLocations() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://flyfishingguideschool.com/guide-school-locations/",
        "url": "https://flyfishingguideschool.com/guide-school-locations/",
        "name": "Fly Fishing Guide School Locations — Southeast US",
        "description": "The Fly Fishing Guide School draws students from across the Southeast. Find the location nearest you — Asheville, Atlanta, Nashville, Charlotte, and more.",
        "mainEntity": {
          "@type": "ItemList",
          "name": "Fly Fishing Guide School — Cities Served",
          "numberOfItems": 10,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Asheville, NC — Fly Fishing Guide School", "url": "https://flyfishingguideschool.com/asheville-fly-fishing-guide-school/" },
            { "@type": "ListItem", "position": 2, "name": "Atlanta, GA — Fly Fishing Guide School", "url": "https://flyfishingguideschool.com/atlanta-fly-fishing-guide-school/" },
            { "@type": "ListItem", "position": 3, "name": "Birmingham, AL — Fly Fishing Guide School", "url": "https://flyfishingguideschool.com/birmingham-fly-fishing-guide-school/" },
            { "@type": "ListItem", "position": 4, "name": "Bryson City, NC — Fly Fishing Guide School", "url": "https://flyfishingguideschool.com/bryson-city-fly-fishing-guide-school/" },
            { "@type": "ListItem", "position": 5, "name": "Charlotte, NC — Fly Fishing Guide School", "url": "https://flyfishingguideschool.com/charlotte-fly-fishing-guide-school/" },
            { "@type": "ListItem", "position": 6, "name": "Chattanooga, TN — Fly Fishing Guide School", "url": "https://flyfishingguideschool.com/chattanooga-fly-fishing-guide-school/" },
            { "@type": "ListItem", "position": 7, "name": "Greenville, SC — Fly Fishing Guide School", "url": "https://flyfishingguideschool.com/greenville-sc-fly-fishing-guide-school/" },
            { "@type": "ListItem", "position": 8, "name": "Knoxville, TN — Fly Fishing Guide School", "url": "https://flyfishingguideschool.com/knoxville-fly-fishing-guide-school/" },
            { "@type": "ListItem", "position": 9, "name": "Nashville, TN — Fly Fishing Guide School", "url": "https://flyfishingguideschool.com/nashville-fly-fishing-guide-school/" },
            { "@type": "ListItem", "position": 10, "name": "Raleigh, NC — Fly Fishing Guide School", "url": "https://flyfishingguideschool.com/raleigh-fly-fishing-guide-school/" },
          ],
        },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is the Fly Fishing Guide School only for people who want to become guides?",
            "acceptedAnswer": { "@type": "Answer", "text": "Not at all — the majority of students who attend are recreational anglers who want to get significantly better at fly fishing. The school serves both paths: anglers seeking more efficiency, more fun, and a deeper enrichment of the sport, and those pursuing a professional guide career. Both are fully welcome." }
          },
          {
            "@type": "Question",
            "name": "What's the difference between the Smoky Mountain Fly Fishing School and the Fly Fishing Guide School?",
            "acceptedAnswer": { "@type": "Answer", "text": "The Smoky Mountain Fly Fishing School is the recreational program for anglers who want to improve their casting, water reading, and technique for the love of the sport. The Fly Fishing Guide School is the professional guide training program covering casting, drift boat rowing, water reading, and guide business operations. Both share the same FFI Master Certified instructors and the same Smoky Mountain water." }
          },
          {
            "@type": "Question",
            "name": "Where exactly is the school located?",
            "acceptedAnswer": { "@type": "Answer", "text": "The school is based in Bryson City, North Carolina, in the heart of the Great Smoky Mountains. All instruction takes place on the Tuckasegee River and the wild streams of Great Smoky Mountains National Park — some of the finest wild trout water in the eastern United States." }
          },
          {
            "@type": "Question",
            "name": "Do I need to arrange lodging if I'm traveling from out of town?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes — students traveling more than a day-trip distance typically stay in Bryson City for the duration of the school. There are several lodging options in town and nearby, from river cabins to hotels." }
          },
          {
            "@type": "Question",
            "name": "Is the drive from a major city worth it?",
            "acceptedAnswer": { "@type": "Answer", "text": "Every student who has made the trip says yes. The Smokies produce some of the most technically demanding wild trout fishing in the country. Students from Atlanta, Nashville, Charlotte, Knoxville, and beyond return year after year." }
          },
        ],
      }) }} />
    <div className="w-full">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden flex items-end">
        <img
          src={img("/images/smoky-mountains-panorama.webp")}
          alt="Great Smoky Mountains — Fly Fishing Guide School, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 pb-14 w-full">
          <p className="text-white/60 text-[10px] font-medium uppercase tracking-[0.3em] mb-3">
            Bryson City, NC · Since 1987
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
            Find the School<br />Nearest You
          </h1>
          <p className="text-white/80 text-lg font-serif italic">
            Whether you&apos;re deepening your love of fly fishing or launching a guide career — world-class instruction in the Smokies is closer than you think.
          </p>
        </div>
      </section>

      {/* AEO */}
      <section className="py-12 border-b border-border">
        <div className="max-w-4xl mx-auto px-8">
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            The Fly Fishing Guide School draws students from across the nation to Bryson City, North Carolina — a small mountain town at the gateway of Great Smoky Mountains National Park and home to some of the finest wild trout water in the eastern United States. Whether you&apos;re a recreational angler looking to sharpen your skills and deepen your connection to the sport, or someone exploring a career as a guide, world-class instruction from FFI Master Certified instructors has been available here since 1987.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mt-4 italic font-serif">
            No matter where you live — the drive is shorter than you think, and the water makes it worth every mile.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">10 Gateway Cities</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
          The school is in Bryson City — <br className="hidden md:block" />your drive is shorter than you think.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-16">
          The Fly Fishing Guide School has welcomed recreational anglers and aspiring guides from across the nation since 1987. No matter where you live, a little more efficiency, a little more fun, and a deeper enrichment of the sport is within reach — right here in the Smokies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cities.map((city) => (
            <Link
              key={city.href}
              href={city.href}
              className="group border border-border p-6 hover:border-primary transition-colors bg-white"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">{city.drive}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{city.detail}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted/30 border-t border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3 text-center">Two paths. One destination.</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-10 text-center leading-tight">
            Which path is right for you?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/smoky-mountain-fly-fishing-school/" className="group border border-border bg-white p-8 hover:border-primary transition-colors flex flex-col gap-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-primary">Recreational Path</p>
              <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">Smoky Mountain Fly Fishing School</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">A little more efficient, a little more fun, and a deeper enrichment of the sport — for anglers who love fly fishing and want to get significantly better at it.</p>
              <span className="text-sm font-semibold text-primary flex items-center gap-2">Learn more <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link href="/fly-fishing-guide-school/" className="group border border-border bg-white p-8 hover:border-primary transition-colors flex flex-col gap-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-primary">Guide Career Path</p>
              <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">Fly Fishing Guide School</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">Turn your passion for fly fishing into a profession. Four days of guide training — casting, rowing, water reading, and everything you need to launch a guide career on Smoky Mountain waters.</p>
              <span className="text-sm font-semibold text-primary flex items-center gap-2">Learn more <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-muted/30 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">The training ground</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                Why Bryson City?<br />Why the Smokies?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The Great Smoky Mountains National Park protects the headwaters that feed every stream in western North Carolina. No agriculture. No development upstream. Just wild, cold water running off ancient ridges into rivers that hold some of the densest populations of native brook trout, wild rainbows, and brown trout in the eastern United States.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Bryson City sits alongside the Tuckasegee River — a delayed-harvest fishery that produces consistent 14–18 inch trout year-round — surrounded by the wild streams of Great Smoky Mountains National Park just minutes away.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                There is no better classroom for fly fishing in the country. The water forces you to think, adapt, and read — skills that deepen your connection to the sport and transfer to any river you&apos;ll ever fish.
              </p>
            </div>
            <div className="h-72 md:h-[420px] overflow-hidden">
              <img
                src={img("/images/mountain-river-blue.webp")}
                srcSet={`${img("/images/mountain-river-blue-1280.webp")} 1280w, ${img("/images/mountain-river-blue.webp")} 1920w`}
                sizes="100vw"
                alt="Smoky Mountain wild trout water — Fly Fishing Guide School Bryson City NC"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Since 1987</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
              What makes this school worth the drive
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🏅", title: "FFI Master Certified Instructors", body: "The highest casting credential in the discipline. Mac Brown and his instructors have earned what very few guides ever achieve — and they teach it hands-on, on the water." },
              { icon: "📍", title: "One location. One focus.", body: "The school runs exclusively out of Bryson City on the Tuckasegee River and the wild streams of the Smokies. No franchise, no shortcuts — the same water, instructors, and standard since 1987." },
              { icon: "🚣", title: "Drift boat instruction included", body: "Most schools skip the hard part. This one puts you in a boat and teaches you to row technical water until it becomes second nature." },
              { icon: "📋", title: "A curriculum built for your level", body: "From first-time beginners to experienced anglers who want to sharpen their skills — the program adapts to where you are and advances you further than you expect." },
              { icon: "🎓", title: "Small groups. Personalized coaching.", body: "Low student-to-instructor ratios mean you get real feedback on every cast, every drift, and every read — not just a demo and a handout." },
              { icon: "🐟", title: "Wild trout. Real fish.", body: "You practice on the actual fish you&apos;ll guide clients to. No stocked pond work — the Smokies produce fish that demand real technique." },
            ].map((item) => (
              <div key={item.title} className="border border-border p-6 flex flex-col gap-3">
                <div className="text-2xl" aria-hidden="true">{item.icon}</div>
                <h3 className="font-serif text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">Before you make the drive</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight">
          Common questions
        </h2>
        <div className="divide-y divide-border">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-6">
              <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                <h3 className="font-serif text-lg font-bold text-foreground group-open:text-primary transition-colors pr-4">{faq.q}</h3>
                <ChevronDown className="w-5 h-5 text-primary shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-primary text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-4">Ready to Enroll?</h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            All programs run out of Bryson City, NC on the finest wild trout water in the Southeast. FFI Master Certified Instructors. Since 1987.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fly-fishing-guide-school/"
              className="bg-white text-primary font-bold px-10 py-4 hover:bg-gray-100 transition-colors text-sm uppercase tracking-[0.15em]"
            >
              School Overview
            </Link>
            <Link
              href="/reservation-form/"
              className="border border-white text-white font-bold px-10 py-4 hover:bg-white/10 transition-colors text-sm uppercase tracking-[0.15em]"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
