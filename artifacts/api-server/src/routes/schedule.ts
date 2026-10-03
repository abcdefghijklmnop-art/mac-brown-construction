import { Router, type IRouter } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";

const router: IRouter = Router();

const SHEET_ID = process.env.MBFF_SCHEDULE_SHEET_ID;

const MONTH_MAP: Record<string, string> = {
  January: "01", February: "02", March: "03", April: "04",
  May: "05", June: "06", July: "07", August: "08",
  September: "09", October: "10", November: "11", December: "12",
};

function parseDateRange(dateStr: string, year: number): { start: string; end: string } | null {
  const m = dateStr.match(/^(\w+)\s+(\d+)\s*[–\-]\s*(\d+)$/);
  if (!m) return null;
  const mm = MONTH_MAP[m[1]];
  if (!mm) return null;
  return {
    start: `${year}-${mm}-${m[2].padStart(2, "0")}`,
    end:   `${year}-${mm}-${m[3].padStart(2, "0")}`,
  };
}

type SheetValues = string[][];

function cell(row: string[], i: number): string {
  return (row[i] ?? "").trim();
}

router.get("/schedule", async (req, res) => {
  if (!SHEET_ID) {
    req.log.warn("MBFF_SCHEDULE_SHEET_ID not set");
    res.status(503).json({ error: "Schedule not configured" });
    return;
  }

  try {
    const connectors = new ReplitConnectors();
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

    const sheetRes = await connectors.proxy(
      "google-sheet",
      `/v4/spreadsheets/${SHEET_ID}/values:batchGet?${qs}`,
      { method: "GET" }
    );

    if (!sheetRes.ok) {
      const err = await sheetRes.text();
      req.log.error({ err }, "Google Sheets batchGet failed");
      res.status(502).json({ error: "Failed to fetch schedule" });
      return;
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

    // Pricing
    const priceMap: Record<string, { display: string; full: string; half: string }> = {};
    (priceRows ?? []).forEach(row => {
      const key = cell(row, 0);
      if (key) priceMap[key] = { display: cell(row, 1), full: cell(row, 2), half: cell(row, 3) };
    });
    const p = (key: string) => priceMap[key]?.display ?? "";

    const pricing = {
      guidedWadeOrFloat:       { display: p("guidedWadeOrFloat"), half: priceMap["guidedWadeOrFloat"]?.half ?? "", full: priceMap["guidedWadeOrFloat"]?.full ?? "" },
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

    // Derived summaries
    const guideSchoolDatesSummary   = guideSchoolSessions.map(s => s.dates).join(" · ");
    const masterclassDatesSummary   = masterclassSessions.map(s => s.dates).join(" · ");
    const rowingDatesSummary        = rowingSessions.map(s => s.dates).join(" · ");
    const weekendSchoolDatesSummary = weekendSchoolSessions.map(s => s.dates).join(" · ");

    const gs = guideSchoolSessions;
    const mc = masterclassSessions;
    const ws = weekendSchoolSessions;
    const rs = rowingSessions;

    const brysonCalendar = [
      gs[0] ? { dates: gs[0].year ? `${gs[0].dates}, ${gs[0].year}` : gs[0].dates, program: "4-Day Fly Fishing Guide School", href: "/programs-overview" } : null,
      mc[0] ? { dates: mc[0].year ? `${mc[0].dates}, ${mc[0].year}` : mc[0].dates, program: mc[0].program, href: mc[0].href } : null,
      gs[1] ? { dates: gs[1].year ? `${gs[1].dates}, ${gs[1].year}` : gs[1].dates, program: "4-Day Fly Fishing Guide School", href: "/programs-overview" } : null,
      rs[0] ? { dates: rs[0].year ? `${rs[0].dates}, ${rs[0].year}` : rs[0].dates, program: "Oar Frame Rowing School", href: "/river-navigation-academy" } : null,
      ...ws.map(w => ({ dates: w.year ? `${w.dates}, ${w.year}` : w.dates, program: w.clinicName, href: w.href })),
      mc[1] ? { dates: mc[1].year ? `${mc[1].dates}, ${mc[1].year}` : mc[1].dates, program: mc[1].program, href: mc[1].href } : null,
      mc[2] ? { dates: mc[2].year ? `${mc[2].dates}, ${mc[2].year}` : mc[2].dates, program: mc[2].program, href: mc[2].href } : null,
      rs[1] ? { dates: rs[1].year ? `${rs[1].dates}, ${rs[1].year}` : rs[1].dates, program: "Oar Frame Rowing School", href: "/river-navigation-academy" } : null,
      mc[3] ? { dates: mc[3].year ? `${mc[3].dates}, ${mc[3].year}` : mc[3].dates, program: mc[3].program, href: mc[3].href } : null,
      ...gs.slice(2).map(s => ({ dates: s.year ? `${s.dates}, ${s.year}` : s.dates, program: "4-Day Fly Fishing Guide School", href: "/programs-overview" })),
    ].filter(Boolean);

    // Auto-block all school / program dates so guided trips can't be booked during them
    const fallbackYear = new Date().getFullYear();
    type BlockedRange = { start: string; end: string; note: string };
    const autoBlocked: BlockedRange[] = [];
    for (const s of guideSchoolSessions) {
      const r = parseDateRange(s.dates, s.year || fallbackYear);
      if (r) autoBlocked.push({ ...r, note: "Fly Fishing Guide School" });
    }
    for (const s of masterclassSessions) {
      const r = parseDateRange(s.dates, s.year || fallbackYear);
      if (r) autoBlocked.push({ ...r, note: s.program });
    }
    for (const s of rowingSessions) {
      const r = parseDateRange(s.dates, s.year || fallbackYear);
      if (r) autoBlocked.push({ ...r, note: "Oar Frame Rowing School" });
    }
    for (const s of weekendSchoolSessions) {
      const r = parseDateRange(s.dates, s.year || fallbackYear);
      if (r) autoBlocked.push({ ...r, note: s.clinicName });
    }

    // Manual blocks from Google Sheet — A=start (ISO YYYY-MM-DD), B=end (ISO), C=note
    let manualBlocked: BlockedRange[] = [];
    try {
      const bdQs = `ranges=${encodeURIComponent("BlockedDates!A2:C30")}`;
      const bdRes = await connectors.proxy(
        "google-sheet",
        `/v4/spreadsheets/${SHEET_ID}/values:batchGet?${bdQs}`,
        { method: "GET" }
      );
      if (bdRes.ok) {
        const bdJson = await bdRes.json() as { valueRanges: { values?: SheetValues }[] };
        const bdRows = (bdJson.valueRanges[0]?.values ?? []).filter(r => r.length > 0 && r[0]?.trim());
        manualBlocked = bdRows
          .map(r => ({ start: cell(r, 0), end: cell(r, 1) || cell(r, 0), note: cell(r, 2) }))
          .filter(b => /^\d{4}-\d{2}-\d{2}$/.test(b.start));
      }
    } catch { /* tab doesn't exist yet — silently return empty */ }

    const blockedDates = [...autoBlocked, ...manualBlocked];

    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
    res.json({
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
      blockedDates,
      showsYear,
      programsYear,
    });
  } catch (err) {
    req.log.error(err, "Schedule fetch error");
    res.status(500).json({ error: "Internal error" });
  }
});

export default router;
