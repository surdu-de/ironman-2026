# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal training planning repository for completing Ironman Hamburg on June 7, 2026. The athlete is ˚based in Hamburg, Germany, providing a home advantage for course familiarization.

## Training Structure

- **Duration:** 30 weeks (Nov 10, 2025 - Jun 7, 2026)
- **Periodization:** 3 weeks build + 1 week recovery (7 cycles + 2-week taper)
- **Weekly Constraints:**
  - Monday: Rest day (easy/technique swim allowed starting Week 5 in build weeks)
  - Thursday: Fixed swim session (20:00-21:00)
  - Swim sessions should NOT be scheduled back-to-back days (need rest between swim sessions)
  - 50m pool available
  - **Weekend:** Flexible for long sessions

## Daily Schedule & Constraints

### Work Schedule
- **Work Hours:** 9:00-18:00 (flexible schedule, remote except Tue/Thu)
- **Onsite Days:** Tuesday and Thursday (gym access available)
- **Remote Days:** Monday, Wednesday, Friday (training flexibility)
- **Earliest Meeting:** 10:00 (standup)
- **Training Windows:** Morning (before 9:00), lunch break, evening (after 18:00)

### Family Commitments
- **School Drop-off:** 7:45 daily (daughter starts at 8:00)
- **School Pick-up:**
  - Monday: 18:30
  - Wednesday: 16:00
  - Thursday: 17:30
  - Other days: flexible

## Priority Focus

1. Bike performance (primary time improvement target)
2. Run & VO2 Max (secondary focus)
3. Swim technique (continuous refinement)

## Key Standards

- Use kilometers for all distances (athlete is in Germany)
- Keep project language in English
- Week numbering follows the 30-week plan (currently Week 1)
- Testing weeks: 4, 12, 20, 28 (FTP, run threshold, CSS tests)

## Location Context

Training location is Hamburg, Germany - the same city as the race. This enables:
- Training on actual race course sections
- Adaptation to local weather patterns
- Mental preparation through course visualization

## Repository Setup

- **Obsidian Integration:** This project is symlinked to `/Users/razvan.surdu/Brain/40 projects/ironman-2026` for viewing all markdown files within the Obsidian vault
- All training plans, weekly schedules, and documentation are accessible through Obsidian for easy note-taking and cross-referencing

## Workout Template System

### Structure
The project uses a reusable workout template system organized in the `workouts/` directory:

```
workouts/
├── run/          # Run workout templates
├── bike/         # Bike workout templates
├── swim/         # Swim workout templates
├── strength/     # Strength training templates
└── brick/        # Brick (multi-sport) workout templates
```

### Usage in Weekly Files

**Weekly Schedule Table:**
```markdown
| Date | Activity | Workout Template | Time Slot | Duration | Status |
|------|----------|------------------|-----------|----------|--------|
| Tue  | Run      | [[workouts/run/easy-aerobic-50min\|Easy Aerobic 50min]] | ⛅ 6:15 | 50 | ⬜ |
```

**Detailed Workouts Section:**
```markdown
### Tue Nov 11 ✅
**Workout:** [[workouts/run/easy-aerobic-50min|Easy Aerobic Run 50min]]
**Time:** 6:15-7:05

**Actual Performance:**
- activity:: Run
- date:: 2025-11-11
- duration-actual:: 51.4
- distance-actual:: 8.15
- avg-hr:: 145
- status:: completed
```

### Template Naming Conventions
- Use descriptive lowercase filenames with hyphens: `easy-aerobic-50min.md`
- Include workout type, intensity/category, and duration where applicable
- Examples: `z2-trainer-60min.md`, `vo2max-intervals-2200m.md`, `full-body-gym.md`

### Template Frontmatter
Each template includes structured YAML frontmatter with:
- **Workout metadata:** type, category, name, default duration/distance
- **Intensity zones:** primary zone, HR/power/pace ranges
- **Structure:** continuous/intervals, warmup/main/cooldown details
- **Focus areas:** training emphasis, equipment needs, scalability
- **Constraints:** suitable phases, weather dependency, scheduling restrictions

### Benefits
1. **Consistency** - Standardized workout definitions across all 30 weeks
2. **Reusability** - Define once, reference many times
3. **Robust Linking** - Obsidian-style links are not time-dependent (unlike header anchors)
4. **Maintainability** - Update workout template once, affects all week references
5. **Dataview Integration** - Rich metadata enables powerful queries and dashboards

### Guidelines for Claude
- When creating new weekly schedules, reference existing workout templates
- Time slots in weekly schedule are separate from template (kept in week file)
- Actual performance data (dataview fields) stays in weekly files, not templates
- Create new templates only when a unique workout pattern is needed
- See `workouts/README.md` for complete documentation
