"use client";

import { useEffect, useState, useCallback } from "react";
import { RefreshCw, AlertTriangle, Thermometer, Droplets, Wind } from "lucide-react";

type ConditionRating = "Prime" | "Good" | "Fair" | "Poor" | "Rest the Water";

type RiverData = {
  site: string;
  cfs: number | null;
  waterTempC: number | null;
  fetchedAt: string | null;
  error: boolean;
};

type WeatherData = {
  airTempF: number | null;
  shortForecast: string | null;
  error: boolean;
};

const USGS_URL =
  "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=03513000,03505550,03512000&parameterCd=00060,00010&siteStatus=all";

function celsiusToF(c: number): number {
  return Math.round(c * 9 / 5 + 32);
}

function parseTempRating(tempF: number | null): {
  rating: ConditionRating;
  technique: string;
  label: string;
} {
  if (tempF === null) return { rating: "Fair", technique: "—", label: "No temperature data" };
  if (tempF > 72)
    return {
      rating: "Rest the Water",
      technique: "Rest the water entirely",
      label: `${tempF}°F — Above 72°F`,
    };
  if (tempF > 65)
    return {
      rating: "Poor",
      technique: "Warm water species only — fish early morning before temps rise",
      label: `${tempF}°F — Above 65°F`,
    };
  if (tempF >= 55)
    return {
      rating: "Prime",
      technique: "All techniques firing — best dry fly fishing of the year",
      label: `${tempF}°F — 55–65°F`,
    };
  if (tempF >= 45)
    return {
      rating: "Good",
      technique: "Dry fly fishing becomes viable — Quill Gordons, Blue Quills, Black Stones",
      label: `${tempF}°F — 45–55°F`,
    };
  return {
    rating: "Fair",
    technique: "Nymphing and wet flies most productive — midges and BWOs",
    label: `${tempF}°F — Below 45°F`,
  };
}

function parseTuckCfs(cfs: number | null): {
  rating: ConditionRating;
  recommendation: string;
  safety: string | null;
} {
  if (cfs === null)
    return { rating: "Fair", recommendation: "Data unavailable", safety: null };
  if (cfs > 4000)
    return {
      rating: "Poor",
      recommendation: "No floating — bank fishing only from safe access points",
      safety: "Above 4,000 CFS — float trips are off.",
    };
  if (cfs >= 2000)
    return {
      rating: "Good",
      recommendation: "Float trips fine — experienced conditions",
      safety: null,
    };
  if (cfs >= 500)
    return {
      rating: "Prime",
      recommendation: "Float trip recommended — ideal conditions",
      safety: null,
    };
  return {
    rating: "Fair",
    recommendation: "Too low to float — fish the freestone streams in the Smokies",
    safety: null,
  };
}

function parseNantCfs(cfs: number | null): {
  rating: ConditionRating;
  recommendation: string;
  safety: string | null;
} {
  if (cfs === null)
    return { rating: "Fair", recommendation: "Data unavailable", safety: null };
  if (cfs < 300)
    return {
      rating: "Prime",
      recommendation: "Generation off — excellent wading conditions",
      safety: "Stay on the road side of the river when waters rise. Be aware of release schedules.",
    };
  return {
    rating: "Good",
    recommendation: "Generation on — float trips recommended",
    safety: "Check TVA release schedule before wading.",
  };
}

const RATING_ORDER: ConditionRating[] = [
  "Prime",
  "Good",
  "Fair",
  "Poor",
  "Rest the Water",
];

function worstRating(a: ConditionRating, b: ConditionRating): ConditionRating {
  return RATING_ORDER.indexOf(a) >= RATING_ORDER.indexOf(b) ? a : b;
}

