import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

import { SchemaScript } from "@/components/schema-script";
import { cityTripSchema } from "@/lib/schema";
import { PriceTag } from "@/components/price-tag";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Guided Fly Fishing Trips & Clinics Near Sylva NC" },
  description: "Guided fly fishing trips near Sylva, NC. Bryson City is just 15 minutes away — the Tuckasegee, Nantahala, and wild mountain streams await.",
  alternates: { canonical: "https://macbrownflyfish.com/sylva-nc-fly-fishing/" },
  openGraph: {
    title: "Sylva NC Fly Fishing — Mac Brown Fly Fish",
    description: "World-class fly fishing 15 minutes from Sylva NC. Guided trips with Mac Brown Fly Fish.",
    url: "https://macbrownflyfish.com/sylva-nc-fly-fishing/",
    images: [{ url: "https://macbrownflyfish.com/images/tuckasegee-summer.webp" }],
  },
};

const waters = [
  { name: "Tuckasegee River — Delayed Harvest (Webster, NC)", distance: "~10 min from Sylva", description: "The Tuckasegee flows right through Jackson County — and the Delayed Harvest section in Webster, NC is practically next door to Sylva. From October through May, this is the finest guided trout water in Western NC: float trips, wade trips, and fish in extraordinary numbers.", highlight: "Best for: Float trips, wade trips, all skill levels, October through May" },
  { name: "Tuckasegee River — Year-Round", distance: "Minutes from Sylva", description: "The upper Tuckasegee above the DH section offers excellent wild trout fishing year-round — more technical, less pressure, and bigger fish on average. For Sylva residents, this is local water that fishes brilliantly for those who know where to look.", highlight: "Best for: Wild trout, technical fishing, year-round" },
  { name: "Nantahala River", distance: "~30 min from Sylva", description: "The premier tailwater in North Carolina is just 30 minutes from Sylva. Cold, clear, productive year-round. The best wild trout fishing in the state is practically at your doorstep.", highlight: "Best for: Wild trout, technical fishing, year-round" },
  { name: "Great Smoky Mountains National Park Streams", distance: "~25 min from Sylva", description: "Wild mountain streams in the national park — native brook trout in the headwaters, wild rainbow and brown trout throughout. Easily accessible from Sylva via Deep Creek, Noland Creek, and dozens of other park access points.", highlight: "Best for: Wild trout, backcountry adventure, local day trips" },
];

const programs = [
  { title: "Guided Float Trips", desc: "Drift the Tuckasegee — right in your backyard.", link: "/guided-float-fly-fishing-trips" },
  { title: "Guided Wade Trips", desc: "Mountain streams and the Nantahala tailwater.", link: "/guided-wade-fly-fishing-trips" },
  { title: "Fly Casting Instruction", desc: "Private lessons from NC's only Master Casting Instructor.", link: "/fly-casting-instruction" },
  { title: "Fly Fishing Schools", desc: "Weekend immersion programs — 15 minutes from home.", link: "/smoky-mountain-weekend-schools" },
  { title: "Guided Lake Trips", desc: "Trophy trout on Fontana and the mountain stillwaters.", link: "/guided-lake-fly-fishing-trips" },
  { title: "Fly Fishing Guide School", desc: "The flagship program — four days of complete immersion.", link: "/fly-fishing-guide-school" },
];

const whatToBring = [
  "Rain gear — mountain weather changes fast", "Warm layers — mornings on the water can be cool",
  "Polarized sunglasses — essential for spotting fish", "A hat with a brim — sun and glare protection",
  "Sunscreen and lip balm", "Clothing in earth tones — blend into your surroundings",
  "Valid NC fishing license if over 16 — ncwildlife.org or 1-888-248-6834",
];

