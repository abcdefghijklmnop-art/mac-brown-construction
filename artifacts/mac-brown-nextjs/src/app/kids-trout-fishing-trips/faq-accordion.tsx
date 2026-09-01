"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  { q: "How old does my child need to be?", a: "We welcome kids ages 5 and up. Younger children do best with a half-day trip — it covers the fundamentals without pushing past the point where it stops being fun. Older kids and teens are ready for a full day on the water." },
  { q: "Do we need any gear or experience?", a: "None. Mac Brown Fly Fish provides everything — fly rods, reels, lines, flies, and waders if needed. No fly fishing experience is required." },
  { q: "How long is a typical kids trip?", a: "We recommend a half-day trip for younger kids and first-timers. It covers casting fundamentals, reading water, presentation, and catching fish. Full-day trips are available for older kids and teens ready for a serious day on the water." },
  { q: "Is it just my family, or will there be other groups?", a: "Private trips only — your family, no one else. Every kids trip is tailored to your child's age, attention span, and goals on the water." },
  { q: "What rivers do kids trips typically fish?", a: "Most kids trips fish the delayed harvest sections of the Tuckasegee River right through Bryson City, or the wild streams of Great Smoky Mountains National Park depending on the season and conditions. Mac selects the water based on what gives kids the best chance of catching fish and having a great day." },
  { q: "What should we bring?", a: "Dress in layers for the weather, wear closed-toe shoes that can get wet, and bring sunscreen and water. Mac provides all fishing gear. Lunch or snacks are a good idea for half-day trips — we will be outside and moving." },
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
          {open === i && <div className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm border-t border-border pt-4">{faq.a}</div>}
        </div>
      ))}
    </div>
  );
}
