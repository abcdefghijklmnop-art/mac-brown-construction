import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

import { SchemaScript } from "@/components/schema-script";
import { cityTripSchema } from "@/lib/schema";
import { PriceTag } from "@/components/price-tag";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Guided Fly Fishing Trips & Clinics Near Franklin NC" },
  description: "Guided fly fishing trips near Franklin, NC on the Nantahala River and surrounding mountain streams. Book with Mac Brown Fly Fish today.",
  alternates: { canonical: "https://macbrownflyfish.com/franklin-nc-fly-fishing/" },
  openGraph: {
    title: "Franklin NC Guided Fly Fishing — Mac Brown Fly Fish",
    description: "Franklin sits at the gateway to the Nantahala River and some of the most varied trout water in the Southeast. Guided fly fishing with Mac Brown since 1987.",
    url: "https://macbrownflyfish.com/franklin-nc-fly-fishing/",
    images: [{ url: "https://macbrownflyfish.com/images/guide-trip-1.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Franklin NC Guided Fly Fishing — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/guide-trip-1.webp"],
  },
};

const waters = [
  {
    name: "Nantahala River — Delayed Harvest & Tailwater",
    distance: "~30 min from Franklin",
    description:
      "The premier trout river in the state of North Carolina — and the closest major fishery to Franklin. The Nantahala headwaters originate at Standing Indian, beginning as a medium-sized mountain creek high in the mountains before gathering strength as it flows downstream. The Delayed Harvest section holds an exceptional population of wild and hatchery fish, and the seven-mile tailwater section below Nantahala Lake is simply the finest tailwater in NC — cold, clear, and productive every month of the year.",
    highlight: "Best for: All skill levels, year-round, wild and hatchery trout",
  },
  {
    name: "Rainbow Springs — Private Water on the Nantahala",
    distance: "~30 min from Franklin",
    description:
      "One of the most carefully protected stretches of water in the Southeast. Mac Brown has been fortunate to guide this private fishery with the owners over the years — water that has hosted fly fishing legends including Ernest Schwiebert, Lefty Kreh, Joan Wulff, and many other pioneers of the sport. A truly special experience for the serious fly angler when access is available.",
    highlight: "Best for: Serious anglers seeking an exceptional private water experience",
  },
  {
    name: "Nantahala Lake",
    distance: "~35 min from Franklin",
    description:
      "The Nantahala River flows into Nantahala Lake before continuing downstream to the tailwater section. The lake offers quality trout fishing and — when the season is right — the unique opportunity to target Kokanee salmon on a fly rod. A stillwater experience that most anglers in the region never discover.",
    highlight: "Best for: Stillwater fishing, Kokanee salmon, larger trout",
  },
  {
    name: "Little Tennessee River",
    distance: "~20 min from Franklin",
    description:
      "When the summer doldrums slow the trout fishing on smaller streams, the Little Tennessee River comes into its own for smallmouth bass — pound for pound one of the most exciting fish available on a fly rod. The rock shelves and deep pools of the Little Tennessee make wading challenging, so float trips are the preferred approach — covering water, staying comfortable, and putting you in position for the best smallmouth holding lies.",
    highlight: "Best for: Smallmouth bass in summer, float trips, big water experience",
  },
  {
    name: "Tuckasegee River — Delayed Harvest",
    distance: "~45 min from Franklin",
    description:
      "From October through May the Delayed Harvest section of the Tuckasegee in Webster, NC loads up with exceptional numbers of trout. One of the most popular guided destinations in the region for float trips and wade trips alike. A reliable producer throughout the Delayed Harvest season.",
    highlight: "Best for: Float trips, wade trips, October through May",
  },
  {
    name: "Great Smoky Mountains National Park Streams",
    distance: "~45 min from Franklin",
    description:
      "Deep Creek, Noland Creek, Forney Creek, and the many other mountain streams of the national park offer outstanding wild trout fishing in a protected wilderness setting. Spring is the finest season for dry fly fishing on these streams — hatches align with warming water temperatures and fish become aggressive and visible. Backcountry trips into the more remote sections of the park are a signature experience.",
    highlight: "Best for: Dry fly fishing in spring, backcountry adventure, wild trout",
  },
];

