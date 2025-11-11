# Ironman Training - Mobile Access Plan

## Goal

Transform the current markdown-based training plan repository into mobile-accessible views that provide:
- **Quick access** to current week's training schedule via iPhone
- **At-a-glance view** of daily workouts with times, duration, and status
- **Detailed workout information** with zones, intervals, and focus notes
- **Progress tracking** to visualize weekly progress and completion

## Current State

- 18 markdown files organized hierarchically (cycles → weeks → workouts)
- Rich training data: zones, metrics, schedules, constraints
- Integrated with Obsidian for planning and note-taking
- Currently Week 1 of 30-week Ironman Hamburg training plan
- Well-structured markdown with tables, links, and emoji indicators

## Implementation Strategy: Phased Approach

Rather than building a custom app immediately, validate the need with progressively more complex solutions.

---

### Phase 1: Obsidian Dataview Dashboard ⭐ **Start Here**

**Approach:** Create dynamic dashboards using Dataview plugin queries within existing Obsidian vault

**How it works:**
- Write Dataview queries in markdown to extract workout data
- View dashboard notes in Obsidian mobile app
- Add to iPhone home screen for quick access
- Zero export/sync needed - stays in markdown ecosystem

**Pros:**
- ✅ Fastest to implement (1-2 hours)
- ✅ Already have Obsidian mobile installed
- ✅ Stays in markdown workflow
- ✅ Works offline
- ✅ Free
- ✅ No context switching

**Cons:**
- ❌ Limited charting capabilities
- ❌ Not as polished as dedicated app
- ❌ Mobile UX constrained by Obsidian

**Effort:** 1-2 hours
**Cost:** $0

**Example Dashboard Query:**
```dataview
TABLE date, activity, duration, status
FROM "weeks/cycle-1"
WHERE weeknum = 1
SORT date ASC
```

**Decision Point:** Use for 1 week. If sufficient → Done! If need better charts → Phase 2.

---

## Phase 1 Implementation Details: Dataview Dashboard

### Current State Analysis

**What We Have:**
- 18 markdown files with rich training data
- Well-structured weekly schedules in markdown tables
- 1 completed workout logged (Tuesday Nov 11 run)
- Human-readable format optimized for Obsidian editing

**The Problem:**
- Markdown tables are NOT queryable by Dataview
- No structured metadata (frontmatter or inline fields)
- Workout status is visual only (emoji checkboxes)
- Metrics stored as plain text, not as data fields

**The Gap:**
All training data exists but in non-queryable format. Need to add structured metadata without destroying current markdown structure.

---

### Data Structure Requirements

#### A. Week File Frontmatter (weeks/week-XX.md)

Add YAML frontmatter to each week file:

```yaml
---
week: 1
cycle: 1
start-date: 2025-11-10
end-date: 2025-11-16
phase: build
status: in-progress
sessions-completed: 1
sessions-total: 7
swim-sessions: 2
bike-sessions: 2
run-sessions: 2
strength-sessions: 1
total-duration: 505
---
```

#### B. Workout Inline Fields

Convert completed workouts to queryable format using inline fields:

```markdown
### Tue Nov 11 - Run

- activity:: Run
- date:: 2025-11-11
- duration-planned:: 50
- duration-actual:: 51.4
- distance:: 8.15
- avg-hr:: 145
- max-hr:: 152
- avg-pace:: 6:18
- zone-target:: Z3
- zone-actual:: Z3
- status:: completed
- aerobic-te:: 3.2
- calories:: 718
```

**Note:** Keep existing markdown tables for visual reference (dual format approach).

#### C. Performance Data Frontmatter (performance-data.md)

```yaml
---
type: performance-log
last-updated: 2025-11-11
completed-sessions: 1
current-week: 1
---
```

---

### Dashboard Components

#### 1. Current Week Dashboard (dashboards/current-week.md)

Primary mobile view for quick access:

```markdown
# Current Week

## This Week's Schedule
\`\`\`dataview
TABLE
  date,
  activity,
  duration-planned AS "Duration",
  status
FROM "weeks"
WHERE week = 1
SORT date ASC
\`\`\`

## Completed Workouts
\`\`\`dataview
TABLE
  activity,
  duration-actual AS "Time",
  distance AS "Distance",
  avg-hr AS "Avg HR",
  avg-pace AS "Pace"
FROM "weeks"
WHERE week = 1 AND status = "completed"
SORT date DESC
\`\`\`

## Progress
\`\`\`dataview
TABLE sessions-completed + " / " + sessions-total AS "Sessions"
FROM "weeks"
WHERE week = 1
\`\`\`
```

