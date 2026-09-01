---
name: Translation widget safety
description: Translation widgets rejected after navigation and functionality tests
---

Neither site should embed a Google translation widget, a Google Translate handoff selector, or GTranslate Free. Visitors can use their browser's built-in translation instead.

**Why:** The legacy widget injected a top banner that interfered with navigation, and clicking its close control restored the page to English rather than simply dismissing the banner. GTranslate Free’s inline dropdown avoided the banner but did not translate either site after a language was selected. The resulting experience was worse than browser-native translation.

**How to apply:** Do not reintroduce Google translation UI, scripts, proxy redirects, GTranslate Free, or navigation selectors on either site unless the translation strategy is explicitly revisited and verified in a live browser before release.