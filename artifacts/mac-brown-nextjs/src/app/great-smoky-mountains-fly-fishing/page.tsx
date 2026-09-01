import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone, ArrowRight } from "lucide-react";

import { SchemaScript } from "@/components/schema-script";
import FaqSection from "@/components/faq-section";
import { cityTripSchema, faqPageSchema } from "@/lib/schema";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Fly Fishing — Great Smoky Mountains National Park, NC" },
  description: "Guided fly fishing in Great Smoky Mountains National Park. Wild brook, rainbow, and brown trout on native streams. Mac Brown Fly Fish — Bryson City, NC — since 1987.",
  alternates: { canonical: "https://macbrownflyfish.com/great-smoky-mountains-fly-fishing/" },
  openGraph: {
    title: "Fly Fishing Great Smoky Mountains National Park — Mac Brown Fly Fish",
    description: "Bryson City sits at the entrance to the NC side of Great Smoky Mountains National Park. Wild brook trout, wild rainbows, and pristine streams — guided by Mac Brown since 1987.",
    url: "https://macbrownflyfish.com/great-smoky-mountains-fly-fishing/",
    images: [{ url: "https://macbrownflyfish.com/images/smoky-mountains.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fly Fishing Great Smoky Mountains National Park — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/smoky-mountains.webp"],
  },
};

const waters = [
  {
    name: "Tuckasegee River",
    detail: "Bryson City, NC — runs right through town",
    description: "Mac's home water and the most popular guided float fishery in the region. The Tuckasegee flows through the heart of Swain and Jackson Counties, offering outstanding wild trout fishing from both drift boats and on foot. The Delayed Harvest section in Webster, NC loads up with exceptional numbers of fish from October through May. Float trips and wade trips both available. This is the river most visitors catch their first trout on — and the one they keep coming back for.",
    highlight: "Best for: Float trips, wade trips, beginners and experienced anglers alike",
  },
  {
    name: "Deep Creek",
    detail: "Bryson City, NC — Park boundary begins 2 miles from downtown",
    description: "One of the most accessible and productive wild trout streams on the NC side of the park. Deep Creek holds a healthy population of wild rainbow trout throughout its length, with native brook trout appearing as you climb higher into the backcountry. The lower sections fish well year-round. Campground access makes it a natural basecamp for multi-day fishing.",
    highlight: "Best for: Wild rainbow trout, accessible wading, year-round",
  },
  {
    name: "Hazel Creek, Forney Creek & Cataloochee",
    detail: "Great Smoky Mountains National Park — backcountry access",
    description: "The legendary backcountry drainages of the park. Hazel Creek was one of the most famous trout streams in the South before the park was established — the fishing community that once lived here left behind a fishery that has had decades to recover. Forney Creek offers similar solitude with excellent wild trout. Cataloochee on the eastern side of the park is renowned for large wild browns in its lower sections, and the famous Cataloochee elk herd makes every visit memorable.",
    highlight: "Best for: Trophy browns, solitude, true backcountry experience",
  },
  {
    name: "Oconaluftee River",
    detail: "Cherokee, NC — runs along Hwy 441 through the park",
    description: "The main stem river on the NC side, flowing through the heart of the Cherokee tribal lands before entering the park. Large wild brown and rainbow trout hold in the deeper runs and pools. The roadside access makes it easy to explore, but the fish are wild, wary, and well-educated — a technical challenge that rewards careful presentation.",
    highlight: "Best for: Wild brown trout, technical fishing, larger fish",
  },
  {
    name: "Noland Creek",
    detail: "Bryson City, NC — trail access only",
    description: "A backcountry gem accessible only on foot from the Lakeview Drive trailhead near Bryson City. The further you hike, the more the fishing improves. Wild rainbow trout in the lower sections give way to native southern Appalachian brook trout in the upper reaches. Noland Creek rewards anglers willing to put in the miles.",
    highlight: "Best for: Solitude, native brook trout, backcountry experience",
  },
  {
    name: "Nantahala River — Tailwater",
    detail: "~25 minutes from Bryson City",
    description: "Just outside the park and a short drive from Bryson City, the Nantahala is the premier tailwater in North Carolina. Cold releases from Nantahala Lake keep it fishing well every day of the year. Wild brown and rainbow trout in a stunning river gorge — a natural complement to a park fishing trip and one of the finest guided fisheries in the Southeast.",
    highlight: "Best for: Year-round fishing, wild tailwater trout, guided float trips",
  },
];

