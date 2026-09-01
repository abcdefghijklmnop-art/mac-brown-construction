import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { SchemaScript } from "@/components/schema-script";
import FaqSection from "@/components/faq-section";
import { webPageSchema, faqPageSchema } from "@/lib/schema";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Western NC Fly Fishing Trail — Rivers & Public Access" },
  description: "Explore the Western North Carolina Fly Fishing Trail. Find rivers, public access points, and guided trip options with Mac Brown Fly Fish.",
  alternates: { canonical: "https://macbrownflyfish.com/wnc-fly-fishing-trail/" },
  openGraph: {
    title: "Western North Carolina Fly Fishing Trail — Mac Brown Fly Fish",
    description: "The WNC Fly Fishing Trail showcases the finest trout waters of Jackson County. Mac Brown Fly Fish has been guiding every mile of it since 1987.",
    url: "https://macbrownflyfish.com/wnc-fly-fishing-trail/",
    images: [{ url: "https://macbrownflyfish.com/images/fall-pool-reflection.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Western North Carolina Fly Fishing Trail — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/fall-pool-reflection.webp"],
  },
};

const waters = [
  {
    name: "Tuckasegee River — Delayed Harvest",
    type: "Tailwater / Delayed Harvest",
    description: "The most popular guided water on the entire trail. From October through May the Delayed Harvest section in Webster, NC is loaded with exceptional numbers of trout. Float trips cover miles of productive water from a drift boat. Wade trips put you in the river where the fish are holding. Either way this is a day on the water that visitors remember long after they leave Western NC.",
    towns: "Sylva · Dillsboro · Bryson City · Cashiers · Asheville",
    highlight: "Best for: Float trips, wade trips, all skill levels, October through May",
  },
  {
    name: "Scotts Creek",
    type: "Wild Mountain Stream",
    description: "A beautiful Jackson County creek flowing through Sylva offering quality wild trout fishing in an accessible and scenic setting. One of the personal favorites on the trail — a stream that rewards careful wading and precise presentation with wild fish that have seen real pressure and developed genuine selectivity.",
    towns: "Sylva · Dillsboro",
    highlight: "Best for: Wild trout, wade fishing, technical presentation",
  },
  {
    name: "Panthertown Creek",
    type: "Backcountry Wild Stream",
    description: "Flowing through the spectacular Panthertown Valley — sometimes called the Yosemite of the East — Panthertown Creek offers outstanding wild trout fishing in one of the most beautiful natural settings in the southern Appalachians. A walk-in backcountry experience that delivers both exceptional scenery and quality wild fish rarely pressured by casual anglers. Native brook trout in the upper reaches, wild rainbows throughout.",
    towns: "Cashiers · Highlands",
    highlight: "Best for: Backcountry adventure, wild brook trout, pristine wilderness",
  },
  {
    name: "Nantahala River",
    type: "Premier NC Tailwater",
    description: "The finest tailwater in North Carolina. Cold, clear, and productive year-round — the Nantahala holds exceptional wild brown and rainbow trout in a stunning gorge setting. Technical fishing at its best in the Southeast. Mac Brown Fly Fish has guided this water for decades and knows every run, riffle, and holding lie on the river.",
    towns: "Bryson City · Cherokee · Sylva",
    highlight: "Best for: Wild trout, technical dry fly fishing, year-round",
  },
  {
    name: "Great Smoky Mountains National Park Streams",
    type: "Wild Mountain Streams",
    description: "Some of the most pristine wild trout streams in the eastern United States flow through the national park directly adjacent to Jackson and Swain Counties. Native brook trout in the high-elevation headwaters, wild rainbow and brown trout throughout. This is catch-and-release, barbless only water — and it fishes like it. Difficult to access without a guide who knows the terrain.",
    towns: "Bryson City · Cherokee · Gatlinburg",
    highlight: "Best for: Wild trout, remote streams, native brook trout",
  },
];

const destinations = [
  { city: "Bryson City", state: "NC", href: "/bryson-city-fly-fishing/" },
  { city: "Great Smoky Mountains", state: "NC / TN", href: "/great-smoky-mountains-fly-fishing/" },
  { city: "Sylva", state: "NC", href: "/sylva-nc-fly-fishing/" },
  { city: "Highlands", state: "NC", href: "/highlands-nc-fly-fishing-trips/" },
  { city: "Franklin", state: "NC", href: "/franklin-nc-fly-fishing/" },
  { city: "Gatlinburg", state: "TN", href: "/gatlinburg-fly-fishing/" },
  { city: "Atlanta", state: "GA", href: "/atlanta-fly-fishing/" },
  { city: "Charlotte", state: "NC", href: "/charlotte-fly-fishing/" },
  { city: "Knoxville", state: "TN", href: "/knoxville-fly-fishing/" },
  { city: "Raleigh", state: "NC", href: "/raleigh-fly-fishing/" },
  { city: "Chattanooga", state: "TN", href: "/chattanooga-fly-fishing/" },
];

