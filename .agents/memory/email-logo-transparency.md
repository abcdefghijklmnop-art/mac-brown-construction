---
name: Transactional email logo transparency
description: Why transparent PNG/WebP logos show a black box in some email clients, and the reliable fix.
---

Transparent-background logos (WebP or PNG, alpha channel confirmed via pixel check) rendered with a solid **black** box in at least one real-world email client (classic/desktop Outlook, which uses the Word rendering engine) even though the source files were genuinely transparent and rendered fine everywhere else (browser, other clients).

**Why:** Some email clients — especially Word-engine Outlook — do not honor alpha transparency in raster images at all and fall back to filling transparent pixels with black. This is a client rendering limitation, not a bug in the image file. Switching container format (WebP → PNG) does NOT fix it, since both formats' alpha gets ignored the same way.

**How to apply:** For any logo/image placed on a colored background inside a transactional email template (not a normal web page), don't rely on alpha transparency at all. Flatten/composite the image onto a solid background that exactly matches the surrounding container color (e.g. `magick logo.png -background "#20416F" -flatten logo-navy.png`), then reference that flattened file. This guarantees a seamless look regardless of client transparency support. Only applies to email HTML — normal website usage of transparent logos is unaffected and should keep using transparent files.
