import { SchemaScript } from "@/components/schema-script";
import { faqSchema, type Faq } from "@/lib/schema";

// Renders the visible FAQ and its FAQPage JSON-LD from the same array,
// so the schema text always matches what readers see on the page.
export function FaqSection({ faqs, title = "Frequently Asked Questions", className = "" }: { faqs: Faq[]; title?: string; className?: string }) {
  return (
    <section className={`py-16 md:py-24 px-6 max-w-3xl mx-auto ${className}`}>
      <SchemaScript schema={faqSchema(faqs)} />
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary text-center mb-3">FAQ</p>
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-10">{title}</h2>
      <div className="divide-y divide-border border-t border-border">
        {faqs.map(({ q, a }) => (
          <details key={q} className="group py-1">
            <summary className="flex items-center justify-between py-4 cursor-pointer list-none gap-4">
              <h3 className="font-semibold text-sm leading-snug">{q}</h3>
              <span className="shrink-0 text-primary font-light text-xl leading-none group-open:hidden">+</span>
              <span className="shrink-0 text-primary font-light text-xl leading-none hidden group-open:block">−</span>
            </summary>
            <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