const seasons = [
  {
    season: "Spring",
    desc: "The finest season for dry fly fishing in the Smoky Mountains. Hatches align with warming water, fish become aggressive and visible, and the backcountry streams of the national park fish at their absolute best. One of the most popular seasons for backcountry trips.",
  },
  {
    season: "Summer",
    desc: "Trout fishing slows on warmer lower-elevation streams. The game shifts to higher elevation park streams, cold tailwaters like the Nantahala, and the Little Tennessee River for smallmouth bass — one of the most exciting summer fly fishing options in the region.",
  },
  {
    season: "Fall",
    desc: "Cooling water temperatures wake the fish up across all water types. Delayed Harvest seasons open in October loading the Tuckasegee and other DH streams with exceptional numbers of trout. Fall foliage on the mountain rivers makes every day on the water a visual experience.",
  },
  {
    season: "Winter",
    desc: "The Nantahala tailwater and Tuckasegee Delayed Harvest fish well throughout the winter months. Midges and small Blue Winged Olives on cold clear days. Fewer anglers on the water, concentrated fish, and the quiet beauty of mountain rivers in winter.",
  },
];

const programs = [
  { title: "Guided Float Trips", desc: "Drift the Tuckasegee or Little Tennessee in a drift boat. Cover water, find fish, learn the river.", link: "/guided-float-fly-fishing-trips" },
  { title: "Guided Wade Trips", desc: "Get in the water on the Nantahala, the park streams, or the backcountry. Read the river and fish it with intention.", link: "/guided-wade-fly-fishing-trips" },
  { title: "Guided Lake Trips", desc: "Stillwater trout and Kokanee salmon on the mountain lakes near Franklin.", link: "/guided-lake-fly-fishing-trips" },
  { title: "Fly Casting Instruction", desc: "Private lessons for all skill levels from NC's only Master Casting Instructor. Guaranteed or free.", link: "/fly-casting-instruction" },
  { title: "Fly Fishing Schools", desc: "Weekend immersion programs covering casting, reading water, tactics, entomology, and more.", link: "/smoky-mountain-weekend-schools" },
  { title: "Online Casting Lessons", desc: "Live video instruction to sharpen your cast before your Franklin trip.", link: "/fly-casting-instruction" },
];

const whatToBring = [
  "Rain gear — mountain weather changes fast",
  "Warm layers — mornings on the water can be cool",
  "Polarized sunglasses — essential for spotting fish",
  "A hat with a brim — sun and glare protection",
  "Sunscreen and lip balm",
  "Clothing in earth tones — blend into your surroundings",
  "Valid NC fishing license if over 16 — ncwildlife.org or 1-888-248-6834",
  "Tribal license for Cherokee waters — available at stores in Cherokee, NC",
];

