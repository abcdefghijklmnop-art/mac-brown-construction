import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { RiverItem } from "./river-accordion";
import { ConditionsWidget } from "./conditions-widget";
import { ForecastSection } from "./forecast-section";

import { SchemaScript } from "@/components/schema-script";
import {
  faqPageSchema,
  hatchDatasetSchema,
  hatchItemListSchema,
  liveRiverConditionsDatasetSchema,
  hatchReportTechArticleSchema,
} from "@/lib/schema";
import { img } from "@/lib/asset";
import { hatches } from "./hatch-data";

export const metadata: Metadata = {
  title: { absolute: "Smoky Mountains Fly Fishing Report & Hatch Chart" },
  description: "Live Smoky Mountains fly fishing conditions, hatch chart, and AI daily forecast for the Tuckasegee and Nantahala rivers. Updated every 15 minutes.",
  alternates: { canonical: "https://macbrownflyfish.com/bryson-city-fly-fishing-report-hatch-chart/" },
  openGraph: {
    title: "River Conditions & Hatch Chart — Bryson City NC Fly Fishing Report",
    description: "40 years of on-stream data from the rivers of Western NC and the Great Smoky Mountains. Know what's hatching before you leave home.",
    url: "https://macbrownflyfish.com/bryson-city-fly-fishing-report-hatch-chart/",
    images: [{ url: "https://macbrownflyfish.com/images/tuckasegee-summer.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "River Conditions & Hatch Chart — Bryson City NC",
    images: ["https://macbrownflyfish.com/images/tuckasegee-summer.webp"],
  },
};


const rivers = [
  {
    name: "Tuckasegee River",
    desc: "The primary tailwater fishery flowing through Bryson City. Water generation from Thorpe Dam affects levels significantly. Check the Duke Energy release schedule before your trip.",
  },
  {
    name: "Oconaluftee River",
    desc: "The freestone gem flowing through the Great Smoky Mountains National Park. Levels respond quickly to rainfall — clear and fishable after 24–48 hours of dry weather following rain events.",
  },
  {
    name: "Nantahala River",
    desc: "Nantahala Power and Light controls flows. Cold, clear, and productive year-round when generation is low.",
  },
  {
    name: "Deep Creek",
    desc: "A beautiful backcountry stream within the national park. Walk-in access, wild trout, and some of the finest dry fly fishing in the region during spring and early summer.",
  },
  {
    name: "Fontana & Cheoah Lakes",
    desc: "Exceptional stillwater fishing throughout the cooler months. See the Guided Lake Trips page for full detail.",
  },
];

const tempRanges = [
  { range: "Below 45°F", desc: "Midges and small Blue Winged Olives. Nymphing and wet flies most productive." },
  { range: "45–55°F", desc: "Early season hatches begin. Quill Gordons, Blue Quills, and Black Stones. Dry fly fishing becomes viable." },
  { range: "55–65°F", desc: "Prime hatch season. The most diverse and prolific insect activity of the year. Dry fly fishing at its finest." },
  { range: "65–72°F", desc: "Summer hatches. Sulphurs, Cahills, Isonychia, and terrestrials. Evening fishing becomes essential." },
  { range: "Above 72°F", desc: "Trout activity slows significantly in many streams. Focus shifts to higher elevation streams, tailwaters, and early morning or late evening windows." },
];

const faqs = [
  {
    q: "What are the current water temperatures on the Tuckasegee and Nantahala rivers?",
    a: "Current water temperatures on the Tuckasegee and Nantahala rivers are updated every 15 minutes from USGS gauge data at the top of this page. The Nantahala runs year-round between 45–52°F as a dam-controlled tailwater pulling cold water from the bottom of Lake Nantahala. The Tuckasegee varies seasonally — mid-50s is prime trout fishing temperature. Stop fishing for trout at 65°F and switch to warm water species.",
  },
  {
    q: "Is the Tuckasegee River good for fly fishing today?",
    a: "Check the live conditions widget at the top of this page for today's Tuckasegee CFS and water temperature. The Tuckasegee fishes best for trout when water temps are between 45–65°F. Float trips run well from 500 to 4,000 CFS. Below 500 CFS focus on the freestone streams in Great Smoky Mountains National Park. Above 4,000 CFS bank fishing only.",
  },
  {
    q: "What is the Nantahala River flow today and is it good for fly fishing?",
    a: "Current Nantahala CFS is updated every 15 minutes in the conditions widget above. The Nantahala fishes best for trout when TVA generation is off — typically until noon. Wading is excellent during off-generation periods. Always check the TVA release schedule before wading and stay on the road side of the river for safe exit when generation resumes. Float trips are recommended when generation is running.",
  },
  {
    q: "What flies are working in the Smoky Mountains right now?",
    a: "The AI fishing forecast at the top of this page generates daily fly recommendations based on current water temperature, CFS, air temperature, and 40 years of historical on-stream data from Mac Brown Fly Fish. As a general rule — caddis patterns work year-round on these streams in larval, pupal, and adult forms. In spring key on Quill Gordons, Blue Quills, and Hendricksons. Summer brings terrestrials — ants, beetles, and hoppers. Fall means October Caddis and big browns.",
  },
  {
    q: "Should I go fly fishing in Bryson City today?",
    a: "Check the AI Daily Fishing Forecast at the top of this page — generated every morning at 6am from current USGS flow data, NWS air temperatures, and 40 years of historical on-stream reports from Mac Brown Fly Fish. If water temps are between 45–65°F and the Tuckasegee is running 500–4,000 CFS — get on the water. Spring and fall are the strongest seasons.",
  },
];

const seasons = [
  { window: "February–April", desc: "Early season hatches, lighter crowds, and some of the finest nymph and wet fly fishing of the year." },
  { window: "April–June", desc: "Peak hatch season. The Green Drake emergence alone is worth planning a trip around." },
  { window: "June–August", desc: "Terrestrial season and evening sulphur hatches. Early morning and late evening are the premium windows." },
  { window: "September–November", desc: "Fall brings cooling water, aggressive fish, and some of the most beautiful conditions of the year on these rivers." },
  { window: "December–January", desc: "Midges and Blue Winged Olives. Quiet water, fewer anglers, and fish that are very catchable for those who know where to look." },
];

export default function BrysonCityFlyFishingReportHatchChart() {
  return (
    <div className="w-full">
      <SchemaScript schema={hatchReportTechArticleSchema()} />
      <SchemaScript schema={hatchDatasetSchema(hatches)} />
      <SchemaScript schema={hatchItemListSchema(hatches)} />
      <SchemaScript schema={liveRiverConditionsDatasetSchema()} />
      <SchemaScript schema={faqPageSchema(faqs.map((f) => ({ q: f.q, a: f.a })))} />

      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[380px] overflow-hidden">
        <img
          src={img("/images/tuckasegee-summer.webp")}
          srcSet={`${img("/images/tuckasegee-summer-1280.webp")} 1280w, ${img("/images/tuckasegee-summer.webp")} 1920w`}
          sizes="100vw"
          alt="The Tuckasegee River near Bryson City NC — Mac Brown Fly Fish river conditions and hatch report"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Tuckasegee River · Nantahala River · Great Smoky Mountains · Live Conditions</p>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Smoky Mountains Fly Fishing Report & Hatch Chart — Bryson City, NC
          </h1>
          <p className="text-white/70 text-base italic font-serif max-w-xl">
            Your essential guide to what&apos;s hatching, what&apos;s working, and what to expect on the water
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">Updated Every 15 Minutes — Live USGS Data</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
            Know What&apos;s Happening on the Water Before You Ever Leave Home
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-left">
            <p>The Bryson City Area Hatch Chart covers fly fishing conditions, insect emergence, and fly recommendations for the Tuckasegee River, Nantahala River, Oconaluftee River, Deep Creek, and wild streams of Great Smoky Mountains National Park — compiled from 40 years of on-stream data and over 14,000 stomach samples from wild regional trout by Mac Brown Fly Fish. Updated seasonally. The most comprehensive hatch data available for Western North Carolina.</p>
            <p>Whether you are planning a trip weeks out or deciding whether to grab the rod this afternoon, the single most valuable piece of information any angler can have is what the fish are eating right now. This page exists to answer that question — built from 40 years of on-stream data, over 14,000 stomach samples from wild regional trout, and nearly four decades of daily observation on the rivers of Western North Carolina.</p>
            <p>This is not a guess. It is a record.</p>
          </div>
          <blockquote className="mt-10 pl-4 border-l-2 border-primary font-serif italic text-foreground/75 leading-relaxed text-[1.1rem] text-left">
            &ldquo;Understanding the hatch is understanding the fish. When you know what&apos;s in the water, you stop guessing and start fishing with genuine confidence.&rdquo;
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <Link href="/instructional-guided-trips" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/90 transition-colors w-full sm:w-fit">
              Book a Guided Trip <ArrowRight size={14} />
            </Link>
            <Link href="/events-calendar" className="inline-flex items-center justify-center gap-2 border border-primary text-primary text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/5 transition-colors w-full sm:w-fit">
              See Upcoming Dates
            </Link>
          </div>
        </div>
      </section>

      {/* CONDITIONS WIDGET */}
      <ConditionsWidget />

      {/* RIVER CONDITIONS */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Current Conditions</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">River Conditions</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Water levels, clarity, and temperature all play a significant role in fish behavior and fly selection — and all three can change quickly in the mountain environment of the Southern Appalachians.
              </p>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">Live Conditions Links</p>
                {[
                  { label: "USGS Water Data — Tuckasegee River", url: "https://waterdata.usgs.gov/monitoring-location/03460000/" },
                  { label: "Duke Energy — Lake & Generation Info", url: "https://www.duke-energy.com/home/products/lake-info" },
                  { label: "NWS Asheville Forecast", url: "https://www.weather.gov/gsp/" },
                ].map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <ExternalLink size={13} className="shrink-0" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="bg-white border border-border p-8">
                {rivers.map((r) => (
                  <RiverItem key={r.name} name={r.name} desc={r.desc} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* READING THE CONDITIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Water Temperature Guide</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">Reading the Conditions</h2>
          <p className="text-muted-foreground leading-relaxed mb-3 max-w-2xl">
            Actual emergence dates may run early or late depending on weather patterns. Elevation plays a significant role — hatches finished at lower elevations may still be active in the higher backcountry streams of the national park. Water temperature is the most reliable trigger.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {tempRanges.map((t) => (
              <div key={t.range} className="bg-white p-8">
                <div className="w-8 h-0.5 bg-primary mb-4" />
                <p className="font-serif text-lg font-bold text-primary mb-3">{t.range}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 space-y-4 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">A note on fly selection:</strong> Patterns with hot spots, colored triggers, and rubber legs consistently outperform more traditional drab patterns on these streams — a conclusion drawn from years of comparative results on the water. Do not underestimate the attractor element.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Terrestrials all summer long:</strong> Inchworms, beetles, ants, flying ants, and small hoppers are active from late spring through early fall and consistently produce fish throughout the warmest months. Never leave home without them.
            </p>
          </div>
        </div>
      </section>

      {/* HATCH CHART */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Bryson City Area</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">Hatch Chart</h2>
          <p className="text-muted-foreground leading-relaxed mb-2 max-w-2xl">
            Western North Carolina · Great Smoky Mountains National Park
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl text-sm">
            Compiled over 40 years of on-stream data from over 14,000 stomach samples. Use as a starting framework and adjust based on current water temperature and conditions. Caddisflies are the most abundant insect family in this region — over 330 species identified in the surrounding watershed alone. Carry larval, pupal, and adult caddis patterns throughout the year.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em]">Insect / Pattern</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em]">Hook Size</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em]">Months Active</th>
                </tr>
              </thead>
              <tbody>
                {hatches.map((h, i) => (
                  <tr key={i} className={`border-b border-border ${i % 2 === 0 ? "bg-white" : "bg-muted/20"}`}>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{h.insect}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{h.size}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{h.months}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Average emergence dates. Adjust based on current water temperature and local conditions. Elevation affects timing significantly.
          </p>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">How to Use This Chart</p>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6 leading-tight">Cross-Reference, Then Observe</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Cross-reference the current month with water temperature and you have a strong starting framework for fly selection. From there, observation does the rest — watch the water surface for rising fish and the air for flying insects, check streamside vegetation for clinging adults, and turn over a few rocks to see what is active in the substrate.</p>
                <p>The angler who reads the water and the hatch together — not just the chart — is the angler who consistently finds the right fly. The guided trips and schools here teach exactly that process, and it is one of the most satisfying skills in all of fly fishing to develop.</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Plan Your Trip</p>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6 leading-tight">Best Windows by Season</h2>
              <div className="space-y-px">
                {seasons.map((s) => (
                  <div key={s.window} className="flex gap-6 py-5 border-b border-border last:border-0">
                    <div className="shrink-0 w-40">
                      <p className="font-serif font-bold text-primary text-sm leading-tight">{s.window}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE REPORT */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">About This Data</p>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 leading-tight">40 Years of On-Stream Data</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-left">
            <p>The Bryson City Area Hatch Report was compiled over 40 years of on-stream data collection from the rivers and streams of Western North Carolina and the Great Smoky Mountains National Park. Stomach samples were collected from over 14,000 wild regional trout using a stomach pump — the results imported into a database maintained and analyzed to produce the emergence averages represented in the table above.</p>
            <p>Caddisflies are the most abundant insect family in this region — over 330 species have been identified in the surrounding watershed alone. Every angler fishing these waters should carry larval, pupal, and adult caddis patterns throughout the year in a range of sizes and colors. The caddis is never truly out of season here.</p>
          </div>
        </div>
      </section>

      {/* AI FORECAST */}
      <ForecastSection />

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Common Questions</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight">Frequently Asked Questions</h2>
          <div className="divide-y divide-border">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-serif text-lg font-semibold text-foreground leading-snug">
                  {faq.q}
                  <span className="shrink-0 text-primary text-xl font-light group-open:hidden">+</span>
                  <span className="shrink-0 text-primary text-xl font-light hidden group-open:inline">−</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed text-[0.95rem]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Let Us Put You on the Right Water at the Right Time
          </h2>
          <p className="text-primary-foreground/70 mb-4 leading-relaxed max-w-xl mx-auto">
            Forty years of hatch data is a powerful tool. But nothing replaces being on the water with someone who has watched these rivers through every season, every weather pattern, and every hatch cycle that Western North Carolina has produced since 1987.
          </p>
          <blockquote className="font-serif italic text-primary-foreground/80 mb-10 text-lg">
            &ldquo;The river is always telling you what it wants. The question is whether you know how to listen. We will teach you the language.&rdquo;
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/instructional-guided-trips" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              Book a Guided Trip <ArrowRight size={13} />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:border-primary-foreground/80 transition-colors">
              Ask Mac a Question <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/programs-overview" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/90 transition-colors w-full sm:w-fit">
              Programs Overview <ArrowRight size={14} />
            </Link>
            <Link href="/events-calendar" className="inline-flex items-center justify-center gap-2 border border-primary text-primary text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/5 transition-colors w-full sm:w-fit">
              See Upcoming Dates
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
