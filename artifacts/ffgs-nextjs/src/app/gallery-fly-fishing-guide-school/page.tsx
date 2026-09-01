import type { Metadata } from "next";
import Gallery from "./gallery-client";

export const metadata: Metadata = {
  title: { absolute: "Photo Gallery — Fly Fishing Guide School, Bryson City NC" },
  description:
    "Students on the water, drift boat rowing, and fly casting instruction in the Great Smoky Mountains. See the Fly Fishing Guide School in action.",
  alternates: { canonical: "https://flyfishingguideschool.com/gallery-fly-fishing-guide-school/" },
  openGraph: {
    title: "Photo Gallery | Fly Fishing Guide School",
    description:
      "See the Fly Fishing Guide School in action — casting instruction, drift boat training, and some of the finest trout water in Western NC.",
    url: "https://flyfishingguideschool.com/gallery-fly-fishing-guide-school/",
    images: ["https://flyfishingguideschool.com/images/smokies-river-fall.webp"],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What do four days at Fly Fishing Guide School actually look like?",
            "acceptedAnswer": { "@type": "Answer", "text": "A mix of on-water casting instruction, drift boat training, and real time on wild trout water in the Great Smoky Mountains. Students spend their days rotating between hands-on coaching, rigging and tactics, and guided sessions on rivers like the Tuckasegee." }
          },
          {
            "@type": "Question",
            "name": "Is Fly Fishing Guide School only for people who want to become professional guides?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. Most students attend simply to become stronger, more confident recreational anglers — not to pursue guiding as a career. The school works equally well for both: everyone trains on the same curriculum and the same water, whether your goal is a lifetime of better fishing or a future behind the oars." }
          },
          {
            "@type": "Question",
            "name": "Do I need any experience to attend Fly Fishing Guide School?",
            "acceptedAnswer": { "@type": "Answer", "text": "No experience is necessary. Programs are built to meet beginners exactly where they are, with all instruction designed around a no-guesswork, structured foundation — not trial and error." }
          },
          {
            "@type": "Question",
            "name": "What rivers and water will I fish at Fly Fishing Guide School?",
            "acceptedAnswer": { "@type": "Answer", "text": "Students train on wild trout water throughout the Great Smoky Mountains region, including the Tuckasegee River, with access to over 2,400 miles of wild trout water in Swain County alone." }
          },
          {
            "@type": "Question",
            "name": "Is Fly Fishing Guide School suitable for kids or families?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Youth casting clinics are part of the program, with students of all ages — from first-time youth anglers to adults building a lifetime skill." }
          },
        ],
      }) }} />
      <Gallery />
    </>
  );
}
