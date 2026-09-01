"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { programs, calcTotal, type Program } from "@workspace/schedule";
import { img, api } from "@/lib/asset";
import { useSchedule, type BlockedDate } from "@/hooks/use-schedule";

function fmt(n: number) { return "$" + n.toLocaleString(); }

const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAY_NAMES   = ["Su","Mo","Tu","We","Th","Fr","Sa"];

function toIso(y: number, m: number, d: number) {
  return `${y}-${String(m).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
}

function formatIsoDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTH_NAMES[m - 1]} ${d}, ${y}`;
}

function AvailabilityCalendar({
  blockedDates,
  selectedIso,
  onSelect,
}: {
  blockedDates: BlockedDate[];
  selectedIso: string;
  onSelect: (iso: string) => void;
}) {
  const today = useMemo(() => {
    const d = new Date(); d.setHours(0,0,0,0); return d;
  }, []);

  const [viewYear,  setViewYear]  = useState(() => today.getFullYear());
  const [viewMonth, setViewMonth] = useState(() => today.getMonth() + 1);

  const todayIso = toIso(today.getFullYear(), today.getMonth() + 1, today.getDate());
  const isAtMin  = viewYear === today.getFullYear() && viewMonth <= today.getMonth() + 1;

  function prevMonth() {
    if (isAtMin) return;
    if (viewMonth === 1) { setViewYear(y => y - 1); setViewMonth(12); }
    else setViewMonth(m => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 12) { setViewYear(y => y + 1); setViewMonth(1); }
    else setViewMonth(m => m + 1);
  }

  const firstDow    = new Date(viewYear, viewMonth - 1, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth, 0).getDate();
  const cells: (number | null)[] = [...Array(firstDow).fill(null)];
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  function blockedReason(day: number): string | false {
    const iso = toIso(viewYear, viewMonth, day);
    const hit  = blockedDates.find(r => iso >= r.start && iso <= r.end);
    return hit ? (hit.note ?? "Unavailable") : false;
  }

  function isPast(day: number) {
    return new Date(viewYear, viewMonth - 1, day) < today;
  }

  return (
    <div className="border border-border bg-white p-4 select-none">
      <div className="flex items-center justify-between mb-3">
        <button type="button" onClick={prevMonth} disabled={isAtMin}
          className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-25 transition-colors">
          <ChevronLeft size={14} />
        </button>
        <span className="text-sm font-semibold text-foreground">
          {MONTH_NAMES[viewMonth - 1]} {viewYear}
        </span>
        <button type="button" onClick={nextMonth}
          className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
          <ChevronRight size={14} />
        </button>
      </div>

      <div className="grid grid-cols-7 mb-1">
        {DAY_NAMES.map(d => (
          <div key={d} className="text-center text-[10px] font-semibold text-muted-foreground uppercase py-1">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((day, i) => {
          if (day === null) return <div key={`e-${i}`} />;
          const iso        = toIso(viewYear, viewMonth, day);
          const past       = isPast(day);
          const reason     = !past && blockedReason(day);
          const unavailable = past || !!reason;
          const isSelectedFlag = iso === selectedIso;
          const isTodayFlag    = iso === todayIso;

          return (
            <button
              key={day}
              type="button"
              disabled={unavailable}
              onClick={() => onSelect(iso)}
              title={reason || undefined}
              className={[
                "h-8 text-xs font-medium rounded-sm transition-colors w-full",
                isSelectedFlag
                  ? "bg-primary text-primary-foreground"
                  : unavailable
                  ? "text-muted-foreground/25 cursor-not-allowed"
                  : "hover:bg-primary/10 text-foreground cursor-pointer",
                reason && !isSelectedFlag ? "bg-muted/50 line-through" : "",
                isTodayFlag && !isSelectedFlag ? "ring-1 ring-inset ring-primary/50" : "",
              ].filter(Boolean).join(" ")}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-[10px] text-muted-foreground border-t border-border pt-3">
        <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-3 bg-primary rounded-sm" /> Selected</span>
        <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-3 bg-muted/50 border border-border rounded-sm" /> Unavailable — hover for reason</span>
        <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-3 ring-1 ring-primary/50 rounded-sm" /> Today</span>
      </div>
    </div>
  );
}

const SUB_CATEGORIES = ["Guided Trips", "Casting Instruction"] as const;
type SubCategory = (typeof SUB_CATEGORIES)[number];

const GUIDED_TRIP_IDS = ["wade-3hr", "float-3hr", "wade-6hr", "float-6hr", "lake-6hr"] as const;
const GUIDED_TRIP_LABELS: Record<string, string> = {
  "wade-3hr":  "Half Day Wade",
  "float-3hr": "Half Day Float",
  "wade-6hr":  "Full Day Wade",
  "float-6hr": "Full Day Float",
  "lake-6hr":  "Lake Trip",
};

const DIRECT_PROGRAM_IDS = [
  "advanced-2day",
  "spey",
  "saltwater",
  "dry-fly",
  "wet-fly",
  "nymph",
  "streamer",
  "river-nav",
] as const;

const byCategory = (cat: SubCategory) => programs.filter(p => p.category === cat);

export default function Reserve() {
  const router = useRouter();
  const { blockedDates, masterclassSessions, weekendSchoolSessions, rowingSessions } = useSchedule();

  const [selection,    setSelection]    = useState("");
  const [subProgramId, setSubProgramId] = useState("");
  const [anglers,      setAnglers]      = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", datePreference: "", notes: "" });
  const [errors,     setErrors]     = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const isSubCat = SUB_CATEGORIES.includes(selection as SubCategory);
  const directProgram: Program | undefined = !isSubCat && selection ? programs.find(p => p.id === selection) : undefined;
  const subCatPrograms = isSubCat ? byCategory(selection as SubCategory) : [];

  const selectedPrograms: Program[] = useMemo(() => {
    if (isSubCat && subProgramId) return programs.filter(p => p.id === subProgramId);
    if (directProgram) return [directProgram];
    return [];
  }, [isSubCat, subProgramId, directProgram]);

  const effectiveProgramId = isSubCat ? subProgramId : selection;
  const isWade = effectiveProgramId === "wade-3hr" || effectiveProgramId === "wade-6hr";
  const unitLabel = isWade ? "guide" : "boat";

  const total = useMemo(() => calcTotal(selectedPrograms, anglers), [selectedPrograms, anglers]);

  const pricingNote = useMemo(() => {
    if (selectedPrograms.length === 0) return "";
    const p = selectedPrograms[0];
    if (p.pricingType === "flat") return "Flat rate — 1 or 2 people, same price";
    if (p.pricingType === "pair") {
      const count = Math.ceil(anglers / 2);
      const label = isWade ? "guide" : "boat";
      return `${count} ${label}${count !== 1 ? "s" : ""} × ${fmt(p.unitPrice)} (1–2 anglers per ${label})`;
    }
    return `${fmt(p.unitPrice)}/person × ${anglers} angler${anglers !== 1 ? "s" : ""}`;
  }, [selectedPrograms, anglers, isWade]);

  const maxAnglers  = selection === "Guided Trips" ? 12 : selection === "Casting Instruction" ? 2 : 10;
  const showDatePref = selection === "Guided Trips" || selection === "Casting Instruction";

  type FixedSession = { label: string };

  const fixedSessions = useMemo<FixedSession[]>(() => {
    const yr = (s: { year?: number }) => s.year ? `, ${s.year}` : "";
    const upcoming = (dates: string, year?: number) => {
      // If a year is specified, check against that year; otherwise use current year
      const MONTHS: Record<string, number> = {
        january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
        july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
      };
      const parts = dates.toLowerCase().split(/[\s–\-]+/);
      const monthName = parts.find(p => MONTHS[p] !== undefined);
      if (!monthName) return true;
      const dayStr = parts[parts.indexOf(monthName) + 1];
      const day = parseInt(dayStr ?? "1", 10);
      const month = MONTHS[monthName];
      const sessionYear = year ?? new Date().getFullYear();
      const sessionStart = new Date(sessionYear, month, day);
      return sessionStart >= new Date();
    };
    const id = effectiveProgramId;
    if (id === "advanced-2day") return (masterclassSessions as (typeof masterclassSessions[0] & { year?: number })[]).filter(s => s.program.toLowerCase().includes("mastery") && upcoming(s.dates, s.year)).map(s => ({ label: `${s.dates}${yr(s)}` }));
    if (id === "spey")          return (masterclassSessions as (typeof masterclassSessions[0] & { year?: number })[]).filter(s => s.program.toLowerCase().includes("spey")    && upcoming(s.dates, s.year)).map(s => ({ label: `${s.dates}${yr(s)}` }));
    if (id === "saltwater")     return (masterclassSessions as (typeof masterclassSessions[0] & { year?: number })[]).filter(s => s.program.toLowerCase().includes("salt")    && upcoming(s.dates, s.year)).map(s => ({ label: `${s.dates}${yr(s)}` }));
    if (id === "dry-fly")       return (weekendSchoolSessions as (typeof weekendSchoolSessions[0] & { year?: number })[]).filter(s => s.technique.toLowerCase().includes("dry")      && upcoming(s.dates, s.year)).map(s => ({ label: `${s.dates}${yr(s)}` }));
    if (id === "wet-fly")       return (weekendSchoolSessions as (typeof weekendSchoolSessions[0] & { year?: number })[]).filter(s => s.technique.toLowerCase().includes("wet")      && upcoming(s.dates, s.year)).map(s => ({ label: `${s.dates}${yr(s)}` }));
    if (id === "nymph")         return (weekendSchoolSessions as (typeof weekendSchoolSessions[0] & { year?: number })[]).filter(s => s.technique.toLowerCase().includes("nymph")    && upcoming(s.dates, s.year)).map(s => ({ label: `${s.dates}${yr(s)}` }));
    if (id === "streamer")      return (weekendSchoolSessions as (typeof weekendSchoolSessions[0] & { year?: number })[]).filter(s => s.technique.toLowerCase().includes("streamer") && upcoming(s.dates, s.year)).map(s => ({ label: `${s.dates}${yr(s)}` }));
    if (id === "river-nav")     return (rowingSessions as (typeof rowingSessions[0] & { year?: number })[]).filter(s => upcoming(s.dates, s.year)).map(s => ({ label: `${s.dates}${yr(s)}` }));
    return [];
  }, [effectiveProgramId, masterclassSessions, weekendSchoolSessions, rowingSessions]);
  const isFixedSchedule = fixedSessions.length > 0;

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (key === "datePreference") setSelectedDate("");
      setForm(f => ({ ...f, [key]: e.target.value }));
    },
  });

  const handleSelect = (val: string) => {
    setSelection(val);
    setSubProgramId("");
    setSelectedDate("");
    setForm(f => ({ ...f, datePreference: "" }));
    const isTrips   = val === "Guided Trips";
    const isCasting = val === "Casting Instruction";
    setAnglers(a => Math.min(a, isTrips ? 12 : isCasting ? 2 : 10));
  };

  function handleDateSelect(iso: string) {
    setSelectedDate(iso);
    setForm(f => ({ ...f, datePreference: formatIsoDate(iso) }));
  }

  const handleSubmit = async () => {
    const newErrors: Record<string, string> = {};
    if (!form.firstName.trim()) newErrors.firstName = "Required";
    if (!form.lastName.trim())  newErrors.lastName  = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Valid email required";
    if (!form.phone.trim()) newErrors.phone = "Required";
    if (!selection) newErrors.category = "Please select a program";
    if (isSubCat && !subProgramId) newErrors.program = "Please select a specific program";
    if (isFixedSchedule && !form.datePreference) newErrors.datePreference = "Please select a session date";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }

    setSubmitting(true);
    try {
      const programNames = selectedPrograms.map(p => p.name);
      const unitPrice = selectedPrograms[0]?.unitPrice ?? 0;
      localStorage.setItem("mbff_booking", JSON.stringify({ programs: programNames, programIds: selectedPrograms.map(p => p.id), anglers, total, firstName: form.firstName, lastName: form.lastName, email: form.email, phone: form.phone, datePreference: form.datePreference }));
      const res = await fetch(api("/reserve"), { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ timestamp: new Date().toISOString(), firstName: form.firstName, lastName: form.lastName, email: form.email, phone: form.phone, programs: programNames, anglers, total, unitPrice, datePreference: form.datePreference, notes: form.notes }) });
      const data = await res.json();
      if (data.ok) {
        localStorage.setItem("mbff_reservation_ready", "true");
        router.push("/waiver-release");
      } else { throw new Error(data.error || "Submission failed"); }
    } catch { alert("Something went wrong. Please try again or call (828) 736-1469."); }
    finally { setSubmitting(false); }
  };

  return (
    <div className="w-full">
      <section className="relative h-[40vh] min-h-[280px] overflow-hidden">
        <img src={img("/images/fall-river-fishing.webp")} srcSet={`${img("/images/mobile/fall-river-fishing.webp")} 800w, ${img("/images/fall-river-fishing.webp")} 1440w`} sizes="100vw" alt="Fly fishing on the Tuckasegee River — Mac Brown Fly Fish" className="absolute inset-0 w-full h-full object-cover object-[center_40%]" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Bryson City, NC · Est. 1987</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">Reserve Your Experience</h1>
          <p className="text-white/55 text-base italic mt-3 font-serif">Step 1 of 3 — Reservation · Waiver · Payment</p>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="max-w-2xl mx-auto px-6 space-y-8">
          <div className="flex items-center gap-2">
            {(["Reservation", "Waiver", "Payment"] as const).map((step, i) => (
              <div key={step} className="flex items-center gap-2 flex-1 last:flex-none">
                <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] ${i === 0 ? "text-primary" : "text-muted-foreground/40"}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${i === 0 ? "bg-primary text-primary-foreground" : "bg-border text-muted-foreground"}`}>{i + 1}</span>
                  <span className="hidden sm:inline">{step}</span>
                </div>
                {i < 2 && <div className="flex-1 h-px bg-border" />}
              </div>
            ))}
          </div>

          <div className="bg-white border border-border p-8 space-y-6">
            <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-4">Select Your Program</h2>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">Program <span className="text-destructive">*</span></label>
              <select value={selection} onChange={e => handleSelect(e.target.value)} className="w-full border border-border bg-white px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                <option value="">Select a program…</option>
                <optgroup label="── Guided Trips">
                  <option value="Guided Trips">Guided Trips (Wade or Float or Lake)</option>
                </optgroup>
                <optgroup label="── Casting Instruction">
                  <option value="Casting Instruction">Fly Casting Instruction (1, 2, or 3 Hours)</option>
                </optgroup>
                <optgroup label="── Masterclass Clinics">
                  {programs.filter(p => ["advanced-2day","spey","saltwater"].includes(p.id)).map(p => (
                    <option key={p.id} value={p.id}>{p.name} — {fmt(p.unitPrice)}/person</option>
                  ))}
                </optgroup>
                <optgroup label="── Weekend Fishing Clinics">
                  {programs.filter(p => ["dry-fly","wet-fly","nymph","streamer"].includes(p.id)).map(p => (
                    <option key={p.id} value={p.id}>{p.name} — {fmt(p.unitPrice)}/person</option>
                  ))}
                </optgroup>
                <optgroup label="── Rowing School">
                  {programs.filter(p => p.id === "river-nav").map(p => (
                    <option key={p.id} value={p.id}>{p.name} — {fmt(p.unitPrice)}/person</option>
                  ))}
                </optgroup>
              </select>
              {errors.category && <p className="text-destructive text-xs mt-1">{errors.category}</p>}
            </div>

            {isSubCat && subCatPrograms.length > 0 && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                  {selection === "Guided Trips" ? "Trip Type" : "Session Length"} <span className="text-destructive">*</span>
                </label>
                <select value={subProgramId} onChange={e => setSubProgramId(e.target.value)} className="w-full border border-border bg-white px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                  <option value="">Select…</option>
                  {(selection === "Guided Trips"
                    ? subCatPrograms.filter(p => (GUIDED_TRIP_IDS as readonly string[]).includes(p.id))
                    : subCatPrograms
                  ).map(p => (
                    <option key={p.id} value={p.id}>
                      {selection === "Guided Trips"
                        ? `${GUIDED_TRIP_LABELS[p.id] ?? p.name} — ${fmt(p.unitPrice)}/boat`
                        : `${p.name} — ${fmt(p.unitPrice)}${p.pricingType === "perPerson" ? "/person" : p.pricingType === "pair" ? "/boat" : ""}`
                      }
                    </option>
                  ))}
                </select>
                {errors.program && <p className="text-destructive text-xs mt-1">{errors.program}</p>}
              </div>
            )}

            {selection && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
                  {selection === "Casting Instruction" ? "Number of People (1–2 — same flat rate)" : "Number of Anglers"}
                </label>
                <div className="flex items-center gap-4">
                  <button type="button" onClick={() => setAnglers(a => Math.max(1, a - 1))} disabled={anglers <= 1} className="w-10 h-10 border border-border flex items-center justify-center hover:bg-muted/40 transition-colors disabled:opacity-30"><Minus size={14} /></button>
                  <span className="font-serif text-2xl font-bold text-foreground w-8 text-center">{anglers}</span>
                  <button type="button" onClick={() => setAnglers(a => Math.min(maxAnglers, a + 1))} disabled={anglers >= maxAnglers} className="w-10 h-10 border border-border flex items-center justify-center hover:bg-muted/40 transition-colors disabled:opacity-30"><Plus size={14} /></button>
                  <span className="text-xs text-muted-foreground">max {maxAnglers}</span>
                </div>
                {selection === "Casting Instruction" && <p className="text-xs text-muted-foreground mt-2">1 or 2 people — the rate is the same either way.</p>}
                {selection === "Guided Trips" && effectiveProgramId && (
                  <div className="text-xs text-muted-foreground mt-2 space-y-1">
                    <p>1–2 = 1 {unitLabel} · 3–4 = 2 {unitLabel}s · 5–6 = 3 {unitLabel}s · 7–8 = 4 {unitLabel}s · 9–10 = 5 {unitLabel}s · 11–12 = 6 {unitLabel}s</p>
                    <p className="text-muted-foreground/70">Each {unitLabel} holds 1–2 anglers at the same rate.</p>
                  </div>
                )}
              </div>
            )}

            {total > 0 && (
              <div className="bg-primary/5 border border-primary/20 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Estimated Total</p>
                    {pricingNote && <p className="text-xs text-muted-foreground mt-1">{pricingNote}</p>}
                  </div>
                  <p className="font-serif text-3xl font-bold text-primary shrink-0">{fmt(total)}</p>
                </div>
              </div>
            )}
          </div>

          {isFixedSchedule && (
            <div className="bg-white border border-border p-8 space-y-4">
              <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-4">Select Your Session</h2>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Choose the session date you'd like to attend.
              </p>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                  Session Date <span className="text-destructive">*</span>
                </label>
                <select
                  value={form.datePreference}
                  onChange={e => setForm(f => ({ ...f, datePreference: e.target.value }))}
                  className="w-full border border-border bg-white px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Select a session…</option>
                  <option value="Gift Certificate">Gift Certificate</option>
                  {fixedSessions.map(s => (
                    <option key={s.label} value={s.label}>{s.label}</option>
                  ))}
                </select>
                {errors.datePreference && <p className="text-destructive text-xs mt-1">{errors.datePreference}</p>}
              </div>
            </div>
          )}

          {showDatePref && (
            <div className="bg-white border border-border p-8 space-y-4">
              <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-4">Pick Your Date</h2>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Click an available date below or type a date or preference in the field.
                Gray dates are unavailable — hover to see why.
              </p>
              <AvailabilityCalendar
                blockedDates={blockedDates}
                selectedIso={selectedDate}
                onSelect={handleDateSelect}
              />
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">Preferred Date or Month</label>
                <input type="text" placeholder="e.g. July 15, or any weekend in August…" className="w-full border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary" {...field("datePreference")} />
                <p className="text-xs text-muted-foreground mt-1.5">Clicking a calendar date fills this in automatically. Edit freely if you prefer a range or month.</p>
                <button
                  type="button"
                  onClick={() => { setSelectedDate(""); setForm(f => ({ ...f, datePreference: "Gift Certificate" })); }}
                  className="mt-3 text-xs text-primary underline underline-offset-2 hover:text-primary/70 transition-colors"
                >
                  Purchasing as a gift certificate?
                </button>
                {form.datePreference === "Gift Certificate" && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Selected: <strong>Gift Certificate</strong> —{" "}
                    <button type="button" onClick={() => setForm(f => ({ ...f, datePreference: "" }))} className="underline hover:text-foreground transition-colors">clear</button>
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="bg-primary/5 border border-primary/20 px-5 py-4 text-sm text-foreground/80 leading-relaxed">
            <p className="font-semibold text-foreground mb-1">Pricing Notice</p>
            <p>Rates for guided trips, clinics, casting instruction, and schools are subject to change until payment is received. Payment in full at booking locks in the rate shown at checkout.</p>
          </div>

          <div className="bg-white border border-border p-8 space-y-5">
            <h2 className="font-serif text-xl font-bold text-foreground border-b border-border pb-4">Your Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {([["firstName", "First Name"], ["lastName", "Last Name"], ["email", "Email"], ["phone", "Phone"]] as const).map(([key, label]) => (
                <div key={key}>
                  <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">{label} <span className="text-destructive">*</span></label>
                  <input type={key === "email" ? "email" : key === "phone" ? "tel" : "text"} className="w-full border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" {...field(key)} />
                  {errors[key] && <p className="text-destructive text-xs mt-1">{errors[key]}</p>}
                </div>
              ))}
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">Questions or Notes</label>
              <textarea rows={3} placeholder="Experience level, gear questions, special requests…" className="w-full border border-border bg-white px-4 py-3 text-sm resize-none placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary" {...field("notes")} />
            </div>
          </div>

          <button onClick={handleSubmit} disabled={submitting} className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary/90 transition-colors disabled:opacity-60">
            {submitting ? "Saving…" : "Continue to Waiver"} <ArrowRight size={14} />
          </button>
          <p className="text-center text-xs text-muted-foreground pb-4">Next: Sign the participation waiver · Then: Complete payment to confirm your spot.</p>
        </div>
      </section>
    </div>
  );
}
