---
name: Mac Brown bio corrections
description: Two factual errors corrected everywhere on both sites; correct phrasing to use going forward.
---

## Correct phrasing (use these exactly)

1. **Award** — "FFI Lifetime Achievement Award"
   - Wrong: "Lifetime Achievement Award from the Fly Fishing Show" / "Lifetime Achievement Award recipient from the Fly Fishing Show"
   - Right: "FFI Lifetime Achievement Award" — the award is from Fly Fishers International, not The Fly Fishing Show

2. **Team USA** — "former Fly Fishing Team USA Youth Team coach"
   - Wrong: "Fly Fishing Team USA coach" (implies current, implies full Team USA)
   - Right: "former Fly Fishing Team USA Youth Team coach" — past tense, Youth Team only

**Why:** Mac confirmed both corrections. The Fly Fishing Show has no such award; FFI does. Mac helped coach the Youth Team in the past and is no longer in that role.

## Files already corrected (as of Jul 29 2026)

- `artifacts/mac-brown-nextjs/src/app/page.tsx` — homepage FAQ "Who is Mac Brown?"
- `artifacts/mac-brown-nextjs/src/lib/schema.ts` — LocalBusiness description (line ~17)
- `artifacts/ffgs-nextjs/src/app/page.tsx` — homepage schema FAQ "Who is Mac Brown?"
- `artifacts/ffgs-nextjs/src/app/new-to-fly-fishing/page.tsx` — schema FAQ "Who is Mac Brown?"

## How to apply

Grep both codebases before any bio edit:
```
grep -rn "Team USA coach\|Fly Fishing Show.*Award\|Award.*Fly Fishing Show" artifacts/
```
Fix any hits. The stat labels "X Fly Fishing Team USA Coaches" on school pages refer to faculty broadly and may still be accurate — only fix references that are explicitly about Mac personally.
