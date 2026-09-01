"use client";
import { useSchedule } from "@/hooks/use-schedule";

export function HomeAeoParagraph() {
  const { pricing } = useSchedule();
  return (
    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-8">
      The Fly Fishing Guide School in Bryson City, North Carolina is the only professional guide training program of its kind in the eastern United States — a four-day program covering fly casting at the Master Instructor level, whitewater rowing, water reading, rigging, stream entomology, guiding methodology, and client communication. Led by a featured group of educators that includes FFI Master Casting Instructors, certified whitewater rowing instructors, Fly Fishing Team USA members, and Team USA coaches — 450+ combined years of field experience across the faculty on the finest trout water in the Southeast. Two tracks: aspiring professional guides launching a guiding career, and growth-minded skill-builders who want to understand fly fishing at a professional level. Sessions run March through November. Tuition is {pricing.guideSchool.display}. Limited enrollment for personalized instruction. Operating since 1987.
    </p>
  );
}
