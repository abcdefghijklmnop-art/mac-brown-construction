import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: "About — Mac Brown, Custom Home Builder & Contractor",
  description:
    "Hands-on custom home builder and NC licensed general contractor in Bryson City since 1988. Mac Brown works every project from design through completion in the Smoky Mountains.",
  alternates: { canonical: "/about/" },
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-72 md:h-[480px] overflow-hidden">
        <img
          src={img("/images/home-exterior.webp")}
          srcSet={`${img("/images/mobile/home-exterior.webp")} 1280w, ${img("/images/home-exterior.webp")} 1920w`}
          alt="Custom home by Mac Brown Construction"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-[0.35em] mb-3">Bryson City, NC · Est. 1988</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Custom Home Builder & Contractor
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 px-6 max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-5 text-center">Hands-On Builder</p>
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-center">Quality Custom Homes Since 1988</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Mac Brown Construction is a quality custom home builder and contractor serving Bryson City, NC since 1988. We specialize in residential new construction. The plans are tailored specifically per client project — I work closely with every client from the plans throughout the entirety of the project.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          I am a hands-on builder that stays on the project from start to finish. From cabins, custom homes, timber frames, to stick-built houses — they are all unique structural encasements. Many of the homes I have built in the area make use of radiant heating, geothermal ground loops, passive solar, or conditioned crawlspaces.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Many of these ideas end up being far superior to the basic International Building Code, which many (including myself) feel is a bare minimum of requirements. I hope this enthusiasm for sustainable energy housing becomes contagious when clients choose to begin a new project — because it is the right thing to do for the conservation of resources, with the added benefit of savings over time.
        </p>
      </section>

      {/* Green Building */}
      <section className="bg-muted py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img("/images/timber-frame.webp")}
                srcSet={`${img("/images/mobile/timber-frame.webp")} 1280w, ${img("/images/timber-frame.webp")} 1920w`}
                alt="Timber frame project"
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">Green Building</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-5">Cost Savings of Using Green Building</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              A little higher cost on the front end of the project becomes huge savings over time for energy costs — and real benefits to society through reduced consumption of natural resources.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              It is very exciting to design a cost-effective structure using a Green building concept. What does this mean in practice? Homes with tighter envelopes stay warm in winter and cool in summer with dramatically less energy expenditure.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As the temperatures outside reach single digits in the Smoky Mountain winters, homes built with ICF walls, frost-proof footings, and foam insulation throughout maintain comfortable temperatures without the massive heating bills that plague lesser-built homes.
            </p>
            <Link
              href="/foundations/frost-proof-footings/"
              className="text-xs font-semibold uppercase tracking-[0.15em] text-primary flex items-center gap-1 hover:gap-2 transition-all"
            >
              Read: Frost Proof Footings <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Start Your Project</h2>
          <p className="text-primary-foreground/90 mb-8 text-sm">
            Contact Mac Brown Construction to discuss your custom home or contracting project in Bryson City, NC and surrounding western North Carolina.
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
