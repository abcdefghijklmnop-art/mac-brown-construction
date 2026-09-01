# Mac Brown Fly Fish & Fly Fishing Guide School

Two live websites deployed to Vercel (Next.js). The old Vite SPAs are legacy — **do not edit them**.

## LIVE / DEPLOYED SITES — Always edit these

| Site | Artifact | Vercel URL |
|---|---|---|
| Mac Brown Fly Fish (MBFF) | `artifacts/mac-brown-nextjs/` | macbrownflyfish.com |
| Fly Fishing Guide School (FFGS) | `artifacts/ffgs-nextjs/` | flyfishingguideschool.com |

**Rule: When the user says "change the site" or "fix the page", they mean the Next.js versions above. Never edit the Vite versions.**

## Legacy / DO NOT TOUCH

- `artifacts/mac-brown-fly-fish/` — old Vite SPA, not deployed
- `artifacts/ffgs/` — old Vite SPA, not deployed

## Run & Operate

- `pnpm --filter @workspace/mac-brown-nextjs run dev` — MBFF Next.js
- `pnpm --filter @workspace/ffgs-nextjs run dev` — FFGS Next.js
- `pnpm --filter @workspace/api-server run dev` — API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `bash push.sh` — force-push to GitHub → triggers Vercel auto-deploy (~2 min)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: Next.js 15 App Router + Tailwind
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live — MBFF Next.js

- `artifacts/mac-brown-nextjs/src/app/` — all page routes (App Router)
- `artifacts/mac-brown-nextjs/src/components/` — shared components incl. `price-tag.tsx`, `layout.tsx`
- `artifacts/mac-brown-nextjs/src/hooks/use-schedule.ts` — live pricing hook (fetches from Google Sheets via /api/schedule)
- `artifacts/mac-brown-nextjs/public/images/` — all public images (WebP preferred)
- `artifacts/api-server/` — Express API server

## Where things live — FFGS Next.js

- `artifacts/ffgs-nextjs/src/app/` — all page routes (App Router)
- `artifacts/ffgs-nextjs/src/hooks/use-schedule.ts` — live pricing hook
- `artifacts/ffgs-nextjs/src/app/fly-fishing-guide-school/guide-school-client.tsx` — main school page (uses useSchedule for pricing)
- `artifacts/ffgs-nextjs/src/app/reservation-form/reservation-form-client.tsx` — booking form (uses useSchedule for full/half pricing)
- `artifacts/ffgs-nextjs/public/images/` — all public images (WebP preferred)

## Pricing system

Prices live in the Google Sheet "Pricing" tab (columns: key | display | full | half). The API server reads the sheet on every `/api/schedule` request (60-second server cache). The `useSchedule()` hook fetches from the API and deep-merges with static fallback — prices never go blank if the sheet is unreachable. The `<PriceTag priceKey="..." />` client component (MBFF only) renders the live price anywhere.

**Price change checklist — run this every time guide school tuition changes in the sheet:**
1. Update the static fallback in `lib/schedule/src/index.ts` (`guideSchool.display`, `full`, `half`, `halfDisplay`, `fullDisplay`)
2. Update the JSON-LD `faqSchema` answer text in `artifacts/ffgs-nextjs/src/app/is-fly-fishing-guide-school-worth-it/page.tsx` (marked with a `// NOTE:` comment — server-rendered, not dynamic)
3. Update the spelled-out prose sentence `"Four thousand eight hundred fifty dollars is a real number…"` in the same file (Quick Answer continuation section) — rewrite it to match the new price in words

## Architecture decisions

- All images stored as WebP in `public/images/` for performance
- Primary color: hsl(215 55% 28%) deep slate blue
- "use client" pages in Next.js get a thin server `page.tsx` (exports metadata) + `*-client.tsx` for content. Use `title: { absolute: "" }` to bypass the layout template.
- New MBFF program pages: add `<PriceTag>` to the blue details strip AND any booking widget cards

## Product

Mac Brown Fly Fish: guided trips, schools (Fly Fishing Guide School, Masterclass Casting Workshop), specialty clinics, casting instruction, podcast feed, digital waiver, events calendar, photo gallery.

