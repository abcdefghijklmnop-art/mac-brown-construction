"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/asset";

interface Agreements { readWaiver: boolean; assumeRisk: boolean; photoRelease: boolean; }
interface Booking { firstName?: string; lastName?: string; email?: string; phone?: string; anglers?: number; programs?: string[]; }
interface Participant { name: string; email: string; }

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export default function Waiver() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [hasSig, setHasSig] = useState(false);
  const [hasMinor, setHasMinor] = useState(false);
  const [agreements, setAgreements] = useState<Agreements>({ readWaiver: false, assumeRisk: false, photoRelease: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sentTo, setSentTo] = useState<string[]>([]);
  const router = useRouter();

  const [booking] = useState<Booking>(() => {
    if (typeof window === "undefined") return {};
    try { return JSON.parse(localStorage.getItem("mbff_booking") || "{}"); } catch { return {}; }
  });
  const hasReservation = Boolean(
    typeof window !== "undefined" &&
    localStorage.getItem("mbff_reservation_ready") === "true" &&
    booking.firstName?.trim() &&
    booking.lastName?.trim() &&
    isValidEmail(booking.email || "") &&
    isValidPhone(booking.phone || "") &&
    booking.programs?.length
  );

  const extraCount = Math.max(0, (booking.anglers ?? 1) - 1);
  const [form, setForm] = useState({ firstName: booking.firstName || "", lastName: booking.lastName || "", email: booking.email || "", phone: booking.phone || "", minorFirstName: "", minorLastName: "", minorDob: "", guardianRelationship: "" });
  const [participants, setParticipants] = useState<Participant[]>(() => Array.from({ length: extraCount }, () => ({ name: "", email: "" })));

  useEffect(() => {
    if (!success) return;
    const t = setTimeout(() => router.push("/payment"), 3000);
    return () => clearTimeout(t);
  }, [success, router]);

  useEffect(() => {
    if (!hasReservation) router.replace("/reserve");
  }, [hasReservation, router]);

  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current; if (!canvas) return;
      const parent = canvas.parentElement!;
      const dpr = window.devicePixelRatio || 1;
      const w = parent.clientWidth; const h = 160;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d")!;
      ctx.scale(dpr, dpr); ctx.strokeStyle = "#1E3D2F"; ctx.lineWidth = 2; ctx.lineCap = "round"; ctx.lineJoin = "round";
    };
    resize(); window.addEventListener("resize", resize); return () => window.removeEventListener("resize", resize);
  }, []);

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current!; const rect = canvas.getBoundingClientRect();
    const src = "touches" in e ? e.touches[0] : e;
    return { x: src.clientX - rect.left, y: src.clientY - rect.top };
  };
  const ctx = () => canvasRef.current?.getContext("2d")!;
  const onMouseDown = (e: React.MouseEvent) => { setDrawing(true); const p = getPos(e); ctx().beginPath(); ctx().moveTo(p.x, p.y); };
  const onMouseMove = (e: React.MouseEvent) => { if (!drawing) return; const p = getPos(e); ctx().lineTo(p.x, p.y); ctx().stroke(); setHasSig(true); };
  const onTouchStart = (e: React.TouchEvent) => { e.preventDefault(); setDrawing(true); const p = getPos(e); ctx().beginPath(); ctx().moveTo(p.x, p.y); };
  const onTouchMove = (e: React.TouchEvent) => { e.preventDefault(); if (!drawing) return; const p = getPos(e); ctx().lineTo(p.x, p.y); ctx().stroke(); setHasSig(true); };
  const clearSig = () => { const canvas = canvasRef.current!; ctx().clearRect(0, 0, canvas.width, canvas.height); setHasSig(false); };
  const updateParticipant = (i: number, field: keyof Participant, value: string) => setParticipants(prev => prev.map((p, idx) => idx === i ? { ...p, [field]: value } : p));

  const handleSubmit = async () => {
    const newErrors: Record<string, string> = {};
    if (!form.firstName.trim()) newErrors.firstName = "Required";
    if (!form.lastName.trim()) newErrors.lastName = "Required";
    if (!isValidEmail(form.email)) newErrors.email = "Valid email required";
    if (!isValidPhone(form.phone)) newErrors.phone = "Valid cell phone number required";
    if (!hasSig) newErrors.sig = "Signature is required";
    if (!agreements.readWaiver || !agreements.assumeRisk || !agreements.photoRelease) newErrors.agree = "Please check all boxes to continue";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setSubmitting(true);
    try {
      const res = await fetch(api("/waiver"), { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: form.firstName, lastName: form.lastName, email: form.email.trim(), phone: form.phone.trim(), programs: booking.programs || [], hasMinor, minorFirstName: form.minorFirstName, minorLastName: form.minorLastName, minorDob: form.minorDob, guardianRelationship: form.guardianRelationship, additionalParticipants: participants.filter(p => p.name.trim()), signature: canvasRef.current!.toDataURL("image/png"), agreements, timestamp: new Date().toISOString(), siteUrl: window.location.origin }) });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("mbff_waiver_signed", "true");
        setSentTo(data.invitesSent || []); setSuccess(true); window.scrollTo({ top: 0, behavior: "smooth" });
      }
      else { throw new Error(data.error || "Submission failed"); }
    } catch { alert("Something went wrong. Please try again or contact us directly."); }
    finally { setSubmitting(false); }
  };

  const fieldProps = (key: keyof typeof form) => ({ value: form[key], onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm(f => ({ ...f, [key]: e.target.value })) });

  const c = { forest: "#1E3D2F", moss: "#2E5E44", fern: "#4A8C63", stone: "#F2EDE6", cream: "#FDFAF6", bark: "#3D2B1F", gold: "#B8892A", mist: "#E8F0EC", err: "#C0392B", gray: "#7A8C80" };
  const inputStyle = (errKey?: string): React.CSSProperties => ({ fontFamily: "inherit", fontSize: "0.9rem", color: c.bark, background: "white", border: `1.5px solid ${errors[errKey || ""] ? c.err : "rgba(46,94,68,0.25)"}`, borderRadius: 6, padding: "0.6rem 0.875rem", outline: "none", width: "100%" });

  if (!hasReservation) {
    return (
      <div style={{ background: c.stone, minHeight: "100vh", padding: "6rem 1rem 4rem" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", background: c.cream, border: "1px solid rgba(46,94,68,0.2)", borderRadius: 8, padding: "3rem 2rem", textAlign: "center" }}>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "1.7rem", color: c.forest, marginBottom: "0.75rem" }}>Start with a Reservation</h1>
          <p style={{ fontSize: "0.9rem", color: c.gray, lineHeight: 1.6, marginBottom: "1.5rem" }}>Please complete the reservation form before signing a waiver. Your waiver will be connected to your reservation and payment.</p>
          <button onClick={() => router.replace("/reserve")} style={{ fontFamily: "inherit", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "white", background: c.forest, border: "none", borderRadius: 6, padding: "0.9rem 1.5rem", cursor: "pointer" }}>Begin Reservation</button>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div style={{ background: c.stone, minHeight: "100vh", padding: "2rem 1rem 4rem", paddingTop: "6rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ background: c.cream, border: `1px solid rgba(46,94,68,0.2)`, borderRadius: 8, padding: "4rem 2rem", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎣</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.6rem", color: c.forest, marginBottom: "0.75rem" }}>Waiver signed!</h2>
            {sentTo.length > 0 && <p style={{ fontSize: "0.875rem", color: c.moss, lineHeight: 1.6, marginBottom: "1rem" }}>Waiver invitations sent to: <strong>{sentTo.join(", ")}</strong></p>}
            <p style={{ fontSize: "0.9rem", color: c.gray, lineHeight: 1.6, marginBottom: "1.5rem" }}>Taking you to payment options…</p>
            <p style={{ fontSize: "0.75rem", color: c.gray, letterSpacing: "0.08em" }}>Step 3 of 3 — Payment</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: c.stone, minHeight: "100vh", padding: "2rem 1rem 4rem", paddingTop: "6rem" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ textAlign: "center", paddingBottom: "2rem", borderBottom: `2px solid ${c.forest}`, marginBottom: "2.5rem" }}>
          <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: c.fern, marginBottom: "0.6rem" }}>Mac Brown Fly Fish · Bryson City, NC</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", fontWeight: 400, color: c.forest, lineHeight: 1.2 }}>Participation Waiver<br />&amp; Release of Liability</h1>
          <p style={{ fontSize: "0.875rem", color: c.gray, marginTop: "0.5rem", fontWeight: 300 }}>Please read carefully and sign before your outing.</p>
        </div>

        <div style={{ background: c.cream, border: `1px solid rgba(46,94,68,0.2)`, borderRadius: 8, padding: "2rem", marginBottom: "1rem", maxHeight: 380, overflowY: "auto" }}>
          {[
            { title: "Assumption of Risk", text: "Fly fishing takes place in an outdoor wilderness environment. I understand that inherent risks exist, including but not limited to bodily injury, illness, fractures, and in extreme cases death. These risks may result from weather, terrain, equipment use, the actions of others, or forces of nature. I voluntarily assume all such risks." },
            { title: "Release of Liability", text: "I hereby release, waive, and hold harmless Mac Brown Fly Fish, its officers, employees, volunteers, and agents from any and all claims arising from bodily injury, property damage, or wrongful death — including those caused by negligence. Any disputes shall be resolved in Swain County, North Carolina." },
              { title: "Cancellation & Payment Policy", text: "Payment in full is required at the time of booking to hold your date. Weather and emergencies — we will always work with you. Dates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance at the time of reservation. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you." },
            { title: "Minor Participants", text: "As parent or legal guardian of a participant under 18, I sign on their behalf and authorize MBFF staff to seek emergency medical treatment if needed. All medical expenses are the sole responsibility of the participant." },
            { title: "Participant Agreement", text: "I agree to follow all staff instructions and rules. I will not consume alcohol or any substance that impairs my senses before or during activities. I will wear all required safety equipment. I confirm I am physically and mentally capable of participating." },
            { title: "Photo & Image Release", text: "I grant Mac Brown Fly Fish permission to use my image or likeness for promotional purposes." },
          ].map(s => (
            <div key={s.title} style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: c.forest, marginBottom: "0.6rem", paddingBottom: "0.4rem", borderBottom: `1px solid ${c.mist}` }}>{s.title}</h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#4A3F35", fontWeight: 300 }}>{s.text}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: "0.72rem", color: c.gray, marginBottom: "1.5rem" }}>↑ Scroll to read the full waiver above before signing</p>
        <div style={{ background: "#FEF9EC", border: "1px solid rgba(184,137,42,0.3)", borderRadius: 6, padding: "0.875rem 1rem", fontSize: "0.8rem", color: "#7A5A10", marginBottom: "1.5rem", lineHeight: 1.5 }}>
          ⚠️ <strong>This is a legal document.</strong> Do not sign unless you fully understand and agree to all terms above.
        </div>

        <div style={{ background: c.cream, border: `1px solid rgba(46,94,68,0.2)`, borderRadius: 8, padding: "2rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: 500, color: c.forest, marginBottom: "0.4rem", paddingBottom: "0.75rem", borderBottom: `1px solid ${c.mist}` }}>Signer's Name</h2>
          <p style={{ fontSize: "0.8rem", color: c.gray, marginBottom: "1.25rem" }}>Confirm your name as it should appear on this waiver.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {([["firstName", "First Name"], ["lastName", "Last Name"]] as const).map(([key, label]) => (
              <div key={key} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <label style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: c.forest }}>{label} <span style={{ color: c.err }}>*</span></label>
                <input type="text" placeholder={label.split(" ")[0]} style={inputStyle(key)} {...fieldProps(key)} />
                {errors[key] && <span style={{ fontSize: "0.72rem", color: c.err }}>{errors[key]}</span>}
              </div>
            ))}
            {([["email", "Email"], ["phone", "Cell Phone"]] as const).map(([key, label]) => (
              <div key={key} style={{ display: "flex", flexDirection: "column", gap: 5, marginTop: "1rem" }}>
                <label style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: c.forest }}>{label} <span style={{ color: c.err }}>*</span></label>
                <input type={key === "email" ? "email" : "tel"} placeholder={key === "email" ? "you@example.com" : "(828) 736-1469"} style={inputStyle(key)} {...fieldProps(key)} />
                {errors[key] && <span style={{ fontSize: "0.72rem", color: c.err }}>{errors[key]}</span>}
              </div>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem", background: c.mist, borderRadius: 6, padding: "1rem" }}>
            <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: "0.875rem", color: c.bark }}>
              <input type="checkbox" checked={hasMinor} onChange={e => setHasMinor(e.target.checked)} style={{ width: 18, height: 18, accentColor: c.forest, flexShrink: 0 }} />
              I am signing on behalf of a minor participant (under 18)
            </label>
            {hasMinor && (
              <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: `1px solid rgba(46,94,68,0.15)`, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[{ label: "Minor's First Name", key: "minorFirstName", type: "text" }, { label: "Minor's Last Name", key: "minorLastName", type: "text" }, { label: "Minor's Date of Birth", key: "minorDob", type: "date" }].map(f => (
                  <div key={f.key} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    <label style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: c.forest }}>{f.label} <span style={{ color: c.err }}>*</span></label>
                    <input type={f.type} style={inputStyle()} {...fieldProps(f.key as keyof typeof form)} />
                  </div>
                ))}
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <label style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: c.forest }}>Your Relationship</label>
                  <select style={inputStyle()} {...fieldProps("guardianRelationship")}><option value="">Select…</option><option>Parent</option><option>Legal Guardian</option></select>
                </div>
              </div>
            )}
          </div>
        </div>

        {extraCount > 0 && (
          <div style={{ background: c.cream, border: `1px solid rgba(46,94,68,0.2)`, borderRadius: 8, padding: "2rem", marginBottom: "1.5rem" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: 500, color: c.forest, paddingBottom: "0.75rem", borderBottom: `1px solid ${c.mist}`, marginBottom: "0.4rem" }}>Additional Participants</h2>
            <p style={{ fontSize: "0.8rem", color: c.gray, marginBottom: "1.25rem", lineHeight: 1.6 }}>Your booking is for <strong>{booking.anglers} people</strong>. Each participant must sign their own waiver. Enter their names below — anyone with an email address will receive a link to sign online.</p>
            {participants.map((p, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "0.875rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <label style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: c.forest }}>Participant {i + 2} — Full Name</label>
                  <input type="text" placeholder="Full name" value={p.name} onChange={e => updateParticipant(i, "name", e.target.value)} style={inputStyle()} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <label style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: c.forest }}>Email (optional)</label>
                  <input type="email" placeholder="their@email.com" value={p.email} onChange={e => updateParticipant(i, "email", e.target.value)} style={inputStyle()} />
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ background: c.cream, border: `1px solid ${errors.sig ? c.err : "rgba(46,94,68,0.2)"}`, borderRadius: 8, padding: "2rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: 500, color: c.forest, marginBottom: "0.4rem" }}>Your Signature <span style={{ color: c.err }}>*</span></h2>
          <p style={{ fontSize: "0.8rem", color: c.gray, marginBottom: "1rem" }}>Sign below using your mouse, finger, or stylus.</p>
          <div style={{ border: `1.5px solid rgba(46,94,68,0.3)`, borderRadius: 6, background: "white", overflow: "hidden", position: "relative" }}>
            <canvas ref={canvasRef} style={{ display: "block", cursor: "crosshair", touchAction: "none" }}
              onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={() => setDrawing(false)} onMouseLeave={() => setDrawing(false)}
              onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={() => setDrawing(false)} />
            <span style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", fontSize: "0.7rem", color: "rgba(0,0,0,0.2)", letterSpacing: "0.1em", textTransform: "uppercase", pointerEvents: "none", whiteSpace: "nowrap" }}>Sign here</span>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "0.5rem" }}>
            <button onClick={clearSig} style={{ fontFamily: "inherit", fontSize: "0.75rem", color: c.gray, background: "none", border: "1px solid rgba(0,0,0,0.15)", borderRadius: 4, padding: "4px 12px", cursor: "pointer" }}>Clear signature</button>
          </div>
          {errors.sig && <span style={{ fontSize: "0.72rem", color: c.err, marginTop: 4, display: "block" }}>{errors.sig}</span>}
        </div>

        <div style={{ background: c.cream, border: `1px solid rgba(46,94,68,0.2)`, borderRadius: 8, padding: "2rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: 500, color: c.forest }}>Confirm &amp; Agree</h2>
          {[
            { key: "readWaiver" as const, label: "I have read and fully understand the waiver and release of liability above." },
            { key: "assumeRisk" as const, label: "I voluntarily assume all risks associated with participating in fly fishing activities with Mac Brown Fly Fish." },
            { key: "photoRelease" as const, label: "I grant Mac Brown Fly Fish permission to use my image or likeness for promotional purposes." },
          ].map(a => (
            <label key={a.key} style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer" }}>
              <input type="checkbox" checked={agreements[a.key]} onChange={e => setAgreements(ag => ({ ...ag, [a.key]: e.target.checked }))} style={{ width: 18, height: 18, accentColor: c.forest, flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: "0.875rem", color: c.bark, lineHeight: 1.5 }}>{a.label}</span>
            </label>
          ))}
          {errors.agree && <span style={{ fontSize: "0.72rem", color: c.err }}>{errors.agree}</span>}
        </div>

        <button onClick={handleSubmit} disabled={submitting} style={{ width: "100%", fontFamily: "inherit", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "white", background: submitting ? c.gray : c.forest, border: "none", borderRadius: 6, padding: "1rem", cursor: submitting ? "not-allowed" : "pointer" }}>
          {submitting ? "Submitting…" : "Sign & Submit Waiver"}
        </button>
      </div>
    </div>
  );
}