#### 2. Cycle Progress Dashboard (dashboards/cycle-progress.md)

4-week cycle overview:

```markdown
# Cycle 1: Base Building

## Weekly Volume
\`\`\`dataview
TABLE
  week,
  total-duration AS "Minutes",
  sessions-completed + "/" + sessions-total AS "Progress",
  status
FROM "weeks"
WHERE cycle = 1
SORT week ASC
\`\`\`

## Completed Sessions by Type
\`\`\`dataview
TABLE
  activity,
  count(rows) AS "Count",
  sum(duration-actual) AS "Total Minutes"
FROM "weeks"
WHERE cycle = 1 AND status = "completed"
GROUP BY activity
\`\`\`
```

#### 3. Quick View Dashboard (dashboards/today.md)

Single-workout mobile view:

```markdown
# Today's Workout

\`\`\`dataview
TABLE
  activity,
  duration-planned AS "Duration",
  description
FROM "weeks"
WHERE date = date(today)
\`\`\`
```

---

### Progressive Implementation Strategy

#### Phase 1A: Proof of Concept (1-2 hours)

**Goal:** Validate Dataview works with minimal restructuring

**Tasks:**
1. Add frontmatter to `weeks/week-01.md`
2. Convert Tuesday's completed run to inline field format
3. Create `dashboards/current-week.md` with basic queries
4. Test on Obsidian mobile
5. Pin dashboard to home screen

**Output:** Working dashboard showing 1 completed workout

**Decision Point:** Does this meet needs? If yes → Done! If no → Phase 1B

---

#### Phase 1B: Full Week 1 Dashboard (2-3 hours)

**Goal:** Complete Week 1 with all 7 days queryable

**Tasks:**
1. Add inline fields for remaining 6 days (Wed-Sun)
2. Update fields as workouts complete during the week
3. Create comprehensive dashboard with:
   - Daily schedule with time slots
   - Weekly volume by discipline
   - HR zone distribution (using Charts plugin)
   - Progress visualization
4. Add `performance-data.md` frontmatter
5. Refine queries based on actual usage

**Output:** Full-featured Week 1 dashboard

**Decision Point:** Is this sufficient for 30 weeks? If yes → Phase 1C (template). If no → Consider Phase 2 (Sheets) or Phase 3 (iOS app)

---

#### Phase 1C: Template & Scale (1 hour/week)

**Goal:** Create reusable templates for future weeks

**Tasks:**
1. Create week template with:
   - Standard frontmatter structure
   - Inline field format for workouts
   - Placeholder values
2. Apply template to weeks 2-4 (rest of Cycle 1)
3. Update `dashboards/cycle-progress.md` for 4-week view
4. Document field naming conventions

**Output:** Scalable system for remaining 26 weeks

---

### Implementation Guidelines

#### Dual Format Approach

**Keep existing markdown tables** for human readability:
```markdown
| 11.11.2025 Tue | 🏃 Run | 50min easy | 50 | ✅ |
```

**Add inline fields** below for Dataview queries:
```markdown
- activity:: Run
- date:: 2025-11-11
- status:: completed
```

**Why?** Redundant but safe. Tables remain readable, inline fields enable queries.

#### Progressive Data Addition

- ✅ **Do:** Structure data as you use it (Week 1 first)
- ✅ **Do:** Apply templates to upcoming weeks as you approach them
- ❌ **Don't:** Restructure all 30 weeks upfront (premature optimization)
- ❌ **Don't:** Delete existing markdown structure

#### Mobile-First Testing

- Test every query on Obsidian mobile before building more
- Optimize for 1-2 tap access from home screen
- Ensure tables render clearly on small screens
- Use collapsible sections for long queries

#### Field Naming Conventions

**Established conventions:**
- Use kebab-case: `duration-planned`, `avg-hr`, `zone-target`
- Suffix with unit when ambiguous: `duration` (minutes), `distance` (km)
- Prefix planned vs actual: `duration-planned` vs `duration-actual`
- Use standard activity names: `Run`, `Bike`, `Swim`, `Strength`
- Status values: `pending`, `completed`, `skipped`

---

### Success Criteria

After Phase 1A (proof of concept), you should be able to:
- ✅ View current week schedule from iPhone (1-2 taps)
- ✅ See completed workout metrics in table format
- ✅ Track session completion count (1/7, 2/7, etc.)

