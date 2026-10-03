import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone, ArrowRight } from "lucide-react";

import { SchemaScript } from "@/components/schema-script";
import { cityTripSchema } from "@/lib/schema";
import { PriceTag } from "@/components/price-tag";
import { img } from "@/lib/asset";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is Mac Brown and what are his guide credentials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mac Brown is the only FFI Master Casting Instructor in North Carolina — the highest casting credential awarded by Fly Fishers International — and a certified casting examiner for FFI who tests and certifies other instructors. He is the author of Casting Angles and has been guiding Asheville-area visitors to the Smoky Mountains since 1987. Every trip is instructional: Mac explains the water, the technique, and the fish as you go."
      }
    },
    {
      "@type": "Question",
      "name": "How far is Bryson City from Asheville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bryson City, NC is approximately 1.5 hours west of Asheville via US-74 West. The Tuckasegee River Delayed Harvest section in Webster, NC is only 35 minutes from Asheville and is the most popular guided water for Asheville visitors from October through May."
      }
    },
    {
      "@type": "Question",
      "name": "What fish can I catch on a guided trip near Asheville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Guided trips near Asheville target wild rainbow trout, wild brown trout, and wild native brook trout depending on the water. The Tuckasegee Delayed Harvest section holds large numbers of stocked rainbow and brown trout October through May. The Nantahala River tailwater holds wild fish year-round. GSMNP streams offer native brook trout at higher elevations alongside wild rainbows and browns."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best time of year to fly fish near Asheville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fly fishing near Asheville is productive year-round. October through May is prime season on the Tuckasegee Delayed Harvest section — high fish counts and catch-and-release regulations. Summer offers excellent wild trout fishing in GSMNP streams, best in early morning. Fall is the prime season for trophy brown trout on the Nantahala River as water temperatures drop and fish move aggressively."
      }
    },
    {
      "@type": "Question",
      "name": "Is a fishing license required for a guided trip near Asheville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — a valid North Carolina Inland Fishing License (in-state or out-of-state) is required for all anglers 16 and older. There is no trout stamp in NC. For out-of-state visitors fishing the Tuckasegee River between October and May, the Mountain Heritage Trout Waters Day License is a cheaper optional alternative — not required, just a money-saving option. Purchase at ncwildlife.org or any local sporting goods store."
      }
    },
    {
      "@type": "Question",
      "name": "Are lunches included and what should I bring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lunches are not included on guided trips. Bring snacks, water, and a lunch for full-day trips. Rain gear is essential — mountain weather changes fast. Polarized sunglasses and a brimmed hat are important for spotting fish. Clothing in earth tones. Wading shoes or boots if you have them — waders are provided. All rods, reels, flies, and terminal tackle are provided."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a guided fly fishing trip near Asheville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book online at macbrownflyfish.com or call (828) 736-0019. All gear is provided, all skill levels are welcome, and every trip is tailored to your experience level and goals. Payment in full at booking; Zelle, Venmo, and personal check accepted to avoid processing fees."
      }
    },
    {
      "@type": "Question",
      "name": "Is there fly fishing near me in Asheville, NC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Asheville has excellent fly fishing nearby. The Tuckasegee River in Webster is just 35 minutes away, and the wild streams of the Great Smoky Mountains National Park are within a 45–60 minute drive. Mac Brown Fly Fish offers professional guiding on all these world-class waters."
      }
    }
  ]
};

