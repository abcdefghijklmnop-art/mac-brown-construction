"use client";

import { useEffect, useState } from "react";

export type RuntimeSessionDate = {
  startDate: string;
  endDate: string;
  label: string;
  closed?: boolean;
};

type RuntimeSessionDatesProps = {
  sessions: RuntimeSessionDate[];
  className?: string;
};

function getNewYorkDate(): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((item) => item.type === type)?.value ?? "";
  return `${part("year")}-${part("month")}-${part("day")}`;
}

export function RuntimeSessionDates({ sessions, className }: RuntimeSessionDatesProps) {
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    const refreshDate = () => setToday(getNewYorkDate());
    refreshDate();
    const interval = window.setInterval(refreshDate, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  if (!today) return null;

  const upcomingSessions = sessions.filter((session) => session.endDate >= today);
  if (upcomingSessions.length === 0) return null;

  return (
    <span className={className}>
      {upcomingSessions.map((session, index) => (
        <span key={`${session.startDate}-${session.endDate}`}>
          {index > 0 && <span aria-hidden="true"> · </span>}
          <span aria-label={session.closed ? `${session.label}, closed` : session.label}>
            {session.label}
            {session.closed && <span className="ml-1 font-bold"> (Closed)</span>}
          </span>
        </span>
      ))}
    </span>
  );
}