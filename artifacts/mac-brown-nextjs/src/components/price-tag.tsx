"use client";
import { useSchedule } from "@/hooks/use-schedule";

type Tag = "div" | "span" | "p";

interface Props {
  priceKey: string;
  part?: "display" | "half" | "full";
  className?: string;
  as?: Tag;
}

export function PriceTag({ priceKey, part = "display", className, as: Tag = "div" }: Props) {
  const { pricing } = useSchedule();
  const entry = (pricing as unknown as Record<string, Record<string, string>>)[priceKey] ?? {};
  return <Tag className={className}>{entry[part] || entry.display || ""}</Tag>;
}
