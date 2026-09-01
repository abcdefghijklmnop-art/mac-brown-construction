import { NextResponse } from "next/server";

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
    const programsYear = parseInt(configMap["programs_year"] ?? "", 10) || thisYear;

    const guideSchoolSessions = (gsRows ?? []).map((row) => ({
      dates:   cell(row, 0),
      month:   cell(row, 1),
      soldOut: cell(row, 2).toUpperCase() === "TRUE",
      year:    parseInt(cell(row, 3), 10) || 0,
    }));

    const masterclassSessions = (mcRows ?? []).map((row) => ({
      dates:   cell(row, 0),
      program: cell(row, 1),
      href:    cell(row, 2),
      year:    parseInt(cell(row, 3), 10) || 0,
    }));

    const weekendSchoolSessions = (wsRows ?? []).map((row) => ({
      dates:      cell(row, 0),
      technique:  cell(row, 1),
      clinicName: cell(row, 2),
      href:       cell(row, 3),
      year:       parseInt(cell(row, 4), 10) || 0,
    }));

    const rowingSessions = (rowRows ?? []).map((row) => ({
      dates: cell(row, 0),
      year:  parseInt(cell(row, 1), 10) || 0,
    }));

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

    const guideSchoolDatesSummary   = guideSchoolSessions.map(s => s.dates).join(" · ");
    const masterclassDatesSummary   = masterclassSessions.map(s => s.dates).join(" · ");
    const rowingDatesSummary        = rowingSessions.map(s => s.dates).join(" · ");
    const weekendSchoolDatesSummary = weekendSchoolSessions.map(s => s.dates).join(" · ");

    const withYear = (dates: string, year: number) => year ? `${dates}, ${year}` : dates;

    const gs = guideSchoolSessions;
    const mc = masterclassSessions;
    const ws = weekendSchoolSessions;
    const rs = rowingSessions;

    const brysonCalendar = [
      gs[0] ? { dates: withYear(gs[0].dates, gs[0].year), program: "4-Day Fly Fishing Guide School", href: "/programs-overview" } : null,
      mc[0] ? { dates: withYear(mc[0].dates, mc[0].year), program: mc[0].program, href: mc[0].href } : null,
      gs[1] ? { dates: withYear(gs[1].dates, gs[1].year), program: "4-Day Fly Fishing Guide School", href: "/programs-overview" } : null,
      rs[0] ? { dates: withYear(rs[0].dates, rs[0].year), program: "Oar Frame Rowing School", href: "/drift-boat-rowing-school" } : null,
      ...ws.map(w => ({ dates: withYear(w.dates, w.year), program: w.clinicName, href: w.href })),
      mc[1] ? { dates: withYear(mc[1].dates, mc[1].year), program: mc[1].program, href: mc[1].href } : null,
      mc[2] ? { dates: withYear(mc[2].dates, mc[2].year), program: mc[2].program, href: mc[2].href } : null,
      rs[1] ? { dates: withYear(rs[1].dates, rs[1].year), program: "Oar Frame Rowing School", href: "/drift-boat-rowing-school" } : null,
      mc[3] ? { dates: withYear(mc[3].dates, mc[3].year), program: mc[3].program, href: mc[3].href } : null,
      ...gs.slice(2).map(s => ({ dates: withYear(s.dates, s.year), program: "4-Day Fly Fishing Guide School", href: "/programs-overview" })),
    ].filter((row): row is NonNullable<typeof row> => !!row && /\d/.test(row.dates));

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
