import type { Metadata } from "next";
import { HeroSliderClient } from "./hero-slider-client";
import HomePage from "./home-client";
import { PriceTag } from "@/components/price-tag";
import { SchemaScript } from "@/components/schema-script";
import { SITE_ORIGIN } from "@/lib/schema";
import FaqSection from "@/components/faq-section";
import type { FaqItem } from "@/components/faq-section";

export const metadata: Metadata = {
  title: {
    absolute: "Guided Fly Fishing Trips & Schools | Smoky Mountains NC",
  },
  description:
    "Guided fly fishing trips, casting schools, and specialty clinics in the Smoky Mountains of Western NC. Expert instruction from FFI Master Casting Instructor Mac Brown in Bryson City, NC.",
  alternates: { canonical: "https://macbrownflyfish.com/" },
  openGraph: {
    title: "Guided Fly Fishing Trips & Schools | Smoky Mountains NC",
    description:
      "Guided trips, casting schools, and clinics on the Tuckasegee and Nantahala rivers. FFI Master Casting Instructor Mac Brown — Bryson City, NC.",
    url: "https://macbrownflyfish.com/",
    images: [{ url: "https://macbrownflyfish.com/images/fall-river-fishing.webp" }],
  },
  twitter: { card: "summary_large_image" },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_ORIGIN}/#website`,
  url: SITE_ORIGIN,
  name: "Mac Brown Fly Fish",
  description: "Guided fly fishing trips, casting schools, and specialty clinics in the Smoky Mountains of Western NC — led by FFI Master Casting Instructor Mac Brown since 1987.",
  publisher: { "@id": `${SITE_ORIGIN}/#business` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_ORIGIN}/?s={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const homeFaqs: FaqItem[] = [
  { q: "What does Mac Brown Fly Fish offer?", a: "Mac Brown Fly Fish offers guided fly fishing trips (float, wade, and lake), a full lineup of schools and clinics (Smoky Mountain Weekend Schools, Masterclass Casting Workshops, Spey, Saltwater, and specialty clinics), private and group casting instruction, the Oar Frame Rowing School, the Fly Fishing Guide School for career and recreational anglers, and group and corporate fly fishing events. All programs are based in Bryson City, NC in the heart of the Great Smoky Mountains." },
  { q: "Where are guided trips and schools located?", a: "All guided trips and schools are based in Bryson City, NC — in the heart of the Great Smoky Mountains, with access to 2,400+ miles of wild trout water. Guided float and wade trips run on the Tuckasegee River and surrounding mountain streams. Casting instruction and schools take place on the Tuckasegee River and at the school's facility at 779 West Deep Creek Rd, Bryson City, NC 28713." },
  { q: "What fishing license do I need to fly fish in North Carolina?", a: "You need a North Carolina Inland Fishing License — either in-state or out-of-state depending on your residency. There is no trout stamp in North Carolina. On the Tuckasegee River from October through the end of May, out-of-state visitors have the option of the Mountain Heritage Trout Waters Day License as a less expensive alternative — it is not required, just a money-saving option. Licenses are available at ncwildlife.org or any local sporting goods store." },
  { q: "Is gear provided for guided trips and schools?", a: "Yes — all gear is provided for guided trips: TFO fly rods, Scientific Anglers fly lines, all flies, leaders, and tippet. For schools and clinics, students have access to 100+ high-end fly rods and multiple line tapers. If you have your own gear you are welcome to bring it. Waders and wading boots can be arranged with advance notice." },
  { q: "Do I need experience for a guided fly fishing trip?", a: "No experience is required. Mac Brown Fly Fish guides and instructors meet every client exactly where they are — complete beginners are welcome on all guided trips and in all schools. If you have never fly fished before, our guides will have you making fishable casts and catching trout on your first day." },
  { q: "Who is Mac Brown?", a: "Mac Brown is the only FFI Master Certified Casting Instructor in North Carolina and has been guiding and teaching fly fishing in Bryson City, NC since 1987. He is a former Fly Fishing Team USA Youth Team coach, a Southern Fly Fishing Hall of Fame inductee, Field & Stream Angler of the Year, and an FFI Lifetime Achievement Award recipient. He has been a featured presenter at The Fly Fishing Show since 1994 and is the founder of Mac Brown Fly Fish and the Fly Fishing Guide School." },
  { q: "Are lunches included in schools and clinics?", a: "Yes — lunches are included for all school and clinic programs: the Fly Fishing Guide School, Smoky Mountain Weekend Schools, Masterclass Casting Workshops, Spey clinics, Saltwater clinics, the Oar Frame Rowing School, and any other multi-day school or clinic. Lunches are not included for guided float, wade, or lake trips." },
];

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const programListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mac Brown Fly Fish Programs",
  url: `${SITE_ORIGIN}/`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Start Here: Recreational Angler Path",
      url: `${SITE_ORIGIN}/programs-overview/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Fly Fishing Guide School",
      url: `${SITE_ORIGIN}/fly-fishing-guide-school/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Smoky Mountain Weekend Schools",
      url: `${SITE_ORIGIN}/smoky-mountain-weekend-schools/`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Masterclass Casting Workshops",
      url: `${SITE_ORIGIN}/masterclass-fly-casting-workshop/`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Fly Casting Instruction",
      url: `${SITE_ORIGIN}/fly-casting-instruction/`,
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Oar Frame Rowing School",
      url: `${SITE_ORIGIN}/drift-boat-rowing-school/`,
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Guided Trips",
      url: `${SITE_ORIGIN}/instructional-guided-trips/`,
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "Groups, Corporate & Presentations",
      url: `${SITE_ORIGIN}/group-corporate-fly-fishing/`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <SchemaScript schema={webSiteSchema} />
      <SchemaScript schema={homeFaqSchema} />
      <SchemaScript schema={programListSchema} />
      <link
        rel="preload"
        as="image"
        href="/images/fall-river-fishing.webp"
        imageSrcSet="/images/mobile/fall-river-fishing.webp 800w, /images/fall-river-fishing-1100.webp 1100w, /images/fall-river-fishing.webp 1440w"
        imageSizes="100vw"
        fetchPriority="high"
      />
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden">
        <HeroSliderClient />
      </section>

      {/* AEO */}
      <section className="py-10 md:py-14 px-6 max-w-3xl mx-auto text-center">
        <p className="text-muted-foreground leading-relaxed">
          Mac Brown Fly Fish is Western North Carolina&apos;s premier fly fishing school, casting instruction program, and guide service — based in Bryson City since 1987 and led by Mac Brown, the only FFI Master Casting Instructor in North Carolina and a Southern Fly Fishing Hall of Fame inductee. Weekend fly fishing schools include four Smoky Mountain clinics (Dry Fly, Wet Fly, Nymph, and Streamer) and three Masterclass casting workshops (Spey Elite Casting, Saltwater Fly Casting, and Fly Casting Mastery) — all priced at{" "}<PriceTag priceKey="weekendFlyFishingSchool" as="span" />. The Fly Fishing Guide School serves two paths: recreational anglers who want to build a professional-level foundation without pursuing a guide career, and aspiring guides seeking 4-day intensive training covering casting at a teaching level, drift boat rowing, water reading, entomology, and client communication. The Oar Frame Rowing School is a dedicated 2-day rowing program (<PriceTag priceKey="riverNavigationAcademy" as="span" />) covering drift boat fundamentals, river reading, and boat control. Private casting instruction runs{" "}<PriceTag priceKey="flyCastingInstruction" as="span" /> for 1–3 hour sessions covering single-hand, switch, and Spey at any skill level. Guided wade and float trips on the Tuckasegee, Nantahala, and surrounding rivers start at{" "}<PriceTag priceKey="guidedWadeOrFloat" part="half" as="span" /> — all gear provided, no experience required. Custom group and corporate fly fishing events accommodate 2 to 200+ participants, including casting clinics, stream-side outings, and banquet presentations for organizations nationwide.
        </p>
      </section>

      {/* Rest of homepage */}
      <HomePage />

      <FaqSection items={homeFaqs} />
    </>
  );
}