Fly Fishing Guide School: week-long professional guide training, city landing pages (10 cities), reservation form, instructor profiles, blog.

## User preferences

- **Never make the user read code to find a change — permanent rule, no exceptions.** When a script, config, or file needs to be updated, always provide the complete ready-to-paste version. Never ask the user to search through lines of code or make a targeted edit themselves.
- **Truncated content rule:** If any user-provided text (paragraph, list, instructions) is cut off with `[Truncated]` or ends mid-sentence, STOP immediately and ask the user to re-paste the missing portion. Never guess, fill in, or proceed with incomplete text.
- **AEO paragraph placement rule (no exceptions):** AEO paragraphs and italic taglines always go as body text in a dedicated section BELOW the hero — never inside the hero overlay. Hero overlay contains only: eyebrow label + H1 + CTA buttons. Immediately after the hero `</section>`, add a `{/* AEO */}` section: AEO `<p>` first, italic tagline `<p>` second. This applies to every trip, program, clinic, and school page on both sites.
- Do NOT change any text content on any page unless explicitly asked
- All images are Mac Brown's own photos — never use stock or AI images
- When the user uploads new photos: convert to WebP (quality 82, ImageMagick `convert` command), copy to `public/images/`, and add to the photo gallery array in `photo-gallery.tsx`. Remove the original JPG after conversion.
- Image conversion command: `magick input.jpg -quality 82 output.webp` (use `magick`, not `convert` — IMv7)
- **Responsive image rule (applies to ALL pages including new blog posts, city pages, and any future content):** Every `<img>` tag must have `srcSet` with a mobile-optimized variant. Use `fetchPriority="high"` + `sizes="100vw"` on above-the-fold heroes; use `loading="lazy"` + appropriate `sizes` on below-the-fold content. Never serve a 1920px image to a 390px mobile screen.
  - **Folder structure:** Full-resolution desktop images → `public/images/`. Mobile-optimized images → `public/images/mobile/` (same filename). srcSet pattern: `srcSet="/images/mobile/foo.webp 800w, /images/foo.webp 1920w"`
  - Mobile hero resize (landscape, ≤1280px): `magick input.webp -resize 1280x -quality 82 public/images/mobile/input.webp`
  - Mobile content resize (portrait/square, ≤800px): `magick input.webp -resize 800x -quality 82 public/images/mobile/input.webp`
  - Existing images already use the `-1280`/`-800` suffix convention — do not rename them, keep using suffix srcSet for those.
  - New images from this point forward use the folder structure above.
- All new MBFF program/clinic/school pages must follow this standard page format:
  1. Hero (full-bleed photo, title, italic tagline, CTA button)
  2. Dates/details strip (primary blue bar — dates, location, price via `<PriceTag>`, key facts)
  3. Intro section (centered prose + blockquote)
  4. Who This Is For (checklist with Check icons)
  5. Photo divider (2-column `aspect-[4/3]` grid, two real photos)
  6. Curriculum (3-column card grid, 9 topics, each with a short blue rule, title, and detailed body paragraph)
  7. Venue and/or Instructor section (prose)
  8. FAQ accordion (ChevronDown/Up toggle)
  9. CTA section (primary blue full-width, two buttons: Inquire & Register + phone)

## Deploy checklist

Before every push to GitHub (`bash push.sh`), always run both typechecks first:
```
pnpm --filter @workspace/mac-brown-nextjs run typecheck
pnpm --filter @workspace/ffgs-nextjs run typecheck
```
Both must pass clean before pushing. No exceptions.

## Chatbot rules — always include in system prompts

- **Meals:** Lunches ARE included for all school and clinic programs (Masterclass, Advanced 2-Day, Spey, Saltwater, Smoky Mountain Weekend Schools, Oar Frame Rowing School, Fly Fishing Guide School, and any multi-day school or clinic). Lunches are NOT included for guided float, wade, or lake trips. Answer this confidently — never tell visitors to call for this information.
- **Nantahala float trips:** Float trips run on BOTH the Tuckasegee River and the Nantahala River.

