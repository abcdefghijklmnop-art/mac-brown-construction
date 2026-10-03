import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Saltwater Fly Casting Masterclass — Distance & Accuracy",
  description:
    "Prepare for saltwater fly fishing with elite casting instruction. Mac Brown's saltwater masterclass covers wind casting, distance, and accuracy under pressure.",
  alternates: { canonical: "https://macbrownflyfish.com/saltwater-fly-casting-elite-masterclass-workshop/" },
  openGraph: {
    title: "Saltwater Fly Casting Elite Masterclass Workshop | Mac Brown Fly Fish",
    description:
      "Two-day saltwater fly casting masterclass with NC's only FFI Master Casting Instructor. Master distance, accuracy, wind casting, and the double haul before your next flats trip.",
    url: "https://macbrownflyfish.com/saltwater-fly-casting-elite-masterclass-workshop/",
    images: [{ url: "https://macbrownflyfish.com/images/masterclass/mc-14.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saltwater Fly Casting Elite Masterclass — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/masterclass/mc-14.webp"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
