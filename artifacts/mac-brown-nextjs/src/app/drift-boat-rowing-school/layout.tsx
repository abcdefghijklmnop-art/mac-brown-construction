import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Row Your Own Water — Oar Frame Rowing School | Mac Brown Fly Fish",
  description:
    "Learn to row a drift boat on moving water in the Great Smoky Mountains. Mac Brown's Oar Frame Rowing School covers oar technique, river reading, boat control, and safety.",
  alternates: { canonical: "https://macbrownflyfish.com/drift-boat-rowing-school/" },
  openGraph: {
    title: "Row Your Own Water — Oar Frame Rowing School | Mac Brown Fly Fish",
    description:
      "Learn to row a drift boat on moving water in the Great Smoky Mountains. Mac Brown's Oar Frame Rowing School covers oar technique, river reading, boat control, and safety.",
    url: "https://macbrownflyfish.com/drift-boat-rowing-school/",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
