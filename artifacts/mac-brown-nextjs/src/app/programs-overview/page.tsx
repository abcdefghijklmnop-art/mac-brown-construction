import type { Metadata } from "next";
import ProgramsOverviewClient from "./programs-client";

export const metadata: Metadata = {
  title: { absolute: "Fly Fishing Trips, Schools & Clinics — Bryson City, NC" },
  description: "Explore guided wade trips, float trips, fly casting schools, and specialty clinics in the Smoky Mountains. Something for every skill level — beginner to advanced.",
  alternates: { canonical: "https://macbrownflyfish.com/programs-overview/" },
  openGraph: {
    title: "Programs Overview — Mac Brown Fly Fish",
    description: "Guided trips, fly casting clinics, beginner to advanced schools in Bryson City, NC. Led by an FFI Master Casting Instructor with 35+ years on the water.",
    url: "https://macbrownflyfish.com/programs-overview/",
    images: [{ url: "https://macbrownflyfish.com/images/fly-school-1.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programs Overview — Mac Brown Fly Fish",
    images: ["https://macbrownflyfish.com/images/fly-school-1.webp"],
  },
};

export default function ProgramsOverview() {
  return <ProgramsOverviewClient />;
}
