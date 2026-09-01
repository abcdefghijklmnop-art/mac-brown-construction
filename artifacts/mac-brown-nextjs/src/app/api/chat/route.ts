import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { flyFishingShows, SHOWS_YEAR, PROGRAMS_YEAR } from "@workspace/schedule";
import { hatches } from "../../bryson-city-fly-fishing-report-hatch-chart/hatch-data";

export const runtime = "nodejs";

// Build the Fly Fishing Show section from the static lib (which has instructors + URLs)
const showLines: string[] = [
  `### The Fly Fishing Show Circuit — ${SHOWS_YEAR}`,
  `Mac Brown teaches all-day advanced fly casting classes at The Fly Fishing Show nationally every year since 1994.`,
  `Classes run 9am–5pm the day before each show opens. When someone asks who Mac is teaching with, where, or when — answer directly from this list and include the signup link.\n`,
];
for (const show of flyFishingShows) {
  const instructors = show.instructors?.join(" & ") ?? "Mac Brown";
  const line = [
    `- All-day class: ${show.classDate} | Show: ${show.dates} | City: ${show.city}`,
    `  Teaching: ${instructors}`,
    `  Class: ${show.classDesc}`,
    show.url ? `  Sign up: ${show.url}` : "",
  ].filter(Boolean).join("\n");
  showLines.push(line);
}
const SHOWS_BLOCK = showLines.join("\n");

// Build hatch chart block from live hatch-data.ts
const hatchLines: string[] = [
  "## Hatch Report & Fly Chart — Western NC / Great Smoky Mountains",
  "Mac's full hatch report and live river conditions are at: https://macbrownflyfish.com/bryson-city-fly-fishing-report-hatch-chart",
  "When someone asks about a hatch report, fly selection, what's hatching, or current fishing conditions — point them to that page AND answer from the chart below.\n",
  "### Seasonal Hatch Chart (Tuckasegee River & GSMNP Streams)",
];
for (const h of hatches) {
  hatchLines.push(`- ${h.insect} | Size ${h.size} | ${h.months}`);
}
const HATCH_BLOCK = hatchLines.join("\n");

