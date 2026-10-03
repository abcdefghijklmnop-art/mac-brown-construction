---
name: AEO hero tagline rule
description: AEO paragraphs and italic taglines go as body text below the hero — never inside the hero overlay.
---

**Rule:** AEO paragraphs and italic taglines always go as body text BELOW the hero section — never inside the hero overlay.

**Correct structure for trip/program pages:**
1. Hero section: full-bleed image + overlay with eyebrow label + H1 + CTA buttons only
2. `{/* AEO */}` section immediately after hero close tag: AEO `<p>` (muted-foreground, centered, leading-relaxed), then italic tagline `<p>` (font-serif italic text-foreground/70)
3. Existing intro / content sections follow

**Why:** User explicitly corrected this twice. "Always introduce the AEO as paragraph below H1 and between the [italic tagline]" means both live in a standalone body section, not the hero overlay. Hero overlay text is decorative/visual — not crawlable body text for AEO/SEO purposes.

**How to apply:**
- Strip any `<p className="... italic ...">` tagline from inside the hero `<section>`
- Strip any AEO `<p>` from inside the hero `<section>`
- After the hero `</section>`, add a `{/* AEO */}` section with both: AEO paragraph first, italic tagline second
- Keep the hero clean: eyebrow label + H1 + CTA buttons only
