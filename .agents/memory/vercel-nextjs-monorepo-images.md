---
name: Vercel Next.js monorepo public dir + symlink images
description: Why images 404 on Vercel for Next.js apps in a pnpm monorepo, and the two-part fix.
---

## The problem

When the Vercel build command is `cd ../.. && pnpm --filter @workspace/<pkg> run build`, the working directory ends at the workspace root after the build. Vercel's static-file scanner then looks for `public/` at the **workspace root**, not at the Next.js Root Directory (`artifacts/<pkg>/`). Result: pages load (`.next/` is found via Root Directory), but all images 404.

## Fix part 1 — copy public/ to workspace root in the build script

In `artifacts/<pkg>/package.json`:
```json
"build": "next build && cp -rL public ../../public"
```

`-L` dereferences symlinks (see part 2). This runs after `next build` and puts the public folder where Vercel's scanner finds it.

## Fix part 2 — replace image symlinks with real files

Image files that are symlinks (pointing to `../../../<other-app>/public/images/...`) copy as broken symlinks when `cp -r` is used without `-L`. On Vercel the relative symlink targets don't resolve from the workspace root.

Before deploying, replace all symlinks with real copies:
```bash
cd artifacts/<pkg>/public/images
for f in $(find . -maxdepth 1 -type l); do
  real=$(realpath "$f")
  rm "$f"
  cp "$real" "$f"
done
```

Then use `cp -rL` in the build script (see part 1) to auto-dereference any future symlinks.

**Why:** Vercel's Next.js adapter detects `.next/` via Root Directory but scans `public/` from wherever the build process exited (workspace root). Symlinks that escape the package directory break silently.

**How to apply:** Any time a new Next.js artifact is added to this monorepo and deployed to Vercel with a custom `cd ../..` build command.
