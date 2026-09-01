#!/bin/bash
# Creates a clean snapshot push to GitHub — no history bloat
# Pushes to ALL site repos so one command deploys everything
git config user.email "macbrownflyfish@gmail.com"
git config user.name "macbrown63"
BRANCH="deploy-$(date +%s)"
git checkout --orphan "$BRANCH"
git add -A
git commit -m "Deploy $(date '+%Y-%m-%d %H:%M')"
git push "https://abcdefghijklmnop-art:$GITHUB_PERSONAL_ACCESS_TOKEN@github.com/abcdefghijklmnop-art/mac-brown-fly-fish-next.js-.git" "$BRANCH:main" --force
git push "https://abcdefghijklmnop-art:$GITHUB_PERSONAL_ACCESS_TOKEN@github.com/abcdefghijklmnop-art/mac-brown-construction.git" "$BRANCH:main" --force
git checkout main 2>/dev/null || git checkout -
git branch -D "$BRANCH"
echo "Done — all sites pushed."
