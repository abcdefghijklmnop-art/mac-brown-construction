// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for all schedule dates and program pricing.
// Change a date here → events calendar, reservation form, and any other
// consumer updates automatically.
//
// Year fallbacks only — live values come from the "Config" tab in the Google Sheet.
// ─────────────────────────────────────────────────────────────────────────────

// Fallback years used when the Google Sheet Config tab is unreachable.
// The live values come from the "Config" tab in the schedule sheet —
// update "shows_year" and "programs_year" there to control what the site displays.
export const SHOWS_YEAR    = new Date().getFullYear();
export const PROGRAMS_YEAR = new Date().getFullYear();

// ── Types ────────────────────────────────────────────────────────────────────

export interface ShowEntry {
  dates: string;
  city: string;
  classDate: string;
  /** ISO 8601 date for the all-day class (used for schema markup) */
  isoClassDate: string;
  classDesc: string;
  url?: string;
  /** Instructor names for EducationalEvent schema — listed as performers */
  instructors?: string[];
}

export interface GuideSchoolSession {
  /** Display date range, e.g. "March 25–29" */
  dates: string;
  /** Month name used in the reservation form dropdown, e.g. "March" */
  month: string;
  /** True if this session is sold out and closed to new registrations */
  soldOut?: boolean;
}

export interface MasterclassSession {
  dates: string;
  program: string;
  href: string;
}

export interface RowingSession {
  dates: string;
}

export interface WeekendSchoolSession {
  dates: string;
  technique: string;
  clinicName: string;
  href: string;
}

export interface CalendarRow {
  dates: string;
  program: string;
  href: string;
}

// ── Fly Fishing Show Circuit ─────────────────────────────────────────────────

export const flyFishingShows: ShowEntry[] = [
  {
    dates: "January 9–10",
    city: "Athens, GA",
    classDate: "Friday Jan 8",
    isoClassDate: "2027-01-08",
    classDesc: "Advanced All-Day Fly Casting Class with Mac Brown",
    url: "https://flyfishingshow.com/georgia/",
    instructors: ["Mac Brown"],
  },
  {
    dates: "January 15–17",
    city: "Marlborough, MA",
    classDate: "Thursday Jan 14",
    isoClassDate: "2027-01-14",
    classDesc: "Advanced All-Day Fly Casting Class with Mac Brown",
    url: "https://flyfishingshow.com/massachusetts/",
    instructors: ["Mac Brown"],
  },
  {
    dates: "January 22–24",
    city: "Edison, NJ",
    classDate: "Thursday Jan 21",
    isoClassDate: "2027-01-21",
    classDesc: "Advanced All-Day Fly Casting Class with Gary Borger & Mac Brown",
    url: "https://flyfishingshow.com/new-jersey/",
    instructors: ["Mac Brown", "Gary Borger"],
  },
  {
    dates: "February 5–7",
    city: "Denver, CO",
    classDate: "Thursday Feb 4",
    isoClassDate: "2027-02-04",
    classDesc: "Advanced All-Day Fly Casting Class with Gary Borger & Mac Brown",
    url: "https://flyfishingshow.com/colorado/",
    instructors: ["Mac Brown", "Gary Borger"],
  },
  {
    dates: "February 26–28",
    city: "Pleasanton, CA",
    classDate: "Thursday Feb 25",
    isoClassDate: "2027-02-25",
    classDesc: "Advanced All-Day Fly Casting Class with Gary Borger & Mac Brown",
    url: "https://flyfishingshow.com/california/",
    instructors: ["Mac Brown", "Gary Borger"],
  },
  {
    dates: "March 13–14",
    city: "Lancaster, PA",
    classDate: "Friday Mar 12",
    isoClassDate: "2027-03-12",
    classDesc: "Advanced All-Day Fly Casting Class with Mac Brown",
    url: "https://flyfishingshow.com/pennsylvania/",
    instructors: ["Mac Brown"],
  },
];

// ── Bryson City Sessions ─────────────────────────────────────────────────────

export const guideSchoolSessions: GuideSchoolSession[] = [
  { dates: "March 25–29",    month: "March"    },
  { dates: "April 22–26",    month: "April"    },
  { dates: "May",            month: "May",     soldOut: true },
  { dates: "June",           month: "June",    soldOut: true },
  { dates: "October 15–18",  month: "October"  },
  { dates: "November 12–15", month: "November" },
];

