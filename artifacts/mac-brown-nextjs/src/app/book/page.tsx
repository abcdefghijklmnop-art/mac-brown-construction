import type { Metadata } from "next";
import BookClient from "./book-client";

export const metadata: Metadata = {
  title: { absolute: "Book a Guided Trip or School — Mac Brown Fly Fish" },
  description: "Book a guided fly fishing trip, fly casting clinic, or multi-day school with Mac Brown in Bryson City, NC. All skill levels welcome — we provide all equipment.",
  alternates: { canonical: "https://macbrownflyfish.com/book/" },
  openGraph: {
    title: "Book a Guided Trip or School — Mac Brown Fly Fish",
    description: "Book a guided fly fishing trip or casting school with Mac Brown in Bryson City, NC. All skill levels welcome.",
    url: "https://macbrownflyfish.com/book/",
    images: [{ url: "https://macbrownflyfish.com/images/fall-river-fishing.webp" }],
  },
};

export default function Book() {
  return <BookClient />;
}
