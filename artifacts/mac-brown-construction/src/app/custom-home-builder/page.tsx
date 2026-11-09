import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Custom Home Builder — Bryson City, NC",
  description:
    "Licensed custom home builder in Bryson City, NC. ICF foundations, timber frames, and green building practices. Over 35 years of energy-efficient custom home construction in western North Carolina.",
  alternates: { canonical: "/custom-home-builder/" },
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-72 md:h-[480px] overflow-hidden">
        <img
          src={img("/images/timber-frame.webp")}
          srcSet={`${img("/images/mobile/timber-frame.webp")} 1280w, ${img("/images/timber-frame.webp")} 1920w`}
          alt="Timber frame custom home by Mac Brown Construction"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-[0.35em] mb-3">Bryson City, NC</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Custom Home Builder of Energy-Efficient Homes
          </h1>
        </div>
      </section>

      {/* Details strip */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          {["Est. 1988", "NC Unlimited License", "Swain County, NC", "(828) 736-1469"].map((item) => (
            <p key={item} className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/90 flex-1 text-center min-w-[100px]">{item}</p>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 md:py-24 px-6 max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-5">Custom Home Builder</p>
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
          From Design Through Completion
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-5">
          Mac Brown Construction, LLC is a licensed General Contractor based in Bryson City, NC with an unlimited license for all project sizes. We assist you with your "Dream Home" project from the designing phases to completion — custom home building that goes well beyond minimum code requirements.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Mac Brown Construction encourages the use of Green Building practices for your dream home. A tighter structural envelope equates to huge cost savings for heating and cooling, and a home that remains comfortable in all seasons.
        </p>
      </section>

      {/* Better Building Practices */}
      <section className="bg-muted py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">Above Code</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-5">Better Building Practices</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              The building codes for the State of North Carolina are the "bare minimum" of what is required by law. North Carolina uses the International Building Code for all structures. One of the best ways to understand this is through the foundation — it has been commonplace for concrete block to be used for foundations across America for a long time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The drawback is there are superior methods for strength and R-value. A solid poured concrete wall with rebar throughout is much stronger and can achieve R-values over R-60. Why would anyone choose a method that cracks in settling, has a single-digit R-Value, and is not as strong to begin with?
            </p>
            <ul className="space-y-3">
              {[
                "Poured concrete ICF foundations — R-value over 60",
                "Frost-proof footings using EPS foam",
                "P-2000 insulation with Mylar coating",
                "Iconene foam insulation for tight envelopes",
                "Radiant floors and geothermal ground loops",
                "Passive solar design principles",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check size={15} className="text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img("/images/icf-foundation.webp")}
                srcSet={`${img("/images/mobile/icf-foundation.webp")} 800w, ${img("/images/icf-foundation.webp")} 1920w`}
                alt="ICF foundation construction"
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img("/images/construction-1.webp")}
                alt="Custom home construction project by Mac Brown Construction"
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary text-center mb-3">Gallery</p>
          <h2 className="font-serif text-2xl font-bold text-center mb-10">Our Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              [img("/images/home-exterior.webp"), img("/images/mobile/home-exterior.webp"), "Custom home exterior"],
              [img("/images/timber-frame.webp"), img("/images/mobile/timber-frame.webp"), "Timber frame project"],
              [img("/images/home-entrance.webp"), null, "Custom home entrance"],
              [img("/images/interior-1.webp"), null, "Custom interior"],
              [img("/images/interior-2.webp"), null, "Interior detail"],
              [img("/images/custom-home-1.webp"), null, "Custom home"],
            ].map(([src, mobile, alt]) => (
              <div key={src as string} className="aspect-[4/3] overflow-hidden">
                <img
                  src={src as string}
                  srcSet={mobile ? `${mobile} 1280w, ${src} 1920w` : undefined}
                  alt={alt as string}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Discuss Your Project
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-sm">
            Give Mac Brown Construction, LLC a call to discuss your upcoming project and how we can help you build the sustainable dream home you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              Contact Us <ArrowRight size={14} />
            </Link>
            <a href="tel:+18287361469" className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary-foreground/10 transition-colors">
              <Phone size={14} /> (828) 736-1469
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
