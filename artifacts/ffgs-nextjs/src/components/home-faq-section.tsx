"use client";
import { useSchedule } from "@/hooks/use-schedule";

export function HomeFaqSection() {
  const { pricing } = useSchedule();
  const price = pricing.guideSchool.display;

  const faqs = [
    {
      q: "How much does fly fishing guide school cost?",
      a: `Tuition for the Fly Fishing Guide School in Bryson City, NC is ${price} for the full 4-day program. Tuition includes direct instruction from Mac Brown — the only FFI Master Casting Instructor in North Carolina and FFI Lifetime Achievement Award recipient — plus access to 100+ fly rods, a complete fly tying setup, switch rod and double-handed rod instruction, Mac Brown's personal library of 300+ fly fishing books and DVDs, and a worldwide job placement directory.`,
    },
    {
      q: "How long is the Fly Fishing Guide School?",
      a: "Four days — Thursday through Sunday in Bryson City, North Carolina. Every day is fully structured with on-water instruction, evening library access, and purpose behind every hour from arrival to graduation.",
    },
    {
      q: "Who should attend the Fly Fishing Guide School?",
      a: "The school serves two tracks — career changers who want to guide professionally and earn a living on the water, and serious skill-builders who want to understand fly fishing at a professional level without necessarily pursuing guiding as a career. Both tracks receive the same world-class instruction.",
    },
    {
      q: "When does the Fly Fishing Guide School run?",
      a: "Sessions run March through November in Bryson City, North Carolina. Schools fill months in advance — early reservation is strongly recommended. Contact the school directly at (828) 736-1469 to check availability.",
    },
    {
      q: "Who teaches at the Fly Fishing Guide School?",
      a: "The school is led by Mac Brown — the only FFI Master Casting Instructor in North Carolina and recipient of the FFI Lifetime Achievement Award. Instruction is drawn from a featured group of educators that includes FFI Master Casting Instructors, certified whitewater rowing instructors, Fly Fishing Team USA members, Team USA coaches, and Hall of Fame inductees — 450+ combined years of field experience across the faculty.",
    },
  ];

  return (
    <>
      <section className="py-28 md:py-36 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="divide-y divide-border">
            {faqs.map((item, i) => (
              <details key={i} className="group py-6">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-serif text-lg font-bold text-foreground">
                  {item.q}
                  <span className="shrink-0 text-primary text-xl leading-none group-open:hidden">+</span>
                  <span className="shrink-0 text-primary text-xl leading-none hidden group-open:block">−</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
