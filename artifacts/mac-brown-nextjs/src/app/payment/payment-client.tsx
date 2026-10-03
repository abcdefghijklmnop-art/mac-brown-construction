"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, CheckCircle, Loader2, Phone } from "lucide-react";
import { programs } from "@workspace/schedule";
import { img, api } from "@/lib/asset";

interface BookingSummary {
  programs: string[]; programIds?: string[]; anglers: number; total: number;
  firstName: string; lastName: string; email: string; phone: string;
  datePreference?: string;
}

const VENMO_HANDLE = "@James-Brown-3656";
const VENMO_URL = "https://venmo.com/James-Brown-3656";
const ZELLE_NAME = "James Brown";
const ZELLE_ID = "28713flyfishingguideschool";

function fmt(n: number) { return "$" + Number(n).toLocaleString(); }

export default function Payment() {
  const [booking, setBooking] = useState<BookingSummary | null>(null);
  const [method, setMethod] = useState<string | null>(null);
  const [notifying, setNotifying] = useState(false);
  const [notified, setNotified] = useState<string | null>(null);
  const [cardClicked, setCardClicked] = useState(false);

  const [waiverChecked, setWaiverChecked] = useState(false);
  const [waiverBlocked, setWaiverBlocked] = useState(false);

  useEffect(() => {
    let raw: string | null = null;
    try { raw = localStorage.getItem("mbff_booking"); if (raw) setBooking(JSON.parse(raw)); } catch {}

    // Parse email from booking so we can do a server-side waiver check
    let emailFromStorage = "";
    try { emailFromStorage = raw ? (JSON.parse(raw) as BookingSummary).email : ""; } catch {}

    if (!emailFromStorage) {
      // No booking in storage at all — send to waiver (they likely came directly)
      window.location.replace("/waiver-release");
      return;
    }

    // Server-side check: did they actually sign the waiver in the sheet?
    fetch(api(`/waiver-status?email=${encodeURIComponent(emailFromStorage)}`))
      .then(r => r.json())
      .then((data: { signed: boolean }) => {
        if (!data.signed) {
          setWaiverBlocked(true);
        }
        setWaiverChecked(true);
      })
      .catch(() => {
        // If the check itself fails (network error), fall back to localStorage
        const localSigned = localStorage.getItem("mbff_waiver_signed");
        if (!localSigned) {
          window.location.replace("/waiver-release");
        } else {
          setWaiverChecked(true);
        }
      });
  }, []);

  const total = booking?.total ?? 0;
  const totalFormatted = total > 0 ? fmt(total) : "—";

  const cardLink = useMemo(() => {
    const ids = booking?.programIds ?? [];
    const matched = programs.filter(p => ids.includes(p.id));
    return matched.map(p => (p as any).cardLink).find(Boolean) ?? null;
  }, [booking]);

  // Fires silently when a widget is expanded — writes full row to sheet at payment step
  function recordMethodIntent(selectedMethod: string) {
    if (!booking?.email) return;
    fetch(api("/payment-method-intent"), { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: booking.email,
        method: selectedMethod,
        firstName: booking.firstName,
        lastName: booking.lastName,
        phone: booking.phone,
        programs: booking.programs,
        anglers: booking.anglers,
        total: booking.total,
        datePreference: booking.datePreference ?? "",
      }) }).catch(() => {});
  }

  async function sendNotification(selectedMethod: string) {
    if (!booking || notifying || notified === selectedMethod) return;
    setNotifying(true);
    try {
      await fetch(api("/payment-notify"), { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: booking.firstName, lastName: booking.lastName, email: booking.email, method: selectedMethod, programs: booking.programs, total: booking.total, anglers: booking.anglers }) });
      setNotified(selectedMethod);
    } catch {} finally { setNotifying(false); }
  }

  function NotifyButton({ m }: { m: string }) {
    const done = notified === m;
    return (
      <div className="pt-2" onClick={e => e.stopPropagation()}>
        {done ? (
          <div className="flex items-center gap-2 text-xs text-green-700 font-medium"><CheckCircle size={14} className="shrink-0" />Confirmation email sent — we'll verify and confirm within one business day.</div>
        ) : (
          <button disabled={notifying || !booking} onClick={() => sendNotification(m)} className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.12em] px-5 py-2.5 hover:bg-primary/90 transition-colors disabled:opacity-50">
            {notifying ? <Loader2 size={12} className="animate-spin" /> : <Check size={12} />}
            {notifying ? "Sending…" : "Payment Sent — Get Confirmation"}
          </button>
        )}
      </div>
    );
  }

  // While checking waiver status, show a loading state
  if (!waiverChecked) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-3">
          <Loader2 size={28} className="animate-spin text-primary mx-auto" />
          <p className="text-sm text-muted-foreground">Verifying your waiver status…</p>
        </div>
      </div>
    );
  }

  // Waiver not signed — hard block, send them back
  if (waiverBlocked) {
    return (
      <div className="w-full">
        <section className="relative h-[32vh] min-h-[220px] overflow-hidden">
          <img src={img("/images/fall-river-fishing.webp")} alt="Fly fishing on a Western North Carolina river — Mac Brown Fly Fish, Bryson City NC" className="absolute inset-0 w-full h-full object-cover object-[center_40%]" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">One Step Remaining</h1>
          </div>
        </section>
        <section className="py-20 bg-muted/20">
          <div className="max-w-lg mx-auto px-6 text-center space-y-6">
            <div className="bg-amber-50 border border-amber-200 p-8 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Waiver Required</p>
              <p className="font-serif text-2xl font-bold text-foreground">Sign Your Participation Waiver</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Payment cannot be accepted until you've read and signed the participation waiver.
                It only takes about a minute — then you'll be sent directly to the payment page.
              </p>
              <a href="/waiver-release" className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-primary/90 transition-colors">
                Sign Waiver Now <ArrowRight size={14} />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Questions? Call or text <a href="tel:+18287361469" className="text-primary hover:underline">(828) 736-1469</a>
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full">
      <section className="relative h-[32vh] min-h-[220px] overflow-hidden">
        <img src={img("/images/fall-river-fishing.webp")} alt="Fly fishing on a Western North Carolina river — Mac Brown Fly Fish, Bryson City NC" className="absolute inset-0 w-full h-full object-cover object-[center_40%]" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Complete Your Payment</h1>
          <p className="text-white/55 text-base italic mt-3 font-serif">Step 3 of 3 — Reservation · Waiver · Payment</p>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <div className="flex items-center gap-2">
            {(["Reservation", "Waiver", "Payment"] as const).map((step, i) => (
              <div key={step} className="flex items-center gap-2 flex-1 last:flex-none">
                <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] ${i === 2 ? "text-primary" : "text-muted-foreground/50"}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${i < 2 ? "bg-primary/20 text-primary" : "bg-primary text-primary-foreground"}`}>{i < 2 ? <Check size={10} /> : "3"}</span>
                  <span className="hidden sm:inline">{step}</span>
                </div>
                {i < 2 && <div className="flex-1 h-px bg-primary/30" />}
              </div>
            ))}
          </div>

          {booking ? (
            <div className="bg-white border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Booking Summary</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between gap-4"><span className="text-muted-foreground shrink-0">Name</span><span className="font-medium text-right">{booking.firstName} {booking.lastName}</span></div>
                <div className="flex justify-between gap-4"><span className="text-muted-foreground shrink-0">Program(s)</span><span className="font-medium text-right">{booking.programs.join(", ")}</span></div>
                <div className="flex justify-between gap-4"><span className="text-muted-foreground shrink-0">Anglers</span><span className="font-medium">{booking.anglers}</span></div>
                <div className="flex justify-between items-center border-t border-border pt-3 mt-3"><span className="font-semibold">Total Due</span><span className="font-serif text-2xl font-bold text-primary">{totalFormatted}</span></div>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-border p-6 text-center text-sm text-muted-foreground">
              <p>No booking found. Please <Link href="/reserve" className="text-primary hover:underline">start a reservation</Link> first.</p>
            </div>
          )}

          <div className="bg-white border border-border p-6 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Pay by Credit or Debit Card</p>
            <div className="flex items-center justify-between gap-4">
              <div><p className="font-serif text-2xl font-bold text-foreground">{totalFormatted}</p><p className="text-xs text-muted-foreground mt-0.5">Processed securely via SwipeSimple</p></div>
              {cardLink ? (
                <a href={cardLink} target="_blank" rel="noopener noreferrer" onClick={() => { setCardClicked(true); recordMethodIntent("card"); }} className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-primary/90 transition-colors shrink-0">Pay by Card <ArrowRight size={13} /></a>
              ) : (
                <a href="tel:+18287361469" className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3.5 hover:bg-primary/90 transition-colors shrink-0"><Phone size={13} /> Call to Pay</a>
              )}
            </div>
            {cardLink ? (
              <>
                <p className="text-[11px] text-muted-foreground/70">A small processing fee applies to card payments. To avoid fees, use Venmo or Zelle below.</p>
                {cardClicked && (
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-3">Once your card payment is complete, click below so we can confirm your reservation.</p>
                    <NotifyButton m="card" />
                  </div>
                )}
              </>
            ) : (
              <p className="text-[11px] text-muted-foreground/70">Card payment for this program is processed over the phone. Call <a href="tel:+18287361469" className="text-primary hover:underline">(828) 736-1469</a> and we'll take care of it.</p>
            )}
          </div>

          {[
            { key: "venmo", label: "Pay via Venmo", name: VENMO_HANDLE, details: <>Send <strong className="text-foreground">{totalFormatted}</strong> to <strong className="text-foreground">{VENMO_HANDLE}</strong> on Venmo.<p className="mt-1">In the note include your <strong className="text-foreground">full name</strong> and <strong className="text-foreground">program name</strong>.</p><a href={VENMO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline font-medium mt-1" onClick={e => e.stopPropagation()}>Open Venmo <ArrowRight size={11} /></a></> },
            { key: "zelle", label: "Pay via Zelle", name: ZELLE_NAME, details: <>Send <strong className="text-foreground">{totalFormatted}</strong> via Zelle. Search by email <strong className="text-foreground select-all">{ZELLE_ID}</strong> — account name: <strong className="text-foreground">{ZELLE_NAME}</strong>.<p className="mt-1">In the memo include your <strong className="text-foreground">full name</strong> and <strong className="text-foreground">program name</strong>.</p></> },
            { key: "check", label: "Mail a Check", name: "Mac Brown Fly Fish", details: <>Make your check out for <strong className="text-foreground">{totalFormatted}</strong> payable to:<div className="bg-muted/40 border border-border px-4 py-3 font-mono text-sm text-foreground leading-6 select-all mt-2">Mac Brown Fly Fish<br />779 West Deep Creek Rd.<br />Bryson City, NC 28713</div><p className="mt-2">Write your <strong className="text-foreground">full name</strong> and <strong className="text-foreground">program name</strong> in the memo line.</p></> },
          ].map(({ key, label, name, details }) => (
            <div key={key} className={`bg-white border p-6 space-y-3 cursor-pointer transition-colors ${method === key ? "border-primary" : "border-border hover:border-primary/40"}`} onClick={() => { const next = method === key ? null : key; setMethod(next); if (next) recordMethodIntent(next); }}>
              <div className="flex items-center justify-between">
                <div><p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-1">{label}</p><p className="font-serif text-lg font-bold text-foreground">{name}</p></div>
                <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${method === key ? "bg-primary border-primary" : "border-border"}`}>{method === key && <Check size={10} className="text-primary-foreground" />}</div>
              </div>
              {method === key && <div className="pt-3 border-t border-border space-y-2 text-xs text-muted-foreground leading-relaxed">{details}<NotifyButton m={key} /></div>}
            </div>
          ))}

          <div className="bg-primary text-primary-foreground p-6 text-center space-y-2">
            <p className="font-serif text-lg font-bold">Questions about payment?</p>
            <p className="text-primary-foreground/75 text-sm">We're happy to help. Call or text during business hours.</p>
            <a href="tel:+18287361469" className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3 hover:bg-white/90 transition-colors">(828) 736-1469</a>
          </div>
        </div>
      </section>
    </div>
  );
}
