import type { Metadata } from "next";
import Contact from "./contact-client";

export const metadata: Metadata = {
  title: { absolute: "Contact — Fly Fishing Guide School, Bryson City NC" },
  description:
    "Enrollment questions, upcoming dates, private instruction, or group programs — reach the Fly Fishing Guide School in Bryson City, NC anytime.",
  alternates: { canonical: "https://flyfishingguideschool.com/contact-information-best-fly-fishing-guide-school/" },
  openGraph: {
    title: "Contact & Location | Fly Fishing Guide School",
    description:
      "Reach the Fly Fishing Guide School in Bryson City, NC. Questions about enrollment, dates, or private instruction — we answer every inquiry.",
    url: "https://flyfishingguideschool.com/contact-information-best-fly-fishing-guide-school/",
    images: [{ url: "/images/smokies-river-fall.webp", width: 1920, height: 1280, alt: "Fly fishing the Smoky Mountains — Fly Fishing Guide School" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return <Contact />;
}
