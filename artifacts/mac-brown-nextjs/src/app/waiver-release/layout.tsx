import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Liability Waiver & Release Form",
  description:
    "Complete your liability waiver and release form before your guided trip or fly fishing school with Mac Brown Fly Fish.",
  alternates: { canonical: "https://macbrownflyfish.com/waiver-release/" },
  openGraph: {
    title: "Liability Waiver & Release Form | Mac Brown Fly Fish",
    description:
      "Complete your liability waiver and release form before your guided trip or fly fishing school with Mac Brown Fly Fish.",
    url: "https://macbrownflyfish.com/waiver-release/",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
