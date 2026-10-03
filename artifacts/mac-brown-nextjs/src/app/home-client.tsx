import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { img } from "@/lib/asset";

const programs: {
  title: string;
  desc: string;
  href: string;
  src: string;
  srcSet: string;
  sizes: string;
}[] = [
  {
    title: "Start Here: Recreational Angler Path",
    desc: "Not sure where to begin? Most visitors are here to fish better — not to become a guide. Explore every school, clinic, and trip built for the recreational angler.",
    href: "/programs-overview",
    src: "/images/smoky-mountains.webp",
    srcSet: "/images/mobile/smoky-mountains.webp 800w, /images/smoky-mountains.webp 1920w",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  },
  {
    title: "Fly Fishing Guide School",
    desc: "Four days of professional guide training in Bryson City, NC. Casting at a teaching level, drift boat rowing, entomology, client communication, NC licensing, and the business of guiding.",
    href: "/fly-fishing-guide-school",
    src: "/images/upper-nantahala-nick.webp",
    srcSet: "/images/mobile/upper-nantahala-nick.webp 800w, /images/upper-nantahala-nick.webp 1920w",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  },
  {
    title: "Smoky Mountain Weekend Schools",
    desc: "Two-day fishing schools on Western NC's finest waters. Choose from dry fly, wet fly, nymph, and streamer clinics — all led by FFI Master Casting Instructors.",
    href: "/smoky-mountain-weekend-schools",
    src: "/images/fly-school-1.webp",
    srcSet: "/images/mobile/fly-school-1.webp 800w, /images/fly-school-1.webp 1920w",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  },
  {
    title: "Masterclass Casting Workshops",
    desc: "Weekend casting clinics for serious anglers: Masterclass, Fly Casting Mastery, Saltwater Elite, and Spey & Switch. Built to fix your loop and transform how you fish.",
    href: "/masterclass-fly-casting-workshop",
    src: "/images/casting-class-1.webp",
    srcSet: "/images/mobile/casting-class-1.webp 800w, /images/casting-class-1.webp 1920w",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  },
  {
    title: "Fly Casting Instruction",
    desc: "Private and group lessons with an FFI Master Casting Instructor. In-person in Bryson City or live online — fix your cast, add distance, and reach water you never could before.",
    href: "/fly-casting-instruction",
    src: "/images/casting-class-2.webp",
    srcSet: "/images/mobile/casting-class-2.webp 800w, /images/casting-class-2.webp 1920w",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  },
  {
    title: "Oar Frame Rowing School",
    desc: "Two days of hands-on drift boat instruction on moving water. River reading, boat control, oar frame rigging, safety, and whitewater classification.",
    href: "/drift-boat-rowing-school",
    src: "/images/salmon-river-rowing.webp",
    srcSet: "/images/mobile/salmon-river-rowing.webp 800w, /images/salmon-river-rowing.webp 1920w",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  },
  {
    title: "Guided Trips",
    desc: "Half and full-day guided wade, float, and lake trips on the Tuckasegee, Nantahala, and Great Smoky Mountains National Park streams. Wild trout, world-class water.",
    href: "/instructional-guided-trips",
    src: "/images/guide-fish-1.webp",
    srcSet: "/images/mobile/guide-fish-1.webp 800w, /images/guide-fish-1-1080.webp 1080w, /images/guide-fish-1.webp 1284w",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  },
  {
    title: "Groups, Corporate & Presentations",
    desc: "Custom fly fishing events for 2 to 200+. Casting clinics, stream-side outings, banquet presentations, and corporate programs for organizations nationwide since 1988.",
    href: "/group-corporate-fly-fishing",
    src: "/images/youth-group-instruction.webp",
    srcSet: "/images/mobile/youth-group-instruction.webp 800w, /images/youth-group-instruction-800.webp 800w, /images/youth-group-instruction.webp 1920w",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  },
];

export default function HomePage() {
  return (
    <div className="w-full">
      <section className="py-28 md:py-36">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">Fly Fishers International — Master Casting Instructor</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">More than fishing.<br />A life on the water.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Mac Brown has been guiding globally and teaching in the Southern Appalachians since 1987 — nearly four decades helping anglers of every skill level find their footing on the water. An FFI Master Casting Instructor, FFI Lifetime Achievement Award, Mel Krieger Award recipient, and Southern Fly Fishing Hall of Fame inductee, he serves as National Advisor to Scientific Anglers and Temple Fork Outfitters and as an Ambassador to many other leading brands.
          </p>
          <Link href="/bio-mac-brown" className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-[0.15em] hover:gap-4 transition-all">
            Our Story <ArrowRight size={14} />
          </Link>
        </div>
      </section>
      <section className="w-full aspect-[1280/777] overflow-hidden">
        <img
          src={img("/images/guide-fish-2-1280.webp")}
          srcSet={`${img("/images/guide-fish-2-800.webp")} 800w, ${img("/images/guide-fish-2-1280.webp")} 1280w`}
          sizes="100vw"
          alt="Wild brown trout caught fly fishing in Western North Carolina — Mac Brown Fly Fish, Bryson City NC"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </section>
      <section className="py-28 md:py-36 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">What We Offer</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Schools, Trips & Instruction</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((p) => (
              <Link key={p.title} href={p.href} className="group block">
                <div className="aspect-[3/2] overflow-hidden mb-6">
                  <img
                    src={img(p.src)}
                    srcSet={p.srcSet.split(",").map(e => { const parts = e.trim().split(" "); return `${img(parts[0])} ${parts[1]}`; }).join(", ")}
                    sizes={p.sizes}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-[0.15em] group-hover:gap-4 transition-all">Learn More <ArrowRight size={12} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-28 md:py-36">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="font-serif text-2xl md:text-4xl font-bold text-foreground leading-tight mb-8">
            &ldquo;The river teaches patience.<br />I just translate.&rdquo;
          </blockquote>
          <p className="text-muted-foreground text-sm uppercase tracking-[0.2em]">Mac Brown &mdash; Bryson City, NC</p>
        </div>
      </section>
      <section className="relative h-[50vh] overflow-hidden flex items-center justify-center">
        <img
          src={img("/images/waterfall.webp")}
          srcSet={`${img("/images/waterfall-800.webp")} 800w, ${img("/images/waterfall.webp")} 1440w`}
          sizes="100vw"
          alt="Smoky Mountains stream"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative text-center px-6">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-8">The River is Calling</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/reserve" className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors">
              Book Trip / Enroll <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
