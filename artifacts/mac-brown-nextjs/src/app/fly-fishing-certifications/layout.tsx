import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Fly Fishing & Casting Certifications — Mac Brown's Credentials",
  description:
    "Mac Brown holds some of the highest fly casting certifications in the world. Learn about his credentials, affiliations, and teaching qualifications.",
  alternates: { canonical: "https://macbrownflyfish.com/fly-fishing-certifications/" },
  openGraph: {
    title: "Fly Fishing & Casting Certifications — Mac Brown's Credentials | Mac Brown Fly Fish",
    description:
      "Eleven publicly documented honors — awards, editorial roles, governance positions, national show appearances, a Hall of Fame, and active leadership of how the sport's instructors learn to teach.",
    url: "https://macbrownflyfish.com/fly-fishing-certifications/",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
