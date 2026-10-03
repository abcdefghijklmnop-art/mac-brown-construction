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
      "name": "How far is Bryson City from Atlanta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bryson City, NC is approximately 3 hours north of Atlanta via I-575 North to US-76 East and US-74 West — an easy drive that puts you at the center of what serious anglers call the Trout Mecca of the South. Swain County holds more miles of quality wild trout water than any other county in North Carolina, all protected by the Great Smoky Mountains National Park and the Nantahala National Forest."
      }
    },
    {
      "@type": "Question",
      "name": "What fish can I catch on a guided trip from Atlanta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Guided trips from Atlanta target wild rainbow trout, wild brown trout, and native brook trout depending on the water chosen. The Tuckasegee River Delayed Harvest section produces high fish counts from October through May. The Nantahala River tailwater holds wild fish year-round. The wild streams of Great Smoky Mountains National Park offer pristine backcountry trout fishing — wild fish that have never been stocked, in water that is genuinely remote."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need fly fishing experience to book a trip from Atlanta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No experience is required. Mac Brown Fly Fish offers guided trips for complete beginners through advanced anglers — every trip is tailored to your skill level. Beginners build a genuine casting foundation and catch fish on their first day. Experienced anglers sharpen specific skills they have been unable to develop on their own. All rods, reels, flies, leaders, and waders are provided."
      }
    },
    {
      "@type": "Question",
      "name": "Is a day trip from Atlanta realistic for fly fishing in the Smokies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — many Atlanta anglers make the 3-hour drive for a single day on the water and return the same evening. A full-day guided trip runs approximately 8 hours on the water. A weekend trip is even more worthwhile — Bryson City offers excellent lodging, restaurants, and outdoor activities that make the drive from Atlanta genuinely rewarding beyond the fishing itself."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a guided fly fishing trip from Atlanta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book online at macbrownflyfish.com or call (828) 736-0019. Mac Brown Fly Fish has been guiding on the waters of Western North Carolina since 1987 — the original fly fishing guide service in the region and the most credentialed guide team in Western NC. All skill levels welcome. All gear provided."
      }
    },
    {
      "@type": "Question",
      "name": "Is there fly fishing near me in Atlanta, GA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While Atlanta has local options like the Chattahoochee, the best wild trout fly fishing near Atlanta is found 3 hours north in Bryson City, NC. Mac Brown Fly Fish offers guided trips on the Tuckasegee, Nantahala, and Great Smoky Mountains National Park streams."
      }
    }
  ]
};

