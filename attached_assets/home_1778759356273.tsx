import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// ---------------------------------------------------------------------------
// HERO SLIDES
// Swap src paths for your actual images once uploaded to /public/images/
// ---------------------------------------------------------------------------
const slides = [
  {
    img: "/images/smokies-river-fall.webp",
    label: "Tuckasegee River · Bryson City, NC",
    headline: "Learn the River.\nLive the Life.",
    objectPosition: "center 40%",
  },
  {
    img: "/images/guide-school-casting.webp",
    label: "Fly Fishing Guide School · Est. 1987",
    headline: "Train with the\nBest in the Southeast.",
    objectPosition: "center 35%",
  },
  {
    img: "/images/drift-boat-rowing.webp",
    label: "Drift Boat & Rowing — On-Water Training",
    headline: "Row It.\nRead It.\nGuide It.",
    objectPosition: "center 45%",
  },
  {
    img: "/images/wild-brown-trout.webp",
    label: "Southern Appalachians · Wild Trout",
    headline: "Wild Water.\nWild Browns.",
    objectPosition: "center 50%",
  },
  {
    img: "/images/fly-casting-instruction.webp",
    label: "FFI Master Casting Instructors",
    headline: "The Loop\nIs Everything.",
    objectPosition: "center 40%",
  },
  {
    img: "/images/smoky-mountains-panorama.webp",
    label: "Great Smoky Mountains · Western NC",
    headline: "Six Days.\nOne Career.",
    objectPosition: "center 30%",
  },
];

