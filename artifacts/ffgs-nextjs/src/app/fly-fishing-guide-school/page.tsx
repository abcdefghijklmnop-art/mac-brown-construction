import type { Metadata } from "next";
import GuideSchool from "./guide-school-client";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does fly fishing guide school cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tuition for the Fly Fishing Guide School in Bryson City, NC is $4,850 for the full program. No comparable program exists in the eastern United States — four FFI Master Certified Casting Instructors, four days on some of the most productive wild trout water on the East Coast, and a career network that has placed graduates across the Southeast and out west. Lodging is not included and is arranged separately by each student.",
      },
    },
    {
      "@type": "Question",
      name: "What does the Fly Fishing Guide School week cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 4-day program runs Thursday through Sunday and covers fly casting physics, dry fly and nymph fishing, drift boat rowing, stream entomology, streamer and wet fly tactics, switch rod and Spey casting, fly casting diagnostics, client communication, and the business of guiding — including licensing, permitting, and job placement. Every topic is taught by a featured group of educators that includes FFI Master Certified Casting Instructors, Fly Fishing Team USA members, and Team USA coaches — 450+ combined years of professional experience on the water.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in the Fly Fishing Guide School tuition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tuition includes access to 100+ high-end fly rods, multiple fly line tapers, a complete fly tying setup, double-handed rod instruction, Mac Brown's personal library of 300+ fly fishing books and DVDs, a worldwide job placement directory, and the graduation celebration on the final evening.",
      },
    },
    {
      "@type": "Question",
      name: "How do I enroll in the Fly Fishing Guide School?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enrollment begins with the reservation form at flyfishingguideschool.com. Sessions run March through November in Bryson City, NC and fill months in advance. Contact the school directly at (828) 736-1469 or flyfishingguideschool@gmail.com to check availability for specific dates.",
      },
    },
    {
      "@type": "Question",
      name: "How much do fly fishing guides make?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entry-level fly fishing guides working for an outfitter or lodge typically earn between $2,400 and $3,000 per month. Experienced independent guides working their home water earn significantly more, often supplementing income with casting instruction, schools, and clinics.",
      },
    },
    {
      "@type": "Question",
      name: "When does the Fly Fishing Guide School run?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Fly Fishing Guide School runs March through November in Bryson City, North Carolina. Bryson City's milder winters allow longer seasons than any other guide school in the country. Sessions fill months in advance — early reservation is strongly recommended.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the guide school for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The school was built for growth-minded people — those serious about closing the gap between where they are now and what they're capable of on the water. Two groups attend: career changers ready to guide professionally, and serious anglers who want to fish at a completely different level. What both share is access to a featured group of educators that includes FFI Master Certified Casting Instructors, Fly Fishing Team USA members, World Championship medalists, Team USA coaches, Hall of Fame inductees, and 450+ combined years of on-water experience. The instruction is identical for both. Both leave transformed.",
      },
    },
    {
      "@type": "Question",
      name: "What does a typical day look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Days run roughly 7am–5pm and are split between classroom sessions with FFI Master Casting Instructors, casting practice on the lawn and river, drift boat training, and on-stream fishing application on the Tuckasegee River and local Smoky Mountain streams. Evening sessions are available for additional casting work or direct Q&A with Mac Brown and the instructor team.",
      },
    },
    {
      "@type": "Question",
      name: "What skill level do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Intermediate fly fishing experience is helpful but not required. Students who have never fly fished have attended and done extremely well. We meet you where you are and build from there.",
      },
    },
    {
      "@type": "Question",
      name: "How many students per school?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We keep enrollment to 8–12 students per school so each person gets substantial individual time with our Master Instructors. When you're learning from the only FFI Master Casting Instructor in North Carolina alongside Fly Fishing Team USA members, Team USA coaches, and Hall of Fame inductees, that ratio matters.",
      },
    },
    {
      "@type": "Question",
      name: "What should I bring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fly fishing gear (rod, reel, waders, wading boots), weather-appropriate clothing for 4 days on the water, a hat, polarized sunglasses, a box of flies (we'll advise on patterns), and a notebook. Loaner gear can be arranged with advance notice.",
      },
    },
    {
      "@type": "Question",
      name: "Is lodging included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lodging is not included in the tuition, but Bryson City has excellent options at every price point — from riverside cabins to downtown B&Bs and hotels. We're happy to recommend our favorites. Most students stay 4–5 nights.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance do schools book up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Schools often book several months in advance, especially spring and fall sessions. If you have a specific date range in mind, contact us as early as possible to check availability.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer job placement after graduation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We maintain an active network of outfitters, lodges, and shops throughout the Southeast and beyond. We actively advocate for our graduates and have placed students in guide positions across North Carolina, Tennessee, Georgia, and out west.",
      },
    },
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://flyfishingguideschool.com/fly-fishing-guide-school/#course",
  name: "4-Day Fly Fishing Guide School",
  description: "The Fly Fishing Guide School in Bryson City, NC is the only professional guide training program of its kind in the eastern United States — a 4-day immersive curriculum taught by 4 FFI Master Certified Casting Instructors, 3 Fly Fishing Team USA members, Team USA coaches, and Hall of Fame inductees with 450+ combined years of on-water experience. Students learn fly casting physics, drift boat rowing, water reading, stream entomology, dry fly and nymph fishing, streamer and wet fly tactics, switch rod and Spey casting, client communication, and the business of guiding including NC licensing and job placement. Designed for career changers ready to guide professionally and serious recreational anglers who want to fish at a completely different level — no prior experience required. Located on the Tuckasegee River in Bryson City, NC, in the heart of 2,400+ miles of wild Smoky Mountain trout water.",
  url: "https://flyfishingguideschool.com/fly-fishing-guide-school/",
  image: "https://flyfishingguideschool.com/images/smokies-river-fall.webp",
  provider: { "@id": "https://flyfishingguideschool.com/#business" },
  instructor: {
    "@type": "Person",
    "@id": "https://flyfishingguideschool.com/#mac-brown",
    name: "Mac Brown",
    jobTitle: "FFI Master Certified Casting Instructor",
    url: "https://flyfishingguideschool.com/meet-rowing-fly-casting-fly-fishing-instructors/",
  },
  inLanguage: "en",
  educationalLevel: "Beginner to Professional",
  coursePrerequisites: "No prior fly fishing experience required. A genuine desire to improve on the water — whether for a career as a guide or simply to fish at a level you have never reached — is all you need.",
  teaches: [
    "Fly casting physics and technique",
    "Drift boat rowing and river navigation",
    "Reading water and locating trout",
    "Dry fly, nymph, streamer, and wet fly tactics",
    "Switch rod and Spey casting",
    "Stream entomology and hatch matching",
    "Client communication and guiding methodology",
    "NC guide licensing, permitting, and career placement",
  ],
  offers: {
    "@type": "Offer",
    price: "4850",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    validFrom: "2026-01-01",
    url: "https://flyfishingguideschool.com/reservation-form/",
  },
  hasCourseInstance: [
    { "@type": "CourseInstance", courseMode: "onsite", location: { "@type": "Place", name: "Bryson City, NC" }, startDate: "2026-10-15", endDate: "2026-10-18" },
    { "@type": "CourseInstance", courseMode: "onsite", location: { "@type": "Place", name: "Bryson City, NC" }, startDate: "2026-11-12", endDate: "2026-11-15" },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Career changers seeking guide certification and serious recreational anglers who want to fish at a professional level",
  },
};

export const metadata: Metadata = {
  title: { absolute: "4-Day Fly Fishing Guide School — Bryson City, NC" },
  description:
    "4-day guide school in Bryson City, NC — master casting, drift boat rowing, water reading, entomology, and guide business skills. FFI Certified since 1987.",
  alternates: { canonical: "https://flyfishingguideschool.com/fly-fishing-guide-school/" },
  openGraph: {
    title: "4-Day Immersive Guide Training | Fly Fishing Guide School",
    description:
      "Train under FFI Master Certified Instructors on the Tuckasegee River in the Smoky Mountains. 4-day guide school in Bryson City, NC since 1987.",
    url: "https://flyfishingguideschool.com/fly-fishing-guide-school/",
    images: ["https://flyfishingguideschool.com/images/smokies-river-fall.webp"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GuideSchool />
    </>
  );
}
