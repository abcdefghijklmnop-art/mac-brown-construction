---
name: Logo LCP fix — server-rendered slot pattern
description: How we eliminated 1-2s LCP element render delay caused by logo inside "use client" SiteNav on both MBFF and FFGS.
---

## The problem
LCP element was the site logo (not the hero image) on both sites. Lighthouse LCP breakdown showed:
- MBFF: 1,930ms element render delay
- FFGS: 1,060ms element render delay

Root cause: logos were inside `SiteNav`, which is a `"use client"` component. The browser parses the logo `<img>` in the server-sent HTML, but React holds off painting it until hydration completes. On Slow 4G that's 1-2 seconds of 54-157 KiB JS downloading and executing.

## Why this happened after the hero fix
The hero image LCP was fixed first (9.3s → fast, by server-rendering first slide). After that, the logo became the *new* LCP element because it was the next-largest element with a render delay. It's whack-a-mole: fix the slowest element, the next one surfaces.

## The fix
Pass the logo as a `React.ReactNode` **slot** from `layout.tsx` (a server component) into `SiteShell` → `SiteNav`. Server-passed children retain server-rendered status inside client boundaries in Next.js App Router.

**layout.tsx (server component):**
```tsx
<SiteShell logo={
  <Link href="/">
    <img src="/mbff-logo.webp" alt="..." width={90} height={60}
      fetchPriority="high"
      className="h-[60px] object-contain transition-all duration-300"
      style={{ filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.65))" }}
    />
  </Link>
}>
  {children}
</SiteShell>
```

**site-shell.tsx (client component):**
```tsx
function SiteNav({ logo }: { logo?: React.ReactNode }) {
  // ...
  return (
    <header>
      <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 flex items-center justify-center">
        {logo ?? <Link href="/"><img ... /></Link>}
      </div>
    </header>
  );
}

export function SiteShell({ children, logo }: { children: React.ReactNode; logo?: React.ReactNode }) {
  return (
    <div>
      <SiteNav logo={logo} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
```

**Why:** The `<img>` element is in the server-rendered HTML, so the browser paints it immediately. After hydration, the client component manages scroll effects/dropdowns normally. The fallback (no logo prop) keeps the original behavior.

**Trade-off:** The drop-shadow filter is always visible in the server-rendered logo (before hydration). On non-home pages it briefly shows, then disappears when the client takes over (~1-2s on slow connections). Acceptable for the performance gain.
