---
name: Preview build/restart ordering
description: Development previews can serve mismatched Next.js assets if a production build runs while next dev is active.
---

Run production builds before starting or restarting the artifact's development workflow. If a build runs while next dev is serving the same `.next` directory, restart that workflow afterward so the preview regenerates a consistent HTML/CSS/JavaScript asset set.

**Why:** A production build can replace the development compiler output while the running dev server retains stale asset references, producing an apparently unstyled page even though the source code is valid.

**How to apply:** After any production build in a Next.js artifact, restart its managed web workflow before checking the preview.