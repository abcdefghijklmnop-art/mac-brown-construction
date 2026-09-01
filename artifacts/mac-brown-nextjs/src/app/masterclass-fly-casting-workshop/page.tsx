import type { Metadata } from "next";
import { SchemaScript } from "@/components/schema-script";
import { courseSchema } from "@/lib/schema";
import MasterclassCastingWorkshop from "./masterclass-client";

export const metadata: Metadata = {
  title: { absolute: "Masterclass Fly Casting Workshop — Smoky Mountains, NC" },
  description:
    "Advanced fly casting workshop in Bryson City, NC. Two days of intensive instruction on mechanics, loop control, and diagnostic casting skills — for anglers who want to fish at a completely different level.",
  alternates: { canonical: "https://macbrownflyfish.com/masterclass-fly-casting-workshop/" },
  openGraph: {
    title: "Masterclass Casting Workshop | Mac Brown Fly Fish",
    description:
      "Two-day advanced casting workshop with Mac Brown in the Smoky Mountains. Master the mechanics that separate elite anglers from everyone else.",
    url: "https://macbrownflyfish.com/masterclass-fly-casting-workshop/",
    images: [{ url: "https://macbrownflyfish.com/images/casting-class-1.webp" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <SchemaScript
        schema={courseSchema({
          name: "Masterclass Fly Casting Workshop — Intensive Two-Day School, NC",
          description: "Two-day intensive fly casting workshop in Bryson City, North Carolina, taught by Mac Brown — the only FFI Master Casting Instructor in North Carolina and a certified casting examiner for Fly Fishers International. The Masterclass covers the full spectrum of single-hand, switch, and Spey casting in a focused two-day format: loop mechanics, diagnostic skills, distance and accuracy, and specialty presentation casts. Mac has been presenting this material at The Fly Fishing Show since 1994. Open to any angler ready to fish at a level they have never reached before.",
          url: "/masterclass-fly-casting-workshop",
          image: "https://macbrownflyfish.com/images/casting-class-1.webp",
          educationalLevel: "AllLevels",
          coursePrerequisites: "Basic fly casting ability recommended. The Masterclass is designed for anglers who can already make a basic cast and want to genuinely improve — from advancing beginners through experienced casters preparing for FFI instructor certification.",
          teaches: [
            "Casting mechanics and loop geometry",
            "Single-hand casting stroke refinement",
            "Switch and Spey casting fundamentals",
            "Casting fault diagnosis and targeted correction",
            "Distance casting and double haul",
            "Specialty presentation casts for fishing situations",
            "Self-assessment and independent practice skills",
          ],
        })}
      />
      <MasterclassCastingWorkshop />
    </>
  );
}