const faqItems = [
  { q: "Who guides the fly fishing trips from Franklin?", a: "Mac Brown is the only FFI Master Casting Instructor in North Carolina — the highest casting credential awarded by Fly Fishers International — and a certified casting examiner for FFI. He is the author of Casting Angles and has been guiding Western North Carolina's trout water since 1987. Every trip is instructional: Mac explains the water, the technique, and the fish as you fish — you leave understanding your fishing, not just having been guided around a river." },
  { q: "Is there fly fishing near me in Franklin, NC?", a: "Yes, some of the finest fly fishing in the Southeast is located near Franklin. The Nantahala River tailwater is just 30 minutes away, offering wild trout year-round. The Tuckasegee River Delayed Harvest section is roughly 35 minutes from Franklin and provides exceptional trout numbers from October through May. Additionally, the wild mountain streams of the Great Smoky Mountains National Park are within a 45-minute drive, offering pristine backcountry fishing." },
  { q: "How far is Franklin from fly fishing in the Smoky Mountains?", a: "Bryson City, NC is approximately 45 minutes from Franklin via US-64 West. The Tuckasegee River Delayed Harvest section in Webster is even closer — roughly 30–35 minutes. The Nantahala River tailwater, one of the finest wild trout rivers in NC, is about 30 minutes from Franklin. World-class guided fly fishing is closer than most Franklin visitors realize." },
  { q: "What waters do guided fly fishing trips fish from Franklin?", a: "Mac selects the water based on current conditions, season, and your goals. Top options for Franklin visitors include the Nantahala River tailwater (wild brown and rainbow trout year-round in a stunning gorge setting), the Tuckasegee River Delayed Harvest section (exceptional trout numbers October through May), and wild streams of Great Smoky Mountains National Park (native brook trout and wild rainbows in pristine backcountry water)." },
  { q: "Do I need any gear or experience?", a: "No gear and no experience needed. Mac Brown Fly Fish provides everything — TFO rods, Scientific Anglers fly lines, all flies, leaders, and waders. Trips are tailored to your skill level whether you are picking up a fly rod for the first time or an experienced angler working on a specific technique." },
  { q: "What is the best time of year for a fly fishing trip from Franklin?", a: "Spring and fall are the strongest seasons overall. The Tuckasegee Delayed Harvest section runs October through May with exceptional trout numbers. The Nantahala River and wild Smoky Mountain streams fish well year-round — the Nantahala tailwater stays cold even in summer. July and August fishing is best early morning before river temperatures climb." },
  { q: "Is a fishing license required?", a: "Yes — a valid North Carolina Inland Fishing License (in-state or out-of-state) is required for all anglers 16 and older. There is no trout stamp in NC. Purchase at ncwildlife.org or any local sporting goods store. Mac will advise on the best license option based on where you are fishing that day." },
  { q: "Are lunches included and what should I bring?", a: "Lunches are not included on guided trips. Bring snacks, water, and a lunch for full-day trips. Rain gear is essential — mountain weather changes fast. Polarized sunglasses and a brimmed hat are important for spotting fish. Clothing in earth tones. Wading shoes or boots if you have them — waders are provided. Payment in full at booking; Zelle, Venmo, and personal check accepted to avoid processing fees." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function FranklinNCFlyFishing() {
  return (
    <div className="w-full">
      <SchemaScript schema={cityTripSchema({ city: "Franklin", state: "NC", description: "Guided fly fishing trips near Franklin, North Carolina, led by a fly fishing guide since 1987. Mac Brown is the only FFI Master Casting Instructor in North Carolina and a certified casting examiner for Fly Fishers International. Franklin sits at the gateway to the Nantahala River tailwater, the Tuckasegee River Delayed Harvest section, and Great Smoky Mountains National Park streams — all within 30–45 minutes. All rods, reels, flies, and terminal tackle provided. All skill levels welcome.", url: "/franklin-nc-fly-fishing", image: "https://macbrownflyfish.com/images/guide-trip-1.webp" })} />
      <SchemaScript schema={faqSchema} />
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/fall-river-misty.webp")}
          srcSet={`${img("/images/fall-river-misty-1280.webp")} 1280w, ${img("/images/fall-river-misty.webp")} 1920w`}
          sizes="100vw"
          alt="Guided fly fishing near Franklin NC — Mac Brown Fly Fish, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-10">
            Franklin NC Guided<br />Fly Fishing
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
          <p className="text-muted-foreground text-lg leading-relaxed">Fly fishing trips from Franklin, NC to Bryson City take approximately 45 minutes — making Mac Brown Fly Fish the closest world-class guided fly fishing operation to Franklin. Mac Brown is the only FFI Master Casting Instructor in North Carolina and has been guiding Franklin-area visitors on the Tuckasegee River, Nantahala River, and wild streams of Great Smoky Mountains National Park since 1987. Guided trips start at <PriceTag priceKey="guidedWadeOrFloat" part="half" as="span" />. All gear provided, all skill levels welcome.</p>
              <p className="text-sm text-muted-foreground mt-4">Planning your trip? Check the {" "}<Link href="/bryson-city-fly-fishing-report-hatch-chart/" className="text-primary hover:underline font-medium">live hatch &amp; river report</Link>{" "}for current fly fishing conditions on WNC waters.</p>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Bryson City, NC</p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">Mac Brown Fly Fish offers fly fishing schools, guided fly fishing trips, and casting instruction for visitors from Franklin — approximately 45 minutes to the wild trout streams of the Great Smoky Mountains in Bryson City, North Carolina. The original outfitter in Western North Carolina since 1987. Float trips, wade trips, schools, and casting instruction available year-round. All gear provided, all skill levels welcome.</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            The Best Fly Fishing Day Trip from Franklin, NC
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Franklin NC fly fishing guide trips offer an extraordinary variety of water within a short drive — tailwater streams, small wild mountain creeks, large freestone rivers, and Delayed Harvest sections that fish exceptionally well throughout the cooler months. The fishing changes with the seasons, and knowing which water to fish on a given day is the difference between a good trip and a great one. That is local knowledge built from nearly four decades on these specific rivers.
            </p>
            <p>
              Most of the finest trout water near Franklin gravitates toward Bryson City — the county seat of Swain County and the undisputed Trout Mecca of the southern states. Over 75% of Swain County is either Nantahala National Forest or Great Smoky Mountains National Park, which means the water stays protected, the fish stay wild, and the experience stays genuine. Mac Brown Fly Fish has been guiding and teaching on this water since 1987 — longer than any other outfitter in the region.
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
          <img src={img("/images/client-brown-2.webp")} srcSet={`${img("/images/client-brown-2-800.webp")} 800w, ${img("/images/client-brown-2.webp")} 1080w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Brown trout near Franklin NC — Mac Brown Fly Fish" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/guide-fish-1.webp")} srcSet={`${img("/images/guide-fish-1-800.webp")} 800w, ${img("/images/guide-fish-1.webp")} 1600w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Guided fly fishing near Franklin NC — Mac Brown Fly Fish" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Western North Carolina</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center leading-tight">
            The Water — Tailwaters, Wild Streams &amp; Freestone Rivers
          </h2>
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
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Year-Round Fishing</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center leading-tight">
            Fishing the Seasons Near Franklin
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {seasons.map((item, i) => (
              <div key={i} className="bg-muted/30 border border-border p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{item.season}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Programs</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            Every Way to Experience the Water
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
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
            All rods, reels, flies, and leaders are provided. Just show up ready to fish. Here is what to bring from home:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 mb-6">
            {whatToBring.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-muted/30 border border-border p-4">
                <Check size={15} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-sm italic text-center">
            A NC or TN fishing license is required for waters within the Great Smoky Mountains National Park.
          </p>
        </div>
      </section>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Western NC</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            Make It a Trip — Area Attractions
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Bryson City is the perfect base for your Franklin area fly fishing adventure — and one of the finest small towns in the Appalachian Mountains. The Great Smoky Mountains National Park draws over 14 million visitors annually and the surrounding area offers world-class whitewater rafting on the Nantahala River, the Great Smoky Mountains Railroad, hundreds of waterfall hikes, Appalachian Trail access, mountain biking, and a growing food and craft beverage scene.
            </p>
            <p>
              For a full list of area attractions and lodging options contact the Bryson City–Swain County Chamber of Commerce at 800-867-9246.
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
            The Nantahala Gateway — World-Class Fishing Starts Here
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            Franklin sits at the doorstep of the Nantahala River — the finest tailwater in North Carolina — and within easy reach of some of the most diverse and productive fly fishing in the Southeast. Mac Brown has been unlocking this water for visiting anglers since 1987. Come find out what four decades of local knowledge feels like on the water.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              Book Your Franklin Trip <ArrowRight size={14} />
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
