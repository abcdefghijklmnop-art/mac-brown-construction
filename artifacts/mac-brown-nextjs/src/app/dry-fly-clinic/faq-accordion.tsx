"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What does the Dry Fly Clinic cover?",
    a: "The Comprehensive Dry Fly Clinic covers surface presentations, reading rises, matching the hatch, drag-free drift, the approach and mending skills that fool selective trout, and the casting accuracy required for dry fly fishing. Both days are spent on the wild trout streams of the Great Smoky Mountains with FFI Certified Instructors.",
  },
  {
    q: "How much does the Dry Fly Clinic cost?",
    a: "The Comprehensive Dry Fly Clinic is $1,550 per person for both days of on-water instruction. All gear is provided.",
  },
  {
    q: "What skill level do I need for the Dry Fly Clinic?",
    a: "All skill levels are welcome. The clinic is designed to meet every participant where they are — whether you have never matched a hatch or you are an experienced angler looking to fill technical gaps in your dry fly game.",
  },
  {
    q: "Where does the Dry Fly Clinic fish?",
    a: "The clinic fishes the mountain rivers and streams of the Great Smoky Mountains — including the Tuckasegee, the Nantahala, and surrounding watershed. These rivers offer excellent dry fly fishing with multiple hatch cycles throughout the season.",
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