const INTERVAL = 6000;

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  const safeCurrent = Math.min(current, slides.length - 1);
  const safePrev = prev !== null && prev < slides.length ? prev : null;

  const goTo = useCallback(
    (idx: number) => {
      setPrev(current);
      setCurrent(idx);
    },
    [current]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const back = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(next, INTERVAL);
    return () => clearTimeout(id);
  }, [current, paused, next]);

  useEffect(() => {
    if (prev === null) return;
    const id = setTimeout(() => setPrev(null), 900);
    return () => clearTimeout(id);
  }, [prev]);

  return (
    <section
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* SLIDE IMAGES */}
      {slides.map((slide, i) => {
        const isCurrent = i === safeCurrent;
        const isPrev = i === safePrev;
        return (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
            style={{
              opacity: isCurrent ? 1 : isPrev ? 0 : 0,
              zIndex: isCurrent ? 2 : isPrev ? 1 : 0,
            }}
          >
            <img
              src={slide.img}
              alt={slide.label}
              className="w-full h-full object-cover"
              style={{
                transform: isCurrent ? "scale(1.04)" : "scale(1)",
                transition: isCurrent ? "transform 7s ease-out" : "none",
                objectPosition: slide.objectPosition ?? "center",
              }}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
            />
          </div>
        );
      })}

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30 z-10" />

      {/* SCHOOL NAME — upper center */}
      <div className="absolute inset-x-0 top-0 z-20 flex flex-col items-center pt-28 md:pt-32 pointer-events-none">
        <p className="text-white/50 text-[10px] font-medium uppercase tracking-[0.4em] mb-4">
          Est. 1987 · Bryson City, NC
        </p>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center leading-none drop-shadow-lg">
          Fly Fishing<br />Guide School
        </h2>
      </div>

      {/* SLIDE CONTENT — bottom left */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-12 md:px-20 pb-12 md:pb-20">
        <div className="flex items-end justify-between">
          <div>
            <p
              key={`label-${current}`}
              className="text-white/65 text-xs font-medium uppercase tracking-[0.3em] mb-5 animate-[fadeSlideUp_0.7s_ease_forwards]"
            >
              {slides[safeCurrent].label}
            </p>
            <h1
              key={`headline-${current}`}
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight max-w-2xl mb-10 animate-[fadeSlideUp_0.7s_0.1s_ease_both]"
              style={{ whiteSpace: "pre-line" }}
            >
              {slides[safeCurrent].headline}
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/reservation-form/"
                className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-white/90 transition-colors w-fit"
              >
                Reserve Your Seat <ArrowRight size={14} />
              </Link>
              <Link
                href="/fly-fishing-guide-school/"
                className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-white/10 transition-colors w-fit"
              >
                View the Curriculum
              </Link>
            </div>
          </div>

          {/* ARROWS + PROGRESS DOTS — desktop */}
          <div className="hidden md:flex flex-col items-center gap-5 pb-1">
            <button
              onClick={back}
              className="h-11 w-11 border border-white/30 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex flex-col gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="relative h-6 w-[2px] overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/25" />
                  {i === current && (
                    <span
                      className="absolute top-0 left-0 right-0 bg-white origin-top"
                      style={{
                        animation: paused
                          ? "none"
                          : `grow ${INTERVAL}ms linear forwards`,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
            <button
              onClick={next}
              className="h-11 w-11 border border-white/30 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* MOBILE DOTS */}
        <div className="flex md:hidden items-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-[2px] transition-all duration-300 ${i === current ? "w-8 bg-white" : "w-4 bg-white/35"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// SERVICES / TRACKS
// ---------------------------------------------------------------------------
const tracks = [
  {
    title: "Professional Guide Training",
    desc: "Six days of on-water immersion — rowing, water reading, client communication, licensing, and job placement. The Southeast's most credentialed guide school since 1987.",
    href: "/fly-fishing-guide-school/",
    img: "/images/guide-school-rowing.webp",
  },
  {
    title: "Fly Casting Instruction",
    desc: "Private and group casting lessons with FFI Master Casting Instructors. Fix your loop, add distance, and fish more difficult water effectively.",
    href: "/fly-fishing-instruction/",
    img: "/images/fly-casting-instruction.webp",
  },
  {
    title: "NC Smoky Mountain Classes",
    desc: "Weekend and multi-day schools covering entomology, reading water, tactics, and on-stream application in western North Carolina's legendary waters.",
    href: "/fly-fishing-guide-school/fly-fishing-classes-north-carolina-smoky-mountains/",
    img: "/images/smokies-river-fall.webp",
  },
  {
    title: "Near Atlanta — Southeast School",
    desc: "Just 2.5 hours from Atlanta, the Guide School draws anglers from across the Southeast. One of the top feeder markets for a week-long transformation.",
    href: "/top-fly-fishing-guide-school-atlanta-ga/",
    img: "/images/smoky-mountains-panorama.webp",
  },
];

// ---------------------------------------------------------------------------
// HOME PAGE
// ---------------------------------------------------------------------------
export default function Home() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Fly Fishing Guide School | Bryson City NC | Since 1987</title>
        <meta
          name="description"
          content="Week-long fly fishing guide school in the Smoky Mountains of NC. Train under Master Casting Instructors, learn to row, read water, and launch your guide career. Enrolling now — Bryson City, NC since 1987."
        />
        <link rel="canonical" href="https://flyfishingguideschool.com/" />
        <meta property="og:title" content="Fly Fishing Guide School | Bryson City NC | Since 1987" />
        <meta
          property="og:description"
          content="Train under Master Casting Instructors in the Smoky Mountains. Week-long guide school for career changers and skilled anglers alike."
        />
        <meta property="og:url" content="https://flyfishingguideschool.com/" />
        <meta property="og:image" content="https://flyfishingguideschool.com/images/smokies-river-fall.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fly Fishing Guide School | Bryson City NC | Since 1987" />
        <meta name="twitter:image" content="https://flyfishingguideschool.com/images/smokies-river-fall.webp" />
      </Helmet>

      <HeroSlider />

      {/* ── INTRO ── */}
      <section className="py-28 md:py-36">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Fly Fishers International &mdash; Master Casting Instructors &mdash; Since 1987
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
            More than a school.<br />A career on the water.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Since 1987, the Fly Fishing Guide School has trained anglers and career-changers in the Smoky Mountains of western North Carolina. Under Mac Brown — one of fewer than a few hundred FFI Master Casting Instructors in the world — and a team of nationally competitive guides and instructors, you'll learn in six days what most anglers never figure out on their own.
          </p>
          <Link
            href="/meet-rowing-fly-casting-fly-fishing-instructors/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-[0.15em] hover:gap-4 transition-all"
          >
            Meet the Instructors <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── DIVIDER IMAGE ── */}
      <section className="h-[65vh] md:h-[80vh] overflow-hidden">
        <img
          src="/images/wild-brown-trout.webp"
          alt="Wild brown trout from the Smoky Mountains"
          className="w-full h-full object-cover object-[center_30%]"
          loading="lazy"
        />
      </section>

      {/* ── TWO TRACKS ── */}
      <section className="py-28 md:py-36">
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">Two Paths. One School.</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Which brings you here?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Whether you're chasing a career in the outdoors or simply want to fish at a level you never thought possible — the week is built for you.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-0">
          <Link
            href="/fly-fishing-guide-school/"
            className="group relative overflow-hidden aspect-[4/3] flex items-end"
          >
            <img
              src="/images/guide-school-casting.webp"
              alt="Career guide track"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 p-8">
              <p className="text-white/60 text-[10px] font-medium uppercase tracking-[0.3em] mb-2">Career Track</p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                Launch Your Guide Career
              </h3>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-white/80 uppercase tracking-[0.15em] group-hover:gap-4 transition-all">
                Explore <ArrowRight size={12} />
              </span>
            </div>
          </Link>
          <Link
            href="/fly-fishing-instruction/"
            className="group relative overflow-hidden aspect-[4/3] flex items-end"
          >
            <img
              src="/images/fly-casting-instruction.webp"
              alt="Skills improvement track"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 p-8">
              <p className="text-white/60 text-[10px] font-medium uppercase tracking-[0.3em] mb-2">Skills Track</p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                Fish at a Whole New Level
              </h3>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-white/80 uppercase tracking-[0.15em] group-hover:gap-4 transition-all">
                Explore <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── PROGRAMS GRID ── */}
      <section className="py-28 md:py-36 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-4">What We Offer</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Schools &amp; Instruction</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tracks.map((t) => (
              <Link key={t.title} href={t.href} className="group block">
                <div className="aspect-[3/2] overflow-hidden mb-6">
                  <img
                    src={t.img}
                    alt={t.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{t.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-[0.15em] group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE TRIAD QUOTE ── */}
      <section className="py-28 md:py-36">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="font-serif text-2xl md:text-4xl font-bold text-foreground leading-tight mb-8">
            "Every stream has a code.<br />We teach you how to crack it."
          </blockquote>
          <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] mb-2">
            Mac Brown &mdash; Bryson City, NC
          </p>
          <p className="text-muted-foreground text-xs uppercase tracking-[0.15em]">
            The Triad: Strategies · Tactics · Mechanics
          </p>
        </div>
      </section>

      {/* ── TESTIMONIAL STRIP ── */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              quote:
                "I learned more in one week at the Guide School than in three decades of self-taught fishing. Mac and his team are the real deal.",
              name: "Career Track Graduate",
            },
            {
              quote:
                "My casting is completely different. The strategies and tactics they taught are going to change my approach every single time I step in a river.",
              name: "Skills Track Graduate",
            },
            {
              quote:
                "First-class instructors with a wealth of knowledge. Without a doubt, this school will help you become the guide you aspire to be.",
              name: "Guide School Alumni",
            },
          ].map((t, i) => (
            <div key={i} className="flex flex-col gap-4">
              <p className="font-serif text-lg font-bold text-foreground leading-snug">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/testimonials-kudos/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-[0.15em] hover:gap-4 transition-all"
          >
            Read More Testimonials <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── FULL-BLEED CTA ── */}
      <section className="relative h-[50vh] overflow-hidden flex items-center justify-center">
        <img
          src="/images/smokies-river-fall.webp"
          alt="Smoky Mountains fly fishing"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative text-center px-6">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-8">
            Schools Fill Months in Advance
          </h2>
          <Link
            href="/reservation-form/"
            className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
          >
            Reserve Your Spot <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
