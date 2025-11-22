# Workout Templates

Reusable workout templates for the Ironman Hamburg 2026 training plan. Each template defines a specific workout type that can be referenced across multiple weeks.

## Directory Structure

```
workouts/
├── bike/         # 6 templates
├── run/          # 5 templates
├── swim/         # 5 templates
├── strength/     # 3 templates
├── test/         # 3 templates
└── README.md
```

---

## Complete Workout Catalog

### Bike Workouts (`bike/`)

| Template | Duration | Intensity | Use Case |
|----------|----------|-----------|----------|
| `z2-endurance.md` | 45-150min | Z2 (56-75% FTP) | Base building, long rides |
| `easy-recovery.md` | 30-45min | Z1 | Recovery between hard sessions |
| `tempo-intervals.md` | 60-90min | Z3 (75-85% FTP) | Aerobic capacity, sustained tempo |
| `tempo-progressive-warmup.md` | 60min | Z3 (75-90% FTP) | Garmin Gran Fondo tempo workout |
| `vo2max-intervals.md` | 50-75min | Z5 (>108% FTP) | VO2max development |
| `vo2max-progressive.md` | 60min | Z5 (>108% FTP) | Garmin Gran Fondo Z5 workout |

### Run Workouts (`run/`)

| Template | Duration | Intensity | Use Case |
|----------|----------|-----------|----------|
| `easy-aerobic.md` | 40-90min | Z2 | Base building, easy days |
| `long-run.md` | 75-120min | Z2 | Endurance development |
| `easy-strides.md` | 40-75min | Z2 + Z5 | Aerobic + neuromuscular |
| `strides.md` | 10min | Z5 | Speed maintenance |
| `threshold-intervals.md` | 50-75min | Z4 | Lactate threshold, race pace |

### Swim Workouts (`swim/`)

| Template | Distance | Intensity | Use Case |
|----------|----------|-----------|----------|
| `easy-technique.md` | 1500-2500m | Z1-Z2 | Technique refinement |
| `technique-2000m.md` | 2000m | Z2 | Form focus, skill development |
| `threshold-pace.md` | 1400-1800m | Z3-Z4 | Race pace sustainability |
| `speed-intervals.md` | 1300-1500m | Z4-Z5 | Speed development |
| `vo2max-intervals-2200m.md` | 2200m | Z5 | Maximum effort |

### Strength Workouts (`strength/`)

| Template | Duration | Focus |
|----------|----------|-------|
| `full-body-gym.md` | 65-70min | Full body strength |
| `upper-core-gym.md` | 45-60min | Upper body, core |
| `light-mobility.md` | 30-45min | Mobility, activation |

### Test Protocols (`test/`)

| Template | Purpose | Schedule |
|----------|---------|----------|
| `ftp-bike-test.md` | Bike training zones | Weeks 4, 12, 20, 28 |
| `css-swim-test.md` | Swim training zones | Weeks 4, 12, 20, 28 |
| `run-threshold-test.md` | Run training zones | Weeks 4, 12, 20, 28 |

---

## How to Use Templates

### In Weekly Schedule Tables
```markdown
| Date | Activity | Workout Template | Duration |
|------|----------|------------------|----------|
| Tue  | 🏃 Run   | [Threshold Intervals](../workouts/run/threshold-intervals.md) | 60 |
| Wed  | 🚴 Bike  | [Z2 Endurance](../workouts/bike/z2-endurance.md) | 60 |
```

### In Detailed Workouts Section
```markdown
##### Tue Nov 25
###### 🏃 Run (6:00-7:00)
**Workout:** [[workouts/run/threshold-intervals|Threshold Intervals 60min]]

**Structure:** [Brief summary or reference template for details]

**Actual Performance:** [Dataview fields in weekly file, NOT in template]
- activity:: Run
- date:: 2025-11-25
- duration-actual:: 62.3
- status:: completed
```

**Key principle:** Templates are generic and reusable. Actual performance data stays in weekly files.

---

## Template Structure

### Required Frontmatter

```yaml
---
# REQUIRED
workout-type: bike|run|swim|strength|test
workout-category: easy|aerobic|tempo|threshold|vo2max
workout-name: "Descriptive Name"
sport: bike|run|swim|strength|multi
intensity: z1|z2|z3|z4|z5|moderate
structure: continuous|intervals|progressive-intervals

# DURATION (use ranges for scalable workouts)
duration-range: "45-150min"  # OR
duration: "60min"            # for fixed workouts

# ZONES (sport-specific)
zone-primary: "Z2"
zone-range: "125-145 bpm"            # Run/general HR
power-range: "110-146W (56-75% FTP)" # Bike
pace-range: "5:30-6:00/km"           # Run

# METADATA
focus:
  - "Primary focus"
  - "Secondary focus"

emphasis: "endurance|tempo|threshold|vo2max"
equipment: "indoor|outdoor|pool|gym"
scalable: true|false

suitable-for:
  - "Build weeks"
  - "Recovery weeks"

# OPTIONAL
related-zones: "[[training-zones#Bike Zones]]"
recovery-critical: true  # For very hard workouts
---
```

