import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Master Fly Casting Workshop — Elite Instruction",
  description:
    "An intensive fly casting masterclass for serious anglers. Improve accuracy, distance, and presentation with one of America's top certified casting instructors.",
  alternates: { canonical: "https://macbrownflyfish.com/masterclass-fly-casting-workshop/" },
  openGraph: {
    title: "Master Fly Casting Workshop — Elite Instruction | Mac Brown Fly Fish",
    description:
      "An intensive fly casting masterclass for serious anglers. Improve accuracy, distance, and presentation with one of America's top certified casting instructors.",
    url: "https://macbrownflyfish.com/masterclass-fly-casting-workshop/",
    images: [{ url: "https://macbrownflyfish.com/images/masterclass/mc-07.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Fly Casting Workshop — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/masterclass/mc-07.webp"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
