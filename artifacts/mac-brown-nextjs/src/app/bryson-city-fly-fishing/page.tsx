import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

import { SchemaScript } from "@/components/schema-script";
import { cityTripSchema, faqPageSchema } from "@/lib/schema";
import { PriceTag } from "@/components/price-tag";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Bryson City NC Fly Fishing — Guided Trips & Schools | Mac Brown Fly Fish" },
  description: "Bryson City, NC is the fly fishing capital of the Smoky Mountains. Guided trout fishing trips on the Tuckasegee, Nantahala, and GSMNP streams with Mac Brown Fly Fish since 1987.",
  alternates: { canonical: "https://macbrownflyfish.com/bryson-city-fly-fishing/" },
  openGraph: {
    title: "Bryson City NC Fly Fishing — Mac Brown Fly Fish",
    description: "Guided fly fishing trips, casting instruction, and multi-day schools based in Bryson City, NC. The original outfitter in Western North Carolina since 1987.",
    url: "https://macbrownflyfish.com/bryson-city-fly-fishing/",
    images: [{ url: "https://macbrownflyfish.com/images/guide-trip-1.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryson City NC Fly Fishing — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/guide-trip-1.webp"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best fly fishing near Bryson City, NC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bryson City sits at the center of the finest concentration of wild trout water in the eastern United States. The Tuckasegee River Delayed Harvest section in Webster is minutes from downtown and is loaded with trout from October through May. The Nantahala River — the premier tailwater in North Carolina — is 20 minutes away and fishes year-round. The wild mountain streams of Great Smoky Mountains National Park begin just outside of town and offer native brook trout and wild rainbow and brown trout in pristine backcountry settings. Swain County holds more miles of quality trout water than any other county in North Carolina.",
      },
    },
    {
      "@type": "Question",
      name: "Is Bryson City, NC a good place to fly fish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bryson City is widely considered the fly fishing capital of the Smoky Mountains and one of the best trout fishing destinations in the eastern United States. Serious anglers call Swain County — where Bryson City is the county seat — the Trout Mecca of the South. Over 85% of the county is protected public land through the Great Smoky Mountains National Park and the Nantahala National Forest, which means the water stays wild, cold, and productive year-round.",
      },
    },
    {
      "@type": "Question",
      name: "What rivers can you fly fish on a guided trip from Bryson City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "From Bryson City, guided trips access the Tuckasegee River Delayed Harvest section (float and wade trips, 10 minutes from town), the Nantahala River tailwater (20 minutes, wild trout year-round), the wild streams of Great Smoky Mountains National Park including Deep Creek, Noland Creek, Forney Creek, and the Oconaluftee River, and the stillwater lakes including Fontana Lake and Cheoah Lake for trophy trout. Mac Brown Fly Fish has been guiding all of this water since 1987.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best time of year to fly fish in Bryson City, NC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bryson City offers year-round trout fishing, but spring (March through May) and fall (September through November) are the strongest overall seasons. The Tuckasegee Delayed Harvest section runs October through May and is the most productive winter fishery in the region. The Nantahala River and Great Smoky Mountains National Park streams fish well year-round. Summer offers excellent early morning fishing on the mountain streams and backcountry creeks. Fall brings the best dry fly fishing of the year as leaves turn and trout become aggressive before winter.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a guided fly fishing trip in Bryson City cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guided float trips and wade trips on the Tuckasegee and Nantahala run $700 per day for one angler, $800 for two. Guided lake trips are $875. Private fly casting instruction is $400 per session. All gear — rods, reels, flies, leaders, and waders — is included in every guided trip. No additional gear purchase is necessary. Contact Mac Brown Fly Fish directly for current pricing and availability.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need experience to book a guided fly fishing trip in Bryson City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No experience is necessary. Mac Brown Fly Fish guides and teaches anglers at every skill level — from complete beginners picking up a fly rod for the first time to advanced anglers looking to sharpen specific techniques. Every trip is tailored to your current skill level and goals. All gear is provided. Beginners consistently catch fish on their first guided trip.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a guided fly fishing trip from Bryson City, NC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every guided trip includes all rods, reels, flies, leaders, and waders. Float trips include the drift boat and shuttle. The guide provides continuous instruction throughout the day covering fly casting, water reading, fly selection, presentation, and fish-fighting technique. All you need to bring is a valid North Carolina fishing license (available at ncwildlife.org or 1-888-248-6834), appropriate clothing, polarized sunglasses, and lunch.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Mac Brown and why is he considered the best fly fishing guide in Bryson City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mac Brown is a Federation of Fly Fishers (FFF) Master Casting Instructor — one of fewer than 50 in the world — and has been guiding and teaching in Bryson City since 1987, longer than any other outfitter in Western North Carolina. He is widely considered the foremost fly fishing instructor in the Southeast, a published author, national casting competitor, and the go-to guide for visiting anglers who want genuine instruction alongside a great day of fishing. Mac Brown Fly Fish has been the original outfitter in Western NC for over 35 years.",
      },
    },
  ],
};

