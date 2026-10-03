import type { Metadata } from "next";
import FlyCastingCredentials from "./certifications-client";

export const metadata: Metadata = {
  title: { absolute: "Fly Casting Certifications — FFI Credentials & Awards" },
  description:
    "Mac Brown holds the FFI Lifetime Achievement in Fly Casting Education Award and is one of a handful of Master Certified Casting Instructors in the world. His credentials are unmatched in the Southeast.",
  alternates: { canonical: "https://macbrownflyfish.com/fly-fishing-certifications/" },
  openGraph: {
    title: "Fly Casting Certifications & Awards | Mac Brown Fly Fish",
    description:
      "FFI Lifetime Achievement Award recipient and Master Certified Casting Instructor. Mac Brown's credentials are unmatched in the Southeast.",
    url: "https://macbrownflyfish.com/fly-fishing-certifications/",
    images: [{ url: "https://macbrownflyfish.com/images/mac-headshot.webp" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return <FlyCastingCredentials />;
}
