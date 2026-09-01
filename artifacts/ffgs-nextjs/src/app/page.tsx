import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { HeroSlider } from "@/components/hero-slider";
import { HomeAeoParagraph } from "@/components/home-aeo-paragraph";
import { HomeFaqSection } from "@/components/home-faq-section";
import { img } from "@/lib/utils";
import {
  MBFF_CASTING,
  MBFF_WEEKEND_SCHOOLS,
  MBFF_MASTERCLASS,
  MBFF_SEMINARS,
  MBFF_ROWING_SCHOOL,
} from "@/lib/mbff";

export const metadata: Metadata = {
  title: { absolute: "Fly Fishing Guide School & Training | Smoky Mountains NC" },
  description:
    "Four-day fly fishing guide school in the Smoky Mountains. Train under FFI Master Instructors, learn to row, read water, and launch your guide career.",
  alternates: {
    canonical: "https://flyfishingguideschool.com/",
  },
  openGraph: {
    title: "Fly Fishing Guide School | Professional Guide Training | Smoky Mountains NC",
    description:
      "Train under Master Casting Instructors in the Smoky Mountains. Four-day guide school for career changers and skilled anglers alike.",
    url: "https://flyfishingguideschool.com/",
    images: [
      {
        url: "https://flyfishingguideschool.com/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Fly Fishing Guide School — Smoky Mountains, NC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fly Fishing Guide School | Professional Guide Training | Smoky Mountains NC",
    images: [
      "https://flyfishingguideschool.com/opengraph.jpg",
    ],
  },
};

const itinerary = [
  {
    day: "Thursday",
    title: "Getting Started Together",
    items: [
      "Meeting your instructors and fellow students — names, faces, stories from the water",
      "Finding your gear — 100+ rods and multiple lines to try until something clicks",
      "Your first casts: building a stroke that starts to feel comfortable and natural",
      "A first look at moving water — where fish live, why they're there, and how to approach them",
      "Evening: Mac Brown's library of 300+ fly fishing books and films, and easy conversation about what the week holds",
    ],
  },
  {
    day: "Friday",
    title: "Your First Full Day on the River",
    items: [
      "Wading real mountain streams in the Smoky Mountains — your first full day on trout water",
      "Dry fly fishing — drifting a fly on the surface and watching a fish come up to take it",
      "Reading the water: where the fish are holding, why they're there, and how to reach them quietly",
      "Understanding what fish are eating and choosing a fly that makes sense for the moment",
      "Hook sets, landing fish, and releasing them well — the whole picture, start to finish",
    ],
  },
  {
    day: "Saturday",
    title: "More Water, More Techniques",
    items: [
      "Nymph fishing — the methods that catch fish when nothing is rising to the surface",
      "Streamer and wet fly fishing — searching the water actively, thinking like a hunter",
      "Switch rod and two-handed casting — a different feel that opens up entirely new water",
      "A full day on bigger, faster water — reading current, finding lies, and unlocking everything the week has built toward",
      "Rowing instruction for those on the guide career path — reading the river from the seat",
    ],
  },
  {
    day: "Sunday",
    title: "Putting It All Together & Celebration",
    items: [
      "A final morning on the water — looking back at how far the week has brought you",
      "Open fishing time with instructors nearby — questions, refinements, one last good cast",
      "For those on the guide career path: licensing, job placement, and the road ahead",
      "Graduation celebration — the evening belongs to the class, the stories, and what comes next",
    ],
  },
];

const instructorStats = [
  { stat: "4", label: "FFI Master Casting Instructors" },
  { stat: "5", label: "Certified Whitewater Rowing Instructors" },
  { stat: "3", label: "Fly Fishing Team USA Members" },
  { stat: "4", label: "Fly Fishing Team USA Coaches" },
  { stat: "3", label: "Book & National Magazine Authors" },
  { stat: "2", label: "Hall of Fame Inductees" },
  { stat: "1", label: "Field & Stream Angler of the Year" },
  { stat: "450+", label: "Combined Years of Field Experience" },
];

const tracks = [
  {
    title: "Smoky Mountain Fly Fishing School for Recreational Anglers",
    desc: "Four days on the Tuckasegee River and Smoky Mountain streams under FFI Master Instructors. For serious anglers who want to fish at a level they've never reached — no guide career required.",
    href: "/smoky-mountain-fly-fishing-school/",
    img: img("/images/client-woman-brown-trout.webp"),
    imgMobile: img("/images/mobile/client-woman-brown-trout.webp"),
    imgW: 1920,
  },
  {
    title: "Professional Guide Training",
    desc: "Four days of on-water immersion — rowing, water reading, client communication, licensing, and job placement. The nation's most credentialed guide school since 1987.",
    href: "/fly-fishing-guide-school/",
    img: img("/images/guide-school-rowing.webp"),
    imgMobile: img("/images/mobile/guide-school-rowing.webp"),
    imgW: 1920,
  },
  {
    title: "Fly Casting Instruction",
    desc: "Private and group casting lessons with FFI Master Casting Instructors. Fix your loop, add distance, and fish more difficult water effectively.",
    href: MBFF_CASTING,
    img: img("/images/fly-casting-instruction.webp"),
    imgMobile: null,
    imgW: 800,
  },
  {
    title: "New to Fly Fishing",
    desc: "Never picked up a rod? Start here. Learn the exact physics-based foundation used to train competitive champions — and skip five years of bad habits before they form.",
    href: "/new-to-fly-fishing/",
    img: img("/images/youth-kids-casting-class.webp"),
    imgMobile: null,
    imgW: 800,
  },
  {
    title: "NC Smoky Mountain Weekend Fly Fishing Schools",
    desc: "Weekend and multi-day schools covering entomology, reading water, tactics, and on-stream application in western North Carolina's legendary waters.",
    href: MBFF_WEEKEND_SCHOOLS,
    img: img("/images/smokies-river-fall.webp"),
    imgMobile: img("/images/mobile/smokies-river-fall.webp"),
    imgW: 1920,
  },
  {
    title: "Masterclass Fly Casting Workshop",
    desc: "An intensive casting clinic built for serious anglers. Unlock advanced loop control, distance, and accuracy under the guidance of an FFI Master Casting Instructor.",
    href: MBFF_MASTERCLASS,
    img: img("/images/advanced-casting-class-atlanta-ga.webp"),
    imgMobile: null,
    imgW: 800,
  },
  {
    title: "Fly Fishing Seminars & Lectures for Your Club",
    desc: "Bring world-class fly fishing education to your club or group. Mac Brown delivers engaging seminars on casting mechanics, tactics, and reading water for any skill level.",
    href: MBFF_SEMINARS,
    img: img("/images/fly-school-1.webp"),
    imgMobile: img("/images/mobile/fly-school-1.webp"),
    imgW: 810,
  },
  {
    title: "Oar Frame Rowing School",
    desc: "A fun, two-day drift boat rowing school in Bryson City, NC — led by instructors with 450 years of combined rowing experience. Built for recreational anglers who already own a boat, plus families and adventure seekers ready to get out on the water safely and confidently.",
    href: MBFF_ROWING_SCHOOL,
    img: img("/images/drift-boat-hero.webp"),
    imgMobile: img("/images/mobile/drift-boat-hero.webp"),
    imgW: 1920,
  },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://flyfishingguideschool.com/",
        "url": "https://flyfishingguideschool.com/",
        "name": "Fly Fishing Guide School & Training | Smoky Mountains NC",
        "description": "Four-day fly fishing guide school in the Smoky Mountains. Train under FFI Master Instructors, learn to row, read water, and launch your guide career.",
        "about": { "@id": "https://flyfishingguideschool.com/#business" },
        "primaryImageOfPage": { "@type": "ImageObject", "url": "https://flyfishingguideschool.com/images/smokies-river-fall.webp" },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "@id": "https://flyfishingguideschool.com/fly-fishing-guide-school/#course",
        "name": "4-Day Fly Fishing Guide School",
        "description": "The Fly Fishing Guide School in Bryson City, NC is the only professional guide training program of its kind in the eastern United States — a 4-day immersive curriculum taught by 4 FFI Master Certified Casting Instructors, 3 Fly Fishing Team USA members, Team USA coaches, and Hall of Fame inductees with 450+ combined years of on-water experience. Students learn fly casting physics, drift boat rowing, water reading, stream entomology, dry fly and nymph fishing, streamer and wet fly tactics, switch rod and Spey casting, client communication, and the business of guiding including NC licensing and job placement. Designed for career changers ready to guide professionally and serious recreational anglers who want to fish at a completely different level — no prior experience required.",
        "url": "https://flyfishingguideschool.com/fly-fishing-guide-school/",
        "provider": { "@id": "https://flyfishingguideschool.com/#business" },
        "instructor": { "@type": "Person", "@id": "https://flyfishingguideschool.com/#mac-brown", "name": "Mac Brown" },
        "inLanguage": "en",
        "educationalLevel": "Beginner to Professional",
        "coursePrerequisites": "No prior fly fishing experience required.",
        "teaches": ["Fly casting physics and technique", "Drift boat rowing and river navigation", "Reading water and locating trout", "Dry fly, nymph, streamer, and wet fly tactics", "Switch rod and Spey casting", "Stream entomology and hatch matching", "Client communication and guiding methodology", "NC guide licensing, permitting, and career placement"],
        "offers": { "@type": "Offer", "price": "4850", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://flyfishingguideschool.com/reservation-form/" },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://flyfishingguideschool.com/#website",
        "url": "https://flyfishingguideschool.com",
        "name": "Fly Fishing Guide School",
        "description": "The only professional fly fishing guide training program in the eastern United States — Bryson City, NC since 1987.",
        "publisher": { "@id": "https://flyfishingguideschool.com/#business" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": { "@type": "EntryPoint", "urlTemplate": "https://flyfishingguideschool.com/?s={search_term_string}" },
          "query-input": "required name=search_term_string",
        },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the Fly Fishing Guide School?", "acceptedAnswer": { "@type": "Answer", "text": "The Fly Fishing Guide School in Bryson City, NC is the only professional fly fishing guide training program in the eastern United States. It is a 4-day immersive school taught by 4 FFI Master Certified Casting Instructors, 3 Fly Fishing Team USA members, Team USA coaches, and Hall of Fame inductees with 450+ combined years of on-water experience. The school covers fly casting, drift boat rowing, water reading, entomology, dry fly and nymph fishing, streamer tactics, client communication, and NC guide licensing." } },
          { "@type": "Question", "name": "How much does the Fly Fishing Guide School cost?", "acceptedAnswer": { "@type": "Answer", "text": "Tuition for the Fly Fishing Guide School is $4,850 for the full 4-day program. Tuition includes access to 100+ fly rods, fly tying instruction and materials, Mac Brown's personal library of 300+ fly fishing books and DVDs, a worldwide job placement directory, and the graduation celebration. Lodging is arranged separately." } },
          { "@type": "Question", "name": "Who is the Fly Fishing Guide School for?", "acceptedAnswer": { "@type": "Answer", "text": "The school serves two groups: career changers who want to become professional fly fishing guides, and serious recreational anglers who want to fish at a completely different level without pursuing a guide career. The curriculum, faculty, and on-water time are identical for both. The guide career track adds NC licensing, client communication, and job placement. Both tracks leave students transformed." } },
          { "@type": "Question", "name": "How long is the program and when does it run?", "acceptedAnswer": { "@type": "Answer", "text": "The Fly Fishing Guide School is a 4-day program running Thursday through Sunday. Sessions run March through November in Bryson City, NC. Bryson City's milder mountain climate allows a longer season than any other guide school in the region. Sessions fill months in advance — early reservation is strongly recommended." } },
          { "@type": "Question", "name": "Do I need prior fly fishing experience to attend?", "acceptedAnswer": { "@type": "Answer", "text": "No prior experience is required. Complete beginners have attended and done extremely well. We meet every student where they are and build from there. The only requirement is a genuine desire to improve on the water." } },
          { "@type": "Question", "name": "Who is Mac Brown?", "acceptedAnswer": { "@type": "Answer", "text": "Mac Brown is the only FFI Master Certified Casting Instructor in North Carolina and has been guiding and teaching fly fishing in Bryson City since 1987. He is a former Fly Fishing Team USA Youth Team coach, a Hall of Fame inductee, and a recipient of the FFI Lifetime Achievement Award. He has been a featured presenter at The Fly Fishing Show since 1994." } },
          { "@type": "Question", "name": "Is lodging included in the tuition?", "acceptedAnswer": { "@type": "Answer", "text": "Lodging is not included in the tuition, but Bryson City has excellent options at every price point — from riverside cabins and downtown B&Bs to hotels within minutes of the water. Most students stay 4–5 nights. The school is happy to recommend favorites." } },
        ],
      }) }} />
    <div className="w-full">
      <link rel="preload" as="image" href="/images/smoky-mountains-layers-1280.webp" fetchPriority="high" imageSrcSet="/images/mobile/smoky-mountains-layers-500.webp 500w, /images/mobile/smoky-mountains-layers.webp 800w, /images/smoky-mountains-layers-1280.webp 1280w, /images/smoky-mountains-layers.webp 1920w" imageSizes="100vw" />
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden">
        <HeroSlider />
      </section>

      {/* TWO TRACKS */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Two Paths. One School.
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Which brings you here?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Whether you simply want to fish at a level you never thought
            possible — or you&apos;re chasing a career in the outdoors — the
            week is built for you.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-0">
          <Link
            href="/smoky-mountain-fly-fishing-school/"
            className="group relative overflow-hidden aspect-video flex items-end"
          >
            <img
              src={img("/images/client-woman-brown-trout.webp")}
              srcSet={`${img("/images/mobile/client-woman-brown-trout.webp")} 800w, ${img("/images/client-woman-brown-trout-1280.webp")} 1280w, ${img("/images/client-woman-brown-trout.webp")} 1920w`}
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Angler holding a brown trout — Smoky Mountain Fly Fishing School for Recreational Anglers"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 p-8">
              <p className="text-white/60 text-[10px] font-medium uppercase tracking-[0.3em] mb-2">
                Recreational Track
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                Fish at a Whole New Level
              </h3>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-white/80 uppercase tracking-[0.15em] group-hover:gap-4 transition-all">
                Explore <ArrowRight size={12} />
              </span>
            </div>
          </Link>
          <Link
            href="/fly-fishing-guide-school/"
            className="group relative overflow-hidden aspect-video flex items-end"
          >
            <img
              src={img("/images/guide-school-casting.webp")}
              alt="Career guide track"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 p-8">
              <p className="text-white/60 text-[10px] font-medium uppercase tracking-[0.3em] mb-2">
                Career Track
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                Launch Your Guide Career
              </h3>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-white/80 uppercase tracking-[0.15em] group-hover:gap-4 transition-all">
                Explore <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 md:py-36">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Bryson City, NC &mdash; The Only Guide School in the Eastern United States &mdash; Since 1987
          </p>
          <HomeAeoParagraph />
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
            Four days that change<br />the way you fish forever.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Most anglers spend decades self-teaching — picking up habits, filling gaps with guesswork, wondering why certain situations on the water always fall apart. Four days at the Fly Fishing Guide School in Bryson City, NC changes all of that. You leave understanding fly fishing from the inside out — the strategy, the technique, and the confidence that only comes from real instruction on real water.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you are here to <Link href="/blog/learn-how-to-become-a-fly-fishing-guide-and-instructor/">launch a guide career</Link> or simply fish at a level you never thought possible — the instruction, the water, and the team waiting for you in the Smoky Mountains are unlike anything available anywhere else in the eastern United States.
          </p>
          <Link
            href="/meet-rowing-fly-casting-fly-fishing-instructors/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-[0.15em] hover:gap-4 transition-all"
          >
            Meet the Instructors <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* DAILY ITINERARY */}
      <section className="py-28 md:py-36 bg-muted/30 border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
              The Week
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Happens Each Day
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Four days, fully structured, with purpose behind every hour. Here is the arc of the week from Thursday morning to Sunday evening.
            </p>
          </div>
          <div className="space-y-4">
            {itinerary.map((day, i) => (
              <div key={i} className="bg-background border border-border p-8">
                <div className="flex flex-wrap items-baseline gap-4 mb-5">
                  <span className="font-serif text-4xl font-bold text-primary leading-none">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{day.day}</span>
                    <h3 className="font-serif text-xl font-bold text-foreground mt-0.5">{day.title}</h3>
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {day.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check size={14} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-muted-foreground text-sm italic">
            Schedule is subject to adjustment based on water conditions, hatches, and group needs — the best days on the water rarely follow a script.
          </p>
        </div>
      </section>

      {/* DIVIDER IMAGE */}
      <section className="w-full aspect-[1024/426] overflow-hidden">
        <img
          src={img("/images/wild-brown-trout.webp")}
          srcSet={`${img("/images/mobile/wild-brown-trout.webp")} 800w, ${img("/images/wild-brown-trout.webp")} 1024w`}
          sizes="100vw"
          alt="Wild brown trout from the Smoky Mountains"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </section>

      {/* INSTRUCTOR TEAM */}
      <section className="py-28 md:py-36">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
              The Faculty
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Most Credentialed Instructor Team in North America
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              No other guide school in North America has assembled a teaching faculty like this — 4 FFI Master Certified Casting Instructors, 5 certified whitewater rowing instructors, 4 Fly Fishing Team USA Coaches, 3 Team USA Members, 2 Hall of Fame inductees, published book and magazine authors, and a Field &amp; Stream Angler of the Year. Not a collection of working guides with strong opinions — a team of nationally recognized casting instructors, competitive anglers, and certified rowing professionals who have collectively spent more time on the water than most people spend at a career. The faculty of the Fly Fishing Guide School brings 450+ combined years of on-water professional experience. These are the people who certify, govern, and coach the rest of the industry.
            </p>
            <Link
              href="/meet-rowing-fly-casting-fly-fishing-instructors/"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-[0.15em] hover:gap-4 transition-all"
            >
              Meet Every Instructor <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {instructorStats.map((item, i) => (
              <div key={i} className="bg-muted/30 border border-border p-6 text-center">
                <span className="font-serif text-5xl font-bold text-primary block mb-2">{item.stat}</span>
                <span className="text-foreground text-sm font-semibold leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
          <blockquote className="border-l-2 border-primary pl-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground italic text-lg leading-relaxed">
              &ldquo;I am just humbly stating the facts so you know the level of professionalism you are walking into.&rdquo;
            </p>
            <footer className="mt-3 text-sm font-semibold uppercase tracking-wider text-primary">
              — Mac Brown, Bryson City NC
            </footer>
          </blockquote>
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Schools &amp; Instruction
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
              The guide school is the flagship — but it is part of a larger ecosystem of world-class fly fishing education available through Mac Brown and his team.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((t) => {
              const isExternal = t.href.startsWith("http");
              const inner = (
                <>
                  <div className="aspect-[3/2] overflow-hidden mb-6">
                    <img
                      src={t.img}
                      {...(t.imgMobile
                        ? { srcSet: `${t.imgMobile} 800w, ${t.img} ${t.imgW}w`, sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" }
                        : {})}
                      alt={t.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {t.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {t.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-[0.15em] group-hover:gap-4 transition-all">
                    Learn More <ArrowRight size={12} />
                  </span>
                </>
              );
              return isExternal ? (
                <a
                  key={t.title}
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  {inner}
                </a>
              ) : (
                <Link key={t.title} href={t.href} className="group block">
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-28 md:py-36 bg-muted/30 border-y border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="font-serif text-2xl md:text-4xl font-bold text-foreground leading-tight mb-8">
            &ldquo;Every stream has a code.
            <br />
            We teach you how to crack it.&rdquo;
          </blockquote>
          <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] mb-2">
            Mac Brown &mdash; Bryson City, NC
          </p>
          <p className="text-muted-foreground text-xs uppercase tracking-[0.15em]">
            The Triad: Strategies · Tactics · Mechanics
          </p>
        </div>
      </section>

      {/* TESTIMONIAL STRIP */}
      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              quote:
                "I learned more in five days at the Guide School than in three decades of self-taught fishing. Mac and his team are the real deal.",
              name: "Career Track Graduate",
            },
            {
              quote:
                "My casting is completely different. The strategies and tactics they taught are going to change my approach every single time I step in a river.",
              name: "Skills Track Graduate",
            },
            {
              quote:
                "First-class instructors with a wealth of knowledge. Without a doubt, this school will help you become the guide you aspire to be.",
              name: "Guide School Alumni",
            },
          ].map((t, i) => (
            <div key={i} className="flex flex-col gap-4">
              <p className="font-serif text-lg font-bold text-foreground leading-snug">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/testimonials-kudos/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-[0.15em] hover:gap-4 transition-all"
          >
            Read More Testimonials <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* FULL-BLEED CTA */}
      <section className="relative h-[50vh] overflow-hidden flex items-center justify-center">
        <img
          src={img("/images/smokies-river-fall.webp")}
          srcSet={`${img("/images/mobile/smokies-river-fall.webp")} 800w, ${img("/images/smokies-river-fall-1280.webp")} 1280w, ${img("/images/smokies-river-fall.webp")} 1920w`}
          sizes="100vw"
          alt="Smoky Mountains fly fishing"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative text-center px-6">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-8">
            Schools Fill Months in Advance
          </h2>
          <Link
            href="/reservation-form/"
            className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
          >
            Reserve Your Spot <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <HomeFaqSection />
    </div>
    </>
  );
}