const faqs = [
  {
    q: "Who is Mac Brown and why book with Mac Brown Fly Fish?",
    a: "Mac Brown is the only FFI Master Casting Instructor in North Carolina — the highest casting credential awarded by Fly Fishers International — and a certified casting examiner for FFI. He is the author of Casting Angles and has been guiding and teaching on the waters of Bryson City since 1987. No other guide service in Western NC has been on this water longer or knows it more intimately.",
  },
  {
    q: "What is the best fly fishing near Bryson City, NC?",
    a: "Bryson City sits at the center of the finest concentration of wild trout water in the eastern United States. The Tuckasegee River Delayed Harvest section is minutes from downtown and loaded with trout from October through May. The Nantahala River — the premier tailwater in North Carolina — is 20 minutes away and fishes year-round. The wild mountain streams of Great Smoky Mountains National Park begin just outside of town and offer native brook trout and wild rainbow and brown trout in pristine backcountry settings.",
  },
  {
    q: "What fish will we catch on a guided trip from Bryson City?",
    a: "Wild rainbow trout and brown trout on float and wade trips. Native brook trout on GSMNP wild streams at higher elevations. Trophy brown trout, rainbow trout, and smallmouth bass on Fontana and Cheoah lakes. During Delayed Harvest season (October through May), exceptional numbers of stocked rainbow and brown trout mix with wild fish throughout the Tuckasegee.",
  },
  {
    q: "How much does a guided fly fishing trip in Bryson City cost?",
    a: "Guided float and wade trips run $700 half day and $800 full day — for 1 or 2 anglers at the same rate. Guided lake trips are $875. Private fly casting instruction is $400 per session. All gear — TFO rods, Scientific Anglers fly lines, all flies, leaders, and waders — is included. Lunches are not included.",
  },
  {
    q: "Do I need experience to book a guided fly fishing trip in Bryson City?",
    a: "No experience is necessary. Mac Brown Fly Fish guides and teaches anglers at every skill level — from complete beginners picking up a fly rod for the first time to advanced anglers looking to sharpen specific techniques. Every trip is instructional and tailored to your skill level.",
  },
  {
    q: "Is a fishing license required for guided trips in Bryson City?",
    a: "Yes — a valid North Carolina Inland Fishing License (in-state or out-of-state) is required for all anglers 16 and older. There is no trout stamp in NC. For out-of-state visitors fishing the Tuckasegee River between October and May, the Mountain Heritage Trout Waters Day License is a cheaper optional alternative — not required, just a money-saving option. Purchase at ncwildlife.org or any sporting goods store in Bryson City.",
  },
  {
    q: "What is the cancellation and payment policy?",
    a: "Payment in full is required at the time of booking. Online bookings via Swipe carry a small processing fee — to avoid fees, we accept Zelle, Venmo, and personal check. For rescheduling: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you.",
  },
];

