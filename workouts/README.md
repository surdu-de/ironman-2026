# Workout Templates

This directory contains reusable workout templates for the Ironman Hamburg 2026 training plan. Each template defines a specific workout type that can be referenced across multiple weeks.

## Directory Structure

```
workouts/
├── run/          # Run workout templates
├── bike/         # Bike workout templates
├── swim/         # Swim workout templates
├── strength/     # Strength training templates
└── brick/        # Brick (multi-sport) workout templates
```

## How to Use Workout Templates

### In Weekly Schedule
Weekly schedule files (e.g., `weeks/week-01.md`) reference workout templates using Obsidian-style links:

```markdown
| Date | Activity | Workout Template | Time Slot | Duration | Status |
|------|----------|------------------|-----------|----------|--------|
| Tue  | Run      | [[workouts/run/easy-aerobic-50min\|Easy Aerobic 50min]] | ⛅ 6:15 | 50 | ⬜ |
```

### In Detailed Workouts Section
Each daily workout references the template and includes actual completion data:

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

## Template Categories

### Run Workouts
- **easy-aerobic-50min.md** - 50min conversational pace run (Low Z3)
- **easy-aerobic-75min.md** - 75min long run for weekend sessions
- More templates to be added: threshold intervals, tempo runs, recovery runs

### Bike Workouts
- **z2-trainer-60min.md** - 60min indoor trainer session (Z2)
- **z2-long-2h.md** - 2h long ride with nutrition practice
- More templates to be added: threshold intervals, FTP test, VO2max work

### Swim Workouts
- **technique-2000m.md** - 2000m technique-focused session
- **vo2max-intervals-2200m.md** - 2200m high-intensity intervals (FIXED Thursday session)
- More templates to be added: CSS test, endurance swims

### Strength Workouts
- **full-body-gym.md** - 60min full body session (squats, deadlifts, core)
- More templates to be added: upper body focus, mobility work

### Brick Workouts
- Templates to be added: bike-to-run transitions

## Template Frontmatter Schema

Each workout template includes structured metadata in YAML frontmatter:

```yaml
---
workout-type: run|bike|swim|strength|brick|test
workout-category: recovery|easy|aerobic|tempo|threshold|vo2max|test
workout-name: "Descriptive Name"
duration-default: 50
distance-default: 8
zone-primary: "Low Z3"
zone-range: "133-145 bpm"

sport: run|bike|swim|strength|multi
intensity: z1|z2|z3|z4|z5
structure: continuous|intervals|mixed

focus:
  - "Primary focus area"
  - "Secondary focus area"

emphasis: "endurance|speed|power|technique"
equipment: "indoor|outdoor|pool|gym"
scalable: true

suitable-for:
  - "Build weeks"
  - "Recovery weeks"

weather-dependent: true|false
---
```
