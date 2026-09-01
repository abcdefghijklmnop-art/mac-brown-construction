import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

import { SchemaScript } from "@/components/schema-script";
import { serviceSchema } from "@/lib/schema";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Cherokee Trophy Trout Water — Guided Fly Fishing, NC" },
  description: "Fish the world-famous Cherokee Trophy Water with an expert guide. Some of the largest trout in the Eastern US live in these tailwater fisheries.",
  alternates: { canonical: "https://macbrownflyfish.com/cherokee-trophy-water/" },
  openGraph: {
    title: "Cherokee Trophy Water & Fly Fishing Near Cherokee NC — Mac Brown Fly Fish",
    description: "The original outfitter in Western NC since 1987. Guided trout fishing trips from Cherokee on the Oconaluftee, Nantahala, Tuckasegee, and Smoky Mountains streams.",
    url: "https://macbrownflyfish.com/cherokee-trophy-water/",
    images: [{ url: "https://macbrownflyfish.com/images/fall-river-fishing.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cherokee Trophy Water & Fly Fishing Near Cherokee NC — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/fall-river-fishing.webp"],
  },
};

const waters = [
  {
    name: "Great Smoky Mountains National Park Streams",
    distance: "Minutes from Cherokee",
    description: "The Oconaluftee River flows right through Cherokee and into the national park — one of the most accessible and productive wild trout streams in the region. Deep Creek, Noland Creek, Raven Fork above the trophy section, and dozens of other park streams offer outstanding wild rainbow and brown trout fishing in a pristine protected setting. Native brook trout in the high-elevation streams.",
    highlight: "Best for: Wild trout, accessible water, all seasons",
  },
  {
    name: "Tuckasegee River — Delayed Harvest",
    distance: "~15 minutes from Cherokee",
    description: "From October through May the Delayed Harvest section of the Tuckasegee in Webster, NC loads up with exceptional numbers of trout. A short drive from Cherokee and one of the most productive guided destinations in the region. Float trips and wade trips both available.",
    highlight: "Best for: Float trips, wade trips, October through May",
  },
  {
    name: "Nantahala River",
    distance: "~30 minutes from Cherokee",
    description: "The premier tailwater in the state of North Carolina. Cold, clear, and productive year-round, the Nantahala holds outstanding wild brown and rainbow trout in one of the most beautiful mountain river corridors in the eastern United States. A short drive from Cherokee and absolutely worth every mile.",
    highlight: "Best for: Wild trout, technical fishing, year-round",
  },
  {
    name: "Deep Creek — Bryson City",
    distance: "~15 minutes from Cherokee",
    description: "A beautiful walk-in stream flowing through the national park just outside Bryson City. Wild rainbow and brown trout in crystal-clear mountain water. One of the finest small stream dry fly fisheries in the Smokies during the spring hatch season.",
    highlight: "Best for: Small stream fishing, dry fly, spring hatches",
  },
  {
    name: "Fontana Lake",
    distance: "~20 minutes from Cherokee",
    description: "Fontana Lake sits just beyond Bryson City and offers exceptional stillwater fly fishing for trout — especially from late fall through early spring when the fish run large and the lake is quiet. A completely different experience from river fishing and one of the best-kept secrets near Cherokee.",
    highlight: "Best for: Trophy trout, stillwater fishing, fall through spring",
  },
];

const programs = [
  { title: "Guided Wade Trips", desc: "Get in the river on the Oconaluftee, Deep Creek, or any of the park streams right outside Cherokee.", link: "/guided-wade-fly-fishing-trips" },
  { title: "Guided Float Trips", desc: "Drift the Tuckasegee or Nantahala in a drift boat. Cover water and learn the river from the best seat in the house.", link: "/guided-float-fly-fishing-trips" },
  { title: "Guided Lake Trips", desc: "Trophy trout on Fontana Lake and the other Smoky Mountain stillwaters near Cherokee.", link: "/guided-lake-fly-fishing-trips" },
  { title: "Fly Casting Instruction", desc: "Private casting lessons for all skill levels from NC's only Master Casting Instructor.", link: "/fly-casting-instruction" },
  { title: "Backcountry Trips", desc: "Remote streams deep in the Great Smoky Mountains National Park — wild fish, pristine water, unforgettable wilderness.", link: "/backcountry-trout-fishing" },
  { title: "Fly Fishing Schools", desc: "Weekend immersion programs covering the full craft at our Bryson City base — just 10 minutes from Cherokee.", link: "/smoky-mountain-weekend-schools" },
];

const whatToBring = [
  "Rain gear — mountain weather changes fast",
  "Warm layers — mornings on the water can be cool",
  "Polarized sunglasses — essential for spotting fish",
  "A hat with a brim — sun and glare protection",
  "Sunscreen and lip balm",
  "Clothing in earth tones — blend into your surroundings",
  "Valid NC fishing license if over 16 — ncwildlife.org or 1-888-248-6834",
  "Cherokee Tribal fishing license if fishing reservation waters — available at stores throughout Cherokee, NC",
];