const waters = [
  {
    name: "Tuckasegee River — Delayed Harvest",
    distance: "10 min from downtown",
    description: "The most popular guided water in the region and the reason most visitors come back every year. From October through May the Delayed Harvest section in Webster, NC is loaded with exceptional numbers of trout. Float trips cover miles of productive water from a drift boat. Wade trips target specific runs and pools with precision. The home river for Mac Brown Fly Fish.",
    highlight: "Best for: Float trips, wade trips, all skill levels, October through May",
  },
  {
    name: "Nantahala River",
    distance: "20 min from downtown",
    description: "The premier tailwater in the state of North Carolina. Cold, clear, and productive every month of the year — the Nantahala holds wild brown and rainbow trout in one of the most spectacular mountain river corridors in the Southeast. Technical fishing on gin-clear water with fish that have seen every fly in the box.",
    highlight: "Best for: Wild trout, technical fishing, year-round",
  },
  {
    name: "Great Smoky Mountains National Park Streams",
    distance: "20–30 min from downtown",
    description: "Deep Creek begins at the edge of Bryson City and flows into the national park — one of the most productive and accessible wild trout streams in the Smokies. Noland Creek, Forney Creek, and dozens of backcountry streams offer native brook trout in the high elevations, wild rainbow and brown trout throughout. Pristine, protected, and largely unfished relative to their quality.",
    highlight: "Best for: Wild trout, backcountry adventure, native brook trout",
  },
  {
    name: "Fontana Lake & Mountain Lakes",
    distance: "30 min from downtown",
    description: "Fontana Lake, Cheoah Lake, and the other mountain reservoirs of the Nantahala National Forest offer exceptional stillwater fly fishing for large trout — especially from late fall through early spring. Trout that run bigger and fight harder than anything available on the rivers, in some of the most dramatic scenery in the southern Appalachians.",
    highlight: "Best for: Trophy trout, stillwater fishing, fall through spring",
  },
];

const programs = [
  { title: "Guided Float Trips", desc: "Drift the Tuckasegee in a drift boat. Cover water, catch fish, learn the river.", link: "/guided-float-fly-fishing-trips" },
  { title: "Guided Wade Trips", desc: "Get in the water. Read the river. Fish it with intention and precision.", link: "/guided-wade-fly-fishing-trips" },
  { title: "Guided Lake Trips", desc: "Trophy trout on Fontana and the stillwater lakes of the Smoky Mountains.", link: "/guided-lake-fly-fishing-trips" },
  { title: "Fly Casting Instruction", desc: "Private lessons from NC's only Master Casting Instructor. Guaranteed or free.", link: "/fly-casting-instruction" },
  { title: "Fly Fishing Schools", desc: "Weekend and multi-day immersion programs based in Bryson City.", link: "/smoky-mountain-weekend-schools" },
  { title: "Fly Fishing Guide School", desc: "The only professional guide training school in the Smoky Mountains.", link: "/fly-fishing-guide-school" },
  { title: "Group & Corporate Trips", desc: "Customized fly fishing experiences for groups of any size.", link: "/group-corporate-fly-fishing" },
  { title: "Backcountry Trips", desc: "Remote streams in the national park — wild fish, pristine wilderness, no crowds.", link: "/backcountry-trout-fishing" },
];

const whatToBring = [
  "Valid NC fishing license if over 16 — ncwildlife.org or 1-888-248-6834",
  "Polarized sunglasses — essential for spotting fish and protecting your eyes",
  "Rain gear — mountain weather changes fast, even on clear-looking days",
  "Warm layers — mornings on the water can be significantly cooler than in town",
  "A hat with a brim — sun and glare protection throughout the day",
  "Clothing in earth tones — fish see color; blend into your surroundings",
  "Sunscreen and lip balm — UV exposure on the water is intense",
  "Lunch and water — we will be on the river all day",
];

