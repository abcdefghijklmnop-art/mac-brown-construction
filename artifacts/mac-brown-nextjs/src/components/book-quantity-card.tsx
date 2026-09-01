"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { img } from "@/lib/asset";
import Link from "next/link";

const BOOK_LINKS: Record<number, { url: string; total: string }> = {
  1: { url: "https://swipesimple.com/links/lnk_91821531",                         total: "42.50" },
  2: { url: "https://swipesimple.com/links/lnk_4da2c5cf1a5686f7c810c01da7ec807d", total: "85"    },
};

const MAX_QTY = 2;

export default function BookQuantityCard() {
  const [qty, setQty] = useState(1);
  const { url, total } = BOOK_LINKS[qty];

  return (
    <div className="group">
      <div className="relative aspect-video overflow-hidden mb-6 bg-muted">
        <div className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1">
          Mac&apos;s Book
        </div>
        <img
          src={img("/images/book-cover.webp")}
          alt="Casting Angles: A Fly Casting Handbook by Mac Brown"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Mac Brown</p>
      <div className="flex items-baseline justify-between mb-1">
        <h3 className="font-serif text-xl font-bold text-foreground leading-snug">
          Casting Angles: A Fly Casting Handbook
        </h3>
        <span className="font-serif text-2xl font-bold text-foreground ml-4 shrink-0">$42.50</span>
      </div>
      <p className="text-xs text-muted-foreground mb-4">Shipping included</p>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        Mac&apos;s comprehensive fly casting handbook covering fundamentals, advanced techniques, and the principles behind a great cast. Written for anglers of all skill levels.
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-0">
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-foreground mr-4">Qty</span>
          <button
            onClick={() => setQty(q => Math.max(1, q - 1))}
            disabled={qty <= 1}
            aria-label="Decrease quantity"
            className="h-9 w-9 flex items-center justify-center border border-border hover:bg-muted/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <Minus size={13} />
          </button>
          <span className="h-9 w-12 flex items-center justify-center border-t border-b border-border font-semibold text-sm text-foreground">
            {qty}
          </span>
          <button
            onClick={() => setQty(q => Math.min(MAX_QTY, q + 1))}
            disabled={qty >= MAX_QTY}
            aria-label="Increase quantity"
            className="h-9 w-9 flex items-center justify-center border border-border hover:bg-muted/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <Plus size={13} />
          </button>
          {qty > 1 && (
            <span className="ml-4 text-sm font-semibold text-foreground">
              Total: ${total}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-3 hover:bg-primary/90 transition-colors"
          >
            {qty === 1 ? `Buy Now — $${total}` : `Buy ${qty} Books — $${total}`}
          </a>
          <Link
            href="/casting-angles"
            className="inline-flex items-center gap-2 border border-border text-foreground text-xs font-semibold uppercase tracking-[0.15em] px-7 py-3 hover:bg-muted/50 transition-colors"
          >
            Learn More
          </Link>
        </div>

        <p className="text-xs text-muted-foreground">
          Prefer Zelle or Venmo?{" "}
          <a href="sms:+18287361469" className="text-primary underline hover:no-underline">
            Text (828) 736-1469
          </a>{" "}
          with your order and we&apos;ll send payment info.
          {qty >= MAX_QTY && (
            <>{" "}Need more than {MAX_QTY}? <Link href="/contact" className="text-primary underline hover:no-underline">Contact us</Link>.</>
          )}
        </p>
      </div>
    </div>
  );
}
