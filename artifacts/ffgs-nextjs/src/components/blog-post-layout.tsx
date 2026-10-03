import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog-posts";

const toISO = (d: string) => (d.includes("T") ? d : `${d}T00:00:00Z`);

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

export interface HowToStep {
  name: string;
  text: string;
}

export interface HowToData {
  name: string;
  description: string;
  totalTime?: string;
  supply?: Array<{ name: string }>;
  steps: HowToStep[];
}

export interface BlogPostLayoutProps {
  post: BlogPost;
  heroImageSrc: string;
  heroImageSrcMobile?: string;
  heroAlt: string;
  bodyImageAlt: string;
  relatedPosts?: RelatedPost[];
  faqs?: FaqItem[];
  howTo?: HowToData;
  aeoText?: string;
  dateModified?: string;
  articleType?: "BlogPosting" | "Article" | "TechArticle";
  heroObjectPosition?: string;
  showTwoPaths?: boolean;
}

function sanitizeContentHtml(html: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return html
    .replace(/<h1(\s|>)/gi, "<h2$1")
    .replace(/<\/h1>/gi, "</h2>")
    .replace(/(src|srcset)="(\/images\/[^"]+)"/gi, (_, attr, path) =>
      `${attr}="${base}${path}"`
    );
}

function img(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

function calcReadTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function BlogCtaBar() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 my-8">
      <Link
        href="/reservation-form/"
        className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/90 transition-colors w-full sm:w-fit"
      >
        Reserve Your Seat <ArrowRight size={14} />
      </Link>
      <Link
        href="/fly-fishing-guide-school/"
        className="inline-flex items-center justify-center gap-2 border border-primary text-primary text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-primary/5 transition-colors w-full sm:w-fit"
      >
        View the Curriculum
      </Link>
    </div>
  );
}