const RATING_COLORS: Record<ConditionRating, { card: string; badge: string; dot: string }> = {
  Prime: {
    card: "border-green-200 bg-green-50",
    badge: "bg-green-600 text-white",
    dot: "bg-green-500",
  },
  Good: {
    card: "border-yellow-200 bg-yellow-50",
    badge: "bg-yellow-500 text-white",
    dot: "bg-yellow-400",
  },
  Fair: {
    card: "border-orange-200 bg-orange-50",
    badge: "bg-orange-500 text-white",
    dot: "bg-orange-400",
  },
  Poor: {
    card: "border-red-200 bg-red-50",
    badge: "bg-red-600 text-white",
    dot: "bg-red-500",
  },
  "Rest the Water": {
    card: "border-red-300 bg-red-100",
    badge: "bg-red-800 text-white",
    dot: "bg-red-800",
  },
};

function parseUSGS(data: Record<string, unknown>): { tuck: RiverData; nant: RiverData } {
  const timeSeries = (data?.value as Record<string, unknown>)?.timeSeries as Record<string, unknown>[];
  const tuck: RiverData = { site: "03513000", cfs: null, waterTempC: null, fetchedAt: null, error: false };
  const nant: RiverData = { site: "03505550", cfs: null, waterTempC: null, fetchedAt: null, error: false };

  if (!Array.isArray(timeSeries)) {
    tuck.error = true;
    nant.error = true;
    return { tuck, nant };
  }

  for (const ts of timeSeries) {
    const siteCode = ((ts?.sourceInfo as Record<string, unknown>)?.siteCode as Array<Record<string, unknown>>)?.[0]?.value as string;
    const varCode = ((ts?.variable as Record<string, unknown>)?.variableCode as Array<Record<string, unknown>>)?.[0]?.value as string;
    const values = ((ts?.values as Array<Record<string, unknown>>)?.[0]?.value) as Array<Record<string, unknown>>;
    const lastVal = values?.[values.length - 1];
    const raw = lastVal?.value as string;
    const dateTime = lastVal?.dateTime as string;
    const num = raw ? parseFloat(raw) : null;
    if (num === null || isNaN(num)) continue;

    if (siteCode === "03513000") {
      if (varCode === "00060") { tuck.cfs = num; tuck.fetchedAt = dateTime; }
    }
    if (siteCode === "03512000") {
      if (varCode === "00010") tuck.waterTempC = num;
    }
    if (siteCode === "03505550") {
      if (varCode === "00060") { nant.cfs = num; nant.fetchedAt = dateTime; }
      if (varCode === "00010") nant.waterTempC = num;
    }
  }

  return { tuck, nant };
}

function formatUpdated(iso: string | null): string {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleString("en-US", {
      month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short",
    });
  } catch {
    return iso;
  }
}

