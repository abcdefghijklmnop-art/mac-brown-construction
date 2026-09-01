import { unstable_cache } from "next/cache";
import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const HISTORICAL_CONTEXT = `
HISTORICAL ON-STREAM DATA — WESTERN NC & GREAT SMOKY MOUNTAINS (Mac Brown Fly Fish, 1987–present)

TUCKASEGEE RIVER (Delayed Harvest, Bryson City & Webster NC):
- Spring (Feb–May): Black Caddis and March Browns come off steadily until noon. Swinging attractor wet flies is most productive when fish are rising. Pheasant Tail Nymphs #14 and flashy nymphs in off-color water. BWO hatches on overcast days. Mother's Day Caddis hatch peaks late April–May. All techniques fire in May — wet flies, euro-nymphing, tight-line nymphing, dry flies, streamers. Streamer bite excellent on lower sections. Mop flies and Clown Caddis productive for nymphing.
- Summer (June–Aug): Morning and evening windows essential as water temps rise. Terrestrials — beetles, inchworms, hoppers, ants — produce well. Light Cahills, Sulphurs, Isonychia in evenings. Early morning streamer bite for large browns migrating from Fontana Lake.
- Fall (Sept–Nov): October Caddis on wild streams for large browns. Streamer fishing excellent. Delayed harvest opens October 1 — cooler temps and fresh stockings make all techniques viable. Cold fronts bring fish up in water column.
- Winter (Dec–Feb): Midges and BWOs. Nymphing and wet flies. High-water nymph rigs with Birds Nest, Hares Ear, large Prince Nymph, Frenchie on jig hooks.
- Heavy rainfall: After heavy rain, park streams (Deep Creek, Noland Creek, Forney Creek) clear 24–48 hours faster than the Tuckasegee. Head to the park after rain events.
- Overcast days: Fish come up in water column. Remove bobbers midday and swing wets or throw multiple dries. Best surface action of the day often midday on overcast days.
- Cold fronts: Fish go deeper 2–3 hours after front arrives. Nymph deeper with heavier weight.
- Best float CFS: 500–2,000 ideal for guided float trips. Above 4,000 no floating.

NANTAHALA RIVER (Upper Delayed Harvest & Lower):
- Spring hatches: Little Black Stones, Black Caddis, Red Quills, Hendricksons, Quill Gordons, Blue Quills, March Browns — especially April. Shaded sections productive for dry fly when generation is off.
- Year-round: Tan Mop (crane fly larvae, #10 Hanak jig hook) is one of the most consistent patterns. Caddis pupae on DO4BL Maturo wire.
- High water/fast flows: Birds Nest #12, Hares Ear, Prince Nymph, Frenchie on jig hooks. Fish deeper in water column.
- Generation off: Excellent wading — fish are up and feeding. Dry fly and wet fly most productive. Stay road-left for safe exit.
- Generation on: Float trips recommended. Check Duke Energy release schedule before wading.
- The upper section has greater hatch diversity than the lower river.
- Low-light days: Overcast and light rain = fish looking up across most of the water column. Best dry fly days of the year.

DEEP CREEK (Great Smoky Mountains National Park, 1 mile from Bryson City):
- Summer: Early morning and late evening only when water temps allow. Terrestrials all day — beetles, ants, inchworms, hoppers. Sulphur hatch at 5pm. Little Yellow Stoneflies (Isoperla) in June.
- Clears fastest of all local waters after heavy rainfall.
- Wild trout fishery — larger browns migrate up from Tuckasegee.
- Bumgarner Bend and Jenkins Field sections historically productive.

KEY PATTERNS BY CONDITION:
- Overcast spring day: Swing attractor wets, multiple dry fly rigs, emergers in the film.
- Sunny warm day: Early morning and evening — nymphs midday.
- Hot summer (>65°F water): Switch to smallmouth bass or fish higher elevation streams. Early morning only for trout.
- High water off-color: Pheasant Tail Nymph #14, flashy nymphs, Tan Mop, streamer swing.
- Clear low water: Long leaders, fine tippets, smaller patterns. Stealth approach.
- Cold front after: Nymph deep with heavier weight, wait 2 hours for fish to settle.
- Cold front before: Fish aggressively, hatches can explode.

GENERAL OBSERVATIONS:
- Caddisflies: Over 330 species in watershed. Most abundant insect family. Carry larval, pupal, and adult forms year-round.
- Patterns with hot spots, colored triggers, and rubber legs consistently outperform traditional drab patterns.
- 14,000+ stomach samples: trout in these streams are opportunistic. Presentation matters more than exact pattern match.
- Attractor patterns work well when no specific hatch is visible.
- Fish are most active 55–65°F water. Stop fishing trout above 65°F.
`;

