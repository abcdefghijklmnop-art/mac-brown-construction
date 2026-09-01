import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown, Check, Clock } from "lucide-react";
import { img } from "@/lib/utils";
import { TuitionPrice } from "@/components/tuition-price";

export const metadata: Metadata = {
  title: { absolute: "Fly Fishing Guide School Near Raleigh NC" },
  description:
    "4 hours from Raleigh. Systems-based guide training under FFI Master Certified Instructors in Bryson City, NC. The Southeast's top fly fishing school.",
  alternates: { canonical: "https://flyfishingguideschool.com/raleigh-fly-fishing-guide-school/" },
  openGraph: {
    title: "Guide School Near Raleigh NC | Fly Fishing Guide School",
    description: "4 hours from Raleigh and the Research Triangle. The Fly Fishing Guide School in Bryson City NC offers structured, systems-based training under FFI Master Instructors since 1987.",
    url: "https://flyfishingguideschool.com/raleigh-fly-fishing-guide-school/",
    images: ["https://flyfishingguideschool.com/images/drift-boat-sunset.webp"],
  },
  twitter: { card: "summary_large_image" },
};

const whyItClicks = [
  "Fly fishing is a system. Water, fish behavior, entomology, and presentation interact — structured learning outperforms years of intuition",
  "The school uses written materials, lesson plans, and syllabi — the same tools research professionals use to absorb complex disciplines efficiently",
  "Mac Brown's 'Strategies, Tactics, Mechanics' framework is a systems approach to reading water — it will feel immediately familiar to analytical thinkers",
  "There are knowable answers on the river. Experienced instructors compress decades of pattern recognition into four days",
  "The credential matters — FFI Master Casting Instructor is earned, not purchased, and it signals competence to every client you'll ever guide",
];

