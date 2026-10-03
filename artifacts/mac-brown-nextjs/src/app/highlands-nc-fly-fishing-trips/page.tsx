import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

import { SchemaScript } from "@/components/schema-script";
import { PriceTag } from "@/components/price-tag";
import { cityTripSchema } from "@/lib/schema";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Guided Fly Fishing Trips & Clinics Near Highlands NC" },
  description: "Guided fly fishing trips near Highlands, NC. Fish gin-clear mountain streams for wild trout with Mac Brown Fly Fish in the Southern Appalachians.",
  alternates: { canonical: "https://macbrownflyfish.com/highlands-nc-fly-fishing-trips/" },
  openGraph: {
    title: "Highlands NC Guided Fly Fishing — Mac Brown Fly Fish",
    description: "The original outfitter in Western NC since 1987. Guided trout fishing trips from Highlands on the Nantahala, Tuckasegee, Smoky Mountains streams, and more.",
    url: "https://macbrownflyfish.com/highlands-nc-fly-fishing-trips/",
    images: [{ url: "https://macbrownflyfish.com/images/guide-trip-2.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Highlands NC Guided Fly Fishing — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/guide-trip-2.webp"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who guides the fly fishing trips from Highlands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mac Brown is the only FFI Master Casting Instructor in North Carolina — the highest casting credential awarded by Fly Fishers International — and a certified casting examiner for FFI. He is the author of Casting Angles and has been guiding Highlands-area visitors to the Smoky Mountains since 1987. Every trip is instructional: Mac explains the water and what he is doing as you fish.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Highlands NC from the best trout fishing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "About an hour. The Tuckasegee River Delayed Harvest section in Webster, the Nantahala River, and the wild streams of Great Smoky Mountains National Park are all within an hour of Highlands — among the finest trout waters in the eastern United States.",
      },
    },
    {
      "@type": "Question",
      name: "What waters do guided fly fishing trips from Highlands fish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Tuckasegee River Delayed Harvest section is the most popular — loaded with rainbow and brown trout October through May. The Nantahala River is the top tailwater in NC and fishes year-round for wild brown and rainbow trout. GSMNP streams offer native brook trout and wild rainbows in pristine backcountry.",
      },
    },
    {
      "@type": "Question",
      name: "What fish will we target near Highlands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wild rainbow trout and brown trout on the Tuckasegee and Nantahala. Native brook trout on high-elevation GSMNP streams. Mac reads conditions and selects the water and technique based on what the fish are doing that day.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best time of year for fly fishing near Highlands NC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spring and fall are the strongest seasons. The Tuckasegee Delayed Harvest section runs October through May. The Nantahala and wild Smoky Mountain streams fish year-round. December through March can be excellent on the tailwater.",
      },
    },
    {
      "@type": "Question",
      name: "Is a fishing license required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — a valid North Carolina Inland Fishing License (in-state or out-of-state) is required for all anglers 16 and older. There is no trout stamp in NC. For out-of-state visitors fishing the Tuckasegee River between October and May, the Mountain Heritage Trout Waters Day License is a cheaper optional alternative — not required, just a money-saving option. Purchase at ncwildlife.org.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need any gear or experience for a guided fly fishing trip from Highlands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No gear and no experience needed. Mac Brown Fly Fish provides everything — TFO rods, Scientific Anglers fly lines, all flies, leaders, and waders. Trips are tailored to your skill level. Lunches are not included — bring snacks and a lunch for full-day trips.",
      },
    },
    {
      "@type": "Question",
      name: "Is there fly fishing near me in Highlands, NC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — exceptional fly fishing is available within an hour of Highlands. Mac Brown Fly Fish provides guided trips on the Tuckasegee River, Nantahala River, and the wild streams of Great Smoky Mountains National Park, all easily accessible for a day trip.",
      },
    },
  ],
};

