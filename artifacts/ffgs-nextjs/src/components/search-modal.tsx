"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { FFGS_SEARCH_INDEX, type SearchPage } from "@/lib/search-index";

interface Props {
  open: boolean;
  onClose: () => void;
}

function highlight(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-primary/20 text-primary font-semibold rounded-sm px-0.5">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo<SearchPage[]>(() => {
    if (!query.trim()) return FFGS_SEARCH_INDEX.slice(0, 16);
    const q = query.toLowerCase();
    return FFGS_SEARCH_INDEX.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
    ).slice(0, 10);
  }, [query]);

  const grouped = useMemo(() => {
    const map = new Map<string, SearchPage[]>();
    for (const page of results) {
      if (!map.has(page.category)) map.set(page.category, []);
      map.get(page.category)!.push(page);
    }
    return map;
  }, [results]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIdx(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  // Global Escape listener — works regardless of which element has focus
  useEffect(() => {
    if (!open) return;
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  function navigate(href: string, external?: boolean) {
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      router.push(href);
    }
    onClose();
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[activeIdx]) {
      navigate(results[activeIdx].href);
    }
  }

  if (!open) return null;

  let flatIdx = 0;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4">
      {/* Backdrop — own click handler, no e.target trickery */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-xl bg-background border border-border shadow-2xl flex flex-col overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search size={16} className="text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Search programs, locations, instructors…"
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Clear search">
              <X size={14} />
            </button>
          )}
          <button
            onClick={onClose}
            className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground border border-border px-2 py-0.5 font-mono hover:bg-muted/40 transition-colors"
            aria-label="Close search"
          >
            ✕ close
          </button>
        </div>

        <div className="overflow-y-auto max-h-[60vh]">
          {results.length === 0 ? (
            <div className="py-10 text-center text-sm text-muted-foreground">
              No pages found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            Array.from(grouped.entries()).map(([category, pages]) => (
              <div key={category}>
                <div className="px-4 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  {category}
                </div>
                {pages.map((page) => {
                  const isActive = flatIdx === activeIdx;
                  const idx = flatIdx++;
                  return (
                    <button
                      key={page.href}
                      onMouseEnter={() => setActiveIdx(idx)}
                      onClick={() => navigate(page.href, page.external)}
                      className={`w-full text-left px-4 py-2.5 flex flex-col gap-0.5 transition-colors ${
                        isActive ? "bg-primary/8" : "hover:bg-muted/40"
                      }`}
                    >
                      <span className="text-sm font-medium text-foreground">
                        {highlight(page.title, query)}
                      </span>
                      <span className="text-xs text-muted-foreground line-clamp-1">
                        {highlight(page.description, query)}
                      </span>
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {results.length > 0 && (
          <div className="px-4 py-2 border-t border-border flex items-center gap-4 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1"><kbd className="border border-border px-1 py-0.5 font-mono">↑↓</kbd> navigate</span>
            <span className="flex items-center gap-1"><kbd className="border border-border px-1 py-0.5 font-mono">↵</kbd> open</span>
            <button onClick={onClose} className="flex items-center gap-1 hover:text-foreground transition-colors"><kbd className="border border-border px-1 py-0.5 font-mono">esc</kbd> close</button>
          </div>
        )}
      </div>
    </div>
  );
}
