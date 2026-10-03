"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FaqItem { q: string; a: string; link?: string; linkLabel?: string }

export const defaultFaqs: FaqItem[] = [
  { q: "Do I need prior experience?", a: "No experience needed. Every float trip is instructional — we meet you exactly where you are and build from there. Beginners leave with a genuine foundation. Experienced anglers leave with sharper skills. The day is always built around you." },
  { q: "What should I bring?", a: "Rain gear — mountain weather changes fast. Warm layers for cool mornings on the water. Polarized sunglasses for spotting fish. A hat with a brim for sun and glare. Sunscreen and lip balm. Clothing in earth tones. We provide all rods, reels, flies, and leaders. Lunch is not included — plan accordingly." },
  { q: "Is a fishing license required?", a: "Yes — a valid North Carolina fishing license is required for all anglers 16 and older. You can purchase one online at ncwildlife.org or by calling 1-888-248-6834. Cherokee waters require a separate tribal license available at stores in Cherokee, NC.", link: "https://ncwildlife.org", linkLabel: "Purchase your NC license at ncwildlife.org" },
  { q: "What is your cancellation policy?", a: "Weather and emergencies — we will always work with you. When you book, we ask for your commitment; you have ours from day one.\n\nDates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies.\n\nWe strongly recommend trip cancellation insurance at the time of reservation.\n\nWe have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you." },
  { q: "What is the payment policy?", a: "Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee. To avoid fees entirely, we accept Zelle, Venmo, and personal check at no additional cost — just use the contact form and let us know your preferred method." },
];

function FaqItem({ q, a, link, linkLabel }: { q: string; a: string; link?: string; linkLabel?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-6 text-left gap-4">
        <span className="font-semibold text-foreground">{q}</span>
        {open ? <ChevronUp size={18} className="text-muted-foreground shrink-0" /> : <ChevronDown size={18} className="text-muted-foreground shrink-0" />}
      </button>
      {open && (
        <div className="text-muted-foreground text-sm leading-relaxed pb-6 space-y-3">
          {a.split('\n\n').map((para, i) => (
            <p key={i} className="whitespace-pre-line">{para}</p>
          ))}
          {link && linkLabel && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block text-primary font-medium hover:underline">
              {linkLabel} →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function FaqSection({ items, heading = "Frequently Asked Questions" }: { items?: FaqItem[]; heading?: string }) {
  const faqs = items ?? defaultFaqs;
  return (
    <section className="py-28">
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Questions</p>
        <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">{heading}</h2>
        <div>
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} link={f.link} linkLabel={f.linkLabel} />
          ))}
        </div>
      </div>
    </section>
  );
}