const faqs = [
  {
    q: "Who guides the fly fishing trips from Highlands?",
    a: "Mac Brown is the only FFI Master Casting Instructor in North Carolina — the highest casting credential awarded by Fly Fishers International — and a certified casting examiner for FFI. He is the author of Casting Angles and has been guiding Highlands-area visitors to the Smoky Mountains since 1987. Every trip is instructional: Mac explains the water and what he is doing as you fish — you leave understanding your fishing, not just having been guided.",
  },
  {
    q: "How far is Highlands NC from the best trout fishing?",
    a: "About an hour. The Tuckasegee River Delayed Harvest section in Webster, the Nantahala River, and the wild streams of Great Smoky Mountains National Park are all within an hour of Highlands — and they are among the finest trout waters in the eastern United States.",
  },
  {
    q: "What makes fly fishing near Highlands unique?",
    a: "Highlands sits at nearly 4,000 feet — one of the highest towns in the eastern US. The Cullasaja River drains directly off the Highlands plateau and joins the Little Tennessee River system. While the most popular guided water is the Tuckasegee Delayed Harvest section, Highlands anglers also have access to wild trout streams in the Nantahala National Forest that are closer than anywhere else in the region.",
  },
  {
    q: "What waters do guided fly fishing trips from Highlands fish?",
    a: "The Tuckasegee River Delayed Harvest section is the most popular — loaded with rainbow and brown trout October through May on float and wade trips. The Nantahala River is the top tailwater in the state and fishes year-round for wild brown and rainbow trout. Wild streams of Great Smoky Mountains National Park — Deep Creek, Noland Creek, the Oconaluftee — offer native brook trout and wild rainbows in pristine backcountry.",
  },
  {
    q: "What fish will we target near Highlands?",
    a: "Wild rainbow trout and brown trout on the Tuckasegee and Nantahala. Native brook trout on high-elevation GSMNP streams. The Nantahala tailwater is especially noted for wild fish that challenge precise presentation. Mac reads conditions and selects the water and technique based on what the fish are doing that day.",
  },
  {
    q: "Is a fishing license required?",
    a: "Yes — a valid North Carolina Inland Fishing License (in-state or out-of-state) is required for all anglers 16 and older. There is no trout stamp in NC. For out-of-state visitors fishing the Tuckasegee River between October and May, the Mountain Heritage Trout Waters Day License is a cheaper optional alternative — not required, just a money-saving option. Purchase at ncwildlife.org or any local sporting goods store.",
  },
  {
    q: "Are lunches included and what should I bring?",
    a: "Lunches are not included on guided trips. Bring snacks, water, and a lunch for full-day trips. Rain gear is essential — mountain weather changes fast. Polarized sunglasses and a brimmed hat are important for spotting fish. Clothing in earth tones. Wading shoes or boots if you have them — waders are provided. Payment in full at booking; Zelle, Venmo, and personal check accepted to avoid processing fees.",
  },
  {
    q: "Is there fly fishing near me in Highlands, NC?",
    a: "Yes — exceptional fly fishing is available within an hour of Highlands. Mac Brown Fly Fish provides guided trips on the Tuckasegee River, Nantahala River, and the wild streams of Great Smoky Mountains National Park, all easily accessible for a day trip from the Highlands plateau.",
  },
];

const waters = [
  {
    name: "Tuckasegee River — Delayed Harvest",
    distance: "~1 hour from Highlands",
    description:
      "The most popular guided water in the region and for good reason. From October through May the Delayed Harvest section of the Tuckasegee in Webster, NC is loaded with epic numbers of trout. Float trips and wade trips both available — this is where most first-time visitors from Highlands spend their day, and where many return year after year.",
    highlight: "Best for: Float trips, all skill levels, October through May",
  },
  {
    name: "Nantahala River",
    distance: "~45 minutes from Highlands",
    description:
      "The top tailwater in the state of North Carolina — cold, clear, and productive year-round. The Nantahala holds wild brown and rainbow trout in some of the most beautiful mountain scenery in the eastern United States. A favorite destination for anglers who want a genuine wild trout challenge.",
    highlight: "Best for: Wild trout, technical fishing, year-round",
  },
  {
    name: "Great Smoky Mountains National Park Streams",
    distance: "~1 hour from Highlands",
    description:
      "Wild, pristine, and largely unfished relative to their quality. Deep Creek, Noland Creek, Forney Creek, Luftee, and dozens of other mountain streams flowing through the national park offer exceptional wild trout fishing in an unmatched natural setting. Native brook trout in the high elevation streams. Wild rainbow and brown trout throughout.",
    highlight: "Best for: Wild trout, backcountry adventure, pristine water",
  },
  {
    name: "Local Highlands Area Streams",
    distance: "Minutes from Highlands",
    description:
      "The Highlands Plateau sits at over 4,000 feet elevation and is surrounded by its own network of quality mountain streams. The Cullasaja River and several private and public access streams in the immediate area offer excellent fishing options for days when you want to stay close to home.",
    highlight: "Best for: Convenience, local knowledge, spontaneous fishing days",
  },
];

