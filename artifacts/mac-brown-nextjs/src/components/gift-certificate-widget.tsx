import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function GiftCertificateWidget() {
  return (
    <section className="py-16 px-6 border-t border-border bg-muted/30">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-2">
            Give the Gift of a Lifetime
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
            Gift Certificates Available
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Give a guided trip, casting lesson, or school to the angler in your life. Gear gets replaced — a day on the finest trout water in the Southeast stays with someone forever. Perfect for birthdays, Father's Day, Christmas, and any occasion worth celebrating.
          </p>
        </div>
        <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto">
          <Link
            href="/gift-certificates"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white text-xs font-semibold uppercase tracking-[0.15em] px-7 py-3.5 hover:bg-primary/90 transition-colors"
          >
            Full Details <ArrowRight size={13} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-border text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-3.5 hover:border-primary/40 transition-colors"
          >
            <Phone size={13} /> Contact to Discuss Options
          </Link>
        </div>
      </div>
    </section>
  );
}