const faqItems = [
  { q: "Who guides fly fishing trips near Cherokee?", a: "Mac Brown is the only FFI Master Casting Instructor in North Carolina — the highest casting credential awarded by Fly Fishers International — and a certified casting examiner for FFI. He is the author of Casting Angles and has been guiding this region since 1987. Cherokee is 10 minutes from Bryson City — Mac Brown Fly Fish's home base — so Mac knows these waters better than anyone." },
  { q: "How far is Cherokee from the best fly fishing in Western NC?", a: "Cherokee is adjacent to Bryson City — about 10 minutes. The Tuckasegee River Delayed Harvest section in Webster is 15 minutes from Cherokee. Great Smoky Mountains National Park streams begin just north of town. And the Eastern Band of Cherokee Indians maintains Cherokee Trophy Waters on Raven Fork — world-class trophy trout fishing directly in Cherokee." },
  { q: "What are Cherokee Trophy Waters and do guided trips fish them?", a: "Cherokee Trophy Waters are the Eastern Band of Cherokee Indians' premium pay-to-fish waters on Raven Fork — stocked with trophy-class rainbow trout, brown trout, and brook trout well above standard size. A separate tribal fishing license is required, purchased from EBCI at stores in Cherokee. Mac Brown Fly Fish guides trips on Cherokee Trophy Waters as well as state-managed waters throughout the region." },
  { q: "What license do I need to fish near Cherokee?", a: "For state waters (Tuckasegee, GSMNP streams): a valid North Carolina Inland Fishing License (in-state or out-of-state) for all anglers 16 and older — no trout stamp in NC. For Cherokee Trophy Waters on Raven Fork: a separate tribal fishing license from the Eastern Band of Cherokee Indians, available at stores in Cherokee. Mac will advise on exactly what is needed based on where you are fishing." },
  { q: "What fish can I catch near Cherokee?", a: "Wild rainbow trout and brown trout on the Tuckasegee and GSMNP streams. Native brook trout on higher-elevation national park water. Trophy-class rainbow trout, brown trout, and brook trout on Cherokee Trophy Waters — some of the largest stocked trout in Western NC. Fontana Lake, 20 minutes from Cherokee, holds trophy brown trout, rainbows, and smallmouth bass." },
  { q: "Do I need gear or experience?", a: "No gear and no experience needed. Everything is provided — TFO rods, Scientific Anglers fly lines, all flies, leaders, and waders. Every trip is instructional and tailored to your skill level, whether you are a first-time fly fisher or an experienced angler looking to catch larger fish." },
  { q: "What is the best time of year to fish near Cherokee?", a: "The Tuckasegee Delayed Harvest section is at its best October through May. Cherokee Trophy Waters are stocked year-round and fish well in all seasons. GSMNP streams peak in spring and fall but hold wild trout throughout the year. Fall is the prime season for trophy brown trout moving into aggressive feeding patterns ahead of winter." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function CherokeeTrophyWater() {
  return (
    <div className="w-full">
      <SchemaScript schema={serviceSchema({ name: "Cherokee Trophy Water — Guided Fly Fishing", description: "Guided trout fishing on Cherokee Trophy Water and the Oconaluftee, Nantahala, and Tuckasegee rivers. Mac Brown Fly Fish — Bryson City, NC since 1987.", url: "/cherokee-trophy-water", image: "https://macbrownflyfish.com/images/fall-river-fishing.webp" })} />
      <SchemaScript schema={faqSchema} />
      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/fall-river-fishing.webp")}
          srcSet={`${img("/images/fall-river-fishing-1280.webp")} 1280w, ${img("/images/fall-river-fishing.webp")} 1440w`}
          sizes="100vw"
          alt="Guided fly fishing near Cherokee NC — Mac Brown Fly Fish, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-10">
            Cherokee Trophy Water<br />&amp; Fly Fishing Near Cherokee
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
          <p className="text-muted-foreground text-lg leading-relaxed">The Cherokee Trophy Waters on the Oconaluftee River in Cherokee, NC — 10 minutes from Bryson City — offer some of the largest stocked trout in Western North Carolina, managed specifically for trophy fish rather than numbers. A tribal fishing permit is required and available at local stores in Cherokee. Mac Brown Fly Fish guides trophy water trips for clients seeking the largest fish in the region — combining Cherokee Trophy Waters with the Tuckasegee River and Nantahala River for the most diverse guided trophy trout experience available in the Southeast.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Bryson City, NC</p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">Mac Brown Fly Fish offers fly fishing schools, guided fly fishing trips, and casting instruction for visitors from Cherokee — approximately 10 minutes to the wild trout streams of the Great Smoky Mountains in Bryson City, North Carolina. The original outfitter in Western North Carolina since 1987. Float trips, wade trips, schools, and casting instruction available year-round. All gear provided, all skill levels welcome.</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            Trophy Trout Water — Right Next Door to Bryson City
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Cherokee, NC is just a 10-minute drive from Bryson City — and the trout fishing surrounding it is extraordinary. Whether you are staying in Cherokee, visiting the national park, or simply looking for the finest guided fly fishing experience within reach of the eastern entrance to the Smokies, you have found the right place.
            </p>
            <p>
              Mac Brown Fly Fish has been guiding and teaching on the waters of Western North Carolina since 1987 — longer than any other outfitter in the region. The water within easy reach of Cherokee includes some of the most productive and most beautiful trout fishing in the eastern United States.
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

      {/* PHOTO DIVIDER */}
      <div className="grid grid-cols-2 gap-0">
        <div className="aspect-video overflow-hidden">
          <img
            src={img("/images/freestone-brown-trout.webp")}
            alt="Wild brown trout near Cherokee NC — Mac Brown Fly Fish"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="aspect-video overflow-hidden">
          <img
            src={img("/images/client-wading-1.webp")}
            srcSet={`${img("/images/client-wading-1-1280.webp")} 1280w, ${img("/images/client-wading-1.webp")} 1440w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Guided wade trip near Cherokee NC — Mac Brown Fly Fish, Bryson City NC"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* CHEROKEE TROPHY WATER INFO */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Ravens Fork Creek</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            About the Cherokee Trophy Water
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
            <p>
              The Cherokee Trophy Water on Ravens Fork Creek is one of the most unique fisheries in the Southeast. Beginning at the Blue Ridge Parkway bridge and running upstream approximately 2.2 miles, this fly fishing only section is stocked weekly throughout the year with trophy-sized trout ranging from 20 to 28 inches. It is among the most heavily stocked trophy fisheries in all of North America — and it holds a healthy population of wild fish alongside the hatchery fish.
            </p>
            <p>
              The Cherokee Nation maintains its own hatchery up Straight Fork to supply the volume of fish required to keep this extraordinary fishery producing year-round. The fish behavior follows a predictable pattern familiar to anyone who has fished Delayed Harvest waters — newly stocked fish are aggressive and will eat nearly anything, while fishing pressure over time produces increasingly selective trout that reward precise presentation and good technique.
            </p>
          </div>

          {/* REGULATIONS NOTE */}
          <div className="border-l-4 border-primary bg-primary/5 p-6">
            <h3 className="font-serif text-lg font-bold text-foreground mb-3">
              Important — Cherokee Reservation Fishing Regulations
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Current regulations require that anyone fishing Cherokee Tribal waters must hire a guide who is a citizen of the Cherokee Nation. Mac Brown Fly Fish is not able to guide the reservation waters under these regulations. A special tribal license is also required to fish all Cherokee waters and is available at stores throughout Cherokee, NC.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The outstanding news is that the wild trout water immediately surrounding Cherokee — the Great Smoky Mountains National Park streams, the Tuckasegee River, the Nantahala River, and the broader network of Western NC tailwaters — is fully accessible and just minutes away. That is where we come in.
            </p>
          </div>
        </div>
      </section>

      {/* PUBLIC WATER NEAR CHEROKEE */}
      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Western North Carolina</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center leading-tight">
            World-Class Public Water — Minutes from Cherokee
          </h2>
          <p className="text-muted-foreground italic text-center mb-12 max-w-2xl mx-auto">
            The water within easy reach of Cherokee is genuinely extraordinary. Here is what is available for a guided trip:
          </p>
          <div className="space-y-4">
            {waters.map((water, i) => (
              <div key={i} className="bg-background border border-border p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-xl font-bold text-foreground">{water.name}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary border border-primary/30 px-3 py-1">
                    {water.distance}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3">{water.description}</p>
                <p className="text-sm font-semibold text-primary italic">{water.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Programs</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            Every Way to Experience the Water Near Cherokee
          </h2>
          <p className="text-muted-foreground text-center leading-relaxed mb-12 max-w-2xl mx-auto">
            Mac Brown Fly Fish offers the full spectrum of guided trips and fly fishing education for visitors to the Cherokee area — all departing from Bryson City, just 10 minutes away.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {programs.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="bg-background border border-border p-6 hover:border-primary/40 transition-colors block"
              >
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO BRING */}
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

      {/* CTA */}
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
            The Finest Trout Fishing in the Southeast — Minutes from Cherokee
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            Mac Brown has been guiding and teaching on these waters since 1987 — longer than anyone else in Western North Carolina. The experience, the knowledge, and the water are all here waiting. The only thing missing is you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reserve"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Book Your Cherokee Trip <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+18287360019"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              <Phone size={14} /> (828) 736-0019
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