const techniques = [
  {
    method: "Dry Fly Fishing",
    desc: "The pinnacle of the sport. Casting to rising fish with surface presentations — reading the hatch, matching the fly, achieving a drag-free drift.",
    style: "Passive — dead drift",
  },
  {
    method: "Nymph Fishing",
    desc: "The most productive technique on most days. Indicator and tight-line methods, rigging, depth control, and the hookset timing that most anglers never develop.",
    style: "Passive — dead drift",
  },
  {
    method: "Wet Fly Fishing",
    desc: "The oldest and most underutilized technique in fly fishing. Fished throughout the water column at distance — consistently the most productive method overall when conditions align.",
    style: "Active & passive",
  },
  {
    method: "Streamer Fishing",
    desc: "Moving big flies to move big fish. Retrieve techniques, depth control, presentation angles, and the reading skills to know where the largest trout are holding.",
    style: "Active — strip retrieve",
  },
];

const programs = [
  { title: "Fly Casting Instruction", desc: "Private lessons for all skill levels. Guaranteed or free.", link: "/fly-casting-instruction" },
  { title: "Fly Fishing Schools", desc: "Weekend immersion programs covering the full craft.", link: "/smoky-mountain-weekend-schools" },
  { title: "Online Casting Lessons", desc: "Live video instruction from anywhere in the world.", link: "/fly-casting-instruction" },
];

const whatToBring = [
  "Rain gear — mountain weather changes fast",
  "Warm layers — mornings on the water can be cool",
  "Polarized sunglasses — essential for spotting fish",
  "A hat with a brim — sun and glare protection",
  "Sunscreen and lip balm",
  "Clothing in earth tones — blend into your surroundings",
  "Valid NC fishing license if over 16 — ncwildlife.org or 1-888-248-6834",
];

