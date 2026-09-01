import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown, Check, Clock } from "lucide-react";
import { img } from "@/lib/utils";
import { TuitionPrice } from "@/components/tuition-price";

export const metadata: Metadata = {
  title: { absolute: "Fly Fishing Guide School Near Birmingham AL" },
  description:
    "3.5 hours from Birmingham. Alabama anglers train at the Southeast's top fly fishing guide school in Bryson City, NC. FFI Master Instructors since 1987.",
  alternates: { canonical: "https://flyfishingguideschool.com/birmingham-fly-fishing-guide-school/" },
  openGraph: {
    title: "Guide School Near Birmingham AL | Fly Fishing Guide School",
    description: "3.5 hours from Birmingham. Alabama anglers train at the Southeast's most credentialed fly fishing guide school in Bryson City, NC. FFI Master Certified Instructors since 1987.",
    url: "https://flyfishingguideschool.com/birmingham-fly-fishing-guide-school/",
    images: ["https://flyfishingguideschool.com/images/smoky-mountains-elk.webp"],
  },
  twitter: { card: "summary_large_image" },
};

const worthTheDrive = [
  "The Tuckasegee River and Smoky Mountain park streams are among the top wild trout fisheries in the eastern United States — no equivalent exists closer to Birmingham",
  "FFI Master Casting Instructor certification is rare — fewer than a few hundred instructors hold it worldwide. This is not something you find at a local shop",
  "The school's written curriculum, student handouts, and lesson plans are unique — developed over 40 years of training competitive and professional anglers",
  "Alabama anglers who want to guide in the Southeast need to understand the mountain river system — there's no better way to learn it than four days on the water here",
  "Students who come from farther away often bring the most focus — the drive means you've already decided. That's a great way to start four days of serious training",
];

