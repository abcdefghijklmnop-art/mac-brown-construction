import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Fly Casting Mastery Workshop",
  description:
    "Two full days of advanced fly casting instruction in the Smoky Mountains. Perfect for experienced anglers ready to sharpen their technique.",
  alternates: { canonical: "https://macbrownflyfish.com/fly-casting-mastery-workshop/" },
  openGraph: {
    title: "Fly Casting Mastery Workshop | Mac Brown Fly Fish",
    description:
      "Two-day advanced fly casting school with NC's only FFI Master Casting Instructor. Master loop control, distance, accuracy, and the casts that actually catch fish. April & September 2026.",
    url: "https://macbrownflyfish.com/fly-casting-mastery-workshop/",
    images: [{ url: "https://macbrownflyfish.com/images/masterclass/mc-07.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fly Casting Mastery Workshop — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/masterclass/mc-07.webp"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
