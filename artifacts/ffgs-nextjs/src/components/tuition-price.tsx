"use client";
import { useSchedule } from "@/hooks/use-schedule";

interface Props {
  className?: string;
}

export function TuitionPrice({ className }: Props) {
  const { pricing } = useSchedule();
  const entry = (pricing as unknown as Record<string, Record<string, string>>).guideSchool ?? {};
  return <span className={className}>{entry.display || "$4,850"}</span>;
}
