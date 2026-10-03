"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { img } from "@/lib/utils";

const INTERVAL = 8000;

const slides = [
  {
    img: "/images/smoky-mountains-layers.webp",
    img1280: "/images/smoky-mountains-layers-1280.webp",
    imgMobile: "/images/mobile/smoky-mountains-layers.webp",
    imgMobile500: "/images/mobile/smoky-mountains-layers-500.webp",
    label: "Great Smoky Mountains · Western NC",
    headline: "Ridge After Ridge.\nRiver After River.",
    objectPosition: "center 45%",
  },
  {
    img: "/images/raft-casting-three.webp",
    img1280: "/images/raft-casting-three-1280.webp",
    imgMobile: "/images/mobile/raft-casting-three.webp",
    imgMobile500: "/images/mobile/raft-casting-three-500.webp",
    label: "On-Water Instruction · Drift Boat",
    headline: "Learn to Cast.\nLearn to Guide.",
    objectPosition: "center 40%",
  },
  {
    img: "/images/cedar-post-group.webp",
    img1280: "/images/cedar-post-group-1280.webp",
    imgMobile: "/images/mobile/cedar-post-group.webp",
    imgMobile500: "/images/mobile/cedar-post-group-500.webp",
    label: "Fly Fishing Guide School · Cedar Post Lodge",
    headline: "A Week That\nChanges Everything.",
    objectPosition: "center 45%",
  },
];

export function HeroSlider() {
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
    [current],
  );

  const next = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo],
  );
  const back = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo],
  );

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
    <div
      className="absolute inset-0 z-30"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
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
              src={img(slide.img)}
              srcSet={slide.imgMobile
                ? `${img(slide.imgMobile500)} 500w, ${img(slide.imgMobile)} 800w, ${img(slide.img1280)} 1280w, ${img(slide.img)} 1920w`
                : `${img(slide.img1280)} 1280w, ${img(slide.img)} 1920w`}
              sizes="100vw"
              alt={slide.label}
              className="w-full h-full object-cover"
              style={{
                transform: isCurrent ? "scale(1.04)" : "scale(1)",
                transition: isCurrent ? "transform 7s ease-out" : "none",
                objectPosition: slide.objectPosition ?? "center",
              }}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
            />
          </div>
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30 z-10" />

      <div className="hero-brand-top absolute top-0 left-0 right-0 z-20 flex flex-col items-center pointer-events-none pt-28 md:pt-32 [@media(max-height:720px)]:hidden">
        <div className="h-px w-10 bg-white/40 mb-3" />
        <p className="text-white/80 text-2xl md:text-3xl font-semibold uppercase tracking-[0.4em]">
          Fly Fishing Guide School
        </p>
        <p className="text-white/55 text-sm md:text-base uppercase tracking-[0.25em] mt-2">
          Bryson City, North Carolina · Est. 1987
        </p>
        <div className="h-px w-10 bg-white/40 mt-3" />
      </div>

      <div className="hero-bottom-section absolute bottom-0 left-0 right-0 z-20 px-12 md:px-20 pb-8 md:pb-14 xl:pb-20">
        <div className="flex items-end justify-between">
          <div>
            <p
              key={`headline-${current}`}
              className="hero-tagline font-serif text-xl md:text-2xl text-white/75 font-bold italic leading-snug max-w-xl mb-4 animate-[fadeSlideUp_0.7s_0.05s_ease_both]"
              style={{ whiteSpace: "pre-line" }}
            >
              {slides[safeCurrent].headline}
            </p>
            <h1 className="hero-h1 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white font-bold leading-tight max-w-2xl mb-6 md:mb-10">
              Fly Fishing Guide School &amp; Skills Development — Smoky Mtns.
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
