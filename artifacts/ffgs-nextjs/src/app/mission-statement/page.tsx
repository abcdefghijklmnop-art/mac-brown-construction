import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { img } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "Our Mission — Fly Fishing Guide School, Bryson City NC" },
  description:
    "Setting the standard for professional fly fishing guide training — world-class instruction, conservation values, and a commitment to excellence.",
  alternates: { canonical: "https://flyfishingguideschool.com/mission-statement/" },
  openGraph: {
    title: "Our Mission | Fly Fishing Guide School",
    description: "Our mission: to set the standard for professional fly fishing guide training in America through world-class instruction and genuine conservation values.",
    url: "https://flyfishingguideschool.com/mission-statement/",
    images: [{ url: "/images/smokies-river-fall.webp", width: 1920, height: 1280, alt: "Fly fishing the Smoky Mountains — Fly Fishing Guide School" }],
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://flyfishingguideschool.com/mission-statement/#page",
  name: "Our Mission — Fly Fishing Guide School",
  description:
    "The Fly Fishing Guide School exists to set the standard for professional fly fishing guide training in America — through world-class instruction, genuine conservation values, and an uncompromising commitment to excellence.",
  url: "https://flyfishingguideschool.com/mission-statement/",
  about: {
    "@type": "EducationalOrganization",
    "@id": "https://flyfishingguideschool.com/#business",
    name: "Fly Fishing Guide School",
    url: "https://flyfishingguideschool.com",
    foundingDate: "1987",
    description:
      "The Fly Fishing Guide School in Bryson City, NC has developed professional fly fishing guides and instructors since 1987. Faculty includes 5 FFI Master Certified Casting Instructors, 3 Fly Fishing Team USA members, and 4 Team USA coaches with 450+ combined years of experience.",
  },
  author: {
    "@type": "Person",
    "@id": "https://macbrownflyfish.com/#mac-brown",
    name: "Mac Brown",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://flyfishingguideschool.com/#business",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://flyfishingguideschool.com/mission-statement/",
  },
};

const values = [
  {
    title: "Excellence in Education — Bar None",
    body: "There is no shortage of fly fishing experiences available in this country. What is genuinely rare is a program built from the ground up around excellence — where every day on the water is designed to make you measurably better. The Fly Fishing Guide School does not offer a weekend diversion. It offers four days of transformation, taught by the most credentialed instruction team in the Southeast, on some of the finest trout water in the eastern United States.",
  },
  {
    title: "Career-Ready from Day One",
    body: "Becoming a fly fishing guide requires more than being a skilled angler. It demands the ability to read people as well as rivers — to teach, to communicate, to row a drift boat safely, to run a professional business, and to earn the trust of a client on day one. Every element of the Guide School curriculum is built around that reality. We do not graduate students. We launch guides.",
  },
  {
    title: "Conservation at the Core",
    body: "The wild trout fisheries of western North Carolina are among the most irreplaceable natural resources in America. We take their protection personally. Every student who comes through this program leaves with a deep understanding of why catch-and-release matters, how aquatic ecosystems function, and what it means to be a true steward of the water — not simply a user of it.",
  },
  {
    title: "Honest, Science-Based Instruction",
    body: "Fly fishing is surrounded by folklore, misinformation, and decades of unexamined tradition. We have spent nearly four decades challenging bad information and replacing it with instruction grounded in physics, entomology, and thousands of days of direct observation on real water. What we teach works — not because someone said so, but because we can show you exactly why.",
  },
  {
    title: "The Smoky Mountains as Classroom",
    body: "There is no better place in the country to learn to guide than the Southern Appalachians. Freestone streams, tailwaters, trophy sections, wild brookies, brown trout, and rainbows — all within a short drive of Bryson City. The diversity of water types and conditions our students encounter in four days is unmatched anywhere in the East. The mountains are not just a backdrop here. They are part of the curriculum.",
  },
];

const objectives = [
  "Deliver the highest standard of professional fly fishing guide training available anywhere in the United States",
  "Produce guides who are technically skilled, professionally prepared, and personally excellent on the water",
  "Teach the full spectrum of fly fishing knowledge — casting mechanics, entomology, water reading, tactics, and strategy",
  "Foster genuine environmental stewardship in every student who completes the program",
  "Advance the profession of fly fishing guiding through rigorous, credentialed, world-class instruction",
  "Advocate for the protection of wild trout habitat and healthy aquatic ecosystems across the region",
  "Support the growth of fly fishing communities through education, mentorship, and shared knowledge",
  "Offer clear, honest guidance on equipment, licensing, business practices, and career development",
  "Correct the misinformation and myths that hold anglers back from reaching their full potential on the water",
  "Maintain the integrity and reputation of the Guide School by controlling quality above all else",
  "Make the professional guiding career accessible to motivated anglers from all backgrounds and experience levels",
  "Enrich the broader fly fishing community through conservation work, club presentations, and volunteer programs",
  "Honor the rivers, fish, and wild places that make this sport worth dedicating a life to",
];