const HATCH_CHART_CONTEXT = `
BRYSON CITY AREA HATCH CHART (average emergence dates):
- Feb–Mar: Black Stone (14–16), Blue Quill (18), Olive Midge (18–24), Male Adams (14–16), BWO Ephemerella cornuta (12–14), Quill Gordon (12–14)
- Mar–May: Hendrickson (14–16), Red Quill (14–16), Female Adams (14–16)
- Apr–May: Dark Elk Hair Caddis (16–18), March Brown (12–14)
- Apr–Jun: Green Drake (10–12)
- May–Aug: Yellow Sally (14–16), Light Cahill (14–16), Inchworm (10–12)
- May–Sep: Sulphur (16–18), Cinnamon Caddis (14–16)
- May–Oct: Isonychia (12–14)
- Jun–Aug: BWO Ephemerella cornutella (18–22), Crane Fly (8–12)
- Jun–Sep: Beetle Black (12–16), Ant Black & Cinnamon (16–20)
- Jul–Sep: Flying Ant (16–18), Hopper Small (10–14), Trico (20–24)
- Sep–Nov: Fall Baetis (18–22)
- Year-Round: Midge General (20–24)
`;

function getEasternDateStr(): string {
  return new Date().toLocaleDateString("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

function celsiusToF(c: number): number {
  return Math.round(c * 9 / 5 + 32);
}

type ConditionsData = {
  tuckCfs: number | null;
  tuckTempF: number | null;
  nantCfs: number | null;
  airTempF: number | null;
  shortForecast: string | null;
  fetchedAt: string;
};

async function fetchCurrentConditions(): Promise<ConditionsData> {
  const result: ConditionsData = {
    tuckCfs: null, tuckTempF: null, nantCfs: null,
    airTempF: null, shortForecast: null, fetchedAt: new Date().toISOString(),
  };

  try {
    const usgsRes = await fetch(
      "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=03460000,03503000&parameterCd=00060,00010&siteStatus=all",
      { next: { revalidate: 21600 } }
    );
    if (usgsRes.ok) {
      const data = await usgsRes.json() as { value: { timeSeries: Array<{
        sourceInfo: { siteCode: Array<{ value: string }> };
        variable: { variableCode: Array<{ value: string }> };
        values: Array<{ value: Array<{ value: string }> }>;
      }> } };
      for (const ts of data.value.timeSeries) {
        const site = ts.sourceInfo.siteCode[0]?.value;
        const variable = ts.variable.variableCode[0]?.value;
        const vals = ts.values[0]?.value;
        const raw = vals?.[vals.length - 1]?.value;
        const num = raw ? parseFloat(raw) : null;
        if (num === null || isNaN(num)) continue;
        if (site === "03460000") {
          if (variable === "00060") result.tuckCfs = num;
          if (variable === "00010") result.tuckTempF = celsiusToF(num);
        }
        if (site === "03503000" && variable === "00060") result.nantCfs = num;
      }
    }
  } catch { /* use null values */ }

  try {
    const ptsRes = await fetch("https://api.weather.gov/points/35.4265,-83.4473", {
      headers: { "User-Agent": "macbrownflyfish.com fishing forecast" },
      next: { revalidate: 3600 },
    });
    if (ptsRes.ok) {
      const ptsData = await ptsRes.json() as { properties: { forecastHourly: string } };
      const hrRes = await fetch(ptsData.properties.forecastHourly, {
        headers: { "User-Agent": "macbrownflyfish.com fishing forecast" },
        next: { revalidate: 3600 },
      });
      if (hrRes.ok) {
        const hrData = await hrRes.json() as {
          properties: { periods: Array<{ temperature: number; temperatureUnit: string; shortForecast: string }> }
        };
        const period = hrData.properties.periods[0];
        result.airTempF = period.temperatureUnit === "F" ? period.temperature : celsiusToF(period.temperature);
        result.shortForecast = period.shortForecast;
      }
    }
  } catch { /* use null values */ }

  return result;
}

type ForecastResult = {
  forecast: string;
  conditions: ConditionsData;
  generatedAt: string;
  dateKey: string;
  error?: string;
};

const generateDailyForecast = unstable_cache(
  async (dateKey: string): Promise<ForecastResult> => {
    const conditions = await fetchCurrentConditions();
    const { tuckCfs, tuckTempF, nantCfs, airTempF, shortForecast } = conditions;

    const month = new Date().toLocaleString("en-US", { month: "long", timeZone: "America/New_York" });
    const conditionsSummary = [
      `Date: ${dateKey} (${month})`,
      `Tuckasegee River: ${tuckCfs !== null ? `${tuckCfs.toLocaleString()} CFS` : "CFS unknown"}${tuckTempF !== null ? `, water temp ${tuckTempF}°F` : ""}`,
      `Nantahala River: ${nantCfs !== null ? `${nantCfs.toLocaleString()} CFS` : "CFS unknown"}${nantCfs !== null ? (nantCfs < 300 ? " (generation OFF — excellent wading)" : " (generation ON — float trips recommended)") : ""}`,
      `Air temp in Bryson City: ${airTempF !== null ? `${airTempF}°F` : "unknown"}${shortForecast ? ` — ${shortForecast}` : ""}`,
    ].join("\n");

    const client = new Anthropic({
      apiKey: process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY!,
      baseURL: process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL,
    });

    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 8192,
      system: `You are Mac Brown, a world-class fly fishing guide and instructor based in Bryson City, NC who has guided on these rivers since 1987. You write fishing forecasts in a direct, knowledgeable, first-person voice — confident and specific, never generic. You speak like an experienced guide who has been on these rivers thousands of times. Your forecasts are 2–3 focused paragraphs. You refer to the Tuckasegee as "the Tuck" and the Nantahala as "the Nanty" naturally in conversation. You mention specific fly patterns, techniques, and locations by name. You never pad with filler. You are always honest about conditions — if it's poor, you say so directly and offer the best alternative.`,
      messages: [{
        role: "user",
        content: `Generate today's fishing forecast for the rivers of Bryson City, NC. Here are today's current conditions:

${conditionsSummary}

Here is the historical on-stream data and pattern knowledge to draw from:

${HISTORICAL_CONTEXT}

${HATCH_CHART_CONTEXT}

Write a 2–3 paragraph forecast in my voice covering:
1. Current conditions summary and which river is fishing better today and why
2. What techniques and specific fly patterns should work today based on conditions, water temp, and current month hatches from the hatch chart above
3. Best time of day to be on the water based on air temp and conditions, plus any safety notes

Do not start with "Mac Brown here" or any self-introduction. Start directly with the conditions assessment. Do not use bullet points — flowing paragraphs only. Be specific and direct.`,
      }],
    });

    const block = message.content[0];
    const forecastText = block.type === "text" ? block.text : "Forecast unavailable — check back shortly.";

    return {
      forecast: forecastText,
      conditions,
      generatedAt: new Date().toISOString(),
      dateKey,
    };
  },
  ["fishing-forecast-daily"],
  { revalidate: 3600 }
);

export async function GET() {
  try {
    const dateKey = getEasternDateStr();
    const result = await generateDailyForecast(dateKey);
    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to generate forecast: ${message}`, forecast: null },
      { status: 500 }
    );
  }
}
