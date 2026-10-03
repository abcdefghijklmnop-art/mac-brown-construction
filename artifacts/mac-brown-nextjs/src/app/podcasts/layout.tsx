import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Fly Fishing Podcasts & Interviews",
  description:
    "Listen to Mac Brown on fly fishing podcasts covering casting technique, guide life, trout fishing in the Smokies, and more.",
  alternates: { canonical: "https://macbrownflyfish.com/podcasts/" },
  openGraph: {
    title: "Fly Fishing Podcasts & Interviews | Mac Brown Fly Fish",
    description:
      "Listen to Mac Brown on fly fishing podcasts covering casting technique, guide life, trout fishing in the Smokies, and more.",
    url: "https://macbrownflyfish.com/podcasts/",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
