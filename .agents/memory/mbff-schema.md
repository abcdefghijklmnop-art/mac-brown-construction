---
name: MBFF Next.js schema implementation
description: How schema.org markup is structured and applied across the MBFF Next.js site
---

## Schema lib location
`artifacts/mac-brown-nextjs/src/lib/schema.ts`

## Exports
- `localBusinessSchema` — LocalBusiness+ProfessionalService, sitewide via layout.tsx
- `macBrownPersonSchema` — Person for Mac Brown, used on bio-mac-brown/page.tsx
- `articleSchema(post)` — Article for blog posts, used in blog/[slug]/page.tsx
- `courseSchema({ name, description, url, image, courseMode? })` — Course for school/clinic pages; courseMode defaults to "onsite", set "online" for online-fly-casting-lessons
- `serviceSchema({ name, description, url, image })` — Service for guide trip / specialty pages
- `cityTripSchema({ city, state, description, url, image })` — Service with city-specific areaServed, used on all 11 city pages
- `webPageSchema({ name, description, url, image? })` — WebPage for informational content pages
- `faqPageSchema(faqs)` — FAQPage for pages with FAQ accordions
- `castingAnglesBookSchema` — Book for casting-angles page

## Where applied
- `layout.tsx` — localBusinessSchema (every page gets LocalBusiness)
- `bio-mac-brown/page.tsx` — macBrownPersonSchema
- `blog/[slug]/page.tsx` — articleSchema
- All 11 city pages — cityTripSchema
- 11 school/clinic pages — courseSchema
- 4 trip pages (wade, float, lake, guided) — serviceSchema
- cherokee-trophy-water — serviceSchema
- group-corporate — serviceSchema
- bryson-city-fly-fishing-report, trout-fishing-nc, wnc-fly-fishing-trail — webPageSchema
- advanced-2-day, spey-clinic, masterclass — courseSchema in server wrapper page.tsx; FAQ inline in *-client.tsx
- learn-to-fly-fish-bryson-city — courseSchema + faqPageSchema(beginnerFaq)
- casting-angles — castingAnglesBookSchema
- online-fly-casting-lessons — courseSchema with courseMode: "online"

## Key IDs
- Business: `https://macbrownflyfish.com/#business`
- Person (Mac Brown): `https://macbrownflyfish.com/#mac-brown`
- FFGS references Mac Brown person by @id for cross-site entity linkage

**Why:** Schema.org markup is the biggest remaining SEO win for both sites. The @id pattern links entities across MBFF and FFGS for richer knowledge graph representation.

**How to apply:** New program pages → import courseSchema or serviceSchema. New city pages → import cityTripSchema. New blog posts → articleSchema already wired via blog/[slug]/page.tsx. Always inject SchemaScript INSIDE the outer div (as first child), not before it.
