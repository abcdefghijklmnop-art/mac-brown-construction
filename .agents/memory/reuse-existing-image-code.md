---
name: Reuse existing image code — grep first
description: Before writing new code for an image (object-position, srcSet, mobile path, etc.), grep for existing uses of that same image file and copy the working pattern directly.
---

Before writing any new code involving an image (object-position, hero crop, srcSet, mobile path, lazy/eager loading), grep for the filename across the codebase first. If the image is already used somewhere else, copy that exact block — src, srcSet, sizes, object-position, loading attribute and all.

**Why:** User explicitly called this out after multiple back-and-forth turns fixing object-position on raft-casting-three.webp, when the correct settings (object-top, mobile path, etc.) were already present on another page that used the same image. Copying the working code would have solved it in one step.

**How to apply:**
1. `grep -r "image-filename.webp" artifacts/ --include="*.tsx" --include="*.ts" -l` — find all uses
2. Read the relevant section of each file found
3. Copy the img/picture block that already works — do not rewrite from scratch
4. Only write new code if the image has never been used before