export default function BrysonCityFlyFishing() {
  return (
    <div className="w-full">
      <SchemaScript schema={cityTripSchema({ city: "Bryson City", state: "NC", description: "Guided fly fishing trips, casting instruction, and fly fishing schools based in Bryson City, North Carolina, led by Mac Brown — the only FFI Master Casting Instructor in North Carolina, a certified casting examiner for Fly Fishers International, and the author of Casting Angles. Bryson City is the fly fishing capital of the Smoky Mountains — home to more miles of quality wild trout water than any other county in NC, including the Tuckasegee River Delayed Harvest section, the Nantahala River tailwater, and hundreds of miles of wild mountain streams inside Great Smoky Mountains National Park. Mac has been guiding and teaching in Bryson City since 1987. All gear provided.", url: "/bryson-city-fly-fishing", image: "https://macbrownflyfish.com/images/guide-trip-1.webp" })} />
      <SchemaScript schema={faqPageSchema(faqs)} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/guide-trip-1.webp")}
          srcSet={`${img("/images/guide-trip-1-1280.webp")} 1280w, ${img("/images/guide-trip-1.webp")} 1920w`}
          sizes="100vw"
          alt="Guided fly fishing in Bryson City NC — Mac Brown Fly Fish on the Tuckasegee River"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            Guided Fly Fishing · Bryson City, NC · Since 1987
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-5">
            Guided Fly Fishing in Bryson City, NC
          </h1>
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

      {/* AEO INTRO */}
      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">The Trout Mecca of the South</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            The Best Fly Fishing Near Me in the Smoky Mountains
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Mac Brown Fly Fish offers guided fly fishing trips, private casting instruction, and multi-day fly fishing schools from Bryson City, North Carolina — the original fly fishing outfitter in Western NC since 1987. Bryson City is the county seat of Swain County, home to more miles of quality wild trout water than any other county in North Carolina, including the Tuckasegee River Delayed Harvest section minutes from downtown, the Nantahala River tailwater 20 minutes away, and hundreds of miles of wild mountain streams inside Great Smoky Mountains National Park. Year-round guided trout fishing for all skill levels — guided trips start at <PriceTag priceKey="guidedWadeOrFloat" part="half" as="span" />. All gear provided, no experience necessary. Check the{" "}<Link href="/bryson-city-fly-fishing-report-hatch-chart/" className="text-primary hover:underline font-medium">live hatch &amp; river report</Link>{" "}for current conditions on WNC waters.
            </p>
            <p>
              Serious anglers know Bryson City as the center of what they call the Trout Mecca of the South. Over 85% of Swain County is protected public land — the Great Smoky Mountains National Park and the Nantahala National Forest. The rivers run cold, clear, and productive in every season. The fish are wild, the water is real, and no other outfitter in the Southeast has been guiding it longer.
            </p>
            <p>
              Whether you are visiting Bryson City for a day, a weekend, or a week — the fishing available within minutes of downtown is genuinely extraordinary. The water here is the reason Mac Brown chose Bryson City as his home in 1987 and has never left.
            </p>
            <p>
              Curious why Bryson City specifically?{" "}
              <a href="https://flyfishingguideschool.com/blog/bryson-city-trout-capital-fly-fishing/" className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                Read what makes the Trout Capital of the East the right place to train
              </a>{" "}
              — the water diversity, wild trout quality, and public land access that set this location apart from anywhere else in the East.
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

      {/* PHOTO GRID */}
      <div className="grid grid-cols-2 gap-0">
        <div className="aspect-video overflow-hidden">
          <img
            src={img("/images/client-drift-brown.webp")}
            srcSet={`${img("/images/client-drift-brown-1280.webp")} 1280w, ${img("/images/client-drift-brown.webp")} 1800w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Brown trout from a guided float trip on the Tuckasegee River — Mac Brown Fly Fish, Bryson City NC"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="aspect-video overflow-hidden">
          <img
            src={img("/images/client-wading-1.webp")}
            srcSet={`${img("/images/client-wading-1-1280.webp")} 1280w, ${img("/images/client-wading-1.webp")} 1800w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Guided wade trip near Bryson City NC — Mac Brown Fly Fish on the Tuckasegee River"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* WATERS */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Western North Carolina</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center leading-tight">
            The Water — Everything Within Reach of Bryson City
          </h2>
          <p className="text-muted-foreground italic text-center mb-12 max-w-2xl mx-auto">
            Swain County holds more miles of quality wild trout water than any other county in North Carolina. Here is what is available within 30 minutes of downtown Bryson City:
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

      {/* PROGRAMS */}
      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Programs</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            Every Way to Experience the Water
          </h2>
          <p className="text-muted-foreground text-center leading-relaxed mb-12 max-w-2xl mx-auto">
            Mac Brown Fly Fish offers the full spectrum of guided trips and fly fishing education — all based in Bryson City at the center of the finest trout water in the Southeast.
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

      {/* WHAT TO BRING */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Come Prepared</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            What to Bring
          </h2>
          <p className="text-muted-foreground text-center mb-10 leading-relaxed">
            All rods, reels, flies, leaders, and waders are provided. Just show up ready to fish. Here is what to bring from home:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {whatToBring.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-background border border-border p-4">
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
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Common Questions</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center leading-tight">
            Bryson City Fly Fishing — Frequently Asked Questions
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
                <p className="pt-3 pb-1 text-muted-foreground leading-relaxed whitespace-pre-line">{a}</p>
              </details>
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

      {/* FINAL CTA */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Ready to Fish?</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            The Finest Trout Fishing in the East — Right Here in Bryson City
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            Mac Brown has been guiding and teaching on these waters since 1987 — longer than any other outfitter in Western North Carolina. The experience, the knowledge, and the water are all here. The only thing missing is you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              Book Your Bryson City Trip <ArrowRight size={14} />
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
