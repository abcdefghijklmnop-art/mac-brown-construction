"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function RiverItem({ name, desc }: { name: string; desc: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-semibold text-foreground">{name}</span>
        {open ? <ChevronUp size={16} className="text-muted-foreground shrink-0" /> : <ChevronDown size={16} className="text-muted-foreground shrink-0" />}
      </button>
      {open && (
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">{desc}</p>
      )}
    </div>
  );
}