export function ConditionsWidget() {
  const [tuck, setTuck] = useState<RiverData>({ site: "03513000", cfs: null, waterTempC: null, fetchedAt: null, error: false });
  const [nant, setNant] = useState<RiverData>({ site: "03505550", cfs: null, waterTempC: null, fetchedAt: null, error: false });
  const [weather, setWeather] = useState<WeatherData>({ airTempF: null, shortForecast: null, error: false });
  const [loading, setLoading] = useState(true);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  const fetchUSGS = useCallback(async () => {
    try {
      const res = await fetch(USGS_URL, { cache: "no-store" });
      if (!res.ok) throw new Error("USGS error");
      const data = await res.json() as Record<string, unknown>;
      const { tuck: t, nant: n } = parseUSGS(data);
      setTuck(t);
      setNant(n);
    } catch {
      setTuck((p) => ({ ...p, error: true }));
      setNant((p) => ({ ...p, error: true }));
    }
  }, []);

  const fetchWeather = useCallback(async () => {
    try {
      const pts = await fetch("https://api.weather.gov/points/35.4265,-83.4473", {
        headers: { "User-Agent": "macbrownflyfish.com conditions widget" },
      });
      if (!pts.ok) throw new Error("NWS points error");
      const ptsData = await pts.json() as { properties: { observationStations: string } };
      const stationsRes = await fetch(ptsData.properties.observationStations, {
        headers: { "User-Agent": "macbrownflyfish.com conditions widget" },
      });
      if (!stationsRes.ok) throw new Error("NWS stations error");
      const stationsData = await stationsRes.json() as {
        features: Array<{ properties: { stationIdentifier: string } }>;
      };
      const stationId = stationsData.features[0]?.properties.stationIdentifier;
      if (!stationId) throw new Error("No station found");
      const obsRes = await fetch(
        `https://api.weather.gov/stations/${stationId}/observations/latest`,
        { headers: { "User-Agent": "macbrownflyfish.com conditions widget" } }
      );
      if (!obsRes.ok) throw new Error("NWS observation error");
      const obsData = await obsRes.json() as {
        properties: { temperature: { value: number | null }; textDescription: string };
      };
      const tempC = obsData.properties.temperature.value;
      const tempF = tempC !== null ? celsiusToF(tempC) : null;
      setWeather({ airTempF: tempF, shortForecast: obsData.properties.textDescription, error: false });
    } catch {
      setWeather((p) => ({ ...p, error: true }));
    }
  }, []);

  const refresh = useCallback(async () => {
    setLoading(true);
    await Promise.all([fetchUSGS(), fetchWeather()]);
    setLastRefresh(new Date());
    setLoading(false);
  }, [fetchUSGS, fetchWeather]);

  useEffect(() => {
    void refresh();
    const interval = setInterval(() => { void refresh(); }, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, [refresh]);

  const tuckTempF = tuck.waterTempC !== null ? celsiusToF(tuck.waterTempC) : null;
  const tuckCfsInfo = parseTuckCfs(tuck.cfs);
  const tuckTempInfo = parseTempRating(tuckTempF);
  const tuckOverall = worstRating(tuckCfsInfo.rating, tuckTempInfo.rating);

  const nantCfsInfo = parseNantCfs(nant.cfs);

  const tuckColors = RATING_COLORS[tuckOverall];
  const nantColors = RATING_COLORS[nantCfsInfo.rating];

  return (
    <section className="py-24 bg-muted/30" id="conditions">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-2">Live Data · USGS &amp; NWS</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">Automated River Conditions</h2>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {loading ? (
              <RefreshCw size={13} className="animate-spin text-primary" />
            ) : (
              <button
                onClick={() => { void refresh(); }}
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
                aria-label="Refresh conditions"
              >
                <RefreshCw size={13} />
                Refresh
              </button>
            )}
            <span>
              {lastRefresh
                ? `Updated ${lastRefresh.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}`
                : "Loading…"}
            </span>
          </div>
        </div>

        {/* Air temp bar */}
        <div className="bg-white border border-border px-6 py-4 mb-6 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Wind size={14} className="text-primary" />
            <span className="font-medium text-foreground">Bryson City Air Temp:</span>
            <span className="text-muted-foreground">
              {weather.airTempF !== null ? `${weather.airTempF}°F` : "—"}
              {weather.shortForecast ? ` · ${weather.shortForecast}` : ""}
            </span>
          </div>
          <span className="text-muted-foreground/40 hidden sm:inline">|</span>
          <span className="text-xs text-muted-foreground">Data from USGS Water Services · Refreshes every 15 min</span>
        </div>

        {/* River cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tuckasegee */}
          <div className={`border rounded-sm p-6 ${tuckColors.card}`}>
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/60 mb-1">Tuckasegee River · Site 03513000</p>
                <h3 className="font-serif text-xl font-bold text-foreground">Tuckasegee River</h3>
              </div>
              <span className={`text-xs font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-sm ${tuckColors.badge}`}>
                {tuckOverall}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-5">
              <Stat icon={<Droplets size={14} />} label="Flow" value={tuck.cfs !== null ? `${tuck.cfs.toLocaleString()} CFS` : "—"} />
              <Stat icon={<Thermometer size={14} />} label="Water Temp*" value={tuckTempF !== null ? `${tuckTempF}°F` : "—"} />
              <Stat icon={<Wind size={14} />} label="Air Temp" value={weather.airTempF !== null ? `${weather.airTempF}°F` : "—"} />
            </div>

            <div className="space-y-2 text-sm">
              <CondRow label="Float / Wade" value={tuckCfsInfo.recommendation} />
              <CondRow label="Technique" value={tuckTempInfo.technique} />
              <CondRow label="Hatch" value={tuckTempInfo.label} />
            </div>

            {(tuckCfsInfo.safety) && (
              <div className="mt-4 flex gap-2 bg-white/70 border border-current/20 rounded-sm px-3 py-2 text-xs text-foreground/70">
                <AlertTriangle size={13} className="shrink-0 mt-0.5 text-orange-500" />
                <span>{tuckCfsInfo.safety}</span>
              </div>
            )}

            <p className="mt-4 text-[11px] text-foreground/40">
              Last reading: {formatUpdated(tuck.fetchedAt)}
            </p>
            <p className="mt-1 text-[11px] text-foreground/40">* Water temp from Oconaluftee R. at Birdtown (nearest sensor)</p>
          </div>

          {/* Nantahala */}
          <div className={`border rounded-sm p-6 ${nantColors.card}`}>
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/60 mb-1">Nantahala River · Site 03505550</p>
                <h3 className="font-serif text-xl font-bold text-foreground">Nantahala River</h3>
              </div>
              <span className={`text-xs font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-sm ${nantColors.badge}`}>
                {nantCfsInfo.rating}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-5">
              <Stat icon={<Droplets size={14} />} label="Flow" value={nant.cfs !== null ? `${nant.cfs.toLocaleString()} CFS` : "—"} />
              <Stat icon={<Thermometer size={14} />} label="Water Temp" value="No sensor" note />
              <Stat icon={<Wind size={14} />} label="Air Temp" value={weather.airTempF !== null ? `${weather.airTempF}°F` : "—"} />
            </div>

            <div className="space-y-2 text-sm">
              <CondRow label="Float / Wade" value={nantCfsInfo.recommendation} />
              <CondRow label="Generation" value={nant.cfs !== null ? (nant.cfs < 300 ? "Off" : "Running") : "—"} />
              <CondRow label="Technique" value={nant.cfs !== null && nant.cfs < 300 ? "Wading — all techniques" : "Float trip recommended"} />
            </div>

            {nantCfsInfo.safety && (
              <div className="mt-4 flex gap-2 bg-white/70 border border-current/20 rounded-sm px-3 py-2 text-xs text-foreground/70">
                <AlertTriangle size={13} className="shrink-0 mt-0.5 text-orange-500" />
                <span>{nantCfsInfo.safety}</span>
              </div>
            )}

            <p className="mt-4 text-[11px] text-foreground/40">
              Last reading: {formatUpdated(nant.fetchedAt)}
            </p>
          </div>
        </div>

        {/* Deep Creek link */}
        <div className="mt-6 bg-white border border-border px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/60 mb-0.5">Deep Creek · FIMAN Gauge</p>
            <p className="text-sm text-muted-foreground">No USGS gauge on Deep Creek — check the NC FIMAN gauge for live flow data.</p>
          </div>
          <a
            href="https://fiman.nc.gov/?id=25440"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-primary underline underline-offset-2 hover:opacity-75 transition-opacity"
          >
            Deep Creek Gauge →
          </a>
        </div>

        {/* Safety disclaimer */}
        <div className="mt-6 flex gap-3 bg-white border border-border px-5 py-4 text-sm text-muted-foreground">
          <AlertTriangle size={15} className="shrink-0 mt-0.5 text-orange-500" />
          <p>
            Always check TVA and Duke Energy generation schedules before wading the Nantahala River. When in doubt, stay on the road side of the river for safe exit. Above 4,000 CFS on the Tuckasegee — float trips are off. Bank fishing only from safe access points.
          </p>
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon,
  label,
  value,
  note,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  note?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-1 text-foreground/50 mb-1">
        {icon}
        <span className="text-[10px] uppercase tracking-[0.15em] font-medium">{label}</span>
      </div>
      <p className={`font-serif font-bold text-foreground ${note ? "text-sm text-foreground/40 font-normal font-sans" : "text-lg"}`}>
        {value}
      </p>
    </div>
  );
}

function CondRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2 text-sm">
      <span className="shrink-0 font-medium text-foreground/60 w-28">{label}:</span>
      <span className="text-foreground/80">{value}</span>
    </div>
  );
}