### Template Body Sections

```markdown
# [Workout Name]

## Description
2-3 sentences explaining purpose and when to use.

## Execution Guidelines
- Sport-specific metrics (HR, power, pace)
- Effort level (RPE)
- Key focus points

## Common Formats (if multiple variations)
### Format 1: [Name]
- Warmup, Main Set, Cooldown breakdown

## Success Criteria
- Measurable outcomes
- What good execution looks like

## Recovery Needs
- Day before/after recommendations
- Weekly frequency

## Notes
- Context, tips, when to modify
```

---

## Guidelines for LLMs

### Critical Rules

1. **NEVER modify existing templates** unless explicitly asked
2. **ALWAYS reference existing templates** when creating weekly schedules
3. **CREATE new templates ONLY when structure is genuinely unique**
4. **USE Obsidian links:** `[[workouts/category/file|Display Text]]`
5. **KEEP performance data in weekly files,** NOT in templates
6. **FOLLOW naming:** lowercase, hyphens (e.g., `vo2max-progressive.md`)

### When Creating Weekly Schedules

✅ **CORRECT:**
```markdown
| Tue | Run | [Threshold Intervals](../workouts/run/threshold-intervals.md) | 60 |
```

❌ **INCORRECT:**
```markdown
| Tue | Run | 60min threshold run with 5x4min @ Z4 | 60 |
```

### Decision Tree: New Template vs Reuse

1. **Check existing templates first** - Can you use an existing one?
2. **Check format variations** - Is this documented as a format in existing template?
3. **Assess uniqueness** - Is the structure truly different?

**Examples:**
- Need 45min Z2 bike → **USE** `z2-endurance.md` (supports 45-150min)
- Need 3x10min tempo → **USE** `tempo-intervals.md` (has this format)
- Need progressive warmup with Z5 openers → **CREATE** `vo2max-progressive.md` (unique)

### Naming Conventions

**Good:**
- `z2-endurance.md` - zone + type
- `vo2max-progressive.md` - intensity + structure
- `threshold-intervals.md` - zone + structure

**Bad:**
- `workout-1.md` - not descriptive
- `tuesday-bike.md` - day-specific
- `60min-bike.md` - duration-specific

---

## Converting Garmin Workouts

### Process

1. **Analyze Garmin workout:**
   - Extract all phases (warmup, intervals, cooldown)
   - Note power/HR zones for each phase
   - Identify special structures (progressive builds, openers)

2. **Name descriptively:**
   - Based on intensity + structure, NOT Garmin's name
   - Example: "Zone 5 Intervals (3 Times)" → `vo2max-progressive.md`

3. **Check for existing templates:**
   - Can existing template be used?
   - Is this just a duration variation?

4. **Create with attribution:**
   ```markdown
   ## Description
   [Purpose description]

   **Source:** Garmin Gran Fondo Training Plan - "[Garmin Workout Name]"

   ## Workout Structure
   [Detailed phase breakdown matching Garmin]

   ## Key Differences from [Similar Template]
   - Progressive warmup through multiple zones
   - [Other unique characteristics]
   ```

### Power Zone Translations

| Garmin Zone | Power Range | FTP % | Our Zones |
|-------------|-------------|-------|-----------|
| Z1 | 0-107W | <56% | Z1 Active Recovery |
| Z2 | 107-144W | 56-75% | Z2 Endurance |
| Z3 | 144-175W | 75-90% | Z3 Tempo |
| Z4 | 175-204W | 90-105% | Z4 Threshold |
| Z5 | 204-234W | 105-120% | Z5 VO2max |

**Always document both absolute power and FTP percentages.**

### Real Examples

**Example 1:** Garmin "Zone 2 Aerobic - 2 Hours"
- **Action:** Use `z2-endurance.md` (supports 45-150min)
- **Reasoning:** Standard Z2, no unique structure

**Example 2:** Garmin "Aerobic with Tempo Intervals" (Z2→Z3→Z4 progressive warmup)
- **Action:** Create `tempo-progressive-warmup.md`
- **Reasoning:** Progressive multi-zone warmup is unique

**Example 3:** Garmin "Zone 5 Intervals (3 Times)" (includes Z5 openers in warmup)
- **Action:** Create `vo2max-progressive.md`
- **Reasoning:** Z5 openers + complex warmup structure unique

---

## Quick Reference

**Before creating new template, ask:**
1. Does existing template support this duration/format?
2. Is this structure documented as variation in existing template?
3. Is the structure genuinely unique enough to warrant new template?
4. Will this be reused across multiple weeks?

**When in doubt:** Use existing template. Can always refactor later if needed.

---

**Last Updated:** November 22, 2025
