import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Award, Fish } from "lucide-react";
import { instructors } from "@/data/instructors-data";
import { img } from "@/lib/utils";
import { FaqItem } from "./faq-item";

export async function generateStaticParams() {
  return instructors.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const instructor = instructors.find((i) => i.slug === slug);
  if (!instructor) return { title: "Instructor Not Found" };
  return {
    title: `${instructor.name} — ${instructor.role} | Fly Fishing Guide School Bryson City NC`,
    description: `${instructor.name}, ${instructor.role} at the Fly Fishing Guide School in Bryson City, NC. ${instructor.excerpt.slice(0, 140)}…`,
    alternates: {
      canonical: `https://flyfishingguideschool.com/instructors/${instructor.slug}/`,
    },
    openGraph: {
      title: `${instructor.name} — Fly Fishing Guide School`,
      description: instructor.excerpt,
      images: [`https://flyfishingguideschool.com${instructor.photo}`],
      type: "profile",
    },
  };
}

export default async function InstructorBio({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const instructor = instructors.find((i) => i.slug === slug);

  if (!instructor) {
    notFound();
  }

  const personSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": instructor.slug === "mac-brown"
      ? "https://macbrownflyfish.com/#mac-brown"
      : `https://flyfishingguideschool.com/instructors/${instructor.slug}/`,
    name: instructor.name,
    jobTitle: instructor.role,
    image: `https://flyfishingguideschool.com${instructor.photo}`,
    url: `https://flyfishingguideschool.com/instructors/${instructor.slug}/`,
    worksFor: { "@id": "https://flyfishingguideschool.com/#business" },
    description: instructor.aeo ?? instructor.excerpt,
    ...(instructor.credentials?.length ? { award: instructor.credentials } : {}),
    ...(instructor.specialties?.length ? { knowsAbout: instructor.specialties } : {}),
  };

  const faqSchema = instructor.faqs?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: instructor.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="pt-24 pb-0 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/meet-rowing-fly-casting-fly-fishing-instructors/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={13} />
            All Instructors
          </Link>
        </div>
      </div>

      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-12 items-start">
            <div className="w-full">
              <div className="aspect-square overflow-hidden">
                <img
                  src={img(instructor.photo)}
                  alt={instructor.name}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {instructor.credentials && instructor.credentials.length > 0 && (
                <div className="mt-6 border-t border-border pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Award size={14} className="text-primary shrink-0" />
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                      Credentials
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {instructor.credentials.map((cred, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-snug flex gap-2">
                        <span className="text-primary mt-1 shrink-0">—</span>
                        {cred}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {instructor.specialties && instructor.specialties.length > 0 && (
                <div className="mt-6 border-t border-border pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Fish size={14} className="text-primary shrink-0" />
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                      Specialties
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {instructor.specialties.map((spec, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-snug flex gap-2">
                        <span className="text-primary mt-1 shrink-0">—</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                {instructor.role}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                {instructor.name}
              </h1>
              <div className="space-y-5">
                {instructor.bio.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed text-[15px]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {instructor.faqs && instructor.faqs.length > 0 && (
        <section className="py-14 bg-background">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <div className="divide-y divide-border border-t border-border">
              {instructor.faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mt-0 py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Train with {instructor.name.split(" ")[0]}
          </h2>
          <p className="text-primary-foreground/90 mb-10 text-base leading-relaxed">
            The Fly Fishing Guide School enrolls a small cohort each season. Reserve your spot early.
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