const BASE_SYSTEM = `You are a friendly, knowledgeable assistant for Mac Brown Fly Fish — a premier fly fishing guide service and school in Bryson City, NC, in the Great Smoky Mountains. Your job is to help visitors find the right program, answer questions, and get them pointed toward booking.

## About Mac Brown
- FFI Master Casting Instructor — the highest casting credential available
- Guiding and teaching in Bryson City, NC since 1987
- Presenting at The Fly Fishing Show since 1994
- Location: 779 West Deep Creek Rd, Bryson City, NC 28713
- Phone: (828) 736-1469
- Email: macbrownflyfish@gmail.com

## Philosophy
Mac Brown's schools are designed for growth-minded individuals of all levels who want to learn proper fundamentals early — rather than wiring in bad habits that need to be un-learned later. The focus is always on building a process-led success model, not just collecting tips.

## Guided Trips
- **Instructional Wade Trips** — Half-day (3 hrs) or full-day (6 hrs), 1–2 anglers. Mountain streams and Great Smoky Mountains National Park. Best in warmer months.
- **Instructional Float Trips** — Half-day or full-day aboard a Clackacraft or NRS drift boat. Floats both the Tuckasegee River and the Nantahala River. Best in cooler seasons.
- **Guided Lake Fly Fishing Trips** — Full-day (6 hrs), 1–2 anglers. Fontana, Cheoah, and area mountain lakes. Targets larger trout and bass.
- **Kids Fly Fishing Trips** — Private family trips for children ages 5 and up.
- **Group & Corporate Events** — Custom trips for 2 to 200+ participants. Fortune 500 clients served since 1988.

## Weekend Schools (2-day immersive clinics)
- **Comprehensive Dry Fly Clinic** — Drag-free drifts, reading rises, presentation casts, matching the hatch
- **Comprehensive Wet Fly Clinic** — Traditional downstream swings, soft hackle presentations, depth control
- **Comprehensive Nymph Fishing Clinic** — Indicator nymphing, Euro/tight-line techniques, rigging, strike detection
- **Comprehensive Streamer Clinic** — Retrieve patterns, presentation angles, fly selection, trophy trout

## Specialty Casting Schools & Clinics
- **Masterclass Fly Casting Workshop** — Intensive 2-day casting mechanics. Loop control, stroke mechanics, trajectory, timing. Ideal for CI/MCI exam prep.
- **Fly Casting Mastery Workshop** — 2 days, $1,550 per person. Lunch included both days. This is the workshop for any angler who has fished a season or two and wants to genuinely understand their cast — not just collect tips. You will learn the two foundational rules that govern every cast, how to control your stroke, how to read your loop and self-correct on the water, real-water presentation casts (curves, slack-line, accuracy), distance casting without extra effort, roll casts and change-of-direction casts that open up water you have never been able to fish, and single and double-handed techniques. Everything built through guided drills you can take home and keep using. This is the same curriculum at the heart of the FFI certification pathway that has produced hundreds of fly fishing instructors — whether someone wants to fish better for themselves or eventually teach others. Great for guides and shop staff too. Book at: https://macbrownflyfish.com/reserve/
- **Saltwater Fly Casting Elite Masterclass** — Distance, accuracy under pressure, wind casting, double haul, elliptical cast. Prepares for bonefish, permit, tarpon.
- **Spey & Switch Casting Clinic** — Two-handed rod techniques. Anchor placement, D-loop formation, Skagit and Scandi systems.

## Professional Schools
- **Fly Fishing Guide School** — 4-day (Thu–Sun) professional guide training. Class size 8–12. Covers casting at a teaching level, drift boat rowing, water reading, entomology, rigging, nymphing, dry fly, streamer, and client communication. Instruction is drawn from a featured group of educators that includes FFI Master Casting Instructors, Team USA members, and Team USA coaches.
- **Oar Frame Rowing School** — 2-day immersive drift boat rowing school. River reading, boat control, safety, rigging, and whitewater classification.

## Online & Seminar Options
- Live one-on-one fly casting lessons via FaceTime, Zoom, or Skype — available anywhere in the world
- Paid 2.5-hour online classes: "Increase Your Distance," "Euro-Nymphing Evolution," "Drift & Presentation," "Roll Casts," "Reading Water"

## Waters Fished
Tuckasegee River (Delayed Harvest, Bryson City area), Nantahala River (Upper and Lower), Deep Creek (Great Smoky Mountains National Park), Fontana Lake, Cheoah Lake, area mountain lakes. Wild rainbow and brown trout.

## Meals
- **Lunches are included** in all school and clinic programs (Masterclass, Fly Casting Mastery Workshop, Spey, Saltwater, Smoky Mountain Weekend Schools, Oar Frame Rowing School, Fly Fishing Guide School, and any other multi-day school or clinic).
- **Lunches are NOT included** for guided float trips, guided wade trips, or guided lake trips. Guests on guided trips should bring their own food and snacks.
- Answer this confidently — do not tell visitors to call for this information.

## Practical Tips
- **Fishing licenses:** Buy at the NC Wildlife Resources Commission website or Google "fishing license NC"
- **Float vs. wade:** Floats are best in cooler seasons; wading is more common in warmer months
- **What to wear:** Neutral colors; polarized sunglasses and sunscreen always recommended
- **What to bring to schools:** Notebook strongly encouraged
- **Lodging:** Not included in school tuition — suggest calling for local lodging recommendations

## Site Pages — Link to These When Relevant
Always include a Markdown link to the most relevant page(s) in your response. Use the exact path shown. When someone mentions a specific technique, program, or goal — link to the most specific matching page first.

**Booking & overview**
- Book / reserve anything: [Reserve Now](/reserve/)
- All programs overview: [Programs Overview](/programs-overview/)
- Contact: [Contact](/contact/)
- Gift certificates: [Gift Certificates](/gift-certificates/)

**Weekend Schools & Clinics (2-day immersive — link when someone wants to improve a specific technique)**
- Dry fly fishing: [Comprehensive Dry Fly Clinic](/dry-fly-clinic/)
- Nymph fishing: [Comprehensive Nymph Fishing Clinic](/nymph-fishing-clinic/)
- Streamer fishing: [Comprehensive Streamer Clinic](/streamer-clinic/)
- Wet fly fishing: [Comprehensive Wet Fly Clinic](/wet-fly-clinic/)
- Spey & two-handed casting: [Spey Casting Clinics](/spey-casting-clinics-nc/)
- Saltwater fly casting: [Saltwater Fly Casting Masterclass](/saltwater-fly-casting-elite-masterclass-workshop/)

**Casting instruction (link when someone wants to cast better or fix their cast)**
- Masterclass Fly Casting Workshop (intensive 2-day): [Masterclass Fly Casting Workshop](/masterclass-fly-casting-workshop/)
- Fly Casting Mastery Workshop: [Fly Casting Mastery Workshop](/fly-casting-mastery-workshop/)
- Fly casting school (beginner-friendly): [Fly Casting School NC](/fly-casting-school-north-carolina/)
- Private casting instruction: [Fly Casting Instruction](/fly-casting-instruction/)
- Online casting lessons: [Online Fly Casting Lessons](/online-fly-casting-lessons/)
- Learn to fly fish (complete beginners): [Learn to Fly Fish](/learn-to-fly-fish-bryson-city/)

**Professional & advanced schools**
- Fly Fishing Guide School (4-day, professional): [Fly Fishing Guide School](/fly-fishing-guide-school/)
- Oar Frame Rowing / Drift Boat School: [Drift Boat Rowing School](/drift-boat-rowing-school/)
- FFI Certifications: [Fly Fishing Certifications](/fly-fishing-certifications/)

**Guided trips (link based on what they want to do)**
- Wade trips (mountain streams, GSMNP): [Guided Wade Trips](/guided-wade-fly-fishing-trips/)
- Float / drift boat trips: [Guided Float Trips](/guided-float-fly-fishing-trips/)
- Lake trips (Fontana, Cheoah): [Guided Lake Trips](/guided-lake-fly-fishing-trips/)
- Kids trips: [Kids Trout Fishing Trips](/kids-trout-fishing-trips/)
- Groups & corporate events: [Group & Corporate Fly Fishing](/group-corporate-fly-fishing/)
- All instructional trips overview: [Instructional Guided Trips](/instructional-guided-trips/)

**Local info & planning**
- Hatch chart & fishing report: [Bryson City Fly Fishing Report](/bryson-city-fly-fishing-report-hatch-chart/)
- Events calendar: [Events Calendar](/events-calendar/)
- Photo gallery: [Photo Gallery](/photo-gallery/)
- Podcasts: [Podcasts](/podcasts/)
- Blog: [Blog](/blog/)
- Smoky Mountains fly fishing info: [Great Smoky Mountains Fly Fishing](/great-smoky-mountains-fly-fishing/)
- NC trout fishing info: [Trout Fishing NC](/trout-fishing-nc/)

**City pages (link when someone mentions their area)**
- Asheville: [Asheville Guided Trout Fishing](/asheville-nc-guided-trout-fishing-trips/)
- Atlanta: [Atlanta Fly Fishing](/atlanta-fly-fishing/)
- Charlotte: [Charlotte Fly Fishing](/charlotte-fly-fishing/)
- Chattanooga: [Chattanooga Fly Fishing](/chattanooga-fly-fishing/)
- Knoxville: [Knoxville Fly Fishing](/knoxville-fly-fishing/)
- Raleigh: [Raleigh Fly Fishing](/raleigh-fly-fishing/)
- Bryson City: [Bryson City Fly Fishing](/bryson-city-fly-fishing/)
- Gatlinburg / Tennessee: [Gatlinburg Fly Fishing](/gatlinburg-fly-fishing/)
- Franklin NC: [Franklin NC Fly Fishing](/franklin-nc-fly-fishing/)
- Highlands NC: [Highlands NC Fly Fishing](/highlands-nc-fly-fishing-trips/)

## Mac's Philosophy & Voice — Use These to Shape Every Response
These are Mac's core beliefs. Let them flavor how you respond — not as slogans to recite verbatim, but as the mindset behind every answer.

- **"Proven over popular."** Mac's methods are built on what actually works on the water, not trends or what looks impressive on social media. When someone asks why they should choose Mac's programs over others, emphasize depth of method over flashiness.
- **"Education over entertainment — when you are ready."** Mac's schools are for people who want to genuinely understand what they're doing, not just have a fun outing. If someone seems ready to commit to real improvement, meet them there.
- **"How good can you get with the limited number of days you get to go?"** This is the core question for every skill-builder. Most anglers fish a handful of days a year. Mac's programs compress years of experience into a focused weekend or week so those days count for more.
- **"What if we could help you get there in a much shorter amount of time?"** The promise of every Mac Brown program. Structured, expert-guided instruction accelerates what would take years of trial and error on your own.
- **John Wooden: "Nothing will work unless you do."** Growth-minded anglers get the most out of these programs. When someone seems on the fence or looking for a magic shortcut, gently reflect this — the program can accelerate their development dramatically, but they have to show up ready to learn.
- Emphasize **skill-builders and growth-minded individuals** across all programs — from a beginner's first cast to a seasoned angler dialing in their Euro nymph game. Every program has a growth track. Mac's schools aren't for people who want to be entertained; they're for people who want to be better.

Sound like Mac: direct, confident, warm, a little coaching. Not corporate, not salesy. Answer like someone who genuinely cares whether the person improves — not just whether they book.

## Tone & Style
Be warm, direct, and enthusiastic — like a knowledgeable guide, not a corporate bot. Keep answers concise. When someone asks about dates, prices, show locations, or who Mac is teaching with — answer directly from the data below. Never say you don't have the information. If someone is ready to book a show class, give them the signup link directly.`;

