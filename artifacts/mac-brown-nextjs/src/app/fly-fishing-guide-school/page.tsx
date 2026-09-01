import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Phone, Calendar, MapPin } from "lucide-react";
import { PriceTag } from "@/components/price-tag";

import { SchemaScript } from "@/components/schema-script";
import { courseSchema } from "@/lib/schema";
import { img } from "@/lib/asset";

export const metadata: Metadata = {
  title: { absolute: "Fly Fishing Guide School — Guide Training, Bryson City NC" },
  description: "Launch your guiding career with professional fly fishing guide school training in Western North Carolina. Curriculum covers casting, entomology, rowing, and business.",
  alternates: { canonical: "https://macbrownflyfish.com/fly-fishing-guide-school/" },
  openGraph: {
    title: "Fly Fishing Guide School — Mac Brown Fly Fish | Bryson City NC",
    description: "The only fly fishing guide school in the eastern United States. Four days in Bryson City, NC with the most credentialed instructor team in North America.",
    url: "https://macbrownflyfish.com/fly-fishing-guide-school/",
    images: [{ url: "https://macbrownflyfish.com/images/fall-river-fishing.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fly Fishing Guide School — Mac Brown Fly Fish | Bryson City NC",
    images: ["https://macbrownflyfish.com/images/fall-river-fishing.webp"],
  },
};

const instructorStats = [
  { stat: "4", label: "FFI Master Casting Instructors" },
  { stat: "5", label: "Certified Whitewater Rowing Instructors" },
  { stat: "3", label: "Fly Fishing Team USA Members" },
  { stat: "4", label: "Fly Fishing Team USA Coaches" },
  { stat: "3", label: "Book & National Magazine Authors" },
  { stat: "2", label: "Hall of Fame Inductees" },
  { stat: "1", label: "Field & Stream Angler of the Year" },
  { stat: "450+", label: "Combined Years of Field Experience" },
];

const curriculum = [
  "People skills — staying a positive and effective guide in all circumstances",
  "Reading water for both boating routes and fishing lies",
  "Oar frame and drift boat skills for guided float trips",
  "Guiding wade trips on mountain streams and tailwaters",
  "Line control and rod angles for all techniques and conditions",
  "Nymph, wet fly, dry fly, and streamer fishing — when and how",
  "Stream entomology — major insect hatches for North America",
  "Fly tying — developing confidence patterns for your fishery",
  "Single and double-handed fly casting from Master Casting Instructors",
  "Fly casting diagnostics — teaching casting to others",
  "Switch rod and Spey casting fundamentals",
  "Stream craft — reading and adjusting to changing feeding behavior",
  "Hook sets, fish playing, and landing fish cleanly",
  "Knots and rigging for fresh and saltwater applications",
  "Effective client communication — knowing when enough is enough",
  "Safety and legal considerations for professional guiding",
  "Basic photography for your clients",
  "Social media and online presence for your guiding business",
  "Client database management and repeat booking strategy",
  "Cover letters, references, and landing your first guide job",
  "Insurance and permit requirements for professional guides",
  "FFI casting certification pathways for career advancement",
];

const included = [
  { title: "Access to 300+ Fly Fishing Books & DVDs", desc: "Mac Brown's personal library of resources from the finest mentors in the sport — available every evening for research and independent study." },
  { title: "100+ High-End Fly Rods", desc: "A vast selection of rods with different actions available to cast and compare throughout the four days. Understanding equipment from the inside out." },
  { title: "Multiple Fly Line Tapers", desc: "Full access to a wide range of fly line configurations — understanding how different tapers perform and what each one is designed to do." },
  { title: "Complete Fly Tying Setup", desc: "All materials and equipment for fly tying provided. Learn to develop the confidence patterns that will serve you on your home water." },
  { title: "Double Handed Rod Introduction", desc: "Switch rod and Spey casting instruction included — an increasingly essential skill set for the modern professional guide." },
  { title: "Job Placement Directory", desc: "One of the largest directories of top lodges and outfitters worldwide — provided at graduation to support your job search immediately." },
  { title: "Graduation Celebration", desc: "The final evening of the school is a celebration of the four days and the community built around it." },
];

const whoFor = [
  { title: "Career Changers", desc: ["You have always wanted to work outdoors doing what you love — and the idea of spending your days on world-class trout water, sharing your passion with others, beats sitting behind a desk in an office that has nothing to do with who you really are. The guide school provides the credentials, the skills, the job placement resources, and the professional network to make that transition real.", "Fly fishing guides work in some of the most beautiful places on earth. They spend their days doing something that most people only dream about — and they get paid for it. The path from where you are now to a first guiding position at a premier lodge or outfitter starts here. Many of our graduates are on the water professionally within one season of completing the program."] },
  { title: "Growth-Minded Skill Builders", desc: ["You have been fly fishing for years — maybe decades. You catch fish. But something is missing. You see a hatch come off and freeze — unsure what the fish are taking or what your plan of attack should be. You tie on a three-fly rig and end up with a bird's nest before the first cast. You watch a rising fish work a seam for twenty minutes and never figure out the angle or the presentation that would have fooled it. You have been self-teaching and guessing, filling gaps with gear purchases instead of knowledge.", "The guide school eliminates all of that in four days. You leave understanding why fish do what they do, what the water is telling you, and how to execute the cast and the drift that the situation demands — every time. Not because you memorized rules. Because you finally understand the mechanics and strategies underneath the sport.", "Most of our students are in this track. They are not here to become guides. They are here because they are serious about the sport and they want to fly fish at a level that most anglers never reach — and they are smart enough to know that four days with the right teachers gets them there faster than another decade of self-teaching."] },
  { title: "Aspiring Instructors", desc: ["You want to teach the sport — and the people you want to teach matter deeply to you. Maybe you lead a fly fishing club and want to bring real instructional depth to your members. Maybe you work with a Scout troop, a high school outdoor program, or a university recreation department and want to give young people a genuine foundation in the sport — not just a fun afternoon with a rod. Maybe you are a parent who wants to share the fascination of fly fishing and fly casting with your family in a way that actually sticks.", "The guide school covers the casting diagnostics, communication skills, and teaching methodology that professional instruction demands — giving you the tools to teach effectively in any setting, at any skill level, to any audience. Whether you want to instruct privately, through a fly shop, as part of a guide operation, or simply within your own community — these four days give you the foundation to do it right."] },
];

export default function FlyFishingGuideSchool() {
  return (
    <div className="w-full">
      <SchemaScript schema={courseSchema({
        price: "4850",
        name: "Fly Fishing Guide School — Professional Guide Training, Western NC",
        description: "Week-long professional fly fishing guide training in Bryson City, North Carolina, led by Mac Brown — the only FFI Master Casting Instructor in North Carolina, a certified casting examiner for Fly Fishers International, and the author of Casting Angles. This is the only professional guide school in the eastern United States. Students cover the complete guide toolkit: casting instruction methodology, entomology and fish behavior, drift boat rowing, trip planning, and the business fundamentals of running a guide operation. Mac has been guiding on the Tuckasegee River since 1987.",
        url: "/fly-fishing-guide-school",
        image: "https://macbrownflyfish.com/images/fall-river-fishing.webp",
        educationalLevel: "Advanced",
        coursePrerequisites: "Solid fly fishing and fly casting experience required. Students should be comfortable with an overhead cast and ideally with roll casting. This school is not appropriate for complete beginners to fly fishing.",
        teaches: [
          "Casting instruction methodology and teaching progressions",
          "Entomology and fly selection for client guiding",
          "Drift boat rowing and river navigation",
          "Trip planning and professional client communication",
          "Business fundamentals for running a guide operation",
          "Advanced fishing techniques for guide-level presentation",
          "FFI casting instructor certification preparation",
        ],
        sessions: [{ startDate: "2026-10-15", endDate: "2026-10-18" }, { startDate: "2026-11-12", endDate: "2026-11-15" }],
      })} />
      <SchemaScript schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What is a fly fishing guide school?", acceptedAnswer: { "@type": "Answer", text: "A fly fishing guide school is a structured professional training program that prepares anglers to work as licensed fly fishing guides. It goes beyond personal skill development to cover water reading, client communication, rowing, stream safety, business operations, and casting instruction — everything required to guide clients on moving water professionally." } },
          { "@type": "Question", name: "Who should attend fly fishing guide school?", acceptedAnswer: { "@type": "Answer", text: "The Fly Fishing Guide School serves two tracks. The first is career changers — anglers who want to guide professionally and earn a living on the water. The second — and most common — is growth-minded skill-builders: experienced anglers who have plateaued, who freeze when a hatch comes off, who struggle with multi-fly rigs, who know they are missing something fundamental but can't identify what. Both tracks receive the same world-class instruction from the same faculty. The difference is what you do with it when you leave." } },
          { "@type": "Question", name: "Why is Bryson City NC the best location for fly fishing guide school?", acceptedAnswer: { "@type": "Answer", text: "Bryson City sits at the center of over 2,400 miles of wild trout water in Swain County alone. The Great Smoky Mountains National Park and Nantahala National Forest protect over 85% of the county's land, providing a diverse and demanding classroom that no other guide school location can match. Western North Carolina produces more world-champion fly fishing competition anglers than any other region in the country." } },
          { "@type": "Question", name: "How is fly fishing guide school different from a guided fly fishing trip?", acceptedAnswer: { "@type": "Answer", text: "A guided trip puts you on the water with an expert for a day of fishing. Guide school puts you in a 4-day professional training program covering casting mechanics, water reading, rowing, entomology, client communication, and business — building the skills to guide others, not just fish yourself." } },
          { "@type": "Question", name: "Who teaches at the Fly Fishing Guide School in Bryson City?", acceptedAnswer: { "@type": "Answer", text: "The school is led by Mac Brown, the only FFI Master Casting Instructor in North Carolina and recipient of the FFI Lifetime Achievement Award. Instruction is drawn from a featured group of educators that includes FFI Master Casting Instructors, certified whitewater rowing instructors, Fly Fishing Team USA members, Team USA coaches, and Hall of Fame inductees — 450+ combined years of field experience across the faculty." } },
        ],
      }} />
      {/* HERO */}
      <section className="relative w-full aspect-video max-h-screen min-h-[500px] sm:min-h-[380px] overflow-hidden">
        <img
          src={img("/images/fall-river-fishing.webp")}
          srcSet={`${img("/images/mobile/fall-river-fishing.webp")} 800w, ${img("/images/fall-river-fishing.webp")} 1440w`}
          sizes="100vw"
          alt="Fly Fishing Guide School — Mac Brown Fly Fish, Bryson City NC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16 sm:pt-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">
            Bryson City, North Carolina · The Only Guide School in the East
          </p>
          <h1 className="font-serif text-4xl sm:text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-5">
            Fly Fishing Guide School — Bryson City, NC
          </h1>
          <p className="text-white/70 text-base md:text-lg font-serif italic max-w-2xl">
            Four days. The most credentialed instructors in North America. A career — or the skills of one — waiting on the other side.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-10">
            <a
              href="https://flyfishingguideschool.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Visit the Official Guide School Site <ArrowRight size={14} />
            </a>
            <a
              href="tel:+18287360019"
              className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              <Phone size={14} /> (828) 736-0019
            </a>
          </div>
        </div>
      </section>

      {/* AEO */}
      <section className="py-12 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted-foreground text-lg leading-relaxed">The Fly Fishing Guide School in Bryson City, NC is the most comprehensive professional guide training program in the eastern United States — a four-day intensive covering fly casting at the Master Instructor level, whitewater rowing certification, water reading, rigging, guiding methodology, and stream entomology in the field. Operating since 1987 with instruction drawn from a featured group of educators — including FFI Master Casting Instructors, certified whitewater rowing instructors, Fly Fishing Team USA members, and Team USA coaches — 450+ combined years of experience across the faculty. For those ready to turn fly fishing into professional development and a career in the great outdoors, this is the most credentialed path available anywhere in the East. Tuition is <PriceTag priceKey="guideSchool" as="span" />. Limited enrollment for personalized instruction.</p>
          <p className="text-muted-foreground text-base mt-4">Looking to improve your own fishing rather than start a guiding career? See our{" "}<a href="https://flyfishingguideschool.com/smoky-mountain-fly-fishing-school/" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">Skills Track <ArrowRight size={14} /></a></p>
        </div>
      </section>

      {/* PHOTO DIVIDER — Choose Your Path */}
      <div className="grid grid-cols-2 gap-0">
        <a href="https://flyfishingguideschool.com/smoky-mountain-fly-fishing-school/" className="relative aspect-video overflow-hidden group block">
          <img
            src={img("/images/casting-class-2.webp")}
            srcSet={`${img("/images/mobile/casting-class-2.webp")} 800w, ${img("/images/casting-class-2.webp")} 1920w`}
            sizes="50vw"
            alt="Fly casting instruction — Smoky Mountain Fly Fishing School, Bryson City NC"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="text-white/70 text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-2">Skills Track</p>
            <h3 className="font-serif text-lg sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-2">Recreational Anglers</h3>
            <p className="text-white/80 text-xs sm:text-sm mb-4 hidden sm:block">Smoky Mountain Fly Fishing School</p>
            <span className="inline-flex items-center gap-1.5 border border-white/60 text-white text-[10px] sm:text-xs uppercase tracking-[0.15em] px-3 sm:px-4 py-1.5 sm:py-2 group-hover:bg-white group-hover:text-foreground transition-colors duration-300 font-semibold">
              Learn More <ArrowRight size={12} />
            </span>
          </div>
        </a>
        <a href="https://flyfishingguideschool.com" target="_blank" rel="noopener noreferrer" className="relative aspect-video overflow-hidden group block">
          <img
            src={img("/images/guide-fish-1.webp")}
            srcSet={`${img("/images/mobile/guide-fish-1.webp")} 800w, ${img("/images/guide-fish-1.webp")} 1920w`}
            sizes="50vw"
            alt="Professional fly fishing guide training — Fly Fishing Guide School, Bryson City NC"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="text-white/70 text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-2">Career Track</p>
            <h3 className="font-serif text-lg sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-2">Professional Development</h3>
            <p className="text-white/80 text-xs sm:text-sm mb-4 hidden sm:block">Fly Fishing Guide School</p>
            <span className="inline-flex items-center gap-1.5 border border-white/60 text-white text-[10px] sm:text-xs uppercase tracking-[0.15em] px-3 sm:px-4 py-1.5 sm:py-2 group-hover:bg-white group-hover:text-foreground transition-colors duration-300 font-semibold">
              Learn More <ArrowRight size={12} />
            </span>
          </div>
        </a>
      </div>

      {/* DETAILS STRIP */}
      <div className="bg-primary text-primary-foreground py-5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
          <div className="flex items-center gap-3"><Calendar size={16} className="shrink-0 opacity-70" /><span className="text-sm font-semibold tracking-wide">March – November 2026</span></div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <div className="flex items-center gap-3"><MapPin size={16} className="shrink-0 opacity-70" /><span className="text-sm font-semibold tracking-wide">Bryson City, NC · Great Smoky Mountains</span></div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <PriceTag priceKey="guideSchool" as="span" className="text-sm font-bold tracking-wide" />
        </div>
      </div>

      {/* INTRO */}
      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Bryson City, NC</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            The Only Fly Fishing Guide School in the Eastern United States
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              The Fly Fishing Guide School in Bryson City, North Carolina is the only 4-day fly fishing guide school in the eastern United States — taught by a featured group of educators that includes FFI Master Casting Instructors — 450+ combined years of field experience across the faculty. Sessions run March through November. Tuition is <PriceTag priceKey="guideSchool" as="span" /> — <a href="https://flyfishingguideschool.com/is-fly-fishing-guide-school-worth-it/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-75 transition-opacity">see the full cost and value breakdown</a> on the guide school site.
            </p>
            <p>
              There is a difference between learning to fly fish and learning to guide it. One is a personal journey. The other is a professional one — and it demands a completely different level of instruction, preparation, and practical experience. The Fly Fishing Guide School at Bryson City, North Carolina is built around that distinction.
            </p>
            <p>
              Located in the heart of what serious anglers call the Trout Mecca of the South, this four-day intensive program is the only guide school of its kind in the eastern United States. Bryson City's milder winters allow longer seasons than any other guide school in the country — and the water surrounding it provides the most diverse and demanding classroom available anywhere in the region.
            </p>
            <p>
              Whether you are pursuing fly fishing guiding as a career, seeking a lifestyle change that puts you on the water every day, or simply wanting to deepen your skills to a professional level — this school delivers an all-encompassing four days that changes the way you understand and experience the sport permanently.
            </p>
          </div>
        </div>
      </section>

      {/* INSTRUCTOR TEAM */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">The Faculty</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            The Instructor Team — Unmatched Anywhere in North America
          </h2>
          <p className="text-muted-foreground text-center leading-relaxed mb-6 max-w-2xl mx-auto">
            The quality of a guide school is only as good as the people teaching it. Mac Brown has assembled what he genuinely believes — and the credentials support — is the finest team of fly fishing educators ever brought together for a single program in North America.
          </p>
          <p className="text-center mb-10">
            <a href="https://flyfishingguideschool.com/meet-rowing-fly-casting-fly-fishing-instructors/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary font-semibold text-sm underline underline-offset-4 hover:text-primary/80 transition-colors">
              View the full instructor credentials →
            </a>
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {instructorStats.map((item, i) => (
              <div key={i} className="bg-background border border-border p-6 flex items-center gap-5">
                <span className="font-serif text-4xl font-bold text-primary shrink-0">{item.stat}</span>
                <span className="text-foreground font-semibold leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
          <blockquote className="border-l-2 border-primary pl-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground italic text-lg leading-relaxed">
              "I am just humbly stating the facts so you know the level of professionalism you are walking into."
            </p>
            <footer className="mt-3 text-sm font-semibold uppercase tracking-wider text-primary">— Mac Brown</footer>
          </blockquote>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Curriculum</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            What the Program Covers
          </h2>
          <p className="text-muted-foreground text-center leading-relaxed mb-10 max-w-2xl mx-auto">
            The school is built around what Mac Brown calls the triad — strategies, tactics, and mechanics. Every topic covered during the program connects back to this foundation and to the practical reality of guiding clients on moving water in real conditions.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {curriculum.map((topic, i) => (
              <li key={i} className="flex items-start gap-3 bg-muted/30 border border-border p-4">
                <Check size={15} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Included</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center leading-tight">
            What Is Included
          </h2>
          <p className="text-muted-foreground text-center leading-relaxed mb-10 max-w-2xl mx-auto">
            The guide school is a fully immersive four-day program — structured to maximize learning from the moment you arrive to the celebration on the final evening.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {included.map((item, i) => (
              <div key={i} className="bg-background border border-border p-6">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Is This for You?</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center leading-tight">
            Who This School Is For
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {whoFor.map((item, i) => (
              <div key={i} className="bg-background border border-border p-6">
                <div className="w-8 h-0.5 bg-primary mb-4" />
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">{item.title}</h3>
                {Array.isArray(item.desc)
                  ? <div className="space-y-3">{item.desc.map((p, j) => <p key={j} className="text-muted-foreground text-sm leading-relaxed">{p}</p>)}</div>
                  : <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">The Classroom</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            The Location — Bryson City, NC
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Bryson City is not just a convenient location for a guide school — it is the ideal one. The Trout Mecca of the South sits at the center of over 2,400 miles of wild trout water in Swain County alone. The Great Smoky Mountains National Park and the Nantahala National Forest together protect over 85% of the county's land area, ensuring the classroom never runs out of diverse, demanding, and genuinely wild water to fish and learn on.
            </p>
            <p>
              The milder winters of Western North Carolina mean the guide school runs longer seasons than any other program in the country — from March through November annually. The water fishes year-round. The learning never stops.
            </p>
            <p>
              In the evenings, Bryson City offers everything a 4-day school needs — comfortable lodging, good food, the community of the Nantahala Brewing Company, and the kind of small mountain town atmosphere that makes a few days away from home genuinely enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* WAGES & CAREER */}
      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">The Career</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center leading-tight">
            What Guiding Pays — and What It Offers Beyond Money
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Landing your first job as a fly fishing guide working for an outfitter or lodge typically pays between $2,400 and $3,000 per month — with significantly higher earning potential for experienced independent guides working their home water. Many guides supplement their income with fly casting instruction, schools, and clinics — which is exactly what this school prepares you for.
            </p>
            <p>
              But the numbers tell only part of the story. Guiding fly fishing for a living means daily access to some of the finest water in the world, the privilege of sharing the sport with people who will remember those days for the rest of their lives, and a connection to wild places that very few careers can offer.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Common Questions</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-border">
            {[
              {
                q: "What is a fly fishing guide school?",
                a: "A fly fishing guide school is a structured professional training program that prepares anglers to work as licensed fly fishing guides. It goes beyond personal skill development to cover water reading, client communication, rowing, stream safety, business operations, and casting instruction — everything required to guide clients on moving water professionally.",
              },
              {
                q: "Who should attend fly fishing guide school?",
                a: "The Fly Fishing Guide School serves two tracks. The first is career changers — anglers who want to guide professionally and earn a living on the water. The second — and most common — is growth-minded skill-builders: experienced anglers who have plateaued, who freeze when a hatch comes off, who struggle with multi-fly rigs, who know they are missing something fundamental but can't identify what. Both tracks receive the same world-class instruction from the same faculty. The difference is what you do with it when you leave.",
              },
              {
                q: "Why is Bryson City NC the best location for fly fishing guide school?",
                a: "Bryson City sits at the center of over 2,400 miles of wild trout water in Swain County alone. The Great Smoky Mountains National Park and Nantahala National Forest protect over 85% of the county's land, providing a diverse and demanding classroom that no other guide school location can match. Western North Carolina produces more world-champion fly fishing competition anglers than any other region in the country.",
              },
              {
                q: "How is fly fishing guide school different from a guided fly fishing trip?",
                a: "A guided trip puts you on the water with an expert for a day of fishing. Guide school puts you in a 4-day professional training program covering casting mechanics, water reading, rowing, entomology, client communication, and business — building the skills to guide others, not just fish yourself.",
              },
              {
                q: "Who teaches at the Fly Fishing Guide School in Bryson City?",
                a: "The school is led by Mac Brown, the only FFI Master Casting Instructor in North Carolina and recipient of the FFI Lifetime Achievement Award. Instruction is drawn from a featured group of educators that includes FFI Master Casting Instructors, certified whitewater rowing instructors, Fly Fishing Team USA members, Team USA coaches, and Hall of Fame inductees — 450+ combined years of field experience across the faculty.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                  <span className="font-serif text-lg font-bold text-foreground leading-snug">{q}</span>
                  <span className="shrink-0 text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="block group-open:hidden"><path d="m6 9 6 6 6-6"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden group-open:block"><path d="m18 15-6-6-6 6"/></svg>
                  </span>
                </summary>
                <p className="pt-3 pb-1 text-muted-foreground leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Ready to Make the Move?</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Four Days Change Everything
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            The Fly Fishing Guide School runs March through November in Bryson City, NC. Full curriculum, credentialed faculty, and job placement resources included. Visit the official guide school site or call Mac Brown directly to learn about the next available session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://flyfishingguideschool.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Official Guide School Site <ArrowRight size={14} />
            </a>
            <a
              href="tel:+18287360019"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              <Phone size={14} /> (828) 736-0019
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
