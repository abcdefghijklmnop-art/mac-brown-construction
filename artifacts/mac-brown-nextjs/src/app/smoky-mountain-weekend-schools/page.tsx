import Link from "next/link";
import { ArrowRight, Check, MapPin, Calendar } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { courseSchema, faqPageSchema } from "@/lib/schema";
import FaqSection from "@/components/faq-section";
import { img } from "@/lib/asset";
import { PriceTag } from "@/components/price-tag";

export const metadata = {
  title: { absolute: "Smoky Mountain Weekend Fly Fishing Schools — Bryson City NC" },
  description: "Immersive weekend fly fishing schools on the rivers of the Great Smoky Mountains. All skill levels welcome. Book your spot today.",
  alternates: { canonical: "https://macbrownflyfish.com/smoky-mountain-weekend-schools/" },
  openGraph: {
    title: "Smoky Mountain Weekend Fly Fishing Schools — Mac Brown Fly Fish",
    description: "Weekend fly fishing schools in the Great Smoky Mountains since 1987. Dry fly, wet fly, nymph, and streamer clinics. Bryson City, NC.",
    url: "https://macbrownflyfish.com/smoky-mountain-weekend-schools/",
    images: [{ url: "https://macbrownflyfish.com/images/smoky-mountains.webp" }],
  },
  twitter: { card: "summary_large_image" },
};

const coreComponents = [
  { title: "Line Control", body: "Casting and mending with intention and precision. Everything else in fly fishing depends on this." },
  { title: "Drift", body: "Understanding what the fish require and delivering it consistently — the difference between a refusal and a take." },
  { title: "Hookset", body: "The moment everything either comes together or falls apart. Timing, angle, and feel — built into muscle memory." },
  { title: "Playing Fish", body: "Keeping the fish connected from strike to net. Pressure management, rod position, and reading the fish." },
  { title: "Landing Fish", body: "Finishing the job cleanly and confidently — for the fish and the photograph." },
];

const schools = [
  {
    title: "Comprehensive Dry Fly Clinic",
    tagline: "The pinnacle of the sport.",
    body: "A truly drag-free drift is rarer than most anglers realize and more achievable than they think. Learn the casts, line control, presentation angles, and reading skills that produce consistent drag-free drifts — and make rising fish a target rather than a mystery.",
    href: "/dry-fly-clinic",
    image: "/images/fall-pool-reflection.webp",
    alt: "Fall pool on the Tuckasegee River — Comprehensive Dry Fly Clinic, Mac Brown Fly Fish",
  },
  {
    title: "Comprehensive Wet Fly Clinic",
    tagline: "The oldest and most productive technique in fly fishing.",
    body: "Wet flies fish throughout the water column at distance, covering more water and more fish than almost any other method. Learn the presentations, swings, and tactics that make wet fly fishing the quiet secret of the most consistently successful anglers on the stream.",
    href: "/wet-fly-clinic",
    image: "/images/fall-river-fishing.webp",
    alt: "Fall fly fishing in the Great Smoky Mountains — Comprehensive Wet Fly Clinic, Mac Brown Fly Fish",
  },
  {
    title: "Comprehensive Nymph Fishing Clinic",
    tagline: "Where the majority of trout are caught on a fly rod.",
    body: "Most anglers are leaving fish on the table with poor rigs and inefficient technique. Learn the strategies, rigging systems, indicator and tight-line methods, and water-reading skills that turn nymphing from a guessing game into a precision discipline.",
    href: "/nymph-fishing-clinic",
    image: "/images/rainbow-trout.webp",
    alt: "Rainbow trout in the net — Comprehensive Nymph Fishing Clinic, Mac Brown Fly Fish",
  },
  {
    title: "Comprehensive Streamer Clinic",
    tagline: "Streamers move the biggest fish in the river.",
    body: "They also demand a specific set of skills that most anglers never fully develop. Learn the retrieves, presentations, angles, and water-reading skills that turn streamer fishing from blind searching into a deliberate, confident pursuit of the largest trout available.",
    href: "/streamer-clinic",
    image: "/images/freestone-brown-trout.webp",
    alt: "Large brown trout caught on a streamer — Comprehensive Streamer Clinic, Mac Brown Fly Fish",
  },
];