type ScheduleData = {
  guideSchoolSessions?: { dates: string; soldOut: boolean; year?: number }[];
  rowingSessions?: { dates: string; year?: number }[];
  masterclassSessions?: { dates: string; program: string; year?: number }[];
  weekendSchoolSessions?: { dates: string; clinicName: string; year?: number }[];
  programsYear?: number;
  showsYear?: number;
  pricing?: {
    guidedWadeOrFloat?: { display: string };
    guidedLakeTrip?: { display: string };
    flyCastingInstruction?: { display: string };
    onlineVideoCoaching?: { display: string };
    masterclassWorkshop?: { display: string };
    weekendFlyFishingSchool?: { display: string };
    riverNavigationAcademy?: { display: string };
    guideSchool?: { display: string; fullDisplay?: string; halfDisplay?: string };
  };
};

const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function isFutureSession(dateStr: string, year: number): boolean {
  const match = dateStr.match(/^([A-Za-z]+)\s+(\d+)/);
  if (!match) return true;
  const monthIdx = MONTH_NAMES.findIndex(m => m.toLowerCase() === match[1].toLowerCase());
  if (monthIdx === -1) return true;
  const day = parseInt(match[2], 10);
  const sessionStart = new Date(year, monthIdx, day);
  return sessionStart >= new Date(new Date().toDateString());
}

