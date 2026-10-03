---
name: Schedule year sources
description: Fly Fishing Show dates are static while Bryson City program dates can come from the schedule sheet.
---

The Fly Fishing Show heading must match the year of its statically maintained show dates, not the current calendar year or a stale schedule-sheet year. Bryson City programs have a separate year.

**Why:** New show dates were for 2027, but the dates page displayed 2026 because the heading used the current year and could be overwritten by schedule API data.

**How to apply:** When rolling show dates forward, update their year together in the shared schedule and keep the client/API show heading aligned. Do not roll the Bryson City program year forward as part of a show-only change.

Bryson City classes should display separate columns for the present year's *upcoming* dates and the following year's dates when each has sessions. This is a rolling rule, not a one-time relabeling of the current schedule.

**Why:** Visitors should be able to plan for next year's classes without losing visibility into classes offered this year.

**How to apply:** Keep each year's dates distinct by program; advance labels as the calendar year changes and omit empty years. Do not infer or fabricate next-year class dates before they are provided.

Hide a school session from public date listings after its final calendar day in Bryson City's timezone. Keep future sold-out sessions visible but clearly closed, and retain past rows in the School Dates sheet rather than purging history.

**Why:** The user finds expired dates clutter the program pages, but deleting sheet history risks disrupting records and future reference.

**How to apply:** Use the same end-date rule on new program listings and calendars; never treat a closed future session as an expired one. Booking choices should show future, bookable sessions only.

The Replit preview can rely on the static Bryson City calendar because its development-only export configuration does not serve the dynamic schedule API. Keep the static calendar complete when changing school sessions.

**Why:** October and November guide schools existed in the session data but were omitted from the static calendar, so they disappeared from the Replit dates page when the API could not load.

**How to apply:** On schedule edits, compare all intended sessions against both the static calendar and the live-sheet path; verify the dates page in the Replit preview.

When confirmed dates for closed sessions differ from month-only entries in the schedule sheet, both site schedule responses should keep the confirmed year-specific dates and closed status consistent with the preview. Do not apply 2026 corrections to future-year sessions.

**Why:** The Replit fallback and live sheet responses are separate paths; updating only one can make the dates page change after loading or differ between the two sites.

**How to apply:** Check the dates, closed status, and row order in both paths whenever correcting a school session. The underlying Google Sheet may still need a separate update if it is used outside these site routes.

Use the existing School Dates spreadsheet for new program years rather than introducing a separate annual template or workbook. Each session row should carry its own year; the Config program year remains a fallback for rows without one.

**Why:** The user already maintains all program tabs in one spreadsheet and specifically wants new years entered there, without an extra data-entry step.

**How to apply:** Read new rows from the existing tabs, keep static preview data aligned, and do not change the Config default merely because next year's rows were added.

Confirmed one-spot labels are year-specific availability announcements, not live inventory counts. A sold-out status from the sheet takes precedence over a one-spot label.

**Why:** The schedule sheet supplies sold-out status but not a seat count; a manually confirmed spot count must not advertise availability once the sheet marks enrollment closed.

**How to apply:** Keep such labels aligned between the static preview and live schedule response, and do not carry a 2026 count onto future-year sessions.

For national-show FAQs, keep the crawlable annual schedule answer date-stable and calculate any "next joint class" label at viewing time from the dated show entries.

**Why:** Build-time HTML and schema can persist after the first class; a hardcoded "next" answer would then be false.

**How to apply:** Derive joint instructor answers from the same show records used by the event schema, and never claim a past class is still next.