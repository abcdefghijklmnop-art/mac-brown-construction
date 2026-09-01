"use client";
import { useState, useEffect } from "react";
import { api } from "@/lib/utils";
import {
  guideSchoolSessions as staticGS,
  pricing as staticPricing,
} from "@workspace/schedule";

export interface BlockedDate {
  start: string;
  end: string;
  note?: string;
}

export interface ScheduleData {
  guideSchoolSessions: typeof staticGS;
  pricing:             typeof staticPricing;
  blockedDates:        BlockedDate[];
  programsYear:        number;
  loading: boolean;
}

const STATIC: ScheduleData = {
  guideSchoolSessions: staticGS,
  pricing:             staticPricing,
  blockedDates:        [],
  programsYear:        new Date().getFullYear(),
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
        const result: ScheduleData = {
          guideSchoolSessions: json.guideSchoolSessions ?? staticGS,
          pricing:             json.pricing             ?? staticPricing,
          blockedDates:        json.blockedDates         ?? [],
          programsYear:        json.programsYear         ?? new Date().getFullYear(),
          loading: false,
        };
        cached = result;
        setData(result);
      })
      .catch(() => { setData(STATIC); });
  }, []);

  return data;
}
