# Dashboard CLAUDE.md

App-specific guidance for the Ironman 2026 training dashboard. The parent project's `../CLAUDE.md` still applies (English, kilometers, no em-dashes, bun not npm).

## Purpose

Read-only mobile-first web view over the training data in `src/data/*.json`. Shows progress through the 7 cycles + taper, weekly volume by discipline, FTP and HR trends, milestones, and a race-day forecast.

## Stack

- Vite 8 + React 19 + TypeScript
- Tailwind CSS v4 via `@tailwindcss/vite` plugin (no `tailwind.config.js`, no PostCSS config)
- Recharts 3.8 for all charts (`ResponsiveContainer` for mobile/TV)
- date-free helpers in `src/lib/format.ts`; no `date-fns` import in code (kept as dep for later)

## Commands

```bash
bun install
bun dev         # http://localhost:5173/ironman-2026/
bun run build   # writes dist/
bun run preview # serve the built dist
bun run typecheck # tsc -b, the SAME check CI runs in `bun run build`
```

Use `bun run typecheck` (not `bun tsc --noEmit`) to verify types locally. The
root `tsconfig.json` is a solution file with only references, so `tsc --noEmit`
against it checks nothing real and silently passes. CI runs `tsc -b` via
`bun run build`, which builds the app project and catches errors the looser
check misses. Keep local and CI on `tsc -b` so they can't drift.

## Data workflow

`src/data/` is the source of truth for the dashboard. **Edit JSON first**, then optionally reflect changes in the parent markdown files. Never let the UI diverge from JSON.

- `weeks.json` — 30 weeks: planned/actual hours, swim/bike/run distance + estimated hours, FTP, CSS, key sessions, flags, notes
- `cycles.json` — 8 cycles (7 build cycles + taper): phase, dates, goals, results, achievements, challenges, learnings, status
- `milestones.json` — discrete events (FTP/CSS tests, peak rides/runs, wrist fracture May 2, taper start, race day)
- `race.json` — race date, revised targets, FTP/weight/W·kg, race-day notes
- `schema.ts` — TypeScript types for the above

Estimated discipline hours use: swim 100m = 2:30 (CSS), bike 25 km/h average (mixed indoor/outdoor), run 11 km/h (~5:30/km). When updating, recompute these from km if you change a discipline's km.

## Forecast logic

`src/lib/forecast.ts` produces cautious / target / stretch splits per discipline, anchored on `race.json` targets (1:55 swim / 6:30 bike / 4:30 run / 13:00-13:30 total). Current heuristic offsets:

- Swim: ±3 min (stretch) / +4 min (cautious)
- Bike: ±10 min / +15 min
- Run: ±10 min / +20 min
- T1+T2 buffer: 12 min added to total

Update offsets here when new long-session or CSS test data lands.

## Discipline filter

`useState<'all'|'swim'|'bike'|'run'>` in `App.tsx`, passed down. Affects:
- VolumeChart: hides non-selected stacks
- FtpChart: rendered only when filter ∈ {all, bike}
- MilestoneTimeline: filters by discipline (keeps "all" items)
- CycleList: filters key-session strings by sport keyword
- ForecastCard: not filtered (race-day view)

## Verification (mandatory before commit)

Every meaningful change goes through Playwright before commit. See `../`memory/feedback_test_loop_playwright.md`. Typical loop:

```bash
playwright-cli open --headed http://localhost:5173/ironman-2026/
playwright-cli snapshot              # confirm content
playwright-cli resize 375 800
playwright-cli screenshot            # mobile
playwright-cli resize 1440 900
playwright-cli screenshot            # desktop
playwright-cli close
```

## Deploy

Push to `main` triggers `.github/workflows/deploy-dashboard.yml`. Site goes live at `https://surdu-de.github.io/ironman-2026/`.

GitHub Pages base path is set in `vite.config.ts` (`base: '/ironman-2026/'`).

## Race context

- Race day: **Sunday June 7, 2026** in **Hamburg**
- Revised targets after May 2 wrist fracture: Swim 1:55 / Bike 6:30 / Run 4:30 / Total 13:00-13:30
- FTP 255W @ 87kg (2.93 W/kg)
- Gut tolerance watchpoint at 4-5h with 80g/h carbs
- Cast May 5-19, no outdoor bike or swim Wk26-27
