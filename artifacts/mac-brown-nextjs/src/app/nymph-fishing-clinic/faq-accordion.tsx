"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What does the Nymph Fishing Clinic cover?",
    a: "The Comprehensive Nymph Fishing Clinic covers indicator nymphing, tight-line nymphing, and Euro nymphing methods — including depth control, rigging, weight selection, reading water for productive holding lies, hookset timing, and the presentation angles that produce most of the fish on most days on most rivers.",
  },
  {
    q: "How much does the Nymph Fishing Clinic cost?",
    a: "The Comprehensive Nymph Fishing Clinic is $1,550 per person for both days of on-water instruction. All gear is provided.",
  },
  {
    q: "What nymphing methods are taught?",
    a: "The clinic teaches indicator nymphing, tight-line nymphing, and Euro nymphing — including Czech and French nymphing techniques. The emphasis is on understanding when each method is most effective and developing the depth control, drift reading, and hookset timing that most anglers never fully develop.",
  },
  {
    q: "Where does the Nymph Fishing Clinic fish?",
    a: "The clinic fishes the mountain rivers and streams of the Great Smoky Mountains — including the Tuckasegee, the Nantahala, and surrounding watershed. Nymph fishing is productive year-round on these rivers, making this clinic effective in any season.",
  },
  {
    q: "What is the cancellation and payment policy?",
    a: "CANCELLATION: Weather and emergencies — we will always work with you. Dates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance at the time of reservation. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you.\n\nPAYMENT: Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee. To avoid fees entirely, we accept Zelle, Venmo, and personal check at no additional cost — just use the contact form and let us know your preferred method.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-border bg-white">
          <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" onClick={() => setOpen(open === i ? null : i)}>
            <span className="font-medium text-foreground">{faq.q}</span>
            {open === i ? <ChevronUp size={16} className="shrink-0 text-primary" /> : <ChevronDown size={16} className="shrink-0 text-muted-foreground" />}
          </button>
          {open === i && <div className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm border-t border-border pt-4 whitespace-pre-line">{faq.a}</div>}
        </div>
      ))}
    </div>
  );
}
