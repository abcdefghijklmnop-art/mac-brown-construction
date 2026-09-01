"use client";

import { useState } from "react";
import { img } from "@/lib/asset";

const photos: { src: string; alt: string; pos?: string }[] = [
  { src: img("/images/waterfall.webp"), alt: "Waterfall on a Western NC trout stream" },
  { src: img("/images/appalachian-panorama.webp"), alt: "Appalachian panorama" },
  { src: img("/images/smoky-mountains.webp"), alt: "Great Smoky Mountains" },
  { src: img("/images/fly-fishing-cherokee.webp"), alt: "Fly fishing Cherokee trophy waters surrounded by peak fall foliage" },
  { src: img("/images/paradise-valley.webp"), alt: "Fly fishing guides above the Yellowstone River in Paradise Valley, Montana" },
  { src: img("/images/tuck-river-spey.webp"), alt: "Spey casting on the Tuckasegee River, Bryson City NC" },
  { src: img("/images/tuckasegee-summer.webp"), alt: "Tuckasegee River summer" },
  { src: img("/images/rainbow-trout.webp"), alt: "Rainbow trout" },
  { src: img("/images/brown-trout.webp"), alt: "Brown trout" },
  { src: img("/images/rainbow-hand.webp"), alt: "Rainbow trout in hand" },
  { src: img("/images/freestone-brown-trout.webp"), alt: "Freestone brown trout" },
  { src: img("/images/fall-brown-trout.webp"), alt: "Fall brown trout" },
  { src: img("/images/rainbow-winter-fishing.webp"), alt: "Winter rainbow fishing" },
  { src: img("/images/guide-fish-1.webp"), alt: "Mac Brown guiding on the Tuckasegee River" },
  { src: img("/images/guide-fish-2.webp"), alt: "Guided wade trip, Western NC" },
  { src: img("/images/guide-fish-3.webp"), alt: "Guided fly fishing, Smoky Mountains" },
  { src: img("/images/guide-trip-1.webp"), alt: "Guided trip on the Tuckasegee" },
  { src: img("/images/guide-trip-2.webp"), alt: "Guided trip, Western North Carolina" },
  { src: img("/images/guide-trip-3.webp"), alt: "Float trip, Bryson City NC" },
  { src: img("/images/client-float-1.webp"), alt: "Client float trip" },
  { src: img("/images/client-rainbow-1.webp"), alt: "Client with rainbow trout" },
  { src: img("/images/client-rainbow-2.webp"), alt: "Client with rainbow trout" },
  { src: img("/images/client-brown-1.webp"), alt: "Client with brown trout" },
  { src: img("/images/client-brown-2.webp"), alt: "Client with brown trout" },
  { src: img("/images/client-brown-3.webp"), alt: "Client with brown trout" },
  { src: img("/images/client-drift-brown.webp"), alt: "Client drift fishing brown trout" },
  { src: img("/images/client-fall-brown.webp"), alt: "Client fall brown trout" },
  { src: img("/images/client-nantahala-brown.webp"), alt: "Nantahala brown trout" },
  { src: img("/images/client-spring-brown.webp"), alt: "Spring brown trout" },
  { src: img("/images/client-wading-1.webp"), alt: "Client wading a Smoky Mountain stream" },
  { src: img("/images/fly-school-1.webp"), alt: "Fly Fishing Guide School" },
  { src: img("/images/casting-class-1.webp"), alt: "Fly casting class" },
  { src: img("/images/casting-class-2.webp"), alt: "Fly casting class instruction" },
  { src: img("/images/advanced-casting-class-atlanta-ga.webp"), alt: "Advanced fly casting class, Atlanta GA" },
  { src: img("/images/youth-group-instruction.webp"), alt: "Youth group fly casting instruction" },
  { src: img("/images/youth-kids-casting-class.webp"), alt: "Kids fly casting class" },
  { src: img("/images/youth-brown-trout.webp"), alt: "Youth angler with brown trout" },
  { src: img("/images/youth-rainbow-montana.webp"), alt: "Youth angler with rainbow trout, Montana" },
  { src: img("/images/youth-brown-montana.webp"), alt: "Youth angler with brown trout, Montana" },
  { src: img("/images/flies-closeup.webp"), alt: "Dry flies close-up" },
  { src: img("/images/upper-nantahala-nick.webp"), alt: "Upper Nantahala River" },
  { src: img("/images/lake-trip-hero.webp"), alt: "Lake fly fishing trip" },
  { src: img("/images/salmon-river-rowing.webp"), alt: "Rowing the Salmon River" },
  { src: img("/images/fly-fishing-show.webp"), alt: "Fly fishing show" },
  { src: img("/images/trade-show-group.webp"), alt: "Fly fishing trade show" },
  { src: img("/images/ffi-testing-rochester-mn.webp"), alt: "FFI certified casting exam, Rochester MN" },
  { src: img("/images/hall-of-fame-induction.webp"), alt: "Hall of Fame induction, Southern Appalachian Fly Fishing Museum", pos: "right center" },
  { src: img("/images/mac-brown-seminars-portrait.webp"), alt: "Mac Brown presenting at a fly fishing seminar" },
  { src: img("/images/mac-headshot-2.webp"), alt: "Mac Brown, FFI Master Casting Instructor" },
  { src: img("/images/elk-field.webp"), alt: "Elk in a mountain field" },
  { src: img("/images/fall-river-fishing.webp"), alt: "Fall fly fishing" },
  { src: img("/images/fall-pool-reflection.webp"), alt: "Fall pool reflection" },
  { src: img("/images/fall-river-misty.webp"), alt: "Misty fall river" },
  { src: img("/images/masterclass/mc-01.webp"), alt: "Masterclass Casting Workshop" },
  { src: img("/images/masterclass/mc-02.webp"), alt: "Masterclass Casting Workshop" },
  { src: img("/images/masterclass/mc-03.webp"), alt: "Masterclass Casting Workshop" },
  { src: img("/images/masterclass/mc-04.webp"), alt: "Masterclass Casting Workshop" },
  { src: img("/images/masterclass/mc-05.webp"), alt: "Masterclass Casting Workshop" },
  { src: img("/images/masterclass/mc-06.webp"), alt: "Masterclass Casting Workshop" },
  { src: img("/images/masterclass/mc-07.webp"), alt: "Masterclass Casting Workshop" },
  { src: img("/images/masterclass/mc-08.webp"), alt: "Masterclass Casting Workshop" },
  { src: img("/images/masterclass/mc-09.webp"), alt: "Masterclass Casting Workshop" },
  { src: img("/images/masterclass/mc-10.webp"), alt: "Masterclass Casting Workshop" },
  { src: img("/images/masterclass/mc-11.webp"), alt: "Masterclass Casting Workshop" },
  { src: img("/images/masterclass/mc-12.webp"), alt: "Masterclass Casting Workshop" },
  { src: img("/images/masterclass/mc-13.webp"), alt: "Masterclass Casting Workshop" },
  { src: img("/images/masterclass/mc-14.webp"), alt: "Masterclass Casting Workshop" },
  { src: img("/images/masterclass/mc-15.webp"), alt: "Masterclass Casting Workshop" },
  { src: img("/images/masterclass/mc-16.webp"), alt: "Masterclass Casting Workshop" },
  { src: img("/images/masterclass/mc-17.webp"), alt: "Masterclass Casting Workshop" },
  { src: img("/images/masterclass/mc-18.webp"), alt: "Masterclass Casting Workshop" },
];

const BATCH = 24;

export default function GalleryGrid() {
  const [visible, setVisible] = useState(BATCH);
  const shown = photos.slice(0, visible);
  const hasMore = visible < photos.length;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3">
          {shown.map((p, i) => (
            <div key={i} className="mb-3 overflow-hidden break-inside-avoid">
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-auto block hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisible(v => Math.min(v + BATCH, photos.length))}
              className="text-xs font-semibold uppercase tracking-[0.15em] border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-white transition-colors"
            >
              Load More ({photos.length - visible} remaining)
            </button>
          </div>
        )}

        <p className="mt-6 text-center text-xs text-muted-foreground uppercase tracking-widest">
          {shown.length} of {photos.length} photos
        </p>
      </div>
    </section>
  );
}
