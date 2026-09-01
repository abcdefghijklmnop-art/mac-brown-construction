"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { TuitionPrice } from "@/components/tuition-price";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "How much does fly fishing guide school cost?",
    a: <>Tuition for the Fly Fishing Guide School is <TuitionPrice /> for four days, which includes lunch each day. Lodging and dinner are arranged separately by each student.</>,
  },
  {
    q: "Is fly fishing guide school worth the money?",
    a: "Compared to other elite fly fishing training programs — including week-long, all-inclusive schools costing $12,500 or more — the per-day cost here is meaningfully lower, even after factoring in a student's own lodging and meals.",
  },
  {
    q: "Do you need to attend a guide school to become a fly fishing guide?",
    a: "In most states, formal certification isn't legally required to guide. However, a structured program significantly improves your skills, your credibility with outfitters, and your ability to compete for guiding positions against candidates without formal training.",
  },
  {
    q: "How much do fly fishing guides make?",
    a: "Entry-level guides working for an outfitter or lodge typically earn $2,400 to $3,000 per month. Experienced independent guides working their home water often earn more, frequently supplementing income with casting instruction and clinics.",
  },
  {
    q: "What is the class size?",
    a: "Class size is limited to 8 to 12 students, kept intentionally small so every student receives direct, personal instruction rather than rotating through a large group.",
  },
  {
    q: "Do I need my own equipment?",
    a: "No. A wide range of rods, lines, and gear is available to try and compare throughout the program, so students can learn on equipment beyond what they already own.",
  },
  {
    q: "What happens after graduation?",
    a: "Graduates leave with a structured assessment of their skills, a clear picture of what to keep working on, and access to job placement resources connecting them with lodges and outfitters looking to hire.",
  },
];

export function WorthItFaq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 md:py-20 bg-muted/20 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <div className="w-12 h-0.5 bg-[hsl(215,55%,28%)] mb-4" />
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[hsl(215,55%,28%)] mb-10">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-start justify-between gap-4 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-foreground leading-snug">{faq.q}</span>
                {open === i ? (
                  <ChevronUp size={18} className="text-[hsl(215,55%,28%)] shrink-0 mt-0.5" />
                ) : (
                  <ChevronDown size={18} className="text-[hsl(215,55%,28%)] shrink-0 mt-0.5" />
                )}
              </button>
              {open === i && (
                <p className="text-muted-foreground leading-relaxed pb-5">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
