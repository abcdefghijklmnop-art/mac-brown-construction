"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What is the Oar Frame Rowing School?",
    a: "The Oar Frame Rowing School is a fun, 2-day rowing and drift boat school in Bryson City, North Carolina, led by instructors with 450 years of combined rowing experience, among the best rowers in the region. It teaches the skills needed to safely and effectively navigate a drift boat or oar frame through moving water — reading the river from the rowing seat, ferry angles, eddy turns, boat setup, and river safety.",
  },
  {
    q: "How much does the Oar Frame Rowing School cost?",
    a: "The Oar Frame Rowing School is $1,550 per person for both days of on-water instruction and classroom discussion.",
  },
  {
    q: "Who should attend the Oar Frame Rowing School?",
    a: "The academy is designed for aspiring fly fishing guides, serious boaters who want to improve their rowing skills, and anyone who wants to operate a drift boat or oar frame safely and confidently on moving water. Prior rowing experience is helpful but not required.",
  },
  {
    q: "What does the rowing curriculum cover?",
    a: "The curriculum covers oar frame setup and rigging, reading the river from the rowing seat, ferry angles, eddy turns, maneuvering in current, anchoring, downstream and upstream rowing techniques, and river safety. The academy is taught on the rivers of the Great Smoky Mountains.",
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
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-medium text-foreground">{faq.q}</span>
            {open === i ? <ChevronUp size={16} className="shrink-0 text-primary" /> : <ChevronDown size={16} className="shrink-0 text-muted-foreground" />}
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm border-t border-border pt-4 whitespace-pre-line">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