const details = [
  "All schools based in Bryson City, NC in the heart of the Great Smoky Mountains",
  "Friday afternoon through Sunday afternoon — timed to accommodate your travel",
  "All-inclusive except North Carolina fishing license",
  "Limited enrollment — early registration strongly recommended",
  "Custom group clinics available — contact us to discuss your goals",
];

const smokyFaqs = [
  {
    q: "What are the Smoky Mountain Weekend Fly Fishing Schools?",
    a: "The Smoky Mountain Weekend Fly Fishing Schools are two-day immersive clinics on the rivers of the Great Smoky Mountains in Bryson City, North Carolina. Each clinic focuses on one complete fishing technique — dry fly, wet fly, nymph, or streamer — with both days spent on the water under the instruction of FFI Certified Instructors. All skill levels are welcome.",
  },
  {
    q: "How much do the Smoky Mountain Weekend Schools cost?",
    a: "Each weekend clinic is $1,550 per person for both days of on-water instruction. All gear — rods, reels, flies, leaders, and waders — is provided.",
  },
  {
    q: "Which clinic should I start with?",
    a: "For most anglers, the Dry Fly Clinic or Wet Fly Clinic is the strongest starting point. Both are accessible to beginners while delivering real technical depth for more experienced anglers. The Nymph Fishing Clinic is the highest-impact school for day-in, day-out fish counts. The Streamer Clinic is most valuable for anglers looking for big trout. Attending all four over a season builds the most complete skill set.",
  },
  {
    q: "What rivers do the weekend schools fish?",
    a: "The clinics fish the wild trout rivers and streams of the Great Smoky Mountains — including the Tuckasegee River, the Nantahala River, and the mountain streams of Great Smoky Mountains National Park. These rivers provide ideal conditions for all four clinic techniques across multiple hatch cycles and holding water types.",
  },
  {
    q: "What is the cancellation and payment policy?",
    a: "CANCELLATION: Weather and emergencies — we will always work with you. Dates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance at the time of reservation. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you.\n\nPAYMENT: Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee. To avoid fees entirely, we accept Zelle, Venmo, and personal check at no additional cost — just use the contact form and let us know your preferred method.",
  },
];

