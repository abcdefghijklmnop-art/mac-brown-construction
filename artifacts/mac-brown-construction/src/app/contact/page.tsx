import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Estimate",
  description:
    "Contact Mac Brown Construction for a free estimate on your custom home project. Licensed general contractor in Bryson City, NC. Call (828) 736-1469 or send a message online.",
  alternates: { canonical: "/contact/" },
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-64 md:h-96 overflow-hidden">
        <img
          src={img("/images/contact-bg.webp")}
          alt="Mac Brown Construction — custom home builder in Bryson City, NC"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-[0.35em] mb-3">Get in Touch</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact info */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">Mac Brown Construction, LLC</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">Let&apos;s Discuss Your Project</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Whether you&apos;re ready to break ground or still in the early planning stages, we&apos;d love to hear about your project. Call us or send a message and we&apos;ll be in touch promptly.
          </p>

          <div className="space-y-5 mb-10">
            <a href="tel:+18287361469" className="flex items-center gap-4 group">
              <div className="h-10 w-10 bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-0.5">Phone</p>
                <p className="font-semibold group-hover:text-primary transition-colors">(828) 736-1469</p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-0.5">Location</p>
                <p className="font-semibold">Bryson City, NC · Swain County</p>
                <p className="text-sm text-muted-foreground">Serving western North Carolina</p>
              </div>
            </div>
          </div>

          <div className="bg-muted p-6 border border-border">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Services We Offer</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Custom home design & construction",
                "Energy-efficient & green building",
                "ICF foundations & frost-proof footings",
                "Timber frame & stick-built homes",
                "Radiant floors, geothermal, passive solar",
                "Residential & commercial general contracting",
              ].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary/60 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA card */}
        <div className="flex flex-col gap-6">
          <div className="bg-primary text-primary-foreground p-8">
            <h3 className="font-serif text-xl font-bold mb-3">Ready to Get Started?</h3>
            <p className="text-primary-foreground/75 text-sm leading-relaxed mb-6">
              The best way to reach us is by phone. We&apos;re happy to discuss your project, answer questions about green building, or schedule a site visit.
            </p>
            <a
              href="tel:+18287361469"
              className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-white/90 transition-colors"
            >
              <Phone size={13} /> Call (828) 736-1469
            </a>
          </div>

          <div className="bg-muted p-8 border border-border">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">From Our Blog</p>
            <p className="text-sm text-muted-foreground mb-5">Learn about our building techniques and energy-saving methods before your first call.</p>
            <div className="flex flex-col gap-3">
              <Link href="/foundations/frost-proof-footings/" className="text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                Frost Proof Footings <ArrowRight size={12} />
              </Link>
              <Link href="/wall-plates/timber-frame-hybrid-construction/" className="text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                Timber Frame Hybrid Construction <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          <div className="bg-muted p-8 border border-border">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Service Area</p>
            <p className="text-sm text-muted-foreground">
              Serving Bryson City, Swain County, and surrounding western North Carolina communities including Cherokee, Sylva, Waynesville, Asheville, and the greater Smoky Mountains region.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
