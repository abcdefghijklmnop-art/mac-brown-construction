"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useSchedule, type ScheduleData } from "@/hooks/use-schedule";
import { api } from "@/lib/utils";

const RESERVATION_API = api("/ffgs-reservation");

const SWIPE_FULL = "https://swipesimple.com/links/lnk_8bb8ce8dc120fc1535b8580c2c007b73";
const SWIPE_HALF = "https://swipesimple.com/links/lnk_30a6c7aa20625d9ebb21549ef6f9f63a";

const STEPS = ["Reservation", "Waiver", "Payment"] as const;
type Step = 0 | 1 | 2;

interface ReservationData {
  enrollmentTrack: "career" | "recreational" | "";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  streetAddress: string;
  cityStateZip: string;
  schoolMonth: string;
  medicalConditions: string;
  flyfishingJourney: string;
  expectations: string;
  castingLevel: number;
  rowingLevel: number;
  favoriteTechniques: string[];
  emergencyContactName: string;
  emergencyContactPhone: string;
  heardAboutUs: string;
  attendingFor: string;
}

interface WaiverData {
  waiverSigned: boolean;
  assumeRisk: boolean;
  photoRelease: boolean;
  hasMinor: boolean;
  minorFirstName: string;
  minorLastName: string;
  minorDob: string;
  guardianRelationship: string;
  signedName: string;
  signatureDataUrl: string;
}

