import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown, Check, MapPin } from "lucide-react";
import { img } from "@/lib/utils";
import { MBFF_WEEKEND_SCHOOLS, MBFF_CASTING } from "@/lib/mbff";
import { TuitionPrice } from "@/components/tuition-price";

export const metadata: Metadata = {
  title: { absolute: "Fly Fishing Guide School in Bryson City NC" },
  description:
    "Train on the Tuckasegee River right in Bryson City, NC — heart of Smoky Mountain trout country. FFI Master Certified Instructors since 1987.",
  alternates: { canonical: "https://flyfishingguideschool.com/bryson-city-fly-fishing-guide-school/" },
  openGraph: {
    title: "Guide School — Bryson City, NC | Fly Fishing Guide School",
    description:
      "The only fly fishing guide school in Bryson City, NC — operating since 1987 on the Tuckasegee River and Smoky Mountain streams.",
    url: "https://flyfishingguideschool.com/bryson-city-fly-fishing-guide-school/",
    images: ["https://flyfishingguideschool.com/images/smokies-river-fall.webp"],
  },
  twitter: { card: "summary_large_image" },
};

const reasons = [
  "You're already standing on the water we teach on — the Tuckasegee River and Smoky Mountain streams are your classroom",
  "No long drive, no planning a trip from scratch — you can be in the school within hours of deciding to go",
  "Bryson City is one of the most fish-dense towns in the eastern United States, which is precisely why the school is here",
  "The town itself supports a week-long stay — great lodging, local restaurants, and a genuine outdoor culture",
  "Students from across the country travel to get here. You're already here.",
];

const programs = [
  { title: "Fly Fishing Guide School", desc: "The full 4-day immersion. Casting, rowing, water reading, entomology, client skills, licensing, and job placement.", href: "/fly-fishing-guide-school/" },
  { title: "New to Fly Fishing", desc: "First rod, first cast, first fish. Build the right foundation from day one without the bad habits that slow most beginners down.", href: "/new-to-fly-fishing/" },
  { title: "Smoky Mountain Weekend Schools", desc: "Two-day or weekend programs focused on NC stream tactics, rigging, and reading wild trout water.", href: MBFF_WEEKEND_SCHOOLS },
  { title: "Fly Casting Instruction", desc: "Private casting lessons with an FFI Master Casting Instructor — the highest credential in the discipline.", href: MBFF_CASTING },
];

const guideSchoolCourseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://flyfishingguideschool.com/bryson-city-fly-fishing-guide-school/#course",
  name: "Fly Fishing Guide School — Bryson City, NC",
  description: "The Fly Fishing Guide School in Bryson City, NC is the only professional fly fishing guide training program of its kind in the eastern United States — operated since 1987. Taught by 4 FFI Master Certified Casting Instructors with 450+ combined years on the water, the 4-day curriculum covers casting mechanics, drift boat rowing, water reading, entomology, and guide business fundamentals. No comparable program exists closer — this is where the best instruction in the East lives.",
  url: "https://flyfishingguideschool.com/bryson-city-fly-fishing-guide-school/",
  educationalLevel: "Beginner to Advanced",
  coursePrerequisites: "If you can get a fly rod in the air — even imperfectly — you have enough to start. Intermediate fly fishing experience is helpful but not required.",
  teaches: [
    "Fly casting mechanics and loop control to FFI Master Instructor standards",
    "Drift boat rowing on moving water",
    "River reading and trout holding water identification",
    "Aquatic entomology and match-the-hatch presentation",
    "Dry fly, nymph, wet fly, and streamer technique",
    "Switch rod and Spey casting fundamentals",
    "NC guide licensing and regulatory requirements",
    "Guide business fundamentals — pricing, client management, and job placement",
  ],
  image: "https://flyfishingguideschool.com/images/smokies-river-fall.webp",
  provider: { "@id": "https://flyfishingguideschool.com/#business" },
  inLanguage: "en",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "onsite",
    instructor: { "@type": "Person", "@id": "https://macbrownflyfish.com/#mac-brown", name: "Mac Brown" },
    performer: { "@type": "Person", "@id": "https://macbrownflyfish.com/#mac-brown", name: "Mac Brown", url: "https://macbrownflyfish.com/bio-mac-brown/" },
    location: {
      "@type": "Place",
      name: "Mac Brown Fly Fish — Bryson City, NC",
      address: {
        "@type": "PostalAddress",
        streetAddress: "779 West Deep Creek Rd",
        addressLocality: "Bryson City",
        addressRegion: "NC",
        postalCode: "28713",
        addressCountry: "US",
      },
    },
  },
  offers: {
    "@type": "Offer",
    price: "4850",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    validFrom: "2026-01-01",
    url: "https://flyfishingguideschool.com/reservation-form/",
  },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[    {"@type":"Question","name":"Are there fly fishing schools near me in Bryson City?","acceptedAnswer":{"@type":"Answer","text":"Yes, the Fly Fishing Guide School is located right in Bryson City, NC. As the only professional program of its kind in the eastern United States, it features FFI Master Certified Instructors and a multi-day curriculum."}},{"@type":"Question","name":"Where exactly is the Fly Fishing Guide School located?","acceptedAnswer":{"@type":"Answer","text":"The school operates in Bryson City, NC — center of Smoky Mountain trout country. Training takes place on the Tuckasegee River (which runs right through town) and wild streams inside Great Smoky Mountains National Park (10 minutes north)."}},{"@type":"Question","name":"What does the Fly Fishing Guide School teach?","acceptedAnswer":{"@type":"Answer","text":"The 4-day curriculum covers casting mechanics to FFI Master Instructor standards, drift boat rowing, water reading, entomology, match-the-hatch presentation, NC guide licensing, client communication, and the fundamentals of building a guide business."}},{"@type":"Question","name":"How much does the Fly Fishing Guide School cost?","acceptedAnswer":{"@type":"Answer","text":"Tuition is $4,850 for the full 4-day program. Bryson City has a wide range of lodging from riverside cabins to downtown inns — students arrange their own accommodations."}},{"@type":"Question","name":"How long has the school been operating in Bryson City?","acceptedAnswer":{"@type":"Answer","text":"The Fly Fishing Guide School has operated in Bryson City since 1987 — over 35 years on the same water with the same commitment to credentials-based instruction."}},{"@type":"Question","name":"What makes Bryson City the right location for guide training?","acceptedAnswer":{"@type":"Answer","text":"Bryson City sits within minutes of Great Smoky Mountains National Park, with the Tuckasegee River running right through town. There is no better concentration of varied, high-quality wild trout water in the eastern United States."}},{"@type":"Question","name":"Do I need prior fly fishing experience?","acceptedAnswer":{"@type":"Answer","text":"If you can get a fly rod in the air — even imperfectly — you have enough to start. The school is for growth-minded people who want to get seriously good, regardless of where they’re starting from. What matters isn’t where you are on the skill ladder, but that you’re committed to climbing it. Most students leave with skills that took self-taught anglers a decade to develop on their own."}},{"@type":"Question","name":"When do sessions run?","acceptedAnswer":{"@type":"Answer","text":"Sessions run March through November. Multiple sessions are scheduled each season. Contact the school for current availability — if you are already in Bryson City, the next session may be closer than you expect View the events calendar at macbrownflyfish.com/events-calendar for current session dates."}},{"@type":"Question","name":"Can locals enroll without planning a full travel trip?","acceptedAnswer":{"@type":"Answer","text":"Yes. Bryson City and Jackson County residents are welcome to enroll and commute daily. The school runs four consecutive days — no overnight travel required if you already live in the area."}}]};

