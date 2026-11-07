import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Check } from "lucide-react";
import { img } from "@/lib/asset";
import { localBusinessSchema, personSchema } from "@/lib/schema";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Mac Brown Construction specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mac Brown Construction specializes in custom home building, timber frame hybrid construction, and energy-efficient green building in Bryson City, NC and surrounding Western North Carolina. Every project is built above code minimums — using ICF foundations, P-2000 insulation, frost-proof footings, radiant floors, and geothermal systems. Over 35 years of hands-on building in the Smoky Mountains with an NC Unlimited General Contractor license.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to build a custom home in the Smoky Mountains?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom home costs in Western North Carolina vary significantly based on square footage, site conditions, materials, and specification level. Contact Mac Brown Construction at (828) 736-1469 for a free estimate tailored to your project. Building in the mountains requires additional considerations for foundations, site access, and energy efficiency — Mac Brown Construction has been navigating all of these variables in Swain County since 1988.",
      },
    },
    {
      "@type": "Question",
      name: "What is an ICF foundation and why is it better?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ICF — Insulated Concrete Form — foundations use interlocking foam blocks filled with concrete to create a foundation wall that is structurally superior and dramatically better insulated than standard poured concrete or block foundations. ICF walls provide continuous insulation with no thermal bridging, significantly reducing heating and cooling loads in mountain climates.",
      },
    },
    {
      "@type": "Question",
      name: "What is timber frame hybrid construction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timber frame hybrid construction combines the aesthetic appeal of exposed indigenous local hardwood timbers with modern state-of-the-art insulating practices — creating homes that are visually stunning and energy efficient. The timber frame provides structural character while the hybrid shell uses contemporary insulation methods to achieve tight envelopes that standard timber frame construction cannot match.",
      },
    },
    {
      "@type": "Question",
      name: "Does Mac Brown Construction serve areas outside Bryson City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Mac Brown Construction holds an NC Unlimited General Contractor license covering all project sizes throughout Western North Carolina. Primary service area includes Swain County, Jackson County, Macon County, and surrounding mountain communities. Contact Mac Brown directly at (828) 736-1469 to discuss your project location and scope.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Mac Brown Construction | Custom Home Builder | Bryson City, NC",
  description:
    "Mac Brown Construction — custom home builder and licensed general contractor in Bryson City, NC since 1988. Energy-efficient, sustainable custom homes built to last in the Smoky Mountains.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative w-full h-screen min-h-[560px] overflow-hidden">
        <img
          src={img("/images/timber-frame.webp")}
          srcSet={`${img("/images/mobile/timber-frame.webp")} 1280w, ${img("/images/timber-frame.webp")} 1920w`}
          alt="Timber frame construction by Mac Brown Construction, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 35%" }}
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/30" />

        <div className="absolute top-0 left-0 right-0 flex flex-col items-center pt-28 pointer-events-none">
          <div className="h-px w-8 bg-white/40 mb-3" />
          <p className="text-white/75 text-[11px] font-semibold uppercase tracking-[0.4em]">Mac Brown Construction, LLC</p>
          <p className="text-white/45 text-[9px] uppercase tracking-[0.25em] mt-1.5">Bryson City, North Carolina · Est. 1988</p>
          <div className="h-px w-8 bg-white/40 mt-3" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-20 pb-16 md:pb-20">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-[0.35em] mb-4">Smoky Mountains · Swain County</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight max-w-3xl mb-10" style={{ whiteSpace: "pre-line" }}>
            {"Built to Last.\nBuilt to Breathe."}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-white/90 transition-colors w-fit">
              Get a Free Estimate <ArrowRight size={14} />
            </Link>
            <Link href="/custom-home-builder/" className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-white/10 transition-colors w-fit">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 md:py-14 px-6 max-w-3xl mx-auto text-center">
        <p className="text-muted-foreground leading-relaxed">
          Mac Brown Construction has been building custom homes, cabins, and timber frame structures in Bryson City, NC since 1988 — held to an NC Unlimited General Contractor license and a standard that starts where building codes end. Every home is built with energy efficiency as a core principle: ICF foundations, foam insulation, frost-proof footings, radiant floors, and geothermal systems that reduce energy costs for decades. Hands-on builder from groundbreaking to final walk-through in Swain County and surrounding Western North Carolina.
        </p>
      </section>

      {/* Details strip */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          {[
            "Est. 1988",
            "NC Unlimited License",
            "Bryson City, NC",
            "(828) 736-1469",
          ].map((item) => (
            <div key={item} className="text-center flex-1 min-w-[120px]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/90">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 md:py-28 px-6 max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-5">Custom Home Builder</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-7 leading-snug">
          Your Dream Home, Engineered for the Mountains
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Mac Brown Construction has been building custom homes in western North Carolina for over three decades. We specialize in energy-efficient construction that goes far beyond code minimums — tighter envelopes, superior insulation, and green building practices that save you money for years to come.
        </p>
        <blockquote className="border-l-4 border-primary/30 pl-6 text-left italic text-muted-foreground text-sm">
          "We can far surpass the code overall for energy savings that will save you large amounts of cash in the future."
        </blockquote>
      </section>

      {/* Services */}
      <section className="bg-muted py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary text-center mb-3">What We Build</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Custom Home Building",
                desc: "From design through completion, we build homes tailored to your exact vision — cabins, timber frames, and stick-built homes using the best materials and methods.",
                href: "/custom-home-builder/",
                srOnly: "about custom home building",
              },
              {
                title: "Green Building & Energy Efficiency",
                desc: "ICF foundations, frost-proof footings, P-2000 insulation, radiant floors, and geothermal systems. We build tight envelopes that save on energy for decades.",
                href: "/custom-home-builder/",
                srOnly: "about green building and energy efficiency",
              },
              {
                title: "General Contracting",
                desc: "NC Unlimited General Contractor license covering all project sizes — residential new construction, remodels, and commercial projects in Swain County and beyond.",
                href: "/about/",
                srOnly: "about our general contracting services",
              },
            ].map((s) => (
              <div key={s.title} className="bg-card p-8 border border-border">
                <div className="h-px w-8 bg-primary/40 mb-5" />
                <h3 className="font-serif text-lg font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
                <Link href={s.href} className="text-xs font-semibold uppercase tracking-[0.15em] text-primary flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <span className="sr-only">{s.srOnly}</span> <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">Why Choose Us</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">Above the Minimum. Always.</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Building codes are the bare minimum. We treat them as the starting line — not the finish line. Every home we build is designed to be more comfortable, more efficient, and more durable than code requires.
            </p>
            <ul className="space-y-3">
              {[
                "Hands-on builder from start to finish",
                "Over 35 years in western North Carolina",
                "NC Unlimited General Contractor license",
                "Specializing in sustainable, energy-efficient methods",
                "Custom plans drawn in-house to your specs",
                "ICF foundations, foam insulation, radiant floors",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img("/images/timber-frame.webp")}
                srcSet={`${img("/images/mobile/timber-frame.webp")} 1280w, ${img("/images/timber-frame.webp")} 1920w`}
                alt="Timber frame construction"
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img("/images/icf-foundation.webp")}
                srcSet={`${img("/images/mobile/icf-foundation.webp")} 800w, ${img("/images/icf-foundation.webp")} 1920w`}
                alt="ICF foundation construction"
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img("/images/interior-1.webp")}
                srcSet={`${img("/images/mobile/interior-1.webp")} 400w, ${img("/images/interior-1.webp")} 467w`}
                alt="Custom home interior finish work by Mac Brown Construction"
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img("/images/contact-bg.webp")}
                srcSet={`${img("/images/mobile/contact-bg.webp")} 360w, ${img("/images/contact-bg.webp")} 400w`}
                alt="Residential construction project by Mac Brown Construction, Bryson City NC"
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="bg-muted py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary text-center mb-3">From the Blog</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-12">Building Tips & Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Frost Proof Footings",
                excerpt: "With cold weather around, this is a great time to discuss the use of frost proof footings and ICF foundations. Simple, cost-effective, and remarkably effective for mountain climates.",
                href: "/foundations/frost-proof-footings/",
                img: img("/images/icf-foundation.webp"),
                imgMobile: img("/images/mobile/icf-foundation.webp"),
                category: "Foundations",
              },
              {
                title: "Timber Frame Hybrid Construction",
                excerpt: "Timber frame hybrid construction can be aesthetically pleasing due to the craftsmanship of using indigenous local hardwoods, combined with state-of-the-art insulating practices.",
                href: "/wall-plates/timber-frame-hybrid-construction/",
                img: img("/images/timber-frame.webp"),
                imgMobile: img("/images/mobile/timber-frame.webp"),
                category: "Wall Plates",
              },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="group bg-card border border-border overflow-hidden flex flex-col">
                <div className="aspect-[16/7] overflow-hidden">
                  <img
                    src={post.img}
                    srcSet={post.imgMobile ? `${post.imgMobile} 1280w, ${post.img} 1920w` : undefined}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-3">{post.category}</p>
                  <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <span className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6 max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary text-center mb-3">FAQ</p>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="divide-y divide-border border-t border-border">
          {[
            {
              q: "What does Mac Brown Construction specialize in?",
              a: "Mac Brown Construction specializes in custom home building, timber frame hybrid construction, and energy-efficient green building in Bryson City, NC and surrounding Western North Carolina. Every project is built above code minimums — using ICF foundations, P-2000 insulation, frost-proof footings, radiant floors, and geothermal systems where applicable. Over 35 years of hands-on building in the Smoky Mountains with an NC Unlimited General Contractor license.",
            },
            {
              q: "How much does it cost to build a custom home in the Smoky Mountains?",
              a: "Custom home costs in Western North Carolina vary significantly based on square footage, site conditions, materials, and specification level. Contact Mac Brown Construction at (828) 736-1469 for a free estimate tailored to your project. Building in the mountains requires additional considerations for foundations, site access, and energy efficiency — Mac Brown Construction has been navigating all of these variables in Swain County since 1988.",
            },
            {
              q: "What is an ICF foundation and why is it better?",
              a: "ICF — Insulated Concrete Form — foundations use interlocking foam blocks filled with concrete to create a foundation wall that is structurally superior and dramatically better insulated than standard poured concrete or block foundations. ICF walls provide continuous insulation with no thermal bridging, significantly reducing heating and cooling loads in mountain climates. Mac Brown Construction recommends ICF foundations for all new construction in Western North Carolina.",
            },
            {
              q: "What is timber frame hybrid construction?",
              a: "Timber frame hybrid construction combines the aesthetic appeal of exposed indigenous local hardwood timbers with modern state-of-the-art insulating practices — creating homes that are visually stunning and energy efficient. The timber frame provides the structural character while the hybrid shell uses contemporary insulation methods to achieve tight envelopes that standard timber frame construction cannot match. Mac Brown Construction has been building timber frame hybrid homes in the Smoky Mountains since the early 1990s.",
            },
            {
              q: "Does Mac Brown Construction serve areas outside Bryson City?",
              a: "Yes — Mac Brown Construction holds an NC Unlimited General Contractor license covering all project sizes throughout Western North Carolina. Primary service area includes Swain County, Jackson County, Macon County, and surrounding mountain communities. Contact Mac Brown directly at (828) 736-1469 to discuss your project location and scope.",
            },
          ].map(({ q, a }) => (
            <details key={q} className="group py-1">
              <summary className="flex items-center justify-between py-4 cursor-pointer list-none gap-4">
                <span className="font-semibold text-sm leading-snug">{q}</span>
                <span className="shrink-0 text-primary font-light text-xl leading-none group-open:hidden">+</span>
                <span className="shrink-0 text-primary font-light text-xl leading-none hidden group-open:block">−</span>
              </summary>
              <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Ready to Build Your Dream Home?</h2>
          <p className="text-primary-foreground/90 mb-8 text-sm leading-relaxed">
            Let&apos;s discuss your project. From design and planning all the way through to the finished structure — we&apos;re with you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              Request an Estimate <ArrowRight size={14} />
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