const wncFaqs = [
  {
    q: "What is the Western NC Fly Fishing Trail?",
    a: "The Western NC Fly Fishing Trail is a network of designated fly fishing access points on public streams and rivers throughout Western North Carolina — covering the Nantahala River, Tuckasegee River, Little Tennessee River, Hiwassee River, and the wild mountain streams of Great Smoky Mountains National Park. The trail makes it easy to explore the region's best public fly fishing water without guesswork.",
  },
  {
    q: "What rivers are included on the WNC Fly Fishing Trail?",
    a: "The trail includes access points on the Tuckasegee River (Delayed Harvest section in Webster and wild trout sections above), the Nantahala River tailwater, the Little Tennessee River, the Hiwassee River, and numerous mountain streams within Great Smoky Mountains National Park and the Nantahala National Forest.",
  },
  {
    q: "Who is Mac Brown and why book a guided trip on the trail?",
    a: "Mac Brown is the only FFI Master Casting Instructor in North Carolina — the highest casting credential awarded by Fly Fishers International — and a certified casting examiner for FFI. He is the author of Casting Angles and has been guiding on these trail waters since 1987. Booking a guided trip with Mac eliminates the trial-and-error of unfamiliar water: he reads the river, selects the flies, and teaches you what he is doing as he does it.",
  },
  {
    q: "What fish will I catch on the WNC Fly Fishing Trail?",
    a: "Wild rainbow trout and brown trout on the Tuckasegee, Nantahala, Little Tennessee, and Hiwassee. Native brook trout on higher-elevation GSMNP streams — one of the most beautiful and increasingly rare trout in North America. The Nantahala tailwater is especially noted for wild fish that respond well to precise presentation.",
  },
  {
    q: "What is the best time to fish the WNC Fly Fishing Trail?",
    a: "Trail waters fish year-round. Spring (March–May) and fall (September–November) are the peak seasons for most rivers. The Tuckasegee Delayed Harvest section is best October through May. The Nantahala fishes well year-round. Mountain streams in the national park peak in spring and fall but hold wild trout throughout the year.",
  },
  {
    q: "Can I hire a fly fishing guide for the WNC Fly Fishing Trail?",
    a: "Yes. Mac Brown Fly Fish offers guided wade trips and float trips on the most productive rivers on the trail — including the Tuckasegee and Nantahala. All gear is provided. Every trip is instructional and open to all skill levels.",
  },
  {
    q: "What fishing license is required for the WNC Fly Fishing Trail?",
    a: "A valid North Carolina Inland Fishing License (in-state or out-of-state) is required for all anglers 16 and older. There is no trout stamp in NC. For out-of-state visitors fishing the Tuckasegee River between October and May, the Mountain Heritage Trout Waters Day License is a cheaper optional alternative — not required, just a money-saving option. GSMNP streams require a valid NC or TN license — no additional national park permit. Purchase at ncwildlife.org.",
  },
];

