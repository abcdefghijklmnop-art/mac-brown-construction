import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

import { SchemaScript } from "@/components/schema-script";
import { cityTripSchema } from "@/lib/schema";
import { PriceTag } from "@/components/price-tag";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Guided Fly Fishing Trips & Clinics Near Cashiers NC" },
  description: "Book a guided fly fishing trip near Cashiers, NC. Expert instruction and access to some of the best wild trout water in Western North Carolina.",
  alternates: { canonical: "https://macbrownflyfish.com/cashiers-nc-guided-trout-fishing/" },
  openGraph: {
    title: "Cashiers NC Guided Trout Fishing — Mac Brown Fly Fish",
    description: "World-class guided fly fishing near Cashiers NC. Float trips, wade trips, lake trips, and casting instruction since 1987. Bryson City, NC.",
    url: "https://macbrownflyfish.com/cashiers-nc-guided-trout-fishing/",
    images: [{ url: "https://macbrownflyfish.com/images/guide-trip-3.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cashiers NC Guided Trout Fishing — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/guide-trip-3.webp"],
  },
};

const waters = [
  {
    name: "Tuckasegee River — Delayed Harvest",
    distance: "~45 min from Cashiers",
    description:
      "The most popular guided water in Western NC — and the closest major tailwater to Cashiers. From October through May the Delayed Harvest section in Webster, NC is loaded with exceptional numbers of trout. Float trips cover miles of productive water from a drift boat. Wade trips get you into the river where the fish are holding. Either way this is a day on the water you will not forget.",
    highlight: "Best for: Float trips, wade trips, all skill levels, October through May",
  },
  {
    name: "Nantahala River",
    distance: "~1 hour from Cashiers",
    description:
      "The top tailwater in the state of North Carolina. Cold, clear, and productive every month of the year, the Nantahala holds exceptional wild brown and rainbow trout in one of the most beautiful river corridors in the eastern United States. A challenging and deeply rewarding fishery for anglers who want a genuine wild trout experience.",
    highlight: "Best for: Wild trout, technical fishing, year-round",
  },
  {
    name: "Local Cashiers Area Streams",
    distance: "Minutes from Cashiers",
    description:
      "The Cashiers Plateau at over 3,500 feet elevation is surrounded by its own network of quality mountain streams — the Horsepasture River, the Whitewater River, and several smaller creeks that hold wild trout in stunning natural settings. Some of the most beautiful water in the region is right outside your door.",
    highlight: "Best for: Local wild trout, convenience, pristine mountain scenery",
  },
  {
    name: "Great Smoky Mountains National Park Streams",
    distance: "~1 hour from Cashiers",
    description:
      "Deep Creek, Noland Creek, Forney Creek, the Oconaluftee, and dozens of other mountain streams flowing through the national park offer outstanding wild trout fishing in a protected wilderness setting. Native brook trout in the high-elevation streams. Wild rainbow and brown trout throughout. Pristine, uncrowded, and genuinely wild.",
    highlight: "Best for: Backcountry adventure, wild native trout, pristine water",
  },
  {
    name: "Smoky Mountain Lakes",
    distance: "~1 hour from Cashiers",
    description:
      "Fontana, Cheoah, Calderwood, and the other mountain lakes of the Smoky Mountains offer a completely different fly fishing experience — and some of the largest trout available anywhere in the region. Lake fishing is most productive from late fall through early spring. The fish run bigger, fight harder, and give you a story worth telling.",
    highlight: "Best for: Trophy-sized trout, stillwater fishing, fall through spring",
  },
];

