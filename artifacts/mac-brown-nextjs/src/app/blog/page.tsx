import type { Metadata } from "next";
import Blog from "./blog-client";

export const metadata: Metadata = {
  title: { absolute: "Fly Fishing Blog — Reports & Stories from the Smokies" },
  description:
    "Articles on fly casting technique, entomology, reading water, and guided fly fishing in Western North Carolina by Mac Brown — FFI Master Casting Instructor, Bryson City, NC.",
  alternates: { canonical: "https://macbrownflyfish.com/blog/" },
  openGraph: {
    title: "Fly Fishing Blog | Mac Brown Fly Fish",
    description:
      "Fly casting technique, entomology, reading water, and guided fishing in the Smoky Mountains. Written by Mac Brown.",
    url: "https://macbrownflyfish.com/blog/",
    images: [{ url: "https://macbrownflyfish.com/images/fall-river-fishing.webp" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return <Blog />;
}
