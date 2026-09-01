"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What is the Saltwater Fly Casting Elite Masterclass?",
    a: "The Saltwater Fly Casting Elite Masterclass is a 2-day intensive program in Bryson City, North Carolina covering the distance casting, accuracy, delivery, and wind management skills required for saltwater fly fishing. Led by FFI Master Casting Instructors, the workshop prepares fly anglers for the technical demands of bonefishing, tarpon, redfish, permit, and other saltwater species before their next saltwater trip.",
  },
  {
    q: "How much does the Saltwater Masterclass cost?",
    a: "The Saltwater Fly Casting Elite Masterclass is $1,550 per person for both full days of instruction.",
  },
  {
    q: "Who should attend the Saltwater Masterclass?",
    a: "The masterclass is for fly anglers preparing for a saltwater destination trip, experienced freshwater fly casters who want to add the distance, accuracy, and wind management skills that saltwater demands, and guides or shop staff serving saltwater clients. No prior saltwater fishing experience is required.",
  },
  {
    q: "What saltwater species does this prepare you for?",
    a: "The masterclass prepares you for bonefish on the flats, tarpon on the surface, redfish in skinny water, permit, and a range of other saltwater species where distance, quick delivery, and accuracy under wind are the difference between a good cast and a spooked fish.",
  },
  {
    q: "What is the cancellation and payment policy?",
    a: "CANCELLATION: Weather and emergencies — we will always work with you. Dates are rarely cancelled due to weather — come prepared and plan to be on the water. Rescheduling is subject to availability: 30+ days out we can assist; within 30 days, full charge applies. We strongly recommend trip cancellation insurance at the time of reservation. We have operated on the Golden Rule since 1987 — if something comes up, reach out and we will do everything we can to work with you.\n\nPAYMENT: Payment in full is required at the time of booking to hold your date. Online bookings via Swipe carry a small processing fee. To avoid fees entirely, we accept Zelle, Venmo, and personal check at no additional cost — just use the contact form and let us know your preferred method.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-border">
      {faqs.map((faq, i) => (
        <div key={i} className="py-5">
          <button
            className="w-full flex items-center justify-between gap-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-foreground">{faq.q}</span>
            {open === i
              ? <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
              : <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />}
          </button>
          {open === i && (
            <p className="mt-4 text-muted-foreground leading-relaxed text-sm whitespace-pre-line">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
