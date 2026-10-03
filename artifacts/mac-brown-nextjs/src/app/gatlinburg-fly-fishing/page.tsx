import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

import { SchemaScript } from "@/components/schema-script";
import { cityTripSchema } from "@/lib/schema";
import { PriceTag } from "@/components/price-tag";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Guided Fly Fishing Trips & Clinics Near Gatlinburg TN" },
  description: "Guided fly fishing trips in and around Gatlinburg, TN. Fish the wild streams of the Great Smoky Mountains with Mac Brown Fly Fish.",
  alternates: { canonical: "https://macbrownflyfish.com/gatlinburg-fly-fishing/" },
  openGraph: {
    title: "Fly Fishing Trips from Gatlinburg TN — Mac Brown Fly Fish",
    description: "Bryson City is just 45 minutes from Gatlinburg. Guided fly fishing on the Nantahala, Tuckasegee, and NC-side Smoky Mountains streams with Mac Brown Fly Fish since 1987.",
    url: "https://macbrownflyfish.com/gatlinburg-fly-fishing/",
    images: [{ url: "https://macbrownflyfish.com/images/appalachian-panorama.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fly Fishing Trips from Gatlinburg TN — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/appalachian-panorama.webp"],
  },
};

const waters = [
  {
    name: "Tuckasegee River — Delayed Harvest",
    distance: "~45 minutes from Gatlinburg",
    description: "From October through May the Delayed Harvest section of the Tuckasegee in Webster, NC is one of the most productive guided fisheries in the region. Float trips and wade trips both available. A short drive from Gatlinburg and one of the finest trout fishing days available anywhere in the Southeast.",
    highlight: "Best for: Float trips, wade trips, October through May",
  },
  {
    name: "Nantahala River",
    distance: "~1 hour from Gatlinburg",
    description: "The top tailwater in North Carolina — cold, clear, and productive every day of the year. Wild brown and rainbow trout in a stunning mountain river setting. A short drive from Gatlinburg and worth every mile for the angler who wants genuine wild trout on a world-class tailwater.",
    highlight: "Best for: Wild trout, technical fishing, year-round",
  },
  {
    name: "Great Smoky Mountains National Park — NC Side",
    distance: "~45 minutes from Gatlinburg",
    description: "Deep Creek, Noland Creek, the Oconaluftee, and dozens of other NC-side park streams offer outstanding wild trout fishing in a protected wilderness setting. Native brook trout in the high-elevation streams. Wild rainbow and brown trout throughout. Often less crowded than the popular Tennessee-side waters.",
    highlight: "Best for: Wild trout, less pressure, pristine water",
  },
  {
    name: "Smoky Mountain Lakes",
    distance: "~1 hour from Gatlinburg",
    description: "Fontana Lake and the other Smoky Mountain stillwaters offer exceptional fly fishing for large trout — especially from late fall through early spring. A completely different experience from the streams and one of the best-kept secrets within easy reach of Gatlinburg.",
    highlight: "Best for: Trophy trout, stillwater fishing, fall through spring",
  },
];

