import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Sponsors & Partners — Mac Brown Fly Fish" },
  description: "Mac Brown Fly Fish is proud to partner with leading fly fishing brands and conservation organizations. Meet our sponsors.",
  alternates: { canonical: "https://macbrownflyfish.com/sponsors/" },
  openGraph: {
    title: "Sponsors & Partners — Mac Brown Fly Fish",
    description: "Industry partnerships with Scientific Anglers, TFO, Patagonia, and more.",
    url: "https://macbrownflyfish.com/sponsors/",
    images: [{ url: "https://macbrownflyfish.com/images/flies-closeup.webp" }],
  },
};

const advisorBrands = [
  { name: "Scientific Anglers", logo: "/images/sponsors/scientific-anglers.webp", url: "https://scientificanglers.com/portfolio/mac-brown/", role: "National Advisor", desc: "One of fly fishing's most storied names in fly lines and leader systems. A working partnership built on decades of field testing, university lab studies, and a genuine investment in advancing the science of casting." },
  { name: "Temple Fork Outfitters", logo: "/images/sponsors/temple-fork.webp", url: "https://www.tforods.com", role: "National Advisor", desc: "High-performance fly rods designed to perform at every level of the sport. TFO's commitment to accessibility and quality aligns with the belief that great instruction deserves great tools — at every price point." },
];

const ambassadors = [
  { name: "Patagonia", logo: "/images/sponsors/patagonia.webp", url: "https://www.patagonia.com", desc: "Gear and apparel built with as much integrity as the wild places it's designed for. A company whose commitment to conservation mirrors the values at the heart of everything taught on these rivers." },
  { name: "Regal Vise", logo: "/images/sponsors/regal-vise.webp", url: "https://www.regalvise.com", desc: "The standard by which fly tying vises are measured. Precision, durability, and a grip that doesn't let go — qualities that matter whether you're at the bench or streamside demonstrating a pattern to a student." },
  { name: "Whiting Hackle", logo: "/images/sponsors/whiting-hackle.webp", url: "https://www.whitingfarms.com", desc: "Quite simply the finest fly tying hackle produced in the world. When the fly has to be right, the feather has to be right first." },
  { name: "Maxima", logo: "/images/sponsors/maxima.webp", url: "https://www.maxima-lines.com", desc: "Leader and tippet material trusted for its consistency, strength, and performance across the full range of conditions found on Southern Appalachian streams and beyond." },
  { name: "Ross Reels", logo: "/images/sponsors/ross-reels.webp", url: "https://www.rossreels.com", desc: "American-made fly reels built to last a lifetime on the water. Smooth, reliable, and worthy of the rods they're paired with." },
  { name: "Grundéns", logo: "/images/sponsors/grundens.webp", url: "https://www.grundens.com", desc: "Waterproof outerwear that performs in the conditions most anglers would rather not think about — and that guides and serious anglers depend on when the weather turns serious." },
  { name: "Fish Pond", logo: "/images/sponsors/fishpond.webp", url: "https://www.fishpond.com", desc: "Thoughtfully designed packs, bags, and accessories built for the way anglers actually move through the water and the landscape. Functional, durable, and made with environmental responsibility in mind." },
];

export default function Sponsors() {
  return (
    <div className="w-full">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <img src={img("/images/flies-closeup.webp")} srcSet={`${img("/images/mobile/flies-closeup.webp")} 800w, ${img("/images/flies-closeup.webp")} 1920w`} sizes="100vw" alt="Fly fishing flies and gear used by Mac Brown Fly Fish, Bryson City NC" className="absolute inset-0 w-full h-full object-cover object-center" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Industry Partnerships</p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">Sponsors &amp; Partners</h1>
          <p className="text-white/55 text-base italic mt-4 font-serif max-w-lg">The gear behind the instruction — and the trust behind the gear.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted-foreground leading-relaxed text-lg">Great teaching requires great tools. But more than that, it requires an honest relationship with the equipment you put in your students' hands and recommend to the anglers who trust your judgment. Every brand represented here has earned that place through years of use on the water, in the classroom, and in conditions that separate what works from what merely looks good in a catalog.</p>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 leading-snug">National Advisor — Scientific Anglers &amp; Temple Fork Outfitters</h2>
          <div className="max-w-3xl space-y-5 mb-16">
            <p className="text-muted-foreground leading-relaxed">Mac Brown serves as a National Advisor to two of the most respected names in the industry — Scientific Anglers and Temple Fork Outfitters. These relationships go far beyond endorsement. They are working partnerships built on decades of field experience, hands-on instruction, and a genuine investment in moving the sport forward.</p>
            <p className="text-muted-foreground leading-relaxed">Years of teaching at Western Carolina University provided a unique opportunity to push the boundaries of what fly lines and rods are capable of — conducting studies in university labs that informed real advancements in line design, rod performance, and the mechanics of how casting equipment actually behaves under fishing conditions. That kind of rigorous, curiosity-driven testing doesn't happen in a marketing department. It happens when someone who teaches 250 days a year takes what they see students struggle with and asks the people building the equipment to do better.</p>
            <p className="text-muted-foreground leading-relaxed">The result is gear that has been shaped, in part, by the same casting principles taught in every lesson and school here in Bryson City.</p>
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-10">Advisory Roles</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {advisorBrands.map(b => (
              <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer" className="bg-white border border-border p-8 hover:border-primary/40 hover:shadow-sm transition-all duration-200 block group">
                <div className="h-20 w-full flex items-center justify-center mb-6"><img src={img(b.logo)} alt={`${b.name} logo`} className="h-full w-auto max-w-full" /></div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">{b.role}</p>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{b.name}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{b.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary group-hover:gap-2.5 transition-all">Visit website <ExternalLink size={11} /></span>
              </a>
            ))}
          </div>
          <blockquote className="pl-5 border-l-2 border-primary font-serif italic text-foreground/75 leading-relaxed text-lg max-w-2xl">"The best equipment doesn't just perform — it teaches. When a rod loads correctly and a line turns over the way it should, the angler feels what right is supposed to feel like. That feedback is irreplaceable."</blockquote>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Brand Ambassadors</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">Trusted on the Water</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">Mac Brown is proud to represent the following companies — not because of a contractual obligation, but because these are the tools he reaches for when the fishing matters and the instruction demands the best.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ambassadors.map(b => (
              <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer" className="border border-border p-6 hover:border-primary/40 hover:shadow-sm transition-all duration-200 block group">
                <div className="h-16 w-full flex items-center justify-center mb-5"><img src={img(b.logo)} alt={`${b.name} logo`} className="h-full w-auto max-w-full" /></div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{b.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{b.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary group-hover:gap-2.5 transition-all">Visit website <ExternalLink size={11} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10 font-serif italic">"These partnerships reflect a simple principle: the gear recommended here has been tested under real conditions, evaluated through the lens of instruction, and found worthy of the anglers who will use it. Nothing is here because of a catalog deal. Everything is here because it works."</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">Get in Touch <ArrowRight size={14} /></Link>
        </div>
      </section>
    </div>
  );
}
