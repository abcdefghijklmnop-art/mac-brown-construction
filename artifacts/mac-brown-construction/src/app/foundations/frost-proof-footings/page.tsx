import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { img } from "@/lib/asset";
import { SchemaScript } from "@/components/schema-script";
import { articleSchema } from "@/lib/schema";

const POST = {
  title: "Frost Proof Footings",
  description:
    "How ICF foundations and frost proof footings using 2-inch EPS foam protect mountain homes from ground energy loss — a cost-effective building technique from Mac Brown Construction, Bryson City, NC.",
  date: "2024-12-01",
  path: "/foundations/frost-proof-footings/",
  image: "/images/icf-foundation.webp",
};

export const metadata: Metadata = {
  title: "Frost Proof Footings with ICF & EPS Foam — Western NC",
  description:
    "How ICF foundations and frost proof footings using 2-inch EPS foam protect mountain homes from ground energy loss — a cost-effective building technique from Mac Brown Construction, Bryson City, NC.",
  alternates: { canonical: "/foundations/frost-proof-footings/" },
};

export default function Page() {
  return (
    <>
      <SchemaScript schema={articleSchema(POST)} />
      {/* Hero */}
      <section className="relative w-full h-72 md:h-[420px] overflow-hidden">
        <img
          src={img("/images/icf-foundation.webp")}
          srcSet={`${img("/images/mobile/icf-foundation.webp")} 800w, ${img("/images/icf-foundation.webp")} 1920w`}
          alt="ICF foundation with frost proof footings"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-[0.35em] mb-3">Foundations</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Frost Proof Footings
          </h1>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 md:py-24 px-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] bg-primary/10 text-primary px-3 py-1">Foundations</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] bg-muted text-muted-foreground px-3 py-1">ICF</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] bg-muted text-muted-foreground px-3 py-1">Bryson City, NC</span>
        </div>

        <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-5">
          <p>
            With cold weather around I thought this would be a good time to discuss the use of frost proof footings. The temps here in western North Carolina will be single digits this evening with 20-30 mph winds. The ground is hard packed frozen until spring here in the mountains. The use of EPS foam in two inch thickness makes a huge difference especially when used with <a href="http://www.polysteel.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ICF&apos;s</a> (insulated concrete forms).
          </p>

          <p>
            The idea is so simple for climates that have several months of cold weather through the winter seasons. I first read about them years ago, used in many of the Scandinavian countries. It is commonplace there to install them during the foundation process. The use of foam laid next to the ICF foundation is the equivalent of having the footing at a depth of 5-6 feet.
          </p>

          <p>
            Now, I know many are thinking — heat rises, so why would I want to insulate the foundation? The reason lies in the various methods of heat/cold transfer. Radiant, conductive, and convective heat transfer are the three ways we discuss heating and cooling of the structural envelope. The frost proof footing eliminates the cold frozen ground from robbing BTUs from the structure through conductive transfer.
          </p>

          <p>
            The overall cost saving of using foam around the footing perimeter far outweighs foregoing it. It is very inexpensive to install and will pay back big dividends when it comes to keeping the structure warm during the cold season.
          </p>

          {/* Photo */}
          <div className="my-8 not-prose">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img("/images/icf-wall.webp")}
                srcSet={`${img("/images/mobile/icf-wall.webp")} 1280w, ${img("/images/icf-wall.webp")} 1920w`}
                alt="ICF perimeter wall with EPS foam for frost proof footings"
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2 italic">
              The ICF perimeter of the building, showing 4×8 sheets of 2″ EPS foam that wrap the outside of the structure for frost proof footings.
            </p>
          </div>

          <p>
            Here is a pic of the ICF perimeter of the building. You can see all of the 4×8 sheets of 2″ EPS foam that will go around the outside of the structure for the frost proof footings. Another big advantage of the ICF is that I set this footprint in the morning and poured them the same day with several pump trucks full of concrete (over 360 linear feet of wall). It is much faster than dealing with masonry units of block. The R value of the ICF is over 60 as well — which is a big plus.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2">
          {["frost-proof-footings", "icf", "bryson-city", "contractors", "eco-friendly-building"].map((tag) => (
            <span key={tag} className="text-[10px] font-medium uppercase tracking-[0.1em] bg-muted px-3 py-1 text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        {/* Related */}
        <div className="mt-10 bg-muted p-6 border border-border">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Related Article</p>
          <Link
            href="/wall-plates/timber-frame-hybrid-construction/"
            className="text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all"
          >
            Timber Frame Hybrid Construction <ArrowRight size={12} />
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-border text-xs text-muted-foreground">
          &copy; {new Date(POST.date + "T00:00:00").getFullYear()} Mac Brown &middot; macbrownconstruction.com. All rights reserved.
        </div>
      </article>

      {/* CTA */}
      <section className="bg-primary py-12 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-primary-foreground mb-3">
            Questions About Your Foundation?
          </h2>
          <p className="text-primary-foreground/90 mb-6 text-sm">
            We can design and build a foundation for your home that far exceeds code minimums for warmth, strength, and energy efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-3.5 hover:bg-white/90 transition-colors">
              Contact Us <ArrowRight size={14} />
            </Link>
            <a href="tel:+18287361469" className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-3.5 hover:bg-primary-foreground/10 transition-colors">
              <Phone size={14} /> (828) 736-1469
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
