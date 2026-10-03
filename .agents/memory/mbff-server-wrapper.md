---
name: MBFF metadata server-wrapper pattern
description: How to add metadata to "use client" pages in MBFF Next.js and FFGS Next.js
---

## Problem
Next.js requires `export const metadata` to be in a server component. Any page using hooks (useState, useEffect, etc.) is marked "use client" and cannot export metadata.

## Solution: server wrapper
1. Rename the existing `page.tsx` to `*-client.tsx` (e.g. `contact-client.tsx`)
2. Create a new `page.tsx` (no "use client") that:
   - Exports `metadata` with `title: { absolute: "Full Title Here" }`
   - Imports and renders the client component
   - Optionally adds `<SchemaScript>` in the JSX for structured data

## Critical: use `title: { absolute: ... }` not a plain string
The layout.tsx has `title: { template: "%s | Mac Brown Fly Fish" }`. A plain string title gets the suffix appended, producing "Title | Mac Brown Fly Fish | Mac Brown Fly Fish". Always use `title: { absolute: "Full Title" }` on pages where the title already contains the brand name.

## Example
```tsx
// page.tsx (server component)
import type { Metadata } from "next";
import { SchemaScript } from "@/components/schema-script";
import { courseSchema } from "@/lib/schema";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: { absolute: "Contact Mac Brown Fly Fish | Bryson City, NC" },
  description: "...",
};

export default function Page() {
  return (
    <>
      <SchemaScript schema={courseSchema({ ... })} />
      <ContactClient />
    </>
  );
}
```

## Applies to both sites
Same pattern is used in artifacts/mac-brown-nextjs and artifacts/ffgs-nextjs.

**Why:** Next.js App Router cannot export metadata from "use client" files. The wrapper is the only way to get both interactivity and correct SSR metadata/schema.
