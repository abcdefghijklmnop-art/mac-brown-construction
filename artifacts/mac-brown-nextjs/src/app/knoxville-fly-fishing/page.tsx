import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

import { SchemaScript } from "@/components/schema-script";
import { cityTripSchema } from "@/lib/schema";
import { PriceTag } from "@/components/price-tag";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Guided Fly Fishing Trips & Clinics Near Knoxville TN" },
  description: "Knoxville anglers are minutes from world-class trout water. Book a guided fly fishing trip with Mac Brown Fly Fish in the Great Smoky Mountains.",
  alternates: { canonical: "https://macbrownflyfish.com/knoxville-fly-fishing/" },
  openGraph: {
    title: "Fly Fishing Trips from Knoxville TN — Mac Brown Fly Fish",
    description: "The finest wild trout water in the eastern United States is less than two hours from Knoxville. Guided fly fishing on the Nantahala, Tuckasegee, and Smoky Mountains streams since 1987.",
    url: "https://macbrownflyfish.com/knoxville-fly-fishing/",
    images: [{ url: "https://macbrownflyfish.com/images/smoky-mountains.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fly Fishing Trips from Knoxville TN — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/smoky-mountains.webp"],
  },
};

const waters = [
  {
    name: "Great Smoky Mountains National Park Streams",
    distance: "~1.5 hours from Knoxville",
    description: "The national park you can see from Knoxville holds some of the finest wild trout fishing in the eastern United States. Crystal-clear mountain streams, native brook trout in the high-elevation waters, wild rainbow and brown trout throughout. Pristine, protected, and largely unfished relative to their quality.",
    highlight: "Best for: Wild trout, pristine water, all seasons",
  },
  {
    name: "Tuckasegee River — Delayed Harvest",
    distance: "~1.75 hours from Knoxville",
    description: "From October through May the Delayed Harvest section of the Tuckasegee in Webster, NC is loaded with exceptional numbers of trout. One of the most productive guided destinations in the region for float trips and wade trips alike. A perfect day trip distance from Knoxville.",
    highlight: "Best for: Float trips, wade trips, October through May",
  },
  {
    name: "Nantahala River",
    distance: "~2 hours from Knoxville",
    description: "The premier tailwater in North Carolina — cold, clear, and productive every month of the year. Wild brown and rainbow trout in beautiful mountain scenery. Worth every mile of the drive from Knoxville for the angler who wants a genuine wild trout challenge.",
    highlight: "Best for: Wild trout, technical fishing, year-round",
  },
  {
    name: "Smoky Mountain Lakes",
    distance: "~1.75 hours from Knoxville",
    description: "Fontana Lake and the other mountain stillwaters of the Smoky Mountains offer exceptional fly fishing for large trout — especially from late fall through early spring. A completely different experience from river fishing and one of the best-kept secrets within reach of Knoxville.",
    highlight: "Best for: Trophy trout, stillwater fishing, fall through spring",
  },
];