export default function MissionStatement() {
  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <section className="relative overflow-hidden bg-primary text-primary-foreground pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/80 mb-5">
            Bryson City, North Carolina · Est. 1987
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Mission Statement
          </h1>
          <p className="text-primary-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            This is not a fly fishing experience. It is a fly fishing education — the finest available.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            Since 1987, the Fly Fishing Guide School has operated from a single conviction: that the
            right education, delivered by the right people, on the right water, can change the
            trajectory of an angler&apos;s life. We did not build this program to offer a memorable four days in
            the mountains. We built it to produce the most capable, knowledgeable, and professionally
            prepared fly fishing guides in the country.
          </p>
          <p>
            Everything about the way this school is run — the curriculum, the instructors, the rivers
            we use, the pace of instruction, the individual attention given to every student — flows
            from that original conviction. Excellence is not a marketing word here. It is a daily
            standard we have maintained for nearly four decades, and one we have no intention of
            lowering.
          </p>
          <p className="font-semibold text-foreground text-xl">
            The bar is high because it has to be.
          </p>
          <blockquote className="border-l-2 border-primary pl-6 mt-8">
            <p className="font-serif text-xl italic text-foreground leading-relaxed">
              &ldquo;We are committed to maintaining excellence in fly fishing education — bar none — across
              the country. Not the best school in the Southeast. The best school. That is the standard
              we hold ourselves to every time a student steps onto the water with us.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-muted-foreground not-italic">
              — Mac Brown · Fly Fishing Guide School · Bryson City, NC
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/80 mb-5">Our Mission</p>
          <p className="font-serif text-2xl md:text-3xl leading-relaxed">
            The Fly Fishing Guide School exists to set the standard for professional fly fishing guide
            training in America — through world-class instruction, genuine conservation values, and an
            uncompromising commitment to the excellence this sport deserves.
          </p>
        </div>
      </section>

      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">What We Stand For</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
            Five Principles. Nearly Four Decades.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-background border border-border p-8 flex flex-col gap-4">
                <div className="w-8 h-0.5 bg-primary" />
                <h3 className="font-serif text-xl font-bold text-foreground leading-snug">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="h-[50vh] overflow-hidden">
        <img src={img("/images/smokies-river-fall.webp")} srcSet={`${img("/images/smokies-river-fall-1280.webp")} 1280w, ${img("/images/smokies-river-fall.webp")} 1920w`} sizes="100vw" alt="Tuckasegee River — Bryson City, NC"
          className="w-full h-full object-cover object-[center_40%]" fetchPriority="high" />
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Our Objectives</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            What We Work Toward Every Day
          </h2>
          <ul className="space-y-5">
            {objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-4 text-muted-foreground leading-relaxed">
                <Check size={16} className="text-primary mt-0.5 shrink-0" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "37+", label: "Years in operation" },
              { num: "5",   label: "FFI Master Casting Instructors" },
              { num: "2",   label: "Hall of Fame inductees" },
              { num: "3",   label: "Certified Whitewater rowing instructors" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-4xl font-bold text-foreground mb-2">{s.num}</p>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">The Standard We Keep</p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Every generation of fly fishing needs educators willing to hold the line on quality —
            people who care more about what students actually leave with than how good the four days looked
            on a brochure. That has been our role in this sport since 1987, and it remains our role today.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Whether you are pursuing a new career on the water, sharpening skills you have built over
            years of self-taught fishing, or simply ready to understand this sport at a deeper level —
            you have found the right school. We look forward to meeting you in Bryson City.
          </p>
          <blockquote className="font-serif text-xl italic text-foreground/80 leading-relaxed mb-12 border-l-2 border-primary pl-6 text-left">
            &ldquo;The rivers are still here. The fish are still here. The knowledge is here. All that is
            required is the willingness to pursue it seriously. We will take care of the rest.&rdquo;
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservation-form/"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-primary/90 transition-colors">
              Reserve Your Spot <ArrowRight size={14} />
            </Link>
            <Link href="/contact-information-best-fly-fishing-guide-school/"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-muted/50 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