## Nantahala River — school/clinic pages vs. guided trips (no exceptions)

**Never mention the Nantahala River on school, clinic, or orphan landing pages.** That includes FAQs, logistics sections, metadata descriptions, schema, and any other content on pages like `/spey-casting-clinics-nc`, `/fly-casting-school-north-carolina`, and all future pages in this series. School and clinic instruction takes place on the **Tuckasegee River in Bryson City**. The Nantahala River is only appropriate on guided trip pages, where Mac sometimes uses it for float trips.

## NC Fishing License rules — always use this wording, no exceptions

- There is NO trout stamp in NC anymore
- License types: **In-state** or **Out-of-state** Inland Fishing License
- **Tuckasegee River, October through end of May:** standard Inland Fishing License is all that is required. The **Mountain Heritage Trout Waters Day License** is a cheaper optional alternative for out-of-state visitors only — it is NOT required, just a money-saving option. Never say it is required.
- **All other waters:** standard Inland Fishing License (in-state or out-of-state) only
- Purchase at ncwildlife.org or any local sporting goods store
- Never mention "trout stamp" — it no longer exists in NC

## No ACA — permanent rule, no exceptions

Never mention ACA (American Canoe Association) anywhere on either site — not in page copy, hero eyebrows, metadata, schema, FAQ answers, or any other context. Remove it on sight if found.

## Faculty combined experience rule — always 450 years

Always use "450 years" (or "450+ years") of combined/on-water experience when referring to the FFGS instructor faculty as a group. Never use 500, 500+, or any other number — this must stay consistent across every page, blog post, and city landing page.

## Factual rules — never get these wrong

- Mac Brown started presenting at The Fly Fishing Show in **1994**, not 1987. The show did not exist in 1987.
- Mac Brown founded Mac Brown Fly Fish and began guiding/teaching in Bryson City, NC in **1987** — that date applies to guiding and teaching, not to The Fly Fishing Show.
- When writing about The Fly Fishing Show: "since 1994" or "1994–present". Never "since 1987".

## Sitemap lastmod rule (no exceptions)
Whenever a page's content is meaningfully changed, update its `lastmod` date in the sitemap at the same time (`artifacts/mac-brown-nextjs/src/app/sitemap.ts` or `artifacts/ffgs-nextjs/src/app/sitemap.ts`). Never use `new Date()` for lastmod — Google ignores it as unreliable. Always use a hardcoded `"YYYY-MM-DD"` string matching the actual change date. Blog posts use their `post.date` field automatically.

## Image orientation rule — permanent, no exceptions

Never use CSS `rotate-180` (or any CSS rotation) to compensate for an upside-down or sideways image. Mobile browsers honor EXIF orientation natively, so a CSS rotation fix that works on desktop will double-rotate (and break) the image on mobile. Always fix the image itself:
```
magick input.webp -auto-orient -quality 82 input.webp
```
Run `-auto-orient` first, then create the mobile variant. The `Orientation: TopLeft` EXIF value confirms the fix is correct.

## Gotchas

- Server components can embed `<PriceTag>` (a client component) directly — no wrapper needed
- `PriceTag` `as` prop supports `"div" | "span" | "p"`
- WebP files in public/images are served directly; image src paths must match exactly

## Orphan landing page standard (applies to all new `/slug` beginner/clinic/school pages on MBFF)

