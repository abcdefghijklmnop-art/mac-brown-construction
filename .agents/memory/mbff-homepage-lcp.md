---
name: MBFF homepage LCP fix
description: Why the homepage hero caused 9.3s LCP and how the server-render + client overlay pattern fixes it.
---

## The problem
`home-client.tsx` was `"use client"` solely because of `HeroSlider`. This meant the LCP image (`<img>` tag inside the slider) only appeared in the DOM after React hydrated — not from server HTML. A `<link rel="preload">` in `page.tsx` helped fetch the image early but the LCP element still wasn't painted until JS executed, giving 9.3s LCP on slow 4G.

## The fix
Split the slider into two parts:

1. **`page.tsx` (server component)** — renders the complete first slide statically: `<img fetchPriority="high" srcSet="...">`, gradient, header text, headline, and CTA buttons. This is in the server HTML immediately — LCP element is discoverable before any JS.

2. **`hero-slider-client.tsx` ("use client")** — `HeroSliderClient` renders `position: absolute, inset: 0` inside the hero `<section>`. It starts at `opacity: 0` and transitions to `opacity: 1` after `useEffect` sets `mounted = true` (~200ms). When it becomes visible it perfectly matches slide 0 (same image URL, same text), so there's no visual jump.

3. **`home-client.tsx`** — removed `"use client"` directive and `HeroSlider` entirely. Now a server component rendering the static below-the-fold sections.

## Files involved
- `artifacts/mac-brown-nextjs/src/app/page.tsx` — server hero + metadata
- `artifacts/mac-brown-nextjs/src/app/hero-slider-client.tsx` — interactive slider overlay
- `artifacts/mac-brown-nextjs/src/app/home-client.tsx` — server component, below-fold sections only

**Why:** LCP image must be in server-rendered HTML. Preload hints alone don't help if the `<img>` element only exists in JavaScript.

**How to apply:** Any "use client" component that contains the LCP image should be refactored the same way — render the LCP element server-side, overlay client interactivity on top with `opacity: 0 → 1` after mount.
