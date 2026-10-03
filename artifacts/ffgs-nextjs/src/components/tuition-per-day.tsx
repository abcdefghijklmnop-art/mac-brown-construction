"use client";
import { useSchedule } from "@/hooks/use-schedule";

interface Props {
  days?: number;
  className?: string;
}

export function TuitionPerDay({ days = 4, className }: Props) {
  const { pricing } = useSchedule();
  const entry = (pricing as unknown as Record<string, Record<string, number | string>>).guideSchool ?? {};
  const full = typeof entry.full === "number" ? entry.full : 4850;
  const perDay = Math.round(full / days);
  return <span className={className}>${perDay.toLocaleString()}</span>;
}