const programs = [
  { title: "Guided Float Trips", desc: "Drift the Tuckasegee in a Clackacraft or NRS boat. Cover water, catch fish, learn the river.", link: "/guided-float-fly-fishing-trips" },
  { title: "Guided Wade Trips", desc: "Get in the water. Read the river. Learn to fish it with intention and precision.", link: "/guided-wade-fly-fishing-trips" },
  { title: "Guided Lake Trips", desc: "Trophy trout on the stillwater lakes of the Smoky Mountains. A different game entirely.", link: "/guided-lake-fly-fishing-trips" },
  { title: "Fly Casting Instruction", desc: "Private lessons for all skill levels. Guaranteed or free of charge.", link: "/fly-casting-instruction" },
  { title: "Fly Fishing Schools", desc: "Weekend immersion programs covering the full craft from foundation to advanced technique.", link: "/smoky-mountain-weekend-schools" },
  { title: "Online Casting Lessons", desc: "Live video instruction from anywhere. Get ready for your Cashiers trip before you arrive.", link: "/fly-casting-instruction" },
];

const whatToBring = [
  "Rain gear — mountain weather changes without warning",
  "Warm layers — mornings on the water can be cool year-round",
  "Polarized sunglasses — essential for spotting fish and reading water",
  "A hat with a brim — sun and glare protection",
  "Sunscreen and lip balm",
  "Clothing in earth tones — blend into your surroundings",
  "Valid NC fishing license if over 16 — ncwildlife.org or 1-888-248-6834",
];

