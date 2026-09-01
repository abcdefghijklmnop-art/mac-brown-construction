import { img, prefixHtml, sanitizeContentHtml } from "@/lib/asset";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { articleSchema } from "@/lib/schema";
import type { BlogPost } from "@/data/blog-posts";
import type { FaqItem, RelatedPost } from "@/components/blog-post-layout";

export interface GlossaryLayoutProps {
  post: BlogPost;
  heroImageSrc: string;
  heroAlt: string;
  bodyImageAlt: string;
  relatedPosts?: RelatedPost[];
  faqs?: FaqItem[];
  aeoText?: string;
  dateModified?: string;
}

function GlossaryCtaBar() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 my-8">
      <Link
        href="/reserve"
        className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/90 transition-colors w-full sm:w-fit"
      >
        Enroll Now <ArrowRight size={14} />
      </Link>
      <Link
        href="/events-calendar"
        className="inline-flex items-center justify-center gap-2 border border-primary text-primary text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/5 transition-colors w-full sm:w-fit"
      >
        See Upcoming Dates
      </Link>
    </div>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function extractTerm(question: string): string {
  const stripped = question
    .replace(/\?$/, "")
    .replace(/^What is (a |an |the )?/i, "")
    .replace(/^What are (a |an |the )?/i, "")
    .replace(/^What does (a |an |the )?/i, "")
    .replace(/^What causes /i, "")
    .replace(/^How (do|does|can) (a |an |the |I )?/i, "")
    .replace(/^Where can I /i, "")
    .replace(/ in fly (fishing|casting)$/i, "")
    .replace(/ in (Spey|trout|saltwater|stillwater|single-hand) (casting|fishing)$/i, "")
    .replace(/ (for|on|of) (fly fishing|fly casting|trout fishing|a fly reel|a fly rod|fly fishers|the fly reel)$/i, "")
    .replace(/^(a |an |the )/i, "")
    .trim();
  return stripped.charAt(0).toUpperCase() + stripped.slice(1);
}

function getGroupLetter(term: string): string {
  const first = term.charAt(0).toUpperCase();
  return /[A-Z]/.test(first) ? first : "#";
}

interface GroupedEntries {
  [letter: string]: { term: string; answer: string }[];
}

function groupFaqs(faqs: FaqItem[]): GroupedEntries {
  const grouped: GroupedEntries = {};
  for (const faq of faqs) {
    const term = extractTerm(faq.question);
    const letter = getGroupLetter(term);
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push({ term, answer: faq.answer });
  }
  for (const letter of Object.keys(grouped)) {
    grouped[letter].sort((a, b) => a.term.localeCompare(b.term));
  }
  return grouped;
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function GlossaryLayout({
  post,
  heroImageSrc,
  heroAlt,
  bodyImageAlt,
  relatedPosts,
  faqs,
  aeoText,
  dateModified,
}: GlossaryLayoutProps) {
  const grouped = groupFaqs(faqs ?? []);
  const activeLetters = new Set(Object.keys(grouped));
  const hasNumeric = activeLetters.has("#");
  const entryCount = (faqs ?? []).length;

  return (
    <div className="w-full">
      <SchemaScript schema={articleSchema(post, dateModified)} />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img
          src={img(heroImageSrc)}
          alt={heroAlt || post.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 pt-24 max-w-4xl mx-auto left-0 right-0">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-3">
            {post.category} &mdash; {formatDate(post.date)} &mdash; {entryCount} terms
            {dateModified && dateModified !== post.date && (
              <> &mdash; Updated {formatDate(dateModified)}</>
            )}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* AEO */}
      {aeoText && (
        <section className="py-10 border-b border-border/50">
          <div className="max-w-2xl mx-auto px-6">
            <p className="text-muted-foreground leading-relaxed">{aeoText}</p>
          </div>
        </section>
      )}

      {/* A–Z sticky nav — immediately after AEO so users can navigate from the top */}
      <div className="sticky top-16 z-20 bg-background border-y border-border/60 py-2.5">
          <nav
            aria-label="Glossary alphabetical navigation"
            className="px-4 flex overflow-x-auto gap-x-0.5 justify-start md:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {hasNumeric && (
              <a
                href="#glossary-num"
                className="flex-shrink-0 text-xs font-semibold w-7 h-7 flex items-center justify-center rounded hover:bg-primary/10 hover:text-primary text-primary transition-colors"
              >
                #
              </a>
            )}
            {ALPHABET.map((letter) =>
              activeLetters.has(letter) ? (
                <a
                  key={letter}
                  href={`#glossary-${letter.toLowerCase()}`}
                  className="flex-shrink-0 text-xs font-semibold w-7 h-7 flex items-center justify-center rounded hover:bg-primary/10 hover:text-primary text-primary transition-colors"
                >
                  {letter}
                </a>
              ) : (
                <span
                  key={letter}
                  className="flex-shrink-0 text-xs font-semibold w-7 h-7 flex items-center justify-center text-muted-foreground/30"
                >
                  {letter}
                </span>
              )
            )}
          </nav>
      </div>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-[0.15em] hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={12} /> Back to Blog
          </Link>

          <GlossaryCtaBar />

          {post.img && (
            <figure className="mb-10 -mx-6 sm:mx-0">
              <img
                src={img(post.img)}
                alt={bodyImageAlt || post.title}
                className="w-full object-contain max-h-[560px]"
                loading="lazy"
              />
            </figure>
          )}

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: sanitizeContentHtml(prefixHtml(post.contentHtml)) }}
          />
        </div>

        {/* Glossary entries */}
        <div className="max-w-2xl mx-auto px-6 mt-10">
          {hasNumeric && (
            <div id="glossary-num" className="mb-14 scroll-mt-20">
              <h2 className="font-serif text-2xl font-bold text-primary mb-1">#</h2>
              <div className="h-px bg-primary/20 mb-6" />
              <dl className="space-y-7">
                {(grouped["#"] ?? []).map((entry, i) => (
                  <div key={i}>
                    <dt className="font-serif text-base font-semibold text-foreground leading-snug mb-1">
                      {entry.term}
                    </dt>
                    <dd className="text-sm text-muted-foreground leading-relaxed">
                      {entry.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {ALPHABET.filter((l) => activeLetters.has(l)).map((letter) => (
            <div key={letter} id={`glossary-${letter.toLowerCase()}`} className="mb-14 scroll-mt-20">
              <h2 className="font-serif text-2xl font-bold text-primary mb-1">{letter}</h2>
              <div className="h-px bg-primary/20 mb-6" />
              <dl className="space-y-7">
                {(grouped[letter] ?? []).map((entry, i) => (
                  <div key={i}>
                    <dt className="font-serif text-base font-semibold text-foreground leading-snug mb-1">
                      {entry.term}
                    </dt>
                    <dd className="text-sm text-muted-foreground leading-relaxed">
                      {entry.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}

          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Tags</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium border border-border px-3 py-1 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <GlossaryCtaBar />
          </div>

          {relatedPosts && relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                Related Posts
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedPosts.slice(0, 3).map((rp) => (
                  <div key={rp.slug} className="border border-border p-4">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      {rp.category}
                    </p>
                    <p className="text-sm font-semibold leading-snug mb-3">{rp.title}</p>
                    <Link
                      href={`/blog/${rp.slug}`}
                      className="text-xs font-semibold uppercase tracking-[0.15em] text-primary hover:underline"
                    >
                      Read &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 pt-8 border-t border-border text-xs text-muted-foreground">
            &copy; {post.copyright ?? new Date(post.date + "T00:00:00").getFullYear()} Mac Brown &middot;{" "}
            macbrownflyfish.com. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
