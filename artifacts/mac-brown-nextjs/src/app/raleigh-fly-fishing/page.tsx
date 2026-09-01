import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

import { SchemaScript } from "@/components/schema-script";
import { cityTripSchema } from "@/lib/schema";
import { PriceTag } from "@/components/price-tag";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Guided Fly Fishing Trips & Clinics Near Raleigh NC" },
  description: "Raleigh anglers — escape to the mountains. Book a guided fly fishing trip with Mac Brown Fly Fish in Western North Carolina.",
  alternates: { canonical: "https://macbrownflyfish.com/raleigh-fly-fishing/" },
  openGraph: {
    title: "Fly Fishing Trips from Raleigh NC — Mac Brown Fly Fish",
    description: "Four hours west of Raleigh sits the finest wild trout water in North Carolina. Guided fly fishing on the Nantahala, Tuckasegee, and Smoky Mountains streams since 1987.",
    url: "https://macbrownflyfish.com/raleigh-fly-fishing/",
    images: [{ url: "https://macbrownflyfish.com/images/client-spring-brown.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fly Fishing Trips from Raleigh NC — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/client-spring-brown.webp"],
  },
};

const waters = [
  {
    name: "Tuckasegee River — Delayed Harvest",
    distance: "~4 hours from Raleigh",
    description:
      "The most popular guided water in Western NC. From October through May the Delayed Harvest section in Webster, NC loads up with exceptional trout numbers. Float trips and wade trips both available. The perfect introduction to Smoky Mountain fly fishing for Raleigh anglers making their first trip west.",
    highlight: "Best for: Float trips, wade trips, all skill levels, October through May",
  },
  {
    name: "Nantahala River",
    distance: "~4 hours from Raleigh",
    description:
      "The finest tailwater in North Carolina — and it is right here in your home state. Cold, clear, and productive every month of the year. Wild brown and rainbow trout in stunning mountain scenery. A fishery that serious NC anglers make the drive from Raleigh specifically to experience.",
    highlight: "Best for: Wild trout, technical fishing, year-round",
  },
  {
    name: "Great Smoky Mountains National Park Streams",
    distance: "~4 hours from Raleigh",
    description:
      "Wild mountain streams flowing through the most visited national park in America. Native brook trout in the high-elevation waters. Wild rainbow and brown trout throughout. Pristine and protected — everything that the put-and-take waters near Raleigh are not.",
    highlight: "Best for: Wild trout, backcountry adventure, pristine water",
  },
  {
    name: "Smoky Mountain Lakes",
    distance: "~4 hours from Raleigh",
    description:
      "Fontana Lake and the other mountain stillwaters offer exceptional fly fishing for large trout — especially from late fall through early spring. The fish run significantly larger than anything available on the rivers near Raleigh and fight with the strength of fish that have been swimming open water their entire lives.",
    highlight: "Best for: Trophy trout, stillwater fishing, fall through spring",
  },
];