const faqItems = [
  { q: "Who guides the fly fishing trips from Cashiers?", a: "Mac Brown is the only FFI Master Casting Instructor in North Carolina — the highest casting credential awarded by Fly Fishers International — and a certified casting examiner for FFI. He is the author of Casting Angles and has been guiding Jackson County's trout water since 1987. Every trip is instructional: Mac explains what he sees in the water and what he is doing about it — you leave understanding your fishing, not just having been guided around a river." },
  { q: "Is there fly fishing near me in Cashiers, NC?", a: "Yes, Cashiers is surrounded by exceptional fly fishing. Local streams like the Horsepasture and Whitewater Rivers are minutes away. For world-class guided trips, the Tuckasegee River Delayed Harvest section is just 35 minutes away in Webster, and the Nantahala River tailwater is within a one-hour drive, both offering incredible trout fishing opportunities." },
  { q: "How far is Cashiers from fly fishing in the Smoky Mountains?", a: "Bryson City, NC is approximately 45 minutes from Cashiers. The Tuckasegee River Delayed Harvest section in Webster is even closer — about 35 minutes via NC-107 North. For Cashiers residents and visitors, exceptional guided trout fishing is a short drive over the mountain." },
  { q: "What makes fly fishing near Cashiers different?", a: "Cashiers sits at the headwaters of the Tuckasegee River system. The upper Tuckasegee drains directly through Jackson County and into the Delayed Harvest section — the most productive guided trout water in Western NC. Cashiers anglers have direct access to both the lower Tuckasegee and the wild trout streams of Nantahala National Forest that surround the plateau." },
  { q: "What waters do guided fly fishing trips fish from Cashiers?", a: "Top options for Cashiers visitors: the Tuckasegee River Delayed Harvest section in Webster (35 minutes — exceptional trout numbers October through May), the Nantahala River tailwater (wild brown and rainbow trout year-round), and wild streams of Great Smoky Mountains National Park (native brook trout and wild rainbows in pristine backcountry water). Mac selects the water based on conditions, season, and your goals." },
  { q: "What is the best time of year for a fly fishing trip from Cashiers?", a: "Spring and fall are the strongest seasons. The Tuckasegee Delayed Harvest section runs October through May with exceptional trout numbers. The Nantahala River and wild Smoky Mountain streams fish well year-round. July and August fishing is best early morning — Cashiers sits at elevation and surrounding national forest keeps water temperatures cool longer than lower-elevation streams." },
  { q: "Is a fishing license required?", a: "Yes — a valid North Carolina Inland Fishing License (in-state or out-of-state) is required for all anglers 16 and older. There is no trout stamp in NC. For out-of-state visitors fishing the Tuckasegee River between October and May, the Mountain Heritage Trout Waters Day License is a cheaper optional alternative — not required, just a money-saving option. Purchase at ncwildlife.org or any local sporting goods store." },
  { q: "Are lunches included and what should I bring?", a: "Lunches are not included on guided trips. Bring snacks, water, and a lunch for full-day trips. Rain gear is essential — Cashiers is one of the rainiest spots in the eastern US. Polarized sunglasses and a brimmed hat are important for spotting fish. Clothing in earth tones. Wading shoes or boots if you have them — waders are provided. Payment in full at booking; Zelle, Venmo, and personal check accepted to avoid processing fees." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function CashiersNCGuidedTroutFishing() {
  return (
    <div className="w-full">
      <SchemaScript schema={cityTripSchema({ city: "Cashiers", state: "NC", description: "Guided fly fishing trips near Cashiers, North Carolina, led by a fly fishing guide since 1987. Mac Brown is the only FFI Master Casting Instructor in North Carolina and a certified casting examiner for Fly Fishers International. Cashiers sits in the heart of some of the finest wild trout country in the Southern Appalachians, with clear freestone streams, Great Smoky Mountains National Park waters, and the Tuckasegee River all within close reach. All rods, reels, flies, and terminal tackle are provided. All skill levels welcome — from absolute beginners to experienced anglers.", url: "/cashiers-nc-guided-trout-fishing", image: "https://macbrownflyfish.com/images/guide-trip-3.webp" })} />
      <SchemaScript schema={faqSchema} />
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/guide-trip-3.webp")}
          srcSet={`${img("/images/mobile/guide-trip-3.webp")} 1280w, ${img("/images/guide-trip-3.webp")} 1920w`}
          sizes="100vw"
          alt="Guided trout fishing near Cashiers NC — Mac Brown Fly Fish, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-10">
            Cashiers NC Guided<br />Trout Fishing
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/programs-overview" className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-white/90 transition-colors w-full sm:w-fit">
              View All Programs <ArrowRight size={14} />
            </Link>
            <Link href="/events-calendar" className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-white/10 transition-colors w-full sm:w-fit">
              See Upcoming Dates
            </Link>
            <Link href="/reserve" className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-white/10 transition-colors w-full sm:w-fit">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-12 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted-foreground text-lg leading-relaxed">Fly fishing near Cashiers, NC puts you within an hour of the finest guided trout fishing in the Southeast — the Tuckasegee River delayed harvest section and Nantahala River tailwater in Bryson City, NC. Mac Brown Fly Fish has been guiding Cashiers and Highlands-area visitors since 1987. The drive from Cashiers to Bryson City via US-64 West through Highlands takes approximately one hour and puts you on world-class trout water for a full day guided trip. Guided trips start at <PriceTag priceKey="guidedWadeOrFloat" part="half" as="span" />. All gear provided, all skill levels welcome.</p>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Bryson City, NC</p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">Mac Brown Fly Fish offers fly fishing schools, guided fly fishing trips, and casting instruction for visitors from Cashiers — approximately 45 minutes to the wild trout streams of the Great Smoky Mountains in Bryson City, North Carolina. The original outfitter in Western North Carolina since 1987. Float trips, wade trips, schools, and casting instruction available year-round. All gear provided, all skill levels welcome.</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            The Best Fly Fishing Day Trip from Cashiers, NC
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Cashiers is surrounded by some of the most spectacular mountain scenery and finest trout water in the Southeast — and most of it is within easy reach for a guided fly fishing day trip. The creeks, rivers, and lakes of Western North Carolina offer an extraordinary variety of fishing experiences, and Mac Brown Fly Fish has been unlocking that water for visiting anglers since 1987.
            </p>
            <p>
              As the original instructor and outfitter in Western North Carolina, Mac Brown Fly Fish offers more choices for trout fishing near Cashiers than any other operation in the Southeast. Whether you want to float a tailwater loaded with trout, wade a crystal-clear mountain stream in the national park, or fish the stillwater lakes of the Smoky Mountains for trophy-sized fish — a fly fishing guide who has worked this water since 1987 knows exactly where to put you.
            </p>
            <p>
              All gear is provided. You show up and we handle everything else.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/90 transition-colors w-full sm:w-fit">
              Book Your Trip <ArrowRight size={14} />
            </Link>
            <Link href="/events-calendar" className="inline-flex items-center justify-center gap-2 border border-primary text-primary text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/5 transition-colors w-full sm:w-fit">
              See Upcoming Dates
            </Link>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-0">
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/client-drift-brown.webp")} srcSet={`${img("/images/client-drift-brown-1280.webp")} 1280w, ${img("/images/client-drift-brown.webp")} 1800w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Brown trout from a float trip near Cashiers NC — Mac Brown Fly Fish" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/fall-river-fishing.webp")} srcSet={`${img("/images/fall-river-fishing-1280.webp")} 1280w, ${img("/images/fall-river-fishing.webp")} 1440w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Fall river fly fishing near Cashiers NC — Mac Brown Fly Fish" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Western North Carolina</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center leading-tight">
            The Water — Creeks, Rivers &amp; Lakes Within Reach
          </h2>
          <p className="text-muted-foreground italic text-center mb-12 max-w-2xl mx-auto">
            Cashiers sits at the crossroads of some of the finest trout country in the southern Appalachians. Here is what is available within a short drive:
          </p>
          <div className="space-y-4">
            {waters.map((water, i) => (
              <div key={i} className="bg-background border border-border p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-xl font-bold text-foreground">{water.name}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary border border-primary/30 px-3 py-1">{water.distance}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3">{water.description}</p>
                <p className="text-sm font-semibold text-primary italic">{water.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Programs</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            Every Way to Experience the Water
          </h2>
          <p className="text-muted-foreground text-center leading-relaxed mb-12 max-w-2xl mx-auto">
            Mac Brown Fly Fish offers the full spectrum of guided fly fishing experiences for Cashiers visitors — from single-day guided trips to multi-day schools and private instruction. Whatever your goal, whatever your skill level, there is a program built for you.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {programs.map((item, i) => (
              <Link key={i} href={item.link} className="bg-muted/30 border border-border p-6 hover:border-primary/40 transition-colors block">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Come Prepared</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            What to Bring
          </h2>
          <p className="text-muted-foreground text-center mb-10 leading-relaxed">
            All rods, reels, flies, leaders, and waders are provided. Here is what to bring from home:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 mb-6">
            {whatToBring.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-background border border-border p-4">
                <Check size={15} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-sm italic text-center">
            A tribal license for Cherokee waters can be purchased at stores in Cherokee, NC. A NC or TN fishing license is required for waters within the Great Smoky Mountains National Park.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/90 transition-colors w-full sm:w-fit">
              Book Your Trip <ArrowRight size={14} />
            </Link>
            <Link href="/events-calendar" className="inline-flex items-center justify-center gap-2 border border-primary text-primary text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/5 transition-colors w-full sm:w-fit">
              See Upcoming Dates
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Common Questions</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-border">
            {faqItems.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                  <span className="font-serif text-lg font-bold text-foreground leading-snug">{q}</span>
                  <span className="shrink-0 text-muted-foreground">
                    <ChevronDown size={18} className="block group-open:hidden" />
                    <ChevronUp size={18} className="hidden group-open:block" />
                  </span>
                </summary>
                <p className="pt-3 pb-1 text-muted-foreground leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Ready to Fish?</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            World-Class Trout Fishing — Right Outside Cashiers
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            You are surrounded by some of the finest fly fishing in the eastern United States. The only thing between you and a great day on the water is a guide who knows where to go and how to get you there. Mac Brown has been doing exactly that since 1987 — longer than anyone else in Western North Carolina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              Book Your Cashiers Trip <ArrowRight size={14} />
            </Link>
            <a href="tel:+18287360019" className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors">
              <Phone size={14} /> (828) 736-0019
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
