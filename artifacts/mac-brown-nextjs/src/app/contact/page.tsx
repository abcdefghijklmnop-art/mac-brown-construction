import type { Metadata } from "next";
import Contact from "./contact-client";

export const metadata: Metadata = {
  title: { absolute: "Contact Mac Brown Fly Fish — Bryson City, NC" },
  description:
    "Get in touch with Mac Brown Fly Fish in Bryson City, NC. Book a guided trip, casting school, or clinic — or ask any question about our programs.",
  alternates: { canonical: "https://macbrownflyfish.com/contact/" },
  openGraph: {
    title: "Contact Mac Brown Fly Fish | Bryson City, NC",
    description:
      "Reach Mac Brown Fly Fish in Bryson City, NC. Questions about guided trips, schools, or casting instruction answered quickly.",
    url: "https://macbrownflyfish.com/contact/",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "Mac Brown Fly Fish — Bryson City, NC" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return <Contact />;
}