export function BlogPostLayout({
  post,
  heroImageSrc,
  heroImageSrcMobile,
  heroAlt,
  bodyImageAlt,
  relatedPosts,
  faqs,
  howTo,
  aeoText,
  dateModified,
  articleType = "BlogPosting",
  heroObjectPosition = "object-center",
  showTwoPaths = false,
}: BlogPostLayoutProps) {
  if (process.env.NODE_ENV !== "production") {
    if (!heroAlt) console.warn(`[BlogPostLayout] Missing heroAlt for post: "${post.slug}"`);
    if (!bodyImageAlt) console.warn(`[BlogPostLayout] Missing bodyImageAlt for post: "${post.slug}"`);
  }

  const readTime = calcReadTime(post.contentHtml);
  const postUrl = `https://flyfishingguideschool.com/blog/${post.slug}/`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": articleType,
    "@id": `${postUrl}#article`,
    headline: post.title,
    author: {
      "@type": "Person",
      "@id": "https://macbrownflyfish.com/#mac-brown",
      name: "Mac Brown",
      url: "https://macbrownflyfish.com/bio-mac-brown",
    },
    datePublished: toISO(post.date),
    dateModified: toISO(dateModified ?? post.date),
    description: post.excerpt,
    image: [`https://flyfishingguideschool.com${post.img}`],
    publisher: {
      "@type": "Organization",
      "@id": "https://flyfishingguideschool.com/#business",
      name: "Fly Fishing Guide School",
      url: "https://flyfishingguideschool.com",
      logo: {
        "@type": "ImageObject",
        url: "https://flyfishingguideschool.com/ffgs-logo.webp",
      },
    },
    url: postUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    ...(post.keywords ? { keywords: post.keywords } : {}),
  };

  const howToSchema = howTo
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: howTo.name,
        description: howTo.description,
        ...(howTo.totalTime ? { totalTime: howTo.totalTime } : {}),
        ...(howTo.supply && howTo.supply.length > 0
          ? { supply: howTo.supply.map((s) => ({ "@type": "HowToSupply", name: s.name })) }
          : {}),
        step: howTo.steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqs && faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": { "@type": "Answer", "text": f.answer },
            })),
          }) }}
        />
      )}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      <section className="relative w-full aspect-video max-h-[75vh] min-h-[480px] flex items-end justify-center overflow-hidden">
        <img
          src={img(heroImageSrc)}
          srcSet={heroImageSrcMobile ? `${img(heroImageSrcMobile)} 800w, ${img(heroImageSrc)} 1920w` : undefined}
          sizes={heroImageSrcMobile ? "100vw" : undefined}
          alt={heroAlt}
          className={`absolute inset-0 w-full h-full object-cover ${heroObjectPosition}`}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30 z-10" />
        <div className="relative z-10 text-center pb-12 px-4 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/90 mb-3 block">
            {post.category} &nbsp;·&nbsp; {formatDate(post.date)} &nbsp;·&nbsp; {readTime} min read
            {dateModified && dateModified !== post.date && (
              <> &nbsp;·&nbsp; Updated {formatDate(dateModified)}</>
            )}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {aeoText && (
        <section className="py-10 border-b border-border bg-muted/30">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="text-muted-foreground text-lg leading-relaxed">{aeoText}</p>
          </div>
        </section>
      )}

      {showTwoPaths && (
        <section className="py-16 md:py-20 border-b border-border">
          <div className="max-w-4xl mx-auto px-6 text-center mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Two Paths. One School.</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Which brings you here?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">Whether you simply want to fish at a level you never thought possible — or you&apos;re ready to make guiding your career — the week is built for you.</p>
          </div>
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-0">
            <Link href="/smoky-mountain-fly-fishing-school/" className="group relative overflow-hidden aspect-video flex items-end">
              <img src={img("/images/client-woman-brown-trout.webp")} srcSet={`${img("/images/mobile/client-woman-brown-trout.webp")} 800w, ${img("/images/client-woman-brown-trout-1280.webp")} 1280w, ${img("/images/client-woman-brown-trout.webp")} 1920w`} sizes="(max-width: 768px) 100vw, 50vw" alt="Angler holding a brown trout — fly fishing skills development" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10 p-8">
                <p className="text-white/60 text-[10px] font-medium uppercase tracking-[0.3em] mb-2">Skills Development</p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">Fish at a Whole New Level</h3>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-white/80 uppercase tracking-[0.15em] group-hover:gap-4 transition-all">Explore <ArrowRight size={12} /></span>
              </div>
            </Link>
            <Link href="/fly-fishing-guide-school/" className="group relative overflow-hidden aspect-video flex items-end">
              <img src={img("/images/guide-school-casting.webp")} alt="Guide school casting instruction — career development for aspiring fly fishing guides" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10 p-8">
                <p className="text-white/60 text-[10px] font-medium uppercase tracking-[0.3em] mb-2">Career Development</p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">Launch Your Guide Career</h3>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-white/80 uppercase tracking-[0.15em] group-hover:gap-4 transition-all">Explore <ArrowRight size={12} /></span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <article className="max-w-2xl mx-auto px-6 py-14">
        <Link
          href="/blog/"
          className="text-xs font-semibold uppercase tracking-widest text-primary hover:underline mb-8 block"
        >
          ← Back to Blog
        </Link>

        <BlogCtaBar />

        <img
          src={img(post.img)}
          alt={bodyImageAlt}
          className="w-full aspect-[16/9] object-cover rounded-sm mb-10 shadow"
          loading="lazy"
        />

        <div
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: sanitizeContentHtml(post.contentHtml) }}
        />

        {faqs && faqs.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="divide-y divide-border">
              {faqs.map((item, i) => (
                <details key={i} className="group py-5">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-foreground">
                    {item.question}
                    <span className="shrink-0 text-primary text-xl leading-none group-open:hidden">+</span>
                    <span className="shrink-0 text-primary text-xl leading-none hidden group-open:block">−</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

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

        <div className="mt-4">
          <Link
            href="/blog/"
            className="text-xs font-semibold uppercase tracking-widest text-primary hover:underline"
          >
            ← All Articles
          </Link>
        </div>
      </article>
    </>
  );
}
