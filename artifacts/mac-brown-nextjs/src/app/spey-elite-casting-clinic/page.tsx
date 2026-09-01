import type { Metadata } from "next";
import { SchemaScript } from "@/components/schema-script";
import { courseSchema } from "@/lib/schema";
import SpeyEliteCastingClinic from "./spey-clinic-client";

export const metadata: Metadata = {
  title: { absolute: "Spey & Switch Casting Clinic — Smoky Mountains, NC" },
  description:
    "Elite Spey, Switch, and Skagit casting instruction with Mac Brown in Western North Carolina. Master anchor placement, D-loop formation, Scandi technique, and two-handed rod skills.",
  alternates: { canonical: "https://macbrownflyfish.com/spey-elite-casting-clinic/" },
  openGraph: {
    title: "Spey & Switch Casting Clinic | Mac Brown Fly Fish",
    description:
      "Two-handed rod instruction from an FFI Master Casting Instructor. Spey, Switch, Skagit, and Scandi techniques in the Smoky Mountains.",
    url: "https://macbrownflyfish.com/spey-elite-casting-clinic/",
    images: [{ url: "https://macbrownflyfish.com/images/fall-river-fishing.webp" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <SchemaScript
        schema={courseSchema({
          price: "1550",
          name: "Spey Elite Casting Clinic — Two-Handed Rod Instruction, Bryson City NC",
          description: "Two-day Spey, Switch, and Skagit casting clinic in Bryson City, North Carolina, taught by Mac Brown — the only FFI Master Casting Instructor in North Carolina, a certified casting examiner for Fly Fishers International, and the author of Casting Angles. The Spey Elite clinic covers anchor placement, D-loop formation, Scandi and Skagit technique, change of direction, and two-handed rod mechanics at a depth appropriate for all levels — including anglers pursuing FFI two-handed casting certification. Mac has been teaching Spey on the Tuckasegee River since 1987.",
          url: "/spey-elite-casting-clinic",
          image: "https://macbrownflyfish.com/images/fall-river-fishing.webp",
          educationalLevel: "AllLevels",
          coursePrerequisites: "No prior Spey or two-handed casting experience required. Single-hand fly casting experience is helpful. The clinic serves complete Spey beginners through anglers preparing for two-handed casting instructor certification.",
          teaches: [
            "Anchor placement and D-loop formation",
            "Single Spey, Double Spey, and Snap-T",
            "Scandi and Skagit casting systems",
            "Change of direction on the water",
            "Two-handed rod setup and line matching",
            "Mending and swing control for two-handed presentations",
            "Two-handed casting self-assessment and fault correction",
          ],
          sessions: [{ startDate: "2026-07-11", endDate: "2026-07-12" }],
        })}
      />
      <SpeyEliteCastingClinic />
    </>
  );
}