export default function WNCFlyFishingTrail() {
  return (
    <div className="w-full">
      <SchemaScript schema={webPageSchema({ name: "Western NC Fly Fishing Trail", description: "Explore the Western North Carolina Fly Fishing Trail. Find rivers, public access points, and guided trip options with Mac Brown Fly Fish.", url: "/wnc-fly-fishing-trail", image: "https://macbrownflyfish.com/images/fall-pool-reflection.webp" })} />
      <SchemaScript schema={faqPageSchema(wncFaqs)} />
      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/fall-pool-reflection.webp")}
          srcSet={`${img("/images/fall-pool-reflection-1280.webp")} 1280w, ${img("/images/fall-pool-reflection.webp")} 1600w`}
          sizes="100vw"
          alt="Western North Carolina Fly Fishing Trail — Mac Brown Fly Fish, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            Guided Fly Fishing · Jackson County &amp; Beyond · Since 1987
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-5">
            Western North Carolina<br />Fly Fishing Trail
          </h1>
          <p className="text-white/70 text-base md:text-lg font-serif italic max-w-2xl">
            The WNC Fly Fishing Trail showcases the finest trout waters of Jackson County — and Mac Brown Fly Fish has been guiding every mile of it since 1987.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Book Your Trip <ArrowRight size={14} />
            </Link>
            <Link
              href="/instructional-guided-trips"
              className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            The Western North Carolina Fly Fishing Trail covers some of the finest wild trout water in the eastern United States — rivers, tailwaters, and mountain streams flowing through Swain, Jackson, Macon, and surrounding counties. Mac Brown Fly Fish has been guiding the WNC Fly Fishing Trail waters from Bryson City since 1987. Guided trips and instruction available year-round for all skill levels.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Jackson County, NC</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            About the WNC Fly Fishing Trail
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              The Western North Carolina Fly Fishing Trail is a program developed to showcase the extraordinary trout waters of Jackson County — one of the most diverse and productive fly fishing regions in the eastern United States. Featuring tailwaters, wild mountain streams, Delayed Harvest sections, and remote backcountry creeks, the WNC Fly Fishing Trail puts some of the Southeast's finest water on the map for visiting and local anglers alike.
            </p>
            <p>
              Mac Brown Fly Fish has guided fly fishing wade and float trips on every piece of water featured on the trail. This is not water we have visited occasionally — it is water we have fished hundreds of times, in every season, at every water level, through every hatch cycle the region produces. That depth of knowledge translates directly into better days on the water for the anglers who fish with us.
            </p>
            <p>
              The trail waters are accessible from Cashiers, Highlands, Asheville, Sylva, Dillsboro, Bryson City, Cherokee, and every other town in the Western NC region. Wherever you are staying, world-class fly fishing is within easy reach — and we know exactly which water to fish on any given day.
            </p>
            <p>
              Before your trip, check the{" "}
              <Link href="/bryson-city-fly-fishing-report-hatch-chart/" className="text-primary hover:underline font-medium">
                live hatch &amp; river report
              </Link>{" "}
              for current hatches, river conditions, and what's producing on WNC waters right now.
            </p>
            <p>
              Interested in learning these waters at a professional level?{" "}
              <a href="https://flyfishingguideschool.com/blog/bryson-city-trout-capital-fly-fishing/" className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                Read why Bryson City is the Trout Capital of the East
              </a>{" "}
              — the Fly Fishing Guide School has been training guides on this exact water since 1987.
            </p>
          </div>
        </div>
      </section>

      {/* PHOTO DIVIDER */}
      <div className="grid grid-cols-2 gap-0">
        <div className="aspect-video overflow-hidden">
          <img
            src={img("/images/fall-river-fishing.webp")}
            srcSet={`${img("/images/fall-river-fishing-1280.webp")} 1280w, ${img("/images/fall-river-fishing.webp")} 1440w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Guided fly fishing on WNC Fly Fishing Trail waters — Mac Brown Fly Fish"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="aspect-video overflow-hidden">
          <img
            src={img("/images/freestone-brown-trout.webp")}
            alt="Wild brown trout on the WNC Fly Fishing Trail — Mac Brown Fly Fish"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* FEATURED WATERS */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Trail Waters</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center leading-tight">
            Featured Waters on the WNC Fly Fishing Trail
          </h2>
          <p className="text-muted-foreground italic text-center mb-12 max-w-2xl mx-auto">
            Mac Brown Fly Fish has guided every one of these waters. Here are some favorites:
          </p>
          <div className="space-y-4">
            {waters.map((water, i) => (
              <div key={i} className="bg-background border border-border p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground">{water.name}</h3>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">{water.type}</p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary border border-primary/30 px-3 py-1">
                    {water.towns}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3">{water.description}</p>
                <p className="text-sm font-semibold text-primary italic">{water.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">By Departure City</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center leading-tight">
            Guided Trips by Location
          </h2>
          <p className="text-muted-foreground italic text-center mb-12 max-w-2xl mx-auto">
            Mac Brown Fly Fish guides visiting anglers from across the Southeast and beyond. Find your nearest departure city.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {destinations.map((dest) => (
              <Link
                key={dest.href}
                href={dest.href}
                className="group border border-border p-5 text-center hover:border-primary/40 hover:bg-muted/30 transition-colors"
              >
                <p className="font-serif font-bold text-foreground group-hover:text-primary transition-colors text-sm">{dest.city}</p>
                <p className="text-xs text-muted-foreground mt-1">{dest.state}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={wncFaqs} />

      {/* CTA */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Ready to Fish?</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Guide the WNC Fly Fishing Trail with Mac Brown
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            Mac Brown Fly Fish has guided every water on the trail since 1987. Let us put you on the right water, on the right day, with the experience that makes the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Inquire &amp; Book <ArrowRight size={14} />
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
