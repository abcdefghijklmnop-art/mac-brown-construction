"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[15px] font-semibold text-foreground leading-snug">{q}</span>
        {open ? (
          <ChevronUp size={16} className="text-primary shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-primary shrink-0" />
        )}
      </button>
      {open && (
        <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
      )}
    </div>
  );
}
