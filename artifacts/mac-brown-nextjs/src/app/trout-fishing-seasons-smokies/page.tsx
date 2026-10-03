import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";

import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Smoky Mountains Trout Fishing Seasons | Bryson City" },
  description:
    "The best month to fly fish the Smokies is March. Mac Brown covers water temps, hatches, and tactics for every season in Bryson City, NC.",
  alternates: {
    canonical: "https://macbrownflyfish.com/trout-fishing-seasons-smokies/",
  },
  openGraph: {
    title: "Smoky Mountains Trout Fishing Seasons | Bryson City",
    description:
      "The best month to fly fish the Smokies is March. Mac Brown covers water temps, hatches, and tactics for every season in Bryson City, NC.",
    url: "https://macbrownflyfish.com/trout-fishing-seasons-smokies/",
    images: [{ url: "https://macbrownflyfish.com/images/fall-river-fishing.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://macbrownflyfish.com/images/fall-river-fishing.webp"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best month to fly fish the Smoky Mountains?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best month to fly fish the Smoky Mountains is March. Water temperatures climb into the ideal mid-50s range, the first major hatches of the year begin emerging, and crowds have not yet arrived. Spring overall — March through May — is the strongest season on both the delayed harvest sections and the wild streams of Great Smoky Mountains National Park.",
      },
    },
    {
      "@type": "Question",
      name: "What water temperature is best for trout fishing in the Smokies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mid-50s Fahrenheit is the ideal water temperature for trout fishing in the Smoky Mountains. Carry a thermometer every time you fish. When temperatures push into the mid-60s in summer, trout activity drops sharply and it is time to get off the water or target warm water species instead.",
      },
    },
    {
      "@type": "Question",
      name: "Can you fly fish the Smoky Mountains in summer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but the window is narrow. Fish early morning before the sun loads the water. Once temperatures hit the mid-60s, stop fishing for trout. Summer is terrestrial season — ants, beetles, and hoppers fished tight to the banks produce well during the early morning window. Target warm water species once trout temperatures become stressful.",
      },
    },
    {
      "@type": "Question",
      name: "Is winter fly fishing good in the Smoky Mountains?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — winter is underrated on the Smokies. Blue-winged olive and midge hatches produce genuine dry fly opportunity on overcast, mild days. Nymphing and wet fly fishing remain productive throughout winter. The biggest advantage is solitude — world-class trout water with almost no crowds.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best hatches for fly fishing the Smoky Mountains?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spring brings the strongest hatches — blue quills, quill gordons, and hendricksons emerge early, followed by increasing variety through April and May. Fall is defined by the October Caddis hatch, which produces aggressive dry fly takes from large brown trout. Winter midge and BWO hatches provide dry fly opportunity on mild, overcast days.",
      },
    },
    {
      "@type": "Question",
      name: "What rivers are best for trout fishing in the Smoky Mountains?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Tuckasegee River through Bryson City, the Nantahala River, Deep Creek, and the Oconaluftee River are among the top fisheries in the Smoky Mountains. The Tuckasegee and Nantahala delayed harvest sections fish well year-round. The wild streams of Great Smoky Mountains National Park offer more technical water with wild brown and rainbow trout.",
      },
    },
  ],
};

function CtaBar() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 my-8">
      <Link
        href="/reserve"
        className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/90 transition-colors w-full sm:w-fit"
      >
        Enroll Now <ArrowRight size={14} />
      </Link>
      <Link
        href="/events-calendar"
        className="inline-flex items-center justify-center gap-2 border border-primary text-primary text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/5 transition-colors w-full sm:w-fit"
      >
        See Upcoming Dates
      </Link>
    </div>
  );
}

const faqs = [
  {
    q: "What is the best month to fly fish the Smoky Mountains?",
    a: "The best month to fly fish the Smoky Mountains is March. Water temperatures climb into the ideal mid-50s range, the first major hatches of the year begin emerging, and crowds have not yet arrived. Spring overall — March through May — is the strongest season on both the delayed harvest sections and the wild streams of Great Smoky Mountains National Park.",
  },
  {
    q: "What water temperature is best for trout fishing in the Smokies?",
    a: "Mid-50s Fahrenheit is ideal. Carry a thermometer every time you fish. When temperatures push into the mid-60s in summer, trout activity drops sharply — get off the water or target warm water species instead.",
  },
  {
    q: "Can you fly fish the Smoky Mountains in summer?",
    a: "Yes, but the window is narrow. Fish early morning before the sun loads the water. Once temperatures hit the mid-60s stop fishing for trout. Summer is terrestrial season — ants, beetles, and hoppers fished tight to the banks produce well during the early morning window.",
  },
  {
    q: "Is winter fly fishing good in the Smoky Mountains?",
    a: "Yes — winter is underrated. Blue-winged olive and midge hatches produce genuine dry fly opportunity on overcast mild days. Nymphing and wet fly fishing remain productive throughout winter. The biggest advantage is solitude — world-class trout water with almost no crowds.",
  },
  {
    q: "What are the best hatches in the Smoky Mountains?",
    a: "Spring brings blue quills, quill gordons, and hendricksons early, followed by increasing variety through April and May. Fall is defined by the October Caddis hatch — aggressive dry fly takes from large brown trout. Winter midge and BWO hatches provide dry fly opportunity on mild overcast days.",
  },
  {
    q: "What rivers are best for trout fishing in the Smokies?",
    a: "The Tuckasegee River through Bryson City, the Nantahala River, Deep Creek, and the Oconaluftee River are the top fisheries. The Tuckasegee and Nantahala delayed harvest sections fish well year-round. Wild streams of Great Smoky Mountains National Park offer more technical water with wild brown and rainbow trout.",
  },
];

