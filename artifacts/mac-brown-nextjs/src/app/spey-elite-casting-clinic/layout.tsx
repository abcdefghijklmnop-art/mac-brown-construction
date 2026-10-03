import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Spey Casting Clinic — Two-Handed Fly Casting",
  description:
    "Learn Spey and switch rod casting techniques with expert instruction in Western North Carolina. Clinic covers anchors, D-loops, and river application.",
  alternates: { canonical: "https://macbrownflyfish.com/spey-elite-casting-clinic/" },
  openGraph: {
    title: "Spey Elite Masterclass Clinic — Two-Handed Fly Casting School | Mac Brown Fly Fish",
    description:
      "Master Spey, Switch, and Skagit casting with North Carolina's only Master Casting Instructor. Advanced two-handed fly casting clinic in the Great Smoky Mountains.",
    url: "https://macbrownflyfish.com/spey-elite-casting-clinic/",
    images: [{ url: "https://macbrownflyfish.com/images/masterclass/mc-13.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spey Elite Masterclass Clinic — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/masterclass/mc-13.webp"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