const tripTips = [
  { label: "Drive time", value: "~3.5 hours via I-20 E then US-431 N or I-59 N to US-11" },
  { label: "Best approach", value: "Plan to arrive Sunday evening — school typically begins Monday" },
  { label: "Lodging", value: "Book riverside cabins or downtown Bryson City inns well in advance" },
  { label: "What to bring", value: "The school provides gear details at enrollment — Alabama licenses not required for NC water" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://flyfishingguideschool.com/birmingham-fly-fishing-guide-school/#course",
  name: "Fly Fishing Guide School — Near Birmingham, AL",
  description: "Professional fly fishing guide training 3.5 hours from Birmingham in Bryson City, NC — the only program of its kind in the eastern United States. Taught by 4 FFI Master Certified Casting Instructors with 450+ combined years on the water, the 4-day curriculum covers casting mechanics, drift boat rowing, water reading, entomology, and guide business fundamentals. Open to serious anglers and career changers — all skill levels welcome.",
  url: "https://flyfishingguideschool.com/birmingham-fly-fishing-guide-school/",
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
  provider: { "@id": "https://flyfishingguideschool.com/#business" },
  inLanguage: "en",
  image: "https://flyfishingguideschool.com/images/smoky-mountains-elk.webp",
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

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[    {"@type":"Question","name":"Are there fly fishing schools near me in Birmingham?","acceptedAnswer":{"@type":"Answer","text":"Yes, the Fly Fishing Guide School is 3.5 hours from Birmingham in Bryson City, NC. It is the only professional program in the eastern United States with FFI Master Certified Instructors, offering multi-day immersion for serious anglers."}},{"@type":"Question","name":"How far is Birmingham from the Fly Fishing Guide School?","acceptedAnswer":{"@type":"Answer","text":"Bryson City, NC is approximately 3.5 hours from Birmingham via I-20 East and US-431 North through Anniston and Gadsden. Plan to arrive Sunday evening for a Monday morning start."}},{"@type":"Question","name":"What does the Fly Fishing Guide School teach?","acceptedAnswer":{"@type":"Answer","text":"The 4-day curriculum covers casting mechanics to FFI Master Instructor standards, drift boat rowing, water reading, entomology, seasonal presentation, NC guide licensing, client communication, and the fundamentals of building a guide business."}},{"@type":"Question","name":"How much does the school cost?","acceptedAnswer":{"@type":"Answer","text":"Tuition is $4,850 for the 4-day program. Lodging in Bryson City is separate — options include cabins, inns, and hotels to fit various budgets."}},{"@type":"Question","name":"Does Alabama have comparable fly fishing training available locally?","acceptedAnswer":{"@type":"Answer","text":"No program in Alabama offers this level of instruction. The school's FFI Master Certified Instructors and 40-year curriculum are unique in the eastern United States — Birmingham students make the drive specifically because no equivalent exists closer to home."}},{"@type":"Question","name":"What rivers are used for training?","acceptedAnswer":{"@type":"Answer","text":"Training takes place on the Tuckasegee River and wild streams inside Great Smoky Mountains National Park — cold, clear mountain fisheries representing some of the best wild trout water in the East."}},{"@type":"Question","name":"When do sessions run?","acceptedAnswer":{"@type":"Answer","text":"Sessions run March through November with multiple sessions per season. Birmingham students typically attend spring or fall sessions when mountain water is especially appealing compared to Alabama temperatures View the events calendar at macbrownflyfish.com/events-calendar for current session dates."}},{"@type":"Question","name":"Do I need a North Carolina fishing license?","acceptedAnswer":{"@type":"Answer","text":"Yes — a valid North Carolina fishing license is required for all training on NC waters. The school provides guidance on obtaining the appropriate license before your session."}},{"@type":"Question","name":"Is the school appropriate for an experienced Alabama angler?","acceptedAnswer":{"@type":"Answer","text":"Yes. Many Birmingham students come with strong bass fishing or tailwater backgrounds. The Guide School adds casting precision, entomology knowledge, and guide-specific skills that are harder to self-teach — meeting students where they are."}}]};

export default function BirminghamGuideSchool() {
  return (
    <div className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative h-[55vh] min-h-[420px] overflow-hidden flex items-end">
        <img src={img("/images/smoky-mountains-elk.webp")} srcSet={`${img("/images/smoky-mountains-elk-1280.webp")} 1280w, ${img("/images/smoky-mountains-elk.webp")} 1920w`} sizes="100vw" alt="Smoky Mountains elk — fly fishing school near Birmingham AL" className="absolute inset-0 w-full h-full object-cover object-[center_40%]" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 pb-14 w-full">
          <p className="text-white/60 text-[10px] font-medium uppercase tracking-[0.3em] mb-3 flex items-center gap-1"><Clock size={10} /> 3.5 Hours from Birmingham · Bryson City, NC</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-4">Alabama anglers don&apos;t let<br />3.5 hours stand between<br />them and great water.</h1>
          <p className="text-white/80 text-lg font-serif italic">Fly Fishing Guide School — Bryson City, NC. Worth every mile since 1987.</p>
        </div>
      </section>
      {/* AEO */}
      <section className="py-12 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted-foreground text-lg leading-relaxed">The Fly Fishing Guide School is 3.5 hours east of Birmingham in Bryson City, NC — the only professional guide training program of its kind in the eastern United States. A four-day immersion in everything that separates a casual angler from a capable one — how to cast properly, how to read a river, how to understand where fish hold and why, how to identify what they&apos;re feeding on and choose the right fly, and how to row a drift boat through technical water. Led by 4 FFI Master Certified Casting Instructors and 5 certified whitewater rowing instructors with 450+ combined years on the water. Two kinds of people come here: those who want to fish at a level they&apos;ve never fished before — no guiding career required — and those ready to turn that passion into a licensed guiding career in the Southeast. Both leave changed. Tuition is <TuitionPrice />. Sessions run March through November.</p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4 italic">Three and a half hours east of Birmingham, the quality of the water and the quality of the instruction both change dramatically.</p>
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
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 border-l-4 border-primary pl-5">The Fly Fishing Guide School is a 4-day professional guide training program in Bryson City, NC — approximately 3.5 hours from Birmingham via I-20 East and US-431 North. Founded in 1987, it is the only program of its kind in the eastern United States, taught by four FFI Master Certified Casting Instructors on the Tuckasegee River and the wild streams of Great Smoky Mountains National Park. Tuition is <TuitionPrice />.</p>
          <p className="text-sm text-muted-foreground mt-5"><a href="/blog/bryson-city-trout-capital-fly-fishing/" className="text-primary hover:underline font-medium">Why Bryson City? Read what makes the Trout Capital of the East the right place to train →</a></p>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Birmingham to Bryson City</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Alabama has a serious fishing culture. What it doesn&apos;t have is wild mountain trout water at the scale of the Smokies.</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-5">Birmingham anglers understand water. The Cahaba, the Tallapoosa, the Little River — Alabama produces genuinely skilled fishermen. But the wild trout country of western North Carolina operates at a different scale: cold, clear, fast mountain streams running through the most visited national park in America, plus Smoky Mountain streams that hold wild brown and rainbow trout year-round.</p>
        <p className="text-muted-foreground text-lg leading-relaxed">The Fly Fishing Guide School in Bryson City has been training anglers and career changers on that water since 1987. Birmingham students make the 3.5-hour drive every session. They don&apos;t regret it.</p>
      </section>

      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Why it&apos;s worth the drive from Birmingham</p>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Five reasons Alabama anglers keep making this trip to fly fishing schools near me.</h2>
          <ul className="space-y-4">
            {worthTheDrive.map((r, i) => (
              <li key={i} className="flex gap-3 items-start">
                <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Planning the trip from Birmingham</p>
        <h2 className="font-serif text-3xl font-bold text-foreground mb-8">The logistics are straightforward. Here&apos;s how to set it up.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {tripTips.map((t) => (
            <div key={t.label} className="border border-border rounded-lg p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-1">{t.label}</p>
              <p className="text-foreground font-medium text-sm">{t.value}</p>
            </div>
          ))}
        </div>
        <Link href="/contact-information-best-fly-fishing-guide-school/" className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-[0.15em] hover:gap-4 transition-all">Questions? Contact us directly <ArrowRight size={14} /></Link>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Common questions</p>
        <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Frequently asked questions</h2>
        <div className="divide-y divide-border border-t border-border">
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">Are there fly fishing schools near me in Birmingham?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Yes, the Fly Fishing Guide School is 3.5 hours from Birmingham in Bryson City, NC. It is the only professional program in the eastern United States with FFI Master Certified Instructors, offering a multi-day immersion for serious anglers.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">How far is Birmingham from the Fly Fishing Guide School?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Bryson City, NC is approximately 3.5 hours from Birmingham via I-20 East and US-431 North through Anniston and Gadsden. Plan to arrive Sunday evening for a Monday morning start.</p>
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
          <span className="font-medium text-foreground pr-4">How much does the school cost?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Tuition is <TuitionPrice /> for the 4-day program. Lodging in Bryson City is separate — options include cabins, inns, and hotels to fit various budgets.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">Does Alabama have comparable fly fishing training available locally?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">No program in Alabama offers this level of instruction. The school's FFI Master Certified Instructors and 40-year curriculum are unique in the eastern United States — Birmingham students make the drive specifically because no equivalent exists closer to home.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">What rivers are used for training?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Training takes place on the Tuckasegee River and wild streams inside Great Smoky Mountains National Park — cold, clear mountain fisheries representing some of the best wild trout water in the East.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">When do sessions run?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Sessions run March through November with multiple sessions per season. Birmingham students typically attend spring or fall sessions when mountain water is especially appealing compared to Alabama temperatures. View the <a href="https://macbrownflyfish.com/events-calendar" className="text-primary underline underline-offset-2 hover:text-primary/80">events calendar</a> for current session dates.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">Do I need a North Carolina fishing license?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Yes — a valid North Carolina fishing license is required for all training on NC waters. The school provides guidance on obtaining the appropriate license before your session.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">Is the school appropriate for an experienced Alabama angler?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Yes. Many Birmingham students come with strong bass fishing or tailwater backgrounds. The Guide School adds casting precision, entomology knowledge, and guide-specific skills that are harder to self-teach — meeting students where they are.</p>
      </details>
        </div>
      </section>
      <section className="py-20 bg-primary text-white text-center px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">3.5 hours. Four days. The best guide training in the Southeast.</h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Birmingham students make this trip every year. The seat is yours — until it isn&apos;t. Reserve it now.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/reservation-form/" className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">Reserve Your Spot <ArrowRight size={14} /></Link>
          <Link href="/fly-fishing-guide-school/" className="inline-flex items-center gap-2 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors">View the Full Curriculum</Link>
        </div>
        <p className="mt-6">
          <Link href="/guide-school-locations/" className="text-white/60 hover:text-white transition-colors text-xs font-medium uppercase tracking-[0.15em]">&#8592; View all locations</Link>
        </p>
      </section>
    </div>
  );
}
