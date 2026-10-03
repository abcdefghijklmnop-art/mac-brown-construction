import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "From the River — Fly Fishing Tips, Reports & Techniques",
  description:
    "Hatch reports, casting tips, gear guides, and fly fishing techniques from Mac Brown and the team. Updated regularly from the rivers of Western North Carolina.",
  alternates: { canonical: "https://macbrownflyfish.com/blog/" },
  openGraph: {
    title: "From the River — Fly Fishing Tips, Reports & Techniques | Mac Brown Fly Fish",
    description:
      "Hatch reports, casting tips, gear guides, and fly fishing techniques from Mac Brown and the team. Updated regularly from the rivers of Western North Carolina.",
    url: "https://macbrownflyfish.com/blog/",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
