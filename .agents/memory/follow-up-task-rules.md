---
name: Follow-up task rules
description: Rules for what NOT to propose as follow-up tasks on this project.
---

Never propose follow-up tasks with action verbs in the title like "Start", "Build", "Push", "Deploy", "Add", "Run", etc. — the user has explicitly called this out as a rule.

Also never propose a deployment/push step as a follow-up task. The user runs `bash push.sh` themselves when ready.

**Why:** User flagged this as a repeated pattern they don't want to see.

**How to apply:** Before calling `proposeFollowUpTasks`, check every proposed title. If it starts with a verb describing what the agent will do (build, start, push, deploy, add, create, run), rewrite it to describe the user outcome or skip it entirely. Deployment steps are never worth proposing.