const programs = [
  { title: "Guided Wade Trips", desc: "Get in the water on park streams and nearby wild rivers. Full-day and half-day options.", link: "/guided-wade-fly-fishing-trips" },
  { title: "Masterclass Fly Casting Workshop", desc: "NC's only Master Casting Instructor. Multi-day intensive casting schools based in Bryson City.", link: "/masterclass-fly-casting-workshop" },
  { title: "Guided Float Trips", desc: "Drift the Tuckasegee or the Nantahala from a drift boat — a perfect park-trip complement.", link: "/guided-float-fly-fishing-trips" },
  { title: "Guided Lake Trips", desc: "Fontana Lake borders the southern edge of the park. Trophy trout on stillwater.", link: "/guided-lake-fly-fishing-trips" },
  { title: "Fly Casting Instruction", desc: "Private lessons from NC's only Master Casting Instructor. Half-day and full-day.", link: "/fly-casting-instruction" },
  { title: "Smoky Mountain Weekend Schools", desc: "Two-day immersive fly fishing schools based out of Bryson City.", link: "/smoky-mountain-weekend-schools" },
];

const faqs = [
  {
    q: "Do I need a fishing license to fish inside the Great Smoky Mountains National Park?",
    a: "Yes — a national park fishing license is required. The good news: you do not need a state license inside the park boundary. Both Tennessee and North Carolina residents and visitors use the same park license, available at the park entrance or online through Recreation.gov.",
  },
  {
    q: "What species can I catch in the Smoky Mountains?",
    a: "Wild rainbow trout throughout most streams. Wild brown trout in the lower-elevation rivers. Native southern Appalachian brook trout in the upper headwater streams above 3,000 feet elevation. The brook trout here are a genetically distinct strain — native to the southern Appalachians and found nowhere else on earth.",
  },
  {
    q: "Is the fishing catch-and-release only?",
    a: "Most park streams are catch-and-release, artificial-lures-only — no bait, no harvest. Some designated sections allow limited harvest. Mac will brief you on all current regulations before your trip.",
  },
  {
    q: "What time of year is best?",
    a: "Spring (March–May) and fall (September–November) are the peak seasons for hatches and active feeding. Summer offers excellent fishing in the cool high-elevation streams. Winter can be outstanding on the lower rivers when hatches of midges and blue-winged olives bring fish to the surface.",
  },
  {
    q: "How far is Bryson City from the park entrance?",
    a: "Bryson City sits at the entrance to the NC side of the park — less than 5 minutes from the Deep Creek trailhead. The Oconaluftee Visitor Center is about 20 minutes north on Hwy 441.",
  },
  {
    q: "Do you provide all the gear?",
    a: "Yes. Rods, reels, flies, leaders, and waders are all provided. Just bring your fishing license, appropriate clothing for the weather, polarized sunglasses, and a hat.",
  },
  {
    q: "Is there fly fishing near me in the Great Smoky Mountains?",
    a: "Yes — the Great Smoky Mountains hold some of the finest wild trout fishing in the East. Mac Brown Fly Fish provides guided access to over 2,400 miles of wild trout water in Swain County alone, including Deep Creek, Hazel Creek, and the Oconaluftee River.",
  },
];