export const metadata: Metadata = {
  title: { absolute: "Guided Fly Fishing Trips & Clinics Near Asheville NC" },
  description: "Fly fishing guide trips near Asheville, NC. Fish wild trout streams in the Blue Ridge Mountains with an expert guide from Mac Brown Fly Fish.",
  alternates: { canonical: "https://macbrownflyfish.com/asheville-nc-guided-trout-fishing-trips/" },
  openGraph: {
    title: "Asheville NC Guided Trout Fishing Trips — Mac Brown Fly Fish",
    description: "World-class wild trout water less than 90 minutes from Asheville. Guided fly fishing trips with an FFI Master Casting Instructor based in Bryson City, NC.",
    url: "https://macbrownflyfish.com/asheville-nc-guided-trout-fishing-trips/",
    images: [{ url: "https://macbrownflyfish.com/images/guide-trip-1.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asheville NC Guided Trout Fishing Trips — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/guide-trip-1.webp"],
  },
};

const waters = [
  {
    name: "Tuckasegee River — Delayed Harvest",
    distance: "35 min from Asheville",
    description:
      "The crown jewel of Western NC tailwater fishing. The Webster, NC section of the Tuckasegee runs loaded with trout from October through May. Float trips and wade trips both available. This is where most Asheville visitors spend their first day on the water — and where many come back every year.",
    highlight: "Best for: Float trips, beginners, intermediate anglers",
  },
  {
    name: "Nantahala River",
    distance: "90 min from Asheville",
    description:
      "The top tailwater in the state of North Carolina. Cold, clear, and productive year-round, the Nantahala holds wild brown and rainbow trout in beautiful mountain scenery. A slightly longer drive from Asheville but worth every mile — especially for anglers looking for a true tailwater challenge.",
    highlight: "Best for: Wild trout, technical fishing, experienced anglers",
  },
  {
    name: "Great Smoky Mountains National Park Streams",
    distance: "45–60 min from Asheville",
    description:
      "Crystal-clear mountain streams flowing through one of the most visited national parks on earth — and one of the least-fished fisheries per mile anywhere in the region. Wild native brook trout in the high elevation streams. Wild rainbow and brown trout throughout. Pristine water, breathtaking scenery, and fish that have never been stocked.",
    highlight: "Best for: Wild trout, backcountry adventure, pristine water",
  },
  {
    name: "Davidson River",
    distance: "45 min from Asheville",
    description:
      "One of the finest freestone rivers in the Southern Appalachians and a personal favorite during the offseason. The Davidson runs through Pisgah National Forest and holds quality wild trout in beautiful surroundings. A special experience for the angler who wants something different from the tailwater scene.",
    highlight: "Best for: Wild trout, freestone fishing, Pisgah National Forest",
  },
  {
    name: "Laurel River — Hot Springs, NC",
    distance: "60 min from Asheville",
    description:
      "A Delayed Harvest stream near Hot Springs offering excellent trout fishing in a gorgeous mountain setting. A strong option when the larger tailwaters are running high or off-color.",
    highlight: "Best for: Delayed Harvest, accessible wading",
  },
  {
    name: "East Fork of the Pigeon River",
    distance: "45 min from Asheville",
    description:
      "Near Waynesville, NC — another Delayed Harvest option that fishes well throughout the cooler months and offers a quieter, less pressured experience than the larger rivers.",
    highlight: "Best for: Delayed Harvest, less pressure, quality presentation practice",
  },
  {
    name: "Little Tennessee River",
    distance: "60 min from Asheville",
    description:
      "A larger river system in Swain County offering a big-water experience with strong fish numbers. Similar feel to western rivers — wide open, powerful, and rewarding for anglers who want distance and reach in their casting.",
    highlight: "Best for: Bigger water, western-style fishing experience",
  },
];

const whatToBring = [
  "Rain gear — mountain weather changes fast",
  "Warm layers — mornings on the water can be cool",
  "Polarized sunglasses — essential for spotting fish",
  "A hat with a brim — sun and glare protection",
  "Sunscreen and lip balm",
  "Clothing in earth tones — blend into your surroundings",
  "Valid NC fishing license if over 16 — purchase at ncwildlife.org or call 1-888-248-6834",
];

const nearby = [
  { place: "Cherokee, NC", distance: "10 minutes" },
  { place: "Gatlinburg, TN", distance: "45 minutes" },
  { place: "Highlands & Asheville, NC", distance: "~1 hour" },
  { place: "Knoxville & Chattanooga, TN", distance: "~2.5 hours" },
  { place: "Atlanta, GA & Charlotte, NC", distance: "~3 hours" },
];

export default function AshevilleNCGuidedTroutFishingTrips() {
  return (
    <div className="w-full">
      <SchemaScript schema={cityTripSchema({ city: "Asheville", state: "NC", description: "Guided fly fishing trips near Asheville, North Carolina, led by Mac Brown — the only FFI Master Casting Instructor in North Carolina and a certified casting examiner for Fly Fishers International. Asheville anglers are less than 90 minutes from some of the finest wild trout water in the Southern Appalachians — freestone mountain streams, Great Smoky Mountains National Park waters, and the Tuckasegee River in Bryson City. Mac has been guiding Western North Carolina waters since 1987. All rods, reels, flies, and terminal tackle are provided. All skill levels welcome.", url: "/asheville-nc-guided-trout-fishing-trips", image: "https://macbrownflyfish.com/images/guide-trip-1.webp" })} />
      <SchemaScript schema={faqSchema} />
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/tuckasegee-summer.webp")}
          srcSet={`${img("/images/tuckasegee-summer-1280.webp")} 1280w, ${img("/images/tuckasegee-summer.webp")} 1920w`}
          sizes="100vw"
          alt="Guided trout fishing near Asheville NC — Mac Brown Fly Fish, Bryson City NC"
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
            Asheville NC Guided<br />Trout Fishing Trips
          </h1>
          <p className="text-white/70 text-base md:text-lg font-serif italic max-w-2xl">
            The finest wild trout water in the eastern United States is less than 90 minutes from your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
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
          <p className="text-muted-foreground text-lg leading-relaxed">Guided trout fishing near Asheville, NC centers on Bryson City — just 1.5 hours west via US-74 — where Mac Brown Fly Fish has operated as the original independent guide service in Western North Carolina since 1987. The Tuckasegee River Delayed Harvest section in Webster is only 35 minutes from Asheville and loads up with rainbow and brown trout from October through May. The Nantahala River tailwater, Great Smoky Mountains National Park streams, and the Davidson River through Pisgah National Forest are all within 90 minutes — giving Asheville anglers access to more diverse wild trout water than any other city in the eastern United States. Guided trips start at <PriceTag priceKey="guidedWadeOrFloat" part="half" as="span" />. All gear provided, all skill levels welcome.</p>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Bryson City, NC</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            Book a Professional Fly Fishing Guide — 35 Minutes from Asheville
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              An Asheville NC guided trout fishing trip is one of the finest ways to spend a day during your Smoky Mountains vacation. While Asheville is a remarkable city, the wild trout water surrounding it is extraordinary — and most visitors never find it. That is where we come in.
            </p>
            <p>
              Bryson City sits at the center of what serious anglers call the Trout Mecca of the South. Swain County holds more miles of quality trout water than any other county in North Carolina — rivers, tailwaters, mountain streams, and backcountry creeks flowing through the Great Smoky Mountains National Park and the Nantahala National Forest. Over 75% of the county is protected public land, which means the water stays wild, the fish stay wild, and the experience stays real.
            </p>
            <p>
              The Tuckasegee River Delayed Harvest section in Webster, NC is only a 35-minute drive from Asheville — and from October through May it is loaded with epic numbers of trout. A guided float trip on the Tuckasegee is one of the best ways to experience the larger rivers of Western NC, covering miles of productive water from a drift boat with the most experienced guides in the region.
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

      <section className="py-24 bg-muted/30 border-b border-border text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Common Questions</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-border text-left">
            {faqSchema.mainEntity.map((faq: any, i: number) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                  <span className="font-serif text-lg font-bold text-foreground leading-snug">{faq.name}</span>
                </summary>
                <p className="pt-3 pb-1 text-muted-foreground leading-relaxed">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-0">
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/client-float-1.webp")} alt="Float trip on the Tuckasegee River near Asheville — Mac Brown Fly Fish, Bryson City NC" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/client-rainbow-1.webp")} srcSet={`${img("/images/client-rainbow-1-800.webp")} 800w, ${img("/images/client-rainbow-1.webp")} 1323w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Wild rainbow trout caught near Asheville NC — Mac Brown Fly Fish" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Western North Carolina</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center leading-tight">
            The Waters — Something for Every Angler
          </h2>
          <p className="text-muted-foreground italic text-center mb-12 max-w-2xl mx-auto">
            Every trip is built around current conditions, your skill level, and what the water is doing that day. Here is what is available within reach of Asheville:
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
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Bryson City, NC</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            New to Fly Fishing? Start Here.
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
            <p>
              Bryson City is an excellent base for fly casting instruction before you hit the streams. For those new to the sport, a short casting lesson before your guided trip will benefit you for years of enjoyment down the road. Most beginners are making fishable casts within the first hour — and the confidence that comes from understanding what you are doing makes every moment on the water more rewarding.
            </p>
            <p>
              Mac Brown is North Carolina's only FFI Master Casting Instructor. Whether you need a quick foundation before your trip or want to commit to a full school experience, the instruction available here is simply not found anywhere else in the region.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/fly-casting-instruction" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary/90 transition-colors">
              Fly Casting Instruction
            </Link>
            <Link href="/smoky-mountain-weekend-schools" className="inline-flex items-center justify-center gap-2 border border-border text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-muted/50 transition-colors">
              Fly Fishing Schools
            </Link>
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
            All gear is provided — rods, reels, flies, leaders, and waders. Lunch is included on full-day programs. Just show up ready to fish. Here is what to bring from home:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 mb-8">
            {whatToBring.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-background border border-border p-4">
                <Check size={15} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-sm italic text-center">
            Note: A tribal license for Cherokee waters can be purchased at stores in Cherokee, NC. A NC or TN fishing license is required for waters within the Great Smoky Mountains National Park.
          </p>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Western NC</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            Make It a Trip — Area Attractions
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
            <p>
              Bryson City is one of the finest small towns in the Appalachian Mountains — and the perfect base for your Western NC adventure. Over 75% of Swain County is protected public land, which means the outdoor opportunities surrounding the town are extraordinary. The Great Smoky Mountains National Park alone draws over 14 million visitors per year — more than any other national park in the country.
            </p>
            <p>
              Beyond the fishing you will find world-class whitewater rafting on the Nantahala River, the Great Smoky Mountains Railroad, hundreds of waterfall hikes, Appalachian Trail access, mountain biking trails, and a growing food and craft beverage scene anchored by the Nantahala Brewing Company — one of the region's best and a personal favorite after a long day on the water.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {nearby.map((loc, i) => (
              <div key={i} className="flex justify-between items-center bg-muted/30 border border-border p-4">
                <span className="font-semibold text-foreground text-sm">{loc.place}</span>
                <span className="text-primary font-bold text-xs uppercase tracking-wider">{loc.distance}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-6 text-center italic">
            Bryson City is within a day's drive of nearly 50 million people — and the trout water here rivals anything in the western United States.
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

      <section className="bg-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Ready to Fish?</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Book Your Asheville Area Guided Trip
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            Reach out to discuss dates, water conditions, and the right program for your experience level. We build every trip around you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              Inquire &amp; Book <ArrowRight size={14} />
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
