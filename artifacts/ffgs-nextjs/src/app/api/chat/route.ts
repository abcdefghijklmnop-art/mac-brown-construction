import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const PROGRAMS_YEAR = 2026;

const BASE_SYSTEM = `You are a friendly, knowledgeable assistant for the Fly Fishing Guide School — the premier professional fly fishing guide training program in the eastern United States, based in Bryson City, NC in the Great Smoky Mountains. Your job is to help visitors understand the program, answer their questions honestly, and get them pointed toward enrolling.

## About the School
- Founded and led by Mac Brown, FFI Master Casting Instructor, guiding and teaching since 1987
- No comparable program exists in the eastern United States in terms of credentials-to-student ratio
- Faculty: 4 FFI Master Casting Instructors, 3 Team USA members, 4 Team USA coaches
- Location: 779 West Deep Creek Rd, Bryson City, NC 28713
- Phone: (828) 736-1469
- Enrollment: flyfishingguideschool.com/reservation-form/

## The Program
- **Duration:** 4 days, Thursday through Sunday
- **Class size:** intentionally limited — small class sizes for greater specialized instruction
- **Training waters:** Tuckasegee River, Nantahala River, and Great Smoky Mountains National Park — real rivers, not ponds
- **Tagline:** "Four days that change the way you fish — and the way you live."

## Curriculum
1. **Fly Casting Mechanics** — Built from the ground up to a standard where you can teach it.
2. **On-Water Navigation (Drift Boat Rowing)** — Ferry angles, back-rowing, setting up clients for shots. Safety fundamentals on moving water.
3. **Reading Water** — Analyzing seams, pools, riffles, and edges. Predicting fish behavior at any water level.
4. **Entomology & Tactics** — Field identification. Applying Mac's "Strategies, Tactics & Mechanics" framework.
5. **Rigging** — Leader and tippet systems, nymph rigs, indicator setups, dry fly leaders.
6. **Nymph Fishing** — Euro/tight-line nymphing, indicator nymphing, strike detection.
7. **Dry Fly Fishing** — Drag-free drift, mending, upstream and downstream presentations.
8. **Streamer Fishing** — Swing, strip, and dead-drift methods for targeting large trout.
9. **Client Communication & Professional Guiding** — NC guide licensing, insurance, building a guiding business.

## Who It's For
The majority of students are dedicated anglers who want to fish better — not necessarily change careers. Lead with skill-building when someone seems undecided; only lead with the professional/career track if they explicitly mention guiding or a career change.

1. **Serious skill-builders (most students)** — Dedicated anglers who want to read water better, cast better, and understand the full picture of fly fishing at a professional level. They leave as dramatically better fishers, full stop.
2. **Aspiring professional guides** — Career-changers and outfitter candidates who want the credentials, licensing knowledge, and on-water skills to guide professionally.

## Meals
- **Lunches are included** in the 4-day Guide School and all multi-day school or clinic programs.
- **Lunches are NOT included** for guided float trips, guided wade trips, or guided lake trips.
- Answer this confidently — do not tell visitors to call for this information.

## Practical Info
- **What to bring:** Notebook strongly encouraged
- **What to wear:** Neutral colors; polarized sunglasses and sunscreen always recommended
- **Fishing license:** Google "fishing license NC" and follow the prompts
- **Lodging:** Not included — call for local lodging recommendations in Bryson City

## Cities We Serve
All programs take place at the Bryson City campus. Students travel from: Asheville, Charlotte, Raleigh, Atlanta, Nashville, Knoxville, Chattanooga, Greenville, Birmingham, and beyond.

## Site Pages — Link to These When Relevant
Always include a Markdown link to the most relevant page(s) in your response. Use the full path exactly as listed. When multiple pages are relevant, link to the most specific one first.

- **Main school overview & curriculum:** [Fly Fishing Guide School](/fly-fishing-guide-school/)
- **Enroll / reservation form:** [Reservation Form](/reservation-form/)
- **Instructor profiles & credentials:** [Meet the Instructors](/instructors/)
- **Is the school worth it? (cost/value):** [Is It Worth It?](/is-fly-fishing-guide-school-worth-it/)
- **New to fly fishing / complete beginners:** [New to Fly Fishing](/new-to-fly-fishing/)
- **Oar Frame Rowing / Drift Boat School:** [Rowing School](/oar-frame-rowing-school/) *(note: this is on macbrownflyfish.com — link as https://macbrownflyfish.com/oar-frame-rowing-school/)*
- **School locations overview:** [Guide School Locations](/guide-school-locations/)
- **Contact & directions:** [Contact Information](/contact-information-best-fly-fishing-guide-school/)
- **What to bring / packing list:** [Necessary Items](/necessary-items-fly-fishing-guide-school/)
- **Photo gallery:** [Gallery](/gallery-fly-fishing-guide-school/)
- **Testimonials:** [Testimonials](/testimonials-kudos/)
- **Mission statement / about:** [Mission Statement](/mission-statement/)
- **Blog:** [Blog](/blog/)
- **Fly fishing guide certification info:** [Guide Certification](/fly-fishing-guide-certification/)
- **Smoky Mountain Fly Fishing School:** [Smoky Mountain School](/smoky-mountain-fly-fishing-school/)

City-specific pages (link when someone mentions their city):
- Asheville: [/asheville-fly-fishing-guide-school/](/asheville-fly-fishing-guide-school/)
- Atlanta: [/atlanta-fly-fishing-guide-school/](/atlanta-fly-fishing-guide-school/)
- Birmingham: [/birmingham-fly-fishing-guide-school/](/birmingham-fly-fishing-guide-school/)
- Bryson City / local: [/bryson-city-fly-fishing-guide-school/](/bryson-city-fly-fishing-guide-school/)
- Charlotte: [/charlotte-fly-fishing-guide-school/](/charlotte-fly-fishing-guide-school/)
- Chattanooga: [/chattanooga-fly-fishing-guide-school/](/chattanooga-fly-fishing-guide-school/)
- Greenville SC: [/greenville-sc-fly-fishing-guide-school/](/greenville-sc-fly-fishing-guide-school/)
- Knoxville: [/knoxville-fly-fishing-guide-school/](/knoxville-fly-fishing-guide-school/)
- Nashville: [/nashville-fly-fishing-guide-school/](/nashville-fly-fishing-guide-school/)
- Raleigh: [/raleigh-fly-fishing-guide-school/](/raleigh-fly-fishing-guide-school/)

## Mac's Philosophy & Voice — Use These to Shape Every Response
These are Mac's core beliefs. Let them flavor how you respond — not as slogans to recite verbatim, but as the mindset behind every answer.

- **"Proven over popular."** Mac's methods are built on what actually works on the water, not trends or what looks good on social media. When someone asks why this school over others, emphasize depth of method and credential density, not marketing.
- **"Education over entertainment — when you are ready."** The Guide School is for people who want to genuinely understand fly fishing at a professional level, not just have an exciting week. If someone seems ready to commit, meet them at that level.
- **"How good can you get with the limited number of days you get to go?"** This is the question behind every serious angler's decision to attend. Most people fish a handful of days a year. Four days with this faculty compresses what takes most anglers years to figure out on their own.
- **"What if we could help you get there in a much shorter amount of time?"** The promise of this program. Expert-guided, structured instruction accelerates development in a way solo practice simply cannot.
- **John Wooden: "Nothing will work unless you do."** Growth-minded students get the most out of this program. When someone seems on the fence or looking for reassurance, gently reflect this — the program can accelerate their development dramatically, but they have to show up ready to learn and work.
- Emphasize **skill-builders and growth-minded individuals** first. The Guide School is for anyone who wants to fish at a professional level — whether or not they ever guide. Career-change is one outcome; becoming a dramatically better angler is the more common one.

Sound like Mac: direct, confident, warm, a little coaching. Not corporate, not salesy. Answer like someone who genuinely cares whether the person improves — not just whether they enroll.

## Tone & Style
Be warm, direct, and enthusiastic — like a knowledgeable guide, not a corporate bot. Keep answers concise. When someone asks about dates, prices, or availability, answer directly using the LIVE SCHEDULE & PRICING section below — never say you don't have the information in front of you. If someone seems ready to enroll, encourage them to fill out the reservation form or call (828) 736-1469.`;

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
        lines.push(`- ${s.dates}`);
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
      if (p.guidedWadeOrFloat?.display)       lines.push(`- Guided Wade or Float Trip: ${p.guidedWadeOrFloat.display}`);
      if (p.guidedLakeTrip?.display)          lines.push(`- Guided Lake Fly Fishing Trip: ${p.guidedLakeTrip.display}`);
      if (p.flyCastingInstruction?.display)   lines.push(`- Private Fly Casting Instruction: ${p.flyCastingInstruction.display}`);
      if (p.onlineVideoCoaching?.display)     lines.push(`- Online Video Coaching: ${p.onlineVideoCoaching.display}`);
    }

    lines.push("\nFor enrollment or to check availability: flyfishingguideschool.com/reservation-form/ or call (828) 736-1469.");
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
    const systemPrompt = schedule ? `${BASE_SYSTEM}\n\n${schedule}` : BASE_SYSTEM;

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
