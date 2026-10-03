"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { img } from "@/lib/asset";

const slides = [
  {
    src: img("/images/fall-river-fishing.webp"),
    srcSet: `${img("/images/mobile/fall-river-fishing.webp")} 800w, ${img("/images/fall-river-fishing-1100.webp")} 1100w, ${img("/images/fall-river-fishing.webp")} 1440w`,
    label: "Tuckasegee River · Fall Season",
    headline: "Peak Season.\nPeak Waters.",
    objectPosition: "center 40%",
  },
  {
    src: img("/images/youth-rainbow-montana.webp"),
    srcSet: `${img("/images/mobile/youth-rainbow-montana.webp")} 800w, ${img("/images/youth-rainbow-montana-1100.webp")} 1100w, ${img("/images/youth-rainbow-montana.webp")} 1920w`,
    label: "Madison River · Montana",
    headline: "Hooked\nFor Life.",
    objectPosition: "center 30%",
  },
  {
    src: img("/images/client-float-1.webp"),
    srcSet: `${img("/images/mobile/client-float-1.webp")} 800w, ${img("/images/client-float-1-1000.webp")} 1000w, ${img("/images/client-float-1.webp")} 1080w`,
    label: "Fly Fishing Schools · Bryson City",
    headline: "Learn to\nFish Better",
    objectPosition: "center",
  },
];

const INTERVAL = 6000;

export function HeroSliderClient() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      setPrev(current);
      setCurrent(idx);
    },
    [current]
  );

  const next = useCallback(() => { goTo((current + 1) % slides.length); }, [current, goTo]);
  const back = useCallback(() => { goTo((current - 1 + slides.length) % slides.length); }, [current, goTo]);

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

  const safeIdx = current % slides.length;

  return (
    <div
      className="absolute inset-0 z-30"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => {
        const isCurrent = i === current;
        const isPrev = i === prev;
        return (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
            style={{ opacity: isCurrent ? 1 : isPrev ? 0 : 0, zIndex: isCurrent ? 2 : isPrev ? 1 : 0 }}
          >
            <img
              src={slide.src}
              srcSet={slide.srcSet}
              sizes="100vw"
              alt={slide.label}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                objectPosition: slide.objectPosition,
                transform: isCurrent ? "scale(1.04)" : "scale(1)",
                transition: isCurrent ? "transform 7s ease-out" : "none",
              }}
              fetchPriority={i === 0 ? "high" : "auto"}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25 z-10" />

      <div className="hero-brand-top absolute top-0 left-0 right-0 z-20 flex flex-col items-center pointer-events-none pt-28 md:pt-32 [@media(max-height:720px)]:hidden">
        <div className="h-px w-10 bg-white/40 mb-3" />
        <p className="text-white/80 text-2xl md:text-3xl font-semibold uppercase tracking-[0.4em]">Mac Brown Fly Fish</p>
        <p className="text-white/55 text-sm md:text-base uppercase tracking-[0.25em] mt-2">Bryson City, North Carolina · Est. 1987</p>
        <div className="h-px w-10 bg-white/40 mt-3" />
      </div>

      <div className="hero-bottom-section absolute bottom-0 left-0 right-0 z-20 px-12 md:px-20 pb-8 md:pb-14 xl:pb-20">
        <div className="flex items-end justify-between">
          <div>
            <p
              key={`headline-${safeIdx}`}
              className="hero-tagline font-serif text-xl md:text-2xl text-white/75 font-bold italic leading-snug max-w-xl mb-4 animate-[fadeSlideUp_0.7s_0.05s_ease_both]"
              style={{ whiteSpace: "pre-line" }}
            >
              {slides[safeIdx].headline}
            </p>
            <h1 className="hero-h1 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white font-bold leading-tight max-w-2xl mb-6 md:mb-10">
              Fly Fishing Schools &amp; Guided Trips in the Smoky Mountains
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/programs-overview"
                className="inline-flex items-center gap-2 bg-white text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-white/90 transition-colors w-full sm:w-fit"
              >
                View All Programs <ArrowRight size={14} />
              </Link>
              <Link
                href="/events-calendar"
                className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-white/10 transition-colors w-full sm:w-fit"
              >
                See Upcoming Dates
              </Link>
              <Link
                href="/reserve"
                className="inline-flex items-center gap-2 border border-white/50 text-white text-xs font-semibold uppercase tracking-[0.15em] px-7 py-4 hover:bg-white/10 transition-colors w-full sm:w-fit"
              >
                Enroll Now
              </Link>
            </div>
          </div>
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
                      style={{ animation: paused ? "none" : `grow ${INTERVAL}ms linear forwards` }}
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
        <div className="flex md:hidden items-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-[2px] transition-all duration-300 ${i === current ? "w-8 bg-white" : "w-4 bg-white/35"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
