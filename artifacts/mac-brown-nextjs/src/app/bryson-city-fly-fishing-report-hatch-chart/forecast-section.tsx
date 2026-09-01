import { unstable_cache } from "next/cache";
import Anthropic from "@anthropic-ai/sdk";
import { Sparkles } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { getActiveHatches, type Hatch } from "./hatch-data";

function getEasternInfo() {
  const now = new Date();
  const tz = "America/New_York";
  const monthName = now.toLocaleString("en-US", { month: "long", timeZone: tz });
  const month = parseInt(now.toLocaleString("en-US", { month: "numeric", timeZone: tz }));
  const dateStr = now.toLocaleDateString("en-US", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit" });
  return { dateStr, month, monthName };
}

function celsiusToF(c: number) {
  return Math.round(c * 9 / 5 + 32);
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#\d+;/g, " ")
    .replace(/&\w+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

type Conditions = {
  tuckCfs: number | null;
  tuckTempF: number | null;
  nantCfs: number | null;
  airTempF: number | null;
  shortForecast: string | null;
};

async function fetchConditions(): Promise<Conditions> {
  const result: Conditions = { tuckCfs: null, tuckTempF: null, nantCfs: null, airTempF: null, shortForecast: null };
  try {
    const r = await fetch(
      "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=03513000,03505550,03512000&parameterCd=00060,00010&siteStatus=all",
      { next: { revalidate: 21600 } }
    );
    if (r.ok) {
      const data = await r.json() as { value: { timeSeries: Array<{
        sourceInfo: { siteCode: Array<{ value: string }> };
        variable: { variableCode: Array<{ value: string }> };
        values: Array<{ value: Array<{ value: string }> }>;
      }> } };
      for (const ts of data.value.timeSeries) {
        const site = ts.sourceInfo.siteCode[0]?.value;
        const variable = ts.variable.variableCode[0]?.value;
        const vals = ts.values[0]?.value;
        const raw = vals?.[vals.length - 1]?.value;
        const num = raw ? parseFloat(raw) : NaN;
        if (isNaN(num)) continue;
        if (site === "03513000" && variable === "00060") result.tuckCfs = num;
        if (site === "03512000" && variable === "00010") result.tuckTempF = celsiusToF(num);
        if (site === "03505550" && variable === "00060") result.nantCfs = num;
      }
    }
  } catch { /* use nulls */ }

  try {
    const pts = await fetch("https://api.weather.gov/points/35.4265,-83.4473", {
      headers: { "User-Agent": "macbrownflyfish.com fishing forecast" },
      next: { revalidate: 86400 },
    });
    if (pts.ok) {
      const ptsData = await pts.json() as { properties: { observationStations: string } };
      const stationsRes = await fetch(ptsData.properties.observationStations, {
        headers: { "User-Agent": "macbrownflyfish.com fishing forecast" },
        next: { revalidate: 86400 },
      });
      if (stationsRes.ok) {
        const stationsData = await stationsRes.json() as {
          features: Array<{ properties: { stationIdentifier: string } }>;
        };
        const stationId = stationsData.features[0]?.properties.stationIdentifier;
        if (stationId) {
          const obsRes = await fetch(
            `https://api.weather.gov/stations/${stationId}/observations/latest`,
            {
              headers: { "User-Agent": "macbrownflyfish.com fishing forecast" },
              next: { revalidate: 21600 },
            }
          );
          if (obsRes.ok) {
            const obsData = await obsRes.json() as {
              properties: { temperature: { value: number | null }; textDescription: string };
            };
            const tempC = obsData.properties.temperature.value;
            result.airTempF = tempC !== null ? celsiusToF(tempC) : null;
            result.shortForecast = obsData.properties.textDescription;
          }
        }
      }
    }
  } catch { /* use null */ }

  return result;
}

function getAnthropicClient(): Anthropic | null {
  const replitBase = process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL;
  const replitKey = process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY;
  const directKey = process.env.ANTHROPIC_API_KEY;
  if (replitBase && replitKey) {
    return new Anthropic({ apiKey: replitKey, baseURL: replitBase });
  }
  if (directKey) {
    return new Anthropic({ apiKey: directKey });
  }
  return null;
}

function buildBlogContext(): string {
  const hidden = blogPosts.filter(p => p.hidden);
  return hidden.map(p => {
    const text = stripHtml(p.contentHtml).slice(0, 700);
    return `[${p.title} — ${p.date}]\n${text}`;
  }).join("\n\n---\n\n");
}

function staticForecast(active: Hatch[], conditions: Conditions, monthName: string): string {
  const insects = active.filter(h => h.insect !== "Midge (General)").map(h => `${h.insect} (#${h.size})`).join(", ");
  const tuck = conditions.tuckCfs !== null
    ? `The Tuckasegee is running ${conditions.tuckCfs.toLocaleString()} CFS${conditions.tuckTempF ? ` at ${conditions.tuckTempF}°F` : ""}.`
    : "Tuckasegee flow data is temporarily unavailable.";
  const nant = conditions.nantCfs !== null
    ? `The Nantahala is at ${conditions.nantCfs.toLocaleString()} CFS${conditions.nantCfs < 300 ? " — generation is off, wading is excellent" : " — generation is on, float trips recommended"}.`
    : "";
  const air = conditions.airTempF ? ` Air temp is ${conditions.airTempF}°F${conditions.shortForecast ? ` with ${conditions.shortForecast.toLowerCase()}` : ""}.` : "";

  let para1 = `${tuck}${nant ? " " + nant : ""}${air}`;
  if (conditions.tuckTempF) {
    if (conditions.tuckTempF < 45) para1 += " Water is cold — midges and small BWOs are your best option. Fish deep and slow.";
    else if (conditions.tuckTempF < 55) para1 += " Water is in the early-season range — dry fly fishing is viable. Quill Gordons and Blue Quills are worth having tied on.";
    else if (conditions.tuckTempF < 65) para1 += ` Water temp is prime for trout — ${monthName} is one of the strongest months of the year on these rivers.`;
    else if (conditions.tuckTempF < 72) para1 += " Water is warming up — focus on early morning and evening. Terrestrials dominate midday.";
    else para1 += " Water is above 72°F — please do not target trout. Target higher-elevation streams or smallmouth bass on warmer sections.";
  }

  let para2 = "";
  if (active.length > 0) {
    const dries = active.filter(h => !["Midge (General)", "Crane Fly", "Inchworm"].includes(h.insect));
    const terrestrials = active.filter(h => ["Beetle (Black)", "Ant (Black & Cinnamon)", "Flying Ant", "Hopper (Small)", "Inchworm"].includes(h.insect));
    if (terrestrials.length > 0) {
      para2 = `For ${monthName}, the terrestrial bite is real — ${terrestrials.map(h => h.insect.replace(" (Black)", "").replace(" (Black & Cinnamon)", "")).join(", ")} are all producing. `;
    }
    if (dries.length > 0) {
      para2 += `Active hatches to match: ${insects}. Midge (#20–24) year-round is always worth having in your box.`;
    }
  }

  const timing = conditions.airTempF && conditions.airTempF > 80
    ? "Get on the water early — by 6am if you can — and off by 10am before air temps drive water temps up."
    : conditions.airTempF && conditions.airTempF < 50
    ? "Midday fishing will be your best window as water temps climb through the morning."
    : "Morning and evening are prime. Overcast days fire all day — take those bobbers off and swing wets.";

  return [para1, para2, timing].filter(Boolean).join("\n\n");
}

type ForecastResult = { text: string; isAI: boolean; generatedAt: string };

const getCachedForecast = unstable_cache(
  async (dateKey: string, month: number, monthName: string): Promise<ForecastResult> => {
    const [conditions, blogContext] = await Promise.all([
      fetchConditions(),
      Promise.resolve(buildBlogContext()),
    ]);

    const active = getActiveHatches(month);
    const client = getAnthropicClient();

    if (!client) {
      return { text: staticForecast(active, conditions, monthName), isAI: false, generatedAt: new Date().toISOString() };
    }

    const insectList = active
      .map(h => `• ${h.insect}, hook size #${h.size}, active ${h.months}`)
      .join("\n");

    const conditionsSummary = [
      `Date: ${dateKey} (${monthName})`,
      `Tuckasegee: ${conditions.tuckCfs != null ? `${conditions.tuckCfs.toLocaleString()} CFS` : "unknown CFS"}${conditions.tuckTempF != null ? `, ${conditions.tuckTempF}°F water temp` : ""}`,
      `Nantahala: ${conditions.nantCfs != null ? `${conditions.nantCfs.toLocaleString()} CFS${conditions.nantCfs < 300 ? " (generation OFF)" : " (generation ON)"}` : "unknown CFS"}`,
      `Air: ${conditions.airTempF != null ? `${conditions.airTempF}°F` : "unknown"}${conditions.shortForecast ? ` — ${conditions.shortForecast}` : ""}`,
    ].join("\n");

    try {
      const message = await client.messages.create({
        model: "claude-sonnet-4-6",
        max_tokens: 8192,
        system: `You are Mac Brown, a world-class fly fishing guide in Bryson City, NC guiding since 1987. You write daily fishing forecasts in a direct, first-person voice — confident, specific, never generic. You say "the Tuck" and "the Nanty" naturally. You name specific patterns and techniques. Two to three tight paragraphs only. No bullet points. No filler. If conditions are poor, say so and give the best alternative.`,
        messages: [{
          role: "user",
          content: `Write today's fishing forecast for Bryson City, NC.

CURRENT CONDITIONS:
${conditionsSummary}

INSECTS ACTIVE THIS MONTH (${monthName}) — extracted directly from the Bryson City hatch chart:
${insectList}

ON-STREAM REPORTS FROM PREVIOUS YEARS ON THESE SAME WATERS:
${blogContext}

Cover: (1) which river is fishing better today and why, (2) which specific patterns from the active insect list above will work today and how to fish them, (3) best time window and any safety notes. Start directly with conditions — no introduction.`,
        }],
      });

      const block = message.content[0];
      const text = block.type === "text" ? block.text : staticForecast(active, conditions, monthName);
      return { text, isAI: true, generatedAt: new Date().toISOString() };
    } catch {
      return { text: staticForecast(active, conditions, monthName), isAI: false, generatedAt: new Date().toISOString() };
    }
  },
  ["hatch-chart-forecast-v2"],
  { revalidate: 3600 }
);

function formatTime(iso: string): string {
  try {
    return new Date(iso).toLocaleString("en-US", {
      month: "short", day: "numeric", hour: "numeric", minute: "2-digit",
      timeZone: "America/New_York", timeZoneName: "short",
    });
  } catch { return ""; }
}

export async function ForecastSection() {
  const { dateStr, month, monthName } = getEasternInfo();
  const active = getActiveHatches(month);

  let result: ForecastResult;
  try {
    result = await getCachedForecast(dateStr, month, monthName);
  } catch {
    const conditions = await fetchConditions().catch(() => ({
      tuckCfs: null, tuckTempF: null, nantCfs: null, airTempF: null, shortForecast: null,
    }));
    result = { text: staticForecast(active, conditions, monthName), isAI: false, generatedAt: new Date().toISOString() };
  }

  return (
    <section className="py-24 bg-primary text-primary-foreground" id="forecast">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={13} className="text-primary-foreground/50" />
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground/50">
              {result.isAI ? "AI-Generated · Updated Daily at 6am ET" : `${monthName} Seasonal Forecast`}
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
            Today&apos;s Fishing Forecast
            <span className="block text-xl md:text-2xl font-normal text-primary-foreground/60 mt-1">
              Generated from 40 Years of On-Stream Data
            </span>
          </h2>
        </div>

        {/* Active insects this month */}
        <div className="mb-10 p-5 bg-primary-foreground/8 border border-primary-foreground/15 rounded-sm">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/50 mb-4">
            Insects Active in {monthName}
          </p>
          <div className="flex flex-wrap gap-2">
            {active.map(h => (
              <span
                key={h.insect}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full text-xs text-primary-foreground/80"
              >
                <span className="font-medium">{h.insect}</span>
                <span className="text-primary-foreground/40">#{h.size}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Forecast text */}
        <div className="space-y-5 text-primary-foreground/85 leading-relaxed">
          {result.text.split(/\n\n+/).map((para, i) => (
            <p key={i} className="text-[1.05rem]">{para}</p>
          ))}
        </div>

        {result.generatedAt && (
          <p className="mt-8 text-xs text-primary-foreground/35">
            {result.isAI ? "AI forecast" : "Seasonal forecast"} — {formatTime(result.generatedAt)}
          </p>
        )}

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/20">
          <p className="text-xs text-primary-foreground/45 leading-relaxed italic">
            {result.isAI
              ? "This forecast is generated by AI using historical on-stream data collected by Mac Brown Fly Fish since 1987 and current USGS/NWS data. Conditions change rapidly in mountain environments — always verify flows and water temperatures before heading out."
              : "Forecast based on historical hatch data and current USGS/NWS conditions. Conditions change rapidly in mountain environments — always verify flows and water temperatures before heading out."}
          </p>
        </div>
      </div>
    </section>
  );
}