function StepIndicator({ current }: { current: Step }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-12">
      {STEPS.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center gap-2">
              <div className={`h-9 w-9 rounded-full flex items-center justify-center text-xs font-semibold border-2 transition-all
                ${done  ? "bg-primary border-primary text-primary-foreground"
                : active ? "bg-background border-primary text-primary"
                :          "bg-background border-border text-muted-foreground"}`}>
                {done ? <Check size={14} /> : i + 1}
              </div>
              <span className={`text-[10px] font-medium uppercase tracking-[0.12em]
                ${active ? "text-primary" : done ? "text-primary" : "text-muted-foreground"}`}>
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`w-20 md:w-32 h-[1.5px] mx-2 mb-5 transition-all
                ${i < current ? "bg-primary" : "bg-border"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function Field({ label, error, required, children }: {
  label: string; error?: string; required?: boolean; children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      {children}
      {error && <span className="text-[11px] text-destructive">{error}</span>}
    </div>
  );
}

const inputCls = (err?: string) =>
  `w-full rounded-none border px-3.5 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors ${err ? "border-destructive" : "border-border"}`;

function SliderField({ label, value, onChange }: {
  label: string; value: number; onChange: (v: number) => void;
}) {
  const labels = ["0 — None", "1 — Beginner", "2 — Some", "3 — Intermediate", "4 — Advanced", "5 — Expert"];
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground">{label}</label>
      <input
        type="range" min={0} max={5} step={1} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-primary"
      />
      <span className="text-xs text-muted-foreground">{labels[value]}</span>
    </div>
  );
}

function ReservationStep({
  data, onChange, onNext, pricing, guideSchoolSessions, blockedDates,
}: {
  data: ReservationData;
  onChange: (patch: Partial<ReservationData>) => void;
  onNext: () => void;
  pricing: ScheduleData["pricing"];
  guideSchoolSessions: ScheduleData["guideSchoolSessions"];
  blockedDates: ScheduleData["blockedDates"];
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!data.enrollmentTrack)  e.enrollmentTrack = "Please select a program track";
    if (!data.firstName.trim()) e.firstName = "Required";
    if (!data.lastName.trim())  e.lastName  = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Valid email required";
    if (!data.phone.trim())     e.phone     = "Required";
    if (!data.streetAddress.trim()) e.streetAddress = "Required";
    if (!data.cityStateZip.trim())  e.cityStateZip  = "Required";
    if (!data.schoolMonth)          e.schoolMonth   = "Required";
    if (!data.flyfishingJourney.trim()) e.flyfishingJourney = "Required";
    if (!data.expectations.trim())      e.expectations      = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const techniques = ["Dry Fly", "Wet Fly", "Streamer", "Nymph"];

  const toggleTechnique = (t: string) => {
    const cur = data.favoriteTechniques;
    onChange({ favoriteTechniques: cur.includes(t) ? cur.filter(x => x !== t) : [...cur, t] });
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-2">Step 1 of 3</p>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">Reservation Information</h2>
        <p className="text-sm text-muted-foreground">
          A 50% deposit ({pricing.guideSchool.halfDisplay}) is required to secure your spot. The remaining balance is due 30 days before your school date.
        </p>
        <p className="text-sm text-muted-foreground">
          Your deposit reserves your spot on the date selected. It does not lock in price. Program pricing is subject to change at any time, and your remaining balance will be calculated at the current published rate in effect when your balance is due.
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground">
          Which program are you enrolling in? <span className="text-destructive">*</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {([
            {
              value: "career" as const,
              label: "Professional Career Development",
              sub: "Fly Fishing Guide School",
              desc: "Earn your guide license, build client skills, and launch a career on the water.",
            },
            {
              value: "recreational" as const,
              label: "Recreational Angler School",
              sub: "Smoky Mountain Fly Fishing School",
              desc: "Fish better, catch more, and enjoy the sport at a whole new level.",
            },
          ] as const).map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange({ enrollmentTrack: opt.value })}
              className={`text-left border p-5 transition-colors ${data.enrollmentTrack === opt.value ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary mb-1">{opt.sub}</p>
              <p className="font-serif text-base font-bold text-foreground mb-2">{opt.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{opt.desc}</p>
              <div className={`mt-3 h-0.5 transition-all ${data.enrollmentTrack === opt.value ? "bg-primary" : "bg-transparent"}`} />
            </button>
          ))}
        </div>
        {errors.enrollmentTrack && (
          <span className="text-[11px] text-destructive">{errors.enrollmentTrack}</span>
        )}
      </div>

      <div className="border border-border p-6 space-y-4">
        <h3 className="font-serif text-lg font-bold text-foreground pb-3 border-b border-border">Personal Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="First Name" required error={errors.firstName}>
            <input className={inputCls(errors.firstName)} placeholder="First"
              value={data.firstName} onChange={e => onChange({ firstName: e.target.value })} />
          </Field>
          <Field label="Last Name" required error={errors.lastName}>
            <input className={inputCls(errors.lastName)} placeholder="Last"
              value={data.lastName} onChange={e => onChange({ lastName: e.target.value })} />
          </Field>
          <Field label="Email" required error={errors.email}>
            <input type="email" className={inputCls(errors.email)} placeholder="you@email.com"
              value={data.email} onChange={e => onChange({ email: e.target.value })} />
          </Field>
          <Field label="Cell Phone" required error={errors.phone}>
            <input type="tel" className={inputCls(errors.phone)} placeholder="(000) 000-0000"
              value={data.phone} onChange={e => onChange({ phone: e.target.value })} />
          </Field>
          <Field label="Street Address" required error={errors.streetAddress}>
            <input className={inputCls(errors.streetAddress)} placeholder="123 Main St"
              value={data.streetAddress} onChange={e => onChange({ streetAddress: e.target.value })} />
          </Field>
          <Field label="City, State, Zip" required error={errors.cityStateZip}>
            <input className={inputCls(errors.cityStateZip)} placeholder="Asheville, NC 28801"
              value={data.cityStateZip} onChange={e => onChange({ cityStateZip: e.target.value })} />
          </Field>
          <Field label="Emergency Contact Name">
            <input className={inputCls()} placeholder="Full name"
              value={data.emergencyContactName} onChange={e => onChange({ emergencyContactName: e.target.value })} />
          </Field>
          <Field label="Emergency Contact Phone">
            <input type="tel" className={inputCls()} placeholder="(000) 000-0000"
              value={data.emergencyContactPhone} onChange={e => onChange({ emergencyContactPhone: e.target.value })} />
          </Field>
        </div>
      </div>

      <div className="border border-border p-6 space-y-4">
        <h3 className="font-serif text-lg font-bold text-foreground pb-3 border-b border-border">School Details</h3>
        <div className="bg-primary/5 border border-primary/20 px-5 py-4 text-sm text-foreground/80 leading-relaxed">
          <p className="font-semibold text-foreground mb-1">Your spot is almost always available.</p>
          <p>School sessions rarely fill before you inquire. <span className="font-medium">If your preferred month isn&apos;t open, we&apos;ll call you — if you don&apos;t hear from us, your enrollment is confirmed.</span></p>
        </div>
        {blockedDates.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 px-5 py-4 text-sm">
            <p className="font-semibold text-amber-900 mb-2">Currently unavailable dates:</p>
            <ul className="space-y-1">
              {blockedDates.map((d, i) => (
                <li key={i} className="text-amber-800">
                  <span className="font-medium">{d.start === d.end ? d.start : `${d.start} – ${d.end}`}</span>
                  {d.note ? <span className="text-amber-700"> — {d.note}</span> : null}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Preferred School Month" required error={errors.schoolMonth}>
            <select className={inputCls(errors.schoolMonth)}
              value={data.schoolMonth} onChange={e => onChange({ schoolMonth: e.target.value })}>
              <option value="">Select a month…</option>
              {guideSchoolSessions.map(s => (
                <option key={s.month} value={s.month} disabled={s.soldOut}>
                  {s.month}{s.soldOut ? " — Sold Out" : ""}
                </option>
              ))}
            </select>
          </Field>
          <Field label="I am attending for">
            <select className={inputCls()}
              value={data.attendingFor} onChange={e => onChange({ attendingFor: e.target.value })}>
              <option value="">Select…</option>
              <option>Career change — becoming a guide</option>
              <option>Personal skill improvement</option>
              <option>Both</option>
            </select>
          </Field>
          <Field label="How did you hear about us?">
            <select className={inputCls()}
              value={data.heardAboutUs} onChange={e => onChange({ heardAboutUs: e.target.value })}>
              <option value="">Select…</option>
              <option>Google Search</option>
              <option>Friend / Word of Mouth</option>
              <option>Social Media</option>
              <option>Podcast</option>
              <option>Fly Fishing Show</option>
              <option>macbrownflyfish.com</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Any Medical Conditions?">
            <input className={inputCls()} placeholder="Or type 'None'"
              value={data.medicalConditions} onChange={e => onChange({ medicalConditions: e.target.value })} />
          </Field>
        </div>
      </div>

      <div className="border border-border p-6 space-y-4">
        <h3 className="font-serif text-lg font-bold text-foreground pb-3 border-b border-border">Your Fly Fishing Background</h3>
        <Field label="Tell us about your fly fishing journey" required error={errors.flyfishingJourney}>
          <textarea rows={3} className={`${inputCls(errors.flyfishingJourney)} resize-none`}
            placeholder="How long have you been fly fishing? What waters do you fish?"
            value={data.flyfishingJourney} onChange={e => onChange({ flyfishingJourney: e.target.value })} />
        </Field>
        <Field label="What do you hope to gain from the school?" required error={errors.expectations}>
          <textarea rows={3} className={`${inputCls(errors.expectations)} resize-none`}
            placeholder="Skills, career goals, specific techniques…"
            value={data.expectations} onChange={e => onChange({ expectations: e.target.value })} />
        </Field>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          <SliderField label="Fly Casting Skill Level" value={data.castingLevel}
            onChange={v => onChange({ castingLevel: v })} />
          <SliderField label="Whitewater Rowing Experience" value={data.rowingLevel}
            onChange={v => onChange({ rowingLevel: v })} />
        </div>
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground block mb-3">
            Favorite Techniques (select all that apply)
          </label>
          <div className="flex flex-wrap gap-2">
            {techniques.map(t => (
              <button key={t} type="button"
                onClick={() => toggleTechnique(t)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] border transition-colors
                  ${data.favoriteTechniques.includes(t)
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:border-primary"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => { if (validate()) onNext(); }}
        className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary/90 transition-colors"
      >
        Continue to Waiver <ArrowRight size={14} />
      </button>
    </div>
  );
}

const waiverSections = [
  { title: "Assumption of Risk", text: "Fly fishing and guide school training take place in an outdoor wilderness environment. I understand that inherent risks exist, including but not limited to bodily injury, illness, fractures, and in extreme cases death. These risks may result from weather, terrain, river conditions, equipment use, the actions of others, or forces of nature. I voluntarily assume all such risks." },
  { title: "Release of Liability", text: "I hereby release, waive, and hold harmless Fly Fishing Guide School, Mac Brown, its officers, employees, volunteers, and agents from any and all claims arising from bodily injury, property damage, or wrongful death — including those caused by negligence — occurring during any school, guided trip, instruction session, or related activity. Any disputes shall be resolved in Swain County, North Carolina." },
  { title: "Cancellation Policy", text: "A 50% deposit is required at the time of reservation. If cancellation is required more than 30 days before the school date, a 50% credit toward a future date will be issued. If cancellation occurs within 30 days of the school date, the deposit is non-refundable. We strongly recommend securing trip insurance to protect against unforeseen circumstances including medical emergencies and acts of God." },
  { title: "Pricing & Deposit Policy", text: "Program fees are subject to change at any time without notice, due to changes in equipment, insurance, lodging, permitting, or other costs. A deposit reserves your seat for the date selected — it does not lock in the price shown at the time of deposit. Your remaining balance will be billed at the then-current published rate at the time your balance is due (30 days before your school date), which may be higher or lower than the rate quoted when your deposit was made. If a reservation is canceled and later re-booked, the then-current price applies." },
  { title: "Minor Participants", text: "As parent or legal guardian of a participant under 18, I sign on their behalf and authorize Fly Fishing Guide School staff to seek emergency medical treatment if needed. All medical expenses are the sole responsibility of the participant or guardian." },
  { title: "Participant Agreement", text: "I agree to follow all instructor directions and school rules throughout the duration of the program. I will not consume alcohol or any substance that impairs my judgment before or during activities. I will wear all required safety equipment when directed. I confirm I am physically and mentally capable of participating in guide school training activities." },
  { title: "Photo & Media Release", text: "I grant Fly Fishing Guide School and Mac Brown Fly Fish permission to photograph or video me during school activities and to use my image or likeness for promotional, educational, and marketing purposes across print and digital media." },
];

function WaiverStep({
  data, onChange, onNext, onBack, participantName,
}: {
  data: WaiverData;
  onChange: (patch: Partial<WaiverData>) => void;
  onNext: () => void;
  onBack: () => void;
  participantName: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const parent = canvas.parentElement!;
      const dpr = window.devicePixelRatio || 1;
      const w = parent.clientWidth;
      const h = 160;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d")!;
      ctx.scale(dpr, dpr);
      ctx.strokeStyle = "#1a1a1a";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const src = "touches" in e ? e.touches[0] : e;
    return { x: src.clientX - rect.left, y: src.clientY - rect.top };
  };

  const ctx = () => canvasRef.current?.getContext("2d")!;

  const onMouseDown = (e: React.MouseEvent) => { setDrawing(true); const p = getPos(e); ctx().beginPath(); ctx().moveTo(p.x, p.y); };
  const onMouseMove = (e: React.MouseEvent) => { if (!drawing) return; const p = getPos(e); ctx().lineTo(p.x, p.y); ctx().stroke(); onChange({ signatureDataUrl: canvasRef.current!.toDataURL() }); };
  const onTouchStart = (e: React.TouchEvent) => { e.preventDefault(); setDrawing(true); const p = getPos(e); ctx().beginPath(); ctx().moveTo(p.x, p.y); };
  const onTouchMove = (e: React.TouchEvent) => { e.preventDefault(); if (!drawing) return; const p = getPos(e); ctx().lineTo(p.x, p.y); ctx().stroke(); onChange({ signatureDataUrl: canvasRef.current!.toDataURL() }); };

  const clearSig = () => {
    const canvas = canvasRef.current!;
    ctx().clearRect(0, 0, canvas.width, canvas.height);
    onChange({ signatureDataUrl: "" });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!data.waiverSigned || !data.assumeRisk || !data.photoRelease)
      e.agree = "Please check all boxes to continue";
    if (!data.signatureDataUrl) e.sig = "Signature is required";
    if (!data.signedName.trim()) e.signedName = "Please type your full name";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-2">Step 2 of 3</p>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">Waiver &amp; Release of Liability</h2>
        <p className="text-sm text-muted-foreground">Please read the full waiver carefully before signing.</p>
      </div>

      <div className="border border-border">
        <div className="bg-muted/30 px-6 py-3 border-b border-border">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Fly Fishing Guide School · Bryson City, NC · Est. 1987
          </p>
        </div>
        <div className="p-6 max-h-80 overflow-y-auto space-y-5 text-sm leading-relaxed">
          {waiverSections.map(s => (
            <div key={s.title}>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground mb-2 pb-1 border-b border-border">
                {s.title}
              </h4>
              <p className="text-muted-foreground font-light">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-muted/20 px-6 py-2 border-t border-border">
          <p className="text-[11px] text-muted-foreground text-center">↑ Scroll to read the full waiver before signing</p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 px-4 py-3 text-xs text-amber-800 leading-relaxed">
        ⚠️ <strong>This is a legally binding document.</strong> Do not sign unless you have read and fully understand all terms above.
      </div>

      <div className="border border-border p-6">
        <label className="flex items-center gap-3 cursor-pointer text-sm font-medium text-foreground">
          <input type="checkbox" checked={data.hasMinor}
            onChange={e => onChange({ hasMinor: e.target.checked })}
            className="w-4 h-4 accent-primary" />
          I am signing on behalf of a minor participant (under 18)
        </label>
        {data.hasMinor && (
          <div className="mt-4 pt-4 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Minor's First Name">
              <input className={inputCls()} value={data.minorFirstName} onChange={e => onChange({ minorFirstName: e.target.value })} />
            </Field>
            <Field label="Minor's Last Name">
              <input className={inputCls()} value={data.minorLastName} onChange={e => onChange({ minorLastName: e.target.value })} />
            </Field>
            <Field label="Minor's Date of Birth">
              <input type="date" className={inputCls()} value={data.minorDob} onChange={e => onChange({ minorDob: e.target.value })} />
            </Field>
            <Field label="Your Relationship">
              <select className={inputCls()} value={data.guardianRelationship} onChange={e => onChange({ guardianRelationship: e.target.value })}>
                <option value="">Select…</option>
                <option>Parent</option>
                <option>Legal Guardian</option>
              </select>
            </Field>
          </div>
        )}
      </div>

      <div className={`border p-6 ${errors.sig ? "border-destructive" : "border-border"}`}>
        <h3 className="font-serif text-lg font-bold text-foreground mb-1">
          Your Signature <span className="text-destructive">*</span>
        </h3>
        <p className="text-xs text-muted-foreground mb-4">Sign using your mouse, finger, or stylus.</p>
        <div className="border border-border bg-white overflow-hidden relative">
          <canvas
            ref={canvasRef}
            style={{ display: "block", cursor: "crosshair", touchAction: "none" }}
            onMouseDown={onMouseDown} onMouseMove={onMouseMove}
            onMouseUp={() => setDrawing(false)} onMouseLeave={() => setDrawing(false)}
            onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={() => setDrawing(false)}
          />
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground/40 uppercase tracking-widest pointer-events-none whitespace-nowrap">
            Sign here
          </span>
        </div>
        <div className="flex justify-end mt-2">
          <button onClick={clearSig}
            className="text-xs text-muted-foreground border border-border px-3 py-1 hover:border-foreground transition-colors">
            Clear
          </button>
        </div>
        {errors.sig && <p className="text-[11px] text-destructive mt-1">{errors.sig}</p>}
      </div>

      <Field label="Type your full legal name to confirm" required error={errors.signedName}>
        <input className={inputCls(errors.signedName)} placeholder={participantName || "Full name"}
          value={data.signedName} onChange={e => onChange({ signedName: e.target.value })} />
      </Field>

      <div className={`border p-6 space-y-4 ${errors.agree ? "border-destructive" : "border-border"}`}>
        <h3 className="font-serif text-lg font-bold text-foreground pb-3 border-b border-border">Confirm &amp; Agree</h3>
        {[
          { key: "waiverSigned" as const, label: "I have read and fully understand the Waiver and Release of Liability above." },
          { key: "assumeRisk"   as const, label: "I voluntarily assume all risks associated with participating in Fly Fishing Guide School training and activities." },
          { key: "photoRelease" as const, label: "I grant Fly Fishing Guide School permission to use my image or likeness for promotional purposes." },
        ].map(a => (
          <label key={a.key} className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" checked={data[a.key]}
              onChange={e => onChange({ [a.key]: e.target.checked })}
              className="w-4 h-4 accent-primary mt-0.5 shrink-0" />
            <span className="text-sm text-foreground leading-relaxed">{a.label}</span>
          </label>
        ))}
        {errors.agree && <p className="text-[11px] text-destructive">{errors.agree}</p>}
      </div>

      <div className="flex gap-3">
        <button onClick={onBack}
          className="flex-1 border border-border text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-muted/30 transition-colors">
          ← Back
        </button>
        <button
          onClick={() => { if (validate()) onNext(); }}
          className="flex-[2] inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary/90 transition-colors"
        >
          Continue to Payment <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

function PaymentStep({
  onBack, participantName, submitting, submitError, onPay, pricing,
}: {
  onBack: () => void;
  participantName: string;
  submitting: boolean;
  submitted: boolean;
  submitError: string;
  onPay: (link: string, method: string) => void;
  pricing: ScheduleData["pricing"];
}) {
  const [method, setMethod] = useState<"card-full" | "card-half" | "venmo" | "zelle" | "check" | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-2">Step 3 of 3</p>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">Secure Your Spot</h2>
        <p className="text-sm text-muted-foreground">
          Your reservation and signed waiver have been recorded. Choose how you&apos;d like to pay your deposit below.
        </p>
      </div>

      {submitError && (
        <div className="bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      )}

      <div className="border border-border p-6 bg-muted/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
            <Check size={16} className="text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Reservation received for {participantName}</p>
            <p className="text-xs text-muted-foreground">Waiver signed &amp; on file</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-4">
          School tuition is <strong>{pricing.guideSchool.fullDisplay}</strong> and includes all food and lodging for the week. A 50% deposit holds your spot — remainder due 30 days before your school date.
        </p>
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-3">Pay by Credit / Debit Card</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className={`border p-6 flex flex-col gap-4 transition-colors ${method === "card-full" ? "border-primary" : "border-border"}`}>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-1">Full Payment</p>
              <p className="font-serif text-2xl font-bold text-foreground">{pricing.guideSchool.fullDisplay}</p>
              <p className="text-xs text-muted-foreground mt-1">Pay in full today — nothing more due later.</p>
            </div>
            <button
              onClick={() => onPay(SWIPE_FULL, `Card — Full ${pricing.guideSchool.fullDisplay}`)}
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {submitting ? "Saving…" : "Pay Full Amount"} <ArrowRight size={13} />
            </button>
          </div>

          <div className={`border p-6 flex flex-col gap-4 transition-colors ${method === "card-half" ? "border-primary" : "border-border"}`}>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-1">Half Deposit</p>
              <p className="font-serif text-2xl font-bold text-foreground">{pricing.guideSchool.halfDisplay}</p>
              <p className="text-xs text-muted-foreground mt-1">Balance of {pricing.guideSchool.halfDisplay} due 30 days before school.</p>
            </div>
            <button
              onClick={() => onPay(SWIPE_HALF, `Card — Half ${pricing.guideSchool.halfDisplay}`)}
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-muted/30 transition-colors disabled:opacity-50"
            >
              {submitting ? "Saving…" : "Pay Half Deposit"} <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-3">Pay by Venmo or Zelle</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className={`border p-6 space-y-3 cursor-pointer transition-colors ${method === "venmo" ? "border-primary" : "border-border hover:border-primary/50"}`}
            onClick={() => setMethod(m => m === "venmo" ? null : "venmo")}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-1">Venmo</p>
                <p className="font-serif text-lg font-bold text-foreground">@James-Brown3656</p>
              </div>
              <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors ${method === "venmo" ? "bg-primary border-primary" : "border-border"}`}>
                {method === "venmo" && <Check size={10} className="text-primary-foreground" />}
              </div>
            </div>
            {method === "venmo" && (
              <div className="pt-3 border-t border-border space-y-2 text-xs text-muted-foreground leading-relaxed">
                <p>Send <strong className="text-foreground">{pricing.guideSchool.halfDisplay} (half)</strong> or <strong className="text-foreground">{pricing.guideSchool.fullDisplay} (full)</strong> to <strong className="text-foreground">@James-Brown3656</strong> on Venmo.</p>
                <p>In the note include your <strong className="text-foreground">full name</strong> and <strong className="text-foreground">school month</strong>.</p>
                <a href="https://venmo.com/James-Brown-3656" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline font-medium">
                  Open Venmo <ArrowRight size={11} />
                </a>
                <button
                  onClick={(e) => { e.stopPropagation(); onPay("venmo", "Venmo — pending"); }}
                  disabled={submitting}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3 hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {submitting ? "Saving…" : "I've sent my Venmo payment"} <ArrowRight size={13} />
                </button>
              </div>
            )}
          </div>

          <div className={`border p-6 space-y-3 cursor-pointer transition-colors ${method === "zelle" ? "border-primary" : "border-border hover:border-primary/50"}`}
            onClick={() => setMethod(m => m === "zelle" ? null : "zelle")}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-1">Zelle</p>
                <p className="font-serif text-lg font-bold text-foreground">Fly Fishing Guide School</p>
              </div>
              <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors ${method === "zelle" ? "bg-primary border-primary" : "border-border"}`}>
                {method === "zelle" && <Check size={10} className="text-primary-foreground" />}
              </div>
            </div>
            {method === "zelle" && (
              <div className="pt-3 border-t border-border space-y-2 text-xs text-muted-foreground leading-relaxed">
                <p>Send <strong className="text-foreground">{pricing.guideSchool.halfDisplay} (half)</strong> or <strong className="text-foreground">{pricing.guideSchool.fullDisplay} (full)</strong> via Zelle. Search by phone <a href="tel:+18287361469" className="font-bold text-foreground hover:text-primary transition-colors">(828) 736-1469</a> — account name: <strong className="text-foreground">Fly Fishing Guide School</strong>.</p>
                <p>In the memo include your <strong className="text-foreground">full name</strong> and <strong className="text-foreground">school month</strong>.</p>
                <button
                  onClick={(e) => { e.stopPropagation(); onPay("zelle", "Zelle — pending"); }}
                  disabled={submitting}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3 hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {submitting ? "Saving…" : "I've sent my Zelle payment"} <ArrowRight size={13} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-3">Pay by Check or Money Order</p>
        <div className={`border p-6 space-y-3 cursor-pointer transition-colors ${method === "check" ? "border-primary" : "border-border hover:border-primary/50"}`}
          onClick={() => setMethod(m => m === "check" ? null : "check")}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-1">Check / Money Order</p>
              <p className="font-serif text-lg font-bold text-foreground">Mail to Bryson City, NC</p>
            </div>
            <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors ${method === "check" ? "bg-primary border-primary" : "border-border"}`}>
              {method === "check" && <Check size={10} className="text-primary-foreground" />}
            </div>
          </div>
          {method === "check" && (
            <div className="pt-3 border-t border-border space-y-3 text-xs text-muted-foreground leading-relaxed">
              <p>Make check or money order payable to <strong className="text-foreground">Fly Fishing Guide School</strong> for <strong className="text-foreground">{pricing.guideSchool.halfDisplay} (half)</strong> or <strong className="text-foreground">{pricing.guideSchool.fullDisplay} (full)</strong>.</p>
              <div className="bg-muted/40 border border-border p-4 font-mono text-xs text-foreground leading-loose">
                Fly Fishing Guide School<br />
                779 West Deep Creek Rd<br />
                Bryson City, NC 28713
              </div>
              <p>Include your <strong className="text-foreground">full name</strong> and <strong className="text-foreground">school month</strong> in the memo line. Your spot is reserved once your check is received.</p>
              <button
                onClick={(e) => { e.stopPropagation(); onPay("check", "Check — pending receipt"); }}
                disabled={submitting}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3 hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {submitting ? "Saving…" : "I'm mailing my check"} <ArrowRight size={13} />
              </button>
            </div>
          )}
        </div>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        Questions? Call <a href="tel:+18287361469" className="text-primary hover:underline">(828) 736-1469</a> or email{" "}
        <a href="mailto:flyfishingguideschool@gmail.com" className="text-primary hover:underline">flyfishingguideschool@gmail.com</a>
      </p>

      <button onClick={onBack}
        className="w-full border border-border text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-3 hover:bg-muted/30 transition-colors">
        ← Back to Waiver
      </button>
    </div>
  );
}

function SuccessScreen({ name }: { name: string }) {
  return (
    <div className="text-center py-12 space-y-6">
      <div className="text-5xl">🎣</div>
      <div>
        <h2 className="font-serif text-3xl font-bold text-foreground mb-3">You&apos;re enrolled, {name.split(" ")[0]}!</h2>
        <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
          Your reservation, signed waiver, and payment have been received. You&apos;ll hear from us shortly with confirmation details and a packing list.
        </p>
      </div>
      <div className="border border-border p-6 max-w-sm mx-auto text-left space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Contact Us</p>
        <p className="text-sm font-medium text-foreground">Fly Fishing Guide School</p>
        <p className="text-sm text-muted-foreground">779 West Deep Creek Rd · Bryson City, NC 28713</p>
        <a href="tel:+18287361469" className="text-sm text-primary hover:underline block">(828) 736-1469</a>
        <a href="mailto:flyfishingguideschool@gmail.com" className="text-sm text-primary hover:underline block">flyfishingguideschool@gmail.com</a>
      </div>
    </div>
  );
}

const defaultReservation: ReservationData = {
  enrollmentTrack: "",
  firstName: "", lastName: "", email: "", phone: "",
  streetAddress: "", cityStateZip: "",
  schoolMonth: "", medicalConditions: "", flyfishingJourney: "",
  expectations: "", castingLevel: 0, rowingLevel: 0,
  favoriteTechniques: [], emergencyContactName: "",
  emergencyContactPhone: "", heardAboutUs: "", attendingFor: "",
};

const defaultWaiver: WaiverData = {
  waiverSigned: false, assumeRisk: false, photoRelease: false,
  hasMinor: false, minorFirstName: "", minorLastName: "",
  minorDob: "", guardianRelationship: "",
  signedName: "", signatureDataUrl: "",
};

export default function ReservationForm() {
  const { guideSchoolSessions, pricing, blockedDates } = useSchedule();
  const [step, setStep] = useState<Step>(0);
  const [reservation, setReservation] = useState<ReservationData>(defaultReservation);
  const [waiver, setWaiver] = useState<WaiverData>(defaultWaiver);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [complete, setComplete] = useState(false);

  const participantName = `${reservation.firstName} ${reservation.lastName}`.trim();

  useEffect(() => {
    if (step === 1 && !waiver.signedName && participantName) {
      setWaiver(w => ({ ...w, signedName: participantName }));
    }
  }, [step, participantName, waiver.signedName]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handlePay = async (paymentLink: string, paymentMethod: string) => {
    setSubmitting(true);
    setSubmitError("");

    const isCard = paymentLink.startsWith("https://swipesimple.com");

    const trackLabel = reservation.enrollmentTrack === "career"
      ? "Professional Career Development — Fly Fishing Guide School"
      : reservation.enrollmentTrack === "recreational"
        ? "Recreational Angler School — Smoky Mountain Fly Fishing School"
        : "";

    const payload = {
      timestamp:            new Date().toISOString(),
      enrollmentTrack:      trackLabel,
      firstName:            reservation.firstName,
      lastName:             reservation.lastName,
      email:                reservation.email,
      phone:                reservation.phone,
      streetAddress:        reservation.streetAddress,
      cityStateZip:         reservation.cityStateZip,
      schoolMonth:          reservation.schoolMonth,
      attendingFor:         reservation.attendingFor,
      heardAboutUs:         reservation.heardAboutUs,
      medicalConditions:    reservation.medicalConditions,
      emergencyContact:     reservation.emergencyContactName,
      emergencyPhone:       reservation.emergencyContactPhone,
      flyfishingJourney:    reservation.flyfishingJourney,
      expectations:         reservation.expectations,
      castingLevel:         reservation.castingLevel,
      rowingLevel:          reservation.rowingLevel,
      favoriteTechniques:   reservation.favoriteTechniques.join(", "),
      waiverSigned:         waiver.waiverSigned,
      assumeRisk:           waiver.assumeRisk,
      photoRelease:         waiver.photoRelease,
      signedName:           waiver.signedName,
      hasMinor:             waiver.hasMinor,
      minorName:            waiver.hasMinor ? `${waiver.minorFirstName} ${waiver.minorLastName}` : "",
      minorDob:             waiver.minorDob,
      guardianRelationship: waiver.guardianRelationship,
      depositType:          paymentMethod,
      paymentStatus:        isCard ? "Pending — card" : "Pending — awaiting receipt",
    };

    try {
      const res = await fetch(RESERVATION_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({})) as { error?: string };
        throw new Error(body.error ?? "Server error");
      }
      setSubmitted(true);
      setComplete(true);
      scrollTop();
      if (isCard) {
        window.open(paymentLink, "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong saving your form. Please try again or call (828) 736-1469."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (complete) {
    return (
      <div className="w-full pt-24 pb-28">
        <div className="max-w-2xl mx-auto px-6">
          <SuccessScreen name={participantName} />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <section className="pt-32 pb-12 border-b border-border">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Bryson City, NC · Est. 1987
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            Reserve Your Spot
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            Complete your reservation, sign the waiver, and pay your deposit — all in one place. Schools fill months in advance.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <StepIndicator current={step} />

          {step === 0 && (
            <ReservationStep
              data={reservation}
              onChange={p => setReservation(r => ({ ...r, ...p }))}
              onNext={() => { setStep(1); scrollTop(); }}
              pricing={pricing}
              guideSchoolSessions={guideSchoolSessions}
              blockedDates={blockedDates}
            />
          )}
          {step === 1 && (
            <WaiverStep
              data={waiver}
              onChange={p => setWaiver(w => ({ ...w, ...p }))}
              onNext={() => { setStep(2); scrollTop(); }}
              onBack={() => { setStep(0); scrollTop(); }}
              participantName={participantName}
            />
          )}
          {step === 2 && (
            <PaymentStep
              onBack={() => { setStep(1); scrollTop(); }}
              participantName={participantName}
              submitting={submitting}
              submitted={submitted}
              submitError={submitError}
              onPay={handlePay}
              pricing={pricing}
            />
          )}
        </div>
      </section>
    </div>
  );
}
