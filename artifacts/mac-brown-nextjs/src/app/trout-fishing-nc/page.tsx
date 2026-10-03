import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Phone } from "lucide-react";

import { SchemaScript } from "@/components/schema-script";
import FaqSection from "@/components/faq-section";
import { webPageSchema, faqPageSchema } from "@/lib/schema";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "North Carolina Trout Fishing — Wild Smoky Mountain Streams" },
  description: "North Carolina is home to some of the best trout fishing in the Eastern US. Explore wild brook, brown, and rainbow trout waters with Mac Brown Fly Fish.",
  alternates: { canonical: "https://macbrownflyfish.com/trout-fishing-nc/" },
  openGraph: {
    title: "Trout Fishing in NC — Mac Brown Fly Fish | Bryson City, Western North Carolina",
    description: "North Carolina trout fishing guide covering the Nantahala River, Tuckasegee, Great Smoky Mountains streams, and more. Mac Brown Fly Fish has guided every mile since 1987.",
    url: "https://macbrownflyfish.com/trout-fishing-nc/",
    images: [{ url: "https://macbrownflyfish.com/images/fall-river-fishing.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trout Fishing in NC — Mac Brown Fly Fish | Bryson City, Western North Carolina",
    images: ["https://macbrownflyfish.com/images/fall-river-fishing.webp"],
  },
};

const waters = [
  {
    name: "Nantahala River — The Premier NC Tailwater",
    type: "Tailwater",
    description:
      "The finest tailwater in North Carolina and one of the great trout rivers in the eastern United States. Cold, clear, and producing wild brown and rainbow trout every month of the year. The Delayed Harvest section holds exceptional numbers of fish through the cooler months, and the seven-mile tailwater below Nantahala Lake is the crown jewel — technical, beautiful, and deeply rewarding for anglers at every skill level.",
    species: "Wild Brown & Rainbow Trout",
    best: "Year-round · All skill levels",
  },
  {
    name: "Tuckasegee River — The Most Popular Float in the Region",
    type: "Tailwater / Delayed Harvest",
    description:
      "The Tuckasegee flows through the heart of Jackson and Swain County and offers outstanding trout fishing from both drift boats and on foot. The Delayed Harvest section in Webster, NC loads up with exceptional numbers of fish from October through May — making it the most popular guided destination in the region. Float trips and wade trips both available throughout the season.",
    species: "Rainbow & Brown Trout",
    best: "October–May · All skill levels",
  },
  {
    name: "Great Smoky Mountains National Park Streams",
    type: "Wild Mountain Streams",
    description:
      "The crown jewels of Southern Appalachian trout fishing. Hazel Creek, Deep Creek, Forney Creek, Cataloochee Creek, the Oconaluftee River, and dozens of other mountain streams flowing through the most visited national park in America. Larger wild brown and rainbow trout in the major drainages. Native brook trout in the high-elevation headwaters. Pristine, protected, and genuinely wild — the fishing that defines what Western NC is all about.",
    species: "Wild Brook, Rainbow & Brown Trout",
    best: "Spring & Fall · Intermediate to advanced",
  },
  {
    name: "Delayed Harvest Streams Throughout NC",
    type: "Delayed Harvest",
    description:
      "North Carolina's Delayed Harvest program creates outstanding fishing opportunities on multiple rivers and streams throughout the state from October through May. In addition to the Tuckasegee and Nantahala, the Delayed Harvest sections of the Laurel River near Hot Springs, the Snowbird Creek in Graham County, and the French Broad near Rosman all offer excellent seasonal fishing within reach of Western NC.",
    species: "Rainbow & Brown Trout",
    best: "October–May · All skill levels",
  },
  {
    name: "Small Wild Streams — Native Brook Trout Country",
    type: "Wild Backcountry Streams",
    description:
      "The technical small streams of Western NC average smaller fish but offer a completely different and deeply rewarding fly fishing experience. Diverse currents, dense overhead canopy, and fish that demand precise presentations in tight quarters. Some of the finest fly casters Mac Brown has ever encountered learned their craft on these streams — because piloting a fly rod in every casting plane is exactly what they demand.",
    species: "Wild Brook & Rainbow Trout",
    best: "Spring & Summer · Technical anglers",
  },
  {
    name: "Davidson River — Brevard, NC",
    type: "Freestone River",
    description:
      "One of the finest free-flowing rivers in the state — especially during the offseason from December through March when pressure drops and the wild trout fishing is exceptional. The Davidson runs through Pisgah National Forest with great waterfalls and hiking trails nearby, holding a healthy population of wild trout in a beautiful mountain setting. Summer brings heavy pressure but the winter fishing is worth the cold.",
    species: "Wild Brown & Rainbow Trout",
    best: "December–March · All skill levels",
  },
];

const largerRivers = [
  {
    name: "Little Tennessee River",
    desc: "One of the most biologically diverse rivers in North America — holding an extraordinary variety of freshwater fish species. Excellent smallmouth bass fishing during summer months when trout slow down. Overnight float opportunities for walleye, bass, muskie, and trout. A big-water experience with western river character.",
  },
  {
    name: "French Broad River",
    desc: "A major river system offering outstanding muskie fishing during winter months — float trips upstream from Arden, NC provide excellent opportunities for these impressive fish. The French Broad also has a Delayed Harvest section near Rosman, NC that fishes well through the cooler months.",
  },
  {
    name: "Nolichucky River",
    desc: "A powerful freestone river offering excellent multi-species float fishing in a spectacular gorge setting. Smallmouth bass, trout, and other species available depending on the season.",
  },
  {
    name: "Hiwassee River",
    desc: "A quality tailwater river offering good trout fishing in a beautiful setting. A solid option when the primary tailwaters are running high or off-color.",
  },
];

const regionalWaters = [
  {
    region: "Graham County",
    waters:
      "Slickrock Creek, Twenty Mile Creek, Snowbird Creek, Santeetlah Creek, and the Delayed Harvest of Snowbird Creek. Also excellent lake opportunities at Cheoah, Calderwood, and Santeetlah Reservoirs — productive for trout throughout the year.",
  },
  {
    region: "Cashiers & Highlands Area",
    waters:
      "The Whitewater River and the Chattooga River both offer excellent wild brown and rainbow trout fishing. The Cullasaja River and surrounding mountain creeks provide quality local options for anglers based in the resort communities.",
  },
  {
    region: "Sylva & Jackson County",
    waters:
      "Bear Lake, Wolf Lake, and Tanasee Lake are all high-demand stillwater options near Sylva, NC. Scotts Creek, Panthertown Creek, and Caney Fork Creek offer outstanding wild trout stream fishing on the WNC Fly Fishing Trail.",
  },
  {
    region: "Brevard & Transylvania County",
    waters:
      "The Davidson River near Brevard is among the finest freestone rivers in the state. Best in the December through March offseason when pressure drops and wild fish become the primary quarry.",
  },
  {
    region: "Nantahala Lake",
    waters:
      "The highest elevation lake in North Carolina — home to the state's Kokanee Salmon run and exceptional trout fishing throughout the year. The lake feeds the Nantahala River tailwater below and stays cold year-round.",
  },
  {
    region: "Northern NC — Watauga & Wilson Creek",
    waters:
      "Notable streams north of the Bryson City area include the Watauga River and the Wilson Creek drainage — both offering quality wild trout fishing in beautiful mountain settings worth the drive for the dedicated angler.",
  },
];

const seasons = [
  {
    season: "Spring",
    desc: "Peak season. Hatches align with warming water temperatures and fish become aggressive across all water types. Dry fly fishing on the national park streams is outstanding. The Delayed Harvest sections are still loaded with fish. Book early — spring dates fill quickly.",
  },
  {
    season: "Summer",
    desc: "Focus shifts to higher elevation streams, cold tailwaters, and multi-species options on larger rivers. Early mornings and evening hours produce best on lower-elevation waters. Smallmouth bass on the Little Tennessee and French Broad becomes the go-to warm-weather alternative.",
  },
  {
    season: "Fall",
    desc: "Delayed Harvest season opens in October loading the Tuckasegee and other DH streams with exceptional numbers of trout. Cooling water temperatures wake fish up across all water types. Fall foliage on the mountain rivers makes every day on the water a visual experience.",
  },
  {
    season: "Winter",
    desc: "The Nantahala tailwater and Tuckasegee Delayed Harvest fish well throughout winter. Fewer anglers, concentrated fish, and the quiet beauty of mountain rivers in the cold months. Often the most productive time for experienced anglers who embrace the conditions.",
  },
];

const programs = [
  { title: "Guided Float Trips", desc: "Drift the Tuckasegee or Nantahala in a drift boat. Cover water, catch fish, learn the river.", link: "/guided-float-fly-fishing-trips" },
  { title: "Guided Wade Trips", desc: "Get in the water on the national park streams, the tailwaters, or the mountain creeks.", link: "/guided-wade-fly-fishing-trips" },
  { title: "Guided Lake Trips", desc: "Trophy trout and Kokanee salmon on the mountain lakes of Western NC.", link: "/guided-lake-fly-fishing-trips" },
  { title: "Backcountry Trips", desc: "Remote streams deep in the national park — wild fish, pristine wilderness.", link: "/instructional-guided-trips" },
  { title: "Fly Casting Instruction", desc: "Private lessons from NC's only Master Casting Instructor.", link: "/fly-casting-instruction" },
  { title: "Fly Fishing Schools", desc: "Weekend immersion programs covering the full craft of NC mountain trout fishing.", link: "/smoky-mountain-weekend-schools" },
  { title: "WNC Fly Fishing Trail", desc: "Guided trips on the official Jackson County fly fishing trail waters.", link: "/wnc-fly-fishing-trail" },
  { title: "Group & Corporate Trips", desc: "Customized NC trout fishing experiences for groups of any size.", link: "/group-corporate-fly-fishing" },
];

const whatToBring = [
  "Rain gear — mountain weather changes fast",
  "Warm layers — mornings on the water can be cool year-round",
  "Polarized sunglasses — essential for spotting fish and reading water",
  "A hat with a brim — sun and glare protection",
  "Sunscreen and lip balm",
  "Clothing in earth tones — blend into your surroundings",
  "A thermometer — essential during warm weather months",
  "Valid NC fishing license if over 16 — ncwildlife.org or 1-888-248-6834",
];

const troutNcFaqs = [
  {
    q: "What is the best trout fishing in North Carolina?",
    a: "Western North Carolina — anchored by Bryson City — holds the finest concentration of wild trout water in the eastern United States. The Tuckasegee River Delayed Harvest section, the Nantahala River tailwater, and over 30,000 miles of mountain streams in Great Smoky Mountains National Park and the Nantahala National Forest all offer wild brook, rainbow, and brown trout in cold, pristine water year-round.",
  },
  {
    q: "What trout species are in North Carolina?",
    a: "North Carolina streams hold wild rainbow trout, wild brown trout, and native Southern Appalachian brook trout. Brook trout are found primarily in the high-elevation headwater streams and are a genetically pure native strain found almost nowhere else on earth. Wild rainbow and brown trout are found throughout the mid-elevation rivers and tailwaters.",
  },
  {
    q: "What is the best time of year to fly fish for trout in NC?",
    a: "North Carolina offers year-round trout fishing. Spring (March–May) is the top hatch season — sulphurs, quill gordons, blue-winged olives, and caddis all hatch during this period. Fall (September–November) brings aggressive fish and peak fall color. The Tuckasegee Delayed Harvest section is the top winter fishery in the state (October through May). The Nantahala River fishes year-round.",
  },
  {
    q: "Do I need a fishing license for trout fishing in North Carolina?",
    a: "A valid North Carolina fishing license is required for all anglers age 16 and over. Waters in Great Smoky Mountains National Park require a valid NC or TN state license — no additional federal permit is needed. The Nantahala and Tuckasegee rivers both require a standard NC Inland Fishing License. Licenses are available at ncwildlife.org or by phone at 1-888-248-6834.",
  },
  {
    q: "Can I hire a guide for trout fishing in North Carolina?",
    a: "Yes. Mac Brown Fly Fish offers guided wade trips, float trips, and lake trips on the best trout rivers in Western North Carolina — including the Tuckasegee, Nantahala, and the wild streams of Great Smoky Mountains National Park. Guided trips include all gear and instruction. All skill levels are welcome.",
  },
];

export default function TroutFishingNC() {
  return (
    <div className="w-full">
      <SchemaScript schema={webPageSchema({ name: "North Carolina Trout Fishing", description: "North Carolina is home to some of the best trout fishing in the Eastern US. Explore wild brook, brown, and rainbow trout waters with Mac Brown Fly Fish.", url: "/trout-fishing-nc", image: "https://macbrownflyfish.com/images/fall-river-fishing.webp" })} />
      <SchemaScript schema={faqPageSchema(troutNcFaqs)} />
      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/fall-river-fishing.webp")}
          srcSet={`${img("/images/fall-river-fishing-1280.webp")} 1280w, ${img("/images/fall-river-fishing.webp")} 1440w`}
          sizes="100vw"
          alt="Mountain trout fishing in North Carolina — Mac Brown Fly Fish, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            Western North Carolina · Smoky Mountains · Since 1987
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-5">
            Trout Fishing in North Carolina — Bryson City, NC
          </h1>
          <p className="text-white/70 text-base md:text-lg font-serif italic max-w-2xl">
            North Carolina holds some of the finest and most diverse trout fishing in the eastern United States. Swain County alone offers more quality wild trout water than anywhere else in the state — and Mac Brown Fly Fish has been guiding every mile of it since 1987.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Book Your NC Trout Trip <ArrowRight size={14} />
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
            North Carolina holds some of the finest wild trout water in the eastern United States — with Swain County alone containing over 2,400 miles of quality trout streams, tailwaters, and mountain creeks. Mac Brown Fly Fish has been guiding trout fishing in North Carolina from Bryson City since 1987. Guided float trips, wade trips, and fly fishing schools available year-round for all skill levels.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Swain County, NC</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            The Trout Mecca of the South
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Trout fishing in North Carolina offers an extraordinary range of opportunities for the fly fisher — from tiny native brook trout streams tucked deep in the national park backcountry to world-class tailwaters that produce wild fish year-round, from Delayed Harvest sections loaded with trout through the cooler months to large freestone rivers that offer multiple species and overnight float adventures.
            </p>
            <p>
              The mountainous region of Swain County at the center of it all offers the greatest trout fishing potential of anywhere in the entire state. Over 85% of the county is protected public land — the Great Smoky Mountains National Park and the Nantahala National Forest — which means the water stays cold, the fish stay wild, and the experience stays genuinely exceptional regardless of the season.
            </p>
            <p>
              The first decision any visiting angler faces is what kind of fishing and what kind of environment they are looking for. Solitude on an isolated backcountry stream. Company on a popular tailwater. A drift boat covering miles of big river. A wade trip on a technical mountain creek. Each has its season, its character, and its rewards — and knowing which water to fish on any given day is the knowledge that comes from nearly four decades of daily guiding in this specific region.
            </p>
          </div>
        </div>
      </section>

      {/* PHOTO DIVIDER */}
      <div className="grid grid-cols-2 gap-0">
        <div className="aspect-video overflow-hidden">
          <img
            src={img("/images/freestone-brown-trout.webp")}
            alt="Wild brown trout from North Carolina mountain streams — Mac Brown Fly Fish"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="aspect-video overflow-hidden">
          <img
            src={img("/images/client-float-1.webp")}
            srcSet={`${img("/images/client-float-1-800.webp")} 800w, ${img("/images/client-float-1.webp")} 1080w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Guided float trip on the Tuckasegee River NC — Mac Brown Fly Fish"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* WATERS */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Waters</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center leading-tight">
            The Waters of Western North Carolina
          </h2>
          <p className="text-muted-foreground italic text-center mb-12 max-w-2xl mx-auto">
            No two days on the water here look the same. Here is the full range of what Western NC offers the fly fisher:
          </p>
          <div className="space-y-4">
            {waters.map((water, i) => (
              <div key={i} className="bg-background border border-border p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-xl font-bold text-foreground">{water.name}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary border border-primary/30 px-3 py-1">
                    {water.type}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3">{water.description}</p>
                <div className="flex flex-wrap gap-6 text-sm font-semibold">
                  <span className="text-foreground">{water.species}</span>
                  <span className="text-primary italic">{water.best}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LARGER RIVERS */}
      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Multi-Species</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            Larger Rivers &amp; Multi-Species Opportunities
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
            <p>
              Western North Carolina offers far more than trout. The larger river systems of the region provide outstanding multi-species fly fishing — smallmouth bass, walleye, muskie, and many others — particularly during the warmer summer months when trout fishing slows on the smaller streams.
            </p>
          </div>
          <div className="space-y-4">
            {largerRivers.map((river, i) => (
              <div key={i} className="bg-background border border-border p-6">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{river.name}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{river.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGIONAL WATERS */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">By County</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center leading-tight">
            Regional Waters Worth Knowing
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {regionalWaters.map((item, i) => (
              <div key={i} className="bg-background border border-border p-6">
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">{item.region}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.waters}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHEROKEE */}
      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Cherokee, NC</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            Cherokee Trophy Waters
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              The Cherokee Trophy Waters on Ravens Fork Creek in Cherokee, NC offer some of the most heavily stocked trophy trout fishing in North America — fish ranging from 20 to 28 inches stocked weekly throughout the year. Many enjoy the added experience of elk wandering the streamside while fishing the Ravens Fork.
            </p>
            <p>
              A note on timing — July and August bring heavy vacation crowds and the warmest water temperatures of the year. These are among the most challenging months for trout fishing throughout Western NC. A thermometer is an essential tool during hot weather — and starting very early in the morning gives you the best window for productive fishing before temperatures rise. Smallmouth bass on the larger rivers is an excellent alternative during the warmest weeks of summer.
            </p>
            <p>
              Current regulations require that anglers fishing Cherokee Tribal waters hire a guide who is a citizen of the Cherokee Nation. The exceptional public water surrounding Cherokee — the national park streams, the Tuckasegee, and the Nantahala — is fully accessible and just minutes away.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/cherokee-trophy-water" className="text-sm font-semibold uppercase tracking-wider text-primary">
              Learn more about fly fishing near Cherokee, NC →
            </Link>
          </div>
        </div>
      </section>

      {/* SEASONAL GUIDE */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Planning Your Trip</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center leading-tight">
            Seasonal Guide to NC Trout Fishing
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {seasons.map((item, i) => (
              <div key={i} className="bg-background border border-border p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{item.season}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Programs</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center leading-tight">
            Every Way to Experience NC Trout Fishing
          </h2>
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
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Come Prepared</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            What to Bring
          </h2>
          <p className="text-muted-foreground text-center mb-10 leading-relaxed">
            All rods, reels, flies, and leaders are provided. Just show up ready to fish.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {whatToBring.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-background border border-border p-4">
                <Check size={15} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-xs mt-6 italic text-center">
            A NC or TN fishing license is required for waters within the Great Smoky Mountains National Park. A tribal license is required for Cherokee Tribal waters — available at stores in Cherokee, NC.
          </p>
        </div>
      </section>

      <FaqSection items={troutNcFaqs} />

      {/* CTA */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Book Your Trip</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            The Finest Trout Fishing in North Carolina — Guided by the Best
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            From the wild mountain streams of the national park to the world-class tailwaters of the Nantahala and Tuckasegee — North Carolina trout fishing is extraordinary. Mac Brown has been guiding and teaching on every piece of it since 1987.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Book Your NC Trout Trip <ArrowRight size={14} />
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
