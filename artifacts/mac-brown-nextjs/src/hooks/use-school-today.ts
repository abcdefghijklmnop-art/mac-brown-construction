"use client";

import { useEffect, useState } from "react";
import { schoolToday } from "@workspace/schedule";

export function useSchoolToday(): number | null {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setToday(schoolToday());
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return today;
}