All orphan pages follow this exact section order — no exceptions:
1. **Hero** — full-bleed `tuck-river-spey.webp`-style photo; eyebrow label + H1 + 2 CTA buttons; right-aligned overlay text. No taglines inside the hero.
2. **AEO section** — immediately after `</section>`. Two `<p>` tags: AEO paragraph first (credentials + what page covers + who it's for), italic tagline second. Fresh language each page — never copy-paste from another page's AEO.
3. **Intro** — 3–4 paragraphs of plain prose explaining the topic from zero. End with a blockquote (Mac's voice).
4. **Fork in the River** — 2-column card grid (`Path A` / `Path B`). Each card: eyebrow, h3, paragraph, checklist, full-width CTA button. Muted background section.
5. **Signature section** — topic-specific (e.g. "Why Spey at Any Age", "Everyone Starts Somewhere"). Plain prose, no jargon.
6. **Curriculum matrix** — header row (primary blue bg) + data rows. Left col = searchable plain term. Right col = plain-English benefit. Header labels: "What We Work On" / "What You Get Out of It".
7. **Photo divider** — 2-column `h-64 md:h-96` grid, two real photos with `loading="lazy"` + srcSet.
8. **How Mac Teaches** — prose section, feel-first language, bullet checklist. Never use: kinesthetics, biomechanics, muscle memory framed technically.
9. **FAQ section** — `<FaqSection items={faqs} />`. Min 7 FAQs. Always include: Who is Mac Brown (credentials), beginner welcome, gear provided, where it takes place, aging/body question if relevant.
10. **Local logistics + CTA box** — 2-column: prose left (location, rivers, what's included, checklist), primary-blue CTA box right (2–3 action buttons + phone).

## Schema standard for orphan pages (excellent, not average)

Every orphan page must include BOTH:
- `courseSchema({...})` — with ALL of: rich `description` (3–5 sentences including Mac's credentials, location, who it's for, what they learn), `educationalLevel`, `coursePrerequisites`, `teaches` array (6–8 skills), `price` if known
- `faqPageSchema(faqs)` — auto-generated from the same `faqs` array rendered on the page

The `courseSchema` `@id` is set automatically by the function (`url/#course`). Never omit `educationalLevel`, `coursePrerequisites`, or `teaches` — these are what elevate schema from average to excellent and enable rich results.

## Repo-wide sweep rule — permanent, no exceptions

Content is often duplicated across multiple files for the same page/slug (e.g. a blog post's AEO summary lives in a separate hardcoded lookup table in `blog/[slug]/page.tsx`, independent from the main article body in `blog-posts.ts`). Whenever asked to fix a fact, number, or phrase anywhere:
1. Never assume a single edit location is the only one. `grep` the exact phrase (and close variants) across the ENTIRE repo (`artifacts/ffgs-nextjs/src` and `artifacts/mac-brown-nextjs/src`), not just the file the user pointed at.
2. Explicitly check known duplicate-content spots for the affected slug: `blog-posts.ts` (article body/excerpt), `blog/[slug]/page.tsx` (AEO/AI summary lookup), the page's own metadata/schema description, and any FAQ/JSON-LD text repeating the same fact.
3. Fix every match found in the same pass (this already matches the "fix everything found in a sweep" rule below — this entry makes explicit that duplicate-content lookup tables count as part of that sweep).
4. Report back exactly which files/locations were checked and fixed, so it's clear the sweep was thorough, not a single spot-fix.

## User preferences

- **One push per day — permanent rule, no exceptions.** Never suggest `bash push.sh` mid-session. Batch ALL changes across the entire working session and push once. The user types **"final"** to signal the day's work is done. **The user ALWAYS runs `bash push.sh` themselves in the Shell tab — the agent must NEVER attempt to run it.** Do not mention pushing, deploying, or "run push.sh" at any other time.
- **Cloudflare:** Both domains always run Cloudflare orange cloud (proxied). After every Vercel deploy, purge both zones — no need to ask or qualify.
- **Always show code inline when giving setup instructions.** If the instructions tell the user to paste code somewhere (Apps Script, Vercel, terminal, etc.), include the full code in a copy-pasteable code block in the same message. Never just reference a filename and make them ask for the contents.
- **Fix everything found in a sweep — no exceptions.** If a search or grep reveals broken, outdated, or incorrect content anywhere in the codebase, fix it immediately in the same pass. Never note it and move on. Never leave it for the user to catch later.
- **No speakable schema — permanent rule, no exceptions.** Never add `speakablePageSchema()`, `.speakable-aeo` CSS classes, or any Speakable JSON-LD to any page on either site. Do not suggest it, implement it, or reference it.
