"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Do you need certification to become a fly fishing guide?",
    a: "Not legally in most states — guiding typically requires a state license, not casting certification. However, FFI certification is widely recognized industry-wide as a mark of casting competency and can meaningfully improve your chances when competing for guiding positions.",
  },
  {
    q: "What is FFI certification?",
    a: "FFI (Fly Fishers International) offers standardized, independently tested casting instructor certifications, widely recognized across the fly fishing industry as proof of real casting competency.",
  },
  {
    q: "Does Fly Fishing Guide School prepare you for FFI certification?",
    a: <>The <Link href="/fly-fishing-guide-school/" className="text-[hsl(215,55%,28%)] underline underline-offset-2 hover:opacity-75 transition-opacity">curriculum</Link> is built around FFI Master Instructor-level casting standards throughout the program, giving graduates a strong foundation for pursuing certification afterward.</>,
  },
  {
    q: "Is a guide license the same as FFI certification?",
    a: "No. A guide license is a state legal requirement tied to guiding and boating regulations, and requirements vary by state. FFI certification is a separate, non-legal, industry-recognized casting credential.",
  },
  {
    q: "Is there a shorter course to prepare for FFI casting certification before the full Guide School?",
    a: <>Yes — the <Link href="https://macbrownflyfish.com/fly-casting-mastery-workshop/" className="text-[hsl(215,55%,28%)] underline underline-offset-2 hover:opacity-75 transition-opacity">Fly Casting Mastery Workshop</Link> is a weekend clinic specifically designed around the casting mechanics that FFI testing covers. Many of our CI and MCI candidates have come through that program before pursuing formal certification.</>,
  },
  {
    q: "What if I'm not ready for the full Guide School yet?",
    a: <>The <Link href="/smoky-mountain-fly-fishing-school/" className="text-[hsl(215,55%,28%)] underline underline-offset-2 hover:opacity-75 transition-opacity">Smoky Mountain Fly Fishing School</Link> is a great entry point — a focused weekend program that builds the foundation of casting, water reading, and presentation skills you'll need before stepping into the Guide School curriculum.</>,
  },
  {
    q: "Does the Masterclass Casting Workshop help with FFI certification prep?",
    a: <>Yes. The <Link href="https://macbrownflyfish.com/masterclass-fly-casting-workshop/" className="text-[hsl(215,55%,28%)] underline underline-offset-2 hover:opacity-75 transition-opacity">Masterclass</Link> goes deep on casting mechanics at an advanced level — exactly the kind of focused work that sets candidates up well for FFI testing. Many students use it as a direct prep course before pursuing Certified or Master Casting Instructor credentials.</>,
  },
];

export function GuideCertificationFaq() {
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