export default function BrysonCityGuideSchool() {
  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchoolCourseSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative h-[55vh] min-h-[420px] overflow-hidden flex items-end">
        <img src={img("/images/smokies-river-fall.webp")} srcSet={`${img("/images/smokies-river-fall-1280.webp")} 1280w, ${img("/images/smokies-river-fall.webp")} 1920w`} sizes="100vw" alt="Tuckasegee River — Bryson City NC" className="absolute inset-0 w-full h-full object-cover object-[center_40%]" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 pb-14 w-full">
          <p className="text-white/60 text-[10px] font-medium uppercase tracking-[0.3em] mb-3 flex items-center gap-1"><MapPin size={10} /> Bryson City, NC — The School&apos;s Home Water</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-4">This is where the school lives.<br />You&apos;re already here.</h1>
          <p className="text-white/80 text-lg font-serif italic">Bryson City, NC — the fly fishing capital of the Southeast since 1987.</p>
        </div>
      </section>
      {/* AEO */}
      <section className="py-12 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted-foreground text-lg leading-relaxed">The Fly Fishing Guide School has operated in Bryson City, NC since 1987 — the only professional guide training program of its kind in the eastern United States. A four-day immersion in everything that separates a casual angler from a capable one — how to cast properly, how to read a river, how to understand where fish hold and why, how to identify what they&apos;re feeding on and choose the right fly, and how to row a drift boat through technical water. Led by 4 FFI Master Certified Casting Instructors and 5 certified whitewater rowing instructors with 450+ combined years on the water. Two kinds of people come here: those who want to fish at a level they&apos;ve never fished before — no guiding career required — and those ready to turn that passion into a licensed guiding career in the Southeast. Both leave changed. Tuition is <TuitionPrice />. Sessions run March through November.</p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4 italic">The school is here because the water is here — and there is no better classroom for fly fishing in the East.</p>
        </div>
      </section>
      <div className="bg-muted/30 border-b border-border py-5 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">The only fly fishing guide school in the eastern United States — Bryson City, NC, since 1987.</p>
          <Link href="/reservation-form/" className="inline-flex items-center gap-2 bg-primary text-white text-xs font-semibold uppercase tracking-[0.15em] px-7 py-3 hover:bg-primary/90 transition-colors flex-shrink-0 whitespace-nowrap">
            Reserve Your Seat <ArrowRight size={14} />
          </Link>
        </div>
      </div>
      {/* TWO PATHS */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Two Paths. One School.</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Which brings you here?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">Whether you simply want to fish at a level you never thought possible — or you&apos;re ready to make guiding your career — the week is built for you.</p>
        </div>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-0">
          <Link href="/smoky-mountain-fly-fishing-school/" className="group relative overflow-hidden aspect-video flex items-end">
            <img src={img("/images/client-woman-brown-trout.webp")} srcSet={`${img("/images/mobile/client-woman-brown-trout.webp")} 800w, ${img("/images/client-woman-brown-trout-1280.webp")} 1280w, ${img("/images/client-woman-brown-trout.webp")} 1920w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Angler holding a brown trout — skills development for recreational anglers" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 p-8">
              <p className="text-white/60 text-[10px] font-medium uppercase tracking-[0.3em] mb-2">Skills Development</p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">Fish at a Whole New Level</h3>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-white/80 uppercase tracking-[0.15em] group-hover:gap-4 transition-all">Explore <ArrowRight size={12} /></span>
            </div>
          </Link>
          <Link href="/fly-fishing-guide-school/" className="group relative overflow-hidden aspect-video flex items-end">
            <img src={img("/images/guide-school-casting.webp")} alt="Guide school casting — career development for aspiring fly fishing guides" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 p-8">
              <p className="text-white/60 text-[10px] font-medium uppercase tracking-[0.3em] mb-2">Career Development</p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">Launch Your Guide Career</h3>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-white/80 uppercase tracking-[0.15em] group-hover:gap-4 transition-all">Explore <ArrowRight size={12} /></span>
            </div>
          </Link>
        </div>
      </section>
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">What the school shifts</p>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">From casual to capable.</h2>
          <div className="space-y-3">
            {[
              { from: "Hiking the trail", to: "Reading the trout stream that’s been running alongside it the whole time — and finally understanding what it’s been saying" },
              { from: "Catching trout at Dupont or Bent Creek", to: "Understanding exactly why that fish was in that spot — and knowing you’ll never walk past water the same way again" },
              { from: "Watching guides work", to: "Becoming the guide others stop on the bank to watch" },
              { from: "Buying flies at a shop", to: "Walking up to any stretch of water already knowing — before you even rig up — exactly what fly, what drift, and why" },
              { from: "A good weekend on the water", to: "A career, a life, and a livelihood built entirely around the thing you love most" },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-2 gap-4 border border-border rounded p-4">
                <div className="text-muted-foreground text-sm">{item.from}</div>
                <div className="text-foreground font-medium text-sm flex items-center gap-2"><ArrowRight size={12} className="text-primary flex-shrink-0" />{item.to}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6">
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 border-l-4 border-primary pl-5">The Fly Fishing Guide School is located in Bryson City, NC — the heart of Smoky Mountain trout country. Founded in 1987, it is the only professional fly fishing guide training program in the eastern United States, taught by four FFI Master Certified Casting Instructors on the Tuckasegee River and the wild streams of Great Smoky Mountains National Park. Tuition is <TuitionPrice /> and sessions run March through November.</p>
          <p className="text-sm text-muted-foreground mt-5"><a href="/blog/bryson-city-trout-capital-fly-fishing/" className="text-primary hover:underline font-medium">Why Bryson City? Read what makes the Trout Capital of the East the right place to train →</a></p>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Home of the guide school</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Bryson City isn&apos;t just near the water. It&apos;s on it.</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-5">People drive from Atlanta, Charlotte, and Nashville to train here. The Tuckasegee River runs through town. The streams of Great Smoky Mountains National Park are 10 minutes north. This is not a school that hauls students to distant water — the water surrounds the school.</p>
        <p className="text-muted-foreground text-lg leading-relaxed">The Fly Fishing Guide School has operated in Bryson City since 1987. If you&apos;re visiting the area, staying in town, or live within driving distance, there&apos;s no reason to wait for another trip to get serious about your fly fishing education.</p>
      </section>

      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Why Bryson City</p>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Five reasons Bryson City is the right place to learn.</h2>
          <ul className="space-y-4">
            {reasons.map((r, i) => (
              <li key={i} className="flex gap-3 items-start">
                <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">What&apos;s available</p>
        <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Choose your path at fly fishing schools near me.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((p) => {
            const isExternal = p.href.startsWith("http");
            const content = (
              <div className="border border-border rounded-lg p-6 hover:border-primary/40 transition-colors h-full flex flex-col gap-3">
                <h3 className="font-serif text-xl font-bold text-foreground">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary uppercase tracking-[0.12em]">Learn More <ArrowRight size={11} /></span>
              </div>
            );
            return isExternal
              ? <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer" className="block">{content}</a>
              : <Link key={p.title} href={p.href} className="block">{content}</Link>;
          })}
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Common questions</p>
        <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Frequently asked questions</h2>
        <div className="divide-y divide-border border-t border-border">
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">Are there fly fishing schools near me in Bryson City?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Yes, the Fly Fishing Guide School is located right in Bryson City, NC. As the only professional program of its kind in the eastern United States, it features FFI Master Certified Instructors and a multi-day curriculum.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">Where exactly is the Fly Fishing Guide School located?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">The school operates in Bryson City, NC — center of Smoky Mountain trout country. Training takes place on the Tuckasegee River (which runs right through town) and wild streams inside Great Smoky Mountains National Park (10 minutes north).</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">What does the Fly Fishing Guide School teach?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">The school teaches how to cast a fly rod properly, how to row a drift boat, how to read a river and spot where fish are holding, and how to choose the right fly based on what fish are eating. You&apos;ll also learn how fish behave through the seasons and how aquatic insects drive feeding patterns. For those pursuing a guiding career, the curriculum covers NC guide licensing and the fundamentals of running a guide operation. Everything is learned on real rivers — the Tuckasegee River and the wild streams of Great Smoky Mountains National Park.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">How much does the Fly Fishing Guide School cost?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Tuition is <TuitionPrice /> for the full 4-day program. Bryson City has a wide range of lodging from riverside cabins to downtown inns — students arrange their own accommodations.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">How long has the school been operating in Bryson City?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">The Fly Fishing Guide School has operated in Bryson City since 1987 — over 35 years on the same water with the same commitment to credentials-based instruction.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">What makes Bryson City the right location for guide training?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Bryson City sits within minutes of Great Smoky Mountains National Park, with the Tuckasegee River running right through town. There is no better concentration of varied, high-quality wild trout water in the eastern United States.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">Do I need prior fly fishing experience?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">If you can get a fly rod in the air — even imperfectly — you have enough to start. The school is for growth-minded people who want to get seriously good, regardless of where they’re starting from. What matters isn’t where you are on the skill ladder, but that you’re committed to climbing it. Most students leave with skills that took self-taught anglers a decade to develop on their own.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">When do sessions run?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Sessions run March through November. Multiple sessions are scheduled each season. Contact the school for current availability — if you are already in Bryson City, the next session may be closer than you expect. View the <a href="https://macbrownflyfish.com/events-calendar" className="text-primary underline underline-offset-2 hover:text-primary/80">events calendar</a> for current session dates.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">Can locals enroll without planning a full travel trip?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Yes. Bryson City and Jackson County residents are welcome to enroll and commute daily. The school runs four consecutive days — no overnight travel required if you already live in the area.</p>
      </details>
        </div>
      </section>
      <section className="py-20 bg-primary text-white text-center px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Schools fill months in advance.</h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">You&apos;re already in Bryson City. The next step is securing your seat.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/reservation-form/" className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">Reserve Your Spot <ArrowRight size={14} /></Link>
          <Link href="/fly-fishing-guide-school/" className="inline-flex items-center gap-2 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors">View the Curriculum</Link>
        </div>
        <p className="mt-6">
          <Link href="/guide-school-locations/" className="text-white/60 hover:text-white transition-colors text-xs font-medium uppercase tracking-[0.15em]">← View all locations</Link>
        </p>
      </section>
    </div>
  );
}
