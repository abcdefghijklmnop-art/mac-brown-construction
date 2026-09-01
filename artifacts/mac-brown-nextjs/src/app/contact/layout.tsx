import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Mac Brown Fly Fish — Book a Trip or Ask a Question",
  description:
    "Ready to fish the Smokies? Contact Mac Brown Fly Fish to book a guided trip, casting school, or clinic in Western North Carolina.",
  alternates: { canonical: "https://macbrownflyfish.com/contact/" },
  openGraph: {
    title: "Contact Mac Brown Fly Fish — Book a Trip or Ask a Question",
    description:
      "Ready to fish the Smokies? Contact Mac Brown Fly Fish to book a guided trip, casting school, or clinic in Western North Carolina.",
    url: "https://macbrownflyfish.com/contact/",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
