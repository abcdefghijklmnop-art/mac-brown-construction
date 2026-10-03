import { NextResponse } from "next/server";
import { confirmedGuideSchoolSession, buildBrysonCalendar, sortScheduleSessions, scheduleDateLabel, PROGRAMS_YEAR } from "@workspace/schedule";

const SHEET_ID = process.env.MBFF_SCHEDULE_SHEET_ID;
const API_KEY  = process.env.GOOGLE_SHEETS_API_KEY;

type SheetValues = string[][];

function cell(row: string[], i: number): string {
  return (row[i] ?? "").trim();
}

export async function GET() {
  if (!SHEET_ID) {
    console.error("Schedule: MBFF_SCHEDULE_SHEET_ID not set");
    return NextResponse.json({ error: "Schedule not configured" }, { status: 503 });
  }
  if (!API_KEY) {
    console.error("Schedule: GOOGLE_SHEETS_API_KEY not set");
    return NextResponse.json({ error: "Schedule not configured" }, { status: 503 });
  }

  try {
    const rawRanges = [
      "Guide School!A2:D20",
      "Masterclass!A2:D20",
      "Weekend Schools!A2:E20",
      "Rowing!A2:B20",
      "Shows!A2:F20",
      "Pricing!A2:D10",
      "Config!A2:B10",
    ];
    const qs = rawRanges.map(r => `ranges=${encodeURIComponent(r)}`).join("&");

    const sheetRes = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values:batchGet?${qs}&key=${API_KEY}`
    );

    if (!sheetRes.ok) {
      const err = await sheetRes.text();
      console.error("Google Sheets batchGet failed:", err);
      return NextResponse.json({ error: "Failed to fetch schedule" }, { status: 502 });
    }

    const json = await sheetRes.json() as { valueRanges: { values?: SheetValues }[] };
    const [gsRows, mcRows, wsRows, rowRows, showRows, priceRows, configRows] = json.valueRanges.map(
      (r) => (r.values ?? []).filter((row) => row.length > 0 && row[0]?.trim())
    );

    // Config tab: key | value  (e.g. "shows_year" | "2027")
    const configMap: Record<string, string> = {};
    (configRows ?? []).forEach(row => {
      const key = cell(row, 0).toLowerCase().replace(/\s+/g, "_");
      if (key) configMap[key] = cell(row, 1);
    });
    const thisYear = new Date().getFullYear();
    const showsYear    = parseInt(configMap["shows_year"]    ?? "", 10) || thisYear;
    const programsYear = parseInt(configMap["programs_year"] ?? "", 10) || PROGRAMS_YEAR;

    const guideSchoolSessions = sortScheduleSessions((gsRows ?? []).map((row) => confirmedGuideSchoolSession({
      dates:   cell(row, 0),
      month:   cell(row, 1),
      soldOut: cell(row, 2).toUpperCase() === "TRUE",
      year:    parseInt(cell(row, 3), 10) || 0,
    }, programsYear)));

    const masterclassSessions = sortScheduleSessions((mcRows ?? []).map((row) => ({
      dates:   cell(row, 0),
      program: cell(row, 1),
      href:    cell(row, 2),
      year:    parseInt(cell(row, 3), 10) || programsYear,
    })));

    const weekendSchoolSessions = sortScheduleSessions((wsRows ?? []).map((row) => ({
      dates:      cell(row, 0),
      technique:  cell(row, 1),
      clinicName: cell(row, 2),
      href:       cell(row, 3),
      year:       parseInt(cell(row, 4), 10) || programsYear,
    })));

    const rowingSessions = sortScheduleSessions((rowRows ?? []).map((row) => ({
      dates: cell(row, 0),
      year:  parseInt(cell(row, 1), 10) || programsYear,
    })));

    const flyFishingShows = (showRows ?? []).map((row) => ({
      dates:     cell(row, 0),
      city:      cell(row, 1),
      classDate: cell(row, 2),
      classDesc: cell(row, 3),
      url:       cell(row, 4) || undefined,
      year:      parseInt(cell(row, 5), 10) || 0,
    }));

    const priceMap: Record<string, { display: string; full: string; half: string }> = {};
    (priceRows ?? []).forEach(row => {
      const key = cell(row, 0);
      if (key) priceMap[key] = { display: cell(row, 1), full: cell(row, 2), half: cell(row, 3) };
    });
    const p = (key: string) => priceMap[key]?.display ?? "";

    const pricing = {
      guidedWadeOrFloat:       { display: p("guidedWadeOrFloat")       },
      guidedLakeTrip:          { display: p("guidedLakeTrip")          },
      flyCastingInstruction:   { display: p("flyCastingInstruction")   },
      onlineVideoCoaching:     { display: p("onlineVideoCoaching")     },
      masterclassWorkshop:     { display: p("masterclassWorkshop")     },
      weekendFlyFishingSchool: { display: p("weekendFlyFishingSchool") },
      riverNavigationAcademy:  { display: p("riverNavigationAcademy") },
      guideSchool: {
        display:     p("guideSchool"),
        fullDisplay: priceMap["guideSchool"]?.full ?? "",
        halfDisplay: priceMap["guideSchool"]?.half ?? "",
      },
    };

    const guideSchoolDatesSummary   = guideSchoolSessions.map(scheduleDateLabel).join(" · ");
    const masterclassDatesSummary   = masterclassSessions.map(scheduleDateLabel).join(" · ");
    const rowingDatesSummary        = rowingSessions.map(scheduleDateLabel).join(" · ");
    const weekendSchoolDatesSummary = weekendSchoolSessions.map(scheduleDateLabel).join(" · ");
    const brysonCalendar = buildBrysonCalendar(guideSchoolSessions, masterclassSessions, weekendSchoolSessions, rowingSessions);

    return NextResponse.json(
      {
        guideSchoolSessions,
        masterclassSessions,
        weekendSchoolSessions,
        rowingSessions,
        flyFishingShows,
        brysonCalendar,
        guideSchoolDatesSummary,
        masterclassDatesSummary,
        rowingDatesSummary,
        weekendSchoolDatesSummary,
        pricing,
        showsYear,
        programsYear,
      },
      { headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400" } }
    );
  } catch (err) {
    console.error("Schedule fetch error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