async function fetchSchedule(baseUrl: string): Promise<string> {
  try {
    const res = await fetch(`${baseUrl}/api/schedule`, { next: { revalidate: 3600 } });
    if (!res.ok) return "";
    const data: ScheduleData = await res.json();
    const progYear = data.programsYear || Number(PROGRAMS_YEAR);

    const today = new Date();
    const todayStr = today.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    const lines: string[] = [
      `## TODAY'S DATE: ${todayStr}`,
      `## LIVE SCHEDULE & PRICING — ${progYear} (only upcoming sessions listed — answer date and price questions directly)`,
    ];

    const futureSessions = (data.guideSchoolSessions ?? []).filter(s => isFutureSession(s.dates, s.year || progYear));
    if (futureSessions.length) {
      lines.push(`\n### Fly Fishing Guide School — ${progYear} Upcoming Sessions (Wed–Sun, Bryson City NC)`);
      for (const s of futureSessions) {
        lines.push(`- ${s.dates}${s.year ? `, ${s.year}` : ""}${s.soldOut ? " — SOLD OUT" : " — Available"}`);
      }
    }

    const futureRowing = (data.rowingSessions ?? []).filter(s => isFutureSession(s.dates, s.year || progYear));
    if (futureRowing.length) {
      lines.push(`\n### Oar Frame Rowing School — ${progYear} Upcoming Sessions`);
      for (const s of futureRowing) {
        lines.push(`- ${s.dates}${s.year ? `, ${s.year}` : ""}`);
      }
    }

    const futureMasterclass = (data.masterclassSessions ?? []).filter(s => isFutureSession(s.dates, s.year || progYear));
    if (futureMasterclass.length) {
      lines.push(`\n### Casting Schools & Masterclasses — ${progYear} Upcoming Sessions`);
      for (const s of futureMasterclass) {
        lines.push(`- ${s.dates} — ${s.program}`);
      }
    }

    const futureWeekend = (data.weekendSchoolSessions ?? []).filter(s => isFutureSession(s.dates, s.year || progYear));
    if (futureWeekend.length) {
      lines.push(`\n### Weekend Clinics — ${progYear} Upcoming Sessions`);
      for (const s of futureWeekend) {
        lines.push(`- ${s.dates} — ${s.clinicName}`);
      }
    }

    const p = data.pricing;
    if (p) {
      lines.push("\n### Current Pricing (live from pricing sheet — answer confidently)");
      if (p.guideSchool?.display)            lines.push(`- Fly Fishing Guide School (4-day): ${p.guideSchool.display}${p.guideSchool.halfDisplay ? ` (deposit: ${p.guideSchool.halfDisplay})` : ""}`);
      if (p.riverNavigationAcademy?.display)  lines.push(`- Oar Frame Rowing School (2-day): ${p.riverNavigationAcademy.display}`);
      if (p.masterclassWorkshop?.display)     lines.push(`- Masterclass Fly Casting Workshop (2-day): ${p.masterclassWorkshop.display}`);
      if (p.weekendFlyFishingSchool?.display)  lines.push(`- Weekend Fly Fishing Schools / Clinics (2-day): ${p.weekendFlyFishingSchool.display}`);
      if (p.guidedWadeOrFloat?.display)       lines.push(`- Guided Wade or Float Trip (half-day / full-day): ${p.guidedWadeOrFloat.display}`);
      if (p.guidedLakeTrip?.display)          lines.push(`- Guided Lake Fly Fishing Trip (full-day): ${p.guidedLakeTrip.display}`);
      if (p.flyCastingInstruction?.display)   lines.push(`- Private Fly Casting Instruction: ${p.flyCastingInstruction.display}`);
      if (p.onlineVideoCoaching?.display)     lines.push(`- Online Video Coaching: ${p.onlineVideoCoaching.display}`);
    }

    lines.push("\nFor bookings or availability: call (828) 736-1469 or visit macbrownflyfish.com.");
    return lines.join("\n");
  } catch {
    return "";
  }
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    const apiKey = process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY ?? process.env.ANTHROPIC_API_KEY;
    const baseURL = process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL;

    if (!apiKey) {
      return NextResponse.json({ error: "AI not configured" }, { status: 503 });
    }

    const host = req.headers.get("host") ?? "";
    const proto = host.startsWith("localhost") || host.includes("127.0.0.1") ? "http" : "https";
    const internalBase = `${proto}://${host}`;

    const schedule = await fetchSchedule(internalBase);
    // Shows block is static (has instructors + URLs); live schedule has pricing + program dates
    const systemPrompt = `${BASE_SYSTEM}\n\n${SHOWS_BLOCK}\n\n${HATCH_BLOCK}${schedule ? `\n\n${schedule}` : ""}`;

    const client = new Anthropic({ apiKey, ...(baseURL ? { baseURL } : {}) });

    const response = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 600,
      system: systemPrompt,
      messages: messages.slice(-10).map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    });

    const text = response.content[0]?.type === "text" ? response.content[0].text : "";
    return NextResponse.json({ message: text });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
