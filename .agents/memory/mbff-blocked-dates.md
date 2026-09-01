---
name: MBFF blocked dates calendar system
description: How Mac blocks out unavailable dates on the booking form calendar
---

## How it works
- Google Sheet tab named exactly `BlockedDates` (no space) in the School Dates spreadsheet
- Tab was already built; the API just wasn't reading it until Jul 28 2026
- Schedule API (`/api/schedule/route.ts`) now reads `BlockedDates!A2:C50`
- Returns `blockedDates` array which `use-schedule.ts` passes to the calendar component
- Calendar already grays out blocked dates and shows the note on hover

## Sheet format
| Col A (Start) | Col B (End) | Col C (Note - optional) |
|---------------|-------------|------------------------|
| 2026-08-10 | 2026-08-14 | Out of town |

- Dates must be YYYY-MM-DD format
- Delete row to unblock
- Blocking is manual — Mac adds rows when he knows a date is full

## soldOut flag (separate system)
- Fixed-schedule programs (guide school, masterclass, etc.) use `soldOut: true` in the schedule data
- Not yet wired up to display "FULL" badges on events calendar or reserve form dropdown
- That is a future task
