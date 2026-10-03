import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { instructors } from "@/data/instructors-data";
import { img } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "Our Instructors — Fly Fishing Guide School, Bryson City NC" },
  description:
    "Meet the instructors behind the Guide School — led by FFI Master Certified Casting Instructor Mac Brown. Based in Bryson City, NC since 1987.",
  alternates: { canonical: "https://flyfishingguideschool.com/meet-rowing-fly-casting-fly-fishing-instructors/" },
  openGraph: {
    title: "Meet the Instructors | Fly Fishing Guide School",
    description: "Meet the professional fly fishing instructors behind the Fly Fishing Guide School in Bryson City, NC.",
    type: "website",
    images: [{ url: "/images/mountain-river-blue.webp", width: 1920, height: 1280, alt: "Fly fishing instructors — Fly Fishing Guide School, Bryson City, NC" }],
  },
};

export default function Instructors() {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://flyfishingguideschool.com/meet-rowing-fly-casting-fly-fishing-instructors/#page",
    name: "Meet the Instructors — Fly Fishing Guide School",
    description: "The Fly Fishing Guide School faculty — 4 FFI Master Certified Casting Instructors, 5 certified whitewater rowing instructors, 4 Fly Fishing Team USA Coaches, 3 Team USA competitors, 2 Hall of Fame inductees, and 450+ combined years of professional experience.",
    url: "https://flyfishingguideschool.com/meet-rowing-fly-casting-fly-fishing-instructors/",
    about: { "@id": "https://flyfishingguideschool.com/#business" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: instructors.map((inst, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Person",
          name: inst.name,
          jobTitle: inst.role,
          url: `https://flyfishingguideschool.com/instructors/${inst.slug}/`,
          image: `https://flyfishingguideschool.com${inst.photo}`,
          worksFor: { "@id": "https://flyfishingguideschool.com/#business" },
        },
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Who are the instructors at the Fly Fishing Guide School?", "acceptedAnswer": { "@type": "Answer", "text": "The faculty is led by Mac Brown — the only FFI Master Casting Instructor in North Carolina and recipient of the FFI Lifetime Achievement Award. The full team includes 4 FFI Master Certified Casting Instructors, 5 certified whitewater rowing instructors, 3 Fly Fishing Team USA members, 4 Team USA coaches, 2 Hall of Fame inductees, published authors, and a Field & Stream Angler of the Year — with 450+ combined years of field experience." } },
          { "@type": "Question", "name": "How many instructors teach at the Fly Fishing Guide School?", "acceptedAnswer": { "@type": "Answer", "text": "The school has 14 instructors across casting, rowing, guiding, entomology, and business disciplines. The instructor-to-student ratio ensures every participant receives genuine individual attention throughout the four days — not classroom lectures with minimal hands-on time." } },
          { "@type": "Question", "name": "What certifications do the Fly Fishing Guide School instructors hold?", "acceptedAnswer": { "@type": "Answer", "text": "The faculty holds FFI Master Certified Casting Instructor designations, certified whitewater rowing instructor certifications, Fly Fishing Team USA coaching credentials, and professional guide licenses across multiple states. These are not working guides with opinions — they are nationally certified professionals who govern and advance the standards of the sport." } },
          { "@type": "Question", "name": "Has the Fly Fishing Guide School produced world-class anglers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Western North Carolina produces more world-champion fly fishing competition anglers than any other region in the country. Multiple Team USA members and coaches on the FFGS faculty have competed and won at the World Fly Fishing Championship. The same instruction that develops competitive champions is what every guide school student receives." } },
          { "@type": "Question", "name": "Is the Fly Fishing Guide School faculty the most credentialed in the country?", "acceptedAnswer": { "@type": "Answer", "text": "No other guide school in North America has assembled a teaching faculty with these credentials — 4 FFI Master Casting Instructors, 5 certified whitewater rowing instructors, 4 Team USA Coaches, 3 Team USA competitors, 2 Hall of Fame inductees, and 450+ combined years of professional experience. These are the people who certify, govern, and coach the rest of the industry." } },
        ]
      }) }} />

      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${img("/images/mountain-river-blue.webp")})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-3">
            Fly Fishing Guide School
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
            Meet the Instructors
          </h1>
        </div>
      </section>

      {/* AEO */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">The Fly Fishing Guide School faculty is the most credentialed instructor team assembled for a single fly fishing program anywhere in North America — 4 FFI Master Certified Casting Instructors, 5 certified whitewater rowing instructors, 4 Fly Fishing Team USA Coaches, 3 active Team USA competitors with World Championship experience, 2 Hall of Fame inductees, and 450+ combined years of on-water professional experience. These are the people who certify, govern, and coach the rest of the fly fishing industry — gathered in one place, teaching one program, in Bryson City, North Carolina.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
            Meet Our Instructors
          </h2>
          <div className="space-y-5 text-left">
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed">
              The Fly Fishing Guide School is based in Bryson City, North Carolina — right in the heart of the Great Smoky Mountains and some of the finest trout water in the eastern United States. The instructors gathered here represent something genuinely rare: a collective of world-class anglers, certified casting professionals, and experienced river guides who also happen to love teaching.
            </p>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed">
              Combined, our instructor team brings 450+ years of real-world experience in rowing, fly casting instruction, and professional guiding. That is not a marketing number — it is the natural result of assembling people who have spent their lives on the water and dedicated themselves to sharing what they know.
            </p>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed">
              Among our instructors you will find 4 FFI Master Certified Casting Instructors — including the FFI Southeastern Council&apos;s Casting Instructor Certification Program Coordinator, several Board of Governors members, and multiple regional Instructor of the Year and Mentor of the Year nominees. Multiple certified whitewater rowing instructors, one of whom invented techniques the industry still teaches today and brings 60+ years on moving water. Four Fly Fishing Team USA Coaches and three active Team USA competitors with World Championship experience. A Field &amp; Stream Angler of the Year. Published book and national magazine authors. The first woman ever to earn FFI Master Certification — an IGFA world record holder who has taught professional guides for decades. Two inductees into the Southern Appalachian Fly Fishing Hall of Fame. We will simply let those credentials speak for themselves.
            </p>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed">
              What the credentials do not capture is the enthusiasm. Every instructor here genuinely loves to teach — and genuinely loves to have fun doing it. That combination, experience paired with passion, is what makes time at the school so productive and so memorable.
            </p>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed">
              The goal has always been straightforward: build the strongest possible foundation for lifelong learners and for those who want to guide as a career, so that every graduate leaves prepared for placement at world-class destinations anywhere on the globe. The Fly Fishing Guide School is the premier guide training facility in the nation — and the waters surrounding Bryson City back that claim. When you look at where the top competition anglers and world champions in fly fishing come from, Western North Carolina appears at the top of that list. There is a reason for that. The fishery is world-class, the instruction is world-class, and the people teaching here have competed, coached, and won at the highest levels the sport offers.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <article
                key={instructor.slug}
                className="group flex flex-col bg-white border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden bg-muted/30">
                  <img
                    src={img(instructor.photo)}
                    alt={instructor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-2">
                    {instructor.role}
                  </p>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                    {instructor.name}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                    {instructor.excerpt}
                  </p>
                  <Link
                    href={`/instructors/${instructor.slug}/`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    Meet {instructor.name.split(" ")[0]}
                    <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 md:py-36 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="divide-y divide-border">
            {[
              { q: "Who are the instructors at the Fly Fishing Guide School?", a: "The faculty is led by Mac Brown — the only FFI Master Casting Instructor in North Carolina and recipient of the FFI Lifetime Achievement Award. The full team includes 4 FFI Master Certified Casting Instructors, 5 certified whitewater rowing instructors, 3 Fly Fishing Team USA members, 4 Team USA coaches, 2 Hall of Fame inductees, published authors, and a Field & Stream Angler of the Year — with 450+ combined years of field experience." },
              { q: "How many instructors teach at the Fly Fishing Guide School?", a: "The school has 14 instructors across casting, rowing, guiding, entomology, and business disciplines. The instructor-to-student ratio ensures every participant receives genuine individual attention throughout the four days — not classroom lectures with minimal hands-on time." },
              { q: "What certifications do the Fly Fishing Guide School instructors hold?", a: "The faculty holds FFI Master Certified Casting Instructor designations, certified whitewater rowing instructor certifications, Fly Fishing Team USA coaching credentials, and professional guide licenses across multiple states. These are not working guides with opinions — they are nationally certified professionals who govern and advance the standards of the sport." },
              { q: "Has the Fly Fishing Guide School produced world-class anglers?", a: "Yes — Western North Carolina produces more world-champion fly fishing competition anglers than any other region in the country. Multiple Team USA members and coaches on the FFGS faculty have competed and won at the World Fly Fishing Championship. The same instruction that develops competitive champions is what every guide school student receives." },
              { q: "Is the Fly Fishing Guide School faculty the most credentialed in the country?", a: "No other guide school in North America has assembled a teaching faculty with these credentials — 4 FFI Master Casting Instructors, 5 certified whitewater rowing instructors, 4 Team USA Coaches, 3 Team USA competitors, 2 Hall of Fame inductees, and 450+ combined years of professional experience. These are the people who certify, govern, and coach the rest of the industry." },
            ].map((item, i) => (
              <details key={i} className="group py-6">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-serif text-lg font-bold text-foreground">
                  {item.q}
                  <span className="shrink-0 text-primary text-xl leading-none group-open:hidden">+</span>
                  <span className="shrink-0 text-primary text-xl leading-none hidden group-open:block">−</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Train with the Best?
          </h2>
          <p className="text-primary-foreground/90 mb-10 text-base leading-relaxed">
            The Fly Fishing Guide School enrolls a small cohort each season. Reserve your spot and learn directly from
            instructors who have spent decades mastering — and teaching — the craft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation-form/"
              className="inline-block bg-white text-primary text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
            >
              Enroll Now
            </Link>
            <Link
              href="/contact-information-best-fly-fishing-guide-school/"
              className="inline-block border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