export const masterclassSessions: MasterclassSession[] = [
  { dates: "April 11–12",     program: "Fly Casting Mastery Workshop",            href: "/fly-casting-mastery-workshop" },
  { dates: "July 11–12",      program: "Spey Elite Casting Clinic",               href: "/spey-elite-casting-clinic" },
  { dates: "July 18–19",      program: "Saltwater Fly Casting Masterclass",        href: "/saltwater-fly-casting-elite-masterclass-workshop" },
  { dates: "September 26–27", program: "Fly Casting Mastery Workshop",            href: "/fly-casting-mastery-workshop" },
];

export const rowingSessions: RowingSession[] = [
  { dates: "April 25–26"     },
  { dates: "September 19–20" },
];

export const weekendSchoolSessions: WeekendSchoolSession[] = [
  { dates: "May 23–24",  technique: "Nymph Fishing", clinicName: "Advanced Nymph Fishing Clinic",    href: "/nymph-fishing-clinic" },
  { dates: "May 30–31",  technique: "Streamer",      clinicName: "Advanced Streamer Fishing Clinic", href: "/streamer-clinic"      },
  { dates: "June 6–7",   technique: "Wet Fly",       clinicName: "Master's Wet Fly Fishing Clinic",  href: "/wet-fly-clinic"       },
  { dates: "June 13–14", technique: "Dry Fly",       clinicName: "Master's Dry Fly Fishing Clinic",  href: "/dry-fly-clinic"       },
];

// ── Derived Helpers ──────────────────────────────────────────────────────────

/** Month names for the Guide School reservation form dropdown */
export const guideSchoolMonths: string[] = guideSchoolSessions.map(s => s.month);

/** Compact date-range summary strings (used in program description cards) */
export const guideSchoolDatesSummary   = guideSchoolSessions.map(s => s.dates).join(" · ");
export const masterclassDatesSummary   = masterclassSessions.map(s => s.dates).join(" · ");
export const rowingDatesSummary        = rowingSessions.map(s => s.dates).join(" · ");
export const weekendSchoolDatesSummary = weekendSchoolSessions.map(s => s.dates).join(" · ");

// ── Bryson City Calendar Table ───────────────────────────────────────────────
// Ordered chronologically — this drives the events table on macbrownflyfish.com.

export const brysonCalendar: CalendarRow[] = [
  { dates: guideSchoolSessions[0].dates,   program: "4-Day Fly Fishing Guide School",    href: "/programs-overview" },
  { dates: masterclassSessions[0].dates,   program: masterclassSessions[0].program,          href: masterclassSessions[0].href },
  { dates: guideSchoolSessions[1].dates,   program: "4-Day Fly Fishing Guide School",    href: "/programs-overview" },
  { dates: rowingSessions[0].dates,        program: "Oar Frame Rowing School",               href: "/drift-boat-rowing-school" },
  { dates: weekendSchoolSessions[0].dates, program: weekendSchoolSessions[0].clinicName,     href: weekendSchoolSessions[0].href },
  { dates: weekendSchoolSessions[1].dates, program: weekendSchoolSessions[1].clinicName,     href: weekendSchoolSessions[1].href },
  { dates: weekendSchoolSessions[2].dates, program: weekendSchoolSessions[2].clinicName,     href: weekendSchoolSessions[2].href },
  { dates: weekendSchoolSessions[3].dates, program: weekendSchoolSessions[3].clinicName,     href: weekendSchoolSessions[3].href },
  { dates: masterclassSessions[1].dates,   program: masterclassSessions[1].program,          href: masterclassSessions[1].href },
  { dates: masterclassSessions[2].dates,   program: masterclassSessions[2].program,          href: masterclassSessions[2].href },
  { dates: rowingSessions[1].dates,        program: "Oar Frame Rowing School",               href: "/drift-boat-rowing-school" },
  { dates: masterclassSessions[3].dates,   program: masterclassSessions[3].program,          href: masterclassSessions[3].href },
  { dates: guideSchoolSessions[2].dates,   program: "4-Day Fly Fishing Guide School",    href: "/programs-overview" },
  { dates: guideSchoolSessions[3].dates,   program: "4-Day Fly Fishing Guide School",    href: "/programs-overview" },
];

// ── Programs & Pricing ───────────────────────────────────────────────────────
// All bookable programs with pricing type and unit price.
// Consumed by reserve.tsx (Step 1), waiver.tsx (activity dropdown), and payment.tsx.

export type PricingType = "flat" | "pair" | "perPerson";

export interface Program {
  id: string;
  name: string;
  shortName: string;
  category: "Guided Trips" | "Casting Instruction" | "Masterclass Clinics" | "Smoky Mountain Weekend Schools" | "Oar Frame Rowing School" | "Schools";
  pricingType: PricingType;
  unitPrice: number;
  duration: string;
  isSmokyMtnSchool?: true;
  /** SwipeSimple checkout URL for card payment — undefined means contact to pay by card */
  cardLink?: string;
}

