---
name: Speakable schema — fully removed
description: Speakable was implemented then removed; both JSON-LD schema and CSS class are now gone from both sites.
---

## Decision
Speakable schema was removed from both sites. It is only supported for news/media publishers, not for a fly fishing guide school.

**What was removed:**
- All `SpeakableSpecification` JSON-LD schema blocks (previously in MBFF schema.ts and FFGS pages)
- All `speakable-aeo` CSS class attributes across all pages on both sites

**Current state:** Neither site has any speakable markup anywhere.

**Why:** Google's Speakable feature is restricted to news publishers. It is not applicable to macbrownflyfish.com or flyfishingguideschool.com.

**How to apply:** Never add speakable schema or the `speakable-aeo` class to either site again.