const logistics = [
  { label: "Drive time", value: "~4 hours via I-40 W through the mountains" },
  { label: "Scenic route option", value: "Blue Ridge Parkway — adds time but worth it on the way in" },
  { label: "Season", value: "Spring through fall — plan around late April through October for best conditions" },
  { label: "Lodging", value: "Bryson City has excellent cabins and mountain inns — book early for peak season" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://flyfishingguideschool.com/raleigh-fly-fishing-guide-school/#course",
  name: "Fly Fishing Guide School — Near Raleigh, NC",
  description: "Professional fly fishing guide training 4 hours from Raleigh in Bryson City, NC — the only program of its kind in the eastern United States. Taught by 4 FFI Master Certified Casting Instructors with 450+ combined years on the water, the 4-day curriculum covers casting mechanics, drift boat rowing, water reading, entomology, and guide business fundamentals. Open to serious anglers and career changers — all skill levels welcome.",
  url: "https://flyfishingguideschool.com/raleigh-fly-fishing-guide-school/",
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
  image: "https://flyfishingguideschool.com/images/drift-boat-sunset.webp",
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

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Are there fly fishing schools near me in Raleigh?","acceptedAnswer":{"@type":"Answer","text":"Yes, the Fly Fishing Guide School is 4 hours west of Raleigh in Bryson City, NC. We offer the most structured, systems-based professional guide training in the eastern U.S., featuring multi-day schools led by FFI Master Certified Instructors."}},{"@type":"Question","name":"How far is Raleigh from the Fly Fishing Guide School?","acceptedAnswer":{"@type":"Answer","text":"Bryson City, NC is approximately 4 hours west of Raleigh via I-40 through Asheville — one of the most scenic drives in North Carolina, through the Appalachian foothills, Black Mountains, and into the Smokies."}},{"@type":"Question","name":"What does the Fly Fishing Guide School teach?","acceptedAnswer":{"@type":"Answer","text":"The 4-day curriculum covers casting mechanics to FFI Master Instructor standards, drift boat rowing, water reading, entomology, presentation across all seasons, NC guide licensing, client communication, and the business fundamentals of guiding."}},{"@type":"Question","name":"How much does the school cost?","acceptedAnswer":{"@type":"Answer","text":"Tuition is $4,850 for the full 4-day program. Raleigh students typically stay in Bryson City for the week — riverside cabins, downtown inns, and budget-friendly hotels are all available."}},{"@type":"Question","name":"Is the Guide School structured enough for Research Triangle professionals?","acceptedAnswer":{"@type":"Answer","text":"Yes. The school operates on a written curriculum with daily lesson plans and progressive skill building. Mac Brown's Strategies, Tactics, Mechanics framework is a systems approach to reading water that engineers, researchers, and analytical professionals consistently thrive in."}},{"@type":"Question","name":"What rivers are used for training?","acceptedAnswer":{"@type":"Answer","text":"Training takes place on the Tuckasegee River delayed harvest section and wild streams inside Great Smoky Mountains National Park — among the most technically demanding and productive wild trout water in the eastern United States."}},{"@type":"Question","name":"When do sessions run?","acceptedAnswer":{"@type":"Answer","text":"Sessions run March through November with multiple sessions per season. Raleigh students most commonly plan around late April through June or September through October for ideal conditions View the events calendar at macbrownflyfish.com/events-calendar for current session dates."}},{"@type":"Question","name":"Can I drive to Bryson City in one day from Raleigh?","acceptedAnswer":{"@type":"Answer","text":"Yes — four hours is a manageable day trip drive. Most Raleigh students arrive Sunday afternoon, spend the week in Bryson City, and return home Saturday morning after the school concludes."}},{"@type":"Question","name":"What credentials do the instructors hold?","acceptedAnswer":{"@type":"Answer","text":"All instructors hold FFI Master Certified Casting Instructor credentials — the highest certification in fly casting instruction worldwide. This is the standard the school has maintained since 1987."}}]};

export default function RaleighGuideSchool() {
  return (
    <div className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative h-[55vh] min-h-[420px] overflow-hidden flex items-end">
        <img src={img("/images/drift-boat-sunset.webp")} srcSet={`${img("/images/drift-boat-sunset-1280.webp")} 1280w, ${img("/images/drift-boat-sunset.webp")} 1920w`} sizes="100vw" alt="Drift boat at sunset — fly fishing school near Raleigh Durham NC" className="absolute inset-0 w-full h-full object-cover object-center" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 pb-14 w-full">
          <p className="text-white/60 text-[10px] font-medium uppercase tracking-[0.3em] mb-3 flex items-center gap-1"><Clock size={10} /> 4 Hours from Raleigh · Bryson City, NC</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-4">The most complex system<br />you&apos;ll ever analyze<br />runs through a mountain.</h1>
          <p className="text-white/80 text-lg font-serif italic">Fly Fishing Guide School — Bryson City, NC. Structured learning on wild trout water since 1987.</p>
        </div>
      </section>
      {/* AEO */}
      <section className="py-12 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted-foreground text-lg leading-relaxed">The Fly Fishing Guide School is 4 hours west of Raleigh in Bryson City, NC — the only professional guide training program of its kind in the eastern United States. A four-day immersion in everything that separates a casual angler from a capable one — how to cast properly, how to read a river, how to understand where fish hold and why, how to identify what they&apos;re feeding on and choose the right fly, and how to row a drift boat through technical water. Led by 4 FFI Master Certified Casting Instructors and 5 certified whitewater rowing instructors with 450+ combined years on the water. Two kinds of people come here: those who want to fish at a level they&apos;ve never fished before — no guiding career required — and those ready to turn that passion into a licensed guiding career in the Southeast. Both leave changed. Tuition is <TuitionPrice />. Sessions run March through November.</p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4 italic">The I-40 corridor from Raleigh to the Smokies is one of the great drives in North Carolina — and at the end of it is the most structured fly fishing instruction in the East.</p>
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
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 border-l-4 border-primary pl-5">The Fly Fishing Guide School is a 4-day professional guide training program in Bryson City, NC — 4 hours west of Raleigh via I-40 through Asheville and into the Smoky Mountains. Founded in 1987, it is the only program of its kind in the eastern United States, taught by four FFI Master Certified Casting Instructors on the Tuckasegee River and the wild streams of Great Smoky Mountains National Park. Tuition is <TuitionPrice />.</p>
          <p className="text-sm text-muted-foreground mt-5"><a href="/blog/bryson-city-trout-capital-fly-fishing/" className="text-primary hover:underline font-medium">Why Bryson City? Read what makes the Trout Capital of the East the right place to train →</a></p>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Raleigh-Durham to the Smokies</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Research Triangle residents tend to learn fly fishing the wrong way — alone, slowly, and expensively.</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-5">The I-40 corridor from Raleigh through Asheville and into the Smokies is one of the great drives in North Carolina. Four hours from the Research Triangle, Bryson City sits in the center of the highest concentration of quality wild trout water on the East Coast. What most Raleigh anglers don&apos;t realize is that world-class instruction is available there — instruction built on the same kind of structured curriculum that analytical professionals tend to thrive in.</p>
        <p className="text-muted-foreground text-lg leading-relaxed">The Guide School doesn&apos;t operate on guesswork. It operates on 40 years of refined curriculum, written lesson plans, and a coaching approach that rewards the kind of systematic thinking that the Research Triangle is built on.</p>
      </section>

      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Why this approach works for analytical learners</p>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Fly fishing rewards systematic thinking. Here&apos;s why Raleigh students do well here.</h2>
          <ul className="space-y-4">
            {whyItClicks.map((r, i) => (
              <li key={i} className="flex gap-3 items-start">
                <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Getting there from the Triangle</p>
        <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Fly fishing schools near me: Getting there from the Triangle.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {logistics.map((l) => (
            <div key={l.label} className="border border-border rounded-lg p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-1">{l.label}</p>
              <p className="text-foreground font-medium text-sm">{l.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Common questions</p>
        <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Frequently asked questions</h2>
        <div className="divide-y divide-border border-t border-border">
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">Are there fly fishing schools near me in Raleigh?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Yes, the Fly Fishing Guide School is 4 hours west of Raleigh in Bryson City, NC. We offer the most structured, systems-based professional guide training in the eastern U.S., featuring multi-day schools led by FFI Master Certified Instructors on the Tuckasegee River and within the Great Smoky Mountains National Park.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">How far is Raleigh from the Fly Fishing Guide School?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Bryson City, NC is approximately 4 hours west of Raleigh via I-40 through Asheville — one of the most scenic drives in North Carolina, through the Appalachian foothills, Black Mountains, and into the Smokies.</p>
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
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Tuition is <TuitionPrice /> for the full 4-day program. Raleigh students typically stay in Bryson City for the week — riverside cabins, downtown inns, and budget-friendly hotels are all available.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">Is the Guide School structured enough for Research Triangle professionals?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Yes. The school operates on a written curriculum with daily lesson plans and progressive skill building. Mac Brown's Strategies, Tactics, Mechanics framework is a systems approach to reading water that engineers, researchers, and analytical professionals consistently thrive in.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">What rivers are used for training?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Training takes place on the Tuckasegee River delayed harvest section and wild streams inside Great Smoky Mountains National Park — among the most technically demanding and productive wild trout water in the eastern United States.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">When do sessions run?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Sessions run March through November with multiple sessions per season. Raleigh students most commonly plan around late April through June or September through October for ideal conditions. View the <a href="https://macbrownflyfish.com/events-calendar" className="text-primary underline underline-offset-2 hover:text-primary/80">events calendar</a> for current session dates.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">Can I drive to Bryson City in one day from Raleigh?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">Yes — four hours is a manageable day trip drive. Most Raleigh students arrive Sunday afternoon, spend the week in Bryson City, and return home Saturday morning after the school concludes.</p>
      </details>
      <details className="border-b border-border">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="font-medium text-foreground pr-4">What credentials do the instructors hold?</span>
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        </summary>
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">All instructors hold FFI Master Certified Casting Instructor credentials — the highest certification in fly casting instruction worldwide. This is the standard the school has maintained since 1987.</p>
      </details>
        </div>
      </section>
      <section className="py-20 bg-primary text-white text-center px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Four hours on I-40. Four days in the mountains. A completely different skill set.</h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Research Triangle students enroll every session. Plan ahead — schools fill months in advance.</p>
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