const programs = [
  { title: "Guided Float Trips", desc: "Drift the Tuckasegee in a drift boat. The best seat on the river.", link: "/guided-float-fly-fishing-trips" },
  { title: "Guided Wade Trips", desc: "Get in the water on the park streams or the Nantahala tailwater.", link: "/guided-wade-fly-fishing-trips" },
  { title: "Guided Lake Trips", desc: "Trophy trout on the Smoky Mountain stillwaters.", link: "/guided-lake-fly-fishing-trips" },
  { title: "Fly Casting Instruction", desc: "Private lessons from NC's only Master Casting Instructor. Guaranteed or free.", link: "/fly-casting-instruction" },
  { title: "Fly Fishing Schools", desc: "Weekend immersion programs — a perfect Knoxville weekend trip.", link: "/smoky-mountain-weekend-schools" },
  { title: "Group & Corporate Trips", desc: "Customized fly fishing for Knoxville groups of any size.", link: "/group-corporate-fly-fishing" },
  { title: "Backcountry Trips", desc: "Remote streams deep in the national park — wild and unforgettable.", link: "/backcountry-trout-fishing" },
  { title: "Online Casting Lessons", desc: "Sharpen your cast before you make the drive from Knoxville.", link: "/fly-casting-instruction" },
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

const faqItems = [
  { q: "Is there fly fishing near me in Knoxville, TN?", a: "Yes, Knoxville is less than two hours from some of the best fly fishing in the country. The wild trout streams of the Great Smoky Mountains National Park are just 1.5 hours away. The highly productive Tuckasegee River Delayed Harvest and the premier Nantahala River tailwater are both within a two-hour drive from Knoxville." },
  { q: "How far is Knoxville from fly fishing in the Smoky Mountains?", a: "Bryson City, NC is less than 2 hours from Knoxville. The Tuckasegee River delayed harvest section in Webster, NC is even closer — one of the most productive guided trout fishing destinations in the eastern United States." },
  { q: "Do I need any gear or experience?", a: "No gear and no experience needed. Mac Brown Fly Fish provides everything — rods, reels, flies, leaders, and waders. Trips are tailored to your skill level whether you are a first-time fly fisher or a seasoned angler looking to sharpen a specific technique." },
  { q: "What rivers do guided fly fishing trips fish near Knoxville?", a: "The most popular options are the Tuckasegee River delayed harvest section, the Nantahala River, and the wild streams of Great Smoky Mountains National Park. Mac selects the water based on current conditions, the season, and your goals for the day." },
  { q: "What is the best time of year for a fly fishing trip from Knoxville?", a: "Spring and fall are the strongest seasons. The Tuckasegee delayed harvest section runs October through May with exceptional trout numbers. The Nantahala River and wild Smoky Mountain streams fish year-round. Summer fishing is best early morning before water temperatures rise." },
  { q: "Who leads the guided fly fishing trips?", a: "Trips are led by Mac Brown and his team — Mac is the only FFI Master Casting Instructor in North Carolina and has been guiding on these waters since 1987. Every trip is instructional, tailored to your goals, and built around your time on the water." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function KnoxvilleFlyFishing() {
  return (
    <div className="w-full">
      <SchemaScript schema={cityTripSchema({ city: "Knoxville", state: "TN", description: "Knoxville anglers are minutes from world-class trout water. Book a guided fly fishing trip with a fly fishing guide since 1987. Mac Brown Fly Fish offers expert instruction in the Great Smoky Mountains.", url: "/knoxville-fly-fishing", image: "https://macbrownflyfish.com/images/smoky-mountains.webp" })} />
      <SchemaScript schema={faqSchema} />
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/smoky-mountains.webp")}
          srcSet={`${img("/images/mobile/smoky-mountains.webp")} 800w, ${img("/images/smoky-mountains.webp")} 1280w`}
          sizes="100vw"
          alt="Guided fly fishing trips from Knoxville TN — Mac Brown Fly Fish, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-10">
            Fly Fishing Trips<br />from Knoxville, TN
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
          <p className="text-muted-foreground text-lg leading-relaxed">Fly fishing trips from Knoxville, TN to Bryson City take approximately 2.5 hours through Great Smoky Mountains National Park — making Mac Brown Fly Fish one of the closest world-class guided fly fishing destinations from Knoxville. The Nantahala River tailwater is one of the finest tailwater fisheries in the Southeast, and the wild streams of the Smokies offer technical freestone fishing for wild rainbow and brook trout within an easy drive from Knoxville. Guided trips start at <PriceTag priceKey="guidedWadeOrFloat" part="half" as="span" />. All gear provided, all skill levels welcome.</p>
              <p className="text-sm text-muted-foreground mt-4">Planning your trip? Check the {" "}<Link href="/bryson-city-fly-fishing-report-hatch-chart/" className="text-primary hover:underline font-medium">live hatch &amp; river report</Link>{" "}for current fly fishing conditions on WNC waters.</p>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Bryson City, NC</p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">Mac Brown Fly Fish offers fly fishing schools, guided fly fishing trips, and casting instruction for visitors from Knoxville — less than 2 hours to the wild trout streams of the Great Smoky Mountains in Bryson City, North Carolina. The original outfitter in Western North Carolina since 1987. Float trips, wade trips, schools, and casting instruction available year-round. All gear provided, all skill levels welcome.</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            Less Than Two Hours — World-Class Trout Water
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Knoxville anglers have one of the great fly fishing secrets of the eastern United States practically in their backyard — and most never fully explore it. Bryson City, North Carolina sits less than two hours from Knoxville on the North Carolina side of the Great Smoky Mountains, at the center of what serious anglers call the Trout Mecca of the South.
            </p>
            <p>
              Swain County holds more miles of quality wild trout water than any other county in North Carolina. Over 85% of the county is protected public land — the Great Smoky Mountains National Park and the Nantahala National Forest — which means the water stays cold, the fish stay wild, and the experience stays genuinely exceptional. Mac Brown Fly Fish has been guiding and teaching on this water since 1987, longer than any other fly fishing guide or outfitter in Western North Carolina.
            </p>
            <p>
              For Knoxville anglers this is an easy day trip. For those who want to make a weekend of it, Bryson City offers everything you need — great lodging, excellent food, and enough outdoor adventure to fill a week.
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
          <img src={img("/images/client-rainbow-1.webp")} srcSet={`${img("/images/client-rainbow-1-800.webp")} 800w, ${img("/images/client-rainbow-1.webp")} 1323w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Wild rainbow trout near Knoxville TN — Mac Brown Fly Fish, Bryson City NC" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/fall-pool-reflection.webp")} srcSet={`${img("/images/fall-pool-reflection-1280.webp")} 1280w, ${img("/images/fall-pool-reflection.webp")} 1600w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Smoky Mountains trout stream near Knoxville TN — Mac Brown Fly Fish" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Western North Carolina</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center leading-tight">
            The Water — Right Across the Mountain
          </h2>
          <p className="text-muted-foreground italic text-center mb-12 max-w-2xl mx-auto">
            World-class wild trout water within easy reach of Knoxville — here is what is available for a guided trip:
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
            Mac Brown Fly Fish offers the full spectrum of guided trips and fly fishing education — all departing from Bryson City, less than two hours from Knoxville.
          </p>
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

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Come Prepared</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            What to Bring
          </h2>
          <p className="text-muted-foreground text-center mb-10 leading-relaxed">
            All rods, reels, flies, leaders, and waders are provided. Just show up ready to fish. Here is what to bring from Knoxville:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {whatToBring.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-background border border-border p-4">
                <Check size={15} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
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
            The Smokies Are Right There — Come Fish Them Properly
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            Knoxville anglers have world-class trout fishing less than two hours away. Mac Brown has been guiding it since 1987. Stop driving past it and come fish it the right way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              Book Your Knoxville Trip <ArrowRight size={14} />
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
