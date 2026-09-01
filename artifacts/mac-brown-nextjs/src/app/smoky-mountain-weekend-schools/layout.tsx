import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Smoky Mountain Weekend Fly Fishing Schools",
  description:
    "Immersive weekend fly fishing schools on the rivers of the Great Smoky Mountains. All skill levels welcome. Book your spot today.",
  alternates: { canonical: "https://macbrownflyfish.com/smoky-mountain-weekend-schools/" },
  openGraph: {
    title: "Smoky Mountain Weekend Fly Fishing Schools | Mac Brown Fly Fish",
    description:
      "Immersive weekend fly fishing schools on the rivers of the Great Smoky Mountains. All skill levels welcome. Book your spot today.",
    url: "https://macbrownflyfish.com/smoky-mountain-weekend-schools/",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