export const metadata: Metadata = {
  title: { absolute: "Guided Fly Fishing Trips & Clinics Near Atlanta GA" },
  description: "Atlanta anglers — the Smoky Mountains are just 2 hours away. Book a guided fly fishing trip with Mac Brown Fly Fish in Western North Carolina.",
  alternates: { canonical: "https://macbrownflyfish.com/atlanta-fly-fishing/" },
  openGraph: {
    title: "Fly Fishing Trips from Atlanta GA — Mac Brown Fly Fish",
    description: "The finest wild trout water in the eastern United States is just three hours from Atlanta. Guided fly fishing on the Nantahala, Tuckasegee, and Smoky Mountains streams since 1987.",
    url: "https://macbrownflyfish.com/atlanta-fly-fishing/",
    images: [{ url: "https://macbrownflyfish.com/images/advanced-casting-class-atlanta-ga.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fly Fishing Trips from Atlanta GA — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/advanced-casting-class-atlanta-ga.webp"],
  },
};

const waters = [
  {
    name: "Tuckasegee River — Delayed Harvest",
    distance: "~3 hours from Atlanta",
    description: "The most popular guided water in the region. From October through May the Delayed Harvest section in Webster, NC loads up with exceptional numbers of trout. Float trips and wade trips both available. This is the water most Atlanta visitors fish first — and come back to every year.",
    highlight: "Best for: Float trips, wade trips, all skill levels, October through May",
  },
  {
    name: "Nantahala River",
    distance: "~3 hours from Atlanta",
    description: "The premier tailwater in the state of North Carolina. Cold, clear, and productive every month of the year. Wild brown and rainbow trout in one of the most beautiful mountain river corridors in the eastern United States. Worth the drive from Atlanta on its own.",
    highlight: "Best for: Wild trout, technical fishing, year-round",
  },
  {
    name: "Great Smoky Mountains National Park Streams",
    distance: "~3 hours from Atlanta",
    description: "Crystal-clear mountain streams flowing through the most visited national park in America. Wild native brook trout in the high-elevation streams. Wild rainbow and brown trout throughout. Pristine, protected, and genuinely wild — a world away from Atlanta in every sense.",
    highlight: "Best for: Wild trout, backcountry adventure, pristine water",
  },
  {
    name: "Smoky Mountain Lakes",
    distance: "~3 hours from Atlanta",
    description: "Fontana, Cheoah, and the other mountain lakes of the Smoky Mountains offer exceptional stillwater fly fishing for large trout — especially from late fall through early spring. Fish that run bigger and fight harder than anything available on the rivers.",
    highlight: "Best for: Trophy trout, stillwater fishing, fall through spring",
  },
];

const nearby = [
  { place: "Cherokee, NC", distance: "10 min from Bryson City" },
  { place: "Gatlinburg, TN", distance: "45 min from Bryson City" },
  { place: "Asheville, NC", distance: "~1 hour from Bryson City" },
  { place: "Atlanta, GA", distance: "~3 hours from Bryson City" },
];

const programs = [
  { title: "Guided Float Trips", desc: "Drift the Tuckasegee in a drift boat. Cover water, catch fish, learn the river.", link: "/guided-float-fly-fishing-trips" },
  { title: "Guided Wade Trips", desc: "Get in the water. Read the river. Fish it with intention and precision.", link: "/guided-wade-fly-fishing-trips" },
  { title: "Guided Lake Trips", desc: "Trophy trout on the stillwater lakes of the Smoky Mountains.", link: "/guided-lake-fly-fishing-trips" },
  { title: "Fly Casting Instruction", desc: "Private lessons from NC's only Master Casting Instructor. Guaranteed or free.", link: "/fly-casting-instruction" },
  { title: "Fly Fishing Schools", desc: "Weekend immersion programs — perfect for an Atlanta weekend trip.", link: "/smoky-mountain-weekend-schools" },
  { title: "Group & Corporate Trips", desc: "Customized fly fishing experiences for Atlanta groups of any size.", link: "/group-corporate-fly-fishing" },
  { title: "Backcountry Trips", desc: "Remote streams in the national park — wild fish, pristine wilderness.", link: "/backcountry-trout-fishing" },
  { title: "Online Casting Lessons", desc: "Get ready for your Smoky Mountain trip before you leave Atlanta.", link: "/fly-casting-instruction" },
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

export default function AtlantaFlyFishing() {
  return (
    <div className="w-full">
      <SchemaScript schema={cityTripSchema({ city: "Atlanta", state: "GA", description: "Atlanta anglers — the Smoky Mountains are just 2 hours away. Book a guided fly fishing trip with Mac Brown Fly Fish in Western North Carolina.", url: "/atlanta-fly-fishing", image: "https://macbrownflyfish.com/images/advanced-casting-class-atlanta-ga.webp" })} />
      <SchemaScript schema={faqSchema} />
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/fall-river-misty.webp")}
          srcSet={`${img("/images/fall-river-misty-1280.webp")} 1280w, ${img("/images/fall-river-misty.webp")} 1920w`}
          sizes="100vw"
          alt="Guided fly fishing trips from Atlanta GA — Mac Brown Fly Fish, Bryson City NC"
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
            Fly Fishing Trips<br />from Atlanta, GA
          </h1>
          <p className="text-white/70 text-base md:text-lg font-serif italic max-w-2xl">
            The finest wild trout water in the eastern United States is just three hours from Atlanta. Leave the city behind and spend a day on the rivers of the Great Smoky Mountains.
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
          <p className="text-muted-foreground text-lg leading-relaxed">Fly fishing trips from Atlanta reach world-class wild trout water in three hours — Bryson City, North Carolina sits at the center of what serious anglers call the Trout Mecca of the South. Mac Brown Fly Fish has been guiding on these waters since 1987 — the original fly fishing guide service in Western North Carolina, led by the only FFI Master Casting Instructor in the state. Swain County holds more miles of quality wild trout water than any other county in North Carolina, all protected by the Great Smoky Mountains National Park and the Nantahala National Forest. Float trips, wade trips, stillwater lake trips, and fly casting schools are all available — all departing from Bryson City, three hours from Atlanta. Guided trips start at <PriceTag priceKey="guidedWadeOrFloat" part="half" as="span" />. All gear provided, all skill levels welcome.</p>
              <p className="text-sm text-muted-foreground mt-4">Planning your trip? Check the {" "}<Link href="/bryson-city-fly-fishing-report-hatch-chart/" className="text-primary hover:underline font-medium">live hatch &amp; river report</Link>{" "}for current fly fishing conditions on WNC waters.</p>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Bryson City, NC</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            Book a Professional Fly Fishing Guide — Three Hours from Atlanta
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Atlanta anglers know the feeling — great rivers are out there, but finding the right water and the right guide takes time most people do not have. Bryson City, North Carolina sits just three hours north of Atlanta and at the center of what serious anglers call the Trout Mecca of the South. Swain County holds more miles of quality wild trout water than any other county in North Carolina — protected by the Great Smoky Mountains National Park and the Nantahala National Forest.
            </p>
            <p>
              Mac Brown Fly Fish has been guiding and teaching on these waters since 1987 — longer than any other outfitter in Western North Carolina. The drive from Atlanta is easy, the water is extraordinary, and the instruction available here is simply not found anywhere closer to home. Make it a weekend or a long day trip — either way the Smoky Mountains reward the effort completely.
            </p>
            <p>
              Every trip is tailored to your skill level and goals. Beginners build a genuine foundation. Experienced anglers sharpen specific skills. Every angler leaves knowing more than when they arrived.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/90 transition-colors w-full sm:w-fit">
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
          <img src={img("/images/client-fall-brown.webp")} srcSet={`${img("/images/client-fall-brown-800.webp")} 800w, ${img("/images/client-fall-brown.webp")} 1440w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Fall brown trout near Atlanta GA — Mac Brown Fly Fish, Bryson City NC" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/client-float-1.webp")} alt="Guided float trip from Atlanta GA — Mac Brown Fly Fish, Bryson City NC" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Western North Carolina</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center leading-tight">
            The Water — Worth Every Mile of the Drive
          </h2>
          <p className="text-muted-foreground italic text-center mb-12 max-w-2xl mx-auto">
            From tailwaters loaded with trout to remote backcountry streams in the national park — here is what awaits three hours from Atlanta:
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
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Plan Your Trip</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            Make It a Weekend — Bryson City is Worth the Trip
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
            <p>
              Three hours from Atlanta puts you in one of the finest small towns in the Appalachian Mountains. Bryson City offers excellent lodging, great restaurants, and a full menu of outdoor adventure beyond the fishing — world-class whitewater rafting on the Nantahala River, the Great Smoky Mountains Railroad, hundreds of waterfall hikes, Appalachian Trail access, mountain biking, and live music at the Nantahala Brewing Company.
            </p>
            <p>
              The Great Smoky Mountains National Park draws over 14 million visitors annually — more than any other national park in the country. Over 85% of Swain County is protected public land. The outdoor opportunities surrounding Bryson City are extraordinary and make a weekend trip from Atlanta genuinely worthwhile.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {nearby.map((loc, i) => (
              <div key={i} className="flex justify-between items-center bg-muted/30 border border-border p-5">
                <span className="font-semibold text-foreground">{loc.place}</span>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{loc.distance}</span>
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
          <p className="text-muted-foreground text-center leading-relaxed mb-12 max-w-2xl mx-auto">
            Mac Brown Fly Fish offers the full spectrum of guided trips and fly fishing education — all departing from Bryson City, three hours north of Atlanta.
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

      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Come Prepared</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            What to Bring
          </h2>
          <p className="text-muted-foreground text-center mb-10 leading-relaxed">
            All rods, reels, flies, leaders, and waders are provided. Just show up ready to fish. Here is what to bring from Atlanta:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {whatToBring.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-muted/30 border border-border p-4">
                <Check size={15} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/90 transition-colors w-full sm:w-fit">
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
            Three Hours from Atlanta — The Best Fly Fishing of Your Life
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            The Great Smoky Mountains have been producing world-class trout fishing since long before anyone was guiding it. Mac Brown has been guiding it since 1987. Plan your Atlanta escape to the Smokies — the water is waiting and so are we.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              Book Your Atlanta Trip <ArrowRight size={14} />
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