export default function GreatSmokyMountainsFlyFishing() {
  return (
    <div className="w-full">
      <SchemaScript schema={faqPageSchema(faqs)} />
      <SchemaScript schema={cityTripSchema({
        city: "Great Smoky Mountains",
        state: "NC",
        description: "Guided fly fishing in Great Smoky Mountains National Park. Wild brook, rainbow, and brown trout on native streams. Mac Brown Fly Fish — Bryson City, NC.",
        url: "/great-smoky-mountains-fly-fishing",
        image: "https://macbrownflyfish.com/images/smoky-mountains.webp",
      })} />

      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/smoky-mountains.webp")}
          srcSet={`${img("/images/mobile/smoky-mountains.webp")} 800w, ${img("/images/smoky-mountains.webp")} 1280w`}
          sizes="100vw"
          alt="Fly fishing Great Smoky Mountains National Park — Mac Brown Fly Fish, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            Bryson City, NC · Since 1987
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-5">
            Fly Fishing the Great Smoky Mountains — Bryson City, NC
          </h1>
          <p className="text-white/75 text-base md:text-lg font-serif italic max-w-2xl">
            Wild brook trout in pristine headwater streams. Wild rainbows and browns in freestone rivers. The most visited national park in America — and some of the finest wild trout fishing east of the Rockies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/reserve"
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
            The Great Smoky Mountains offer over 2,400 miles of wild trout water in Swain County alone — wild rainbow, brown, and brook trout in pristine mountain streams flowing through the most visited national park in America. Mac Brown Fly Fish has been guiding these waters from Bryson City, North Carolina since 1987. Guided wade trips, float trips, and fly fishing schools available year-round. All gear provided, all skill levels welcome.
          </p>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Bryson City, NC</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            The NC Side — Find a Professional Fly Fishing Guide
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              The Great Smoky Mountains National Park receives more visitors than any other national park in the country — over 12 million a year. Most of them see the park from overlooks and roadside pullouts on the Tennessee side. A fraction of them ever discover what the NC side holds: hundreds of miles of pristine wild trout water across Deep Creek, Noland Creek, Hazel Creek, Forney Creek, Cataloochee Creek, the Oconaluftee River, and dozens of smaller headwater streams. Native southern Appalachian brook trout. Some of the finest small-stream fly fishing anywhere east of the Rockies.
            </p>
            <p>
              Bryson City sits at the entrance to the NC side of the park — and right in the middle of the best trout fishing in Western North Carolina. The Tuckasegee River runs through town. The Nantahala tailwater is 25 minutes up the road. Deep Creek begins less than two miles from downtown. Mac Brown Fly Fish has been guiding and teaching on all of it since 1987.
            </p>
            <p>
              The fish in the park are entirely wild. No hatchery stockings inside the national park boundary. The brook trout are a genetically distinct native strain that has lived in these mountains since the last ice age. The rainbows and browns have been self-sustaining for generations. This is what wild trout fishing looks like when the water is clean, the habitat is protected, and the pressure stays manageable.
            </p>
            <p>
              These same waters — Deep Creek, the Tuckasegee, and the high-elevation GSMNP streams — are where the{" "}
              <a href="https://flyfishingguideschool.com/blog/bryson-city-trout-capital-fly-fishing/" className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">Fly Fishing Guide School trains aspiring guides</a>.
              {" "}Swain County&apos;s density of wild water and protected public land is exactly why Bryson City is the Trout Capital of the East.
            </p>
          </div>
          <blockquote className="border-l-4 border-primary pl-6 mt-10 italic text-foreground font-serif text-lg leading-relaxed">
            "There is no better place in the East to catch a native brook trout on a dry fly than the high-elevation streams of the Smoky Mountains. These fish have never seen a hatchery. They are as wild as the mountain itself."
            <span className="block text-sm not-italic text-muted-foreground mt-3 font-sans">— Mac Brown</span>
          </blockquote>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-0">
        <div className="aspect-video overflow-hidden">
          <img
            src={img("/images/waterfall.webp")}
            srcSet={`${img("/images/waterfall-800.webp")} 800w, ${img("/images/waterfall.webp")} 1440w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Mountain stream in Great Smoky Mountains National Park — Mac Brown Fly Fish"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="aspect-video overflow-hidden">
          <img
            src={img("/images/freestone-brown-trout.webp")}
            alt="Wild brown trout from a Smoky Mountains freestone stream — Mac Brown Fly Fish"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">The Water</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center leading-tight">
            Streams, Rivers, and Wild Trout
          </h2>
          <p className="text-muted-foreground italic text-center mb-12 max-w-2xl mx-auto">
            The NC side of the park holds more quality wild trout water than any comparable area in the Southeast:
          </p>
          <div className="space-y-4">
            {waters.map((water, i) => (
              <div key={i} className="bg-background border border-border p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-xl font-bold text-foreground">{water.name}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary border border-primary/30 px-3 py-1">{water.detail}</span>
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
            Every Way to Experience the Smokies
          </h2>
          <p className="text-muted-foreground text-center leading-relaxed mb-12 max-w-2xl mx-auto">
            From backcountry brook trout to tailwater browns — Mac Brown Fly Fish offers the full range of guided experiences based out of Bryson City.
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
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">What to Know</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            Come Prepared
          </h2>
          <p className="text-muted-foreground text-center mb-10 leading-relaxed">
            All rods, reels, flies, leaders, and waders are provided. Just show up ready to fish:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "National park fishing license — available at Recreation.gov or park entrance stations",
              "Polarized sunglasses — essential for spotting fish in clear park water",
              "Layered clothing — high-elevation streams run cold even in summer",
              "Rain gear — mountain weather changes without warning",
              "Sturdy footwear — park stream banks are rocky and uneven",
              "Hat with a brim — sun, glare, and low-hanging branches",
              "Water and snacks for full-day backcountry trips",
              "Camera — the scenery is worth as much as the fishing",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-background border border-border p-4">
                <Check size={15} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">FAQ</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border p-8">
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Also Worth Exploring</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Bryson City Hatch Chart", href: "/bryson-city-fly-fishing-report-hatch-chart" },
              { name: "Gatlinburg Fly Fishing", href: "/gatlinburg-fly-fishing" },
              { name: "Backcountry Trout Fishing", href: "/backcountry-trout-fishing" },
              { name: "Cherokee Trophy Water", href: "/cherokee-trophy-water" },
              { name: "Trout Fishing NC", href: "/trout-fishing-nc" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="border border-border px-5 py-2 text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={faqs} />

      <section className="bg-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Ready to Fish?</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            The Most Visited Park in America — and Miles of Uncrowded Wild Trout Water
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            Twelve million visitors come to the Smokies every year. A handful of them find their way to the backcountry streams where native brook trout rise to dry flies in water cold enough to take your breath away. Mac Brown has been guiding these waters since 1987. Come find out what they have been missing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reserve"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Book Your Trip <ArrowRight size={14} />
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
