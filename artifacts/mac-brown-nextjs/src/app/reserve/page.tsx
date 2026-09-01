import type { Metadata } from "next";
import Reserve from "./reserve-client";

export const metadata: Metadata = {
  title: { absolute: "Reserve Your Trip or School — Mac Brown Fly Fish" },
  description:
    "Reserve a guided fly fishing trip, casting school, or clinic with Mac Brown Fly Fish in Bryson City, NC. Payment in full at booking holds your date.",
  alternates: { canonical: "https://macbrownflyfish.com/reserve/" },
  openGraph: {
    title: "Reserve Your Trip or School | Mac Brown Fly Fish",
    description: "Book your guided trip, casting school, or clinic with Mac Brown Fly Fish. Payment in full at booking holds your date.",
    url: "https://macbrownflyfish.com/reserve/",
    images: [{ url: "/images/fall-river-fishing.webp", width: 1920, height: 1280, alt: "Guided fly fishing on the Tuckasegee River — Bryson City, NC" }],
  },
};

export default function Page() {
  return <Reserve />;
}