const programs = [
  { title: "Guided Float Trips", desc: "Drift the Tuckasegee in a drift boat. The best way to experience the river.", link: "/guided-float-fly-fishing-trips" },
  { title: "Guided Wade Trips", desc: "Get in the water on the park streams or the Nantahala tailwater.", link: "/guided-wade-fly-fishing-trips" },
  { title: "Guided Lake Trips", desc: "Trophy trout on the Smoky Mountain stillwaters.", link: "/guided-lake-fly-fishing-trips" },
  { title: "Fly Casting Instruction", desc: "Private lessons from NC's only Master Casting Instructor. Guaranteed or free.", link: "/fly-casting-instruction" },
  { title: "Fly Fishing Schools", desc: "Weekend immersion programs — perfect for a Raleigh weekend getaway.", link: "/smoky-mountain-weekend-schools" },
  { title: "Group & Corporate Trips", desc: "Customized fly fishing experiences for Raleigh groups.", link: "/group-corporate-fly-fishing" },
  { title: "Backcountry Trips", desc: "Remote national park streams — wild fish, pristine wilderness.", link: "/backcountry-trout-fishing" },
  { title: "Online Casting Lessons", desc: "Get your casting ready in Raleigh before you make the drive.", link: "/fly-casting-instruction" },
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
  { q: "Is there fly fishing near me in Raleigh, NC?", a: "While the Triangle has warm water options, the best trout fly fishing is 4 hours west in Bryson City, NC. Raleigh anglers can enjoy guided trips on the Nantahala River tailwater, the Tuckasegee River Delayed Harvest, and the wild mountain streams of the Great Smoky Mountains National Park." },
  { q: "How far is Raleigh from fly fishing in the Smoky Mountains?", a: "Bryson City, NC is approximately 4 hours from Raleigh. The Tuckasegee River delayed harvest section in Webster, NC is even closer — one of the most productive guided trout fishing destinations in the eastern United States." },
  { q: "Do I need any gear or experience?", a: "No gear and no experience needed. Mac Brown Fly Fish provides everything — rods, reels, flies, leaders, and waders. Trips are tailored to your skill level whether you are a first-time fly fisher or a seasoned angler looking to sharpen a specific technique." },
  { q: "What rivers do guided fly fishing trips fish near Raleigh?", a: "The most popular options are the Tuckasegee River delayed harvest section, the Nantahala River, and the wild streams of Great Smoky Mountains National Park. Mac selects the water based on current conditions, the season, and your goals for the day." },
  { q: "What is the best time of year for a fly fishing trip from Raleigh?", a: "Spring and fall are the strongest seasons. The Tuckasegee delayed harvest section runs October through May with exceptional trout numbers. The Nantahala River and wild Smoky Mountain streams fish year-round. Summer fishing is best early morning before water temperatures rise." },
  { q: "Who leads the guided fly fishing trips?", a: "Trips are led by Mac Brown and his team — Mac is the only FFI Master Casting Instructor in North Carolina and has been guiding on these waters since 1987. Every trip is instructional, tailored to your goals, and built around your time on the water." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function RaleighFlyFishing() {
  return (
    <div className="w-full">
      <SchemaScript schema={cityTripSchema({ city: "Raleigh", state: "NC", description: "Raleigh anglers — escape to the mountains. Book a guided fly fishing trip with a fly fishing guide since 1987. Mac Brown Fly Fish offers expert instruction on the best trout water in Western North Carolina.", url: "/raleigh-fly-fishing", image: "https://macbrownflyfish.com/images/client-spring-brown.webp" })} />
      <SchemaScript schema={faqSchema} />
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/client-spring-brown.webp")}
          srcSet={`${img("/images/client-spring-brown-1280.webp")} 1280w, ${img("/images/client-spring-brown.webp")} 1920w`}
          sizes="100vw"
          alt="Guided fly fishing trips from Raleigh NC — Mac Brown Fly Fish, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-10">
            Fly Fishing Trips<br />from Raleigh, NC
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
          <p className="text-muted-foreground text-lg leading-relaxed">Fly fishing trips from Raleigh, NC to Bryson City take approximately 4.5 hours — making Mac Brown Fly Fish in the Smoky Mountains a natural long weekend destination for Raleigh-area anglers. The Tuckasegee River delayed harvest section and Nantahala River tailwater offer world-class guided fly fishing within a single day's drive from the Triangle. Mac Brown has been teaching fly casting at The Fly Fishing Show in Raleigh since 1994 — bringing Smoky Mountain expertise directly to the Raleigh market annually. Guided trips start at <PriceTag priceKey="guidedWadeOrFloat" part="half" as="span" />. All gear provided, all skill levels welcome.</p>
              <p className="text-sm text-muted-foreground mt-4">Planning your trip? Check the {" "}<Link href="/bryson-city-fly-fishing-report-hatch-chart/" className="text-primary hover:underline font-medium">live hatch &amp; river report</Link>{" "}for current fly fishing conditions on WNC waters.</p>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Bryson City, NC</p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">Mac Brown Fly Fish offers fly fishing schools, guided fly fishing trips, and casting instruction for visitors from Raleigh — approximately 4 hours to the wild trout streams of the Great Smoky Mountains in Bryson City, North Carolina. The original outfitter in Western North Carolina since 1987. Float trips, wade trips, schools, and casting instruction available year-round. All gear provided, all skill levels welcome.</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            Four Hours West — The Best Fly Fishing in North Carolina
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Raleigh anglers looking for world-class trout fishing do not need to leave the state. Four hours west on I-40 sits Bryson City — the county seat of Swain County and the undisputed Trout Mecca of the South. More miles of quality wild trout water than any other county in North Carolina. More protected public land than almost anywhere in the eastern United States. And the most experienced fly fishing guide operation in the region, in business since 1987.
            </p>
            <p>
              The drive from Raleigh through Asheville and into the Smoky Mountains is one of the most scenic in the state — and it ends at water that most Raleigh anglers have never experienced. Wild trout on cold mountain streams. Tailwater fishing on the Nantahala River. Float trips on the Tuckasegee. Backcountry streams deep in the national park. Make it a weekend and you will wonder why you waited so long.
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
          <img src={img("/images/client-nantahala-brown.webp")} alt="Nantahala River brown trout near Raleigh NC — Mac Brown Fly Fish" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-video overflow-hidden">
          <img src={img("/images/client-drift-brown.webp")} srcSet={`${img("/images/client-drift-brown-1280.webp")} 1280w, ${img("/images/client-drift-brown.webp")} 1800w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Guided float trip from Raleigh NC — Mac Brown Fly Fish, Bryson City NC" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Western North Carolina</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center leading-tight">
            The Water — The Best in Your Home State
          </h2>
          <p className="text-muted-foreground italic text-center mb-12 max-w-2xl mx-auto">
            The finest trout water in North Carolina — all within reach of a Raleigh day trip or weekend:
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
            Mac Brown Fly Fish offers the full spectrum of guided trips and instruction — all departing from Bryson City, four hours west of Raleigh.
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
            All rods, reels, flies, leaders, and waders are provided. Just show up ready to fish. Here is what to bring from Raleigh:
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
            The Finest Fly Fishing in North Carolina — Worth Every Mile
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            You live in North Carolina. The finest trout fishing in the state is four hours away. Mac Brown has been guiding it since 1987 — make the drive and find out what your home state has been keeping in the mountains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              Book Your Raleigh Trip <ArrowRight size={14} />
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
