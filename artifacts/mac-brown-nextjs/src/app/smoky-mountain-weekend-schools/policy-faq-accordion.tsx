"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const policyFaqs = [
  {
    q: "What is your cancellation policy?",
    a: "Weather and emergencies — we'll always work with you. When you book, we ask for your commitment; you have ours from day one. Dates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance at the time of reservation. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you.",
  },
  {
    q: "What is the payment policy?",
    a: "Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee. To avoid fees entirely, we accept Zelle, Venmo, and personal check at no additional cost — just use the contact form and let us know your preferred method.",
  },
];

export default function PolicyFaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {policyFaqs.map((faq, i) => (
        <div key={i} className="border-b border-border last:border-0">
          <button
            className="w-full flex items-center justify-between py-6 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-foreground">{faq.q}</span>
            {open === i
              ? <ChevronUp size={18} className="text-muted-foreground shrink-0" />
              : <ChevronDown size={18} className="text-muted-foreground shrink-0" />}
          </button>
          {open === i && (
            <p className="pb-6 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
