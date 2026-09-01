"use client";
import { useState, useEffect } from "react";
import { api } from "@/lib/asset";
import {
  flyFishingShows as staticShows,
  guideSchoolSessions as staticGS,
  masterclassSessions as staticMC,
  weekendSchoolSessions as staticWS,
  rowingSessions as staticRS,
  brysonCalendar as staticBryson,
  guideSchoolDatesSummary as staticGSDates,
  masterclassDatesSummary as staticMCDates,
  rowingDatesSummary as staticRowDates,
  weekendSchoolDatesSummary as staticWSDates,
  pricing as staticPricing,
  SHOWS_YEAR,
  PROGRAMS_YEAR,
} from "@workspace/schedule";

export interface BlockedDate {
  start: string;
  end: string;
  note?: string;
}

export interface ScheduleData {
  guideSchoolSessions:       typeof staticGS;
  masterclassSessions:       typeof staticMC;
  weekendSchoolSessions:     typeof staticWS;
  rowingSessions:            typeof staticRS;
  flyFishingShows:           typeof staticShows;
  brysonCalendar:            typeof staticBryson;
  guideSchoolDatesSummary:   string;
  masterclassDatesSummary:   string;
  rowingDatesSummary:        string;
  weekendSchoolDatesSummary: string;
  pricing:                   typeof staticPricing;
  showsYear:                 number;
  programsYear:              number;
  blockedDates:              BlockedDate[];
  loading: boolean;
}

const STATIC: ScheduleData = {
  guideSchoolSessions:       staticGS,
  masterclassSessions:       staticMC,
  blockedDates:              [],
  weekendSchoolSessions:     staticWS,
  rowingSessions:            staticRS,
  flyFishingShows:           staticShows,
  brysonCalendar:            staticBryson,
  guideSchoolDatesSummary:   staticGSDates,
  masterclassDatesSummary:   staticMCDates,
  rowingDatesSummary:        staticRowDates,
  weekendSchoolDatesSummary: staticWSDates,
  pricing:                   staticPricing,
  showsYear:                 SHOWS_YEAR,
  programsYear:              PROGRAMS_YEAR,
  loading: false,
};

let cached: ScheduleData | null = null;

export function useSchedule(): ScheduleData {
  const [data, setData] = useState<ScheduleData>(cached ?? { ...STATIC, loading: true });

  useEffect(() => {
    if (cached) { setData(cached); return; }
    fetch(api("/schedule"))
      .then(r => r.ok ? r.json() : Promise.reject(r.status))
      .then((json) => {
        const mergedPricing = Object.fromEntries(
          Object.keys({ ...STATIC.pricing, ...(json.pricing ?? {}) }).map((k) => {
            const staticEntry = (STATIC.pricing as unknown as Record<string, Record<string, string>>)[k] ?? {};
            const apiEntry = (json.pricing ?? {})[k] ?? {};
            return [k, { ...staticEntry, ...apiEntry }];
          })
        );
        // flyFishingShows are maintained in the static lib (with isoClassDate etc.)
        // Do NOT let the API/Google Sheet override them — the sheet often lags behind.
        const { flyFishingShows: _ignored, ...jsonWithoutShows } = json;
        const result: ScheduleData = { ...STATIC, ...jsonWithoutShows, pricing: mergedPricing as typeof STATIC.pricing, loading: false };
        cached = result;
        setData(result);
      })
      .catch(() => {
        setData(STATIC);
      });
  }, []);

  return data;
}