const programs = [
  { title: "Guided Float Trips", desc: "Drift the Tuckasegee from a drift boat. Cover water and learn the river.", link: "/guided-float-fly-fishing-trips" },
  { title: "Guided Wade Trips", desc: "Get in the water on the NC-side park streams or the Nantahala.", link: "/guided-wade-fly-fishing-trips" },
  { title: "Guided Lake Trips", desc: "Trophy trout on Fontana Lake and the Smoky Mountain stillwaters.", link: "/guided-lake-fly-fishing-trips" },
  { title: "Fly Casting Instruction", desc: "Private lessons from NC's only Master Casting Instructor.", link: "/fly-casting-instruction" },
  { title: "Fly Fishing Schools", desc: "Weekend schools — the perfect Gatlinburg area add-on experience.", link: "/smoky-mountain-weekend-schools" },
  { title: "Backcountry Trips", desc: "Remote streams deep in the national park — a world away from the tourist strip.", link: "/backcountry-trout-fishing" },
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
  { q: "Is there fly fishing near me in Gatlinburg, TN?", a: "Yes, there is exceptional fly fishing near Gatlinburg. While the Tennessee-side park streams are close, the North Carolina side — just 45 minutes over the mountain in Bryson City — offers world-class fishing on the Nantahala River tailwater and the Tuckasegee River Delayed Harvest section, which often provide better results than heavily pressured local waters." },
  { q: "How far is Gatlinburg from fly fishing in the Smoky Mountains?", a: "Bryson City, NC is approximately 45 minutes from Gatlinburg. The Tuckasegee River delayed harvest section in Webster, NC is even closer — one of the most productive guided trout fishing destinations in the eastern United States." },
  { q: "Do I need any gear or experience?", a: "No gear and no experience needed. Mac Brown Fly Fish provides everything — rods, reels, flies, leaders, and waders. Trips are tailored to your skill level whether you are a first-time fly fisher or a seasoned angler looking to sharpen a specific technique." },
  { q: "What rivers do guided fly fishing trips fish near Gatlinburg?", a: "The most popular options are the Tuckasegee River delayed harvest section, the Nantahala River, and the wild streams of Great Smoky Mountains National Park. Mac selects the water based on current conditions, the season, and your goals for the day." },
  { q: "What is the best time of year for a fly fishing trip from Gatlinburg?", a: "Spring and fall are the strongest seasons. The Tuckasegee delayed harvest section runs October through May with exceptional trout numbers. The Nantahala River and wild Smoky Mountain streams fish year-round. Summer fishing is best early morning before water temperatures rise." },
  { q: "Who leads the guided fly fishing trips?", a: "Trips are led by Mac Brown and his team — Mac is the only FFI Master Casting Instructor in North Carolina and has been guiding on these waters since 1987. Every trip is instructional, tailored to your goals, and built around your time on the water." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function GatlinburgFlyFishing() {
  return (
    <div className="w-full">
      <SchemaScript schema={cityTripSchema({ city: "Gatlinburg", state: "TN", description: "Guided fly fishing trips in and around Gatlinburg, TN. Fish the wild streams of the Great Smoky Mountains with a fly fishing guide since 1987. Mac Brown Fly Fish offers expert instruction and access to the NC-side of the Smokies.", url: "/gatlinburg-fly-fishing", image: "https://macbrownflyfish.com/images/appalachian-panorama.webp" })} />
      <SchemaScript schema={faqSchema} />
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/appalachian-panorama.webp")}
          srcSet={`${img("/images/appalachian-panorama-1280.webp")} 1280w, ${img("/images/appalachian-panorama.webp")} 1920w`}
          sizes="100vw"
          alt="Guided fly fishing trips from Gatlinburg TN — Mac Brown Fly Fish, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-10">
            Fly Fishing Trips<br />from Gatlinburg, TN
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
          <p className="text-muted-foreground text-lg leading-relaxed">Fly fishing trips from Gatlinburg, TN to Bryson City take approximately 45 minutes through Great Smoky Mountains National Park — making Mac Brown Fly Fish the closest world-class guided fly fishing destination from Gatlinburg. The Tuckasegee River delayed harvest section and Nantahala River tailwater offer significantly better guided trout fishing than the heavily pressured streams immediately around Gatlinburg. Bryson City is the trout mecca of the Smoky Mountains — Swain County encompasses over 2,900 miles of wild trout water. Guided trips start at <PriceTag priceKey="guidedWadeOrFloat" part="half" as="span" />. All gear provided, all skill levels welcome.</p>
              <p className="text-sm text-muted-foreground mt-4">Planning your trip? Check the {" "}<Link href="/bryson-city-fly-fishing-report-hatch-chart/" className="text-primary hover:underline font-medium">live hatch &amp; river report</Link>{" "}for current fly fishing conditions on WNC waters.</p>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Bryson City, NC</p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">Mac Brown Fly Fish offers fly fishing schools, guided fly fishing trips, and casting instruction for visitors from Gatlinburg — approximately 45 minutes to the wild trout streams of the Great Smoky Mountains in Bryson City, North Carolina. The original outfitter in Western North Carolina since 1987. Float trips, wade trips, schools, and casting instruction available year-round. All gear provided, all skill levels welcome.</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            45 Minutes Over the Mountain — A Completely Different World
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Gatlinburg sits on the Tennessee side of the Great Smoky Mountains — and just 45 minutes over Newfound Gap on the North Carolina side is Bryson City, the Trout Mecca of the South. While Gatlinburg offers incredible national park access and mountain scenery, the guided fly fishing on the NC side of the Smokies is in a completely different league from anything available on the Tennessee side.
            </p>
            <p>
              Swain County, NC holds more miles of quality wild trout water than any other county in the state. The Nantahala River — the premier tailwater in North Carolina — is just 30 minutes from Bryson City. The Tuckasegee Delayed Harvest runs right through town. And the Great Smoky Mountains National Park streams on the NC side offer some of the finest wild trout fishing anywhere in the Appalachians.
            </p>
            <p>
              Mac Brown Fly Fish has been guiding and teaching on these waters since 1987 — a fly fishing guide with nearly four decades on the NC side of the park. A day trip from Gatlinburg is easy, the fishing is exceptional, and the instruction here is simply not available anywhere on the Tennessee side of the mountain.
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
          <img src={img("/images/client-brown-1.webp")} srcSet={`${img("/images/client-brown-1-800.webp")} 800w, ${img("/images/client-brown-1.webp")} 1440w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Brown trout near Gatlinburg TN — Mac Brown Fly Fish, Bryson City NC" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/tuckasegee-summer.webp")} srcSet={`${img("/images/tuckasegee-summer-1280.webp")} 1280w, ${img("/images/tuckasegee-summer.webp")} 1920w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Tuckasegee River near Gatlinburg TN — Mac Brown Fly Fish" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Western North Carolina</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center leading-tight">
            The Water — 45 Minutes from Your Gatlinburg Door
          </h2>
          <p className="text-muted-foreground italic text-center mb-12 max-w-2xl mx-auto">
            World-class trout water on the NC side of the Smokies — within easy reach of Gatlinburg:
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
            Mac Brown Fly Fish offers the full spectrum of guided trips and instruction — all departing from Bryson City, just 45 minutes from Gatlinburg.
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
            All rods, reels, flies, leaders, and waders are provided. Just show up ready to fish. Here is what to bring from Gatlinburg:
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
            45 Minutes Over the Mountain — The Best Fly Fishing in the Smokies
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            You came to the Smokies. The finest fly fishing in the region is just over the mountain on the NC side. Mac Brown has been guiding it since 1987 — make a day of it and find out what the other side of the mountain has been keeping secret.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              Book Your Gatlinburg Trip <ArrowRight size={14} />
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
