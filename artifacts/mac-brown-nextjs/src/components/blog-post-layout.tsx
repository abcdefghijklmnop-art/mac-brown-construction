import { img, prefixHtml, sanitizeContentHtml } from "@/lib/asset";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { articleSchema } from "@/lib/schema";
import type { BlogPost } from "@/data/blog-posts";

export interface RelatedPost {
  title: string;
  slug: string;
  category: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogCta {
  label: string;
  description: string;
  url: string;
}

const DEFAULT_CTA: BlogCta = {
  label: "Book a Trip",
  description: "Ready to get on the water?",
  url: "/contact",
};

export interface BlogPostLayoutProps {
  post: BlogPost;
  heroImageSrc: string;
  heroImageSrcMobile?: string;
  heroAlt: string;
  bodyImageAlt: string;
  relatedPosts?: RelatedPost[];
  cta?: BlogCta;
  faqs?: FaqItem[];
  aeoText?: string;
  dateModified?: string;
  articleType?: "Article" | "TechArticle" | "ScholarlyArticle";
}

function BlogCtaBar() {
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

function calcReadTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(iso: string): string {
  const d = new Date(iso.slice(0, 10) + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function BlogPostLayout({
  post,
  heroImageSrc,
  heroImageSrcMobile,
  heroAlt,
  bodyImageAlt,
  relatedPosts,
  cta,
  faqs,
  aeoText,
  dateModified,
  articleType = "Article",
}: BlogPostLayoutProps) {
  if (process.env.NODE_ENV !== "production") {
    if (!heroAlt) console.warn(`[BlogPostLayout] Missing heroAlt for post: "${post.slug}"`);
    if (!bodyImageAlt) console.warn(`[BlogPostLayout] Missing bodyImageAlt for post: "${post.slug}"`);
  }

  const readTime = calcReadTime(post.contentHtml);
  const ctaBlock = cta ?? DEFAULT_CTA;

  const faqSchema = faqs && faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <div className="w-full">
      <SchemaScript schema={articleSchema(post, dateModified, articleType)} />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img
          src={img(heroImageSrc)}
          srcSet={heroImageSrcMobile ? `${img(heroImageSrcMobile)} 800w, ${img(heroImageSrc)} 1920w` : undefined}
          sizes={heroImageSrcMobile ? "100vw" : undefined}
          alt={heroAlt || post.title}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute bottom-0 right-0 flex flex-col items-end px-8 pb-10 max-w-lg text-right">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-3">
            {post.category} &mdash; {formatDate(post.date)} &mdash; {readTime} min read
            {post.dateModified && post.dateModified > post.date && (
              <> &mdash; Updated {formatDate(post.dateModified)}</>
            )}
          </p>
          <h1 className="font-serif text-2xl md:text-4xl font-bold text-white leading-tight">
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

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-[0.15em] hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={12} /> Back to Blog
          </Link>

          <BlogCtaBar />

          {(post.bodyImg ?? post.img) && (
            <figure className="mb-10 -mx-6 sm:mx-0">
              <img
                src={img(post.bodyImg ?? post.img)}
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

          {faqs && faqs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                Frequently Asked Questions
              </p>
              <div className="space-y-0 divide-y divide-border">
                {faqs.map((faq, i) => (
                  <details key={i} className="group py-5">
                    <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                      <span className="font-serif text-base font-semibold text-foreground leading-snug">
                        {faq.question}
                      </span>
                      <span className="shrink-0 text-primary transition-transform group-open:rotate-180">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <BlogCtaBar />
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
            &copy; {post.copyright ?? new Date(post.date + "T00:00:00").getFullYear()} Mac Brown &middot; macbrownflyfish.com. All rights reserved.
          </div>

          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-[0.15em] hover:gap-4 transition-all"
            >
              <ArrowLeft size={12} /> All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
