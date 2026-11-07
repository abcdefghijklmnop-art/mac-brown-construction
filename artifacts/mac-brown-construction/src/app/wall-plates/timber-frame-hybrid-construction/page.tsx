import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { img } from "@/lib/asset";
import { SchemaScript } from "@/components/schema-script";
import { articleSchema } from "@/lib/schema";

const POST = {
  title: "Timber Frame Hybrid Construction",
  description:
    "Timber frame hybrid homes using indigenous local hardwoods, wide wall plates, and P-2000 insulation for beautiful, energy-efficient construction in the Smoky Mountains — Mac Brown Construction.",
  date: "2024-12-15",
  path: "/wall-plates/timber-frame-hybrid-construction/",
  image: "/images/timber-frame.webp",
};

export const metadata: Metadata = {
  title: "Timber Frame Home Builder — Western North Carolina",
  description:
    "Timber frame hybrid homes using indigenous local hardwoods, wide wall plates, and P-2000 insulation for beautiful, energy-efficient construction in the Smoky Mountains — Mac Brown Construction.",
  alternates: { canonical: "/wall-plates/timber-frame-hybrid-construction/" },
};

export default function Page() {
  return (
    <>
      <SchemaScript schema={articleSchema(POST)} />
      {/* Hero */}
      <section className="relative w-full h-72 md:h-[420px] overflow-hidden">
        <img
          src={img("/images/timber-frame.webp")}
          srcSet={`${img("/images/mobile/timber-frame.webp")} 1280w, ${img("/images/timber-frame.webp")} 1920w`}
          alt="Timber frame hybrid construction project"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-[0.35em] mb-3">Wall Plates</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Timber Frame Hybrid Construction
          </h1>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 md:py-24 px-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] bg-primary/10 text-primary px-3 py-1">Wall Plates</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] bg-muted text-muted-foreground px-3 py-1">Timber Frame</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] bg-muted text-muted-foreground px-3 py-1">P-2000</span>
        </div>

        <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-5">
          <p>
            Timber frame hybrid construction can be aesthetically pleasing due to the craftsmanship of using indigenous local hardwoods. The overall project combines timber with state-of-the-art insulating practices to yield very high efficiency, maintaining comfort in the home.
          </p>

          <p>
            A few ideas for achieving a higher R-value for the structural envelope include larger width wall plates. I prefer to see deep wall thickness for windows and doors to have the width for sills and door jambs. Alternating 2×4&apos;s for the wall plates with 2×8 wall plates can lead to much higher overall R-values for the home.
          </p>

          <p>
            This enables you to minimize conductive heating and cooling from the outside elements of your structure. The article on{" "}
            <Link href="/foundations/frost-proof-footings/" className="text-primary hover:underline">frost-proof footings</Link>{" "}
            also helps with this minimization.
          </p>

          <h2 className="font-serif text-xl font-bold text-foreground mt-8">Encasement of the Structural Envelope</h2>

          <p>
            Encasement of the structural envelope has everything to do with how well your home remains comfortable year-round. Have you ever wondered how a 1/8th inch Styrofoam cup prevents heat transfer when drinking hot liquids? Imagine if you had a 1/2″ of this all around your home.
          </p>

          <p>
            There is a product called{" "}
            <a href="http://p2000insulation.com/p2000-insulation-system/how-p2000-works/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">P-2000</a>{" "}
            that can be used for all of the exterior walls and really makes the home very tight. A 1/2″ sheet of P-2000 has a space-aged Mylar coating to reflect with taped seams. When used with Iconene foam insulation, it is one of the most efficient methods you can use.
          </p>

          <p>
            It is also best to use P-2000 in all of the ceilings to keep the temperature and humidity in a controlled environment. A little more dollars up front save huge profits after just a few years. It is well worth looking into, with the expenses of heating and cooling.
          </p>

          <div className="bg-muted border border-border p-6 not-prose my-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Key Techniques</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Indigenous local hardwood timber framing",
                "2×8 wall plates for superior R-values",
                "P-2000 with Mylar coating on exterior walls and ceilings",
                "Iconene foam insulation for maximum air sealing",
                "Alternating stud patterns to break thermal bridging",
                "Deep window and door sills for improved performance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p>
            Combining all of these techniques — timber frame aesthetics, deep wall construction, P-2000 encasement, and ICF foundations — results in a home that is not only beautiful but extraordinarily comfortable and energy-efficient throughout the mountain seasons.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2">
          {["timber-frame", "wall-plates", "p-2000", "eco-friendly-building", "mac-brown-construction"].map((tag) => (
            <span key={tag} className="text-[10px] font-medium uppercase tracking-[0.1em] bg-muted px-3 py-1 text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        {/* Related */}
        <div className="mt-10 bg-muted p-6 border border-border">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Related Article</p>
          <Link
            href="/foundations/frost-proof-footings/"
            className="text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all"
          >
            Frost Proof Footings <ArrowRight size={12} />
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
            Interested in Timber Frame Construction?
          </h2>
          <p className="text-primary-foreground/90 mb-6 text-sm">
            We can design and build your custom timber frame home using local hardwoods and energy-efficient techniques that make your mountain home as beautiful as it is comfortable.
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
