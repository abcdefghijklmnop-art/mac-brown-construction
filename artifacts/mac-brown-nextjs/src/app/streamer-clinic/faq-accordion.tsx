"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What does the Streamer Clinic cover?",
    a: "The Comprehensive Streamer Clinic covers active retrieve and passive drift presentations, depth control, presentation angles, fly selection, water reading to locate the largest trout in any river system, line and leader setup for streamer fishing, and the approach strategies that consistently draw the most aggressive takes from the biggest fish.",
  },
  {
    q: "How much does the Streamer Clinic cost?",
    a: "The Comprehensive Streamer Clinic is $1,550 per person for both days of on-water instruction. All gear is provided.",
  },
  {
    q: "Who is the Streamer Clinic for?",
    a: "The Streamer Clinic is for anglers who want to consistently locate and catch the largest trout in a river — not just fish, but trophy fish. It is ideal for experienced fly anglers ready to add a powerful new dimension to their fishing, as well as intermediate anglers who want to learn streamer technique from the ground up.",
  },
  {
    q: "Where does the Streamer Clinic fish?",
    a: "The clinic fishes the mountain rivers and streams of the Great Smoky Mountains — including the Tuckasegee, the Nantahala, and surrounding watershed. These rivers hold large brown and rainbow trout that respond aggressively to well-presented streamers.",
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