export default function SmokyMountainWeekendSchools() {
  return (
    <div className="w-full">
      <SchemaScript schema={courseSchema({
        price: "1550",
        name: "Smoky Mountain Weekend Fly Fishing Schools — Bryson City, NC",
        description: "Weekend fly fishing schools in Bryson City, North Carolina, taught by Mac Brown — the only FFI Master Casting Instructor in North Carolina and the author of Casting Angles. Weekend school formats include dry fly, nymph, wet fly, and streamer clinics, each covering technique, fly selection, reading water, and presentation skills for a specific fishing style on the Tuckasegee River. Mac has been running these schools since 1987 with small group sizes for maximum personal attention. All skill levels are welcome.",
        url: "/smoky-mountain-weekend-schools",
        image: "https://macbrownflyfish.com/images/smoky-mountains.webp",
        educationalLevel: "AllLevels",
        coursePrerequisites: "Basic fly casting ability recommended. Weekend schools are designed for anglers who can make a basic overhead cast and want to develop technique-specific fishing skills.",
        teaches: [
          "Technique-specific fly selection and rigging",
          "Reading water for each fishing method",
          "Drag-free drift and presentation fundamentals",
          "Approach, positioning, and wading strategy",
          "Fish behavior and feeding pattern recognition",
          "Casting skills specific to the technique covered each weekend",
        ],
      })} />
      <SchemaScript schema={faqPageSchema(smokyFaqs)} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[500px] sm:min-h-[380px] overflow-hidden">
        <img
          src={img("/images/smoky-mountains.webp")}
          srcSet={`${img("/images/mobile/smoky-mountains.webp")} 800w, ${img("/images/smoky-mountains.webp")} 1280w`}
          sizes="100vw"
          alt="The Great Smoky Mountains — Weekend Fly Fishing Schools, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16 sm:pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            Since 1987 · Bryson City, NC · Great Smoky Mountains
          </p>
          <h1 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight max-w-3xl">
            Smoky Mountain Weekend Fly Fishing Schools
          </h1>
          <p className="font-serif italic text-white/70 text-lg md:text-xl mt-5 max-w-2xl">
            Comprehensive Clinics · All Skill Levels Welcome · Limited Enrollment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-10">
            <a
              href="#choose"
              className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Choose Your School <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Mac Brown Fly Fish offers weekend fly fishing schools in Bryson City, North Carolina — <PriceTag priceKey="weekendFlyFishingSchool" as="span" />, covering dry fly, wet fly, nymph, and streamer fishing over two days on the wild streams of the Great Smoky Mountains. Small enrollment, FFI Certified Instructors, all gear provided. The fastest way to permanently change the way you fish.
          </p>
        </div>
      </section>

      {/* DETAILS STRIP */}
      <div className="bg-primary text-primary-foreground py-5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
          <div className="flex items-center gap-3">
            <Calendar size={16} className="shrink-0 opacity-70" />
            <span className="text-sm font-semibold tracking-wide">Friday–Sunday Format</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <div className="flex items-center gap-3">
            <MapPin size={16} className="shrink-0 opacity-70" />
            <span className="text-sm font-semibold tracking-wide">Bryson City, NC</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold tracking-wide">All Skill Levels · Limited Enrollment</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <PriceTag priceKey="weekendFlyFishingSchool" as="span" className="text-sm font-bold tracking-wide" />
        </div>
      </div>

      {/* INTRO */}
      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Fly fishing is one of the most rewarding pursuits on earth. It is also one of the most misunderstood — and that gap between where most anglers are and where they want to be is exactly what these schools exist to close.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-6">
            Since 1987, Mac Brown has been teaching weekend fly fishing schools in Bryson City, North Carolina — refining the curriculum across thousands of days on the water until every concept is delivered with the clarity, depth, and enthusiasm that produces real, lasting improvement. Not entertainment. Not hashtags. Not a weekend on stocked water that makes everyone feel like a hero for two days and leaves them no better than they arrived.
          </p>
          <p className="text-foreground font-semibold text-lg mt-6">Genuine skill. Built properly. From the ground up.</p>
          <blockquote className="mt-10 border-l-2 border-primary pl-6 text-left max-w-xl mx-auto">
            <p className="font-serif text-lg italic text-foreground">
              "Teaching fly fishing is like creating a fine wine — it gets refined over time. After nearly four decades of doing this, I can get you further in a weekend than most anglers get in a decade on their own."
            </p>
            <cite className="text-xs text-muted-foreground mt-3 block not-italic tracking-widest uppercase">— Mac Brown, FFI Master Casting Instructor</cite>
          </blockquote>
        </div>
      </section>

      {/* FIVE CORE COMPONENTS */}
      <section className="py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-4 text-center">The Framework</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Five Core Components of Every School
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Every weekend school is built around the five fundamentals that define fly fishing success — regardless of technique, species, or water type. Woven throughout every school are the supporting topics that make these five components work in the real world: reading water, entomology, rigging, tactics, and the history of the sport.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {coreComponents.map((item, i) => (
              <div key={i} className="bg-white border border-border p-7">
                <div className="text-3xl font-serif font-bold text-primary/20 mb-3 leading-none">{String(i + 1).padStart(2, "0")}</div>
                <div className="w-8 h-0.5 bg-primary mb-4" />
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-center mt-10 text-sm">
            Every session puts a heavy emphasis on fly casting and line control — because everything in fly fishing flows from those two foundations. Bring a notebook. There will be things worth writing down.
          </p>
        </div>
      </section>

      {/* HOW THE SCHOOLS WORK */}
      <section className="py-24 border-y border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-4 text-center">How It Works</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
            Structure &amp; Format
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Schools begin Friday afternoon — timed to accommodate your travel — and conclude Sunday afternoon. They are all-inclusive with the exception of your North Carolina fishing license. Enrollment is intentionally limited so every participant receives the individual attention that actually produces improvement.
            </p>
            <p>
              The clinics are organized as a progressive series — building from foundational techniques toward more advanced skill sets — because the topics are vast and each one deserves to be taught properly rather than rushed. Mac also builds custom clinics for groups with specific goals. If your club, shop, or group has a particular focus in mind, reach out and we will build the weekend around it.
            </p>
          </div>
        </div>
      </section>

      {/* PHOTO DIVIDER */}
      <div className="grid grid-cols-2 gap-0">
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/guide-fish-1.webp")} alt="Mac Brown teaching fly fishing in the Great Smoky Mountains" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/casting-class-1.webp")} alt="Fly fishing casting instruction on a mountain river" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      {/* CHOOSE YOUR SCHOOL */}
      <section id="choose" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Choose Your School</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Four Comprehensive Weekend Clinics
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Each clinic below is a comprehensive, immersive weekend built around one of the four major techniques in fly fishing. Click any school to see the full curriculum, dates, and enrollment details.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schools.map((school, i) => (
              <Link key={i} href={school.href} className="group block border border-border bg-white hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={img(school.image)}
                    alt={school.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <div className="w-8 h-0.5 bg-primary mb-5" />
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{school.title}</h3>
                  <p className="text-primary text-sm font-semibold mb-3 italic">{school.tagline}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{school.body}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary group-hover:gap-3 transition-all">
                    Full Curriculum &amp; Dates <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THESE SCHOOLS */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-4 text-center">Why These Schools</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
            Education, not entertainment.
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              The fly fishing industry is full of weekend experiences built around entertainment rather than education. Stocked water, oversized fish, and the comfortable illusion of competence. Those weekends are easy to find and easy to forget.
            </p>
            <p>
              These schools are different. The goal is not to make you feel good for two days. The goal is to make you genuinely better — permanently — so that every river you ever stand in from this point forward is a richer, more rewarding experience than the one before it.
            </p>
            <p>
              Mac Brown has spent nearly four decades teaching this sport at the highest level — coaching World Champions, training certified instructors, and developing anglers who come back year after year because the learning never stops. That same depth of knowledge and passion for teaching is what every participant in these schools receives.
            </p>
          </div>
          <blockquote className="mt-8 border-l-2 border-primary pl-6">
            <p className="font-serif text-lg italic text-foreground">
              "I am passionate about sharing everything I know with those who truly want it. It is a team effort — I facilitate, you practice, and the river provides the dividends."
            </p>
            <cite className="text-xs text-muted-foreground mt-3 block not-italic tracking-widest uppercase">— Mac Brown</cite>
          </blockquote>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">The Details</p>
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-10">Everything you need to know</h2>
          <ul className="space-y-4">
            {details.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-muted-foreground leading-relaxed">
                <Check size={16} className="text-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection items={smokyFaqs} />

      {/* CTA */}
      <section className="py-28 bg-primary text-primary-foreground text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to choose your school?
          </h2>
          <p className="text-primary-foreground/75 mb-10 leading-relaxed text-lg">
            Enrollment is limited. The angler who registers early is the one who secures their spot. Choose your clinic below or contact us with questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#choose"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Choose a School <ArrowRight size={14} />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