const faqItems = [
  { q: "Who guides the fly fishing trips from Sylva?", a: "Mac Brown is the only FFI Master Casting Instructor in North Carolina — the highest casting credential awarded by Fly Fishers International — and a certified casting examiner for FFI. He is the author of Casting Angles and has been guiding Jackson County's trout water since 1987. Mac Brown Fly Fish is the original independent guide service in Western NC — no other outfitter in the region has been guiding this water longer or knows it better." },
  { q: "How far is Sylva from the best fly fishing in the Smoky Mountains?", a: "Bryson City, NC is approximately 15 minutes from Sylva — one of the closest major towns to the finest guided trout fishing in the Southeast. The Tuckasegee River Delayed Harvest section in Webster is a 10-minute drive from downtown Sylva. Great Smoky Mountains National Park streams are 20–30 minutes. For Sylva residents and visitors, exceptional fly fishing is essentially local." },
  { q: "What waters do guided fly fishing trips fish from Sylva?", a: "The most popular choice for Sylva anglers is the Tuckasegee River Delayed Harvest section in Webster — 10 minutes from downtown and loaded with rainbow and brown trout October through May. The upper Tuckasegee offers wild trout fishing year-round. GSMNP streams provide native brook trout and wild rainbows in pristine mountain water. Mac selects the water based on conditions, season, and your goals." },
  { q: "Do I need gear or experience?", a: "No gear and no experience needed. Everything is provided — TFO rods, Scientific Anglers fly lines, all flies, leaders, and waders. Trips are fully instructional and tailored to your skill level whether you have never held a fly rod or have been fishing for years." },
  { q: "What is the best time of year for a fly fishing trip from Sylva?", a: "Fall and spring are the strongest seasons. The Tuckasegee Delayed Harvest section runs October through May with the best trout numbers of the year. Wild stream and national park fishing is excellent spring through early summer and again in fall. Summer fishing is productive early morning before river temperatures climb." },
  { q: "Is a fishing license required?", a: "Yes — a valid North Carolina Inland Fishing License (in-state or out-of-state) is required for all anglers 16 and older. There is no trout stamp in NC. For out-of-state visitors fishing the Tuckasegee River between October and May, the Mountain Heritage Trout Waters Day License is a cheaper optional alternative — not required, just a money-saving option. Purchase at ncwildlife.org or any sporting goods store in Sylva or Bryson City." },
  { q: "Are lunches included and what should I bring?", a: "Lunches are not included on guided trips. Bring snacks, water, and a lunch for full-day trips. Rain gear is essential — mountain weather changes fast. Polarized sunglasses and a brimmed hat are important for spotting fish. Clothing in earth tones. Wading shoes or boots if you have them — waders are provided. Payment in full at booking; Zelle, Venmo, and personal check accepted to avoid processing fees." },
  { q: "Is there fly fishing near me in Sylva, NC?", a: "Yes — the Tuckasegee River flows right through Sylva. Mac Brown Fly Fish provides guided float and wade trips on the Tuckasegee Delayed Harvest section in Webster, which is practically next door to downtown Sylva." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function SylvaNCFlyFishing() {
  return (
    <div className="w-full">
      <SchemaScript schema={cityTripSchema({ city: "Sylva", state: "NC", description: "Guided fly fishing trips near Sylva, North Carolina, led by Mac Brown — the only FFI Master Casting Instructor in North Carolina and a certified casting examiner for Fly Fishers International. Sylva is 15 minutes from Bryson City and the Tuckasegee River Delayed Harvest section — some of the most productive guided trout water in Western North Carolina. Mac has been guiding Jackson County anglers on the Tuckasegee, Nantahala, and GSMNP streams since 1987. All rods, reels, flies, and terminal tackle provided. All skill levels welcome.", url: "/sylva-nc-fly-fishing", image: "https://macbrownflyfish.com/images/tuckasegee-summer.webp" })} />
      <SchemaScript schema={faqSchema} />
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img src={img("/images/tuckasegee-summer.webp")} srcSet={`${img("/images/tuckasegee-summer-1280.webp")} 1280w, ${img("/images/tuckasegee-summer.webp")} 1920w`} sizes="100vw" alt="Guided fly fishing near Sylva NC — Mac Brown Fly Fish, Bryson City NC" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-10">Sylva NC<br />Fly Fishing</h1>
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
          <p className="text-muted-foreground text-lg leading-relaxed">Fly fishing near Sylva, NC puts you 15 minutes from the Tuckasegee River Delayed Harvest section in Webster — some of the most productive guided trout water in the Southeast. Mac Brown is the only FFI Master Casting Instructor in North Carolina and has been guiding Sylva-area anglers on the Tuckasegee, Nantahala River, and wild streams of Great Smoky Mountains National Park since 1987. Guided trips start at $700 half day — all gear provided, 1–2 anglers at the same rate, all skill levels welcome.</p>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Jackson County, NC</p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">Mac Brown Fly Fish offers fly fishing schools, guided fly fishing trips, and casting instruction for visitors from Sylva — just 15 minutes to the wild trout streams of the Great Smoky Mountains in Bryson City, North Carolina. The original outfitter in Western North Carolina since 1987. Float trips, wade trips, schools, and casting instruction available year-round. Guided trips start at <PriceTag priceKey="guidedWadeOrFloat" part="half" as="span" />. All gear provided, all skill levels welcome.</p>
              <p className="text-sm text-muted-foreground mt-4">Planning your trip? Check the {" "}<Link href="/bryson-city-fly-fishing-report-hatch-chart/" className="text-primary hover:underline font-medium">live hatch &amp; river report</Link>{" "}for current fly fishing conditions on WNC waters.</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">Find a Professional Fly Fishing Guide in Sylva</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>Sylva sits in the heart of Jackson County — and the Tuckasegee River runs right through it. The Delayed Harvest section in Webster is 10 minutes away. The Nantahala River is 30 minutes west. The Great Smoky Mountains National Park streams are 25 minutes east. For Sylva residents and visitors, the fly fishing is not a destination — it is literally out the front door.</p>
            <p>Mac Brown Fly Fish is based 15 minutes from Sylva in Bryson City — the center of the finest trout water in the eastern United States. Guided trips, fly casting instruction, weekend schools, and the 4-day Guide School are all available to Sylva anglers who want to fish these waters with someone who has been guiding them for nearly 40 years.</p>
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
        <div className="aspect-square overflow-hidden"><img src={img("/images/client-float-1.webp")} alt="Tuckasegee River float trip near Sylva NC" className="w-full h-full object-cover" loading="lazy" /></div>
        <div className="aspect-square overflow-hidden"><img src={img("/images/client-rainbow-1.webp")} srcSet={`${img("/images/client-rainbow-1-800.webp")} 800w, ${img("/images/client-rainbow-1.webp")} 1323w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Wild rainbow trout in Jackson County NC" className="w-full h-full object-cover object-top" loading="lazy" /></div>
      </div>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-10 text-center">Waters Around Sylva</h2>
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
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-10 text-center">Programs Available Near Sylva</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map(p => (
              <Link key={p.link} href={p.link} className="bg-white border border-border p-6 hover:border-primary/40 transition-colors block">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Learn more →</span>
              </Link>
            ))}
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Fish Your Own Backyard — Properly</h2>
          <p className="text-white/70 leading-relaxed mb-10">15 minutes from Sylva. The best guided fishing on the Tuckasegee. Let's talk about what the water is doing right now.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">Inquire & Book <ArrowRight size={14} /></Link>
            <a href="tel:+18287360019" className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"><Phone size={14} /> (828) 736-0019</a>
          </div>
        </div>
      </section>
    </div>
  );
}