export default function HighlandsNCFlyFishingTrips() {
  return (
    <div className="w-full">
      <SchemaScript schema={cityTripSchema({ city: "Highlands", state: "NC", description: "Guided fly fishing trips near Highlands, North Carolina, led by Mac Brown — the only FFI Master Casting Instructor in North Carolina and a certified casting examiner for Fly Fishers International. Highlands sits at the edge of some of the most productive wild trout water in the Southeast, with gin-clear freestone streams, Great Smoky Mountains National Park waters, and the Tuckasegee River all within reach. Mac has been guiding Western North Carolina's mountain streams since 1987. All rods, reels, flies, and terminal tackle are provided. All skill levels welcome.", url: "/highlands-nc-fly-fishing-trips", image: "https://macbrownflyfish.com/images/guide-trip-2.webp" })} />
      <SchemaScript schema={faqSchema} />

      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/guide-trip-2.webp")}
          srcSet={`${img("/images/guide-trip-2-1280.webp")} 1280w, ${img("/images/guide-trip-2.webp")} 1800w`}
          sizes="100vw"
          alt="Guided fly fishing near Highlands NC — Mac Brown Fly Fish, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            Guided Fly Fishing · Western North Carolina · Since 1987
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-5">
            Highlands NC Guided<br />Fly Fishing
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/reserve" className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              Book Your Trip <ArrowRight size={14} />
            </Link>
            <Link href="/instructional-guided-trips" className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Mac Brown Fly Fish offers guided fly fishing trips for visitors from Highlands, NC — wade trips and float trips from <PriceTag priceKey="guidedWadeOrFloat" part="half" as="span" /> (half day) to <PriceTag priceKey="guidedWadeOrFloat" part="full" as="span" /> (full day), all gear provided, on the Tuckasegee River, Nantahala River, and wild Smoky Mountain streams about an hour from Highlands. The only FFI Master Casting Instructor in North Carolina, guiding Western NC waters since 1987.
          </p>
          <p className="mt-4 font-serif italic text-foreground/70 text-base">The original outfitter in Western North Carolina. The finest trout water in the Southeast is about an hour from Highlands — and we have been guiding it longer than anyone else.</p>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Bryson City, NC</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            Find a Professional Fly Fishing Guide Near Highlands, NC
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Mac Brown Fly Fish offers guided fly fishing trips for visitors from Highlands, NC — about an hour drive to some of the finest wild trout water in the eastern United States. We meet you in Bryson City or Dillsboro and put you on the Tuckasegee, Nantahala, or wild Smoky Mountain streams. The original outfitter in Western North Carolina since 1987. All gear provided, all skill levels welcome.
            </p>
              <p className="text-sm text-muted-foreground mt-4">Planning your trip? Check the{" "}<Link href="/bryson-city-fly-fishing-report-hatch-chart/" className="text-primary hover:underline font-medium">live hatch &amp; river report</Link>{" "}for current fly fishing conditions on WNC waters.</p>
            <p>
              Mac Brown Fly Fish is the original fly fishing instructor and outfitter in Western North Carolina — serving the Highlands area since 1987. In that time no other operation in the Southeast has assembled more choices, more water, or more experience for the visiting angler.
            </p>
            <p>
              Bryson City sits about an hour from Highlands at the center of what serious anglers call the Trout Mecca of the South. Swain County holds more miles of quality wild trout water than any other county in North Carolina — rivers, tailwaters, mountain streams, and backcountry creeks flowing through the Great Smoky Mountains National Park and the Nantahala National Forest. The fishing available within reach of Highlands is genuinely extraordinary, and most visitors never find it without a guide who knows it deeply.
            </p>
            <p>
              Every trip is tailored specifically to what you want to improve and experience. Whether you are picking up a fly rod for the first time or looking to sharpen a specific technique on a specific piece of water — the day is built around you.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-0">
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/client-nantahala-brown.webp")} alt="Brown trout from the Nantahala River near Highlands NC — Mac Brown Fly Fish" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/client-wading-1.webp")} alt="Guided wade trip near Highlands NC — Mac Brown Fly Fish, Bryson City NC" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Western North Carolina</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center leading-tight">
            The Water — More Options Than Anywhere in the Southeast
          </h2>
          <p className="text-muted-foreground italic text-center mb-12 max-w-2xl mx-auto">
            From tailwaters loaded with trout to remote backcountry streams that most anglers never reach — here is what is available from Highlands:
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
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">On the Water</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            What a Typical Day Looks Like
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
            <p>
              No two days on the water are exactly alike — and that is intentional. Every guided trip is tailored specifically to what you want to improve and experience. The day begins with a conversation about your goals, your skill level, and what the water is doing that morning. From there everything flows from that starting point.
            </p>
            <p>
              For beginners, the day covers the full foundation of fly fishing — fly casting basics, reading the water, fishing tactics, techniques, hooksets, and playing fish to the net. By the end of the day most first-timers are casting confidently, reading the river, and catching trout on their own presentations.
            </p>
            <p>
              For experienced anglers the day goes deeper. Choose the area you most want to sharpen — and we go there. The four main technique areas available on the stream are:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {techniques.map((item, i) => (
              <div key={i} className="bg-muted/30 border border-border p-6">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.method}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.desc}</p>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.style}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground italic leading-relaxed">
            Each technique breaks down further into active retrieval versus passive dead drift presentations — and knowing when and where to reach for each one is the difference between a good day and a great one. That knowledge is what every guided trip delivers.
          </p>
        </div>
      </section>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Education</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            More Than a Guide Trip
          </h2>
          <p className="text-muted-foreground text-center leading-relaxed mb-12 max-w-2xl mx-auto">
            In addition to guided trips Mac Brown Fly Fish offers the full spectrum of fly fishing education for Highlands area visitors and residents — from private casting lessons to comprehensive weekend schools and multi-day immersion programs.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {programs.map((item, i) => (
              <Link key={i} href={item.link} className="bg-background border border-border p-6 hover:border-primary/40 transition-colors block">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Come Prepared</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            What to Bring
          </h2>
          <p className="text-muted-foreground text-center mb-10 leading-relaxed">
            All gear is provided — rods, reels, flies, leaders, and waders. Just show up ready to fish. Here is what to bring from home:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {whatToBring.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-muted/30 border border-border p-4">
                <Check size={15} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-border">
            {faqs.map(({ q, a }) => (
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
            The Finest Trout Fishing in the Southeast — An Hour from Highlands
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            Mac Brown has been guiding and teaching on these waters since 1987 — longer than anyone else in Western North Carolina. The experience, the knowledge, and the water are all here waiting. The only thing missing is you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              Book Your Highlands Trip <ArrowRight size={14} />
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
