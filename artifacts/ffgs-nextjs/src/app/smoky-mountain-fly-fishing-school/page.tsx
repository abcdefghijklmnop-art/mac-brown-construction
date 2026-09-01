import type { Metadata } from "next";
import RecreationalSchool from "./recreational-school-client";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is the Smoky Mountain Fly Fishing School for recreational anglers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is for any fly fisher who wants to catch more fish and actually understand why — not to guide professionally, just to fish at a level they have never reached. Students come from all experience levels. The only requirement is a genuine desire to improve.",
      },
    },
    {
      "@type": "Question",
      name: "How is the recreational track different from the guide training track?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The curriculum, instructor team, and on-water time are identical. Guide track students add NC guide licensing, client communication, and business basics. Recreational track students focus entirely on their own fishing — no licensing, no client management. Both leave fishing at a completely different level.",
      },
    },
    {
      "@type": "Question",
      name: "What does the Smoky Mountain Fly Fishing School curriculum cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "How to cast well, how to find fish, how to fish on top with a dry fly, how to fish below the surface, how to fish bigger flies for bigger trout, how to swing a wet fly through a run, what trout are eating and how to match it, and how to set your line up correctly. Every day includes real fishing time on the Tuckasegee River and local mountain creeks.",
      },
    },
    {
      "@type": "Question",
      name: "What skill level do I need for fly fishing school?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any level is fine. Complete beginners have attended and done great, and experienced anglers who have been fishing for twenty years still leave with things they had never been shown. We meet you where you are. The only thing that matters is that you genuinely want to improve.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in fly fishing school tuition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tuition covers everything in the program — daily time on the river, access to over 100 fly rods so you can try different setups, fly tying instruction and materials, and Mac Brown's personal library of 300+ fly fishing books and DVDs. If you need to borrow gear, just let us know in advance.",
      },
    },
    {
      "@type": "Question",
      name: "When does the Smoky Mountain Fly Fishing School run?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sessions run March through November in Bryson City, North Carolina. Bryson City's milder mountain climate allows a longer season than any other school in the region.",
      },
    },
    {
      "@type": "Question",
      name: "Is lodging included in fly fishing school tuition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lodging is not included in the tuition, but Bryson City has excellent options at every price point — from riverside cabins and downtown B&Bs to hotels within minutes of the water. Most students stay five to six nights.",
      },
    },
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://flyfishingguideschool.com/smoky-mountain-fly-fishing-school/#course",
  name: "Smoky Mountain Fly Fishing School for Recreational Anglers",
  description: "The Smoky Mountain Fly Fishing School is a 4-day recreational fly fishing program in Bryson City, NC — designed for anglers at any experience level who want to fish at a level they have never reached. Led by 4 FFI Master Certified Casting Instructors and Fly Fishing Team USA coaches with 450+ combined years of on-water experience, the curriculum covers fly casting, reading water and locating trout, dry fly and nymph fishing, streamer and wet fly tactics, stream entomology, and leader and tippet setup. Every concept is practiced on the Tuckasegee River and local Smoky Mountain streams in real fishing conditions. This is the recreational track of the Fly Fishing Guide School — the only professional guide training program in the eastern United States — open to anyone who loves fly fishing and wants to genuinely understand it.",
  url: "https://flyfishingguideschool.com/smoky-mountain-fly-fishing-school/",
  image: "https://flyfishingguideschool.com/images/client-nantahala-brown.webp",
  inLanguage: "en",
  courseMode: "onsite",
  educationalLevel: "Beginner to Advanced",
  coursePrerequisites: "No prior fly fishing experience required. Open to all skill levels — from complete beginners to experienced anglers who want to close the gap between where they are and what they are capable of on the water.",
  teaches: [
    "Fly casting technique and mechanics",
    "Reading water and locating trout",
    "Dry fly fishing and presentation",
    "Nymph fishing below the surface",
    "Streamer fishing for larger trout",
    "Wet fly and soft hackle tactics",
    "Stream entomology and hatch matching",
    "Leader and tippet setup",
  ],
  provider: { "@id": "https://flyfishingguideschool.com/#business" },
  instructor: {
    "@type": "Person",
    "@id": "https://flyfishingguideschool.com/#mac-brown",
    name: "Mac Brown",
    jobTitle: "FFI Master Certified Casting Instructor",
    url: "https://flyfishingguideschool.com/meet-rowing-fly-casting-fly-fishing-instructors/",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "4850",
    availability: "https://schema.org/InStock",
    validFrom: "2026-01-01",
    url: "https://flyfishingguideschool.com/reservation-form/",
  },
  hasCourseInstance: [
    { "@type": "CourseInstance", courseMode: "onsite", location: { "@type": "Place", name: "Bryson City, NC" }, startDate: "2026-10-14", endDate: "2026-10-18" },
    { "@type": "CourseInstance", courseMode: "onsite", location: { "@type": "Place", name: "Bryson City, NC" }, startDate: "2026-11-11", endDate: "2026-11-15" },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Recreational fly fishers of all experience levels who want to fish better and understand trout streams from the inside out",
  },
};

export const metadata: Metadata = {
  title: { absolute: "Smoky Mountain Fly Fishing School for Recreational Anglers — Bryson City, NC" },
  description:
    "4-day fly fishing school in the Smoky Mountains for anglers who want to fish better. Casting, water reading, dry fly, nymph, streamer, and wet fly instruction under FFI Master Certified Instructors. Bryson City, NC.",
  alternates: { canonical: "https://flyfishingguideschool.com/smoky-mountain-fly-fishing-school/" },
  openGraph: {
    title: "Smoky Mountain Fly Fishing School for Recreational Anglers",
    description:
      "Four days on the Tuckasegee River under the most credentialed fly fishing faculty in the eastern US. Not for aspiring guides — for anglers who want to catch more fish and actually understand why.",
    url: "https://flyfishingguideschool.com/smoky-mountain-fly-fishing-school/",
    images: ["https://flyfishingguideschool.com/images/client-nantahala-brown.webp"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <RecreationalSchool />
    </>
  );
}
