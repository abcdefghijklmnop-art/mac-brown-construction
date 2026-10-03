import type { Metadata } from "next";
import Waiver from "./waiver-client";

export const metadata: Metadata = {
  title: {
    absolute: "Liability Waiver | Mac Brown Fly Fish",
  },
  description:
    "Read and acknowledge the Mac Brown Fly Fish liability waiver before your guided trip, casting school, or clinic in Bryson City, NC.",
  alternates: { canonical: "https://macbrownflyfish.com/waiver-release/" },
  openGraph: {
    title: "Liability Waiver | Mac Brown Fly Fish",
    description: "Mac Brown Fly Fish liability waiver for guided trips, casting schools, and clinics.",
    url: "https://macbrownflyfish.com/waiver-release/",
    images: [{ url: "/images/fall-river-fishing.webp", width: 1920, height: 1280, alt: "Guided fly fishing on the Tuckasegee River — Bryson City, NC" }],
  },
};

export default function Page() {
  return <Waiver />;
}