After Phase 1B (full week), you should additionally have:
- ✅ Weekly volume broken down by discipline
- ✅ HR zone distribution charts
- ✅ Visual progress indicators
- ✅ Quick-access today's workout view

After Phase 1C (template), you should have:
- ✅ Reusable structure for remaining weeks
- ✅ Cycle-level progress tracking
- ✅ Consistent data across 4-week cycles

---

### Phase 2: Google Sheets + Python Script

**Approach:** Python script parses markdown files and updates Google Sheets via API

**How it works:**
- Edit markdown in Obsidian (source of truth)
- Run `python sync_to_sheets.py` to update spreadsheet
- View Google Sheets on iPhone (add to home screen)
- Built-in charts and formulas for progress visualization

**Pros:**
- ✅ Excellent charting capabilities
- ✅ Familiar tool (everyone knows Sheets)
- ✅ Polished mobile app
- ✅ Can share with coach/training partners
- ✅ Offline mode available
- ✅ Cross-platform

**Cons:**
- ❌ Manual sync step (run Python script)
- ❌ Not ideal for detailed workout text
- ❌ Spreadsheet paradigm limits UX
- ❌ Requires Google account

**Effort:** 4-6 hours
**Cost:** $0

**Workflow:**
1. Edit workouts in Obsidian
2. Run sync script: `python sync_to_sheets.py`
3. Changes appear in Google Sheets (5 seconds)
4. View on mobile

**Decision Point:** If Obsidian dashboard insufficient but charts needed → Use this. If need custom UX → Phase 3.

---

### Phase 3: Custom iOS App

**Approach:** Native SwiftUI app with markdown files bundled as resources (read-only)

**How it works:**
- Markdown files copied into Xcode project as bundle resources
- App parses and displays on launch
- Edit markdown in Obsidian, rebuild app to update
- Deploy via Xcode direct connection

**Pros:**
- ✅ Fully custom UX optimized for training
- ✅ Native iOS performance and polish
- ✅ Custom workout cards and detail views
- ✅ Can add widgets, notifications later
- ✅ Works offline
- ✅ Professional feel

**Cons:**
- ❌ Requires rebuild and redeploy after markdown changes
- ❌ Most development time
- ❌ Requires Xcode/iOS development knowledge
- ❌ Need iPhone connected to Mac for deployment

**Effort:** 12-15 hours (MVP with read-only views)
**Cost:** $0 (development), $99/year (App Store publishing - optional)

**MVP Scope:**
- Current week view with daily schedule
- Workout detail view
- Visual status indicators (completed vs pending)
- Zone reference information

**Deployment:** Connect iPhone via USB → Xcode → Cmd+R (10 seconds)

---

## Comparison Matrix

| Criteria | Obsidian Dataview | Google Sheets | iOS App |
|----------|-------------------|---------------|---------|
| **Setup Time** | 1-2 hours | 4-6 hours | 12-15 hours |
| **Mobile UX** | Good | Very Good | Excellent |
| **Charts** | Basic | Excellent | Customizable |
| **Offline** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Update Workflow** | None needed | Run script | Rebuild app |
| **Customization** | Limited | Medium | Full |
| **Learning Curve** | Low | Low | High |

---

## Recommended Path

1. **Week 1:** Implement Obsidian Dataview dashboard (1-2 hours)
   - Test during actual training week
   - Evaluate if sufficient for needs

2. **Week 2:** Decision point
   - ✅ If Dataview works → Done! Saved 10+ hours
   - 📊 If need better charts → Add Google Sheets (4-6 hours)
   - 📱 If need custom UX → Start iOS app (12-15 hours)

3. **Ongoing:** Iterate based on actual usage

This agile approach validates needs before heavy investment.

---

## Success Criteria

The solution will be successful when you can:
- ✅ Quickly view current week's schedule from iPhone
- ✅ See workout details including zones and intervals
- ✅ Track completion status visually
- ✅ Review weekly progress at a glance
- ✅ Access within 1-2 taps from home screen

---

**Document Created:** 2025-11-11
**Last Updated:** 2025-11-11
**Current Status:** Phase 1A implementation ready - Dataview + Charts plugins installed
**Current Training:** Week 1 in progress (1/7 sessions completed)
**Next Step:** Add frontmatter to week-01.md and create proof-of-concept dashboard
**Source Repository:** /Users/razvan.surdu/Projects/surdu/ironman-2026
**Obsidian Vault:** /Users/razvan.surdu/Brain/40 projects/ironman-2026 (symlinked)
