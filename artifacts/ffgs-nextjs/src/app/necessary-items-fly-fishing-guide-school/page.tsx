import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { img } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "What to Bring — Fly Fishing Guide School Gear List" },
  description:
    "Complete gear list, clothing guide, lodging options, physical prep tips, and NC fishing license info for the Fly Fishing Guide School in Bryson City, NC. All skill levels welcome.",
  alternates: { canonical: "https://flyfishingguideschool.com/necessary-items-fly-fishing-guide-school/" },
  openGraph: {
    title: "What to Bring — Fly Fishing Guide School Gear List",
    description: "Complete gear list, clothing guide, lodging options, and NC fishing license info for the Fly Fishing Guide School in Bryson City, NC.",
    url: "https://flyfishingguideschool.com/necessary-items-fly-fishing-guide-school/",
    images: [{ url: "/images/smokies-river-fall.webp", width: 1920, height: 1280, alt: "Fly fishing the Smoky Mountains — Fly Fishing Guide School" }],
  },
  twitter: { card: "summary_large_image" },
};

const gearSections = [
  {
    icon: "🎣",
    title: "Your Fishing Gear",
    items: [
      "Fly rods — 3-weight and 7-weight recommended",
      "Matching reels & lines for each rod",
      "Waders & wading boots",
      "Landing net",
      "Vest or pack with your full fly selection",
      "Tippet in multiple sizes",
      "Fly tying kit & vise (optional but encouraged)",
      "Polarized sunglasses",
    ],
    note: "Don't have everything? Let us know in advance — we can help arrange what you need.",
  },
  {
    icon: "🏔️",
    title: "Mountain Essentials",
    items: [
      "Rain gear — Smoky Mountain weather changes fast",
      "Layered warm clothing for cool mornings on the water",
      "A quality notebook — you will fill it",
      "The pre-school handout we send before your arrival",
      "Any personal medications or health items",
      "Sunscreen & insect repellent",
      "Camera or phone for photos you'll want forever",
    ],
    note: "Past students often fill an entire notebook by the end of the week. Come ready to learn.",
  },
];

const lodging = [
  { name: "Deep Creek Campground", type: "Campground", note: "Inside Great Smoky Mountains National Park — fishing steps from your tent.", tag: "Most popular", url: "https://www.nps.gov/grsm/planyourvisit/deepcreek.htm" },
  { name: "Stonebrook Lodge", type: "Hotel", note: "Newly completed — one of the nicest options in downtown Bryson City.", tag: "New", url: "https://www.stonebrooklodge.com" },
  { name: "Sleep Inn Bryson City", type: "Hotel", note: "Reliable, comfortable, and close to the action.", tag: "", url: "https://www.booking.com/hotel/us/sleep-inn-bryson-city.html" },
  { name: "Microtel Inn", type: "Hotel", note: "Budget-friendly and well-located for the week.", tag: "", url: "https://www.wyndhamhotels.com/microtel/bryson-city-north-carolina/microtel-inn-and-suites-bryson-city/overview" },
];