export default function TroutFishingSeasons() {
  return (
    <div className="w-full">
      <SchemaScript schema={faqSchema} />

      {/* HERO */}
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img
          src={img("/images/fall-river-fishing.webp")}
          srcSet={`${img("/images/fall-river-fishing-1280.webp")} 1280w, ${img("/images/fall-river-fishing.webp")} 1920w`}
          sizes="100vw"
          alt="Fly fishing on a Smoky Mountains river in fall — Bryson City, NC"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 pt-24 max-w-4xl mx-auto left-0 right-0">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-3">
            Bryson City, NC &mdash; Mac Brown Fly Fish
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
            Best Trout Fishing Seasons in the Smoky Mountains
          </h1>
        </div>
      </section>

      {/* AEO */}
      <section className="py-12 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted-foreground text-lg leading-relaxed">Trout fishing seasons in the Smoky Mountains are defined by water temperature more than calendar date — with spring (March–May) and fall (September–November) consistently producing the best conditions, the strongest hatches, and the highest fish counts of the year. Summer fishing drops significantly when water temperatures exceed 65°F — stop fishing for trout at this threshold. Winter fishing is underrated — the Tuckasegee delayed harvest and Nantahala tailwater both fish well year-round with midge and BWO activity on mild overcast days. Check the live conditions widget at macbrownflyfish.com for current water temperatures before heading out.</p>
        </div>
      </section>

      {/* BODY */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">

          <CtaBar />

          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            The best month to fly fish the Smoky Mountains is March, when water temperatures reach the ideal mid-50s range and the first major hatches of the year emerge on the Tuckasegee, Nantahala, Deep Creek, and Oconaluftee rivers. Spring and fall are the strongest seasons overall — summer fishing is limited to early mornings before temperatures hit the mid-60s, and winter produces well on BWO and midge hatches.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 leading-tight">
            Spring — Prime Time on Every Stream
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Spring is the strongest season across the board. From March through May, water temperatures sit consistently in the mid-50s — the sweet spot for trout activity on both the delayed harvest sections and the wild streams of Great Smoky Mountains National Park. The hatches drive everything in spring. Blue quills, quill gordons, and hendricksons come off early in the season and trout key on them hard after a long winter. As April and May progress the variety increases and dry fly opportunities become some of the best of the entire year. Spring on the Tuckasegee, Nantahala, Deep Creek, and the Oconaluftee gives you every technique — nymphing, wet flies, and dry fly fishing — all firing at the same time.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 leading-tight">
            Summer — Terrestrial Season, Early Mornings Only
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Summer changes the game. Once water temperatures push into the mid-60s trout activity drops sharply and the ethical choice is to target warm water species. A thermometer is not optional in summer — it is essential. The window for productive trout fishing is early morning before the sun loads the water. At first light, temperatures on the wild streams can still hold in the low 60s and trout will be actively feeding. Ants, beetles, and hoppers become the most productive patterns. Fish tight to the banks, under the rhododendron, and in broken pocket water. When temperatures hit the mid-60s — get off the trout water.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 leading-tight">
            Fall — Big Browns and the Best Scenery of the Year
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Fall rivals spring for many experienced anglers. Cooling temperatures in October and November bring trout back into full feeding mode and the delayed harvest sections of the Tuckasegee through Bryson City are firing. The October Caddis hatch is the signature event of fall in the Smokies — large orange-bodied caddis coming off in the evening produce the most aggressive dry fly takes of the year from the largest brown trout of the season. Streamer fishing in fall is equally compelling when conditions align — dropping temperatures, rising water, low light.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 leading-tight">
            Winter — BWOs, Midges, and No Crowds
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Winter is underrated on the Smokies. Blue-winged olive and midge hatches provide genuine dry fly opportunity on overcast mild days. Nymphing and wet fly fishing remain productive throughout winter on delayed harvest sections and tailwaters. The biggest advantage is solitude — world-class trout water almost entirely to yourself.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 leading-tight">
            The One Thing That Matters in Every Season
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Water temperature. It governs trout behavior more than any hatch, pattern, or technique. Mid-50s is the target. Carry a thermometer every time you step in the water and let it tell you what the fish are doing. The Smoky Mountains have over 2,400 miles of wild trout water in Swain County alone.
          </p>

          {/* FAQ */}
          <div className="mt-14 pt-10 border-t border-border">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Frequently Asked Questions
            </p>
            <div className="divide-y divide-border">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group py-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                    <span className="font-serif text-lg font-bold text-foreground leading-snug">{q}</span>
                    <span className="shrink-0 text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="block group-open:hidden"><path d="m6 9 6 6 6-6"/></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden group-open:block"><path d="m18 15-6-6-6 6"/></svg>
                    </span>
                  </summary>
                  <p className="pt-3 pb-1 text-muted-foreground leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* BOOK A GUIDED TRIP */}
          <div className="mt-14 pt-10 border-t border-border">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
              Book a Guided Trip
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Mac Brown Fly Fish offers guided float trips and wade trips on the Tuckasegee, Nantahala, and wild Smoky Mountain streams year-round. Every trip is tailored to the season, the conditions, and your goals.
            </p>
            <CtaBar />
          </div>

        </div>
      </section>
    </div>
  );
}
