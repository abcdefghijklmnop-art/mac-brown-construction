import type { Metadata } from "next";
import { SchemaScript } from "@/components/schema-script";
import { courseSchema } from "@/lib/schema";
import Advanced2DayFlyCastingSchool from "./advanced-casting-client";

export const metadata: Metadata = {
  title: { absolute: "Fly Casting Mastery Workshop — Smoky Mountains, NC" },
  description:
    "Two-day advanced fly casting school covering loop control, distance, accuracy, and advanced fishing casts. Small group instruction with Mac Brown in Bryson City, NC.",
  alternates: { canonical: "https://macbrownflyfish.com/fly-casting-mastery-workshop/" },
  openGraph: {
    title: "Fly Casting Mastery Workshop | Mac Brown Fly Fish",
    description:
      "Master loop control, distance, and advanced fishing casts in two days with FFI Master Instructor Mac Brown in the Smoky Mountains.",
    url: "https://macbrownflyfish.com/fly-casting-mastery-workshop/",
    images: [{ url: "https://macbrownflyfish.com/images/casting-class-1.webp" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <SchemaScript
        schema={courseSchema({
          price: "1550",
          name: "Fly Casting Mastery Workshop — Two-Day Advanced School, Bryson City NC",
          description: "Two-day advanced fly casting school in Bryson City, North Carolina, taught by Mac Brown — the only FFI Master Casting Instructor in North Carolina and a certified casting examiner for Fly Fishers International. The Mastery Workshop targets anglers who already know the basics and are ready to elevate their casting: loop control, distance, accuracy, specialty presentation casts, and an introduction to switch and Spey techniques. Mac has been refining this curriculum since 1987 and has been a featured casting instructor at The Fly Fishing Show since 1994.",
          url: "/fly-casting-mastery-workshop",
          image: "https://macbrownflyfish.com/images/masterclass/mc-10.webp",
          educationalLevel: "Intermediate to Advanced",
          coursePrerequisites: "Participants should have basic fly casting experience and be comfortable with an overhead cast. No advanced casting skills required — this workshop builds from a working foundation toward expert-level technique.",
          teaches: [
            "Loop control and tight-loop casting",
            "Hauling for increased line speed and distance",
            "Reach cast and curve presentations",
            "Mending for drag-free drift control",
            "Advanced accuracy at distance",
            "Introduction to single-hand Spey and switch casts",
            "Casting fault diagnosis and self-correction",
          ],
        })}
      />
      <Advanced2DayFlyCastingSchool />
    </>
  );
}