export default function GearPrep() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "What to Bring — Fly Fishing Guide School Packing List",
        "description": "Complete gear list, clothing guide, and packing checklist for the Fly Fishing Guide School in Bryson City, NC.",
        "url": "https://flyfishingguideschool.com/necessary-items-fly-fishing-guide-school/",
        "numberOfItems": 15,
        "itemListElement": [
          { "@type": "ListItem", "position": 1,  "name": "Fly rods — 3-weight and 7-weight recommended" },
          { "@type": "ListItem", "position": 2,  "name": "Matching reels & lines for each rod" },
          { "@type": "ListItem", "position": 3,  "name": "Waders & wading boots" },
          { "@type": "ListItem", "position": 4,  "name": "Landing net" },
          { "@type": "ListItem", "position": 5,  "name": "Vest or pack with your full fly selection" },
          { "@type": "ListItem", "position": 6,  "name": "Tippet in multiple sizes" },
          { "@type": "ListItem", "position": 7,  "name": "Fly tying kit & vise (optional but encouraged)" },
          { "@type": "ListItem", "position": 8,  "name": "Polarized sunglasses" },
          { "@type": "ListItem", "position": 9,  "name": "Rain gear — Smoky Mountain weather changes fast" },
          { "@type": "ListItem", "position": 10, "name": "Layered warm clothing for cool mornings on the water" },
          { "@type": "ListItem", "position": 11, "name": "A quality notebook — you will fill it" },
          { "@type": "ListItem", "position": 12, "name": "Pre-school handout (sent before your arrival)" },
          { "@type": "ListItem", "position": 13, "name": "Sunscreen & insect repellent" },
          { "@type": "ListItem", "position": 14, "name": "Camera or phone for photos you will want forever" },
          { "@type": "ListItem", "position": 15, "name": "Any personal medications or health items" },
        ],
      }) }} />
    <div className="w-full">
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden flex items-end">
        <img
          src={img("/images/smokies-river-fall.webp")}
          srcSet={`${img("/images/smokies-river-fall-1280.webp")} 1280w, ${img("/images/smokies-river-fall.webp")} 1920w`}
          sizes="100vw"
          alt="Smoky Mountains fly fishing"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-14 w-full">
          <p className="text-white/60 text-[10px] font-medium uppercase tracking-[0.35em] mb-4">
            Bryson City, NC · Great Smoky Mountains
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight">
            Pack for the<br />Adventure of a Lifetime
          </h1>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Preparation · Gear · Lodging
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-8">
            Four days in the Smokies.<br />Skills that last a lifetime.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            You&apos;re about to spend four days on some of the most beautiful water in the eastern United
            States — learning from the best instructors in the Southeast. Come prepared to fish hard,
            think deeply, and leave with a notebook full of knowledge you&apos;ll draw on for the rest of
            your life on the water.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gearSections.map((s) => (
              <div key={s.title} className="border border-border p-8 flex flex-col gap-6">
                <div>
                  <div className="text-3xl mb-4" aria-hidden="true">{s.icon}</div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-1">{s.title}</h3>
                </div>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                {s.note && (
                  <p className="text-xs text-muted-foreground border-t border-border pt-4 leading-relaxed italic">
                    {s.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">No need to source it yourself</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              What the School Provides
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Your tuition covers more than instruction. Here&apos;s what&apos;s waiting for you when you arrive in Bryson City.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "📋", title: "Pre-School Handout", body: "A detailed preparation packet arrives before your trip — so you know exactly what to study, practice, and pack before day one." },
              { icon: "🍱", title: "Lunch Every Day", body: "A hot meal is provided each day of school. Stay focused on learning, not on where to eat. Dinners and breakfasts are yours to explore in town." },
              { icon: "🏞️", title: "Private Water Access", body: "We fish the Tuckasegee River and select private streams that most anglers never see. Your enrollment unlocks water that isn't open to the public." },
              { icon: "👨‍🏫", title: "Expert Instruction", body: "Mac Brown and his certified instructors hold some of the highest credentials in the industry. You learn directly from guides who have spent decades on this water." },
              { icon: "📓", title: "Course Materials", body: "Handouts, diagrams, reference sheets, and a structured curriculum — everything you need to take real notes and leave with a reference library for life." },
              { icon: "🔍", title: "Small Class Sizes", body: "We keep groups small on purpose. You get real feedback, real time with instructors, and real improvement — not a crowd watching one demonstration." },
            ].map((item) => (
              <div key={item.title} className="border border-border p-6 flex flex-col gap-3">
                <div className="text-2xl" aria-hidden="true">{item.icon}</div>
                <h3 className="font-serif text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight mb-6">
            &ldquo;Each morning begins like a classroom. Each afternoon, you apply it on the water. By the end of the four days, most students have filled an entire notebook.&rdquo;
          </blockquote>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            — Mac Brown · Fly Fishing Guide School
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Included with enrollment</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                Lunches on us,<br />every day of school
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide lunch throughout the week so you can stay focused on learning — not logistics.
                That means more time on the water and less time worrying about where to eat. Dinners and
                breakfasts are on your own, giving you the chance to explore Bryson City&apos;s restaurants
                and swap stories with your fellow students after a full day on the river.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Bryson City has a great local food scene — ask us for recommendations when you arrive.
              </p>
            </div>
            <div className="h-72 md:h-full min-h-[280px] overflow-hidden">
              <img
                src={img("/images/guide-school-casting.webp")}
                alt="Guide school in action on the Tuckasegee River"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-muted/30 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Lodging not included</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
              Where to Stay in Bryson City
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Bryson City is a small mountain town with a big personality — and no shortage of places
              to rest after a day on the water. From camping inside the National Park to comfortable
              hotels steps from Main Street, there&apos;s an option for every style.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {lodging.map((l) => (
              <div key={l.name} className="bg-background border border-border p-6 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-1">{l.type}</p>
                    <h3 className="font-serif text-lg font-bold text-foreground">{l.name}</h3>
                  </div>
                  {l.tag && (
                    <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.1em] bg-primary/10 text-primary px-3 py-1 rounded-sm">
                      {l.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{l.note}</p>
                <a href={l.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline mt-1 w-fit">
                  Visit Website <ExternalLink size={11} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Before you pack your bags</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                Arrive Ready — Mindset &amp; Preparation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The Guide School is open to all skill levels — from complete beginners to seasoned anglers
                looking to formalize their knowledge. No prior guiding experience is required. What matters
                is that you arrive ready to learn, ready to listen, and ready to fill a notebook.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Expect to be on your feet most of the day — wading the Tuckasegee, walking streambanks,
                and standing on gravel bars for casting instruction. Wear your wading boots in before you
                arrive. A worn-out boot with no ankle support will ruin a day on moving water faster than
                almost anything else.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Bring a good notebook and enough pens that you don&apos;t run out. Past students have filled
                one completely by Thursday. The information density of these four days is high — the ones who
                write everything down leave with a reference library. The ones who don&apos;t wish they had.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Experience required", value: "None — all skill levels welcome" },
                { label: "Daily activity level", value: "Moderate — wading, walking, standing" },
                { label: "What to bring mentally", value: "Curiosity, patience, willingness to be coached" },
                { label: "Notebook", value: "Essential — bring a quality one and extras" },
                { label: "Physical restrictions", value: "Contact us to discuss accommodations" },
                { label: "Prep tip", value: "Practice casting before you arrive if you can" },
              ].map((row) => (
                <div key={row.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-4 border-b border-border last:border-0">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground sm:w-44 shrink-0">{row.label}</span>
                  <span className="text-sm text-foreground leading-relaxed">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-muted/30 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Common questions</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Packing &amp; Preparation FAQ
            </h2>
          </div>
          <div className="space-y-2">
            {[
              {
                q: "Do I need to own all the gear on the list?",
                a: "We recommend bringing your own equipment so you can practice with gear you know. That said, if you're missing something, reach out before school starts — we can often point you toward rental or loaner options. Don't let gear stand between you and attendance.",
              },
              {
                q: "What fly patterns should I bring?",
                a: "The Smokies are primarily a nymph and dry-fly fishery. Bring a solid selection of nymphs (Pheasant Tail, Hare's Ear, Zebra Midge), classic dry flies (Elk Hair Caddis, Parachute Adams, Yellow Sally), and some small terrestrials. Your pre-school handout will include a recommended fly list tailored to the season.",
              },
              {
                q: "What's the weather like in Bryson City during Guide School sessions?",
                a: "The Great Smoky Mountains run warm days and cool mornings throughout the season. Afternoon thunderstorms are common in summer — mountain weather moves fast. Layer clothing you can add or remove, and always pack a lightweight rain jacket regardless of the forecast. Mornings on the water can be significantly cooler than the afternoon.",
              },
              {
                q: "Can I bring a non-fishing spouse or companion?",
                a: "Absolutely. Bryson City is a wonderful base for non-fishing companions — the Great Smoky Mountains National Park, Nantahala Outdoor Center, downtown shops, and local restaurants make it easy to fill a week. Your companion will have the town to themselves while you're on the water each day.",
              },
              {
                q: "Is there a dress code or required attire for class?",
                a: "No formal dress code — just dress for the water and the weather. You'll be in waders for much of the day, so comfort and function are what matter. Leave the nice clothes in the lodge; this is a working school on a working river.",
              },
              {
                q: "How far in advance should I book lodging?",
                a: "Bryson City is a popular destination, especially in summer and fall. We recommend booking lodging as soon as you reserve your school spot — Deep Creek Campground in particular fills quickly. The options on this page are a good starting point; contact us if you'd like additional recommendations.",
              },
            ].map((item) => (
              <details key={item.q} className="group border border-border bg-background">
                <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 font-serif text-base font-semibold text-foreground select-none list-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="shrink-0 text-primary text-lg leading-none group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border pt-5">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Do this before you arrive</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
            Purchase Your NC Fishing License Online
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
            You&apos;ll need a valid North Carolina fishing license for the week. It takes two minutes to
            purchase online — get it sorted before you pack your bags so you can hit the water the
            moment you arrive.
          </p>
          <a href="https://www.ncwildlife.org/licensing" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary/90 transition-colors">
            Buy NC Fishing License <ArrowRight size={14} />
          </a>
        </div>
      </section>

      <section className="relative w-full aspect-[1024/426] overflow-hidden flex items-center justify-center">
        <img
          src={img("/images/wild-brown-trout.webp")}
          alt="Wild brown trout from the Smoky Mountains"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center px-6">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-8">
            Ready to start packing?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservation-form/"
              className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              Reserve Your Spot <ArrowRight size={14} />
            </Link>
            <Link href="/contact-information-best-fly-fishing-guide-school/"
              className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