/**
 * flat:      one price regardless of anglers
 * pair:      Math.ceil(anglers/2) × unitPrice  (up to 2 share a boat)
 * perPerson: unitPrice × anglers
 */
export function calcTotal(selected: Program[], anglers: number): number {
  return selected.reduce((sum, p) => {
    switch (p.pricingType) {
      case "flat":      return sum + p.unitPrice;
      case "pair":      return sum + Math.ceil(anglers / 2) * p.unitPrice;
      case "perPerson": return sum + p.unitPrice * anglers;
    }
  }, 0);
}

const SS = "https://swipesimple.com/links/";

export const programs: Program[] = [
  { id: "wade-3hr",           name: "Guided Wade Trip — 3 Hours",                      shortName: "Guided Wade Trip (3-Hour)",                   category: "Guided Trips", pricingType: "pair", unitPrice: 700,  duration: "3 Hours",          cardLink: SS + "lnk_52e6bac4c75675157ffa9b190af84117" },
  { id: "wade-6hr",           name: "Guided Wade Trip — 6 Hours",                      shortName: "Guided Wade Trip (6-Hour)",                   category: "Guided Trips", pricingType: "pair", unitPrice: 800,  duration: "6 Hours",          cardLink: SS + "lnk_24bbb7fe1dcc592573e554ec9c5d8a1b" },
  { id: "wade-3hr-2pack",     name: "Guided Wade Trip — 2-Pack (3 Hrs Each)",          shortName: "2-Pack: Wade Half Day × 2",                   category: "Guided Trips", pricingType: "flat", unitPrice: 1400, duration: "2 × 3 Hours",      cardLink: SS + "lnk_089b324113409b10e1dfee2ab946cf45" },
  { id: "wade-3hr-3pack",     name: "Guided Wade Trip — 3-Pack (3 Hrs Each)",          shortName: "3-Pack: Wade Half Day × 3",                   category: "Guided Trips", pricingType: "flat", unitPrice: 2100, duration: "3 × 3 Hours",      cardLink: SS + "lnk_4567bac98ccaebcf0790902ef0964e42" },
  { id: "float-3hr",          name: "Guided Float Trip — 3 Hours",                     shortName: "Guided Float Trip (3-Hour)",                  category: "Guided Trips", pricingType: "pair", unitPrice: 700,  duration: "3 Hours",          cardLink: SS + "lnk_3c9aeaf55a6c46358d575c204eb9c02e" },
  { id: "float-6hr",          name: "Guided Float Trip — 6 Hours",                     shortName: "Guided Float Trip (6-Hour)",                  category: "Guided Trips", pricingType: "pair", unitPrice: 800,  duration: "6 Hours",          cardLink: SS + "lnk_08bf98e75b36159b169cdede3b530e7a" },
  { id: "float-3hr-2pack",    name: "Guided Float Trip — 2-Pack (3 Hrs Each)",         shortName: "2-Pack: Float Half Day × 2",                  category: "Guided Trips", pricingType: "flat", unitPrice: 1400, duration: "2 × 3 Hours",      cardLink: SS + "lnk_70a10549b15a174318df91e2cab72863" },
  { id: "float-3hr-3pack",    name: "Guided Float Trip — 3-Pack (3 Hrs Each)",         shortName: "3-Pack: Float Half Day × 3",                  category: "Guided Trips", pricingType: "flat", unitPrice: 2100, duration: "3 × 3 Hours",      cardLink: SS + "lnk_310fbf32ccc07cf76c52eb511e719e42" },
  { id: "float-6hr-3boats",   name: "Guided Float Trip — 3 Boats, Full Day",           shortName: "3 Boats Full Day Float",                      category: "Guided Trips", pricingType: "flat", unitPrice: 2400, duration: "6 Hours · 3 Boats", cardLink: SS + "lnk_92323bb94c637554f8019c1dca85a98c" },
  { id: "lake-6hr",           name: "Guided Lake Trip",                                shortName: "Guided Lake Trip",                            category: "Guided Trips", pricingType: "pair", unitPrice: 875,  duration: "6 Hours",          cardLink: SS + "lnk_ff4cf539" },
  { id: "casting-1hr",   name: "Fly Casting Instruction — 1 Hour",           shortName: "Fly Casting Instruction (1-Hour)",           category: "Casting Instruction",            pricingType: "flat",      unitPrice: 400,  duration: "1 Hour",       cardLink: SS + "lnk_bf24863b" },
  { id: "casting-2hr",   name: "Fly Casting Instruction — 2 Hours",          shortName: "Fly Casting Instruction (2-Hour)",           category: "Casting Instruction",            pricingType: "flat",      unitPrice: 800,  duration: "2 Hours",      cardLink: SS + "lnk_5f8b4fe2" },
  { id: "casting-3hr",   name: "Fly Casting Instruction — 3 Hours",          shortName: "Fly Casting Instruction (3-Hour)",           category: "Casting Instruction",            pricingType: "flat",      unitPrice: 1200, duration: "3 Hours",      cardLink: SS + "lnk_044367e4" },
  { id: "online",        name: "Online Fly Casting Lessons",                 shortName: "Online Fly Casting Lessons",                 category: "Casting Instruction",            pricingType: "flat",      unitPrice: 400,  duration: "Live · Global",  cardLink: SS + "lnk_871fe05505808fc061d6d3f886f1f003" },
  { id: "advanced-2day", name: "Fly Casting Mastery Workshop",                shortName: "Fly Casting Mastery Workshop",                category: "Masterclass Clinics",            pricingType: "perPerson", unitPrice: 1550, duration: "2 Days",       cardLink: SS + "lnk_5ac79a4f" },
  { id: "spey",          name: "Spey Elite Casting Clinic",                  shortName: "Spey Elite Casting Clinic",                  category: "Masterclass Clinics",            pricingType: "perPerson", unitPrice: 1550, duration: "2 Days",       cardLink: SS + "lnk_b5d91172" },
  { id: "saltwater",     name: "Saltwater Fly Casting Elite Masterclass",    shortName: "Saltwater Fly Casting Elite Masterclass",    category: "Masterclass Clinics",            pricingType: "perPerson", unitPrice: 1550, duration: "2 Days",       cardLink: SS + "lnk_5092345425e7ac7fdb28e87bd2d07820" },
  { id: "dry-fly",       name: "Master's Dry Fly Fishing Clinic",            shortName: "Dry Fly Fishing Clinic",                     category: "Smoky Mountain Weekend Schools", pricingType: "perPerson", unitPrice: 1550, duration: "Weekend",  isSmokyMtnSchool: true, cardLink: SS + "lnk_f3eb8ea8" },
  { id: "wet-fly",       name: "Master's Wet Fly Fishing Clinic",            shortName: "Wet Fly Fishing Clinic",                     category: "Smoky Mountain Weekend Schools", pricingType: "perPerson", unitPrice: 1550, duration: "Weekend",  isSmokyMtnSchool: true, cardLink: SS + "lnk_f3eb8ea8" },
  { id: "nymph",         name: "Advanced Nymph Fishing Clinic",              shortName: "Nymph Fishing Clinic",                       category: "Smoky Mountain Weekend Schools", pricingType: "perPerson", unitPrice: 1550, duration: "Weekend",  isSmokyMtnSchool: true, cardLink: SS + "lnk_f3eb8ea8" },
  { id: "streamer",      name: "Advanced Streamer Fishing Clinic",           shortName: "Streamer Fishing Clinic",                    category: "Smoky Mountain Weekend Schools", pricingType: "perPerson", unitPrice: 1550, duration: "Weekend",  isSmokyMtnSchool: true, cardLink: SS + "lnk_f3eb8ea8" },
  { id: "river-nav",     name: "Oar Frame Rowing School",                    shortName: "Oar Frame Rowing School",                    category: "Oar Frame Rowing School",        pricingType: "perPerson", unitPrice: 1550, duration: "2 Days",       cardLink: SS + "lnk_f5b7030751a4a80c53119c5c027345f9" },
  { id: "guide-school",  name: "Fly Fishing Guide School",                   shortName: "Fly Fishing Guide School",                   category: "Schools",                        pricingType: "perPerson", unitPrice: 4850, duration: "4 Days"        },
];

// ── Program Pricing ──────────────────────────────────────────────────────────
// Change any price here → book.tsx, services.tsx, reservation-form.tsx all update.

export const pricing = {
  guidedWadeOrFloat:       { display: "$700 / $800", half: "$700", full: "$800" },
  guidedLakeTrip:          { display: "$875"        },
  flyCastingInstruction:   { display: "$400"        },
  onlineVideoCoaching:     { display: "$400"        },
  masterclassWorkshop:     { display: "$1,550"      },
  weekendFlyFishingSchool: { display: "$1,550"      },
  riverNavigationAcademy:  { display: "$1,550"      },
  castingAnglesBook:       { display: "$34.95"      },
  guideSchool: {
    display:     "$4,850",
    fullDisplay: "$4,850",
    halfDisplay: "$2,425",
    full:        4850,
    half:        2425,
  },
} as const;
