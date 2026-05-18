# Ironman Hamburg 2026 Dashboard

Personal training-progress dashboard for the Ironman Hamburg race on June 7, 2026.

Mobile-first React + Tailwind v4 app showing 30 weeks of training volume, FTP and HR progression, milestones, and a cautious/target/stretch race-day forecast.

## Run locally

```bash
bun install
bun dev
```

Opens at `http://localhost:5173/ironman-2026/`.

## Build

```bash
bun run build   # outputs dist/
bun run preview
```

## Deploy

Push to `main`. GitHub Actions builds and publishes to `https://surdu-de.github.io/ironman-2026/`.

## Edit data

All training data lives in `src/data/*.json`. Edit JSON directly; the UI is a read-only view. See `CLAUDE.md` for the data model and workflow.
