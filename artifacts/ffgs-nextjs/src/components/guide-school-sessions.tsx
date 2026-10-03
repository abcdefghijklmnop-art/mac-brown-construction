"use client";

import { useEffect, useState } from "react";
import { isCurrentOrUpcomingSession, scheduleStart, schoolToday, type GuideSchoolSession } from "@workspace/schedule";

export function GuideSchoolSessions({ sessions }: { sessions: GuideSchoolSession[] }) {
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setToday(schoolToday());
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const year = today === null ? 0 : new Date(today).getUTCFullYear();
  const upcoming = sessions.filter(s => today !== null && isCurrentOrUpcomingSession(s, today));
  const years = [year, year + 1].filter(y => upcoming.some(s => s.year === y));

  return (
    <div className="grid md:grid-cols-2 gap-5 mt-8">
      {years.map(y => (
        <div key={y} className="border border-border p-5">
          <h3 className="font-serif text-lg font-bold text-foreground mb-4">{y} Sessions</h3>
          <div className="flex flex-wrap gap-2">
            {upcoming.filter(s => s.year === y)
              .sort((a, b) => scheduleStart(a) - scheduleStart(b))
              .map(s => (
                <span key={`${s.year}-${s.dates}`} className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold border ${
                  s.soldOut ? "border-border text-muted-foreground" : "border-primary text-primary bg-primary/5"
                }`}>
                  {s.dates}
                  {s.soldOut && <span className="text-[10px] font-bold uppercase tracking-wider text-red-700">Enrollment Closed</span>}
                  {!s.soldOut && s.spotsRemaining === 1 && <span className="text-[10px] font-bold text-red-700">1 spot remaining</span>}
                </span>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}