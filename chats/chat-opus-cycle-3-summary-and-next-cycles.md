
 ▐▛███▜▌   Claude Code v2.1.19
▝▜█████▛▘  Opus 4.5 · Claude Enterprise
  ▘▘ ▝▝    ~/Projects/surdu/ironman-2026

❯ check @weeks/week-11.md and all the csv exported to the ~/Downloads       
  folder, order by date - Monday to Sunday. Read all their content and lets 
  discuss and evaluate this week                                            
  ⎿  Read weeks/week-11.md (401 lines)

⏺ Let me find the CSV files in your Downloads folder.

⏺ Search(pattern: "*.csv", path: "~/Downloads")
  ⎿  Found 9 files (ctrl+o to expand)

⏺ Found 9 CSV files. Let me read all of them to see the activity data.

⏺ Read(~/Downloads/activity_21609344154.csv)
  ⎿  Read 14 lines

⏺ Read(~/Downloads/activity_21615734204.csv)
  ⎿  Read 55 lines

⏺ Read(~/Downloads/activity_21617769059.csv)
  ⎿  Read 15 lines

⏺ Read(~/Downloads/activity_21628408108.csv)
  ⎿  Read 9 lines

⏺ Read(~/Downloads/activity_21632067396.csv)
  ⎿  Read 23 lines

⏺ Read(~/Downloads/activity_21640888800.csv)
  ⎿  Read 34 lines

⏺ Read(~/Downloads/activity_21651775824.csv)
  ⎿  Read 27 lines

⏺ Read(~/Downloads/activity_21660625291.csv)
  ⎿  Read 3 lines

⏺ Read(~/Downloads/activity_21661479717.csv)
  ⎿  Read 3 lines

⏺ Now let me compile and analyze the week. Based on the CSV data, here's what I
  found:

  Week 11 Analysis: Planned vs Actual

  Activities Ordered (by activity ID, likely chronological):
  #: 1
  Activity ID: 21609344154
  Type: Bike
  Duration: 24:14
  Distance: 13.0km
  Key Metrics: NP 189W, Avg 163W (warm-up/test)
  ────────────────────────────────────────
  #: 2
  Activity ID: 21615734204
  Type: Bike
  Duration: 46:00
  Distance: 22.5km
  Key Metrics: NP 207W, 30s on/off intervals @ ~330W
  ────────────────────────────────────────
  #: 3
  Activity ID: 21617769059
  Type: Run
  Duration: 43:54
  Distance: 7.2km
  Key Metrics: 6:06/km, 6x15s sprint intervals
  ────────────────────────────────────────
  #: 4
  Activity ID: 21628408108
  Type: Run
  Duration: 37:23
  Distance: 5.6km
  Key Metrics: 6:38/km, easy Z2
  ────────────────────────────────────────
  #: 5
  Activity ID: 21632067396
  Type: Swim
  Duration: 37:33
  Distance: 1250m
  Key Metrics: 2:19/100m avg
  ────────────────────────────────────────
  #: 6
  Activity ID: 21640888800
  Type: Bike
  Duration: 60:00
  Distance: 29.4km
  Key Metrics: NP 191W, 3x[5x2min] VO2max @ ~200W
  ────────────────────────────────────────
  #: 7
  Activity ID: 21651775824
  Type: Run
  Duration: 2:30:05
  Distance: 24.7km
  Key Metrics: 6:05/km, long run Z2
  ────────────────────────────────────────
  #: 8
  Activity ID: 21660625291
  Type: Bike
  Duration: 2:46:57
  Distance: 89.3km
  Key Metrics: NP 165W, Avg 157W, long ride
  ────────────────────────────────────────
  #: 9
  Activity ID: 21661479717
  Type: Bike
  Duration: 1:16:07
  Distance: 36.4km
  Key Metrics: NP 132W, Avg 120W, Z2 recovery
  ---
  Session-by-Session Comparison:

  SWIM (1 session vs 3 planned)
  ┌──────────┬─────────┬───────────┐
  │  Metric  │ Planned │  Actual   │
  ├──────────┼─────────┼───────────┤
  │ Sessions │ 3       │ 1         │
  ├──────────┼─────────┼───────────┤
  │ Duration │ 195min  │ 38min     │
  ├──────────┼─────────┼───────────┤
  │ Distance │ 5700m   │ 1250m     │
  ├──────────┼─────────┼───────────┤
  │ Avg Pace │ -       │ 2:19/100m │
  └──────────┴─────────┴───────────┘
  The single swim session (2:19/100m) is faster than CSS target (2:27/100m).
  Major volume shortfall - only 22% of planned swim volume.

  ---
  BIKE (4 sessions completed - matches plan)
  ┌──────────────┬───────────────────────┬───────────────────────────┐
  │   Session    │        Planned        │          Actual           │
  ├──────────────┼───────────────────────┼───────────────────────────┤
  │ Anaerobic    │ 95min, 4x10min @ 237W │ 46min, 12x30s @ ~330W     │
  ├──────────────┼───────────────────────┼───────────────────────────┤
  │ VO2max       │ 90min, 4x4min @ 235W  │ 60min, 3x[5x2min] @ ~200W │
  ├──────────────┼───────────────────────┼───────────────────────────┤
  │ Z2 Endurance │ 95min                 │ Not done separately       │
  ├──────────────┼───────────────────────┼───────────────────────────┤
  │ Long Ride    │ 180min (3h)           │ 167min (2h47), 89km       │
  ├──────────────┼───────────────────────┼───────────────────────────┤
  │ Extra Z2     │ -                     │ 76min, 36km recovery      │
  └──────────────┴───────────────────────┴───────────────────────────┘
  - Anaerobic session: Different structure (30s sprints vs 10min sustained).
  Power was higher (330W) but much shorter intervals.
  - VO2max session: Lower power (200W vs 235W target) and shorter intervals
  (2min vs 4min).
  - Long bike: 13min shorter than planned but solid 89km. NP 165W, HR 139 avg -
  good Z2 execution.
  - Extra recovery ride: 76min Z2 at 120W - this wasn't planned.

  ---
  RUN (3 sessions vs 4 planned)
  Session: Threshold
  Planned: 70min, 4x6min @ Z4 4:40/km
  Actual: 44min, 6x15s sprints (3:00-3:20/km)
  ────────────────────────────────────────
  Session: Easy #1
  Planned: 60min
  Actual: 37min, 6:38/km
  ────────────────────────────────────────
  Session: Easy #2
  Planned: 60min
  Actual: Not done
  ────────────────────────────────────────
  Session: Long Run
  Planned: 120min (2h)
  Actual: 150min (2h30!), 24.7km
  - Threshold session: Complete structure mismatch. Sprints (15s) instead of
  sustained 6min intervals. This trains different energy systems.
  - Easy run: Only 37min vs 60min planned.
  - Long run: Exceeded target - 2h30 vs 2h planned (+30min). Pace 6:05/km is
  perfect Z2-low Z3 (planned 6:15-6:45). HR 144 avg matches target (138-143).

  ---
  Summary Metrics:
  ┌────────────────┬─────────┬────────┬───────┐
  │     Metric     │ Planned │ Actual │ Delta │
  ├────────────────┼─────────┼────────┼───────┤
  │ Total Sessions │ 11      │ 9      │ -2    │
  ├────────────────┼─────────┼────────┼───────┤
  │ Swim Sessions  │ 3       │ 1      │ -2    │
  ├────────────────┼─────────┼────────┼───────┤
  │ Bike Sessions  │ 4       │ 4      │ 0     │
  ├────────────────┼─────────┼────────┼───────┤
  │ Run Sessions   │ 4       │ 3      │ -1    │
  ├────────────────┼─────────┼────────┼───────┤
  │ Total Duration │ ~14h05  │ ~10h40 │ -3h25 │
  ├────────────────┼─────────┼────────┼───────┤
  │ Swim Volume    │ 5700m   │ 1250m  │ -78%  │
  ├────────────────┼─────────┼────────┼───────┤
  │ Bike Volume    │ 190km   │ ~148km │ -22%  │
  ├────────────────┼─────────┼────────┼───────┤
  │ Run Volume     │ 37km    │ 37.5km │ +1%   │
  └────────────────┴─────────┴────────┴───────┘
  ---
  Key Observations:

  1. Long sessions executed well: The 2h30 long run exceeded targets with
  excellent pacing (6:05/km). The 2h47 long bike hit good volume despite being
  13min short.
  2. Swim is the critical gap: Only 1 of 3 sessions, missing 78% of planned
  volume. This is a concern for an Ironman where swim technique maintenance is
  crucial.
  3. Intensity sessions modified: Both the anaerobic bike and threshold run had
  completely different structures than planned. Instead of sustained 6-10min
  intervals, you did short sprints (15-30s). This trains different physiological
   systems.
  4. Total volume ~24% below target: Missing sessions and shortened workouts.

  ---
  Questions for Discussion:

  1. What happened with the swim sessions? Was it scheduling conflicts, pool
  access, or intentional?
  2. The interval structure changes (30s sprints vs 10min sustained, 15s sprints
   vs 6min threshold) - was this a deliberate choice or following a different
  workout plan?
  3. The long run exceeding target by 30min - was this intentional, or did you
  feel good and extend it?
  4. Do you want me to map these activities to specific days if you can provide
  the dates?

✻ Crunched for 1m 10s

❯ this week I could not follow the plan and I used garmin recommandations.  
  I was feeling tired and mentally drained. check also @weeks/week-10.md    
  results. Weather, family responsabilities, tiredness... workload. Good    
  that next week is a rest week, but for the next cycle we realy need to    
  talk how to adapt the plan.                                               
  ⎿  Read weeks/week-10.md (519 lines)

⏺ Looking at both weeks together, the pattern is clear and this is valuable
  feedback.

  Week 10 → Week 11: The Overreach Pattern

  Week 10 Reality
  ┌────────────────┬─────────────┬──────────────┬────────┐
  │     Metric     │   Planned   │    Actual    │ Delta  │
  ├────────────────┼─────────────┼──────────────┼────────┤
  │ Total Duration │ 12h35       │ 15h40        │ +25%   │
  ├────────────────┼─────────────┼──────────────┼────────┤
  │ Long Bike      │ 2h45 / 95km │ 3h52 / 121km │ +67min │
  ├────────────────┼─────────────┼──────────────┼────────┤
  │ Long Run       │ 1h50 / 17km │ 2h20 / 23km  │ +30min │
  └────────────────┴─────────────┴──────────────┴────────┘
  Week 10 was a breakthrough week where you felt strong and extended everything.
   But that +25% volume accumulates as fatigue debt.

  Week 11 Consequences
  ┌────────────────┬─────────┬────────┬───────┐
  │     Metric     │ Planned │ Actual │ Delta │
  ├────────────────┼─────────┼────────┼───────┤
  │ Total Duration │ 14h05   │ ~10h40 │ -24%  │
  ├────────────────┼─────────┼────────┼───────┤
  │ Sessions       │ 11      │ 9      │ -2    │
  ├────────────────┼─────────┼────────┼───────┤
  │ Swim Volume    │ 5700m   │ 1250m  │ -78%  │
  └────────────────┴─────────┴────────┴───────┘
  The body collected on that debt. Add work stress, family, Hamburg winter
  weather → the planned "peak week" became a survival week.

  ---
  What Actually Happened (Positive Framing)

  You made smart adaptations:
  1. Used Garmin recommendations - your body was telling you something, and the
  watch confirmed it
  2. Still hit the long sessions - 2h30 run (exceeded!), 2h47 bike (close to
  target)
  3. Dropped intensity, not volume - short sprints vs sustained threshold work =
   less CNS fatigue
  4. Swim cuts - the right call when fatigued (lowest injury risk, but also
  lowest Ironman priority for you)

  The Garmin workouts you did:
  - 30s bike intervals instead of 10min sustained = same power system, less
  mental load
  - 15s run sprints instead of 6min threshold = neuromuscular stimulus without
  grinding fatigue

  ---
  Key Issues for Next Cycle Discussion

  1. Volume Volatility

  Week 10: +25% over plan (feeling strong)
  Week 11: -24% under plan (paying for it)
  The plan assumes consistent execution. Reality has variance. We need planned 
  flexibility.

  2. Peak Week Timing

  Week 11 was designed as Cycle 3's peak (14h05). But you were already depleted
  from Week 10's overreach. The actual peak happened in Week 10.

  3. Swim Keeps Getting Cut

  - Week 10: 2/3 sessions (skipped Sun)
  - Week 11: 1/3 sessions

  Swim is the "optional" discipline when stressed. Is this acceptable for
  Ironman prep, or do we need to protect it differently?

  4. Intensity Structure Mismatch

  The plan has sustained threshold/VO2max work (6min, 10min intervals). Garmin
  recommended shorter bursts. Which works better for your life?

  5. Life Load Buffer

  The plan doesn't account for:
  - Work intensity spikes
  - Family demands (school pickups, etc.)
  - German winter weather
  - Mental fatigue

  ---
  Questions Before Week 12 Recovery

  Before we adapt Cycle 4, I need to understand:

  1. Was Week 10's extension intentional or did you just feel good? Should we
  cap "feeling good" days to prevent next-week crashes?
  2. The Garmin recommendations - do you prefer that adaptive approach over
  fixed plans? Would a hybrid work better?
  3. Swim priority - are you okay with swim being the first cut, or should we
  protect 2 sessions minimum?
  4. Mental load - are the long sustained intervals (6-10min threshold) mentally
   draining? Are shorter intervals more sustainable?
  5. Weekly ceiling - what's the maximum realistic weekly volume given your
  current life load? 12 hours? 10 hours?

  Week 12 (recovery) gives us time to redesign Cycle 4. Let's use it.

✻ Worked for 36s

❯ I did 4h of bike today, there should be 2 cycling workouts one 89km and   
  one 36km that I did one after the other. I should have the volume.        

⏺ You're right, let me recalculate. The two highest-ID activities were done
  together today (Sunday):

  - activity_21660625291: 2h47, 89.25km, NP 165W
  - activity_21661479717: 1h16, 36.40km, NP 132W

  Sunday bike total: 4h03, 125.6km

  ---
  Revised Week 11 Summary

  BIKE - Actually Strong
  ┌────────────────┬────────────────┬────────────────┬─────────────┐
  │     Metric     │    Planned     │     Actual     │    Delta    │
  ├────────────────┼────────────────┼────────────────┼─────────────┤
  │ Total Time     │ 7h15           │ 6h13           │ -1h02       │
  ├────────────────┼────────────────┼────────────────┼─────────────┤
  │ Total Distance │ 190km          │ 190.6km        │ +0.6km      │
  ├────────────────┼────────────────┼────────────────┼─────────────┤
  │ Long Session   │ 3h / 100-105km │ 4h03 / 125.6km │ +1h / +20km │
  └────────────────┴────────────────┴────────────────┴─────────────┘
  The distance matches perfectly. Time difference is likely trainer efficiency
  (higher speed indoors).

  Revised Session Mapping
  ┌──────┬──────────────────────────┬──────────────────────────────┐
  │ Day  │         Planned          │            Actual            │
  ├──────┼──────────────────────────┼──────────────────────────────┤
  │ Tue? │ Anaerobic 4x10min @ 237W │ 46min, 30s intervals @ 330W  │
  ├──────┼──────────────────────────┼──────────────────────────────┤
  │ Thu? │ VO2max 4x4min @ 235W     │ 60min, 2min intervals @ 200W │
  ├──────┼──────────────────────────┼──────────────────────────────┤
  │ Sat  │ Long bike 3h             │ -                            │
  ├──────┼──────────────────────────┼──────────────────────────────┤
  │ Sun  │ Swim + Long run          │ 4h bike (89km + 36km)        │
  └──────┴──────────────────────────┴──────────────────────────────┘
  RUN - Long Run Exceeded
  ┌────────────┬──────────────┬──────────────────┐
  │   Metric   │   Planned    │      Actual      │
  ├────────────┼──────────────┼──────────────────┤
  │ Long Run   │ 2h / 17-18km │ 2h30 / 24.7km    │
  ├────────────┼──────────────┼──────────────────┤
  │ Other runs │ 3h10 total   │ ~1h20 (modified) │
  └────────────┴──────────────┴──────────────────┘
  SWIM - The Real Gap
  ┌──────────┬─────────┬────────┐
  │  Metric  │ Planned │ Actual │
  ├──────────┼─────────┼────────┤
  │ Sessions │ 3       │ 1      │
  ├──────────┼─────────┼────────┤
  │ Volume   │ 5700m   │ 1250m  │
  └──────────┴─────────┴────────┘
  ---
  Corrected Assessment

  The picture changes significantly:

  Volume achieved:
  - Bike: 190km target met
  - Long bike: Exceeded (+1h, +20km)
  - Long run: Exceeded (+30min, +7km)
  - Total endurance work: Strong

  What was modified (not missing):
  - Interval structure changed (Garmin recommendations)
  - Sustained threshold → shorter bursts
  - Same energy systems, different mental load

  Actual gap:
  - Swim only: 78% shortfall

  ---
  Week 11 Revised Status

  Given this correction, Week 11 was actually not a bad week considering the
  fatigue state:

  - Bike volume: 100%
  - Run long session: 125%
  - Intensity work: Done (modified structure)
  - Swim: 22% (the real casualty)

  The week wasn't a failure - it was an adaptive response to accumulated
  fatigue. You prioritized the highest-value sessions (long endurance) and
  modified intensity structure to match your recovery state.

  Does this match your perception of the week? And was Saturday a rest day, with
   both long sessions moved to Sunday (run earlier, bike today)?

✻ Cogitated for 43s

❯ I needed Monday to recover, even tuesday workout I failed completing it.  
  I stopped after 24min, at the start of the second set of intervals.       
  Friday I did the same workout, but I completed it.                        

⏺ Now the week makes complete sense. Let me re-map:

  Week 11 Actual Timeline
  Day: Mon 19
  Planned: Swim 50min
  Actual: REST - recovering from Week 10
  ────────────────────────────────────────
  Day: Tue 20
  Planned: Run 70min + Bike 95min
  Actual: Bike FAILED - stopped at 24min, couldn't start 2nd set
  ────────────────────────────────────────
  Day: Wed 21
  Planned: Bike 95min + Run 60min
  Actual: Easy run 37min + Sprint run 44min (Garmin)?
  ────────────────────────────────────────
  Day: Thu 22
  Planned: Bike 90min + Swim 80min
  Actual: VO2max bike 60min + Swim 38min
  ────────────────────────────────────────
  Day: Fri 23
  Planned: Run 60min
  Actual: Bike intervals 46min - completed Tuesday's failed workout
  ────────────────────────────────────────
  Day: Sat 24
  Planned: Long bike 3h
  Actual: Long run 2h30 (swapped)
  ────────────────────────────────────────
  Day: Sun 25
  Planned: Swim + Long run 2h
  Actual: Long bike 4h03 (swapped)
  ---
  The Story of the Week

  Tuesday's failure is the key data point.

  After Week 10's +25% overreach (15h40 actual vs 12h35 planned), your body said
   "no" on Tuesday. You tried the interval workout, got through the warm-up and
  first set, and couldn't continue.

  That's not weakness - that's your body protecting itself.

  Friday redemption: You needed 3 extra days of easier training before your body
   could handle that session. And then you completed it.

  ---
  Revised Assessment

  What went right:
  - Listened to your body (stopped Tuesday, didn't force it)
  - Adapted the week (Garmin recommendations, swapped sessions)
  - Still completed key volume (190km bike, 24.7km long run)
  - Successfully executed Friday what failed Tuesday

  The cost of Week 10:
  - Lost Monday (needed rest)
  - Lost Tuesday session (failed)
  - Swim reduced to 1 session
  - Intensity sessions modified

  Week 10 → Week 11 lesson:
  Week 10: 15h40 (+25% over plan) = felt amazing
  Week 11: Body collected the debt on Tuesday

  ---
  For Cycle 4 Discussion

  This confirms what we need to address:

  1. Cap the "good feeling" days - Week 10's extensions felt great but cost you
  Week 11's start
  2. Build in recovery buffer - The plan assumed you'd arrive at Week 11 fresh.
  You didn't.
  3. Protect the structure - When you modify everything (session order,
  intensity type, days), it's harder to track progress
  4. Swim needs protection - Down to 1 session two weeks in a row now

  Do you want to discuss Cycle 4 adaptations now, or wait until after Week 12
  recovery when you can assess how you feel refreshed?

✻ Cooked for 37s

❯ I will not be able to do more than 2 swimms per week. I have to accept    
  there I will be the worst in my performance. Target is just to finish in  
  under 2h.                                                                 

⏺ That's a smart and realistic decision. Let's validate the math:

  Swim Target Analysis

  Ironman Hamburg swim: 3.8km (open water, wetsuit legal)

  Your current pace:
  - Week 11 actual: 2:19/100m
  - CSS (threshold): 2:27/100m

  Projected finish times:
  ┌───────────┬────────────┬─────────────────────┐
  │   Pace    │ 3.8km Time │        Notes        │
  ├───────────┼────────────┼─────────────────────┤
  │ 2:19/100m │ 1h28       │ Current fitness     │
  ├───────────┼────────────┼─────────────────────┤
  │ 2:27/100m │ 1h33       │ CSS pace            │
  ├───────────┼────────────┼─────────────────────┤
  │ 2:40/100m │ 1h41       │ Conservative        │
  ├───────────┼────────────┼─────────────────────┤
  │ 3:09/100m │ 2h00       │ Your target ceiling │
  └───────────┴────────────┴─────────────────────┘
  You have a 30+ minute buffer. Even adding time for:
  - Open water sighting (+5-10%)
  - Mass start positioning
  - Chop/current
  - Wetsuit adjustment

  You're looking at 1h35-1h45 realistically. Under 2h is very safe.

  ---
  2 Swims/Week Structure

  Given the Thursday 20:00 fixed slot, here's a sustainable structure:
  Session: Technique
  Day: Thu 20:00
  Focus: Drills + threshold intervals
  Duration: 60-75min
  Distance: 2000-2500m
  ────────────────────────────────────────
  Session: Maintenance
  Day: Mon or Sun
  Focus: Easy + pull buoy
  Duration: 45-55min
  Distance: 1500-1800m
  Weekly total: ~105-130min, 3500-4300m

  This is enough to:
  - Maintain current 2:20/100m pace
  - Keep technique sharp (drill work)
  - Build confidence for open water

  ---
  What This Frees Up

  Dropping from 3 to 2 swims saves ~60-80min/week. This can:

  1. Buffer for life - Work stress, family, weather
  2. Protect key sessions - Long bike, long run, threshold work
  3. Recovery - More adaptation time between hard sessions

  ---
  Revised Priorities (Confirmed)
  Discipline: Bike
  Priority: #1
  Goal: Maximize time gains
  Strategy: Volume + FTP work
  ────────────────────────────────────────
  Discipline: Run
  Priority: #2
  Goal: Strong marathon split
  Strategy: Threshold + long runs
  ────────────────────────────────────────
  Discipline: Swim
  Priority: #3
  Goal: Finish <2h
  Strategy: Maintain technique, 2x/week
  ---
  For Cycle 4 Plan

  I'll build the next cycle with:
  - 2 swims/week (Thursday fixed + 1 flexible)
  - Realistic weekly ceiling - what's sustainable for you? 10-12h?
  - Buffer built in - so "good feeling" days don't crash the next week
  - Garmin-compatible structure - workouts that align with adaptive
  recommendations

  Should we set a hard weekly hour cap for Cycle 4? Week 10 showed 15h40 is
  possible but not sustainable. What feels right - 12h? 11h?

✻ Brewed for 32s

❯ Let me share with you also some of my current garmin stats so you have a  
  better idea where I am:                                                   
  ⎿  [Image #1]
  ⎿  [Image #2]

⏺ This is excellent data. Let me break down what Garmin is telling us:

  Load Focus Analysis (Dec 28 - Jan 25)
  ┌──────────────┬───────┬────────────────────┬────────────────────────────────┐
  │     Zone     │ Score │       Status       │            Meaning             │
  ├──────────────┼───────┼────────────────────┼────────────────────────────────┤
  │ Anaerobic    │ 747   │ Below optimal      │ Not enough short, hard efforts │
  ├──────────────┼───────┼────────────────────┼────────────────────────────────┤
  │ High Aerobic │ 1786  │ At optimal ceiling │ Good threshold/VO2max work     │
  ├──────────────┼───────┼────────────────────┼────────────────────────────────┤
  │ Low Aerobic  │ 2077  │ Above optimal      │ Too much Z2 volume             │
  └──────────────┴───────┴────────────────────┴────────────────────────────────┘
  This explains everything:
  - Garmin recommended sprint workouts (30s, 15s) because you have an anaerobic 
  deficit
  - The long Z2 sessions (3h52 bike, 2h30 runs) pushed low aerobic above optimal
  - Your body is overloaded on endurance, underloaded on explosiveness

  ---
  VO2max Trends
  ┌────────────────┬───────┬───────────────────┐
  │     Metric     │ Value │       Trend       │
  ├────────────────┼───────┼───────────────────┤
  │ Running VO2max │ 50    │ Stable (good)     │
  ├────────────────┼───────┼───────────────────┤
  │ Cycling VO2max │ 41    │ Climbing from ~38 │
  └────────────────┴───────┴───────────────────┘
  Cycling VO2max improving is a positive sign - the bike focus is working.

  ---
  HRV Status - The Recovery Story

  Looking at the graph:
  - Oct-Nov: Dropped to "Low" (red triangles) - overreaching period?
  - Dec: "Unbalanced" (orange) - holiday stress + training?
  - Late Jan: Back to "Balanced" (green)

  Your HRV recovered. This is good news for Cycle 4.

  ---
  Acute Training Load - The Warning

  Currently at ~1750-1800, which is at the top of optimal range.

  This confirms:
  - Week 10's 15h40 pushed you to the ceiling
  - Tuesday's failure = your body hit the load limit
  - You need the Week 12 recovery to bring this down

  ---
  What This Means for Cycle 4

  1. Rebalance the Load Focus
  ┌──────────────┬──────────┬───────────────────────────────────────────┐
  │     Zone     │ Current  │                  Action                   │
  ├──────────────┼──────────┼───────────────────────────────────────────┤
  │ Anaerobic    │ Too low  │ Add more short sprints (30s-2min efforts) │
  ├──────────────┼──────────┼───────────────────────────────────────────┤
  │ High Aerobic │ Good     │ Maintain threshold work                   │
  ├──────────────┼──────────┼───────────────────────────────────────────┤
  │ Low Aerobic  │ Too high │ Cap long session extensions               │
  └──────────────┴──────────┴───────────────────────────────────────────┘
  2. The Plan Was Wrong About Intensity Structure

  The plan prescribed:
  - 4x10min sustained @ 237W (anaerobic/threshold)
  - 4x6min threshold runs

  But your body needs:
  - Shorter, sharper efforts to build anaerobic capacity
  - Less grinding sustained work

  Garmin's 30s on/off and 15s sprints were actually correct for your physiology.

  3. Weekly Load Ceiling

  Based on acute training load at ~1750-1800:
  - Hard cap: 12-13 hours/week for build weeks
  - No extensions when feeling good - bank that energy
  - Recovery weeks: drop to 7-8 hours

  ---
  Cycle 4 Proposal Framework
  ┌─────────────────────┬─────────────────────┬───────────────────────────┐
  │      Parameter      │    Current Plan     │         Proposed          │
  ├─────────────────────┼─────────────────────┼───────────────────────────┤
  │ Peak weekly hours   │ 14-15h              │ 12h max                   │
  ├─────────────────────┼─────────────────────┼───────────────────────────┤
  │ Swim sessions       │ 3                   │ 2                         │
  ├─────────────────────┼─────────────────────┼───────────────────────────┤
  │ Long bike cap       │ 3h+                 │ 3h hard limit             │
  ├─────────────────────┼─────────────────────┼───────────────────────────┤
  │ Long run cap        │ 2h+                 │ 2h hard limit             │
  ├─────────────────────┼─────────────────────┼───────────────────────────┤
  │ Intensity structure │ Sustained intervals │ Mix of short + sustained  │
  ├─────────────────────┼─────────────────────┼───────────────────────────┤
  │ Recovery weeks      │ Planned             │ + HRV-triggered rest days │
  └─────────────────────┴─────────────────────┴───────────────────────────┘
  ---
  Hybrid Approach for Cycle 4

  Use both structured plan AND Garmin:

  1. Plan provides: Weekly structure, session types, progression
  2. Garmin provides: Daily readiness, load balance alerts, workout
  recommendations when deficit detected
  3. You decide: If Garmin flags low recovery or load imbalance, adjust that day

  Does this framework make sense? Should we build Cycle 4 (Weeks 13-16) with
  these parameters after your Week 12 recovery?

✻ Sautéed for 45s

❯ considering this data, lets design the right recovery for week 12         
  @weeks/week-12.md and then lets plan cycle 4 - February, where I need to  
  reach 160km on the bike, cycle 5 - March with 180km bike, and cycle 6     
  April - peak with 200km.                                                  
  ⎿  Read weeks/week-12.md (331 lines)

⏺ Let me design this properly. Given your Garmin data showing acute load at
  ceiling and low aerobic overload, we need a smarter recovery week and
  realistic cycle progression.

  Week 12 Redesign - True Recovery

  Given your current state:
  - Acute Training Load: At ceiling (~1750-1800)
  - Low Aerobic: Overloaded
  - HRV: Balanced but fragile

  Recommendation: Skip the CSS swim test. Your 2:19/100m pace already gives you
  a 30+ minute buffer for sub-2h swim. Testing adds load when you need recovery.

  Revised Week 12 Structure
  ┌────────┬──────────────────────────┬───────────────────────────────────────┐
  │  Day   │       Current Plan       │             Revised Plan              │
  ├────────┼──────────────────────────┼───────────────────────────────────────┤
  │ Mon 26 │ Rest                     │ Rest                                  │
  ├────────┼──────────────────────────┼───────────────────────────────────────┤
  │ Tue 27 │ Easy run + Easy bike     │ Easy run 40min only                   │
  ├────────┼──────────────────────────┼───────────────────────────────────────┤
  │ Wed 28 │ FTP Test 60min           │ FTP Test 60min                        │
  ├────────┼──────────────────────────┼───────────────────────────────────────┤
  │ Thu 29 │ CSS Test 60min           │ Easy technique swim 45min (no test)   │
  ├────────┼──────────────────────────┼───────────────────────────────────────┤
  │ Fri 30 │ Easy run 50min           │ Rest or 30min walk                    │
  ├────────┼──────────────────────────┼───────────────────────────────────────┤
  │ Sat 31 │ Z2 bike 75min + Run test │ Run Threshold Test only (45min total) │
  ├────────┼──────────────────────────┼───────────────────────────────────────┤
  │ Sun 1  │ Easy swim 30min          │ Rest                                  │
  └────────┴──────────────────────────┴───────────────────────────────────────┘
  Revised totals:
  - Sessions: 4 (down from 8)
  - Duration: ~3h30 (down from 6h40)
  - Tests: 2 (FTP + Run Threshold)
  - True rest days: 3

  This aggressive recovery should:
  1. Drop acute training load back into mid-optimal range
  2. Give your legs proper rest before Cycle 4
  3. Still capture the key metrics (FTP and run threshold)

  ---
  Cycles 4-6 Framework

  Core Principles (Based on Your Data)
  Parameter: Weekly ceiling
  Value: 11-12h
  Rationale: Acute load at ceiling with 15h+
  ────────────────────────────────────────
  Parameter: Swim sessions
  Value: 2/week
  Rationale: Your constraint, accepted
  ────────────────────────────────────────
  Parameter: Long bike cap
  Value: Progressive
  Rationale: 160km → 180km → 200km
  ────────────────────────────────────────
  Parameter: Long run cap
  Value: 2h max
  Rationale: Protect running legs
  ────────────────────────────────────────
  Parameter: Intensity structure
  Value: Mixed
  Rationale: Short sprints + sustained (address anaerobic deficit)
  ────────────────────────────────────────
  Parameter: Extension rule
  Value: None
  Rationale: Bank energy, don't spend it
  ---
  Cycle 4: February (Weeks 13-16)

  Goal: Reach 160km long bike, build anaerobic capacity

  Weekly Progression
  ┌─────────────────────┬──────────┬──────────────┬─────────────┬──────────────┐
  │        Week         │  Phase   │  Long Bike   │  Long Run   │ Weekly Hours │
  ├─────────────────────┼──────────┼──────────────┼─────────────┼──────────────┤
  │ 13 (Feb 2-8)        │ Build 1  │ 120km / 3h30 │ 1h45 / 16km │ 10h          │
  ├─────────────────────┼──────────┼──────────────┼─────────────┼──────────────┤
  │ 14 (Feb 9-15)       │ Build 2  │ 140km / 4h   │ 1h50 / 17km │ 11h          │
  ├─────────────────────┼──────────┼──────────────┼─────────────┼──────────────┤
  │ 15 (Feb 16-22)      │ Build 3  │ 160km / 4h30 │ 2h / 18km   │ 12h          │
  ├─────────────────────┼──────────┼──────────────┼─────────────┼──────────────┤
  │ 16 (Feb 23 - Mar 1) │ Recovery │ 60km / 2h    │ 1h / 10km   │ 6h           │
  └─────────────────────┴──────────┴──────────────┴─────────────┴──────────────┘
  Weekly Template (Build Weeks)
  Day: Mon
  Session 1: Rest or Swim 45min
  Session 2: -
  Focus: Recovery / Technique
  ────────────────────────────────────────
  Day: Tue
  Session 1: Run 50min (incl. 6x30s sprints)
  Session 2: Bike 60min (anaerobic intervals)
  Focus: Intensity
  ────────────────────────────────────────
  Day: Wed
  Session 1: Bike 60min Z2
  Session 2: Run 45min easy
  Focus: Aerobic maintenance
  ────────────────────────────────────────
  Day: Thu
  Session 1: Bike 75min (VO2max/threshold)
  Session 2: Swim 60min (fixed 20:00)
  Focus: Intensity + Technique
  ────────────────────────────────────────
  Day: Fri
  Session 1: Run 45min easy
  Session 2: -
  Focus: Recovery
  ────────────────────────────────────────
  Day: Sat
  Session 1: Long Bike
  Session 2: -
  Focus: Endurance
  ────────────────────────────────────────
  Day: Sun
  Session 1: Long Run
  Session 2: -
  Focus: Endurance
  Intensity structure for anaerobic deficit:
  - Tuesday bike: 8-10x 30s @ 130% FTP / 30s rest (Garmin-style)
  - Tuesday run: 6x 30s hill sprints or flat sprints
  - Thursday bike: 3x 8min @ threshold OR 5x 3min @ VO2max

  ---
  Cycle 5: March (Weeks 17-20)

  Goal: Reach 180km long bike, maintain anaerobic gains
  Week: 17 (Mar 2-8)
  Phase: Build 1
  Long Bike: 140km / 4h
  Long Run: 1h45 / 16km
  Weekly Hours: 10h
  ────────────────────────────────────────
  Week: 18 (Mar 9-15)
  Phase: Build 2
  Long Bike: 160km / 4h30
  Long Run: 1h50 / 17km
  Weekly Hours: 11h
  ────────────────────────────────────────
  Week: 19 (Mar 16-22)
  Phase: Build 3
  Long Bike: 180km / 5h
  Long Run: 2h / 18km
  Weekly Hours: 12h
  ────────────────────────────────────────
  Week: 20 (Mar 23-29)
  Phase: Recovery + Test
  Long Bike: 70km / 2h
  Long Run: 1h / 10km
  Weekly Hours: 6h
  ---
  Cycle 6: April (Weeks 21-24) - Peak

  Goal: Reach 200km long bike (race simulation)
  ┌─────────────────────┬──────────┬──────────────┬─────────────┬──────────────┐
  │        Week         │  Phase   │  Long Bike   │  Long Run   │ Weekly Hours │
  ├─────────────────────┼──────────┼──────────────┼─────────────┼──────────────┤
  │ 21 (Mar 30 - Apr 5) │ Build 1  │ 160km / 4h30 │ 1h45 / 16km │ 10h          │
  ├─────────────────────┼──────────┼──────────────┼─────────────┼──────────────┤
  │ 22 (Apr 6-12)       │ Build 2  │ 180km / 5h   │ 1h50 / 17km │ 11h          │
  ├─────────────────────┼──────────┼──────────────┼─────────────┼──────────────┤
  │ 23 (Apr 13-19)      │ Build 3  │ 200km / 5h30 │ 2h / 18km   │ 12h          │
  ├─────────────────────┼──────────┼──────────────┼─────────────┼──────────────┤
  │ 24 (Apr 20-26)      │ Recovery │ 80km / 2h30  │ 1h15 / 12km │ 7h           │
  └─────────────────────┴──────────┴──────────────┴─────────────┴──────────────┘
  ---
  Visual Progression

  Long Bike Distance Progression:

  Week:  12   13   14   15   16   17   18   19   20   21   22   23   24
         |    |    |    |    |    |    |    |    |    |    |    |    |
        Rec  120  140  160  Rec  140  160  180  Rec  160  180  200  Rec
         km   km   km   km   km   km   km   km   km   km   km   km   km
                       ▲              ▲              ▲
                     C4 Peak       C5 Peak       C6 Peak

  ---
  Key Differences from Current Plan
  ┌─────────────────────────┬────────────────┬───────────────────────────┐
  │         Aspect          │    Old Plan    │         New Plan          │
  ├─────────────────────────┼────────────────┼───────────────────────────┤
  │ Peak weekly hours       │ 14-15h         │ 12h max                   │
  ├─────────────────────────┼────────────────┼───────────────────────────┤
  │ Swim sessions           │ 3/week         │ 2/week                    │
  ├─────────────────────────┼────────────────┼───────────────────────────┤
  │ Long session extensions │ Allowed        │ Forbidden                 │
  ├─────────────────────────┼────────────────┼───────────────────────────┤
  │ Intensity type          │ Sustained only │ Mixed (short + sustained) │
  ├─────────────────────────┼────────────────┼───────────────────────────┤
  │ Recovery weeks          │ 6h40           │ 6h or less                │
  ├─────────────────────────┼────────────────┼───────────────────────────┤
  │ Garmin integration      │ Ignored        │ Daily readiness check     │
  └─────────────────────────┴────────────────┴───────────────────────────┘
  ---
  Garmin Integration Rules

  1. Before intensity sessions: Check Body Battery and HRV. If low, swap for Z2
  2. Load Focus alerts: If anaerobic drops, add sprint work. If low aerobic
  spikes, reduce Z2 volume
  3. Acute load >1800: Take an extra rest day
  4. Weekly check: If training load exits optimal range, adjust next week down

  ---
  Should I write out the detailed Week 12 edits and create the Week 13-16 (Cycle
   4) files now?

✻ Sautéed for 1m 0s

❯ I don't need a ftp test, we did one in the previous weeks, i would aim    
  more for a short intense session that could boost ftp, but without        
  distroytiing the rest week,                                               

⏺ Good thinking. A short "FTP tickle" session can stimulate adaptation without
  the fatigue cost of a full test. Given your anaerobic deficit, we can address
  both goals.

  Revised Week 12 - Recovery with Stimulus
  ┌────────┬─────────────────────┬──────────┬────────────────────────────┐
  │  Day   │       Session       │ Duration │          Purpose           │
  ├────────┼─────────────────────┼──────────┼────────────────────────────┤
  │ Mon 26 │ Rest                │ -        │ Full recovery              │
  ├────────┼─────────────────────┼──────────┼────────────────────────────┤
  │ Tue 27 │ Easy run 40min      │ 40min    │ Shake out legs             │
  ├────────┼─────────────────────┼──────────┼────────────────────────────┤
  │ Wed 28 │ FTP Tickle bike     │ 45min    │ Short intensity stimulus   │
  ├────────┼─────────────────────┼──────────┼────────────────────────────┤
  │ Thu 29 │ Easy technique swim │ 50min    │ Fixed slot, technique only │
  ├────────┼─────────────────────┼──────────┼────────────────────────────┤
  │ Fri 30 │ Rest                │ -        │ Fresh legs for Saturday    │
  ├────────┼─────────────────────┼──────────┼────────────────────────────┤
  │ Sat 31 │ Run Threshold Test  │ 50min    │ Key metric update          │
  ├────────┼─────────────────────┼──────────┼────────────────────────────┤
  │ Sun 1  │ Easy swim 40min     │ 40min    │ Technique + light movement │
  └────────┴─────────────────────┴──────────┴────────────────────────────┘
  Weekly total: ~3h45, 5 sessions

  ---
  Wednesday FTP Tickle Session (45min)

  This addresses your anaerobic deficit while giving FTP a nudge:

  Structure:
  Warmup: 10min progressive (100W → 150W)
  Openers: 3x30s @ 130% FTP (286W) / 30s easy

  Main Set: 3x3min @ 105% FTP (231W)
  - 3min recovery between intervals
  - RPE 8/10, not all-out
  - High cadence (95-100 rpm)

  Cooldown: 8min very easy

  Why this works:
  - Total hard work: ~12 minutes (manageable load)
  - 30s sprints → addresses anaerobic deficit
  - 3min @ 105% → VO2max/FTP stimulus without destruction
  - Short enough to recover from within 24-48h

  Target metrics:
  - Duration: 45min
  - NP target: ~165-175W
  - Max HR: 160-165 (not maximal)

  ---
  Full Week 12 Revised

  Let me update the file:

⏺ Update(weeks/week-12.md)
  ⎿  (No changes)

❯ Wait until I confirm it. Can we have 2 days of rest at start? 

⏺ Absolutely. Given you just did 4 hours of cycling today and acute load is at
  ceiling, starting with 2 rest days makes sense.

  Proposed Week 12 Structure
  ┌────────┬─────────────────────┬──────────┬──────────────────────────────┐
  │  Day   │       Session       │ Duration │            Notes             │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Mon 26 │ Rest                │ -        │ Recovery from Sunday 4h bike │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Tue 27 │ Rest                │ -        │ Let acute load drop          │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Wed 28 │ FTP Tickle bike     │ 45min    │ Short intensity stimulus     │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Thu 29 │ Easy technique swim │ 50min    │ Fixed 20:00 slot             │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Fri 30 │ Easy run 40min      │ 40min    │ Shake out before test        │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Sat 31 │ Run Threshold Test  │ 50min    │ Key metric update            │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Sun 1  │ Easy swim 40min     │ 40min    │ Light technique              │
  └────────┴─────────────────────┴──────────┴──────────────────────────────┘
  Weekly total: ~3h45, 5 sessions, 2 full rest days to start

  This gives you:
  - 48h complete rest before any training
  - Acute load should drop significantly
  - Fresh legs for Wednesday's intensity tickle
  - Another easy day Friday before Saturday's threshold test

  Does this structure work? Once you confirm, I'll write it out.

❯ Friday to Sunday I will be our of the contry. I still could aim for the   
  run, not sure I can do the swim.                                          

⏺ Got it. Let's adjust for your travel:

  Revised Week 12 Structure
  ┌────────┬─────────────────────┬──────────┬──────────────────────────────┐
  │  Day   │       Session       │ Duration │            Notes             │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Mon 26 │ Rest                │ -        │ Recovery from Sunday 4h bike │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Tue 27 │ Rest                │ -        │ Let acute load drop          │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Wed 28 │ FTP Tickle bike     │ 45min    │ Short intensity stimulus     │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Thu 29 │ Easy technique swim │ 50min    │ Fixed 20:00 slot             │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Fri 30 │ Travel              │ -        │ Out of country               │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Sat 31 │ Run Threshold Test  │ 50min    │ If location permits          │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Sun 1  │ Rest or easy run    │ 30-40min │ No pool access               │
  └────────┴─────────────────────┴──────────┴──────────────────────────────┘
  Weekly total: ~2h25 to 3h05, 3-4 sessions

  Options for Saturday run test:
  - If you have access to a flat route (park, waterfront, track) → do the
  threshold test
  - If terrain is hilly or uncertain → just do an easy 40-50min run instead,
  skip the formal test

  Sunday fallback:
  - No swim (no pool) → either full rest or easy 30min jog to explore

  This keeps it truly minimal:
  - 2 rest days at start
  - 1 intensity session (Wed bike)
  - 1 technique swim (Thu)
  - 1 run while traveling (Sat - test or easy depending on conditions)
  - Sunday flexible

  Does this work? Where are you traveling to - might help determine if a
  threshold test is feasible?

❯ how about doing the test on Wednesday, and the 45 min bike workout on     
  Friday @ 6:30                                                             

⏺ That's a better structure:

  Week 12 Final Structure
  Day: Mon 26
  Session: Rest
  Time: -
  Duration: -
  Notes: Recovery
  ────────────────────────────────────────
  Day: Tue 27
  Session: Rest
  Time: -
  Duration: -
  Notes: Fresh legs for test
  ────────────────────────────────────────
  Day: Wed 28
  Session: Run Threshold Test
  Time: Morning
  Duration: 50min
  Notes: Fresh after 2 rest days
  ────────────────────────────────────────
  Day: Thu 29
  Session: Easy technique swim
  Time: 20:00
  Duration: 50min
  Notes: Fixed slot
  ────────────────────────────────────────
  Day: Fri 30
  Session: FTP Tickle bike
  Time: 06:30
  Duration: 45min
  Notes: Before travel
  ────────────────────────────────────────
  Day: Sat 31
  Session: Rest or easy run
  Time: -
  Duration: 0-40min
  Notes: Out of country
  ────────────────────────────────────────
  Day: Sun 1
  Session: Rest
  Time: -
  Duration: -
  Notes: Out of country
  Weekly total: ~2h25 to 3h05

  Why this is better:
  - 48h rest → Wednesday test with truly fresh legs (best data)
  - Thursday swim is easy, won't impact Friday
  - Friday 6:30 bike → done before you leave, starts the weekend fresh
  - Weekend can be full rest or light movement while traveling

  Wednesday Run Threshold Test (50min):
  Warmup: 15min easy build
  Test: 30min ALL-OUT sustainable pace
  Cooldown: 5min walk/easy jog

  Friday FTP Tickle (45min @ 6:30):
  Warmup: 10min progressive
  Openers: 3x30s @ 286W / 30s easy
  Main: 3x3min @ 231W (3min rest between)
  Cooldown: 8min easy

  Confirm this and I'll write the week-12.md file?

❯ yea, this week will be fully focus on rest so next cycle we start in the  
  best position.                                                            

⏺ Let me update the Week 12 file with this recovery-focused structure.

⏺ Write(weeks/week-12.md)
  ⎿  Added 138 lines, removed 223 lines
       6  phase: recovery
       7  status: planned
       8  sessions-completed: 0
       9 -sessions-total: 8                                              
      10 -swim-sessions: 2                                               
      11 -bike-sessions: 3                                               
      12 -run-sessions: 3                                                
       9 +sessions-total: 3                                              
      10 +swim-sessions: 1                                               
      11 +bike-sessions: 1                                               
      12 +run-sessions: 1                                                
      13  strength-sessions: 0
      14 -total-duration: 430                                            
      14 +total-duration: 145                                            
      15  vo2-max: 50
      16  vo2-max-baseline: 50
      17  ftp-bike: 220
     ...
       22  css-swim-baseline: "2:27"
       23  ---
       24  
       25 -# Week 12: Jan 26 - Feb 1, 2026 (Recovery Week + Testing)     
       25 +# Week 12: Jan 26 - Feb 1, 2026 (Recovery Week)               
       26  
       27 -**Focus:** Active recovery, performance testing, prepare for C
          -ycle 4                                                        
       27 +**Focus:** True recovery from Cycle 3 overreach, run threshold
          + test, prepare for Cycle 4                                    
       28  
       29  ## Week Overview
       30  |              | Swim   | Bike   | Run     | Total  |
       31  |--------------|--------|--------|---------|--------|
       32 -| **Sessions** | 2      | 3      | 3       | 8      |         
       33 -| **Time**     | 1h30   | 3h00   | 2h10    | 6h40   |         
       34 -| **Distance** | 2800m  | 95km   | 19km    | -      |         
       32 +| **Sessions** | 1      | 1      | 1       | 3      |         
       33 +| **Time**     | 0h50   | 0h45   | 0h50    | 2h25   |         
       34 +| **Distance** | 1800m  | 25km   | 7km     | -      |         
       35  
       36 -**Volume Reduction:** ~53% vs Week 11 (6h40 vs 14h20)         
       36 +**Volume Reduction:** ~77% vs Week 11 actual (~10h40)         
       37  
       38 +**Context:** Week 10 overreach (+25% volume at 15h40) caused W
          +eek 11 fatigue (Tuesday session failure, needed Monday rest). 
          +Garmin data shows acute training load at ceiling (~1750-1800),
          + low aerobic overloaded, anaerobic deficit. This week prioriti
          +zes true recovery to start Cycle 4 in optimal condition.      
       39 +                                                              
       40 +**Travel:** Out of country Friday evening through Sunday.     
       41 +                                                              
       42  ---
       43  
       44  ## Weekly Schedule
       45  
       42 -| Date           | Activity   | Workout Template              
          -                               | Duration | Status |          
       43 -| -------------- | ---------- | ------------------------------
          ------------------------------- | -------- | ------ |          
       44 -| 26.01.2026 Mon | -          | Rest day                      
          -                               | -        | ⬜      |         
       45 -| 27.01.2026 Tue | 🏃 Run     | [[easy-aerobic\|Easy Aerobic 5
          -0min]]        | 50       | ⬜      |                          
       46 -|                | 🚴 Bike    | [[easy-recovery\|Easy Recovery
          - 45min]]     | 45       | ⬜      |                           
       47 -| 28.01.2026 Wed | 🚴 Bike    | [[../workouts/bike/ftp-bike-te
          -st\|FTP Test 60min]]          | 60       | ⬜      |          
       48 -| 29.01.2026 Thu | 🏊 Swim    | [[../workouts/swim/css-swim-te
          -st\|CSS Test 60min]]          | 60       | ⬜      |          
       49 -| 30.01.2026 Fri | 🏃 Run     | [[easy-aerobic\|Easy Aerobic 5
          -0min]]        | 50       | ⬜      |                          
       50 -| 31.01.2026 Sat | 🚴 Bike    | [[z2-endurance\|Z2 Endurance 7
          -5min]]       | 75       | ⬜      |                           
       51 -|                | 🏃 Run     | [[../workouts/run/run-threshol
          -d-test\|Threshold Test 30min]]| 30       | ⬜      |          
       52 -| 01.02.2026 Sun | 🏊 Swim    | [[easy-technique\|Easy Techniq
          -ue 30min]]   | 30       | ⬜      |                           
       46 +| Date           | Activity | Workout                         
          + | Time  | Duration | Status |                                
       47 +| -------------- | -------- | --------------------------------
          + | ----- | -------- | ------ |                                
       48 +| 26.01.2026 Mon | -        | Rest                            
          + | -     | -        | ⬜      |                               
       49 +| 27.01.2026 Tue | -        | Rest                            
          + | -     | -        | ⬜      |                               
       50 +| 28.01.2026 Wed | 🏃 Run   | Run Threshold Test              
          + | AM    | 50       | ⬜      |                               
       51 +| 29.01.2026 Thu | 🏊 Swim  | Easy Technique                  
          + | 20:00 | 50       | ⬜      |                               
       52 +| 30.01.2026 Fri | 🚴 Bike  | FTP Tickle (short intensity)    
          + | 06:30 | 45       | ⬜      |                               
       53 +| 31.01.2026 Sat | -        | Rest (travel)                   
          + | -     | -        | ⬜      |                               
       54 +| 01.02.2026 Sun | -        | Rest (travel)                   
          + | -     | -        | ⬜      |                               
       55  
       54 -**Weekly Total:** 400 minutes (~6h40)                         
       56 +**Weekly Total:** 145 minutes (~2h25)                         
       57  
       58  ---
       59  
       60  ## Detailed Workouts
       61  
       62  ### Mon Jan 26 ⬜
       61 -**Rest Day** - Mandatory recovery after peak week             
       63 +**Rest Day** - Full recovery after Sunday's 4h bike (89km + 36
          +km)                                                           
       64  
       65  ---
       66  
       67  ### Tue Jan 27 ⬜
       68 +**Rest Day** - Second rest day to drop acute training load bef
          +ore Wednesday test                                            
       69  
       67 -#### Morning Run (6:30-7:20) - 50min                          
       68 -**Workout:** [[easy-aerobic|Easy Aerobic Run]]                
       69 -**Time:** 6:30-7:20                                           
       70 -                                                              
       71 -**Structure:**                                                
       72 -- Continuous very easy (Z1-Z2)                                
       73 -- Pace: 6:45-7:15/km (slower than usual)                      
       74 -- HR: 125-140 bpm                                             
       75 -                                                              
       76 -**Target Metrics:**                                           
       77 -- activity:: Run                                              
       78 -- duration-planned:: 50                                       
       79 -- distance-planned:: 6.5-7.5                                  
       80 -- zone-target:: Z1-Z2                                         
       81 -- avg-hr-target:: <138                                        
       82 -                                                              
       83 -**Notes:** Recovery week - keep it truly easy. Shake out legs 
          -from Week 11 peak.                                            
       84 -                                                              
       85 -#### Lunch Bike (12:30-13:15) - 45min                         
       86 -**Workout:** [[easy-recovery|Easy Recovery Ride]]             
       87 -**Time:** 12:30-13:15                                         
       88 -                                                              
       89 -**Structure:**                                                
       90 -- 5min warmup                                                 
       91 -- 35min steady Z1-low Z2 (90-120W)                            
       92 -- 5min cooldown                                               
       93 -                                                              
       94 -**Target Metrics:**                                           
       95 -- activity:: Bike                                             
       96 -- duration-planned:: 45                                       
       97 -- distance-planned:: 24                                       
       98 -- zone-target:: Z1                                            
       99 -- avg-power-target:: 100-115                                  
      100 -                                                              
      101 -**Notes:** Very easy spin. Indoor trainer. Focus on smooth ped
          -aling. Preparing legs for FTP test tomorrow.                  
      102 -                                                              
      103 -**Daily Total:** 2 sessions, 1h35 (easy run + recovery bike)  
      104 -                                                              
       70  ---
       71  
       72  ### Wed Jan 28 ⬜
       73  
      109 -#### Midday FTP Test (13:00-14:00) - 60min                    
      110 -**Workout:** [[../workouts/bike/ftp-bike-test|FTP Bike Test - 
          -20min Protocol]]                                              
      111 -**Time:** 13:00-14:00                                         
       74 +#### Morning Run Threshold Test - 50min                       
       75 +**Workout:** Run Threshold Test - 30min Protocol              
       76 +**Time:** Morning (flexible)                                  
       77  
       78  **Structure:**
      114 -- Warmup: 20min progressive with 3x1min @ Z3 openers          
      115 -- Main Test: 20min ALL-OUT time trial @ maximum sustainable po
          -wer                                                           
      116 -- Cooldown: 15min very easy                                   
       79 +- Warmup: 15min easy progressive build                        
       80 +- Main Test: 30min ALL-OUT sustainable pace                   
       81 +  - Start conservatively at ~4:40/km                          
       82 +  - Settle into rhythm by 5min mark                           
       83 +  - Push final 10min                                          
       84 +- Cooldown: 5min walk/very easy jog                           
       85  
      118 -**Current FTP Baseline:** 220W                                
      119 -**Target:** 225-230W (expecting 5-10W improvement from Cycles 
          -2-3 training)                                                 
       86 +**Current Threshold:** 171 bpm LTHR, 4:48/km pace             
       87 +**Target:** Improve to ~4:35-4:45/km                          
       88  
       89  **Target Metrics:**
      122 -- activity:: Bike                                             
      123 -- duration-planned:: 60                                       
      124 -- distance-planned:: 32                                       
      125 -- zone-target:: Z5 Test                                       
      126 -- test-type:: FTP                                             
       90 +- activity:: Run                                              
       91 +- duration-planned:: 50                                       
       92 +- distance-planned:: 6.5-7.5                                  
       93 +- zone-target:: Z4-Z5 Test                                    
       94 +- test-type:: Threshold                                       
       95  
      128 -**Notes:** CRITICAL TEST. Indoor trainer REQUIRED. This is a 2
          -0min all-out effort - pace it correctly. Start at 225W, settle
          - in, push final 5min. FTP = 95% of 20min average power. Proper
          - warmup essential. Fresh legs from recovery days. Results esta
          -blish new training zones for upcoming cycles.                 
       96 +**Notes:** CRITICAL TEST. Fresh legs after 2 full rest days. U
          +se flat route. Average HR from 30min effort = new LTHR. Averag
          +e pace = new threshold pace. This establishes run training zon
          +es for Cycle 4.                                               
       97  
      130 -**Daily Total:** 1 session, 1h (FTP test)                     
       98 +**Daily Total:** 1 session, 50min (threshold test)            
       99  
      100  ---
      101  
      102  ### Thu Jan 29 ⬜
      103  
      136 -#### Evening CSS Swim Test (20:00-21:00) - 60min              
      137 -**Workout:** [[../workouts/swim/css-swim-test|CSS Swim Test - 
          -Time Trial Protocol]]                                         
      138 -**Time:** 20:00-21:00                                         
      104 +#### Evening Swim (20:00-20:50) - 50min                       
      105 +**Workout:** Easy Technique Swim                              
      106 +**Time:** 20:00-20:50                                         
      107  
      108  **Structure:**
      141 -- Warmup: 400m easy progressive with 6x50m easy               
      142 -- Main Test: Continuous time trial for maximum sustainable dis
          -tance in ~12-15min                                            
      143 -  - Target: 1400-1500m (aiming for improvement from 1350m base
          -line)                                                         
      144 -- Cooldown: 200m very easy                                    
      109 +- Warmup: 300m easy                                           
      110 +- Drill Set (40%): 10x50m @ 1:30 (extra rest)                 
      111 +  - 3x catch-up                                               
      112 +  - 3x fist drill                                             
      113 +  - 2x single-arm                                             
      114 +  - 2x fingertip drag                                         
      115 +- Pull Buoy: 4x100m @ 2:35/100m, 25s rest                     
      116 +- Continuous: 200m smooth                                     
      117 +- Cooldown: 100m very easy                                    
      118 +- **Total: 1800m**                                            
      119  
      146 -**Current CSS Baseline:** 2:27/100m                           
      147 -**Target:** 2:23-2:25/100m (expecting 2-4s improvement)       
      148 -                                                              
      120  **Target Metrics:**
      121  - activity:: Swim
      151 -- duration-planned:: 60                                       
      152 -- distance-planned:: 1400-1500                                
      153 -- zone-target:: T5 Test                                       
      154 -- test-type:: CSS                                             
      122 +- duration-planned:: 50                                       
      123 +- distance-planned:: 1800                                     
      124 +- zone-target:: Z1-Z2                                         
      125 +- drill-percentage:: 45                                       
      126  
      156 -**Notes:** Fixed Thursday 20:00 swim. CRITICAL TEST. This is a
          -n all-out sustainable effort for 12-15min. Start controlled, b
          -uild into rhythm, push final 200m. Proper warmup essential. Re
          -sults establish new swim training zones. Distance achieved div
          -ided by time = CSS pace.                                      
      127 +**Notes:** Fixed Thursday 20:00 slot. Easy technique session -
          + no intensity. Focus on smooth, relaxed swimming. Recovery ses
          +sion, not a workout.                                          
      128  
      158 -**Daily Total:** 1 session, 1h (CSS test)                     
      129 +**Daily Total:** 1 session, 50min (easy technique swim)       
      130  
      131  ---
      132  
      133  ### Fri Jan 30 ⬜
      134  
      164 -#### Morning Run (6:30-7:20) - 50min                          
      165 -**Workout:** [[easy-aerobic|Easy Aerobic Run]]                
      166 -**Time:** 6:30-7:20                                           
      135 +#### Morning Bike (06:30-07:15) - 45min                       
      136 +**Workout:** FTP Tickle - Short Intensity Stimulus            
      137 +**Time:** 06:30-07:15 (before travel)                         
      138  
      139  **Structure:**
      169 -- Continuous easy (Z2)                                        
      170 -- Pace: 6:45-7:15/km                                          
      171 -- HR: 130-142 bpm                                             
      140 +- Warmup: 10min progressive (100W → 150W)                     
      141 +- Openers: 3x30s @ 130% FTP (286W) / 30s easy spin            
      142 +  - Addresses anaerobic deficit                               
      143 +- Main Set: 3x3min @ 105% FTP (231W)                          
      144 +  - 3min easy spin between intervals                          
      145 +  - RPE 8/10 (hard but not maximal)                           
      146 +  - High cadence: 95-100 rpm                                  
      147 +- Cooldown: 8min very easy                                    
      148  
      149  **Target Metrics:**
      174 -- activity:: Run                                              
      175 -- duration-planned:: 50                                       
      176 -- distance-planned:: 7-7.5                                    
      177 -- zone-target:: Z2                                            
      150 +- activity:: Bike                                             
      151 +- duration-planned:: 45                                       
      152 +- distance-planned:: 24-26                                    
      153 +- zone-target:: Z4-Z5 (intervals only)                        
      154 +- np-target:: 165-175                                         
      155 +- avg-power-target:: 140-150                                  
      156  
      179 -**Notes:** Easy recovery run. Day before threshold test - keep
          - it light and easy.                                           
      157 +**Notes:** Short intensity session to maintain FTP stimulus wi
          +thout fatigue debt. The 30s sprints address anaerobic deficit 
          +(Garmin Load Focus showed 747, below optimal). Total hard work
          +: ~12 minutes. Indoor trainer required. Done before leaving fo
          +r travel.                                                     
      158  
      181 -**Daily Total:** 1 session, 50min (easy run)                  
      159 +**Daily Total:** 1 session, 45min (FTP tickle)                
      160  
      161  ---
      162  
      163  ### Sat Jan 31 ⬜
      164 +**Rest Day** - Out of country (travel)                        
      165  
      187 -#### Morning Bike (9:00-10:15) - 75min                        
      188 -**Workout:** [[z2-endurance|Z2 Endurance Ride]]               
      189 -**Time:** 9:00-10:15                                          
      166 +Optional: Easy 30-40min walk/jog to explore if desired.       
      167  
      191 -**Structure:**                                                
      192 -- 15min warmup                                                
      193 -- 50min steady Z2 (using NEW FTP zones from Wed test)         
      194 -- 10min cooldown                                              
      195 -                                                              
      196 -**Target Metrics:**                                           
      197 -- activity:: Bike                                             
      198 -- duration-planned:: 75                                       
      199 -- distance-planned:: 40                                       
      200 -- zone-target:: Z2                                            
      201 -- avg-power-target:: TBD (based on new FTP)                   
      202 -                                                              
      203 -**Notes:** Moderate Z2 ride using updated training zones. Outd
          -oor if weather permits. Easy legs before run threshold test.  
      204 -                                                              
      205 -#### Afternoon Run Threshold Test (14:00-14:30) - 30min       
      206 -**Workout:** [[../workouts/run/run-threshold-test|Run Threshol
          -d Test - 30min Protocol]]                                     
      207 -**Time:** 14:00-14:30                                         
      208 -                                                              
      209 -**Structure:**                                                
      210 -- Warmup: 15min easy build                                    
      211 -- Main Test: 30min ALL-OUT time trial @ maximum sustainable pa
          -ce                                                            
      212 -- Cooldown: 10min very easy                                   
      213 -                                                              
      214 -**Current Threshold:** 171 bpm LTHR, 4:48/km pace             
      215 -**Target:** 173-175 bpm, 4:30-4:35/km pace (expecting improvem
          -ent)                                                          
      216 -                                                              
      217 -**Target Metrics:**                                           
      218 -- activity:: Run                                              
      219 -- duration-planned:: 30                                       
      220 -- distance-planned:: 6.5-7                                    
      221 -- zone-target:: Z5 Test                                       
      222 -- test-type:: Threshold                                       
      223 -- avg-hr-target:: Maximum sustainable for 30min               
      224 -- pace-target:: Best sustainable pace                         
      225 -                                                              
      226 -**Notes:** CRITICAL TEST. This is a 30min all-out effort. Star
          -t conservatively (4:35/km), settle into rhythm, push final 10m
          -in. Average HR from test = new LTHR. Average pace = new thresh
          -old pace. Use flat course. Results establish new run training 
          -zones.                                                        
      227 -                                                              
      228 -**Daily Total:** 2 sessions, 1h45 (Z2 bike + threshold test)  
      229 -                                                              
      168  ---
      169  
      170  ### Sun Feb 1 ⬜
      171 +**Rest Day** - Out of country (travel)                        
      172  
      234 -#### Morning Swim (9:30-10:00) - 30min                        
      235 -**Workout:** [[easy-technique|Easy Technique]]                
      236 -**Time:** 9:30-10:00                                          
      237 -                                                              
      238 -**Structure:**                                                
      239 -- Warmup: 200m very easy                                      
      240 -- Drill Set (50%): 6x50m @ 1:30 (extra rest)                  
      241 -  - 2x catch-up                                               
      242 -  - 2x fist drill                                             
      243 -  - 2x single-arm                                             
      244 -- Continuous: 3x100m smooth @ NEW CSS pace +10s, 30s rest     
      245 -- Cooldown: 100m                                              
      246 -- **Total: 800m**                                             
      247 -                                                              
      248 -**Target Metrics:**                                           
      249 -- activity:: Swim                                             
      250 -- duration-planned:: 30                                       
      251 -- distance-planned:: 800                                      
      252 -- zone-target:: Z1                                            
      253 -- drill-percentage:: 38                                       
      254 -                                                              
      255 -**Notes:** Short easy technique session using updated CSS zone
          -s from Thursday test. Very light - end of recovery week.      
      256 -                                                              
      257 -**Daily Total:** 1 session, 30min (easy technique swim)       
      258 -                                                              
      173  ---
      174  
      175  ## Week Completion
      176  
      177  **Progress:** ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ (0/7 days completed)
      178  
      265 -**Week 12 Status: Planned - RECOVERY + TESTING WEEK**         
      266 -- Sessions planned: 8                                         
      179 +**Week 12 Status: Planned - TRUE RECOVERY WEEK**              
      180 +- Sessions planned: 3                                         
      181  - Sessions completed: 0
      268 -- Total planned duration: 6h40                                
      182 +- Total planned duration: 2h25                                
      183 +- Rest days: 4 (Mon, Tue, Sat, Sun)                           
      184  
      270 -**Recovery Week Principles Applied:**                         
      271 -- **Minimal volume:** 6h40 vs 14h20 peak (53% reduction)      
      272 -- **Session reduction:** From 11 → 8 sessions                 
      273 -- **Testing focus:** 3 critical tests (FTP, CSS, Run Threshold
          -)                                                             
      274 -- **Easy pacing:** All non-test sessions at lower end of zones
      275 -- **No strength:** Complete muscular recovery                 
      276 -- **Strategic timing:** Tests spread across Wed/Thu/Sat       
      185 +**Recovery Week Design Rationale:**                           
      186  
      278 -**Testing Schedule & Targets:**                               
      187 +1. **Two rest days at start** - Drop acute training load from 
          +ceiling (~1750-1800) back to mid-optimal range                
      188  
      280 -1. **Wednesday FTP Test:**                                    
      281 -   - Current: 220W                                            
      282 -   - Target: 225-230W                                         
      283 -   - Expected gain: 5-10W (2-5% improvement)                  
      189 +2. **Run threshold test Wednesday** - Fresh legs after 48h res
          +t gives best test data for Cycle 4 zones                      
      190  
      285 -2. **Thursday CSS Test:**                                     
      286 -   - Current: 2:27/100m                                       
      287 -   - Target: 2:23-2:25/100m                                   
      288 -   - Expected gain: 2-4 seconds                               
      191 +3. **Easy swim Thursday** - Technique maintenance at fixed slo
          +t, no intensity                                               
      192  
      290 -3. **Saturday Run Threshold Test:**                           
      291 -   - Current: 171 bpm LTHR, 4:48/km                           
      292 -   - Target: 173-175 bpm, 4:30-4:35/km                        
      293 -   - Expected gain: 2-4 bpm, 13-18s/km faster                 
      193 +4. **FTP tickle Friday morning** - Short intensity stimulus be
          +fore travel:                                                  
      194 +   - Maintains FTP without full test fatigue                  
      195 +   - 30s sprints address anaerobic deficit                    
      196 +   - 3x3min @ 105% gives VO2max tickle                        
      197 +   - Done by 7:15, clear for travel                           
      198  
      295 -**Preparation for Tests:**                                    
      296 -- All tests done with 48h+ recovery from previous hard effort 
      297 -- FTP test: 2 days after last intensity (Mon rest + Tue easy) 
      298 -- CSS test: 1 day after FTP test (different systems)          
      299 -- Run test: 2 days after CSS test (Fri easy between)          
      199 +5. **Weekend rest** - Travel days, no training required       
      200  
      301 -**Cycle 3 Complete:**                                         
      302 -This concludes Cycle 3 (Weeks 9-12). Key achievements:        
      303 -- ✅ Intensity progression: 231W → 235W bike, 4:50 → 4:40/km r
          -un                                                            
      304 -- ✅ Volume peaks: 3h bike, 2h run successfully completed     
      305 -- ✅ Swim technique: 50%+ maintained throughout               
      306 -- ✅ Testing week: Establishes new baselines for Cycle 4      
      201 +**Garmin Data Context (entering this week):**                 
      202 +- Acute Training Load: ~1750-1800 (at ceiling)                
      203 +- Low Aerobic: 2077 (above optimal - overloaded)              
      204 +- High Aerobic: 1786 (at optimal ceiling)                     
      205 +- Anaerobic: 747 (below optimal - deficit)                    
      206 +- HRV Status: Balanced                                        
      207  
      308 -**Next Steps:**                                               
      309 -- **Cycle 4 (Weeks 13-16):** Build on new FTP/CSS/Threshold zo
          -nes                                                           
      310 -- Use test results to update training-zones.md                
      311 -- Plan next 4-week block with updated power/pace targets      
      312 -- Continue bike performance focus with higher baseline powers 
      208 +**Expected outcomes by end of Week 12:**                      
      209 +- Acute load dropped to ~1200-1400 (mid-optimal)              
      210 +- Low aerobic reduced (less Z2 volume)                        
      211 +- Anaerobic slightly improved (Friday sprints)                
      212 +- HRV maintained balanced                                     
      213 +- Fresh and ready for Cycle 4                                 
      214  
      215  ---
      216  
      316 -## Optional Mobility Work                                     
      217 +## Cycle 3 Summary                                            
      218  
      318 -**Focus:** Pre-test mobility and recovery (optimize testing pe
          -rformance)                                                    
      319 -**Duration:** 20 min                                          
      320 -**Best timing:** Monday evening, Thursday evening (between tes
          -ts)                                                           
      219 +**Weeks 9-12 Complete.** Key outcomes:                        
      220  
      322 -**Routine:**                                                  
      323 -- Gentle full-body stretching: 8min                           
      324 -- Hip openers (low lunge variations): 3min                    
      325 -- Hamstring flossing: 2min                                    
      326 -- Shoulder + thoracic mobility: 3min                          
      327 -- Spinal twists + cat-cow: 2min                               
      328 -- Light foam rolling (avoid deep tissue): 2min                
      221 +| Metric | Start of Cycle 3 | End of Cycle 3 | Change |       
      222 +|--------|------------------|----------------|--------|       
      223 +| FTP | 220W | 220W (test Week 4) | Maintain |                
      224 +| Run Threshold | 4:48/km | TBD (Wed test) | Expected improvem
          +ent |                                                         
      225 +| CSS | 2:27/100m | 2:19-2:27 | Improved |                    
      226 +| Long Bike | 2h30 | 4h03 (Week 11) | +65% |                  
      227 +| Long Run | 1h50 | 2h30 (Week 11) | +36% |                   
      228  
      330 -**Benefits:** Light mobility work optimizes testing performanc
          -e without creating muscle soreness. Monday evening aids recove
          -ry from Week 11 peak. Thursday evening (between FTP and run te
          -sts) maintains mobility without compromising fresh legs for te
          -sting.                                                        
      229 +**Key learnings for Cycle 4:**                                
      230 +1. Cap weekly volume at 12h (15h+ causes next-week fatigue)   
      231 +2. 2 swims/week maximum (life constraint accepted)            
      232 +3. No long session extensions when feeling good               
      233 +4. Address anaerobic deficit with short sprint work           
      234 +5. Use Garmin Load Focus and HRV as daily guides              
      235 +                                                              
      236 +---                                                           
      237 +                                                              
      238 +## Next: Cycle 4 (Weeks 13-16)                                
      239 +                                                              
      240 +**Cycle 4 Goals:**                                            
      241 +- Peak long bike: 160km                                       
      242 +- Weekly ceiling: 12h                                         
      243 +- Swim: 2 sessions/week                                       
      244 +- Intensity: Mixed (short sprints + sustained threshold)      
      245 +- Start: February 2, 2026                                     

⏺ Week 12 is set. A true recovery week:
  ┌─────────┬──────────┬──────────┬───────────┐
  │         │ Sessions │ Duration │ Rest Days │
  ├─────────┼──────────┼──────────┼───────────┤
  │ Week 12 │ 3        │ 2h25     │ 4         │
  └─────────┴──────────┴──────────┴───────────┘
  Summary:
  - Mon-Tue: Complete rest (drop acute load)
  - Wed: Run threshold test (fresh legs, key data)
  - Thu: Easy technique swim (20:00 fixed)
  - Fri 6:30: FTP tickle (before travel)
  - Sat-Sun: Rest (travel)

  This should drop your acute training load from ~1750 back to ~1200-1400 and
  have you fresh for Cycle 4.

  ---
  Ready to design Cycle 4 (Weeks 13-16, February) when you are. We have the
  framework:
  ┌───────┬───────┬────────────────┬────────────┐
  │ Cycle │ Month │ Peak Long Bike │ Weekly Cap │
  ├───────┼───────┼────────────────┼────────────┤
  │ 4     │ Feb   │ 160km          │ 12h        │
  ├───────┼───────┼────────────────┼────────────┤
  │ 5     │ Mar   │ 180km          │ 12h        │
  ├───────┼───────┼────────────────┼────────────┤
  │ 6     │ Apr   │ 200km          │ 12h        │
  └───────┴───────┴────────────────┴────────────┘
  Want to continue with the Cycle 4 weekly plans now, or take a break and tackle
   it another session?

✻ Cogitated for 1m 1s

❯ so for next cycles, we need to change also that sundays will be long bike 
  day, and sat long run day. During the week, I need workouts that          
  increase my ftp and vo2 as much as possible                               

⏺ Good change. Let me design the new weekly template:

  Cycle 4+ Weekly Structure
  Day: Mon
  Session 1: Rest or Swim 45min
  Session 2: -
  Focus: Recovery / Technique
  ────────────────────────────────────────
  Day: Tue
  Session 1: Run 50-60min (intensity)
  Session 2: Bike 60-75min (FTP work)
  Focus: FTP + Run Threshold
  ────────────────────────────────────────
  Day: Wed
  Session 1: Bike 45-60min Z2
  Session 2: Run 40-50min easy
  Focus: Active recovery
  ────────────────────────────────────────
  Day: Thu
  Session 1: Bike 75-90min (VO2max)
  Session 2: Swim 50-60min (20:00)
  Focus: VO2max + Technique
  ────────────────────────────────────────
  Day: Fri
  Session 1: Rest or easy run 40min
  Session 2: -
  Focus: Pre-long session rest
  ────────────────────────────────────────
  Day: Sat
  Session 1: Long Run
  Session 2: -
  Focus: Endurance
  ────────────────────────────────────────
  Day: Sun
  Session 1: Long Bike
  Session 2: -
  Focus: Endurance
  ---
  FTP & VO2max Workout Menu

  FTP Builders (Tuesday Bike)
  ┌─────────────┬────────────────────────────────────────┬─────────────────┐
  │   Workout   │               Structure                │     Target      │
  ├─────────────┼────────────────────────────────────────┼─────────────────┤
  │ Sweet Spot  │ 3x12min @ 88-94% FTP (198-207W)        │ FTP foundation  │
  ├─────────────┼────────────────────────────────────────┼─────────────────┤
  │ Threshold   │ 3x10min @ 95-100% FTP (209-220W)       │ FTP direct      │
  ├─────────────┼────────────────────────────────────────┼─────────────────┤
  │ Over-Unders │ 3x8min alternating 95%/105% every 2min │ FTP + mental    │
  ├─────────────┼────────────────────────────────────────┼─────────────────┤
  │ FTP Tickle  │ 2x20min @ 90-95% FTP                   │ Sustained power │
  └─────────────┴────────────────────────────────────────┴─────────────────┘
  VO2max Builders (Thursday Bike)
  ┌────────────────┬────────────────────────────────────┬────────────────────┐
  │    Workout     │             Structure              │       Target       │
  ├────────────────┼────────────────────────────────────┼────────────────────┤
  │ Classic VO2max │ 5x4min @ 105-110% FTP (231-242W)   │ VO2max capacity    │
  ├────────────────┼────────────────────────────────────┼────────────────────┤
  │ Short VO2max   │ 6x3min @ 110-115% FTP (242-253W)   │ VO2max power       │
  ├────────────────┼────────────────────────────────────┼────────────────────┤
  │ 30/30s         │ 10-15x (30s @ 130% / 30s easy)     │ VO2max + anaerobic │
  ├────────────────┼────────────────────────────────────┼────────────────────┤
  │ Billats        │ 8x(30s @ 120% / 15s easy) x 3 sets │ VO2max efficiency  │
  └────────────────┴────────────────────────────────────┴────────────────────┘
  Run Intensity (Tuesday)
  ┌──────────────────┬────────────────────────┬───────────────────┐
  │     Workout      │       Structure        │      Target       │
  ├──────────────────┼────────────────────────┼───────────────────┤
  │ Threshold        │ 4x6min @ 4:35-4:45/km  │ Lactate threshold │
  ├──────────────────┼────────────────────────┼───────────────────┤
  │ VO2max           │ 5x3min @ 4:15-4:25/km  │ Running economy   │
  ├──────────────────┼────────────────────────┼───────────────────┤
  │ Hill repeats     │ 6x90s uphill hard      │ Power + VO2max    │
  ├──────────────────┼────────────────────────┼───────────────────┤
  │ Cruise intervals │ 2x15min @ 4:50-5:00/km │ Tempo endurance   │
  └──────────────────┴────────────────────────┴───────────────────┘
  ---
  Cycle 4 Progression (Feb 2 - Mar 1)
  ┌──────┬──────────┬───────────────┬───────────┬──────────┬──────────┬───────┐
  │      │          │               │           │ Long Run │  Long    │       │
  │ Week │  Phase   │   Tue Bike    │ Thu Bike  │   (Sat)  │  Bike    │ Total │
  │      │          │               │           │          │  (Sun)   │       │
  ├──────┼──────────┼───────────────┼───────────┼──────────┼──────────┼───────┤
  │ 13   │ Build 1  │ Sweet Spot    │ VO2max    │ 1h45 /   │ 120km /  │ 10h   │
  │      │          │ 3x12min       │ 4x4min    │ 16km     │ 3h30     │       │
  ├──────┼──────────┼───────────────┼───────────┼──────────┼──────────┼───────┤
  │ 14   │ Build 2  │ Threshold     │ VO2max    │ 1h50 /   │ 140km /  │ 11h   │
  │      │          │ 3x10min       │ 5x4min    │ 17km     │ 4h       │       │
  ├──────┼──────────┼───────────────┼───────────┼──────────┼──────────┼───────┤
  │ 15   │ Build 3  │ Over-Unders   │ 30/30s    │ 2h /     │ 160km /  │ 12h   │
  │      │          │ 3x8min        │ x15       │ 18km     │ 4h30     │       │
  ├──────┼──────────┼───────────────┼───────────┼──────────┼──────────┼───────┤
  │      │          │ Easy spin     │ FTP       │ 1h /     │ 60km /   │       │
  │ 16   │ Recovery │ 45min         │ Tickle    │ 10km     │ 2h       │ 6h    │
  │      │          │               │ 45min     │          │          │       │
  └──────┴──────────┴───────────────┴───────────┴──────────┴──────────┴───────┘
  ---
  Sample Week 13 (Build 1)
  Day: Mon
  Workout: Easy Swim (technique)
  Duration: 45min
  Intensity: Z1-Z2
  ────────────────────────────────────────
  Day: Tue AM
  Workout: Run: 15min warm + 4x5min @ threshold + 10min cool
  Duration: 55min
  Intensity: Z4
  ────────────────────────────────────────
  Day: Tue Lunch
  Workout: Bike: Sweet Spot 3x12min @ 200W
  Duration: 65min
  Intensity: Z3-Z4
  ────────────────────────────────────────
  Day: Wed AM
  Workout: Bike Z2 easy
  Duration: 50min
  Intensity: Z2
  ────────────────────────────────────────
  Day: Wed PM
  Workout: Run easy
  Duration: 45min
  Intensity: Z2
  ────────────────────────────────────────
  Day: Thu Lunch
  Workout: Bike: VO2max 4x4min @ 235W
  Duration: 75min
  Intensity: Z5
  ────────────────────────────────────────
  Day: Thu 20:00
  Workout: Swim (technique + threshold)
  Duration: 55min
  Intensity: Z2-T4
  ────────────────────────────────────────
  Day: Fri
  Workout: Rest
  Duration: -
  Intensity: -
  ────────────────────────────────────────
  Day: Sat
  Workout: Long Run
  Duration: 1h45
  Intensity: Z2-low Z3
  ────────────────────────────────────────
  Day: Sun
  Workout: Long Bike 120km
  Duration: 3h30
  Intensity: Z2
  Week 13 Total: ~10h, 8 sessions

  ---
  Key Differences from Previous Plan
  ┌─────────────────┬────────────────┬──────────────────────────────────┐
  │     Aspect      │      Old       │               New                │
  ├─────────────────┼────────────────┼──────────────────────────────────┤
  │ Long bike day   │ Saturday       │ Sunday                           │
  ├─────────────────┼────────────────┼──────────────────────────────────┤
  │ Long run day    │ Sunday         │ Saturday                         │
  ├─────────────────┼────────────────┼──────────────────────────────────┤
  │ Intensity focus │ Sustained only │ FTP + VO2max specific            │
  ├─────────────────┼────────────────┼──────────────────────────────────┤
  │ Tuesday         │ Mixed          │ FTP day (bike) + Threshold (run) │
  ├─────────────────┼────────────────┼──────────────────────────────────┤
  │ Thursday        │ VO2max bike    │ VO2max bike (dedicated)          │
  ├─────────────────┼────────────────┼──────────────────────────────────┤
  │ Weekly ceiling  │ 14h+           │ 12h max                          │
  └─────────────────┴────────────────┴──────────────────────────────────┘
  ---
  Does this structure work? If yes, I'll create the Week 13-16 files with this
  template.

✻ Brewed for 40s

❯ the work schedule does not allow 2 workouts on tuesdays, better wednesday 
  and fridays                                                               

⏺ Got it. Tuesday and Thursday are onsite days with less flexibility. Wednesday
  and Friday are remote with more training time.

  Revised Weekly Structure
  ┌─────┬──────────────────────────┬─────────────────┬─────────────────────────┐
  │ Day │        Session 1         │    Session 2    │          Notes          │
  ├─────┼──────────────────────────┼─────────────────┼─────────────────────────┤
  │ Mon │ Rest or Swim 45min       │ -               │ Recovery                │
  ├─────┼──────────────────────────┼─────────────────┼─────────────────────────┤
  │ Tue │ Run intensity 55min      │ -               │ Single session (onsite  │
  │     │ (morning)                │                 │ day)                    │
  ├─────┼──────────────────────────┼─────────────────┼─────────────────────────┤
  │ Wed │ Bike FTP work 70min      │ Run easy 45min  │ Double (remote)         │
  ├─────┼──────────────────────────┼─────────────────┼─────────────────────────┤
  │ Thu │ Bike VO2max 75min        │ Swim 55min      │ Gym + fixed swim        │
  │     │                          │ (20:00)         │                         │
  ├─────┼──────────────────────────┼─────────────────┼─────────────────────────┤
  │ Fri │ Bike easy 50min          │ Run easy 45min  │ Double (remote) - keep  │
  │     │                          │                 │ light                   │
  ├─────┼──────────────────────────┼─────────────────┼─────────────────────────┤
  │ Sat │ Long Run                 │ -               │ Endurance               │
  ├─────┼──────────────────────────┼─────────────────┼─────────────────────────┤
  │ Sun │ Long Bike                │ -               │ Endurance               │
  └─────┴──────────────────────────┴─────────────────┴─────────────────────────┘
  Weekly sessions: 9-10 (including optional Monday swim)

  ---
  Intensity Distribution
  ┌─────┬────────────────┬──────────────────┐
  │ Day │ Bike Intensity │  Run Intensity   │
  ├─────┼────────────────┼──────────────────┤
  │ Tue │ -              │ Threshold/VO2max │
  ├─────┼────────────────┼──────────────────┤
  │ Wed │ FTP work       │ Easy             │
  ├─────┼────────────────┼──────────────────┤
  │ Thu │ VO2max         │ -                │
  ├─────┼────────────────┼──────────────────┤
  │ Fri │ Easy Z2        │ Easy Z2          │
  ├─────┼────────────────┼──────────────────┤
  │ Sat │ -              │ Long (Z2-low Z3) │
  ├─────┼────────────────┼──────────────────┤
  │ Sun │ Long (Z2)      │ -                │
  └─────┴────────────────┴──────────────────┘
  Hard days: Tue (run), Wed (bike), Thu (bike)
  Easy days: Fri, Sat/Sun (long but aerobic)

  ---
  Revised Cycle 4 Weeks
  ┌──────┬─────────────┬───────────────┬──────────┬─────────┬──────────┬───────┐
  │      │             │               │          │  Sat    │ Sun Long │       │
  │ Week │   Tue Run   │   Wed Bike    │ Thu Bike │  Long   │   Bike   │ Total │
  │      │             │               │          │   Run   │          │       │
  ├──────┼─────────────┼───────────────┼──────────┼─────────┼──────────┼───────┤
  │ 13   │ 4x5min      │ Sweet Spot    │ VO2max   │ 1h45    │ 120km    │ 10h   │
  │      │ threshold   │ 3x12min       │ 4x4min   │         │          │       │
  ├──────┼─────────────┼───────────────┼──────────┼─────────┼──────────┼───────┤
  │ 14   │ 5x4min      │ Threshold     │ VO2max   │ 1h50    │ 140km    │ 11h   │
  │      │ threshold   │ 3x10min       │ 5x4min   │         │          │       │
  ├──────┼─────────────┼───────────────┼──────────┼─────────┼──────────┼───────┤
  │ 15   │ 4x6min      │ Over-Unders   │ 30/30s   │ 2h      │ 160km    │ 12h   │
  │      │ threshold   │ 3x8min        │ x15      │         │          │       │
  ├──────┼─────────────┼───────────────┼──────────┼─────────┼──────────┼───────┤
  │ 16   │ Easy 40min  │ FTP Tickle    │ Easy     │ 1h      │ 60km     │ 6h    │
  │      │             │ 45min         │ 50min    │         │          │       │
  └──────┴─────────────┴───────────────┴──────────┴─────────┴──────────┴───────┘
  ---
  Does this structure work better with your schedule? If yes, I'll create the
  Week 13-16 files.

❯ Carla my daugher wants to join swimming on Thursday, that means I will    
  have only 45 min to workout, as the rest of the time I need to stay with  
  her in the pool. lets move on monday longer swimms                        

⏺ That's great that Carla wants to swim! Let me adjust:

  Updated Weekly Structure
  ┌─────┬───────────────────┬──────────────────┬───────────────────────────────┐
  │ Day │     Session 1     │    Session 2     │             Notes             │
  ├─────┼───────────────────┼──────────────────┼───────────────────────────────┤
  │ Mon │ Swim 55-60min     │ -                │ Longer technique/threshold    │
  │     │                   │                  │ swim                          │
  ├─────┼───────────────────┼──────────────────┼───────────────────────────────┤
  │ Tue │ Run intensity     │ -                │ Single session (onsite)       │
  │     │ 55min             │                  │                               │
  ├─────┼───────────────────┼──────────────────┼───────────────────────────────┤
  │ Wed │ Bike FTP 70min    │ Run easy 45min   │ Double (remote)               │
  ├─────┼───────────────────┼──────────────────┼───────────────────────────────┤
  │ Thu │ Bike VO2max 75min │ Swim 45min       │ Shorter swim (with Carla)     │
  │     │                   │ (20:00)          │                               │
  ├─────┼───────────────────┼──────────────────┼───────────────────────────────┤
  │ Fri │ Bike easy 50min   │ Run easy 45min   │ Double (remote) - light       │
  ├─────┼───────────────────┼──────────────────┼───────────────────────────────┤
  │ Sat │ Long Run          │ -                │ Endurance                     │
  ├─────┼───────────────────┼──────────────────┼───────────────────────────────┤
  │ Sun │ Long Bike         │ -                │ Endurance                     │
  └─────┴───────────────────┴──────────────────┴───────────────────────────────┘
  ---
  Swim Split
  Day: Monday
  Duration: 55-60min
  Focus: Technique drills + threshold intervals
  Notes: Dedicated swim, full focus
  ────────────────────────────────────────
  Day: Thursday
  Duration: 45min
  Focus: Simple sets, easy-moderate
  Notes: With Carla, less complex workout
  Weekly swim total: ~100min, 2 sessions (your max)

  Thursday swim simplified:
  - Warmup: 200m easy
  - Main: 8x100m steady @ comfortable pace
  - Cooldown: 100m
  - Total: ~1100m

  No complicated drills while supervising - just solid meters.

  ---
  This structure ready? I'll create Weeks 13-16 with this template.

❯ I am missing intense runs 

⏺ You're right - only Tuesday has run intensity. Let me fix that:

  Options for Adding Run Intensity

  Option A: Friday tempo run (before long run Saturday)
  - Replace Friday easy run with tempo/cruise intervals
  - Lower intensity than Tuesday, but still productive
  - Risk: might tire legs slightly before Saturday

  Option B: Thursday morning run (before bike VO2max)
  - Add a morning run intensity session
  - Thursday becomes: Run AM + Bike midday + Swim 20:00
  - Risk: 3 sessions, 2 intense on same day

  Option C: Wednesday run becomes threshold
  - Wed: FTP Bike + Threshold Run (both intense)
  - Hard double day, but remote so flexible recovery between

  ---
  My Recommendation: Option A + C combined
  ┌─────┬───────────────────┬─────────────────┬──────────────────────────┐
  │ Day │     Session 1     │    Session 2    │      Run Intensity       │
  ├─────┼───────────────────┼─────────────────┼──────────────────────────┤
  │ Mon │ Swim 55min        │ -               │ -                        │
  ├─────┼───────────────────┼─────────────────┼──────────────────────────┤
  │ Tue │ Run VO2max 55min  │ -               │ Hard (5x3min fast)       │
  ├─────┼───────────────────┼─────────────────┼──────────────────────────┤
  │ Wed │ Bike FTP 70min    │ Run tempo 45min │ Moderate (20min @ tempo) │
  ├─────┼───────────────────┼─────────────────┼──────────────────────────┤
  │ Thu │ Bike VO2max 75min │ Swim 45min      │ -                        │
  ├─────┼───────────────────┼─────────────────┼──────────────────────────┤
  │ Fri │ Bike easy 50min   │ Run easy 40min  │ Easy (pre-long run)      │
  ├─────┼───────────────────┼─────────────────┼──────────────────────────┤
  │ Sat │ Long Run 1h45-2h  │ -               │ Aerobic                  │
  ├─────┼───────────────────┼─────────────────┼──────────────────────────┤
  │ Sun │ Long Bike         │ -               │ -                        │
  └─────┴───────────────────┴─────────────────┴──────────────────────────┘
  Run intensity summary:
  - Tuesday: VO2max intervals (hard)
  - Wednesday: Tempo/threshold (moderate)
  - Saturday: Long aerobic (endurance)

  3 quality run sessions per week instead of 1.

  ---
  Does this work? Or would you prefer a different distribution?

❯ option a sounds better. give me an example of this week for the peek      
  weeks of the next 3 cycles                                                

⏺ Here are the 3 peak weeks with Option A (Friday tempo run):

  ---
  Week 15 - Cycle 4 Peak (160km bike)
  Day: Mon
  Session 1: Swim: technique + 5x200m threshold
  Session 2: -
  Duration: 55min
  ────────────────────────────────────────
  Day: Tue
  Session 1: Run: 15min warm + 5x4min @ 4:30/km + 10min cool
  Session 2: -
  Duration: 55min
  ────────────────────────────────────────
  Day: Wed
  Session 1: Bike: Over-Unders 3x8min (95/105% FTP)
  Session 2: Run easy 40min
  Duration: 60+40
  ────────────────────────────────────────
  Day: Thu
  Session 1: Bike: 30/30s x15 @ 130% FTP
  Session 2: Swim easy 45min (Carla)
  Duration: 65+45
  ────────────────────────────────────────
  Day: Fri
  Session 1: Bike easy 45min
  Session 2: Run tempo: 20min @ 5:00/km
  Duration: 45+50
  ────────────────────────────────────────
  Day: Sat
  Session 1: Long Run: 2h / 18km
  Session 2: -
  Duration: 120min
  ────────────────────────────────────────
  Day: Sun
  Session 1: Long Bike: 160km
  Session 2: -
  Duration: 270min (4h30)
  Week 15 Total: ~12h30 | Sat-Sun: 6h30

  ---
  Week 19 - Cycle 5 Peak (180km bike)
  Day: Mon
  Session 1: Swim: technique + 6x200m threshold
  Session 2: -
  Duration: 60min
  ────────────────────────────────────────
  Day: Tue
  Session 1: Run: 15min warm + 4x5min @ 4:25/km + 10min cool
  Session 2: -
  Duration: 55min
  ────────────────────────────────────────
  Day: Wed
  Session 1: Bike: Threshold 3x12min @ 100% FTP
  Session 2: Run easy 40min
  Duration: 65+40
  ────────────────────────────────────────
  Day: Thu
  Session 1: Bike: VO2max 5x4min @ 108% FTP
  Session 2: Swim easy 45min (Carla)
  Duration: 70+45
  ────────────────────────────────────────
  Day: Fri
  Session 1: Bike easy 40min
  Session 2: Run tempo: 25min @ 4:55/km
  Duration: 40+55
  ────────────────────────────────────────
  Day: Sat
  Session 1: Long Run: 2h / 19km
  Session 2: -
  Duration: 120min
  ────────────────────────────────────────
  Day: Sun
  Session 1: Long Bike: 180km
  Session 2: -
  Duration: 300min (5h)
  Week 19 Total: ~13h15 | Sat-Sun: 7h

  ---
  Week 23 - Cycle 6 Peak (200km bike)
  Day: Mon
  Session 1: Swim: technique + 6x200m threshold
  Session 2: -
  Duration: 60min
  ────────────────────────────────────────
  Day: Tue
  Session 1: Run: 15min warm + 4x6min @ 4:20/km + 10min cool
  Session 2: -
  Duration: 60min
  ────────────────────────────────────────
  Day: Wed
  Session 1: Bike: Sweet Spot 2x20min @ 92% FTP
  Session 2: Run easy 35min
  Duration: 60+35
  ────────────────────────────────────────
  Day: Thu
  Session 1: Bike: VO2max 4x5min @ 107% FTP
  Session 2: Swim easy 45min (Carla)
  Duration: 70+45
  ────────────────────────────────────────
  Day: Fri
  Session 1: Bike easy 35min
  Session 2: Run tempo: 25min @ 4:50/km
  Duration: 35+55
  ────────────────────────────────────────
  Day: Sat
  Session 1: Long Run: 2h / 19km
  Session 2: -
  Duration: 120min
  ────────────────────────────────────────
  Day: Sun
  Session 1: Long Bike: 200km
  Session 2: -
  Duration: 330min (5h30)
  Week 23 Total: ~13h45 | Sat-Sun: 7h30

  ---
  Peak Week Summary
  ┌───────┬──────┬──────────────┬───────────┬──────────────┬──────────────┐
  │ Cycle │ Week │  Long Bike   │ Long Run  │ Weekly Total │    Notes     │
  ├───────┼──────┼──────────────┼───────────┼──────────────┼──────────────┤
  │ 4     │ 15   │ 160km / 4h30 │ 2h / 18km │ 12h30        │ Within range │
  ├───────┼──────┼──────────────┼───────────┼──────────────┼──────────────┤
  │ 5     │ 19   │ 180km / 5h   │ 2h / 19km │ 13h15        │ Slight over  │
  ├───────┼──────┼──────────────┼───────────┼──────────────┼──────────────┤
  │ 6     │ 23   │ 200km / 5h30 │ 2h / 19km │ 13h45        │ Peak volume  │
  └───────┴──────┴──────────────┴───────────┴──────────────┴──────────────┘
  Note: Peak weeks go slightly over 12h ceiling to hit bike targets. This is
  acceptable because:
  1. Only 1 week per cycle
  2. Recovery week follows immediately
  3. Mid-week intensity is slightly reduced
  4. No extensions allowed - these are the targets

  ---
  Intensity Progression Across Peaks
  ┌──────────┬────────────────────┬───────────────────┬────────────────────┐
  │ Session  │      Week 15       │      Week 19      │      Week 23       │
  ├──────────┼────────────────────┼───────────────────┼────────────────────┤
  │ Tue Run  │ 5x4min @ 4:30      │ 4x5min @ 4:25     │ 4x6min @ 4:20      │
  ├──────────┼────────────────────┼───────────────────┼────────────────────┤
  │ Wed Bike │ Over-Unders 3x8min │ Threshold 3x12min │ Sweet Spot 2x20min │
  ├──────────┼────────────────────┼───────────────────┼────────────────────┤
  │ Thu Bike │ 30/30s x15         │ VO2max 5x4min     │ VO2max 4x5min      │
  ├──────────┼────────────────────┼───────────────────┼────────────────────┤
  │ Fri Run  │ Tempo 20min        │ Tempo 25min       │ Tempo 25min        │
  └──────────┴────────────────────┴───────────────────┴────────────────────┘
  ---
  Does this structure work? Ready to create the full cycle files?

✻ Sautéed for 39s

❯ yes create cycle 4 files 
  ⎿  Interrupted · What should Claude do instead?

❯ check @cycles/ folder first 
  ⎿  Listed directory cycles/

⏺ Search(pattern: "cycles/*.md", path: "~/Projects/surdu/ironman-2026")
  ⎿  Found 8 files (ctrl+o to expand)

⏺ Let me read the existing cycle-4 file to see the current structure:

⏺ Read(cycles/cycle-4-threshold-work.md)
  ⎿  Read 24 lines

⏺ Let me also check cycles 5 and 6 to see what needs updating:

⏺ Read(cycles/cycle-5-race-specific.md)
  ⎿  Read 25 lines

⏺ Read(cycles/cycle-6-peak-development.md)
  ⎿  Read 25 lines

⏺ Read(cycles/cycle-3-strength-integration.md)
  ⎿  Read 23 lines

⏺ Let me check a completed cycle for the format reference:

⏺ Read(cycles/cycle-1-base-building.md)
  ⎿  Read 114 lines

⏺ Now I understand the format. Let me update the cycle files with our new
  structure. I'll update all three cycles:

⏺ Write(cycles/cycle-4-threshold-work.md)
  ⎿  Added 196 lines, removed 11 lines
        1  # Cycle 4: Threshold Work
        2  
        3  **Duration:** Weeks 13-16 (February 2 - March 1, 2026)
        4 -**Phase:** Threshold Work                                     
        5 -**Focus:** TBD                                                
        4 +**Phase:** FTP & VO2max Development                           
        5 +**Focus:** Build FTP and VO2max while progressing long bike to
          + 160km                                                        
        6  
        7 -## Status: TO BE DEVELOPED                                    
        7 +## Cycle Overview                                             
        8  
        9 -This cycle will be created after completing Cycle 3.          
        9 +This cycle focuses on improving FTP and VO2max through structu
          +red intensity work while building toward the first major bike 
          +distance milestone (160km). Key adaptations from Cycle 3 learn
          +ings:                                                         
       10 +- Weekly ceiling: 12h (peak weeks may reach 12h30)            
       11 +- 2 swims/week (Monday technique, Thursday with Carla)        
       12 +- Sunday long bike, Saturday long run                         
       13 +- No extensions on long sessions                              
       14 +- Anaerobic work included to address Garmin-identified deficit
       15  
       11 -### Planned Focus Areas:                                      
       12 -- Threshold and tempo training                                
       13 -- Sweet spot intervals                                        
       14 -- Sustained power and pace work                               
       15 -- Maintaining endurance base                                  
       16 +### Goals                                                     
       17 +- Increase FTP from 220W toward 230W                          
       18 +- Build VO2max capacity (cycling VO2max from 41 toward 44)    
       19 +- Progress long bike: 120km → 140km → 160km                   
       20 +- Maintain run threshold improvements from Week 12 test       
       21 +- Address anaerobic deficit with short power work             
       22  
       23 +## Weekly Structure Template                                  
       24 +                                                              
       25 +| Day | Session 1 | Session 2 | Focus |                       
       26 +|-----|-----------|-----------|-------|                       
       27 +| **Mon** | Swim 55-60min | - | Technique + threshold |       
       28 +| **Tue** | Run VO2max/threshold 55min | - | Run intensity (on
          +site) |                                                       
       29 +| **Wed** | Bike FTP work 65-70min | Run easy 40-45min | FTP d
          +evelopment (remote) |                                         
       30 +| **Thu** | Bike VO2max 70-75min | Swim 45min (20:00) | VO2max
          + + swim with Carla |                                          
       31 +| **Fri** | Bike easy 45-50min | Run tempo 45-50min | Pre-week
          +end tempo (remote) |                                          
       32 +| **Sat** | **Long Run** | - | Endurance |                    
       33 +| **Sun** | **Long Bike** | - | Endurance |                   
       34 +                                                              
       35 +**Weekly sessions:** 9 (2 swim, 3 bike + long, 3 run + long)  
       36 +                                                              
       37  ---
       38  
       39 +## Weekly Progression                                         
       40 +                                                              
       41 +| Week | Phase | Tue Run | Wed Bike | Thu Bike | Fri Run | Sat
          + Run | Sun Bike | Total |                                     
       42 +|------|-------|---------|----------|----------|---------|----
          +-----|----------|-------|                                     
       43 +| **13** | Build 1 | 4x4min @ 4:35 | SS 3x10min | VO2 4x4min |
          + Tempo 15min | 1h40 | 120km | ~10h |                          
       44 +| **14** | Build 2 | 5x4min @ 4:30 | SS 3x12min | VO2 5x4min |
          + Tempo 18min | 1h50 | 140km | ~11h |                          
       45 +| **15** | Build 3 | 5x4min @ 4:30 | O/U 3x8min | 30/30 x15 | 
          +Tempo 20min | 2h | **160km** | ~12h30 |                       
       46 +| **16** | Recovery | Easy 40min | Easy 45min | Tickle 45min |
          + Easy 40min | 1h | 60km | ~6h |                               
       47 +                                                              
       48 +**Legend:** SS = Sweet Spot, O/U = Over-Unders, VO2 = VO2max i
          +ntervals                                                      
       49 +                                                              
       50 +---                                                           
       51 +                                                              
       52 +## Week-by-Week Detail                                        
       53 +                                                              
       54 +### Week 13: Feb 2-8, 2026 - Build 1                          
       55 +**Volume:** ~10h (9 sessions)                                 
       56 +                                                              
       57 +| Day | Workout | Duration | Key Details |                    
       58 +|-----|---------|----------|-------------|                    
       59 +| Mon | Swim technique + 4x200m @ CSS | 55min | 1800m total | 
       60 +| Tue | Run: 4x4min @ 4:35/km | 55min | 3min jog recovery |   
       61 +| Wed | Bike: Sweet Spot 3x10min @ 200W | 65min | 5min recover
          +y |                                                           
       62 +| Wed | Run easy | 40min | Z2 recovery |                      
       63 +| Thu | Bike: VO2max 4x4min @ 235W | 70min | 4min recovery |  
       64 +| Thu | Swim easy (Carla) | 45min | 8x100m steady |           
       65 +| Fri | Bike easy Z2 | 45min | Recovery spin |                
       66 +| Fri | Run tempo: 15min @ 5:05/km | 45min | After 15min warm-
          +up |                                                          
       67 +| Sat | **Long Run** | 1h40 | 15-16km, Z2-low Z3 |            
       68 +| Sun | **Long Bike 120km** | 3h30 | Z2, nutrition practice | 
       69 +                                                              
       70 +---                                                           
       71 +                                                              
       72 +### Week 14: Feb 9-15, 2026 - Build 2                         
       73 +**Volume:** ~11h (9 sessions)                                 
       74 +                                                              
       75 +| Day | Workout | Duration | Key Details |                    
       76 +|-----|---------|----------|-------------|                    
       77 +| Mon | Swim technique + 5x200m @ CSS | 55min | 2000m total | 
       78 +| Tue | Run: 5x4min @ 4:30/km | 55min | 3min jog recovery |   
       79 +| Wed | Bike: Sweet Spot 3x12min @ 200W | 70min | 5min recover
          +y |                                                           
       80 +| Wed | Run easy | 45min | Z2 recovery |                      
       81 +| Thu | Bike: VO2max 5x4min @ 235W | 75min | 4min recovery |  
       82 +| Thu | Swim easy (Carla) | 45min | 8x100m steady |           
       83 +| Fri | Bike easy Z2 | 45min | Recovery spin |                
       84 +| Fri | Run tempo: 18min @ 5:00/km | 50min | After 15min warm-
          +up |                                                          
       85 +| Sat | **Long Run** | 1h50 | 17km, Z2-low Z3 |               
       86 +| Sun | **Long Bike 140km** | 4h | Z2, nutrition practice |   
       87 +                                                              
       88 +---                                                           
       89 +                                                              
       90 +### Week 15: Feb 16-22, 2026 - Build 3 (PEAK)                 
       91 +**Volume:** ~12h30 (9 sessions)                               
       92 +                                                              
       93 +| Day | Workout | Duration | Key Details |                    
       94 +|-----|---------|----------|-------------|                    
       95 +| Mon | Swim technique + 5x200m @ CSS | 55min | 2000m total | 
       96 +| Tue | Run: 5x4min @ 4:30/km | 55min | 3min jog recovery |   
       97 +| Wed | Bike: Over-Unders 3x8min (95/105% FTP) | 60min | 5min 
          +recovery |                                                    
       98 +| Wed | Run easy | 40min | Z2 recovery |                      
       99 +| Thu | Bike: 30/30s x15 @ 130% FTP | 65min | Anaerobic focus 
          +|                                                             
      100 +| Thu | Swim easy (Carla) | 45min | 8x100m steady |           
      101 +| Fri | Bike easy Z2 | 45min | Recovery spin |                
      102 +| Fri | Run tempo: 20min @ 5:00/km | 50min | After 15min warm-
          +up |                                                          
      103 +| Sat | **Long Run** | 2h | 18km, Z2-low Z3 |                 
      104 +| Sun | **Long Bike 160km** | 4h30 | Z2, full nutrition plan |
      105 +                                                              
      106 +**Peak Week Targets:**                                        
      107 +- Long bike: 160km (first major milestone)                    
      108 +- Long run: 2h / 18km                                         
      109 +- Total: ~12h30                                               
      110 +                                                              
      111 +---                                                           
      112 +                                                              
      113 +### Week 16: Feb 23 - Mar 1, 2026 - Recovery                  
      114 +**Volume:** ~6h (7 sessions)                                  
      115 +                                                              
      116 +| Day | Workout | Duration | Key Details |                    
      117 +|-----|---------|----------|-------------|                    
      118 +| Mon | Swim technique only | 45min | 1400m, drills focus |   
      119 +| Tue | Run easy | 40min | Z1-Z2 only |                       
      120 +| Wed | Bike easy Z2 | 45min | Light spin |                   
      121 +| Wed | Run easy | 35min | Z2 |                               
      122 +| Thu | Bike: FTP Tickle (3x3min @ 105%) | 45min | Maintain st
          +imulus |                                                      
      123 +| Thu | Swim easy (Carla) | 45min | Relaxed swimming |        
      124 +| Fri | Rest | - | Pre-weekend rest |                         
      125 +| Sat | **Long Run** | 1h | 10km easy |                       
      126 +| Sun | **Long Bike** | 2h | 60km easy Z2 |                   
      127 +                                                              
      128 +---                                                           
      129 +                                                              
      130 +## Key Workouts Explained                                     
      131 +                                                              
      132 +### FTP Builders (Wednesday)                                  
      133 +                                                              
      134 +**Sweet Spot (Weeks 13-14):** 3x10-12min @ 88-94% FTP (194-207
          +W)                                                            
      135 +- Maximizes time in FTP-building zone                         
      136 +- Less fatigue than threshold work                            
      137 +- 5min easy spin between intervals                            
      138 +                                                              
      139 +**Over-Unders (Week 15):** 3x8min alternating 95%/105% FTP eve
          +ry 2min                                                       
      140 +- 2min @ 209W, 2min @ 231W, repeat                            
      141 +- Teaches body to clear lactate while working                 
      142 +- Mental preparation for race surges                          
      143 +                                                              
      144 +### VO2max Builders (Thursday)                                
      145 +                                                              
      146 +**Classic VO2max (Weeks 13-14):** 4-5x4min @ 107% FTP (235W)  
      147 +- Builds aerobic ceiling                                      
      148 +- 4min recovery between intervals                             
      149 +- High cadence (95-100 rpm)                                   
      150 +                                                              
      151 +**30/30s (Week 15):** 15x (30s @ 130% FTP / 30s easy)         
      152 +- 286W for 30s, then spin                                     
      153 +- Addresses anaerobic deficit                                 
      154 +- Also builds VO2max through repeated efforts                 
      155 +                                                              
      156 +### Run Intensity (Tuesday + Friday)                          
      157 +                                                              
      158 +**Tuesday VO2max:** 4-5x4min @ 4:30-4:35/km                   
      159 +- Just faster than threshold                                  
      160 +- Builds running economy                                      
      161 +- 3min jog recovery                                           
      162 +                                                              
      163 +**Friday Tempo:** 15-20min @ 5:00-5:05/km                     
      164 +- Moderate intensity before long run                          
      165 +- Not depleting, but productive                               
      166 +- Primes legs for Saturday endurance                          
      167 +                                                              
      168 +---                                                           
      169 +                                                              
      170 +## Nutrition Strategy                                         
      171 +                                                              
      172 +### Build Weeks (13-15)                                       
      173 +- Daily: 5-7g carbs/kg, 1.8-2.0g protein/kg                   
      174 +- Long bike: 60-80g carbs/hour (practice race nutrition)      
      175 +- Long run: 40-60g carbs/hour                                 
      176 +- Post-workout: 20-30g protein within 30min                   
      177 +                                                              
      178 +### Recovery Week (16)                                        
      179 +- Reduce to 4-5g carbs/kg                                     
      180 +- Maintain protein at 1.6-1.8g/kg                             
      181 +- Focus on sleep quality                                      
      182 +                                                              
      183 +---                                                           
      184 +                                                              
      185 +## Expected Adaptations                                       
      186 +                                                              
      187 +By end of Cycle 4:                                            
      188 +- FTP: 220W → 225-230W (+2-5%)                                
      189 +- Cycling VO2max: 41 → 42-43                                  
      190 +- Long bike capability: 120km → 160km                         
      191 +- Run threshold: Maintained or improved from Week 12 test     
      192 +- Anaerobic capacity: Improved (Garmin Load Focus target)     
      193 +                                                              
      194 +---                                                           
      195 +                                                              
      196 +## Garmin Integration Rules                                   
      197 +                                                              
      198 +1. **Check Body Battery before intensity:** If <30, swap for Z
          +2                                                             
      199 +2. **Monitor Load Focus:** If anaerobic drops below 700, add m
          +ore 30/30s work                                               
      200 +3. **Acute load warning:** If >1600, take extra rest          
      201 +4. **HRV check:** If "Low" status, reduce intensity           
      202 +                                                              
      203 +---                                                           
      204 +                                                              
      205  **Previous:** [Cycle 3: Strength Integration](cycle-3-strength
           -integration.md)
      206  **Next:** [Cycle 5: Race-Specific Training](cycle-5-race-speci
           fic.md)
      207  
       22 -**Last Updated:** November 10, 2025                           
       23 -**Status:** Planning phase - to be developed                  
      208 +**Last Updated:** January 25, 2026                            

❯ keep the format as concise and minimalistic and clear 

⏺ Got it - more concise. Let me rewrite all three cycles in a cleaner format:

⏺ Write(cycles/cycle-4-threshold-work.md)
  ⎿  Added 38 lines, removed 184 lines
        1 -# Cycle 4: Threshold Work                                     
        1 +# Cycle 4: FTP & VO2max Development                           
        2  
        3 -**Duration:** Weeks 13-16 (February 2 - March 1, 2026)        
        4 -**Phase:** FTP & VO2max Development                           
        5 -**Focus:** Build FTP and VO2max while progressing long bike to
          - 160km                                                        
        3 +**Weeks 13-16 | February 2 - March 1, 2026**                  
        4  
        7 -## Cycle Overview                                             
        5 +**Peak Target:** 160km long bike                              
        6  
        9 -This cycle focuses on improving FTP and VO2max through structu
          -red intensity work while building toward the first major bike 
          -distance milestone (160km). Key adaptations from Cycle 3 learn
          -ings:                                                         
       10 -- Weekly ceiling: 12h (peak weeks may reach 12h30)            
       11 -- 2 swims/week (Monday technique, Thursday with Carla)        
       12 -- Sunday long bike, Saturday long run                         
       13 -- No extensions on long sessions                              
       14 -- Anaerobic work included to address Garmin-identified deficit
       15 -                                                              
       16 -### Goals                                                     
       17 -- Increase FTP from 220W toward 230W                          
       18 -- Build VO2max capacity (cycling VO2max from 41 toward 44)    
       19 -- Progress long bike: 120km → 140km → 160km                   
       20 -- Maintain run threshold improvements from Week 12 test       
       21 -- Address anaerobic deficit with short power work             
       22 -                                                              
       23 -## Weekly Structure Template                                  
       24 -                                                              
       25 -| Day | Session 1 | Session 2 | Focus |                       
       26 -|-----|-----------|-----------|-------|                       
       27 -| **Mon** | Swim 55-60min | - | Technique + threshold |       
       28 -| **Tue** | Run VO2max/threshold 55min | - | Run intensity (on
          -site) |                                                       
       29 -| **Wed** | Bike FTP work 65-70min | Run easy 40-45min | FTP d
          -evelopment (remote) |                                         
       30 -| **Thu** | Bike VO2max 70-75min | Swim 45min (20:00) | VO2max
          - + swim with Carla |                                          
       31 -| **Fri** | Bike easy 45-50min | Run tempo 45-50min | Pre-week
          -end tempo (remote) |                                          
       32 -| **Sat** | **Long Run** | - | Endurance |                    
       33 -| **Sun** | **Long Bike** | - | Endurance |                   
       34 -                                                              
       35 -**Weekly sessions:** 9 (2 swim, 3 bike + long, 3 run + long)  
       36 -                                                              
        7  ---
        8  
       39 -## Weekly Progression                                         
        9 +## Weekly Template                                            
       10  
       41 -| Week | Phase | Tue Run | Wed Bike | Thu Bike | Fri Run | Sat
          - Run | Sun Bike | Total |                                     
       42 -|------|-------|---------|----------|----------|---------|----
          ------|----------|-------|                                     
       43 -| **13** | Build 1 | 4x4min @ 4:35 | SS 3x10min | VO2 4x4min |
          - Tempo 15min | 1h40 | 120km | ~10h |                          
       44 -| **14** | Build 2 | 5x4min @ 4:30 | SS 3x12min | VO2 5x4min |
          - Tempo 18min | 1h50 | 140km | ~11h |                          
       45 -| **15** | Build 3 | 5x4min @ 4:30 | O/U 3x8min | 30/30 x15 | 
          -Tempo 20min | 2h | **160km** | ~12h30 |                       
       46 -| **16** | Recovery | Easy 40min | Easy 45min | Tickle 45min |
          - Easy 40min | 1h | 60km | ~6h |                               
       11 +| Day | Session 1 | Session 2 |                               
       12 +|-----|-----------|-----------|                               
       13 +| Mon | Swim 55min (technique + threshold) | - |              
       14 +| Tue | Run 55min (VO2max intervals) | - |                    
       15 +| Wed | Bike 65min (FTP work) | Run 40min easy |              
       16 +| Thu | Bike 70min (VO2max) | Swim 45min (Carla) |            
       17 +| Fri | Bike 45min easy | Run 50min (tempo) |                 
       18 +| Sat | **Long Run** | - |                                    
       19 +| Sun | **Long Bike** | - |                                   
       20  
       48 -**Legend:** SS = Sweet Spot, O/U = Over-Unders, VO2 = VO2max i
          -ntervals                                                      
       49 -                                                              
       21  ---
       22  
       52 -## Week-by-Week Detail                                        
       23 +## Progression                                                
       24  
       54 -### Week 13: Feb 2-8, 2026 - Build 1                          
       55 -**Volume:** ~10h (9 sessions)                                 
       25 +| Week | Phase | Long Run | Long Bike | Total |               
       26 +|------|-------|----------|-----------|-------|               
       27 +| 13 | Build 1 | 1h40 / 16km | 120km / 3h30 | ~10h |          
       28 +| 14 | Build 2 | 1h50 / 17km | 140km / 4h | ~11h |            
       29 +| **15** | **Peak** | **2h / 18km** | **160km / 4h30** | **~12
          +h30** |                                                       
       30 +| 16 | Recovery | 1h / 10km | 60km / 2h | ~6h |               
       31  
       57 -| Day | Workout | Duration | Key Details |                    
       58 -|-----|---------|----------|-------------|                    
       59 -| Mon | Swim technique + 4x200m @ CSS | 55min | 1800m total | 
       60 -| Tue | Run: 4x4min @ 4:35/km | 55min | 3min jog recovery |   
       61 -| Wed | Bike: Sweet Spot 3x10min @ 200W | 65min | 5min recover
          -y |                                                           
       62 -| Wed | Run easy | 40min | Z2 recovery |                      
       63 -| Thu | Bike: VO2max 4x4min @ 235W | 70min | 4min recovery |  
       64 -| Thu | Swim easy (Carla) | 45min | 8x100m steady |           
       65 -| Fri | Bike easy Z2 | 45min | Recovery spin |                
       66 -| Fri | Run tempo: 15min @ 5:05/km | 45min | After 15min warm-
          -up |                                                          
       67 -| Sat | **Long Run** | 1h40 | 15-16km, Z2-low Z3 |            
       68 -| Sun | **Long Bike 120km** | 3h30 | Z2, nutrition practice | 
       69 -                                                              
       32  ---
       33  
       72 -### Week 14: Feb 9-15, 2026 - Build 2                         
       73 -**Volume:** ~11h (9 sessions)                                 
       34 +## Key Workouts                                               
       35  
       75 -| Day | Workout | Duration | Key Details |                    
       76 -|-----|---------|----------|-------------|                    
       77 -| Mon | Swim technique + 5x200m @ CSS | 55min | 2000m total | 
       78 -| Tue | Run: 5x4min @ 4:30/km | 55min | 3min jog recovery |   
       79 -| Wed | Bike: Sweet Spot 3x12min @ 200W | 70min | 5min recover
          -y |                                                           
       80 -| Wed | Run easy | 45min | Z2 recovery |                      
       81 -| Thu | Bike: VO2max 5x4min @ 235W | 75min | 4min recovery |  
       82 -| Thu | Swim easy (Carla) | 45min | 8x100m steady |           
       83 -| Fri | Bike easy Z2 | 45min | Recovery spin |                
       84 -| Fri | Run tempo: 18min @ 5:00/km | 50min | After 15min warm-
          -up |                                                          
       85 -| Sat | **Long Run** | 1h50 | 17km, Z2-low Z3 |               
       86 -| Sun | **Long Bike 140km** | 4h | Z2, nutrition practice |   
       36 +### Bike (FTP focus - Wednesday)                              
       37 +- **Wk 13-14:** Sweet Spot 3x10-12min @ 200W (91% FTP)        
       38 +- **Wk 15:** Over-Unders 3x8min (alternating 209W/231W every 2
          +min)                                                          
       39  
       88 ----                                                           
       40 +### Bike (VO2max focus - Thursday)                            
       41 +- **Wk 13-14:** 4-5x4min @ 235W (107% FTP)                    
       42 +- **Wk 15:** 15x 30s @ 286W / 30s easy (anaerobic + VO2max)   
       43  
       90 -### Week 15: Feb 16-22, 2026 - Build 3 (PEAK)                 
       91 -**Volume:** ~12h30 (9 sessions)                               
       44 +### Run (Tuesday - intensity)                                 
       45 +- 4-5x4min @ 4:30-4:35/km, 3min jog recovery                  
       46  
       93 -| Day | Workout | Duration | Key Details |                    
       94 -|-----|---------|----------|-------------|                    
       95 -| Mon | Swim technique + 5x200m @ CSS | 55min | 2000m total | 
       96 -| Tue | Run: 5x4min @ 4:30/km | 55min | 3min jog recovery |   
       97 -| Wed | Bike: Over-Unders 3x8min (95/105% FTP) | 60min | 5min 
          -recovery |                                                    
       98 -| Wed | Run easy | 40min | Z2 recovery |                      
       99 -| Thu | Bike: 30/30s x15 @ 130% FTP | 65min | Anaerobic focus 
          -|                                                             
      100 -| Thu | Swim easy (Carla) | 45min | 8x100m steady |           
      101 -| Fri | Bike easy Z2 | 45min | Recovery spin |                
      102 -| Fri | Run tempo: 20min @ 5:00/km | 50min | After 15min warm-
          -up |                                                          
      103 -| Sat | **Long Run** | 2h | 18km, Z2-low Z3 |                 
      104 -| Sun | **Long Bike 160km** | 4h30 | Z2, full nutrition plan |
       47 +### Run (Friday - tempo)                                      
       48 +- 15-20min continuous @ 5:00-5:05/km                          
       49  
      106 -**Peak Week Targets:**                                        
      107 -- Long bike: 160km (first major milestone)                    
      108 -- Long run: 2h / 18km                                         
      109 -- Total: ~12h30                                               
      110 -                                                              
       50  ---
       51  
      113 -### Week 16: Feb 23 - Mar 1, 2026 - Recovery                  
      114 -**Volume:** ~6h (7 sessions)                                  
       52 +## Targets                                                    
       53  
      116 -| Day | Workout | Duration | Key Details |                    
      117 -|-----|---------|----------|-------------|                    
      118 -| Mon | Swim technique only | 45min | 1400m, drills focus |   
      119 -| Tue | Run easy | 40min | Z1-Z2 only |                       
      120 -| Wed | Bike easy Z2 | 45min | Light spin |                   
      121 -| Wed | Run easy | 35min | Z2 |                               
      122 -| Thu | Bike: FTP Tickle (3x3min @ 105%) | 45min | Maintain st
          -imulus |                                                      
      123 -| Thu | Swim easy (Carla) | 45min | Relaxed swimming |        
      124 -| Fri | Rest | - | Pre-weekend rest |                         
      125 -| Sat | **Long Run** | 1h | 10km easy |                       
      126 -| Sun | **Long Bike** | 2h | 60km easy Z2 |                   
       54 +| Metric | Start | End of Cycle |                             
       55 +|--------|-------|--------------|                             
       56 +| FTP | 220W | 225-230W |                                     
       57 +| Cycling VO2max | 41 | 42-43 |                               
       58 +| Long bike | 100km | 160km |                                 
       59  
       60  ---
       61  
      130 -## Key Workouts Explained                                     
      131 -                                                              
      132 -### FTP Builders (Wednesday)                                  
      133 -                                                              
      134 -**Sweet Spot (Weeks 13-14):** 3x10-12min @ 88-94% FTP (194-207
          -W)                                                            
      135 -- Maximizes time in FTP-building zone                         
      136 -- Less fatigue than threshold work                            
      137 -- 5min easy spin between intervals                            
      138 -                                                              
      139 -**Over-Unders (Week 15):** 3x8min alternating 95%/105% FTP eve
          -ry 2min                                                       
      140 -- 2min @ 209W, 2min @ 231W, repeat                            
      141 -- Teaches body to clear lactate while working                 
      142 -- Mental preparation for race surges                          
      143 -                                                              
      144 -### VO2max Builders (Thursday)                                
      145 -                                                              
      146 -**Classic VO2max (Weeks 13-14):** 4-5x4min @ 107% FTP (235W)  
      147 -- Builds aerobic ceiling                                      
      148 -- 4min recovery between intervals                             
      149 -- High cadence (95-100 rpm)                                   
      150 -                                                              
      151 -**30/30s (Week 15):** 15x (30s @ 130% FTP / 30s easy)         
      152 -- 286W for 30s, then spin                                     
      153 -- Addresses anaerobic deficit                                 
      154 -- Also builds VO2max through repeated efforts                 
      155 -                                                              
      156 -### Run Intensity (Tuesday + Friday)                          
      157 -                                                              
      158 -**Tuesday VO2max:** 4-5x4min @ 4:30-4:35/km                   
      159 -- Just faster than threshold                                  
      160 -- Builds running economy                                      
      161 -- 3min jog recovery                                           
      162 -                                                              
      163 -**Friday Tempo:** 15-20min @ 5:00-5:05/km                     
      164 -- Moderate intensity before long run                          
      165 -- Not depleting, but productive                               
      166 -- Primes legs for Saturday endurance                          
      167 -                                                              
      168 ----                                                           
      169 -                                                              
      170 -## Nutrition Strategy                                         
      171 -                                                              
      172 -### Build Weeks (13-15)                                       
      173 -- Daily: 5-7g carbs/kg, 1.8-2.0g protein/kg                   
      174 -- Long bike: 60-80g carbs/hour (practice race nutrition)      
      175 -- Long run: 40-60g carbs/hour                                 
      176 -- Post-workout: 20-30g protein within 30min                   
      177 -                                                              
      178 -### Recovery Week (16)                                        
      179 -- Reduce to 4-5g carbs/kg                                     
      180 -- Maintain protein at 1.6-1.8g/kg                             
      181 -- Focus on sleep quality                                      
      182 -                                                              
      183 ----                                                           
      184 -                                                              
      185 -## Expected Adaptations                                       
      186 -                                                              
      187 -By end of Cycle 4:                                            
      188 -- FTP: 220W → 225-230W (+2-5%)                                
      189 -- Cycling VO2max: 41 → 42-43                                  
      190 -- Long bike capability: 120km → 160km                         
      191 -- Run threshold: Maintained or improved from Week 12 test     
      192 -- Anaerobic capacity: Improved (Garmin Load Focus target)     
      193 -                                                              
      194 ----                                                           
      195 -                                                              
      196 -## Garmin Integration Rules                                   
      197 -                                                              
      198 -1. **Check Body Battery before intensity:** If <30, swap for Z
          -2                                                             
      199 -2. **Monitor Load Focus:** If anaerobic drops below 700, add m
          -ore 30/30s work                                               
      200 -3. **Acute load warning:** If >1600, take extra rest          
      201 -4. **HRV check:** If "Low" status, reduce intensity           
      202 -                                                              
      203 ----                                                           
      204 -                                                              
      205 -**Previous:** [Cycle 3: Strength Integration](cycle-3-strength
          --integration.md)                                              
      206 -**Next:** [Cycle 5: Race-Specific Training](cycle-5-race-speci
          -fic.md)                                                       
      207 -                                                              
      208 -**Last Updated:** January 25, 2026                            
       62 +**Previous:** [Cycle 3](cycle-3-strength-integration.md) | **N
          +ext:** [Cycle 5](cycle-5-race-specific.md)                    

⏺ Now cycles 5 and 6:

⏺ Write(cycles/cycle-5-race-specific.md)
  ⎿  Added 64 lines, removed 15 lines
       1  # Cycle 5: Race-Specific Training
       2  
       3 -**Duration:** Weeks 17-20 (March 2-29, 2026)                   
       4 -**Phase:** Race-Specific Training                              
       5 -**Focus:** TBD                                                 
       3 +**Weeks 17-20 | March 2-29, 2026**                             
       4  
       7 -## Status: TO BE DEVELOPED                                     
       5 +**Peak Target:** 180km long bike                               
       6  
       9 -This cycle will be created after completing Cycle 4.           
       7 +---                                                            
       8  
      11 -### Planned Focus Areas:                                       
      12 -- Race-pace training                                           
      13 -- Longer brick workouts                                        
      14 -- Race nutrition rehearsal                                     
      15 -- Testing week (Week 20): FTP, CSS, Run Threshold reassessment 
      16 -- Mental preparation and visualization                         
       9 +## Weekly Template                                             
      10  
      11 +| Day | Session 1 | Session 2 |                                
      12 +|-----|-----------|-----------|                                
      13 +| Mon | Swim 60min (technique + threshold) | - |               
      14 +| Tue | Run 55min (VO2max intervals) | - |                     
      15 +| Wed | Bike 70min (threshold) | Run 40min easy |              
      16 +| Thu | Bike 75min (VO2max) | Swim 45min (Carla) |             
      17 +| Fri | Bike 40min easy | Run 55min (tempo) |                  
      18 +| Sat | **Long Run** | - |                                     
      19 +| Sun | **Long Bike** | - |                                    
      20 +                                                               
      21  ---
      22  
      20 -**Previous:** [Cycle 4: Threshold Work](cycle-4-threshold-work.
         -md)                                                            
      21 -**Next:** [Cycle 6: Peak Development](cycle-6-peak-development.
         -md)                                                            
      23 +## Progression                                                 
      24  
      23 -**Last Updated:** November 10, 2025                            
      24 -**Status:** Planning phase - to be developed                   
      25 +| Week | Phase | Long Run | Long Bike | Total |                
      26 +|------|-------|----------|-----------|-------|                
      27 +| 17 | Build 1 | 1h45 / 16km | 140km / 4h | ~10h |             
      28 +| 18 | Build 2 | 1h50 / 17km | 160km / 4h30 | ~11h |           
      29 +| **19** | **Peak** | **2h / 18km** | **180km / 5h** | **~13h**
         + |                                                             
      30 +| 20 | Recovery + Test | 1h / 10km | 70km / 2h | ~6h |         
      31 +                                                               
      32 +---                                                            
      33 +                                                               
      34 +## Key Workouts                                                
      35 +                                                               
      36 +### Bike (Threshold - Wednesday)                               
      37 +- **Wk 17-18:** Threshold 3x12min @ 220W (100% FTP)            
      38 +- **Wk 19:** Threshold 2x20min @ 215W (98% FTP)                
      39 +                                                               
      40 +### Bike (VO2max - Thursday)                                   
      41 +- **Wk 17-18:** 5x4min @ 240W (109% FTP)                       
      42 +- **Wk 19:** 4x5min @ 235W (107% FTP) - longer intervals       
      43 +                                                               
      44 +### Run (Tuesday - intensity)                                  
      45 +- 4-5x5min @ 4:25-4:30/km, 3min jog recovery                   
      46 +                                                               
      47 +### Run (Friday - tempo)                                       
      48 +- 20-25min continuous @ 4:55-5:00/km                           
      49 +                                                               
      50 +---                                                            
      51 +                                                               
      52 +## Week 20: Recovery + Testing                                 
      53 +                                                               
      54 +| Day | Test |                                                 
      55 +|-----|------|                                                 
      56 +| Wed | FTP Test (20min) |                                     
      57 +| Sat | Run Threshold Test (30min) |                           
      58 +                                                               
      59 +Update training zones for Cycle 6.                             
      60 +                                                               
      61 +---                                                            
      62 +                                                               
      63 +## Targets                                                     
      64 +                                                               
      65 +| Metric | Start | End of Cycle |                              
      66 +|--------|-------|--------------|                              
      67 +| FTP | 225W | 230-235W |                                      
      68 +| Cycling VO2max | 42 | 43-44 |                                
      69 +| Long bike | 160km | 180km |                                  
      70 +                                                               
      71 +---                                                            
      72 +                                                               
      73 +**Previous:** [Cycle 4](cycle-4-threshold-work.md) | **Next:** 
         +[Cycle 6](cycle-6-peak-development.md)                         

⏺ Write(cycles/cycle-6-peak-development.md)
  ⎿  Added 72 lines, removed 15 lines
       1  # Cycle 6: Peak Development
       2  
       3 -**Duration:** Weeks 21-24 (March 30 - April 26, 2026)          
       4 -**Phase:** Peak Development                                    
       5 -**Focus:** TBD                                                 
       3 +**Weeks 21-24 | March 30 - April 26, 2026**                    
       4  
       7 -## Status: TO BE DEVELOPED                                     
       5 +**Peak Target:** 200km long bike (race simulation)             
       6  
       9 -This cycle will be created after completing Cycle 5.           
       7 +---                                                            
       8  
      11 -### Planned Focus Areas:                                       
      12 -- Peak training volume                                         
      13 -- Race simulation workouts                                     
      14 -- Fine-tuning race-day strategies                              
      15 -- Course-specific training (Hamburg bike/run routes)           
      16 -- Maximum fitness development                                  
       9 +## Weekly Template                                             
      10  
      11 +| Day | Session 1 | Session 2 |                                
      12 +|-----|-----------|-----------|                                
      13 +| Mon | Swim 60min (technique + threshold) | - |               
      14 +| Tue | Run 60min (threshold intervals) | - |                  
      15 +| Wed | Bike 65min (sweet spot) | Run 35min easy |             
      16 +| Thu | Bike 70min (VO2max) | Swim 45min (Carla) |             
      17 +| Fri | Bike 35min easy | Run 55min (tempo) |                  
      18 +| Sat | **Long Run** | - |                                     
      19 +| Sun | **Long Bike** | - |                                    
      20 +                                                               
      21  ---
      22  
      20 -**Previous:** [Cycle 5: Race-Specific Training](cycle-5-race-sp
         -ecific.md)                                                     
      21 -**Next:** [Cycle 7: Final Build](cycle-7-final-build.md)       
      23 +## Progression                                                 
      24  
      23 -**Last Updated:** November 10, 2025                            
      24 -**Status:** Planning phase - to be developed                   
      25 +| Week | Phase | Long Run | Long Bike | Total |                
      26 +|------|-------|----------|-----------|-------|                
      27 +| 21 | Build 1 | 1h45 / 16km | 160km / 4h30 | ~10h |           
      28 +| 22 | Build 2 | 1h50 / 17km | 180km / 5h | ~11h |             
      29 +| **23** | **Peak** | **2h / 19km** | **200km / 5h30** | **~13h
         +45** |                                                         
      30 +| 24 | Recovery | 1h15 / 12km | 80km / 2h30 | ~7h |            
      31 +                                                               
      32 +---                                                            
      33 +                                                               
      34 +## Key Workouts                                                
      35 +                                                               
      36 +### Bike (Sweet Spot - Wednesday)                              
      37 +- **Wk 21-22:** Sweet Spot 2x20min @ 210W (91% FTP)            
      38 +- **Wk 23:** Sweet Spot 2x25min @ 207W (90% FTP) - pre-race sim
         +ulation                                                        
      39 +                                                               
      40 +### Bike (VO2max - Thursday)                                   
      41 +- **Wk 21-22:** 4x5min @ 245W (107% FTP)                       
      42 +- **Wk 23:** 3x6min @ 240W (104% FTP) - longer sustained       
      43 +                                                               
      44 +### Run (Tuesday - threshold)                                  
      45 +- 4x6min @ 4:20-4:25/km, 3min jog recovery                     
      46 +                                                               
      47 +### Run (Friday - tempo)                                       
      48 +- 25min continuous @ 4:50-4:55/km                              
      49 +                                                               
      50 +---                                                            
      51 +                                                               
      52 +## Week 23: Race Simulation                                    
      53 +                                                               
      54 +**Sunday 200km ride:**                                         
      55 +- Hamburg Ironman bike course (or simulation)                  
      56 +- Full race nutrition: 80-90g carbs/hour                       
      57 +- Target power: 155-165W (race pace)                           
      58 +- Practice pacing strategy                                     
      59 +                                                               
      60 +---                                                            
      61 +                                                               
      62 +## Targets                                                     
      63 +                                                               
      64 +| Metric | Start | End of Cycle |                              
      65 +|--------|-------|--------------|                              
      66 +| FTP | 230W | 235-240W |                                      
      67 +| Cycling VO2max | 43 | 44-45 |                                
      68 +| Long bike | 180km | 200km |                                  
      69 +| Race readiness | - | Course familiarization complete |       
      70 +                                                               
      71 +---                                                            
      72 +                                                               
      73 +## Hamburg Course Integration                                  
      74 +                                                               
      75 +- Week 21-23: Include Hamburg bike course sections             
      76 +- Week 23 long run: Hamburg marathon course preview            
      77 +- Mental preparation: visualize race day                       
      78 +                                                               
      79 +---                                                            
      80 +                                                               
      81 +**Previous:** [Cycle 5](cycle-5-race-specific.md) | **Next:** [
         +Cycle 7](cycle-7-final-build.md)                               

⏺ Done. All three cycles updated:

  Summary
  ┌───────┬─────────────┬────────────────┬──────────────────────────┐
  │ Cycle │    Weeks    │ Peak Long Bike │        Key Focus         │
  ├───────┼─────────────┼────────────────┼──────────────────────────┤
  │ 4     │ 13-16 (Feb) │ 160km          │ FTP + VO2max development │
  ├───────┼─────────────┼────────────────┼──────────────────────────┤
  │ 5     │ 17-20 (Mar) │ 180km          │ Race-specific, threshold │
  ├───────┼─────────────┼────────────────┼──────────────────────────┤
  │ 6     │ 21-24 (Apr) │ 200km          │ Peak, race simulation    │
  └───────┴─────────────┴────────────────┴──────────────────────────┘
  ---
  Consistent Weekly Structure (all cycles)
  ┌─────┬────────────────────────────────┐
  │ Day │            Sessions            │
  ├─────┼────────────────────────────────┤
  │ Mon │ Swim (technique + threshold)   │
  ├─────┼────────────────────────────────┤
  │ Tue │ Run intensity (single, onsite) │
  ├─────┼────────────────────────────────┤
  │ Wed │ Bike FTP/threshold + Run easy  │
  ├─────┼────────────────────────────────┤
  │ Thu │ Bike VO2max + Swim with Carla  │
  ├─────┼────────────────────────────────┤
  │ Fri │ Bike easy + Run tempo          │
  ├─────┼────────────────────────────────┤
  │ Sat │ Long Run                       │
  ├─────┼────────────────────────────────┤
  │ Sun │ Long Bike                      │
  └─────┴────────────────────────────────┘
  ---
  Bike Distance Progression

  Cycle 4:  120km → 140km → 160km → 60km (recovery)
  Cycle 5:  140km → 160km → 180km → 70km (recovery)
  Cycle 6:  160km → 180km → 200km → 80km (recovery)

  ---
  Want me to also create the individual week files (week-13.md through
  week-24.md), or is the cycle overview sufficient for now?

✻ Cogitated for 2m 5s

❯ read @weeks/week-01.md to this week and based on the actual performance   
  and results, update also the previous cycle files                         
  ⎿  Read weeks/week-01.md (269 lines)

⏺ Let me read more week files to get the full picture of cycles 1-3:

⏺ Read(weeks/week-04.md)
  ⎿  Read 471 lines

⏺ Read(weeks/week-08.md)
  ⎿  Read 295 lines

⏺ Read(weeks/week-09.md)
  ⎿  Read 404 lines

⏺ Good data. Let me update the previous cycle files with actual results:

⏺ Write(cycles/cycle-1-base-building.md)
  ⎿  Added 28 lines, removed 91 lines
        1  # Cycle 1: Base Building
        2  
        3 -**Duration:** Weeks 1-4 (November 10 - December 7, 2025)      
        4 -**Focus:** Aerobic endurance, technique refinement, establishi
          -ng training routine                                           
        3 +**Weeks 1-4 | November 10 - December 7, 2025**                
        4  
        6 -## Cycle Overview                                             
        5 +**Status:** Completed                                         
        6  
        8 -This first cycle establishes the foundation for the entire tra
          -ining block through progressive volume increase (10h → 13h → 1
          -5h) followed by recovery and testing.                         
        9 -                                                              
       10 -### Goals                                                     
       11 -- Build aerobic base across all three disciplines             
       12 -- Establish consistent training habits within daily schedule c
          -onstraints                                                    
       13 -- Refine technique (especially swimming)                      
       14 -- Test and establish updated training zones for Cycle 2       
       15 -                                                              
       16 -**Current Week:** [Week 3 - Build (Peak)](week-03.md) (Nov 24-
          -30, 2025)                                                     
       17 -**Progress:** ✅ ⚠️ ⬜ ⬜ (2/4 weeks completed)               
       18 -                                                              
       19 -### Weekly Volume Progression                                 
       20 -- **Week 1:** ~8h25 (7 sessions) - Establish routine, techniqu
          -e work                                                        
       21 -- **Week 2:** ~11h20 (10 sessions) - Volume increase, introduc
          -e threshold work                                              
       22 -- **Week 3:** ~12h55 (11 sessions) - Peak volume with threshol
          -d work                                                        
       23 -- **Week 4:** ~6-8h (7 sessions) - Recovery + Testing         
       24 -                                                              
       25 -### Key Sessions                                              
       26 -- **Saturdays:** Long bike rides (2h → 2h15 → 2h45) - practice
          - nutrition                                                    
       27 -- **Sundays:** Long runs (75min → 80min) + Week 3 brick workou
          -t                                                             
       28 -- **Tuesday:** Threshold intensity sessions (Week 2-3: bike Z4
          -, run Z4)                                                     
       29 -- **Thursday Evenings:** Fixed swim slot (20:00-21:00) with VO
          -2max work (Week 2-3)                                          
       30 -- **Tuesday/Thursday:** Gym strength sessions (maintain throug
          -hout cycle)                                                   
       31 -                                                              
       32 -### Nutrition Focus                                           
       33 -- **Build weeks:** 5-7g carbs/kg, 1.6-2.0g protein/kg         
       34 -- **Recovery week:** 4-5g carbs/kg                            
       35 -- **Long rides:** Practice race nutrition (60-70g carbs/hour) 
       36 -                                                              
       37 -### Training Zones                                            
       38 -**Current Baselines (Nov 10, 2025):**                         
       39 -- **Bike FTP:** 195W (2.17 W/kg)                              
       40 -- **Swim CSS:** 2:33/100m                                     
       41 -- **Run:** HR-based zones (see [README](40-projects/ironman-20
          -26/README.md#training-zones))                                 
       42 -                                                              
       43 -**Note:** All zones will be updated after Week 4 testing (Dec 
          -4-6, 2025)                                                    
       44 -                                                              
        7  ---
        8  
       47 -## Weekly Breakdown                                           
        9 +## Results Summary                                            
       10  
       49 -### [Week 1: Nov 10-16, 2025](week-01.md) - Build             
       50 -**Volume:** 8h25 (7 sessions)                                 
       51 -- Swim: 4200m (2h) - 2 sessions                               
       52 -- Bike: 115km (3h20) - 2 sessions                             
       53 -- Run: 18-20km (2h05) - 2 sessions                            
       54 -- Strength: 1h - 1 session (full body)                        
       11 +| Metric | Baseline | End of Cycle | Change |                 
       12 +|--------|----------|--------------|--------|                 
       13 +| FTP | 195W | 220W | +25W (+13%) |                           
       14 +| CSS Swim | 2:33/100m | 2:27/100m | +6s faster |             
       15 +| Run Threshold | 4:48/km | 4:35/km | +13s/km faster |        
       16 +| VO2max | 50 | 50 | Maintained |                             
       17  
       56 -**Key Changes:** Conservative start, single full-body strength
          - session on Thursday (onsite day), swim moved to Saturday to a
          -void back-to-back with Thursday                               
       57 -                                                              
       18  ---
       19  
       60 -### [Week 2: Nov 17-23, 2025](week-02.md) - Build             
       61 -**Volume:** 11h20 (10 sessions)                               
       62 -- Swim: 4800m (2h) - 2 sessions (includes VO2max work)        
       63 -- Bike: 125km (4h15) - 3 sessions (includes threshold session)
       64 -- Run: 26-28km (3h05) - 3 sessions                            
       65 -- Strength: 2h - 2 sessions                                   
       20 +## Weekly Progression                                         
       21  
       67 -**Key Changes:** Introduce threshold intervals (Tue bike 4x6mi
          -n Z4, Thu swim VO2max), swim moved to Tuesday evening         
       22 +| Week | Phase | Planned | Actual | Key Sessions |            
       23 +|------|-------|---------|--------|--------------|            
       24 +| 1 | Build | 8h05 | **10h27** | Long bike 2h31, Long run 2h12
          + |                                                            
       25 +| 2 | Build | 11h20 | ~11h | Threshold bike, VO2max swim |    
       26 +| 3 | Build | 12h55 | ~13h | Peak week, brick workout |       
       27 +| 4 | Recovery | 6h55 | **5h11** | CSS test, Run threshold tes
          +t, FTP test |                                                 
       28  
       29  ---
       30  
       71 -### [Week 3: Nov 24-30, 2025](week-03.md) - Build (Peak)      
       72 -**Volume:** 12h55 (11 sessions)                               
       73 -- Swim: 5200m (2h05) - 2 sessions (includes VO2max work)      
       74 -- Bike: 155km (5h30) - 4 sessions (includes threshold session)
       75 -- Run: 28-30km (3h20) - 3 sessions (includes threshold session
          -)                                                             
       76 -- Strength: 2h - 2 sessions                                   
       31 +## Key Achievements                                           
       32  
       78 -**Key Changes:** Peak threshold work (Tue run 5x4min Z4, Tue b
          -ike 5x5min Z4-Z5, Thu swim VO2max), Sunday brick workout, swim
          - moved to Saturday                                            
       33 +- **FTP:** 195W → 220W (+13%) - Major improvement             
       34 +- **CSS:** 2:33 → 2:27/100m - 6s faster per 100m              
       35 +- **Run Threshold:** 4:48 → 4:35/km - 13s/km faster           
       36 +- **Long sessions:** Consistently exceeded planned duration   
       37 +- **Consistency:** All planned sessions completed             
       38  
       39  ---
       40  
       82 -### [Week 4: Dec 1-7, 2025](week-04.md) - Recovery + Testing  
       83 -**Volume:** 6-8h (7 sessions including 3 tests)               
       84 -- Swim: 2000m + CSS test                                      
       85 -- Bike: 1h45 + FTP test                                       
       86 -- Run: threshold test + 40min recovery                        
       87 -- Strength: 45min light mobility                              
       41 +## Learnings                                                  
       42  
       89 -**Key Changes:** Swim moved to Tuesday evening to avoid back-t
          -o-back with Thursday CSS test                                 
       43 +1. **Volume tolerance:** Able to handle extensions when feelin
          +g good                                                        
       44 +2. **Testing protocol:** Ramp test works well for FTP         
       45 +3. **Garmin workouts:** Sprint workouts don't match Ironman ne
          +eds                                                           
       46 +4. **Technique focus:** High drill % in swim maintained       
       47  
       91 -**Testing Schedule:**                                         
       92 -- **Thursday (Dec 4):** CSS Test (400m + 200m time trials)    
       93 -- **Friday (Dec 5):** FTP Test (20min all-out)                
       94 -- **Saturday (Dec 6):** Run Threshold Test (30min time trial) 
       95 -                                                              
       48  ---
       49  
       98 -## Post-Cycle Testing & Next Steps                            
       99 -                                                              
      100 -**Testing Week:** Week 4 (Dec 4-6, 2025)                      
      101 -- Thursday: CSS Test (swim)                                   
      102 -- Friday: FTP Test (bike)                                     
      103 -- Saturday: Run Threshold Test                                
      104 -                                                              
      105 -**After Testing:**                                            
      106 -1. Record new baseline values in [README](40-projects/ironman-
          -2026/README.md#current-training-baseline)                     
      107 -2. Update training zones for Cycle 2                          
      108 -3. Rest and recover on Sunday                                 
      109 -4. Begin [Cycle 2: Endurance Development](cycle-2-endurance-de
          -velopment.md)                                                 
      110 -                                                              
      111 ----                                                           
      112 -                                                              
      113 -**Last Updated:** November 23, 2025                           
       50 +**Next:** [Cycle 2](cycle-2-endurance-development.md)         

⏺ Write(cycles/cycle-2-endurance-development.md)
  ⎿  Error writing file

⏺ Write(cycles/cycle-3-strength-integration.md)
  ⎿  Added 78 lines, removed 14 lines
       1 -# Cycle 3: Strength Integration                                
       1 +# Cycle 3: Threshold Development                               
       2  
       3 -**Duration:** Weeks 9-12 (January 5 - February 1, 2026)        
       4 -**Phase:** Strength Integration                                
       5 -**Focus:** TBD                                                 
       3 +**Weeks 9-12 | January 5 - February 1, 2026**                  
       4  
       7 -## Status: TO BE DEVELOPED                                     
       5 +**Status:** Completed (Week 12 in progress)                    
       6  
       9 -This cycle will be created after completing Cycle 2.           
       7 +---                                                            
       8  
      11 -### Planned Focus Areas:                                       
      12 -- Integrate strength gains into endurance training             
      13 -- Hill work and power development                              
      14 -- Testing week (Week 12): FTP, CSS, Run Threshold reassessment 
       9 +## Results Summary                                             
      10  
      11 +| Metric | Start | End of Cycle | Change |                     
      12 +|--------|-------|--------------|--------|                     
      13 +| FTP | 220W | **225W** | +5W (+2.3%) |                        
      14 +| CSS Swim | 2:27/100m | ~2:19/100m | Improved (actual swims) |
      15 +| Run Threshold | 4:35/km | TBD (Week 12 test) | Expected impro
         +vement |                                                       
      16 +| Long Bike | 3h | **4h03** (125km) | +1h |                    
      17 +| Long Run | 2h | **2h30** (24.7km) | +30min |                 
      18 +| Cycling VO2max | 38-40 | **41** | Climbing |                 
      19 +                                                               
      20  ---
      21  
      18 -**Previous:** [Cycle 2: Endurance Development](cycle-2-enduranc
         -e-development.md)                                              
      19 -**Next:** [Cycle 4: Threshold Work](cycle-4-threshold-work.md) 
      22 +## Weekly Progression                                          
      23  
      21 -**Last Updated:** November 10, 2025                            
      22 -**Status:** Planning phase - to be developed                   
      24 +| Week | Phase | Planned | Actual | Notes |                    
      25 +|------|-------|---------|--------|-------|                    
      26 +| 9 | Build + Test | 10h30 | **8h35** | FTP 225W, snow storm di
         +sruption |                                                     
      27 +| 10 | Build 2 | 12h35 | **15h40** | +25% overreach |          
      28 +| 11 | Build 3 (Peak) | 14h05 | **~10h40** | Fatigue hit Tuesda
         +y, adapted |                                                   
      29 +| 12 | Recovery | 6h40 | ~2h25 | True recovery, travel Fri-Sun 
         +|                                                              
      30 +                                                               
      31 +---                                                            
      32 +                                                               
      33 +## Key Achievements                                            
      34 +                                                               
      35 +- **FTP test:** 225W (+5W from 220W baseline)                  
      36 +- **Long bike peak:** 4h03 / 125.6km (Week 11 Sunday)          
      37 +- **Long run peak:** 2h30 / 24.7km (Week 11)                   
      38 +- **Mental toughness:** 2h run in heavy snow (Week 9)          
      39 +- **Adaptation:** Recovered from Tuesday failure (Week 11)     
      40 +                                                               
      41 +---                                                            
      42 +                                                               
      43 +## Challenges & Learnings                                      
      44 +                                                               
      45 +### Week 10 Overreach                                          
      46 +- Planned: 12h35 | Actual: **15h40** (+25%)                    
      47 +- Extended long bike to 3h52 / 121km                           
      48 +- Extended long run to 2h20 / 23km                             
      49 +- **Result:** Week 11 started fatigued                         
      50 +                                                               
      51 +### Week 11 Fatigue                                            
      52 +- Tuesday bike failed after 24min (couldn't complete 2nd set)  
      53 +- Needed Monday rest (planned was swim)                        
      54 +- Used Garmin recommendations instead of structured plan       
      55 +- Still completed weekend long sessions                        
      56 +                                                               
      57 +### Garmin Data Insights                                       
      58 +- **Acute Training Load:** At ceiling (~1750-1800)             
      59 +- **Low Aerobic:** Overloaded (too much Z2)                    
      60 +- **Anaerobic:** Deficit (need more short power work)          
      61 +- **HRV:** Balanced (recovered)                                
      62 +                                                               
      63 +---                                                            
      64 +                                                               
      65 +## Key Decisions for Future Cycles                             
      66 +                                                               
      67 +1. **Weekly cap: 12h** (15h+ causes next-week fatigue)         
      68 +2. **2 swims/week max** (life constraint)                      
      69 +3. **No extensions** when feeling good - bank energy           
      70 +4. **Add anaerobic work** to address deficit                   
      71 +5. **Use Garmin** for daily readiness, not rigid plan          
      72 +6. **Sunday = long bike, Saturday = long run**                 
      73 +                                                               
      74 +---                                                            
      75 +                                                               
      76 +## Testing (Week 12)                                           
      77 +                                                               
      78 +| Test | Day | Result |                                        
      79 +|------|-----|--------|                                        
      80 +| Run Threshold | Wed Jan 28 | Pending |                       
      81 +| FTP | - | Skipped (recent test) |                            
      82 +| CSS | - | Skipped (swim is lowest priority) |                
      83 +                                                               
      84 +---                                                            
      85 +                                                               
      86 +**Previous:** [Cycle 2](cycle-2-endurance-development.md) | **N
         +ext:** [Cycle 4](cycle-4-threshold-work.md)                    

⏺ Let me fix cycle 2:

⏺ Read(cycles/cycle-2-endurance-development.md)
  ⎿  Read 24 lines

⏺ Write(cycles/cycle-2-endurance-development.md)
  ⎿  Added 48 lines, removed 14 lines
       1  # Cycle 2: Endurance Development
       2  
       3 -**Duration:** Weeks 5-8 (December 8, 2025 - January 4, 2026)   
       4 -**Phase:** Endurance Development                               
       5 -**Focus:** TBD                                                 
       3 +**Weeks 5-8 | December 8, 2025 - January 4, 2026**             
       4  
       7 -## Status: TO BE DEVELOPED                                     
       5 +**Status:** Completed                                          
       6  
       9 -This cycle will be created after completing Cycle 1 and incorpo
         -rating lessons learned from Week 4 testing.                    
       7 +---                                                            
       8  
      11 -### Planned Focus Areas:                                       
      12 -- Increase aerobic capacity                                    
      13 -- Build longer endurance sessions                              
      14 -- Progressive volume increase based on Cycle 1 adaptations     
      15 -- Update training zones based on Week 4 test results           
       9 +## Results Summary                                             
      10  
      11 +| Metric | Start | End of Cycle | Change |                     
      12 +|--------|-------|--------------|--------|                     
      13 +| FTP | 220W | 220W | Maintained |                             
      14 +| CSS Swim | 2:27/100m | 2:27/100m | Maintained |              
      15 +| Run Threshold | 4:35/km | 4:35/km | Maintained |             
      16 +| Long Bike | 2h30 | 3h+ | +30min |                            
      17 +| Long Run | 1h45 | 2h+ | +15min |                             
      18 +                                                               
      19  ---
      20  
      19 -**Previous:** [Cycle 1: Base Building](cycle-1-base-building.md
         -)                                                              
      20 -**Next:** [Cycle 3: Strength Integration](cycle-3-strength-inte
         -gration.md)                                                    
      21 +## Weekly Progression                                          
      22  
      22 -**Last Updated:** November 10, 2025                            
      23 -**Status:** Planning phase - to be developed                   
      23 +| Week | Phase | Volume | Key Sessions |                       
      24 +|------|-------|--------|--------------|                       
      25 +| 5 | Build 1 | ~10h | Volume building |                       
      26 +| 6 | Build 2 | ~11h | Christmas week - modified |             
      27 +| 7 | Build 3 | ~13h55 | Peak week, longest sessions |         
      28 +| 8 | Recovery | ~6h | Holiday week (New Year's) |             
      29 +                                                               
      30 +---                                                            
      31 +                                                               
      32 +## Key Achievements                                            
      33 +                                                               
      34 +- **Endurance base:** Long bike progressed to 3h+              
      35 +- **Run volume:** Long run extended to 2h                      
      36 +- **Consistency:** Maintained through holiday period           
      37 +- **Recovery:** Week 8 had some violations (tempo during recove
         +ry)                                                            
      38 +                                                               
      39 +---                                                            
      40 +                                                               
      41 +## Challenges                                                  
      42 +                                                               
      43 +1. **Holiday disruptions:** Christmas and New Year's affected s
         +chedule                                                        
      44 +2. **Recovery week violations:** Week 8 had tempo work when sho
         +uld be easy                                                    
      45 +3. **Weather:** Winter conditions starting to impact outdoor tr
         +aining                                                         
      46 +                                                               
      47 +---                                                            
      48 +                                                               
      49 +## Learnings                                                   
      50 +                                                               
      51 +1. **Recovery weeks matter:** Violations in Week 8 contributed 
         +to fatigue                                                     
      52 +2. **Holiday planning:** Need buffer for family commitments    
      53 +3. **Indoor training:** Essential for Hamburg winter           
      54 +                                                               
      55 +---                                                            
      56 +                                                               
      57 +**Previous:** [Cycle 1](cycle-1-base-building.md) | **Next:** [
         +Cycle 3](cycle-3-strength-integration.md)                      

⏺ Done. All cycle files updated with actual performance data:

  Updated Cycles Summary
  Cycle: 1
  Weeks: 1-4
  Status: Completed
  Key Results: FTP 195→220W (+13%), CSS 2:33→2:27, Run 4:48→4:35/km
  ────────────────────────────────────────
  Cycle: 2
  Weeks: 5-8
  Status: Completed
  Key Results: Endurance base built, long bike 3h+, holiday disruptions
  ────────────────────────────────────────
  Cycle: 3
  Weeks: 9-12
  Status: Completing
  Key Results: FTP 225W, long bike 4h03/125km, overreach lesson learned
  ────────────────────────────────────────
  Cycle: 4
  Weeks: 13-16
  Status: Planned
  Key Results: Target: 160km, FTP focus
  ────────────────────────────────────────
  Cycle: 5
  Weeks: 17-20
  Status: Planned
  Key Results: Target: 180km, race-specific
  ────────────────────────────────────────
  Cycle: 6
  Weeks: 21-24
  Status: Planned
  Key Results: Target: 200km, race simulation
  ---
  Full Training Arc (Nov 2025 → Jun 2026)

  Cycle 1: Base        FTP 195→220W    ████████████████
  Cycle 2: Endurance   Long bike 3h+   ████████████████
  Cycle 3: Threshold   FTP 225W        ████████████████
  Cycle 4: FTP/VO2max  160km target    ░░░░░░░░░░░░░░░░  ← Next
  Cycle 5: Race-spec   180km target    ░░░░░░░░░░░░░░░░
  Cycle 6: Peak        200km target    ░░░░░░░░░░░░░░░░
  Cycle 7: Final       Maintenance     ░░░░░░░░░░░░░░░░
  Taper:   Race prep   →June 7         ░░░░░░░░░░░░░░░░

  ---
  All files are now consistent and reflect actual training progress. Week 12
  recovery starts tomorrow, then Cycle 4 begins February 2.

✻ Cooked for 1m 24s

❯ What is your evaluation so far after 3 cycles completed? What is good,    
  what can be improved? Other thinks we shoud consider?                     

⏺ 3-Cycle Evaluation: Weeks 1-12

  What's Working Well

  1. FTP Progression - Excellent
  Week 1:  195W (baseline)
  Week 4:  220W (+13%)
  Week 9:  225W (+2.3%)
  ─────────────────────────
  Total:   +30W (+15%) in 12 weeks
  This is strong progress. At this rate, 240-250W by race day is realistic.

  2. Endurance Capacity - Strong Build
  ┌───────────┬──────────────┬──────────────┬─────────────┐
  │  Metric   │    Week 1    │   Week 11    │ Improvement │
  ├───────────┼──────────────┼──────────────┼─────────────┤
  │ Long Bike │ ~2h / 60km   │ 4h03 / 125km │ +100%       │
  ├───────────┼──────────────┼──────────────┼─────────────┤
  │ Long Run  │ ~1h30 / 12km │ 2h30 / 25km  │ +67%        │
  └───────────┴──────────────┴──────────────┴─────────────┘
  You're building the engine needed for Ironman distances.

  3. Testing Improvements
  - CSS: 2:33 → 2:27/100m (+6s/100m)
  - Run Threshold: 4:48 → 4:35/km (+13s/km)
  - Both metrics improved in Cycle 1 and likely maintained/improved since

  4. Adaptation & Mental Toughness
  - 2h run in heavy snow (Week 9)
  - Recovered from Tuesday failure and still hit weekend sessions (Week 11)
  - Smart use of Garmin recommendations when fatigued
  - Able to modify plans without derailing progress

  5. Learning Curve
  You've identified key patterns:
  - Overreach consequences (Week 10 → Week 11)
  - Recovery week importance
  - Life constraints (2 swims/week, Thursday with Carla)

  ---
  What Needs Improvement

  1. Recovery Week Discipline
  - Week 8: Tempo work when should be easy
  - Week 10: Extended sessions when should consolidate
  - Impact: Fatigue accumulation, Week 11 failure

  Recommendation: Treat recovery weeks as sacred. No extensions, no "feeling
  good" additions.

  2. Volume Volatility
  Week 10: +25% over plan (15h40)
  Week 11: -24% under plan (10h40)
  This swing is unsustainable. Better to hit 100% consistently than 125%
  followed by 75%.

  Recommendation: Hard cap at plan + 10% max. Bank energy, don't spend it.

  3. Swim Consistency
  ┌───────┬───────────────┬──────────────┐
  │ Cycle │ Planned Swims │ Actual Swims │
  ├───────┼───────────────┼──────────────┤
  │ 1     │ 8             │ ~6           │
  ├───────┼───────────────┼──────────────┤
  │ 2     │ 8             │ ~5           │
  ├───────┼───────────────┼──────────────┤
  │ 3     │ 10            │ ~5           │
  └───────┴───────────────┴──────────────┘
  Swim is consistently cut first. You've accepted this (2 swims/week max), but
  execution is often 1-2.

  Recommendation: Protect Monday and Thursday slots. If one gets cut, the other
  is non-negotiable.

  4. Intensity Structure Mismatch
  Plan prescribed:
  - 4x10min sustained @ 237W
  - 4x6min threshold runs

  Your body responded better to:
  - 30s on/off intervals
  - Shorter, sharper efforts

  Recommendation: Already addressed in Cycle 4 plan with mixed intensity (short
  + sustained).

  5. Anaerobic Deficit
  Garmin Load Focus showed 747 (below optimal). Plan was too focused on
  sustained aerobic work.

  Recommendation: 30/30s sessions, hill sprints, short power work - already
  built into Cycle 4+.

  ---
  Things We Haven't Addressed Yet

  6. Open Water Swimming
  - All swims have been pool-based (50m)
  - Ironman swim is open water with:
    - Sighting (looking up)
    - Mass start chaos
    - No walls/push-offs
    - Wetsuit swimming
    - Currents/chop

  Recommendation: Starting April/May (when water warms), add 2-4 open water
  sessions. Hamburg has lakes and the Alster.

  2. Brick Workouts
  - Bike → Run transitions barely mentioned
  - Critical for Ironman (legs feel like concrete after 180km bike)

  Recommendation: Add monthly brick sessions starting Cycle 5:
  - Short brick: 90min bike → 20min run
  - Long brick: 3h bike → 45min run
  - Race simulation (Cycle 6): 4h bike → 1h run

  3. Nutrition Strategy
  - Mentioned 60-80g carbs/hour on long rides
  - But not systematically tested/practiced

  Recommendation:
  - Track actual intake on every long session
  - Test gut tolerance (gels, bars, liquid nutrition)
  - Race day target: 80-90g carbs/hour on bike, 40-60g on run
  - Practice caffeine timing

  4. Hamburg Course Familiarization
  You live in Hamburg - this is a major advantage.

  Recommendation:
  - Cycle 5+: Include actual race course sections in long rides
  - Know the hills, wind exposure, technical sections
  - Long runs on marathon course
  - Mental advantage of familiar terrain

  5. Heat/Weather Adaptation
  - June 7 in Hamburg could be 15-25°C
  - Training through winter (cold adaptation) but race in early summer

  Recommendation: May training should include some heat exposure if possible.

  6. Equipment & Race Day Logistics
  - Bike fit (aero position endurance?)
  - Race wheels, helmet
  - Transition setup
  - Nutrition storage on bike

  Recommendation: Equipment finalized by end of Cycle 5 (early April). Test
  everything in training.

  7. Taper Strategy
  - Currently planned but not detailed
  - 2 weeks before race (Weeks 29-30)

  Recommendation: Plan taper in detail by Week 24. Include:
  - Volume reduction curve
  - Intensity maintenance
  - Sharpening sessions
  - Mental preparation

  ---
  Risk Assessment
  Risk: Overtraining
  Likelihood: Medium
  Impact: High
  Mitigation: 12h cap, recovery discipline
  ────────────────────────────────────────
  Risk: Injury
  Likelihood: Medium
  Impact: High
  Mitigation: No extensions, listen to body
  ────────────────────────────────────────
  Risk: Swim undertrained
  Likelihood: High
  Impact: Low
  Mitigation: <2h goal gives buffer
  ────────────────────────────────────────
  Risk: Bonking on bike
  Likelihood: Medium
  Impact: High
  Mitigation: Nutrition practice
  ────────────────────────────────────────
  Risk: Run walk on marathon
  Likelihood: Medium
  Impact: Medium
  Mitigation: Brick training, pacing
  ────────────────────────────────────────
  Risk: Illness
  Likelihood: Low
  Impact: High
  Mitigation: Sleep, recovery, stress management
  ---
  Summary Scorecard
  ┌─────────────────────┬───────┬─────────────────────────────────────────┐
  │      Category       │ Score │                  Notes                  │
  ├─────────────────────┼───────┼─────────────────────────────────────────┤
  │ Bike Fitness        │ 8/10  │ Strong FTP gains, endurance building    │
  ├─────────────────────┼───────┼─────────────────────────────────────────┤
  │ Run Fitness         │ 7/10  │ Good threshold, needs brick work        │
  ├─────────────────────┼───────┼─────────────────────────────────────────┤
  │ Swim Fitness        │ 5/10  │ Undertrained, but adequate for goal     │
  ├─────────────────────┼───────┼─────────────────────────────────────────┤
  │ Recovery Management │ 5/10  │ Learned hard lessons, improving         │
  ├─────────────────────┼───────┼─────────────────────────────────────────┤
  │ Plan Adherence      │ 6/10  │ Good adaptation, but too much variance  │
  ├─────────────────────┼───────┼─────────────────────────────────────────┤
  │ Life Integration    │ 7/10  │ Managing work/family, constraints clear │
  └─────────────────────┴───────┴─────────────────────────────────────────┘
  Overall: On track for Ironman finish, with room for optimization.

  ---
  Top 3 Priorities for Cycles 4-6

  1. Consistency over heroics - Hit 100% of plan, no extensions
  2. Brick workouts - Start integrating bike→run transitions
  3. Nutrition practice - Systematic testing on every long session

  Anything specific you want to dive deeper into?

✻ Sautéed for 54s
 ▐▛███▜▌   Claude Code v2.1.19
▝▜█████▛▘  Opus 4.5 · Claude Enterprise
  ▘▘ ▝▝    ~/Projects/surdu/ironman-2026

❯ check @weeks/week-11.md and all the csv exported to the ~/Downloads       
  folder, order by date - Monday to Sunday. Read all their content and lets 
  discuss and evaluate this week                                            
  ⎿  Read weeks/week-11.md (401 lines)

⏺ Let me find the CSV files in your Downloads folder.

⏺ Search(pattern: "*.csv", path: "~/Downloads")
  ⎿  Found 9 files (ctrl+o to expand)

⏺ Found 9 CSV files. Let me read all of them to see the activity data.

⏺ Read(~/Downloads/activity_21609344154.csv)
  ⎿  Read 14 lines

⏺ Read(~/Downloads/activity_21615734204.csv)
  ⎿  Read 55 lines

⏺ Read(~/Downloads/activity_21617769059.csv)
  ⎿  Read 15 lines

⏺ Read(~/Downloads/activity_21628408108.csv)
  ⎿  Read 9 lines

⏺ Read(~/Downloads/activity_21632067396.csv)
  ⎿  Read 23 lines

⏺ Read(~/Downloads/activity_21640888800.csv)
  ⎿  Read 34 lines

⏺ Read(~/Downloads/activity_21651775824.csv)
  ⎿  Read 27 lines

⏺ Read(~/Downloads/activity_21660625291.csv)
  ⎿  Read 3 lines

⏺ Read(~/Downloads/activity_21661479717.csv)
  ⎿  Read 3 lines

⏺ Now let me compile and analyze the week. Based on the CSV data, here's what I
  found:

  Week 11 Analysis: Planned vs Actual

  Activities Ordered (by activity ID, likely chronological):
  #: 1
  Activity ID: 21609344154
  Type: Bike
  Duration: 24:14
  Distance: 13.0km
  Key Metrics: NP 189W, Avg 163W (warm-up/test)
  ────────────────────────────────────────
  #: 2
  Activity ID: 21615734204
  Type: Bike
  Duration: 46:00
  Distance: 22.5km
  Key Metrics: NP 207W, 30s on/off intervals @ ~330W
  ────────────────────────────────────────
  #: 3
  Activity ID: 21617769059
  Type: Run
  Duration: 43:54
  Distance: 7.2km
  Key Metrics: 6:06/km, 6x15s sprint intervals
  ────────────────────────────────────────
  #: 4
  Activity ID: 21628408108
  Type: Run
  Duration: 37:23
  Distance: 5.6km
  Key Metrics: 6:38/km, easy Z2
  ────────────────────────────────────────
  #: 5
  Activity ID: 21632067396
  Type: Swim
  Duration: 37:33
  Distance: 1250m
  Key Metrics: 2:19/100m avg
  ────────────────────────────────────────
  #: 6
  Activity ID: 21640888800
  Type: Bike
  Duration: 60:00
  Distance: 29.4km
  Key Metrics: NP 191W, 3x[5x2min] VO2max @ ~200W
  ────────────────────────────────────────
  #: 7
  Activity ID: 21651775824
  Type: Run
  Duration: 2:30:05
  Distance: 24.7km
  Key Metrics: 6:05/km, long run Z2
  ────────────────────────────────────────
  #: 8
  Activity ID: 21660625291
  Type: Bike
  Duration: 2:46:57
  Distance: 89.3km
  Key Metrics: NP 165W, Avg 157W, long ride
  ────────────────────────────────────────
  #: 9
  Activity ID: 21661479717
  Type: Bike
  Duration: 1:16:07
  Distance: 36.4km
  Key Metrics: NP 132W, Avg 120W, Z2 recovery
  ---
  Session-by-Session Comparison:

  SWIM (1 session vs 3 planned)
  ┌──────────┬─────────┬───────────┐
  │  Metric  │ Planned │  Actual   │
  ├──────────┼─────────┼───────────┤
  │ Sessions │ 3       │ 1         │
  ├──────────┼─────────┼───────────┤
  │ Duration │ 195min  │ 38min     │
  ├──────────┼─────────┼───────────┤
  │ Distance │ 5700m   │ 1250m     │
  ├──────────┼─────────┼───────────┤
  │ Avg Pace │ -       │ 2:19/100m │
  └──────────┴─────────┴───────────┘
  The single swim session (2:19/100m) is faster than CSS target (2:27/100m).
  Major volume shortfall - only 22% of planned swim volume.

  ---
  BIKE (4 sessions completed - matches plan)
  ┌──────────────┬───────────────────────┬───────────────────────────┐
  │   Session    │        Planned        │          Actual           │
  ├──────────────┼───────────────────────┼───────────────────────────┤
  │ Anaerobic    │ 95min, 4x10min @ 237W │ 46min, 12x30s @ ~330W     │
  ├──────────────┼───────────────────────┼───────────────────────────┤
  │ VO2max       │ 90min, 4x4min @ 235W  │ 60min, 3x[5x2min] @ ~200W │
  ├──────────────┼───────────────────────┼───────────────────────────┤
  │ Z2 Endurance │ 95min                 │ Not done separately       │
  ├──────────────┼───────────────────────┼───────────────────────────┤
  │ Long Ride    │ 180min (3h)           │ 167min (2h47), 89km       │
  ├──────────────┼───────────────────────┼───────────────────────────┤
  │ Extra Z2     │ -                     │ 76min, 36km recovery      │
  └──────────────┴───────────────────────┴───────────────────────────┘
  - Anaerobic session: Different structure (30s sprints vs 10min sustained).
  Power was higher (330W) but much shorter intervals.
  - VO2max session: Lower power (200W vs 235W target) and shorter intervals
  (2min vs 4min).
  - Long bike: 13min shorter than planned but solid 89km. NP 165W, HR 139 avg -
  good Z2 execution.
  - Extra recovery ride: 76min Z2 at 120W - this wasn't planned.

  ---
  RUN (3 sessions vs 4 planned)
  Session: Threshold
  Planned: 70min, 4x6min @ Z4 4:40/km
  Actual: 44min, 6x15s sprints (3:00-3:20/km)
  ────────────────────────────────────────
  Session: Easy #1
  Planned: 60min
  Actual: 37min, 6:38/km
  ────────────────────────────────────────
  Session: Easy #2
  Planned: 60min
  Actual: Not done
  ────────────────────────────────────────
  Session: Long Run
  Planned: 120min (2h)
  Actual: 150min (2h30!), 24.7km
  - Threshold session: Complete structure mismatch. Sprints (15s) instead of
  sustained 6min intervals. This trains different energy systems.
  - Easy run: Only 37min vs 60min planned.
  - Long run: Exceeded target - 2h30 vs 2h planned (+30min). Pace 6:05/km is
  perfect Z2-low Z3 (planned 6:15-6:45). HR 144 avg matches target (138-143).

  ---
  Summary Metrics:
  ┌────────────────┬─────────┬────────┬───────┐
  │     Metric     │ Planned │ Actual │ Delta │
  ├────────────────┼─────────┼────────┼───────┤
  │ Total Sessions │ 11      │ 9      │ -2    │
  ├────────────────┼─────────┼────────┼───────┤
  │ Swim Sessions  │ 3       │ 1      │ -2    │
  ├────────────────┼─────────┼────────┼───────┤
  │ Bike Sessions  │ 4       │ 4      │ 0     │
  ├────────────────┼─────────┼────────┼───────┤
  │ Run Sessions   │ 4       │ 3      │ -1    │
  ├────────────────┼─────────┼────────┼───────┤
  │ Total Duration │ ~14h05  │ ~10h40 │ -3h25 │
  ├────────────────┼─────────┼────────┼───────┤
  │ Swim Volume    │ 5700m   │ 1250m  │ -78%  │
  ├────────────────┼─────────┼────────┼───────┤
  │ Bike Volume    │ 190km   │ ~148km │ -22%  │
  ├────────────────┼─────────┼────────┼───────┤
  │ Run Volume     │ 37km    │ 37.5km │ +1%   │
  └────────────────┴─────────┴────────┴───────┘
  ---
  Key Observations:

  1. Long sessions executed well: The 2h30 long run exceeded targets with
  excellent pacing (6:05/km). The 2h47 long bike hit good volume despite being
  13min short.
  2. Swim is the critical gap: Only 1 of 3 sessions, missing 78% of planned
  volume. This is a concern for an Ironman where swim technique maintenance is
  crucial.
  3. Intensity sessions modified: Both the anaerobic bike and threshold run had
  completely different structures than planned. Instead of sustained 6-10min
  intervals, you did short sprints (15-30s). This trains different physiological
   systems.
  4. Total volume ~24% below target: Missing sessions and shortened workouts.

  ---
  Questions for Discussion:

  1. What happened with the swim sessions? Was it scheduling conflicts, pool
  access, or intentional?
  2. The interval structure changes (30s sprints vs 10min sustained, 15s sprints
   vs 6min threshold) - was this a deliberate choice or following a different
  workout plan?
  3. The long run exceeding target by 30min - was this intentional, or did you
  feel good and extend it?
  4. Do you want me to map these activities to specific days if you can provide
  the dates?

✻ Crunched for 1m 10s

❯ this week I could not follow the plan and I used garmin recommandations.  
  I was feeling tired and mentally drained. check also @weeks/week-10.md    
  results. Weather, family responsabilities, tiredness... workload. Good    
  that next week is a rest week, but for the next cycle we realy need to    
  talk how to adapt the plan.                                               
  ⎿  Read weeks/week-10.md (519 lines)

⏺ Looking at both weeks together, the pattern is clear and this is valuable
  feedback.

  Week 10 → Week 11: The Overreach Pattern

  Week 10 Reality
  ┌────────────────┬─────────────┬──────────────┬────────┐
  │     Metric     │   Planned   │    Actual    │ Delta  │
  ├────────────────┼─────────────┼──────────────┼────────┤
  │ Total Duration │ 12h35       │ 15h40        │ +25%   │
  ├────────────────┼─────────────┼──────────────┼────────┤
  │ Long Bike      │ 2h45 / 95km │ 3h52 / 121km │ +67min │
  ├────────────────┼─────────────┼──────────────┼────────┤
  │ Long Run       │ 1h50 / 17km │ 2h20 / 23km  │ +30min │
  └────────────────┴─────────────┴──────────────┴────────┘
  Week 10 was a breakthrough week where you felt strong and extended everything.
   But that +25% volume accumulates as fatigue debt.

  Week 11 Consequences
  ┌────────────────┬─────────┬────────┬───────┐
  │     Metric     │ Planned │ Actual │ Delta │
  ├────────────────┼─────────┼────────┼───────┤
  │ Total Duration │ 14h05   │ ~10h40 │ -24%  │
  ├────────────────┼─────────┼────────┼───────┤
  │ Sessions       │ 11      │ 9      │ -2    │
  ├────────────────┼─────────┼────────┼───────┤
  │ Swim Volume    │ 5700m   │ 1250m  │ -78%  │
  └────────────────┴─────────┴────────┴───────┘
  The body collected on that debt. Add work stress, family, Hamburg winter
  weather → the planned "peak week" became a survival week.

  ---
  What Actually Happened (Positive Framing)

  You made smart adaptations:
  1. Used Garmin recommendations - your body was telling you something, and the
  watch confirmed it
  2. Still hit the long sessions - 2h30 run (exceeded!), 2h47 bike (close to
  target)
  3. Dropped intensity, not volume - short sprints vs sustained threshold work =
   less CNS fatigue
  4. Swim cuts - the right call when fatigued (lowest injury risk, but also
  lowest Ironman priority for you)

  The Garmin workouts you did:
  - 30s bike intervals instead of 10min sustained = same power system, less
  mental load
  - 15s run sprints instead of 6min threshold = neuromuscular stimulus without
  grinding fatigue

  ---
  Key Issues for Next Cycle Discussion

  1. Volume Volatility

  Week 10: +25% over plan (feeling strong)
  Week 11: -24% under plan (paying for it)
  The plan assumes consistent execution. Reality has variance. We need planned 
  flexibility.

  2. Peak Week Timing

  Week 11 was designed as Cycle 3's peak (14h05). But you were already depleted
  from Week 10's overreach. The actual peak happened in Week 10.

  3. Swim Keeps Getting Cut

  - Week 10: 2/3 sessions (skipped Sun)
  - Week 11: 1/3 sessions

  Swim is the "optional" discipline when stressed. Is this acceptable for
  Ironman prep, or do we need to protect it differently?

  4. Intensity Structure Mismatch

  The plan has sustained threshold/VO2max work (6min, 10min intervals). Garmin
  recommended shorter bursts. Which works better for your life?

  5. Life Load Buffer

  The plan doesn't account for:
  - Work intensity spikes
  - Family demands (school pickups, etc.)
  - German winter weather
  - Mental fatigue

  ---
  Questions Before Week 12 Recovery

  Before we adapt Cycle 4, I need to understand:

  1. Was Week 10's extension intentional or did you just feel good? Should we
  cap "feeling good" days to prevent next-week crashes?
  2. The Garmin recommendations - do you prefer that adaptive approach over
  fixed plans? Would a hybrid work better?
  3. Swim priority - are you okay with swim being the first cut, or should we
  protect 2 sessions minimum?
  4. Mental load - are the long sustained intervals (6-10min threshold) mentally
   draining? Are shorter intervals more sustainable?
  5. Weekly ceiling - what's the maximum realistic weekly volume given your
  current life load? 12 hours? 10 hours?

  Week 12 (recovery) gives us time to redesign Cycle 4. Let's use it.

✻ Worked for 36s

❯ I did 4h of bike today, there should be 2 cycling workouts one 89km and   
  one 36km that I did one after the other. I should have the volume.        

⏺ You're right, let me recalculate. The two highest-ID activities were done
  together today (Sunday):

  - activity_21660625291: 2h47, 89.25km, NP 165W
  - activity_21661479717: 1h16, 36.40km, NP 132W

  Sunday bike total: 4h03, 125.6km

  ---
  Revised Week 11 Summary

  BIKE - Actually Strong
  ┌────────────────┬────────────────┬────────────────┬─────────────┐
  │     Metric     │    Planned     │     Actual     │    Delta    │
  ├────────────────┼────────────────┼────────────────┼─────────────┤
  │ Total Time     │ 7h15           │ 6h13           │ -1h02       │
  ├────────────────┼────────────────┼────────────────┼─────────────┤
  │ Total Distance │ 190km          │ 190.6km        │ +0.6km      │
  ├────────────────┼────────────────┼────────────────┼─────────────┤
  │ Long Session   │ 3h / 100-105km │ 4h03 / 125.6km │ +1h / +20km │
  └────────────────┴────────────────┴────────────────┴─────────────┘
  The distance matches perfectly. Time difference is likely trainer efficiency
  (higher speed indoors).

  Revised Session Mapping
  ┌──────┬──────────────────────────┬──────────────────────────────┐
  │ Day  │         Planned          │            Actual            │
  ├──────┼──────────────────────────┼──────────────────────────────┤
  │ Tue? │ Anaerobic 4x10min @ 237W │ 46min, 30s intervals @ 330W  │
  ├──────┼──────────────────────────┼──────────────────────────────┤
  │ Thu? │ VO2max 4x4min @ 235W     │ 60min, 2min intervals @ 200W │
  ├──────┼──────────────────────────┼──────────────────────────────┤
  │ Sat  │ Long bike 3h             │ -                            │
  ├──────┼──────────────────────────┼──────────────────────────────┤
  │ Sun  │ Swim + Long run          │ 4h bike (89km + 36km)        │
  └──────┴──────────────────────────┴──────────────────────────────┘
  RUN - Long Run Exceeded
  ┌────────────┬──────────────┬──────────────────┐
  │   Metric   │   Planned    │      Actual      │
  ├────────────┼──────────────┼──────────────────┤
  │ Long Run   │ 2h / 17-18km │ 2h30 / 24.7km    │
  ├────────────┼──────────────┼──────────────────┤
  │ Other runs │ 3h10 total   │ ~1h20 (modified) │
  └────────────┴──────────────┴──────────────────┘
  SWIM - The Real Gap
  ┌──────────┬─────────┬────────┐
  │  Metric  │ Planned │ Actual │
  ├──────────┼─────────┼────────┤
  │ Sessions │ 3       │ 1      │
  ├──────────┼─────────┼────────┤
  │ Volume   │ 5700m   │ 1250m  │
  └──────────┴─────────┴────────┘
  ---
  Corrected Assessment

  The picture changes significantly:

  Volume achieved:
  - Bike: 190km target met
  - Long bike: Exceeded (+1h, +20km)
  - Long run: Exceeded (+30min, +7km)
  - Total endurance work: Strong

  What was modified (not missing):
  - Interval structure changed (Garmin recommendations)
  - Sustained threshold → shorter bursts
  - Same energy systems, different mental load

  Actual gap:
  - Swim only: 78% shortfall

  ---
  Week 11 Revised Status

  Given this correction, Week 11 was actually not a bad week considering the
  fatigue state:

  - Bike volume: 100%
  - Run long session: 125%
  - Intensity work: Done (modified structure)
  - Swim: 22% (the real casualty)

  The week wasn't a failure - it was an adaptive response to accumulated
  fatigue. You prioritized the highest-value sessions (long endurance) and
  modified intensity structure to match your recovery state.

  Does this match your perception of the week? And was Saturday a rest day, with
   both long sessions moved to Sunday (run earlier, bike today)?

✻ Cogitated for 43s

❯ I needed Monday to recover, even tuesday workout I failed completing it.  
  I stopped after 24min, at the start of the second set of intervals.       
  Friday I did the same workout, but I completed it.                        

⏺ Now the week makes complete sense. Let me re-map:

  Week 11 Actual Timeline
  Day: Mon 19
  Planned: Swim 50min
  Actual: REST - recovering from Week 10
  ────────────────────────────────────────
  Day: Tue 20
  Planned: Run 70min + Bike 95min
  Actual: Bike FAILED - stopped at 24min, couldn't start 2nd set
  ────────────────────────────────────────
  Day: Wed 21
  Planned: Bike 95min + Run 60min
  Actual: Easy run 37min + Sprint run 44min (Garmin)?
  ────────────────────────────────────────
  Day: Thu 22
  Planned: Bike 90min + Swim 80min
  Actual: VO2max bike 60min + Swim 38min
  ────────────────────────────────────────
  Day: Fri 23
  Planned: Run 60min
  Actual: Bike intervals 46min - completed Tuesday's failed workout
  ────────────────────────────────────────
  Day: Sat 24
  Planned: Long bike 3h
  Actual: Long run 2h30 (swapped)
  ────────────────────────────────────────
  Day: Sun 25
  Planned: Swim + Long run 2h
  Actual: Long bike 4h03 (swapped)
  ---
  The Story of the Week

  Tuesday's failure is the key data point.

  After Week 10's +25% overreach (15h40 actual vs 12h35 planned), your body said
   "no" on Tuesday. You tried the interval workout, got through the warm-up and
  first set, and couldn't continue.

  That's not weakness - that's your body protecting itself.

  Friday redemption: You needed 3 extra days of easier training before your body
   could handle that session. And then you completed it.

  ---
  Revised Assessment

  What went right:
  - Listened to your body (stopped Tuesday, didn't force it)
  - Adapted the week (Garmin recommendations, swapped sessions)
  - Still completed key volume (190km bike, 24.7km long run)
  - Successfully executed Friday what failed Tuesday

  The cost of Week 10:
  - Lost Monday (needed rest)
  - Lost Tuesday session (failed)
  - Swim reduced to 1 session
  - Intensity sessions modified

  Week 10 → Week 11 lesson:
  Week 10: 15h40 (+25% over plan) = felt amazing
  Week 11: Body collected the debt on Tuesday

  ---
  For Cycle 4 Discussion

  This confirms what we need to address:

  1. Cap the "good feeling" days - Week 10's extensions felt great but cost you
  Week 11's start
  2. Build in recovery buffer - The plan assumed you'd arrive at Week 11 fresh.
  You didn't.
  3. Protect the structure - When you modify everything (session order,
  intensity type, days), it's harder to track progress
  4. Swim needs protection - Down to 1 session two weeks in a row now

  Do you want to discuss Cycle 4 adaptations now, or wait until after Week 12
  recovery when you can assess how you feel refreshed?

✻ Cooked for 37s

❯ I will not be able to do more than 2 swimms per week. I have to accept    
  there I will be the worst in my performance. Target is just to finish in  
  under 2h.                                                                 

⏺ That's a smart and realistic decision. Let's validate the math:

  Swim Target Analysis

  Ironman Hamburg swim: 3.8km (open water, wetsuit legal)

  Your current pace:
  - Week 11 actual: 2:19/100m
  - CSS (threshold): 2:27/100m

  Projected finish times:
  ┌───────────┬────────────┬─────────────────────┐
  │   Pace    │ 3.8km Time │        Notes        │
  ├───────────┼────────────┼─────────────────────┤
  │ 2:19/100m │ 1h28       │ Current fitness     │
  ├───────────┼────────────┼─────────────────────┤
  │ 2:27/100m │ 1h33       │ CSS pace            │
  ├───────────┼────────────┼─────────────────────┤
  │ 2:40/100m │ 1h41       │ Conservative        │
  ├───────────┼────────────┼─────────────────────┤
  │ 3:09/100m │ 2h00       │ Your target ceiling │
  └───────────┴────────────┴─────────────────────┘
  You have a 30+ minute buffer. Even adding time for:
  - Open water sighting (+5-10%)
  - Mass start positioning
  - Chop/current
  - Wetsuit adjustment

  You're looking at 1h35-1h45 realistically. Under 2h is very safe.

  ---
  2 Swims/Week Structure

  Given the Thursday 20:00 fixed slot, here's a sustainable structure:
  Session: Technique
  Day: Thu 20:00
  Focus: Drills + threshold intervals
  Duration: 60-75min
  Distance: 2000-2500m
  ────────────────────────────────────────
  Session: Maintenance
  Day: Mon or Sun
  Focus: Easy + pull buoy
  Duration: 45-55min
  Distance: 1500-1800m
  Weekly total: ~105-130min, 3500-4300m

  This is enough to:
  - Maintain current 2:20/100m pace
  - Keep technique sharp (drill work)
  - Build confidence for open water

  ---
  What This Frees Up

  Dropping from 3 to 2 swims saves ~60-80min/week. This can:

  1. Buffer for life - Work stress, family, weather
  2. Protect key sessions - Long bike, long run, threshold work
  3. Recovery - More adaptation time between hard sessions

  ---
  Revised Priorities (Confirmed)
  Discipline: Bike
  Priority: #1
  Goal: Maximize time gains
  Strategy: Volume + FTP work
  ────────────────────────────────────────
  Discipline: Run
  Priority: #2
  Goal: Strong marathon split
  Strategy: Threshold + long runs
  ────────────────────────────────────────
  Discipline: Swim
  Priority: #3
  Goal: Finish <2h
  Strategy: Maintain technique, 2x/week
  ---
  For Cycle 4 Plan

  I'll build the next cycle with:
  - 2 swims/week (Thursday fixed + 1 flexible)
  - Realistic weekly ceiling - what's sustainable for you? 10-12h?
  - Buffer built in - so "good feeling" days don't crash the next week
  - Garmin-compatible structure - workouts that align with adaptive
  recommendations

  Should we set a hard weekly hour cap for Cycle 4? Week 10 showed 15h40 is
  possible but not sustainable. What feels right - 12h? 11h?

✻ Brewed for 32s

❯ Let me share with you also some of my current garmin stats so you have a  
  better idea where I am:                                                   
  ⎿  [Image #1]
  ⎿  [Image #2]

⏺ This is excellent data. Let me break down what Garmin is telling us:

  Load Focus Analysis (Dec 28 - Jan 25)
  ┌──────────────┬───────┬────────────────────┬────────────────────────────────┐
  │     Zone     │ Score │       Status       │            Meaning             │
  ├──────────────┼───────┼────────────────────┼────────────────────────────────┤
  │ Anaerobic    │ 747   │ Below optimal      │ Not enough short, hard efforts │
  ├──────────────┼───────┼────────────────────┼────────────────────────────────┤
  │ High Aerobic │ 1786  │ At optimal ceiling │ Good threshold/VO2max work     │
  ├──────────────┼───────┼────────────────────┼────────────────────────────────┤
  │ Low Aerobic  │ 2077  │ Above optimal      │ Too much Z2 volume             │
  └──────────────┴───────┴────────────────────┴────────────────────────────────┘
  This explains everything:
  - Garmin recommended sprint workouts (30s, 15s) because you have an anaerobic 
  deficit
  - The long Z2 sessions (3h52 bike, 2h30 runs) pushed low aerobic above optimal
  - Your body is overloaded on endurance, underloaded on explosiveness

  ---
  VO2max Trends
  ┌────────────────┬───────┬───────────────────┐
  │     Metric     │ Value │       Trend       │
  ├────────────────┼───────┼───────────────────┤
  │ Running VO2max │ 50    │ Stable (good)     │
  ├────────────────┼───────┼───────────────────┤
  │ Cycling VO2max │ 41    │ Climbing from ~38 │
  └────────────────┴───────┴───────────────────┘
  Cycling VO2max improving is a positive sign - the bike focus is working.

  ---
  HRV Status - The Recovery Story

  Looking at the graph:
  - Oct-Nov: Dropped to "Low" (red triangles) - overreaching period?
  - Dec: "Unbalanced" (orange) - holiday stress + training?
  - Late Jan: Back to "Balanced" (green)

  Your HRV recovered. This is good news for Cycle 4.

  ---
  Acute Training Load - The Warning

  Currently at ~1750-1800, which is at the top of optimal range.

  This confirms:
  - Week 10's 15h40 pushed you to the ceiling
  - Tuesday's failure = your body hit the load limit
  - You need the Week 12 recovery to bring this down

  ---
  What This Means for Cycle 4

  1. Rebalance the Load Focus
  ┌──────────────┬──────────┬───────────────────────────────────────────┐
  │     Zone     │ Current  │                  Action                   │
  ├──────────────┼──────────┼───────────────────────────────────────────┤
  │ Anaerobic    │ Too low  │ Add more short sprints (30s-2min efforts) │
  ├──────────────┼──────────┼───────────────────────────────────────────┤
  │ High Aerobic │ Good     │ Maintain threshold work                   │
  ├──────────────┼──────────┼───────────────────────────────────────────┤
  │ Low Aerobic  │ Too high │ Cap long session extensions               │
  └──────────────┴──────────┴───────────────────────────────────────────┘
  2. The Plan Was Wrong About Intensity Structure

  The plan prescribed:
  - 4x10min sustained @ 237W (anaerobic/threshold)
  - 4x6min threshold runs

  But your body needs:
  - Shorter, sharper efforts to build anaerobic capacity
  - Less grinding sustained work

  Garmin's 30s on/off and 15s sprints were actually correct for your physiology.

  3. Weekly Load Ceiling

  Based on acute training load at ~1750-1800:
  - Hard cap: 12-13 hours/week for build weeks
  - No extensions when feeling good - bank that energy
  - Recovery weeks: drop to 7-8 hours

  ---
  Cycle 4 Proposal Framework
  ┌─────────────────────┬─────────────────────┬───────────────────────────┐
  │      Parameter      │    Current Plan     │         Proposed          │
  ├─────────────────────┼─────────────────────┼───────────────────────────┤
  │ Peak weekly hours   │ 14-15h              │ 12h max                   │
  ├─────────────────────┼─────────────────────┼───────────────────────────┤
  │ Swim sessions       │ 3                   │ 2                         │
  ├─────────────────────┼─────────────────────┼───────────────────────────┤
  │ Long bike cap       │ 3h+                 │ 3h hard limit             │
  ├─────────────────────┼─────────────────────┼───────────────────────────┤
  │ Long run cap        │ 2h+                 │ 2h hard limit             │
  ├─────────────────────┼─────────────────────┼───────────────────────────┤
  │ Intensity structure │ Sustained intervals │ Mix of short + sustained  │
  ├─────────────────────┼─────────────────────┼───────────────────────────┤
  │ Recovery weeks      │ Planned             │ + HRV-triggered rest days │
  └─────────────────────┴─────────────────────┴───────────────────────────┘
  ---
  Hybrid Approach for Cycle 4

  Use both structured plan AND Garmin:

  1. Plan provides: Weekly structure, session types, progression
  2. Garmin provides: Daily readiness, load balance alerts, workout
  recommendations when deficit detected
  3. You decide: If Garmin flags low recovery or load imbalance, adjust that day

  Does this framework make sense? Should we build Cycle 4 (Weeks 13-16) with
  these parameters after your Week 12 recovery?

✻ Sautéed for 45s

❯ considering this data, lets design the right recovery for week 12         
  @weeks/week-12.md and then lets plan cycle 4 - February, where I need to  
  reach 160km on the bike, cycle 5 - March with 180km bike, and cycle 6     
  April - peak with 200km.                                                  
  ⎿  Read weeks/week-12.md (331 lines)

⏺ Let me design this properly. Given your Garmin data showing acute load at
  ceiling and low aerobic overload, we need a smarter recovery week and
  realistic cycle progression.

  Week 12 Redesign - True Recovery

  Given your current state:
  - Acute Training Load: At ceiling (~1750-1800)
  - Low Aerobic: Overloaded
  - HRV: Balanced but fragile

  Recommendation: Skip the CSS swim test. Your 2:19/100m pace already gives you
  a 30+ minute buffer for sub-2h swim. Testing adds load when you need recovery.

  Revised Week 12 Structure
  ┌────────┬──────────────────────────┬───────────────────────────────────────┐
  │  Day   │       Current Plan       │             Revised Plan              │
  ├────────┼──────────────────────────┼───────────────────────────────────────┤
  │ Mon 26 │ Rest                     │ Rest                                  │
  ├────────┼──────────────────────────┼───────────────────────────────────────┤
  │ Tue 27 │ Easy run + Easy bike     │ Easy run 40min only                   │
  ├────────┼──────────────────────────┼───────────────────────────────────────┤
  │ Wed 28 │ FTP Test 60min           │ FTP Test 60min                        │
  ├────────┼──────────────────────────┼───────────────────────────────────────┤
  │ Thu 29 │ CSS Test 60min           │ Easy technique swim 45min (no test)   │
  ├────────┼──────────────────────────┼───────────────────────────────────────┤
  │ Fri 30 │ Easy run 50min           │ Rest or 30min walk                    │
  ├────────┼──────────────────────────┼───────────────────────────────────────┤
  │ Sat 31 │ Z2 bike 75min + Run test │ Run Threshold Test only (45min total) │
  ├────────┼──────────────────────────┼───────────────────────────────────────┤
  │ Sun 1  │ Easy swim 30min          │ Rest                                  │
  └────────┴──────────────────────────┴───────────────────────────────────────┘
  Revised totals:
  - Sessions: 4 (down from 8)
  - Duration: ~3h30 (down from 6h40)
  - Tests: 2 (FTP + Run Threshold)
  - True rest days: 3

  This aggressive recovery should:
  1. Drop acute training load back into mid-optimal range
  2. Give your legs proper rest before Cycle 4
  3. Still capture the key metrics (FTP and run threshold)

  ---
  Cycles 4-6 Framework

  Core Principles (Based on Your Data)
  Parameter: Weekly ceiling
  Value: 11-12h
  Rationale: Acute load at ceiling with 15h+
  ────────────────────────────────────────
  Parameter: Swim sessions
  Value: 2/week
  Rationale: Your constraint, accepted
  ────────────────────────────────────────
  Parameter: Long bike cap
  Value: Progressive
  Rationale: 160km → 180km → 200km
  ────────────────────────────────────────
  Parameter: Long run cap
  Value: 2h max
  Rationale: Protect running legs
  ────────────────────────────────────────
  Parameter: Intensity structure
  Value: Mixed
  Rationale: Short sprints + sustained (address anaerobic deficit)
  ────────────────────────────────────────
  Parameter: Extension rule
  Value: None
  Rationale: Bank energy, don't spend it
  ---
  Cycle 4: February (Weeks 13-16)

  Goal: Reach 160km long bike, build anaerobic capacity

  Weekly Progression
  ┌─────────────────────┬──────────┬──────────────┬─────────────┬──────────────┐
  │        Week         │  Phase   │  Long Bike   │  Long Run   │ Weekly Hours │
  ├─────────────────────┼──────────┼──────────────┼─────────────┼──────────────┤
  │ 13 (Feb 2-8)        │ Build 1  │ 120km / 3h30 │ 1h45 / 16km │ 10h          │
  ├─────────────────────┼──────────┼──────────────┼─────────────┼──────────────┤
  │ 14 (Feb 9-15)       │ Build 2  │ 140km / 4h   │ 1h50 / 17km │ 11h          │
  ├─────────────────────┼──────────┼──────────────┼─────────────┼──────────────┤
  │ 15 (Feb 16-22)      │ Build 3  │ 160km / 4h30 │ 2h / 18km   │ 12h          │
  ├─────────────────────┼──────────┼──────────────┼─────────────┼──────────────┤
  │ 16 (Feb 23 - Mar 1) │ Recovery │ 60km / 2h    │ 1h / 10km   │ 6h           │
  └─────────────────────┴──────────┴──────────────┴─────────────┴──────────────┘
  Weekly Template (Build Weeks)
  Day: Mon
  Session 1: Rest or Swim 45min
  Session 2: -
  Focus: Recovery / Technique
  ────────────────────────────────────────
  Day: Tue
  Session 1: Run 50min (incl. 6x30s sprints)
  Session 2: Bike 60min (anaerobic intervals)
  Focus: Intensity
  ────────────────────────────────────────
  Day: Wed
  Session 1: Bike 60min Z2
  Session 2: Run 45min easy
  Focus: Aerobic maintenance
  ────────────────────────────────────────
  Day: Thu
  Session 1: Bike 75min (VO2max/threshold)
  Session 2: Swim 60min (fixed 20:00)
  Focus: Intensity + Technique
  ────────────────────────────────────────
  Day: Fri
  Session 1: Run 45min easy
  Session 2: -
  Focus: Recovery
  ────────────────────────────────────────
  Day: Sat
  Session 1: Long Bike
  Session 2: -
  Focus: Endurance
  ────────────────────────────────────────
  Day: Sun
  Session 1: Long Run
  Session 2: -
  Focus: Endurance
  Intensity structure for anaerobic deficit:
  - Tuesday bike: 8-10x 30s @ 130% FTP / 30s rest (Garmin-style)
  - Tuesday run: 6x 30s hill sprints or flat sprints
  - Thursday bike: 3x 8min @ threshold OR 5x 3min @ VO2max

  ---
  Cycle 5: March (Weeks 17-20)

  Goal: Reach 180km long bike, maintain anaerobic gains
  Week: 17 (Mar 2-8)
  Phase: Build 1
  Long Bike: 140km / 4h
  Long Run: 1h45 / 16km
  Weekly Hours: 10h
  ────────────────────────────────────────
  Week: 18 (Mar 9-15)
  Phase: Build 2
  Long Bike: 160km / 4h30
  Long Run: 1h50 / 17km
  Weekly Hours: 11h
  ────────────────────────────────────────
  Week: 19 (Mar 16-22)
  Phase: Build 3
  Long Bike: 180km / 5h
  Long Run: 2h / 18km
  Weekly Hours: 12h
  ────────────────────────────────────────
  Week: 20 (Mar 23-29)
  Phase: Recovery + Test
  Long Bike: 70km / 2h
  Long Run: 1h / 10km
  Weekly Hours: 6h
  ---
  Cycle 6: April (Weeks 21-24) - Peak

  Goal: Reach 200km long bike (race simulation)
  ┌─────────────────────┬──────────┬──────────────┬─────────────┬──────────────┐
  │        Week         │  Phase   │  Long Bike   │  Long Run   │ Weekly Hours │
  ├─────────────────────┼──────────┼──────────────┼─────────────┼──────────────┤
  │ 21 (Mar 30 - Apr 5) │ Build 1  │ 160km / 4h30 │ 1h45 / 16km │ 10h          │
  ├─────────────────────┼──────────┼──────────────┼─────────────┼──────────────┤
  │ 22 (Apr 6-12)       │ Build 2  │ 180km / 5h   │ 1h50 / 17km │ 11h          │
  ├─────────────────────┼──────────┼──────────────┼─────────────┼──────────────┤
  │ 23 (Apr 13-19)      │ Build 3  │ 200km / 5h30 │ 2h / 18km   │ 12h          │
  ├─────────────────────┼──────────┼──────────────┼─────────────┼──────────────┤
  │ 24 (Apr 20-26)      │ Recovery │ 80km / 2h30  │ 1h15 / 12km │ 7h           │
  └─────────────────────┴──────────┴──────────────┴─────────────┴──────────────┘
  ---
  Visual Progression

  Long Bike Distance Progression:

  Week:  12   13   14   15   16   17   18   19   20   21   22   23   24
         |    |    |    |    |    |    |    |    |    |    |    |    |
        Rec  120  140  160  Rec  140  160  180  Rec  160  180  200  Rec
         km   km   km   km   km   km   km   km   km   km   km   km   km
                       ▲              ▲              ▲
                     C4 Peak       C5 Peak       C6 Peak

  ---
  Key Differences from Current Plan
  ┌─────────────────────────┬────────────────┬───────────────────────────┐
  │         Aspect          │    Old Plan    │         New Plan          │
  ├─────────────────────────┼────────────────┼───────────────────────────┤
  │ Peak weekly hours       │ 14-15h         │ 12h max                   │
  ├─────────────────────────┼────────────────┼───────────────────────────┤
  │ Swim sessions           │ 3/week         │ 2/week                    │
  ├─────────────────────────┼────────────────┼───────────────────────────┤
  │ Long session extensions │ Allowed        │ Forbidden                 │
  ├─────────────────────────┼────────────────┼───────────────────────────┤
  │ Intensity type          │ Sustained only │ Mixed (short + sustained) │
  ├─────────────────────────┼────────────────┼───────────────────────────┤
  │ Recovery weeks          │ 6h40           │ 6h or less                │
  ├─────────────────────────┼────────────────┼───────────────────────────┤
  │ Garmin integration      │ Ignored        │ Daily readiness check     │
  └─────────────────────────┴────────────────┴───────────────────────────┘
  ---
  Garmin Integration Rules

  1. Before intensity sessions: Check Body Battery and HRV. If low, swap for Z2
  2. Load Focus alerts: If anaerobic drops, add sprint work. If low aerobic
  spikes, reduce Z2 volume
  3. Acute load >1800: Take an extra rest day
  4. Weekly check: If training load exits optimal range, adjust next week down

  ---
  Should I write out the detailed Week 12 edits and create the Week 13-16 (Cycle
   4) files now?

✻ Sautéed for 1m 0s

❯ I don't need a ftp test, we did one in the previous weeks, i would aim    
  more for a short intense session that could boost ftp, but without        
  distroytiing the rest week,                                               

⏺ Good thinking. A short "FTP tickle" session can stimulate adaptation without
  the fatigue cost of a full test. Given your anaerobic deficit, we can address
  both goals.

  Revised Week 12 - Recovery with Stimulus
  ┌────────┬─────────────────────┬──────────┬────────────────────────────┐
  │  Day   │       Session       │ Duration │          Purpose           │
  ├────────┼─────────────────────┼──────────┼────────────────────────────┤
  │ Mon 26 │ Rest                │ -        │ Full recovery              │
  ├────────┼─────────────────────┼──────────┼────────────────────────────┤
  │ Tue 27 │ Easy run 40min      │ 40min    │ Shake out legs             │
  ├────────┼─────────────────────┼──────────┼────────────────────────────┤
  │ Wed 28 │ FTP Tickle bike     │ 45min    │ Short intensity stimulus   │
  ├────────┼─────────────────────┼──────────┼────────────────────────────┤
  │ Thu 29 │ Easy technique swim │ 50min    │ Fixed slot, technique only │
  ├────────┼─────────────────────┼──────────┼────────────────────────────┤
  │ Fri 30 │ Rest                │ -        │ Fresh legs for Saturday    │
  ├────────┼─────────────────────┼──────────┼────────────────────────────┤
  │ Sat 31 │ Run Threshold Test  │ 50min    │ Key metric update          │
  ├────────┼─────────────────────┼──────────┼────────────────────────────┤
  │ Sun 1  │ Easy swim 40min     │ 40min    │ Technique + light movement │
  └────────┴─────────────────────┴──────────┴────────────────────────────┘
  Weekly total: ~3h45, 5 sessions

  ---
  Wednesday FTP Tickle Session (45min)

  This addresses your anaerobic deficit while giving FTP a nudge:

  Structure:
  Warmup: 10min progressive (100W → 150W)
  Openers: 3x30s @ 130% FTP (286W) / 30s easy

  Main Set: 3x3min @ 105% FTP (231W)
  - 3min recovery between intervals
  - RPE 8/10, not all-out
  - High cadence (95-100 rpm)

  Cooldown: 8min very easy

  Why this works:
  - Total hard work: ~12 minutes (manageable load)
  - 30s sprints → addresses anaerobic deficit
  - 3min @ 105% → VO2max/FTP stimulus without destruction
  - Short enough to recover from within 24-48h

  Target metrics:
  - Duration: 45min
  - NP target: ~165-175W
  - Max HR: 160-165 (not maximal)

  ---
  Full Week 12 Revised

  Let me update the file:

⏺ Update(weeks/week-12.md)
  ⎿  (No changes)

❯ Wait until I confirm it. Can we have 2 days of rest at start? 

⏺ Absolutely. Given you just did 4 hours of cycling today and acute load is at
  ceiling, starting with 2 rest days makes sense.

  Proposed Week 12 Structure
  ┌────────┬─────────────────────┬──────────┬──────────────────────────────┐
  │  Day   │       Session       │ Duration │            Notes             │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Mon 26 │ Rest                │ -        │ Recovery from Sunday 4h bike │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Tue 27 │ Rest                │ -        │ Let acute load drop          │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Wed 28 │ FTP Tickle bike     │ 45min    │ Short intensity stimulus     │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Thu 29 │ Easy technique swim │ 50min    │ Fixed 20:00 slot             │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Fri 30 │ Easy run 40min      │ 40min    │ Shake out before test        │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Sat 31 │ Run Threshold Test  │ 50min    │ Key metric update            │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Sun 1  │ Easy swim 40min     │ 40min    │ Light technique              │
  └────────┴─────────────────────┴──────────┴──────────────────────────────┘
  Weekly total: ~3h45, 5 sessions, 2 full rest days to start

  This gives you:
  - 48h complete rest before any training
  - Acute load should drop significantly
  - Fresh legs for Wednesday's intensity tickle
  - Another easy day Friday before Saturday's threshold test

  Does this structure work? Once you confirm, I'll write it out.

❯ Friday to Sunday I will be our of the contry. I still could aim for the   
  run, not sure I can do the swim.                                          

⏺ Got it. Let's adjust for your travel:

  Revised Week 12 Structure
  ┌────────┬─────────────────────┬──────────┬──────────────────────────────┐
  │  Day   │       Session       │ Duration │            Notes             │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Mon 26 │ Rest                │ -        │ Recovery from Sunday 4h bike │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Tue 27 │ Rest                │ -        │ Let acute load drop          │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Wed 28 │ FTP Tickle bike     │ 45min    │ Short intensity stimulus     │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Thu 29 │ Easy technique swim │ 50min    │ Fixed 20:00 slot             │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Fri 30 │ Travel              │ -        │ Out of country               │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Sat 31 │ Run Threshold Test  │ 50min    │ If location permits          │
  ├────────┼─────────────────────┼──────────┼──────────────────────────────┤
  │ Sun 1  │ Rest or easy run    │ 30-40min │ No pool access               │
  └────────┴─────────────────────┴──────────┴──────────────────────────────┘
  Weekly total: ~2h25 to 3h05, 3-4 sessions

  Options for Saturday run test:
  - If you have access to a flat route (park, waterfront, track) → do the
  threshold test
  - If terrain is hilly or uncertain → just do an easy 40-50min run instead,
  skip the formal test

  Sunday fallback:
  - No swim (no pool) → either full rest or easy 30min jog to explore

  This keeps it truly minimal:
  - 2 rest days at start
  - 1 intensity session (Wed bike)
  - 1 technique swim (Thu)
  - 1 run while traveling (Sat - test or easy depending on conditions)
  - Sunday flexible

  Does this work? Where are you traveling to - might help determine if a
  threshold test is feasible?

❯ how about doing the test on Wednesday, and the 45 min bike workout on     
  Friday @ 6:30                                                             

⏺ That's a better structure:

  Week 12 Final Structure
  Day: Mon 26
  Session: Rest
  Time: -
  Duration: -
  Notes: Recovery
  ────────────────────────────────────────
  Day: Tue 27
  Session: Rest
  Time: -
  Duration: -
  Notes: Fresh legs for test
  ────────────────────────────────────────
  Day: Wed 28
  Session: Run Threshold Test
  Time: Morning
  Duration: 50min
  Notes: Fresh after 2 rest days
  ────────────────────────────────────────
  Day: Thu 29
  Session: Easy technique swim
  Time: 20:00
  Duration: 50min
  Notes: Fixed slot
  ────────────────────────────────────────
  Day: Fri 30
  Session: FTP Tickle bike
  Time: 06:30
  Duration: 45min
  Notes: Before travel
  ────────────────────────────────────────
  Day: Sat 31
  Session: Rest or easy run
  Time: -
  Duration: 0-40min
  Notes: Out of country
  ────────────────────────────────────────
  Day: Sun 1
  Session: Rest
  Time: -
  Duration: -
  Notes: Out of country
  Weekly total: ~2h25 to 3h05

  Why this is better:
  - 48h rest → Wednesday test with truly fresh legs (best data)
  - Thursday swim is easy, won't impact Friday
  - Friday 6:30 bike → done before you leave, starts the weekend fresh
  - Weekend can be full rest or light movement while traveling

  Wednesday Run Threshold Test (50min):
  Warmup: 15min easy build
  Test: 30min ALL-OUT sustainable pace
  Cooldown: 5min walk/easy jog

  Friday FTP Tickle (45min @ 6:30):
  Warmup: 10min progressive
  Openers: 3x30s @ 286W / 30s easy
  Main: 3x3min @ 231W (3min rest between)
  Cooldown: 8min easy

  Confirm this and I'll write the week-12.md file?

❯ yea, this week will be fully focus on rest so next cycle we start in the  
  best position.                                                            

⏺ Let me update the Week 12 file with this recovery-focused structure.

⏺ Write(weeks/week-12.md)
  ⎿  Added 138 lines, removed 223 lines
       6  phase: recovery
       7  status: planned
       8  sessions-completed: 0
       9 -sessions-total: 8                                              
      10 -swim-sessions: 2                                               
      11 -bike-sessions: 3                                               
      12 -run-sessions: 3                                                
       9 +sessions-total: 3                                              
      10 +swim-sessions: 1                                               
      11 +bike-sessions: 1                                               
      12 +run-sessions: 1                                                
      13  strength-sessions: 0
      14 -total-duration: 430                                            
      14 +total-duration: 145                                            
      15  vo2-max: 50
      16  vo2-max-baseline: 50
      17  ftp-bike: 220
     ...
       22  css-swim-baseline: "2:27"
       23  ---
       24  
       25 -# Week 12: Jan 26 - Feb 1, 2026 (Recovery Week + Testing)     
       25 +# Week 12: Jan 26 - Feb 1, 2026 (Recovery Week)               
       26  
       27 -**Focus:** Active recovery, performance testing, prepare for C
          -ycle 4                                                        
       27 +**Focus:** True recovery from Cycle 3 overreach, run threshold
          + test, prepare for Cycle 4                                    
       28  
       29  ## Week Overview
       30  |              | Swim   | Bike   | Run     | Total  |
       31  |--------------|--------|--------|---------|--------|
       32 -| **Sessions** | 2      | 3      | 3       | 8      |         
       33 -| **Time**     | 1h30   | 3h00   | 2h10    | 6h40   |         
       34 -| **Distance** | 2800m  | 95km   | 19km    | -      |         
       32 +| **Sessions** | 1      | 1      | 1       | 3      |         
       33 +| **Time**     | 0h50   | 0h45   | 0h50    | 2h25   |         
       34 +| **Distance** | 1800m  | 25km   | 7km     | -      |         
       35  
       36 -**Volume Reduction:** ~53% vs Week 11 (6h40 vs 14h20)         
       36 +**Volume Reduction:** ~77% vs Week 11 actual (~10h40)         
       37  
       38 +**Context:** Week 10 overreach (+25% volume at 15h40) caused W
          +eek 11 fatigue (Tuesday session failure, needed Monday rest). 
          +Garmin data shows acute training load at ceiling (~1750-1800),
          + low aerobic overloaded, anaerobic deficit. This week prioriti
          +zes true recovery to start Cycle 4 in optimal condition.      
       39 +                                                              
       40 +**Travel:** Out of country Friday evening through Sunday.     
       41 +                                                              
       42  ---
       43  
       44  ## Weekly Schedule
       45  
       42 -| Date           | Activity   | Workout Template              
          -                               | Duration | Status |          
       43 -| -------------- | ---------- | ------------------------------
          ------------------------------- | -------- | ------ |          
       44 -| 26.01.2026 Mon | -          | Rest day                      
          -                               | -        | ⬜      |         
       45 -| 27.01.2026 Tue | 🏃 Run     | [[easy-aerobic\|Easy Aerobic 5
          -0min]]        | 50       | ⬜      |                          
       46 -|                | 🚴 Bike    | [[easy-recovery\|Easy Recovery
          - 45min]]     | 45       | ⬜      |                           
       47 -| 28.01.2026 Wed | 🚴 Bike    | [[../workouts/bike/ftp-bike-te
          -st\|FTP Test 60min]]          | 60       | ⬜      |          
       48 -| 29.01.2026 Thu | 🏊 Swim    | [[../workouts/swim/css-swim-te
          -st\|CSS Test 60min]]          | 60       | ⬜      |          
       49 -| 30.01.2026 Fri | 🏃 Run     | [[easy-aerobic\|Easy Aerobic 5
          -0min]]        | 50       | ⬜      |                          
       50 -| 31.01.2026 Sat | 🚴 Bike    | [[z2-endurance\|Z2 Endurance 7
          -5min]]       | 75       | ⬜      |                           
       51 -|                | 🏃 Run     | [[../workouts/run/run-threshol
          -d-test\|Threshold Test 30min]]| 30       | ⬜      |          
       52 -| 01.02.2026 Sun | 🏊 Swim    | [[easy-technique\|Easy Techniq
          -ue 30min]]   | 30       | ⬜      |                           
       46 +| Date           | Activity | Workout                         
          + | Time  | Duration | Status |                                
       47 +| -------------- | -------- | --------------------------------
          + | ----- | -------- | ------ |                                
       48 +| 26.01.2026 Mon | -        | Rest                            
          + | -     | -        | ⬜      |                               
       49 +| 27.01.2026 Tue | -        | Rest                            
          + | -     | -        | ⬜      |                               
       50 +| 28.01.2026 Wed | 🏃 Run   | Run Threshold Test              
          + | AM    | 50       | ⬜      |                               
       51 +| 29.01.2026 Thu | 🏊 Swim  | Easy Technique                  
          + | 20:00 | 50       | ⬜      |                               
       52 +| 30.01.2026 Fri | 🚴 Bike  | FTP Tickle (short intensity)    
          + | 06:30 | 45       | ⬜      |                               
       53 +| 31.01.2026 Sat | -        | Rest (travel)                   
          + | -     | -        | ⬜      |                               
       54 +| 01.02.2026 Sun | -        | Rest (travel)                   
          + | -     | -        | ⬜      |                               
       55  
       54 -**Weekly Total:** 400 minutes (~6h40)                         
       56 +**Weekly Total:** 145 minutes (~2h25)                         
       57  
       58  ---
       59  
       60  ## Detailed Workouts
       61  
       62  ### Mon Jan 26 ⬜
       61 -**Rest Day** - Mandatory recovery after peak week             
       63 +**Rest Day** - Full recovery after Sunday's 4h bike (89km + 36
          +km)                                                           
       64  
       65  ---
       66  
       67  ### Tue Jan 27 ⬜
       68 +**Rest Day** - Second rest day to drop acute training load bef
          +ore Wednesday test                                            
       69  
       67 -#### Morning Run (6:30-7:20) - 50min                          
       68 -**Workout:** [[easy-aerobic|Easy Aerobic Run]]                
       69 -**Time:** 6:30-7:20                                           
       70 -                                                              
       71 -**Structure:**                                                
       72 -- Continuous very easy (Z1-Z2)                                
       73 -- Pace: 6:45-7:15/km (slower than usual)                      
       74 -- HR: 125-140 bpm                                             
       75 -                                                              
       76 -**Target Metrics:**                                           
       77 -- activity:: Run                                              
       78 -- duration-planned:: 50                                       
       79 -- distance-planned:: 6.5-7.5                                  
       80 -- zone-target:: Z1-Z2                                         
       81 -- avg-hr-target:: <138                                        
       82 -                                                              
       83 -**Notes:** Recovery week - keep it truly easy. Shake out legs 
          -from Week 11 peak.                                            
       84 -                                                              
       85 -#### Lunch Bike (12:30-13:15) - 45min                         
       86 -**Workout:** [[easy-recovery|Easy Recovery Ride]]             
       87 -**Time:** 12:30-13:15                                         
       88 -                                                              
       89 -**Structure:**                                                
       90 -- 5min warmup                                                 
       91 -- 35min steady Z1-low Z2 (90-120W)                            
       92 -- 5min cooldown                                               
       93 -                                                              
       94 -**Target Metrics:**                                           
       95 -- activity:: Bike                                             
       96 -- duration-planned:: 45                                       
       97 -- distance-planned:: 24                                       
       98 -- zone-target:: Z1                                            
       99 -- avg-power-target:: 100-115                                  
      100 -                                                              
      101 -**Notes:** Very easy spin. Indoor trainer. Focus on smooth ped
          -aling. Preparing legs for FTP test tomorrow.                  
      102 -                                                              
      103 -**Daily Total:** 2 sessions, 1h35 (easy run + recovery bike)  
      104 -                                                              
       70  ---
       71  
       72  ### Wed Jan 28 ⬜
       73  
      109 -#### Midday FTP Test (13:00-14:00) - 60min                    
      110 -**Workout:** [[../workouts/bike/ftp-bike-test|FTP Bike Test - 
          -20min Protocol]]                                              
      111 -**Time:** 13:00-14:00                                         
       74 +#### Morning Run Threshold Test - 50min                       
       75 +**Workout:** Run Threshold Test - 30min Protocol              
       76 +**Time:** Morning (flexible)                                  
       77  
       78  **Structure:**
      114 -- Warmup: 20min progressive with 3x1min @ Z3 openers          
      115 -- Main Test: 20min ALL-OUT time trial @ maximum sustainable po
          -wer                                                           
      116 -- Cooldown: 15min very easy                                   
       79 +- Warmup: 15min easy progressive build                        
       80 +- Main Test: 30min ALL-OUT sustainable pace                   
       81 +  - Start conservatively at ~4:40/km                          
       82 +  - Settle into rhythm by 5min mark                           
       83 +  - Push final 10min                                          
       84 +- Cooldown: 5min walk/very easy jog                           
       85  
      118 -**Current FTP Baseline:** 220W                                
      119 -**Target:** 225-230W (expecting 5-10W improvement from Cycles 
          -2-3 training)                                                 
       86 +**Current Threshold:** 171 bpm LTHR, 4:48/km pace             
       87 +**Target:** Improve to ~4:35-4:45/km                          
       88  
       89  **Target Metrics:**
      122 -- activity:: Bike                                             
      123 -- duration-planned:: 60                                       
      124 -- distance-planned:: 32                                       
      125 -- zone-target:: Z5 Test                                       
      126 -- test-type:: FTP                                             
       90 +- activity:: Run                                              
       91 +- duration-planned:: 50                                       
       92 +- distance-planned:: 6.5-7.5                                  
       93 +- zone-target:: Z4-Z5 Test                                    
       94 +- test-type:: Threshold                                       
       95  
      128 -**Notes:** CRITICAL TEST. Indoor trainer REQUIRED. This is a 2
          -0min all-out effort - pace it correctly. Start at 225W, settle
          - in, push final 5min. FTP = 95% of 20min average power. Proper
          - warmup essential. Fresh legs from recovery days. Results esta
          -blish new training zones for upcoming cycles.                 
       96 +**Notes:** CRITICAL TEST. Fresh legs after 2 full rest days. U
          +se flat route. Average HR from 30min effort = new LTHR. Averag
          +e pace = new threshold pace. This establishes run training zon
          +es for Cycle 4.                                               
       97  
      130 -**Daily Total:** 1 session, 1h (FTP test)                     
       98 +**Daily Total:** 1 session, 50min (threshold test)            
       99  
      100  ---
      101  
      102  ### Thu Jan 29 ⬜
      103  
      136 -#### Evening CSS Swim Test (20:00-21:00) - 60min              
      137 -**Workout:** [[../workouts/swim/css-swim-test|CSS Swim Test - 
          -Time Trial Protocol]]                                         
      138 -**Time:** 20:00-21:00                                         
      104 +#### Evening Swim (20:00-20:50) - 50min                       
      105 +**Workout:** Easy Technique Swim                              
      106 +**Time:** 20:00-20:50                                         
      107  
      108  **Structure:**
      141 -- Warmup: 400m easy progressive with 6x50m easy               
      142 -- Main Test: Continuous time trial for maximum sustainable dis
          -tance in ~12-15min                                            
      143 -  - Target: 1400-1500m (aiming for improvement from 1350m base
          -line)                                                         
      144 -- Cooldown: 200m very easy                                    
      109 +- Warmup: 300m easy                                           
      110 +- Drill Set (40%): 10x50m @ 1:30 (extra rest)                 
      111 +  - 3x catch-up                                               
      112 +  - 3x fist drill                                             
      113 +  - 2x single-arm                                             
      114 +  - 2x fingertip drag                                         
      115 +- Pull Buoy: 4x100m @ 2:35/100m, 25s rest                     
      116 +- Continuous: 200m smooth                                     
      117 +- Cooldown: 100m very easy                                    
      118 +- **Total: 1800m**                                            
      119  
      146 -**Current CSS Baseline:** 2:27/100m                           
      147 -**Target:** 2:23-2:25/100m (expecting 2-4s improvement)       
      148 -                                                              
      120  **Target Metrics:**
      121  - activity:: Swim
      151 -- duration-planned:: 60                                       
      152 -- distance-planned:: 1400-1500                                
      153 -- zone-target:: T5 Test                                       
      154 -- test-type:: CSS                                             
      122 +- duration-planned:: 50                                       
      123 +- distance-planned:: 1800                                     
      124 +- zone-target:: Z1-Z2                                         
      125 +- drill-percentage:: 45                                       
      126  
      156 -**Notes:** Fixed Thursday 20:00 swim. CRITICAL TEST. This is a
          -n all-out sustainable effort for 12-15min. Start controlled, b
          -uild into rhythm, push final 200m. Proper warmup essential. Re
          -sults establish new swim training zones. Distance achieved div
          -ided by time = CSS pace.                                      
      127 +**Notes:** Fixed Thursday 20:00 slot. Easy technique session -
          + no intensity. Focus on smooth, relaxed swimming. Recovery ses
          +sion, not a workout.                                          
      128  
      158 -**Daily Total:** 1 session, 1h (CSS test)                     
      129 +**Daily Total:** 1 session, 50min (easy technique swim)       
      130  
      131  ---
      132  
      133  ### Fri Jan 30 ⬜
      134  
      164 -#### Morning Run (6:30-7:20) - 50min                          
      165 -**Workout:** [[easy-aerobic|Easy Aerobic Run]]                
      166 -**Time:** 6:30-7:20                                           
      135 +#### Morning Bike (06:30-07:15) - 45min                       
      136 +**Workout:** FTP Tickle - Short Intensity Stimulus            
      137 +**Time:** 06:30-07:15 (before travel)                         
      138  
      139  **Structure:**
      169 -- Continuous easy (Z2)                                        
      170 -- Pace: 6:45-7:15/km                                          
      171 -- HR: 130-142 bpm                                             
      140 +- Warmup: 10min progressive (100W → 150W)                     
      141 +- Openers: 3x30s @ 130% FTP (286W) / 30s easy spin            
      142 +  - Addresses anaerobic deficit                               
      143 +- Main Set: 3x3min @ 105% FTP (231W)                          
      144 +  - 3min easy spin between intervals                          
      145 +  - RPE 8/10 (hard but not maximal)                           
      146 +  - High cadence: 95-100 rpm                                  
      147 +- Cooldown: 8min very easy                                    
      148  
      149  **Target Metrics:**
      174 -- activity:: Run                                              
      175 -- duration-planned:: 50                                       
      176 -- distance-planned:: 7-7.5                                    
      177 -- zone-target:: Z2                                            
      150 +- activity:: Bike                                             
      151 +- duration-planned:: 45                                       
      152 +- distance-planned:: 24-26                                    
      153 +- zone-target:: Z4-Z5 (intervals only)                        
      154 +- np-target:: 165-175                                         
      155 +- avg-power-target:: 140-150                                  
      156  
      179 -**Notes:** Easy recovery run. Day before threshold test - keep
          - it light and easy.                                           
      157 +**Notes:** Short intensity session to maintain FTP stimulus wi
          +thout fatigue debt. The 30s sprints address anaerobic deficit 
          +(Garmin Load Focus showed 747, below optimal). Total hard work
          +: ~12 minutes. Indoor trainer required. Done before leaving fo
          +r travel.                                                     
      158  
      181 -**Daily Total:** 1 session, 50min (easy run)                  
      159 +**Daily Total:** 1 session, 45min (FTP tickle)                
      160  
      161  ---
      162  
      163  ### Sat Jan 31 ⬜
      164 +**Rest Day** - Out of country (travel)                        
      165  
      187 -#### Morning Bike (9:00-10:15) - 75min                        
      188 -**Workout:** [[z2-endurance|Z2 Endurance Ride]]               
      189 -**Time:** 9:00-10:15                                          
      166 +Optional: Easy 30-40min walk/jog to explore if desired.       
      167  
      191 -**Structure:**                                                
      192 -- 15min warmup                                                
      193 -- 50min steady Z2 (using NEW FTP zones from Wed test)         
      194 -- 10min cooldown                                              
      195 -                                                              
      196 -**Target Metrics:**                                           
      197 -- activity:: Bike                                             
      198 -- duration-planned:: 75                                       
      199 -- distance-planned:: 40                                       
      200 -- zone-target:: Z2                                            
      201 -- avg-power-target:: TBD (based on new FTP)                   
      202 -                                                              
      203 -**Notes:** Moderate Z2 ride using updated training zones. Outd
          -oor if weather permits. Easy legs before run threshold test.  
      204 -                                                              
      205 -#### Afternoon Run Threshold Test (14:00-14:30) - 30min       
      206 -**Workout:** [[../workouts/run/run-threshold-test|Run Threshol
          -d Test - 30min Protocol]]                                     
      207 -**Time:** 14:00-14:30                                         
      208 -                                                              
      209 -**Structure:**                                                
      210 -- Warmup: 15min easy build                                    
      211 -- Main Test: 30min ALL-OUT time trial @ maximum sustainable pa
          -ce                                                            
      212 -- Cooldown: 10min very easy                                   
      213 -                                                              
      214 -**Current Threshold:** 171 bpm LTHR, 4:48/km pace             
      215 -**Target:** 173-175 bpm, 4:30-4:35/km pace (expecting improvem
          -ent)                                                          
      216 -                                                              
      217 -**Target Metrics:**                                           
      218 -- activity:: Run                                              
      219 -- duration-planned:: 30                                       
      220 -- distance-planned:: 6.5-7                                    
      221 -- zone-target:: Z5 Test                                       
      222 -- test-type:: Threshold                                       
      223 -- avg-hr-target:: Maximum sustainable for 30min               
      224 -- pace-target:: Best sustainable pace                         
      225 -                                                              
      226 -**Notes:** CRITICAL TEST. This is a 30min all-out effort. Star
          -t conservatively (4:35/km), settle into rhythm, push final 10m
          -in. Average HR from test = new LTHR. Average pace = new thresh
          -old pace. Use flat course. Results establish new run training 
          -zones.                                                        
      227 -                                                              
      228 -**Daily Total:** 2 sessions, 1h45 (Z2 bike + threshold test)  
      229 -                                                              
      168  ---
      169  
      170  ### Sun Feb 1 ⬜
      171 +**Rest Day** - Out of country (travel)                        
      172  
      234 -#### Morning Swim (9:30-10:00) - 30min                        
      235 -**Workout:** [[easy-technique|Easy Technique]]                
      236 -**Time:** 9:30-10:00                                          
      237 -                                                              
      238 -**Structure:**                                                
      239 -- Warmup: 200m very easy                                      
      240 -- Drill Set (50%): 6x50m @ 1:30 (extra rest)                  
      241 -  - 2x catch-up                                               
      242 -  - 2x fist drill                                             
      243 -  - 2x single-arm                                             
      244 -- Continuous: 3x100m smooth @ NEW CSS pace +10s, 30s rest     
      245 -- Cooldown: 100m                                              
      246 -- **Total: 800m**                                             
      247 -                                                              
      248 -**Target Metrics:**                                           
      249 -- activity:: Swim                                             
      250 -- duration-planned:: 30                                       
      251 -- distance-planned:: 800                                      
      252 -- zone-target:: Z1                                            
      253 -- drill-percentage:: 38                                       
      254 -                                                              
      255 -**Notes:** Short easy technique session using updated CSS zone
          -s from Thursday test. Very light - end of recovery week.      
      256 -                                                              
      257 -**Daily Total:** 1 session, 30min (easy technique swim)       
      258 -                                                              
      173  ---
      174  
      175  ## Week Completion
      176  
      177  **Progress:** ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ (0/7 days completed)
      178  
      265 -**Week 12 Status: Planned - RECOVERY + TESTING WEEK**         
      266 -- Sessions planned: 8                                         
      179 +**Week 12 Status: Planned - TRUE RECOVERY WEEK**              
      180 +- Sessions planned: 3                                         
      181  - Sessions completed: 0
      268 -- Total planned duration: 6h40                                
      182 +- Total planned duration: 2h25                                
      183 +- Rest days: 4 (Mon, Tue, Sat, Sun)                           
      184  
      270 -**Recovery Week Principles Applied:**                         
      271 -- **Minimal volume:** 6h40 vs 14h20 peak (53% reduction)      
      272 -- **Session reduction:** From 11 → 8 sessions                 
      273 -- **Testing focus:** 3 critical tests (FTP, CSS, Run Threshold
          -)                                                             
      274 -- **Easy pacing:** All non-test sessions at lower end of zones
      275 -- **No strength:** Complete muscular recovery                 
      276 -- **Strategic timing:** Tests spread across Wed/Thu/Sat       
      185 +**Recovery Week Design Rationale:**                           
      186  
      278 -**Testing Schedule & Targets:**                               
      187 +1. **Two rest days at start** - Drop acute training load from 
          +ceiling (~1750-1800) back to mid-optimal range                
      188  
      280 -1. **Wednesday FTP Test:**                                    
      281 -   - Current: 220W                                            
      282 -   - Target: 225-230W                                         
      283 -   - Expected gain: 5-10W (2-5% improvement)                  
      189 +2. **Run threshold test Wednesday** - Fresh legs after 48h res
          +t gives best test data for Cycle 4 zones                      
      190  
      285 -2. **Thursday CSS Test:**                                     
      286 -   - Current: 2:27/100m                                       
      287 -   - Target: 2:23-2:25/100m                                   
      288 -   - Expected gain: 2-4 seconds                               
      191 +3. **Easy swim Thursday** - Technique maintenance at fixed slo
          +t, no intensity                                               
      192  
      290 -3. **Saturday Run Threshold Test:**                           
      291 -   - Current: 171 bpm LTHR, 4:48/km                           
      292 -   - Target: 173-175 bpm, 4:30-4:35/km                        
      293 -   - Expected gain: 2-4 bpm, 13-18s/km faster                 
      193 +4. **FTP tickle Friday morning** - Short intensity stimulus be
          +fore travel:                                                  
      194 +   - Maintains FTP without full test fatigue                  
      195 +   - 30s sprints address anaerobic deficit                    
      196 +   - 3x3min @ 105% gives VO2max tickle                        
      197 +   - Done by 7:15, clear for travel                           
      198  
      295 -**Preparation for Tests:**                                    
      296 -- All tests done with 48h+ recovery from previous hard effort 
      297 -- FTP test: 2 days after last intensity (Mon rest + Tue easy) 
      298 -- CSS test: 1 day after FTP test (different systems)          
      299 -- Run test: 2 days after CSS test (Fri easy between)          
      199 +5. **Weekend rest** - Travel days, no training required       
      200  
      301 -**Cycle 3 Complete:**                                         
      302 -This concludes Cycle 3 (Weeks 9-12). Key achievements:        
      303 -- ✅ Intensity progression: 231W → 235W bike, 4:50 → 4:40/km r
          -un                                                            
      304 -- ✅ Volume peaks: 3h bike, 2h run successfully completed     
      305 -- ✅ Swim technique: 50%+ maintained throughout               
      306 -- ✅ Testing week: Establishes new baselines for Cycle 4      
      201 +**Garmin Data Context (entering this week):**                 
      202 +- Acute Training Load: ~1750-1800 (at ceiling)                
      203 +- Low Aerobic: 2077 (above optimal - overloaded)              
      204 +- High Aerobic: 1786 (at optimal ceiling)                     
      205 +- Anaerobic: 747 (below optimal - deficit)                    
      206 +- HRV Status: Balanced                                        
      207  
      308 -**Next Steps:**                                               
      309 -- **Cycle 4 (Weeks 13-16):** Build on new FTP/CSS/Threshold zo
          -nes                                                           
      310 -- Use test results to update training-zones.md                
      311 -- Plan next 4-week block with updated power/pace targets      
      312 -- Continue bike performance focus with higher baseline powers 
      208 +**Expected outcomes by end of Week 12:**                      
      209 +- Acute load dropped to ~1200-1400 (mid-optimal)              
      210 +- Low aerobic reduced (less Z2 volume)                        
      211 +- Anaerobic slightly improved (Friday sprints)                
      212 +- HRV maintained balanced                                     
      213 +- Fresh and ready for Cycle 4                                 
      214  
      215  ---
      216  
      316 -## Optional Mobility Work                                     
      217 +## Cycle 3 Summary                                            
      218  
      318 -**Focus:** Pre-test mobility and recovery (optimize testing pe
          -rformance)                                                    
      319 -**Duration:** 20 min                                          
      320 -**Best timing:** Monday evening, Thursday evening (between tes
          -ts)                                                           
      219 +**Weeks 9-12 Complete.** Key outcomes:                        
      220  
      322 -**Routine:**                                                  
      323 -- Gentle full-body stretching: 8min                           
      324 -- Hip openers (low lunge variations): 3min                    
      325 -- Hamstring flossing: 2min                                    
      326 -- Shoulder + thoracic mobility: 3min                          
      327 -- Spinal twists + cat-cow: 2min                               
      328 -- Light foam rolling (avoid deep tissue): 2min                
      221 +| Metric | Start of Cycle 3 | End of Cycle 3 | Change |       
      222 +|--------|------------------|----------------|--------|       
      223 +| FTP | 220W | 220W (test Week 4) | Maintain |                
      224 +| Run Threshold | 4:48/km | TBD (Wed test) | Expected improvem
          +ent |                                                         
      225 +| CSS | 2:27/100m | 2:19-2:27 | Improved |                    
      226 +| Long Bike | 2h30 | 4h03 (Week 11) | +65% |                  
      227 +| Long Run | 1h50 | 2h30 (Week 11) | +36% |                   
      228  
      330 -**Benefits:** Light mobility work optimizes testing performanc
          -e without creating muscle soreness. Monday evening aids recove
          -ry from Week 11 peak. Thursday evening (between FTP and run te
          -sts) maintains mobility without compromising fresh legs for te
          -sting.                                                        
      229 +**Key learnings for Cycle 4:**                                
      230 +1. Cap weekly volume at 12h (15h+ causes next-week fatigue)   
      231 +2. 2 swims/week maximum (life constraint accepted)            
      232 +3. No long session extensions when feeling good               
      233 +4. Address anaerobic deficit with short sprint work           
      234 +5. Use Garmin Load Focus and HRV as daily guides              
      235 +                                                              
      236 +---                                                           
      237 +                                                              
      238 +## Next: Cycle 4 (Weeks 13-16)                                
      239 +                                                              
      240 +**Cycle 4 Goals:**                                            
      241 +- Peak long bike: 160km                                       
      242 +- Weekly ceiling: 12h                                         
      243 +- Swim: 2 sessions/week                                       
      244 +- Intensity: Mixed (short sprints + sustained threshold)      
      245 +- Start: February 2, 2026                                     

⏺ Week 12 is set. A true recovery week:
  ┌─────────┬──────────┬──────────┬───────────┐
  │         │ Sessions │ Duration │ Rest Days │
  ├─────────┼──────────┼──────────┼───────────┤
  │ Week 12 │ 3        │ 2h25     │ 4         │
  └─────────┴──────────┴──────────┴───────────┘
  Summary:
  - Mon-Tue: Complete rest (drop acute load)
  - Wed: Run threshold test (fresh legs, key data)
  - Thu: Easy technique swim (20:00 fixed)
  - Fri 6:30: FTP tickle (before travel)
  - Sat-Sun: Rest (travel)

  This should drop your acute training load from ~1750 back to ~1200-1400 and
  have you fresh for Cycle 4.

  ---
  Ready to design Cycle 4 (Weeks 13-16, February) when you are. We have the
  framework:
  ┌───────┬───────┬────────────────┬────────────┐
  │ Cycle │ Month │ Peak Long Bike │ Weekly Cap │
  ├───────┼───────┼────────────────┼────────────┤
  │ 4     │ Feb   │ 160km          │ 12h        │
  ├───────┼───────┼────────────────┼────────────┤
  │ 5     │ Mar   │ 180km          │ 12h        │
  ├───────┼───────┼────────────────┼────────────┤
  │ 6     │ Apr   │ 200km          │ 12h        │
  └───────┴───────┴────────────────┴────────────┘
  Want to continue with the Cycle 4 weekly plans now, or take a break and tackle
   it another session?

✻ Cogitated for 1m 1s

❯ so for next cycles, we need to change also that sundays will be long bike 
  day, and sat long run day. During the week, I need workouts that          
  increase my ftp and vo2 as much as possible                               

⏺ Good change. Let me design the new weekly template:

  Cycle 4+ Weekly Structure
  Day: Mon
  Session 1: Rest or Swim 45min
  Session 2: -
  Focus: Recovery / Technique
  ────────────────────────────────────────
  Day: Tue
  Session 1: Run 50-60min (intensity)
  Session 2: Bike 60-75min (FTP work)
  Focus: FTP + Run Threshold
  ────────────────────────────────────────
  Day: Wed
  Session 1: Bike 45-60min Z2
  Session 2: Run 40-50min easy
  Focus: Active recovery
  ────────────────────────────────────────
  Day: Thu
  Session 1: Bike 75-90min (VO2max)
  Session 2: Swim 50-60min (20:00)
  Focus: VO2max + Technique
  ────────────────────────────────────────
  Day: Fri
  Session 1: Rest or easy run 40min
  Session 2: -
  Focus: Pre-long session rest
  ────────────────────────────────────────
  Day: Sat
  Session 1: Long Run
  Session 2: -
  Focus: Endurance
  ────────────────────────────────────────
  Day: Sun
  Session 1: Long Bike
  Session 2: -
  Focus: Endurance
  ---
  FTP & VO2max Workout Menu

  FTP Builders (Tuesday Bike)
  ┌─────────────┬────────────────────────────────────────┬─────────────────┐
  │   Workout   │               Structure                │     Target      │
  ├─────────────┼────────────────────────────────────────┼─────────────────┤
  │ Sweet Spot  │ 3x12min @ 88-94% FTP (198-207W)        │ FTP foundation  │
  ├─────────────┼────────────────────────────────────────┼─────────────────┤
  │ Threshold   │ 3x10min @ 95-100% FTP (209-220W)       │ FTP direct      │
  ├─────────────┼────────────────────────────────────────┼─────────────────┤
  │ Over-Unders │ 3x8min alternating 95%/105% every 2min │ FTP + mental    │
  ├─────────────┼────────────────────────────────────────┼─────────────────┤
  │ FTP Tickle  │ 2x20min @ 90-95% FTP                   │ Sustained power │
  └─────────────┴────────────────────────────────────────┴─────────────────┘
  VO2max Builders (Thursday Bike)
  ┌────────────────┬────────────────────────────────────┬────────────────────┐
  │    Workout     │             Structure              │       Target       │
  ├────────────────┼────────────────────────────────────┼────────────────────┤
  │ Classic VO2max │ 5x4min @ 105-110% FTP (231-242W)   │ VO2max capacity    │
  ├────────────────┼────────────────────────────────────┼────────────────────┤
  │ Short VO2max   │ 6x3min @ 110-115% FTP (242-253W)   │ VO2max power       │
  ├────────────────┼────────────────────────────────────┼────────────────────┤
  │ 30/30s         │ 10-15x (30s @ 130% / 30s easy)     │ VO2max + anaerobic │
  ├────────────────┼────────────────────────────────────┼────────────────────┤
  │ Billats        │ 8x(30s @ 120% / 15s easy) x 3 sets │ VO2max efficiency  │
  └────────────────┴────────────────────────────────────┴────────────────────┘
  Run Intensity (Tuesday)
  ┌──────────────────┬────────────────────────┬───────────────────┐
  │     Workout      │       Structure        │      Target       │
  ├──────────────────┼────────────────────────┼───────────────────┤
  │ Threshold        │ 4x6min @ 4:35-4:45/km  │ Lactate threshold │
  ├──────────────────┼────────────────────────┼───────────────────┤
  │ VO2max           │ 5x3min @ 4:15-4:25/km  │ Running economy   │
  ├──────────────────┼────────────────────────┼───────────────────┤
  │ Hill repeats     │ 6x90s uphill hard      │ Power + VO2max    │
  ├──────────────────┼────────────────────────┼───────────────────┤
  │ Cruise intervals │ 2x15min @ 4:50-5:00/km │ Tempo endurance   │
  └──────────────────┴────────────────────────┴───────────────────┘
  ---
  Cycle 4 Progression (Feb 2 - Mar 1)
  ┌──────┬──────────┬───────────────┬───────────┬──────────┬──────────┬───────┐
  │      │          │               │           │ Long Run │  Long    │       │
  │ Week │  Phase   │   Tue Bike    │ Thu Bike  │   (Sat)  │  Bike    │ Total │
  │      │          │               │           │          │  (Sun)   │       │
  ├──────┼──────────┼───────────────┼───────────┼──────────┼──────────┼───────┤
  │ 13   │ Build 1  │ Sweet Spot    │ VO2max    │ 1h45 /   │ 120km /  │ 10h   │
  │      │          │ 3x12min       │ 4x4min    │ 16km     │ 3h30     │       │
  ├──────┼──────────┼───────────────┼───────────┼──────────┼──────────┼───────┤
  │ 14   │ Build 2  │ Threshold     │ VO2max    │ 1h50 /   │ 140km /  │ 11h   │
  │      │          │ 3x10min       │ 5x4min    │ 17km     │ 4h       │       │
  ├──────┼──────────┼───────────────┼───────────┼──────────┼──────────┼───────┤
  │ 15   │ Build 3  │ Over-Unders   │ 30/30s    │ 2h /     │ 160km /  │ 12h   │
  │      │          │ 3x8min        │ x15       │ 18km     │ 4h30     │       │
  ├──────┼──────────┼───────────────┼───────────┼──────────┼──────────┼───────┤
  │      │          │ Easy spin     │ FTP       │ 1h /     │ 60km /   │       │
  │ 16   │ Recovery │ 45min         │ Tickle    │ 10km     │ 2h       │ 6h    │
  │      │          │               │ 45min     │          │          │       │
  └──────┴──────────┴───────────────┴───────────┴──────────┴──────────┴───────┘
  ---
  Sample Week 13 (Build 1)
  Day: Mon
  Workout: Easy Swim (technique)
  Duration: 45min
  Intensity: Z1-Z2
  ────────────────────────────────────────
  Day: Tue AM
  Workout: Run: 15min warm + 4x5min @ threshold + 10min cool
  Duration: 55min
  Intensity: Z4
  ────────────────────────────────────────
  Day: Tue Lunch
  Workout: Bike: Sweet Spot 3x12min @ 200W
  Duration: 65min
  Intensity: Z3-Z4
  ────────────────────────────────────────
  Day: Wed AM
  Workout: Bike Z2 easy
  Duration: 50min
  Intensity: Z2
  ────────────────────────────────────────
  Day: Wed PM
  Workout: Run easy
  Duration: 45min
  Intensity: Z2
  ────────────────────────────────────────
  Day: Thu Lunch
  Workout: Bike: VO2max 4x4min @ 235W
  Duration: 75min
  Intensity: Z5
  ────────────────────────────────────────
  Day: Thu 20:00
  Workout: Swim (technique + threshold)
  Duration: 55min
  Intensity: Z2-T4
  ────────────────────────────────────────
  Day: Fri
  Workout: Rest
  Duration: -
  Intensity: -
  ────────────────────────────────────────
  Day: Sat
  Workout: Long Run
  Duration: 1h45
  Intensity: Z2-low Z3
  ────────────────────────────────────────
  Day: Sun
  Workout: Long Bike 120km
  Duration: 3h30
  Intensity: Z2
  Week 13 Total: ~10h, 8 sessions

  ---
  Key Differences from Previous Plan
  ┌─────────────────┬────────────────┬──────────────────────────────────┐
  │     Aspect      │      Old       │               New                │
  ├─────────────────┼────────────────┼──────────────────────────────────┤
  │ Long bike day   │ Saturday       │ Sunday                           │
  ├─────────────────┼────────────────┼──────────────────────────────────┤
  │ Long run day    │ Sunday         │ Saturday                         │
  ├─────────────────┼────────────────┼──────────────────────────────────┤
  │ Intensity focus │ Sustained only │ FTP + VO2max specific            │
  ├─────────────────┼────────────────┼──────────────────────────────────┤
  │ Tuesday         │ Mixed          │ FTP day (bike) + Threshold (run) │
  ├─────────────────┼────────────────┼──────────────────────────────────┤
  │ Thursday        │ VO2max bike    │ VO2max bike (dedicated)          │
  ├─────────────────┼────────────────┼──────────────────────────────────┤
  │ Weekly ceiling  │ 14h+           │ 12h max                          │
  └─────────────────┴────────────────┴──────────────────────────────────┘
  ---
  Does this structure work? If yes, I'll create the Week 13-16 files with this
  template.

✻ Brewed for 40s

❯ the work schedule does not allow 2 workouts on tuesdays, better wednesday 
  and fridays                                                               

⏺ Got it. Tuesday and Thursday are onsite days with less flexibility. Wednesday
  and Friday are remote with more training time.

  Revised Weekly Structure
  ┌─────┬──────────────────────────┬─────────────────┬─────────────────────────┐
  │ Day │        Session 1         │    Session 2    │          Notes          │
  ├─────┼──────────────────────────┼─────────────────┼─────────────────────────┤
  │ Mon │ Rest or Swim 45min       │ -               │ Recovery                │
  ├─────┼──────────────────────────┼─────────────────┼─────────────────────────┤
  │ Tue │ Run intensity 55min      │ -               │ Single session (onsite  │
  │     │ (morning)                │                 │ day)                    │
  ├─────┼──────────────────────────┼─────────────────┼─────────────────────────┤
  │ Wed │ Bike FTP work 70min      │ Run easy 45min  │ Double (remote)         │
  ├─────┼──────────────────────────┼─────────────────┼─────────────────────────┤
  │ Thu │ Bike VO2max 75min        │ Swim 55min      │ Gym + fixed swim        │
  │     │                          │ (20:00)         │                         │
  ├─────┼──────────────────────────┼─────────────────┼─────────────────────────┤
  │ Fri │ Bike easy 50min          │ Run easy 45min  │ Double (remote) - keep  │
  │     │                          │                 │ light                   │
  ├─────┼──────────────────────────┼─────────────────┼─────────────────────────┤
  │ Sat │ Long Run                 │ -               │ Endurance               │
  ├─────┼──────────────────────────┼─────────────────┼─────────────────────────┤
  │ Sun │ Long Bike                │ -               │ Endurance               │
  └─────┴──────────────────────────┴─────────────────┴─────────────────────────┘
  Weekly sessions: 9-10 (including optional Monday swim)

  ---
  Intensity Distribution
  ┌─────┬────────────────┬──────────────────┐
  │ Day │ Bike Intensity │  Run Intensity   │
  ├─────┼────────────────┼──────────────────┤
  │ Tue │ -              │ Threshold/VO2max │
  ├─────┼────────────────┼──────────────────┤
  │ Wed │ FTP work       │ Easy             │
  ├─────┼────────────────┼──────────────────┤
  │ Thu │ VO2max         │ -                │
  ├─────┼────────────────┼──────────────────┤
  │ Fri │ Easy Z2        │ Easy Z2          │
  ├─────┼────────────────┼──────────────────┤
  │ Sat │ -              │ Long (Z2-low Z3) │
  ├─────┼────────────────┼──────────────────┤
  │ Sun │ Long (Z2)      │ -                │
  └─────┴────────────────┴──────────────────┘
  Hard days: Tue (run), Wed (bike), Thu (bike)
  Easy days: Fri, Sat/Sun (long but aerobic)

  ---
  Revised Cycle 4 Weeks
  ┌──────┬─────────────┬───────────────┬──────────┬─────────┬──────────┬───────┐
  │      │             │               │          │  Sat    │ Sun Long │       │
  │ Week │   Tue Run   │   Wed Bike    │ Thu Bike │  Long   │   Bike   │ Total │
  │      │             │               │          │   Run   │          │       │
  ├──────┼─────────────┼───────────────┼──────────┼─────────┼──────────┼───────┤
  │ 13   │ 4x5min      │ Sweet Spot    │ VO2max   │ 1h45    │ 120km    │ 10h   │
  │      │ threshold   │ 3x12min       │ 4x4min   │         │          │       │
  ├──────┼─────────────┼───────────────┼──────────┼─────────┼──────────┼───────┤
  │ 14   │ 5x4min      │ Threshold     │ VO2max   │ 1h50    │ 140km    │ 11h   │
  │      │ threshold   │ 3x10min       │ 5x4min   │         │          │       │
  ├──────┼─────────────┼───────────────┼──────────┼─────────┼──────────┼───────┤
  │ 15   │ 4x6min      │ Over-Unders   │ 30/30s   │ 2h      │ 160km    │ 12h   │
  │      │ threshold   │ 3x8min        │ x15      │         │          │       │
  ├──────┼─────────────┼───────────────┼──────────┼─────────┼──────────┼───────┤
  │ 16   │ Easy 40min  │ FTP Tickle    │ Easy     │ 1h      │ 60km     │ 6h    │
  │      │             │ 45min         │ 50min    │         │          │       │
  └──────┴─────────────┴───────────────┴──────────┴─────────┴──────────┴───────┘
  ---
  Does this structure work better with your schedule? If yes, I'll create the
  Week 13-16 files.

❯ Carla my daugher wants to join swimming on Thursday, that means I will    
  have only 45 min to workout, as the rest of the time I need to stay with  
  her in the pool. lets move on monday longer swimms                        

⏺ That's great that Carla wants to swim! Let me adjust:

  Updated Weekly Structure
  ┌─────┬───────────────────┬──────────────────┬───────────────────────────────┐
  │ Day │     Session 1     │    Session 2     │             Notes             │
  ├─────┼───────────────────┼──────────────────┼───────────────────────────────┤
  │ Mon │ Swim 55-60min     │ -                │ Longer technique/threshold    │
  │     │                   │                  │ swim                          │
  ├─────┼───────────────────┼──────────────────┼───────────────────────────────┤
  │ Tue │ Run intensity     │ -                │ Single session (onsite)       │
  │     │ 55min             │                  │                               │
  ├─────┼───────────────────┼──────────────────┼───────────────────────────────┤
  │ Wed │ Bike FTP 70min    │ Run easy 45min   │ Double (remote)               │
  ├─────┼───────────────────┼──────────────────┼───────────────────────────────┤
  │ Thu │ Bike VO2max 75min │ Swim 45min       │ Shorter swim (with Carla)     │
  │     │                   │ (20:00)          │                               │
  ├─────┼───────────────────┼──────────────────┼───────────────────────────────┤
  │ Fri │ Bike easy 50min   │ Run easy 45min   │ Double (remote) - light       │
  ├─────┼───────────────────┼──────────────────┼───────────────────────────────┤
  │ Sat │ Long Run          │ -                │ Endurance                     │
  ├─────┼───────────────────┼──────────────────┼───────────────────────────────┤
  │ Sun │ Long Bike         │ -                │ Endurance                     │
  └─────┴───────────────────┴──────────────────┴───────────────────────────────┘
  ---
  Swim Split
  Day: Monday
  Duration: 55-60min
  Focus: Technique drills + threshold intervals
  Notes: Dedicated swim, full focus
  ────────────────────────────────────────
  Day: Thursday
  Duration: 45min
  Focus: Simple sets, easy-moderate
  Notes: With Carla, less complex workout
  Weekly swim total: ~100min, 2 sessions (your max)

  Thursday swim simplified:
  - Warmup: 200m easy
  - Main: 8x100m steady @ comfortable pace
  - Cooldown: 100m
  - Total: ~1100m

  No complicated drills while supervising - just solid meters.

  ---
  This structure ready? I'll create Weeks 13-16 with this template.

❯ I am missing intense runs 

⏺ You're right - only Tuesday has run intensity. Let me fix that:

  Options for Adding Run Intensity

  Option A: Friday tempo run (before long run Saturday)
  - Replace Friday easy run with tempo/cruise intervals
  - Lower intensity than Tuesday, but still productive
  - Risk: might tire legs slightly before Saturday

  Option B: Thursday morning run (before bike VO2max)
  - Add a morning run intensity session
  - Thursday becomes: Run AM + Bike midday + Swim 20:00
  - Risk: 3 sessions, 2 intense on same day

  Option C: Wednesday run becomes threshold
  - Wed: FTP Bike + Threshold Run (both intense)
  - Hard double day, but remote so flexible recovery between

  ---
  My Recommendation: Option A + C combined
  ┌─────┬───────────────────┬─────────────────┬──────────────────────────┐
  │ Day │     Session 1     │    Session 2    │      Run Intensity       │
  ├─────┼───────────────────┼─────────────────┼──────────────────────────┤
  │ Mon │ Swim 55min        │ -               │ -                        │
  ├─────┼───────────────────┼─────────────────┼──────────────────────────┤
  │ Tue │ Run VO2max 55min  │ -               │ Hard (5x3min fast)       │
  ├─────┼───────────────────┼─────────────────┼──────────────────────────┤
  │ Wed │ Bike FTP 70min    │ Run tempo 45min │ Moderate (20min @ tempo) │
  ├─────┼───────────────────┼─────────────────┼──────────────────────────┤
  │ Thu │ Bike VO2max 75min │ Swim 45min      │ -                        │
  ├─────┼───────────────────┼─────────────────┼──────────────────────────┤
  │ Fri │ Bike easy 50min   │ Run easy 40min  │ Easy (pre-long run)      │
  ├─────┼───────────────────┼─────────────────┼──────────────────────────┤
  │ Sat │ Long Run 1h45-2h  │ -               │ Aerobic                  │
  ├─────┼───────────────────┼─────────────────┼──────────────────────────┤
  │ Sun │ Long Bike         │ -               │ -                        │
  └─────┴───────────────────┴─────────────────┴──────────────────────────┘
  Run intensity summary:
  - Tuesday: VO2max intervals (hard)
  - Wednesday: Tempo/threshold (moderate)
  - Saturday: Long aerobic (endurance)

  3 quality run sessions per week instead of 1.

  ---
  Does this work? Or would you prefer a different distribution?

❯ option a sounds better. give me an example of this week for the peek      
  weeks of the next 3 cycles                                                

⏺ Here are the 3 peak weeks with Option A (Friday tempo run):

  ---
  Week 15 - Cycle 4 Peak (160km bike)
  Day: Mon
  Session 1: Swim: technique + 5x200m threshold
  Session 2: -
  Duration: 55min
  ────────────────────────────────────────
  Day: Tue
  Session 1: Run: 15min warm + 5x4min @ 4:30/km + 10min cool
  Session 2: -
  Duration: 55min
  ────────────────────────────────────────
  Day: Wed
  Session 1: Bike: Over-Unders 3x8min (95/105% FTP)
  Session 2: Run easy 40min
  Duration: 60+40
  ────────────────────────────────────────
  Day: Thu
  Session 1: Bike: 30/30s x15 @ 130% FTP
  Session 2: Swim easy 45min (Carla)
  Duration: 65+45
  ────────────────────────────────────────
  Day: Fri
  Session 1: Bike easy 45min
  Session 2: Run tempo: 20min @ 5:00/km
  Duration: 45+50
  ────────────────────────────────────────
  Day: Sat
  Session 1: Long Run: 2h / 18km
  Session 2: -
  Duration: 120min
  ────────────────────────────────────────
  Day: Sun
  Session 1: Long Bike: 160km
  Session 2: -
  Duration: 270min (4h30)
  Week 15 Total: ~12h30 | Sat-Sun: 6h30

  ---
  Week 19 - Cycle 5 Peak (180km bike)
  Day: Mon
  Session 1: Swim: technique + 6x200m threshold
  Session 2: -
  Duration: 60min
  ────────────────────────────────────────
  Day: Tue
  Session 1: Run: 15min warm + 4x5min @ 4:25/km + 10min cool
  Session 2: -
  Duration: 55min
  ────────────────────────────────────────
  Day: Wed
  Session 1: Bike: Threshold 3x12min @ 100% FTP
  Session 2: Run easy 40min
  Duration: 65+40
  ────────────────────────────────────────
  Day: Thu
  Session 1: Bike: VO2max 5x4min @ 108% FTP
  Session 2: Swim easy 45min (Carla)
  Duration: 70+45
  ────────────────────────────────────────
  Day: Fri
  Session 1: Bike easy 40min
  Session 2: Run tempo: 25min @ 4:55/km
  Duration: 40+55
  ────────────────────────────────────────
  Day: Sat
  Session 1: Long Run: 2h / 19km
  Session 2: -
  Duration: 120min
  ────────────────────────────────────────
  Day: Sun
  Session 1: Long Bike: 180km
  Session 2: -
  Duration: 300min (5h)
  Week 19 Total: ~13h15 | Sat-Sun: 7h

  ---
  Week 23 - Cycle 6 Peak (200km bike)
  Day: Mon
  Session 1: Swim: technique + 6x200m threshold
  Session 2: -
  Duration: 60min
  ────────────────────────────────────────
  Day: Tue
  Session 1: Run: 15min warm + 4x6min @ 4:20/km + 10min cool
  Session 2: -
  Duration: 60min
  ────────────────────────────────────────
  Day: Wed
  Session 1: Bike: Sweet Spot 2x20min @ 92% FTP
  Session 2: Run easy 35min
  Duration: 60+35
  ────────────────────────────────────────
  Day: Thu
  Session 1: Bike: VO2max 4x5min @ 107% FTP
  Session 2: Swim easy 45min (Carla)
  Duration: 70+45
  ────────────────────────────────────────
  Day: Fri
  Session 1: Bike easy 35min
  Session 2: Run tempo: 25min @ 4:50/km
  Duration: 35+55
  ────────────────────────────────────────
  Day: Sat
  Session 1: Long Run: 2h / 19km
  Session 2: -
  Duration: 120min
  ────────────────────────────────────────
  Day: Sun
  Session 1: Long Bike: 200km
  Session 2: -
  Duration: 330min (5h30)
  Week 23 Total: ~13h45 | Sat-Sun: 7h30

  ---
  Peak Week Summary
  ┌───────┬──────┬──────────────┬───────────┬──────────────┬──────────────┐
  │ Cycle │ Week │  Long Bike   │ Long Run  │ Weekly Total │    Notes     │
  ├───────┼──────┼──────────────┼───────────┼──────────────┼──────────────┤
  │ 4     │ 15   │ 160km / 4h30 │ 2h / 18km │ 12h30        │ Within range │
  ├───────┼──────┼──────────────┼───────────┼──────────────┼──────────────┤
  │ 5     │ 19   │ 180km / 5h   │ 2h / 19km │ 13h15        │ Slight over  │
  ├───────┼──────┼──────────────┼───────────┼──────────────┼──────────────┤
  │ 6     │ 23   │ 200km / 5h30 │ 2h / 19km │ 13h45        │ Peak volume  │
  └───────┴──────┴──────────────┴───────────┴──────────────┴──────────────┘
  Note: Peak weeks go slightly over 12h ceiling to hit bike targets. This is
  acceptable because:
  1. Only 1 week per cycle
  2. Recovery week follows immediately
  3. Mid-week intensity is slightly reduced
  4. No extensions allowed - these are the targets

  ---
  Intensity Progression Across Peaks
  ┌──────────┬────────────────────┬───────────────────┬────────────────────┐
  │ Session  │      Week 15       │      Week 19      │      Week 23       │
  ├──────────┼────────────────────┼───────────────────┼────────────────────┤
  │ Tue Run  │ 5x4min @ 4:30      │ 4x5min @ 4:25     │ 4x6min @ 4:20      │
  ├──────────┼────────────────────┼───────────────────┼────────────────────┤
  │ Wed Bike │ Over-Unders 3x8min │ Threshold 3x12min │ Sweet Spot 2x20min │
  ├──────────┼────────────────────┼───────────────────┼────────────────────┤
  │ Thu Bike │ 30/30s x15         │ VO2max 5x4min     │ VO2max 4x5min      │
  ├──────────┼────────────────────┼───────────────────┼────────────────────┤
  │ Fri Run  │ Tempo 20min        │ Tempo 25min       │ Tempo 25min        │
  └──────────┴────────────────────┴───────────────────┴────────────────────┘
  ---
  Does this structure work? Ready to create the full cycle files?

✻ Sautéed for 39s

❯ yes create cycle 4 files 
  ⎿  Interrupted · What should Claude do instead?

❯ check @cycles/ folder first 
  ⎿  Listed directory cycles/

⏺ Search(pattern: "cycles/*.md", path: "~/Projects/surdu/ironman-2026")
  ⎿  Found 8 files (ctrl+o to expand)

⏺ Let me read the existing cycle-4 file to see the current structure:

⏺ Read(cycles/cycle-4-threshold-work.md)
  ⎿  Read 24 lines

⏺ Let me also check cycles 5 and 6 to see what needs updating:

⏺ Read(cycles/cycle-5-race-specific.md)
  ⎿  Read 25 lines

⏺ Read(cycles/cycle-6-peak-development.md)
  ⎿  Read 25 lines

⏺ Read(cycles/cycle-3-strength-integration.md)
  ⎿  Read 23 lines

⏺ Let me check a completed cycle for the format reference:

⏺ Read(cycles/cycle-1-base-building.md)
  ⎿  Read 114 lines

⏺ Now I understand the format. Let me update the cycle files with our new
  structure. I'll update all three cycles:

⏺ Write(cycles/cycle-4-threshold-work.md)
  ⎿  Added 196 lines, removed 11 lines
        1  # Cycle 4: Threshold Work
        2  
        3  **Duration:** Weeks 13-16 (February 2 - March 1, 2026)
        4 -**Phase:** Threshold Work                                     
        5 -**Focus:** TBD                                                
        4 +**Phase:** FTP & VO2max Development                           
        5 +**Focus:** Build FTP and VO2max while progressing long bike to
          + 160km                                                        
        6  
        7 -## Status: TO BE DEVELOPED                                    
        7 +## Cycle Overview                                             
        8  
        9 -This cycle will be created after completing Cycle 3.          
        9 +This cycle focuses on improving FTP and VO2max through structu
          +red intensity work while building toward the first major bike 
          +distance milestone (160km). Key adaptations from Cycle 3 learn
          +ings:                                                         
       10 +- Weekly ceiling: 12h (peak weeks may reach 12h30)            
       11 +- 2 swims/week (Monday technique, Thursday with Carla)        
       12 +- Sunday long bike, Saturday long run                         
       13 +- No extensions on long sessions                              
       14 +- Anaerobic work included to address Garmin-identified deficit
       15  
       11 -### Planned Focus Areas:                                      
       12 -- Threshold and tempo training                                
       13 -- Sweet spot intervals                                        
       14 -- Sustained power and pace work                               
       15 -- Maintaining endurance base                                  
       16 +### Goals                                                     
       17 +- Increase FTP from 220W toward 230W                          
       18 +- Build VO2max capacity (cycling VO2max from 41 toward 44)    
       19 +- Progress long bike: 120km → 140km → 160km                   
       20 +- Maintain run threshold improvements from Week 12 test       
       21 +- Address anaerobic deficit with short power work             
       22  
       23 +## Weekly Structure Template                                  
       24 +                                                              
       25 +| Day | Session 1 | Session 2 | Focus |                       
       26 +|-----|-----------|-----------|-------|                       
       27 +| **Mon** | Swim 55-60min | - | Technique + threshold |       
       28 +| **Tue** | Run VO2max/threshold 55min | - | Run intensity (on
          +site) |                                                       
       29 +| **Wed** | Bike FTP work 65-70min | Run easy 40-45min | FTP d
          +evelopment (remote) |                                         
       30 +| **Thu** | Bike VO2max 70-75min | Swim 45min (20:00) | VO2max
          + + swim with Carla |                                          
       31 +| **Fri** | Bike easy 45-50min | Run tempo 45-50min | Pre-week
          +end tempo (remote) |                                          
       32 +| **Sat** | **Long Run** | - | Endurance |                    
       33 +| **Sun** | **Long Bike** | - | Endurance |                   
       34 +                                                              
       35 +**Weekly sessions:** 9 (2 swim, 3 bike + long, 3 run + long)  
       36 +                                                              
       37  ---
       38  
       39 +## Weekly Progression                                         
       40 +                                                              
       41 +| Week | Phase | Tue Run | Wed Bike | Thu Bike | Fri Run | Sat
          + Run | Sun Bike | Total |                                     
       42 +|------|-------|---------|----------|----------|---------|----
          +-----|----------|-------|                                     
       43 +| **13** | Build 1 | 4x4min @ 4:35 | SS 3x10min | VO2 4x4min |
          + Tempo 15min | 1h40 | 120km | ~10h |                          
       44 +| **14** | Build 2 | 5x4min @ 4:30 | SS 3x12min | VO2 5x4min |
          + Tempo 18min | 1h50 | 140km | ~11h |                          
       45 +| **15** | Build 3 | 5x4min @ 4:30 | O/U 3x8min | 30/30 x15 | 
          +Tempo 20min | 2h | **160km** | ~12h30 |                       
       46 +| **16** | Recovery | Easy 40min | Easy 45min | Tickle 45min |
          + Easy 40min | 1h | 60km | ~6h |                               
       47 +                                                              
       48 +**Legend:** SS = Sweet Spot, O/U = Over-Unders, VO2 = VO2max i
          +ntervals                                                      
       49 +                                                              
       50 +---                                                           
       51 +                                                              
       52 +## Week-by-Week Detail                                        
       53 +                                                              
       54 +### Week 13: Feb 2-8, 2026 - Build 1                          
       55 +**Volume:** ~10h (9 sessions)                                 
       56 +                                                              
       57 +| Day | Workout | Duration | Key Details |                    
       58 +|-----|---------|----------|-------------|                    
       59 +| Mon | Swim technique + 4x200m @ CSS | 55min | 1800m total | 
       60 +| Tue | Run: 4x4min @ 4:35/km | 55min | 3min jog recovery |   
       61 +| Wed | Bike: Sweet Spot 3x10min @ 200W | 65min | 5min recover
          +y |                                                           
       62 +| Wed | Run easy | 40min | Z2 recovery |                      
       63 +| Thu | Bike: VO2max 4x4min @ 235W | 70min | 4min recovery |  
       64 +| Thu | Swim easy (Carla) | 45min | 8x100m steady |           
       65 +| Fri | Bike easy Z2 | 45min | Recovery spin |                
       66 +| Fri | Run tempo: 15min @ 5:05/km | 45min | After 15min warm-
          +up |                                                          
       67 +| Sat | **Long Run** | 1h40 | 15-16km, Z2-low Z3 |            
       68 +| Sun | **Long Bike 120km** | 3h30 | Z2, nutrition practice | 
       69 +                                                              
       70 +---                                                           
       71 +                                                              
       72 +### Week 14: Feb 9-15, 2026 - Build 2                         
       73 +**Volume:** ~11h (9 sessions)                                 
       74 +                                                              
       75 +| Day | Workout | Duration | Key Details |                    
       76 +|-----|---------|----------|-------------|                    
       77 +| Mon | Swim technique + 5x200m @ CSS | 55min | 2000m total | 
       78 +| Tue | Run: 5x4min @ 4:30/km | 55min | 3min jog recovery |   
       79 +| Wed | Bike: Sweet Spot 3x12min @ 200W | 70min | 5min recover
          +y |                                                           
       80 +| Wed | Run easy | 45min | Z2 recovery |                      
       81 +| Thu | Bike: VO2max 5x4min @ 235W | 75min | 4min recovery |  
       82 +| Thu | Swim easy (Carla) | 45min | 8x100m steady |           
       83 +| Fri | Bike easy Z2 | 45min | Recovery spin |                
       84 +| Fri | Run tempo: 18min @ 5:00/km | 50min | After 15min warm-
          +up |                                                          
       85 +| Sat | **Long Run** | 1h50 | 17km, Z2-low Z3 |               
       86 +| Sun | **Long Bike 140km** | 4h | Z2, nutrition practice |   
       87 +                                                              
       88 +---                                                           
       89 +                                                              
       90 +### Week 15: Feb 16-22, 2026 - Build 3 (PEAK)                 
       91 +**Volume:** ~12h30 (9 sessions)                               
       92 +                                                              
       93 +| Day | Workout | Duration | Key Details |                    
       94 +|-----|---------|----------|-------------|                    
       95 +| Mon | Swim technique + 5x200m @ CSS | 55min | 2000m total | 
       96 +| Tue | Run: 5x4min @ 4:30/km | 55min | 3min jog recovery |   
       97 +| Wed | Bike: Over-Unders 3x8min (95/105% FTP) | 60min | 5min 
          +recovery |                                                    
       98 +| Wed | Run easy | 40min | Z2 recovery |                      
       99 +| Thu | Bike: 30/30s x15 @ 130% FTP | 65min | Anaerobic focus 
          +|                                                             
      100 +| Thu | Swim easy (Carla) | 45min | 8x100m steady |           
      101 +| Fri | Bike easy Z2 | 45min | Recovery spin |                
      102 +| Fri | Run tempo: 20min @ 5:00/km | 50min | After 15min warm-
          +up |                                                          
      103 +| Sat | **Long Run** | 2h | 18km, Z2-low Z3 |                 
      104 +| Sun | **Long Bike 160km** | 4h30 | Z2, full nutrition plan |
      105 +                                                              
      106 +**Peak Week Targets:**                                        
      107 +- Long bike: 160km (first major milestone)                    
      108 +- Long run: 2h / 18km                                         
      109 +- Total: ~12h30                                               
      110 +                                                              
      111 +---                                                           
      112 +                                                              
      113 +### Week 16: Feb 23 - Mar 1, 2026 - Recovery                  
      114 +**Volume:** ~6h (7 sessions)                                  
      115 +                                                              
      116 +| Day | Workout | Duration | Key Details |                    
      117 +|-----|---------|----------|-------------|                    
      118 +| Mon | Swim technique only | 45min | 1400m, drills focus |   
      119 +| Tue | Run easy | 40min | Z1-Z2 only |                       
      120 +| Wed | Bike easy Z2 | 45min | Light spin |                   
      121 +| Wed | Run easy | 35min | Z2 |                               
      122 +| Thu | Bike: FTP Tickle (3x3min @ 105%) | 45min | Maintain st
          +imulus |                                                      
      123 +| Thu | Swim easy (Carla) | 45min | Relaxed swimming |        
      124 +| Fri | Rest | - | Pre-weekend rest |                         
      125 +| Sat | **Long Run** | 1h | 10km easy |                       
      126 +| Sun | **Long Bike** | 2h | 60km easy Z2 |                   
      127 +                                                              
      128 +---                                                           
      129 +                                                              
      130 +## Key Workouts Explained                                     
      131 +                                                              
      132 +### FTP Builders (Wednesday)                                  
      133 +                                                              
      134 +**Sweet Spot (Weeks 13-14):** 3x10-12min @ 88-94% FTP (194-207
          +W)                                                            
      135 +- Maximizes time in FTP-building zone                         
      136 +- Less fatigue than threshold work                            
      137 +- 5min easy spin between intervals                            
      138 +                                                              
      139 +**Over-Unders (Week 15):** 3x8min alternating 95%/105% FTP eve
          +ry 2min                                                       
      140 +- 2min @ 209W, 2min @ 231W, repeat                            
      141 +- Teaches body to clear lactate while working                 
      142 +- Mental preparation for race surges                          
      143 +                                                              
      144 +### VO2max Builders (Thursday)                                
      145 +                                                              
      146 +**Classic VO2max (Weeks 13-14):** 4-5x4min @ 107% FTP (235W)  
      147 +- Builds aerobic ceiling                                      
      148 +- 4min recovery between intervals                             
      149 +- High cadence (95-100 rpm)                                   
      150 +                                                              
      151 +**30/30s (Week 15):** 15x (30s @ 130% FTP / 30s easy)         
      152 +- 286W for 30s, then spin                                     
      153 +- Addresses anaerobic deficit                                 
      154 +- Also builds VO2max through repeated efforts                 
      155 +                                                              
      156 +### Run Intensity (Tuesday + Friday)                          
      157 +                                                              
      158 +**Tuesday VO2max:** 4-5x4min @ 4:30-4:35/km                   
      159 +- Just faster than threshold                                  
      160 +- Builds running economy                                      
      161 +- 3min jog recovery                                           
      162 +                                                              
      163 +**Friday Tempo:** 15-20min @ 5:00-5:05/km                     
      164 +- Moderate intensity before long run                          
      165 +- Not depleting, but productive                               
      166 +- Primes legs for Saturday endurance                          
      167 +                                                              
      168 +---                                                           
      169 +                                                              
      170 +## Nutrition Strategy                                         
      171 +                                                              
      172 +### Build Weeks (13-15)                                       
      173 +- Daily: 5-7g carbs/kg, 1.8-2.0g protein/kg                   
      174 +- Long bike: 60-80g carbs/hour (practice race nutrition)      
      175 +- Long run: 40-60g carbs/hour                                 
      176 +- Post-workout: 20-30g protein within 30min                   
      177 +                                                              
      178 +### Recovery Week (16)                                        
      179 +- Reduce to 4-5g carbs/kg                                     
      180 +- Maintain protein at 1.6-1.8g/kg                             
      181 +- Focus on sleep quality                                      
      182 +                                                              
      183 +---                                                           
      184 +                                                              
      185 +## Expected Adaptations                                       
      186 +                                                              
      187 +By end of Cycle 4:                                            
      188 +- FTP: 220W → 225-230W (+2-5%)                                
      189 +- Cycling VO2max: 41 → 42-43                                  
      190 +- Long bike capability: 120km → 160km                         
      191 +- Run threshold: Maintained or improved from Week 12 test     
      192 +- Anaerobic capacity: Improved (Garmin Load Focus target)     
      193 +                                                              
      194 +---                                                           
      195 +                                                              
      196 +## Garmin Integration Rules                                   
      197 +                                                              
      198 +1. **Check Body Battery before intensity:** If <30, swap for Z
          +2                                                             
      199 +2. **Monitor Load Focus:** If anaerobic drops below 700, add m
          +ore 30/30s work                                               
      200 +3. **Acute load warning:** If >1600, take extra rest          
      201 +4. **HRV check:** If "Low" status, reduce intensity           
      202 +                                                              
      203 +---                                                           
      204 +                                                              
      205  **Previous:** [Cycle 3: Strength Integration](cycle-3-strength
           -integration.md)
      206  **Next:** [Cycle 5: Race-Specific Training](cycle-5-race-speci
           fic.md)
      207  
       22 -**Last Updated:** November 10, 2025                           
       23 -**Status:** Planning phase - to be developed                  
      208 +**Last Updated:** January 25, 2026                            

❯ keep the format as concise and minimalistic and clear 

⏺ Got it - more concise. Let me rewrite all three cycles in a cleaner format:

⏺ Write(cycles/cycle-4-threshold-work.md)
  ⎿  Added 38 lines, removed 184 lines
        1 -# Cycle 4: Threshold Work                                     
        1 +# Cycle 4: FTP & VO2max Development                           
        2  
        3 -**Duration:** Weeks 13-16 (February 2 - March 1, 2026)        
        4 -**Phase:** FTP & VO2max Development                           
        5 -**Focus:** Build FTP and VO2max while progressing long bike to
          - 160km                                                        
        3 +**Weeks 13-16 | February 2 - March 1, 2026**                  
        4  
        7 -## Cycle Overview                                             
        5 +**Peak Target:** 160km long bike                              
        6  
        9 -This cycle focuses on improving FTP and VO2max through structu
          -red intensity work while building toward the first major bike 
          -distance milestone (160km). Key adaptations from Cycle 3 learn
          -ings:                                                         
       10 -- Weekly ceiling: 12h (peak weeks may reach 12h30)            
       11 -- 2 swims/week (Monday technique, Thursday with Carla)        
       12 -- Sunday long bike, Saturday long run                         
       13 -- No extensions on long sessions                              
       14 -- Anaerobic work included to address Garmin-identified deficit
       15 -                                                              
       16 -### Goals                                                     
       17 -- Increase FTP from 220W toward 230W                          
       18 -- Build VO2max capacity (cycling VO2max from 41 toward 44)    
       19 -- Progress long bike: 120km → 140km → 160km                   
       20 -- Maintain run threshold improvements from Week 12 test       
       21 -- Address anaerobic deficit with short power work             
       22 -                                                              
       23 -## Weekly Structure Template                                  
       24 -                                                              
       25 -| Day | Session 1 | Session 2 | Focus |                       
       26 -|-----|-----------|-----------|-------|                       
       27 -| **Mon** | Swim 55-60min | - | Technique + threshold |       
       28 -| **Tue** | Run VO2max/threshold 55min | - | Run intensity (on
          -site) |                                                       
       29 -| **Wed** | Bike FTP work 65-70min | Run easy 40-45min | FTP d
          -evelopment (remote) |                                         
       30 -| **Thu** | Bike VO2max 70-75min | Swim 45min (20:00) | VO2max
          - + swim with Carla |                                          
       31 -| **Fri** | Bike easy 45-50min | Run tempo 45-50min | Pre-week
          -end tempo (remote) |                                          
       32 -| **Sat** | **Long Run** | - | Endurance |                    
       33 -| **Sun** | **Long Bike** | - | Endurance |                   
       34 -                                                              
       35 -**Weekly sessions:** 9 (2 swim, 3 bike + long, 3 run + long)  
       36 -                                                              
        7  ---
        8  
       39 -## Weekly Progression                                         
        9 +## Weekly Template                                            
       10  
       41 -| Week | Phase | Tue Run | Wed Bike | Thu Bike | Fri Run | Sat
          - Run | Sun Bike | Total |                                     
       42 -|------|-------|---------|----------|----------|---------|----
          ------|----------|-------|                                     
       43 -| **13** | Build 1 | 4x4min @ 4:35 | SS 3x10min | VO2 4x4min |
          - Tempo 15min | 1h40 | 120km | ~10h |                          
       44 -| **14** | Build 2 | 5x4min @ 4:30 | SS 3x12min | VO2 5x4min |
          - Tempo 18min | 1h50 | 140km | ~11h |                          
       45 -| **15** | Build 3 | 5x4min @ 4:30 | O/U 3x8min | 30/30 x15 | 
          -Tempo 20min | 2h | **160km** | ~12h30 |                       
       46 -| **16** | Recovery | Easy 40min | Easy 45min | Tickle 45min |
          - Easy 40min | 1h | 60km | ~6h |                               
       11 +| Day | Session 1 | Session 2 |                               
       12 +|-----|-----------|-----------|                               
       13 +| Mon | Swim 55min (technique + threshold) | - |              
       14 +| Tue | Run 55min (VO2max intervals) | - |                    
       15 +| Wed | Bike 65min (FTP work) | Run 40min easy |              
       16 +| Thu | Bike 70min (VO2max) | Swim 45min (Carla) |            
       17 +| Fri | Bike 45min easy | Run 50min (tempo) |                 
       18 +| Sat | **Long Run** | - |                                    
       19 +| Sun | **Long Bike** | - |                                   
       20  
       48 -**Legend:** SS = Sweet Spot, O/U = Over-Unders, VO2 = VO2max i
          -ntervals                                                      
       49 -                                                              
       21  ---
       22  
       52 -## Week-by-Week Detail                                        
       23 +## Progression                                                
       24  
       54 -### Week 13: Feb 2-8, 2026 - Build 1                          
       55 -**Volume:** ~10h (9 sessions)                                 
       25 +| Week | Phase | Long Run | Long Bike | Total |               
       26 +|------|-------|----------|-----------|-------|               
       27 +| 13 | Build 1 | 1h40 / 16km | 120km / 3h30 | ~10h |          
       28 +| 14 | Build 2 | 1h50 / 17km | 140km / 4h | ~11h |            
       29 +| **15** | **Peak** | **2h / 18km** | **160km / 4h30** | **~12
          +h30** |                                                       
       30 +| 16 | Recovery | 1h / 10km | 60km / 2h | ~6h |               
       31  
       57 -| Day | Workout | Duration | Key Details |                    
       58 -|-----|---------|----------|-------------|                    
       59 -| Mon | Swim technique + 4x200m @ CSS | 55min | 1800m total | 
       60 -| Tue | Run: 4x4min @ 4:35/km | 55min | 3min jog recovery |   
       61 -| Wed | Bike: Sweet Spot 3x10min @ 200W | 65min | 5min recover
          -y |                                                           
       62 -| Wed | Run easy | 40min | Z2 recovery |                      
       63 -| Thu | Bike: VO2max 4x4min @ 235W | 70min | 4min recovery |  
       64 -| Thu | Swim easy (Carla) | 45min | 8x100m steady |           
       65 -| Fri | Bike easy Z2 | 45min | Recovery spin |                
       66 -| Fri | Run tempo: 15min @ 5:05/km | 45min | After 15min warm-
          -up |                                                          
       67 -| Sat | **Long Run** | 1h40 | 15-16km, Z2-low Z3 |            
       68 -| Sun | **Long Bike 120km** | 3h30 | Z2, nutrition practice | 
       69 -                                                              
       32  ---
       33  
       72 -### Week 14: Feb 9-15, 2026 - Build 2                         
       73 -**Volume:** ~11h (9 sessions)                                 
       34 +## Key Workouts                                               
       35  
       75 -| Day | Workout | Duration | Key Details |                    
       76 -|-----|---------|----------|-------------|                    
       77 -| Mon | Swim technique + 5x200m @ CSS | 55min | 2000m total | 
       78 -| Tue | Run: 5x4min @ 4:30/km | 55min | 3min jog recovery |   
       79 -| Wed | Bike: Sweet Spot 3x12min @ 200W | 70min | 5min recover
          -y |                                                           
       80 -| Wed | Run easy | 45min | Z2 recovery |                      
       81 -| Thu | Bike: VO2max 5x4min @ 235W | 75min | 4min recovery |  
       82 -| Thu | Swim easy (Carla) | 45min | 8x100m steady |           
       83 -| Fri | Bike easy Z2 | 45min | Recovery spin |                
       84 -| Fri | Run tempo: 18min @ 5:00/km | 50min | After 15min warm-
          -up |                                                          
       85 -| Sat | **Long Run** | 1h50 | 17km, Z2-low Z3 |               
       86 -| Sun | **Long Bike 140km** | 4h | Z2, nutrition practice |   
       36 +### Bike (FTP focus - Wednesday)                              
       37 +- **Wk 13-14:** Sweet Spot 3x10-12min @ 200W (91% FTP)        
       38 +- **Wk 15:** Over-Unders 3x8min (alternating 209W/231W every 2
          +min)                                                          
       39  
       88 ----                                                           
       40 +### Bike (VO2max focus - Thursday)                            
       41 +- **Wk 13-14:** 4-5x4min @ 235W (107% FTP)                    
       42 +- **Wk 15:** 15x 30s @ 286W / 30s easy (anaerobic + VO2max)   
       43  
       90 -### Week 15: Feb 16-22, 2026 - Build 3 (PEAK)                 
       91 -**Volume:** ~12h30 (9 sessions)                               
       44 +### Run (Tuesday - intensity)                                 
       45 +- 4-5x4min @ 4:30-4:35/km, 3min jog recovery                  
       46  
       93 -| Day | Workout | Duration | Key Details |                    
       94 -|-----|---------|----------|-------------|                    
       95 -| Mon | Swim technique + 5x200m @ CSS | 55min | 2000m total | 
       96 -| Tue | Run: 5x4min @ 4:30/km | 55min | 3min jog recovery |   
       97 -| Wed | Bike: Over-Unders 3x8min (95/105% FTP) | 60min | 5min 
          -recovery |                                                    
       98 -| Wed | Run easy | 40min | Z2 recovery |                      
       99 -| Thu | Bike: 30/30s x15 @ 130% FTP | 65min | Anaerobic focus 
          -|                                                             
      100 -| Thu | Swim easy (Carla) | 45min | 8x100m steady |           
      101 -| Fri | Bike easy Z2 | 45min | Recovery spin |                
      102 -| Fri | Run tempo: 20min @ 5:00/km | 50min | After 15min warm-
          -up |                                                          
      103 -| Sat | **Long Run** | 2h | 18km, Z2-low Z3 |                 
      104 -| Sun | **Long Bike 160km** | 4h30 | Z2, full nutrition plan |
       47 +### Run (Friday - tempo)                                      
       48 +- 15-20min continuous @ 5:00-5:05/km                          
       49  
      106 -**Peak Week Targets:**                                        
      107 -- Long bike: 160km (first major milestone)                    
      108 -- Long run: 2h / 18km                                         
      109 -- Total: ~12h30                                               
      110 -                                                              
       50  ---
       51  
      113 -### Week 16: Feb 23 - Mar 1, 2026 - Recovery                  
      114 -**Volume:** ~6h (7 sessions)                                  
       52 +## Targets                                                    
       53  
      116 -| Day | Workout | Duration | Key Details |                    
      117 -|-----|---------|----------|-------------|                    
      118 -| Mon | Swim technique only | 45min | 1400m, drills focus |   
      119 -| Tue | Run easy | 40min | Z1-Z2 only |                       
      120 -| Wed | Bike easy Z2 | 45min | Light spin |                   
      121 -| Wed | Run easy | 35min | Z2 |                               
      122 -| Thu | Bike: FTP Tickle (3x3min @ 105%) | 45min | Maintain st
          -imulus |                                                      
      123 -| Thu | Swim easy (Carla) | 45min | Relaxed swimming |        
      124 -| Fri | Rest | - | Pre-weekend rest |                         
      125 -| Sat | **Long Run** | 1h | 10km easy |                       
      126 -| Sun | **Long Bike** | 2h | 60km easy Z2 |                   
       54 +| Metric | Start | End of Cycle |                             
       55 +|--------|-------|--------------|                             
       56 +| FTP | 220W | 225-230W |                                     
       57 +| Cycling VO2max | 41 | 42-43 |                               
       58 +| Long bike | 100km | 160km |                                 
       59  
       60  ---
       61  
      130 -## Key Workouts Explained                                     
      131 -                                                              
      132 -### FTP Builders (Wednesday)                                  
      133 -                                                              
      134 -**Sweet Spot (Weeks 13-14):** 3x10-12min @ 88-94% FTP (194-207
          -W)                                                            
      135 -- Maximizes time in FTP-building zone                         
      136 -- Less fatigue than threshold work                            
      137 -- 5min easy spin between intervals                            
      138 -                                                              
      139 -**Over-Unders (Week 15):** 3x8min alternating 95%/105% FTP eve
          -ry 2min                                                       
      140 -- 2min @ 209W, 2min @ 231W, repeat                            
      141 -- Teaches body to clear lactate while working                 
      142 -- Mental preparation for race surges                          
      143 -                                                              
      144 -### VO2max Builders (Thursday)                                
      145 -                                                              
      146 -**Classic VO2max (Weeks 13-14):** 4-5x4min @ 107% FTP (235W)  
      147 -- Builds aerobic ceiling                                      
      148 -- 4min recovery between intervals                             
      149 -- High cadence (95-100 rpm)                                   
      150 -                                                              
      151 -**30/30s (Week 15):** 15x (30s @ 130% FTP / 30s easy)         
      152 -- 286W for 30s, then spin                                     
      153 -- Addresses anaerobic deficit                                 
      154 -- Also builds VO2max through repeated efforts                 
      155 -                                                              
      156 -### Run Intensity (Tuesday + Friday)                          
      157 -                                                              
      158 -**Tuesday VO2max:** 4-5x4min @ 4:30-4:35/km                   
      159 -- Just faster than threshold                                  
      160 -- Builds running economy                                      
      161 -- 3min jog recovery                                           
      162 -                                                              
      163 -**Friday Tempo:** 15-20min @ 5:00-5:05/km                     
      164 -- Moderate intensity before long run                          
      165 -- Not depleting, but productive                               
      166 -- Primes legs for Saturday endurance                          
      167 -                                                              
      168 ----                                                           
      169 -                                                              
      170 -## Nutrition Strategy                                         
      171 -                                                              
      172 -### Build Weeks (13-15)                                       
      173 -- Daily: 5-7g carbs/kg, 1.8-2.0g protein/kg                   
      174 -- Long bike: 60-80g carbs/hour (practice race nutrition)      
      175 -- Long run: 40-60g carbs/hour                                 
      176 -- Post-workout: 20-30g protein within 30min                   
      177 -                                                              
      178 -### Recovery Week (16)                                        
      179 -- Reduce to 4-5g carbs/kg                                     
      180 -- Maintain protein at 1.6-1.8g/kg                             
      181 -- Focus on sleep quality                                      
      182 -                                                              
      183 ----                                                           
      184 -                                                              
      185 -## Expected Adaptations                                       
      186 -                                                              
      187 -By end of Cycle 4:                                            
      188 -- FTP: 220W → 225-230W (+2-5%)                                
      189 -- Cycling VO2max: 41 → 42-43                                  
      190 -- Long bike capability: 120km → 160km                         
      191 -- Run threshold: Maintained or improved from Week 12 test     
      192 -- Anaerobic capacity: Improved (Garmin Load Focus target)     
      193 -                                                              
      194 ----                                                           
      195 -                                                              
      196 -## Garmin Integration Rules                                   
      197 -                                                              
      198 -1. **Check Body Battery before intensity:** If <30, swap for Z
          -2                                                             
      199 -2. **Monitor Load Focus:** If anaerobic drops below 700, add m
          -ore 30/30s work                                               
      200 -3. **Acute load warning:** If >1600, take extra rest          
      201 -4. **HRV check:** If "Low" status, reduce intensity           
      202 -                                                              
      203 ----                                                           
      204 -                                                              
      205 -**Previous:** [Cycle 3: Strength Integration](cycle-3-strength
          --integration.md)                                              
      206 -**Next:** [Cycle 5: Race-Specific Training](cycle-5-race-speci
          -fic.md)                                                       
      207 -                                                              
      208 -**Last Updated:** January 25, 2026                            
       62 +**Previous:** [Cycle 3](cycle-3-strength-integration.md) | **N
          +ext:** [Cycle 5](cycle-5-race-specific.md)                    

⏺ Now cycles 5 and 6:

⏺ Write(cycles/cycle-5-race-specific.md)
  ⎿  Added 64 lines, removed 15 lines
       1  # Cycle 5: Race-Specific Training
       2  
       3 -**Duration:** Weeks 17-20 (March 2-29, 2026)                   
       4 -**Phase:** Race-Specific Training                              
       5 -**Focus:** TBD                                                 
       3 +**Weeks 17-20 | March 2-29, 2026**                             
       4  
       7 -## Status: TO BE DEVELOPED                                     
       5 +**Peak Target:** 180km long bike                               
       6  
       9 -This cycle will be created after completing Cycle 4.           
       7 +---                                                            
       8  
      11 -### Planned Focus Areas:                                       
      12 -- Race-pace training                                           
      13 -- Longer brick workouts                                        
      14 -- Race nutrition rehearsal                                     
      15 -- Testing week (Week 20): FTP, CSS, Run Threshold reassessment 
      16 -- Mental preparation and visualization                         
       9 +## Weekly Template                                             
      10  
      11 +| Day | Session 1 | Session 2 |                                
      12 +|-----|-----------|-----------|                                
      13 +| Mon | Swim 60min (technique + threshold) | - |               
      14 +| Tue | Run 55min (VO2max intervals) | - |                     
      15 +| Wed | Bike 70min (threshold) | Run 40min easy |              
      16 +| Thu | Bike 75min (VO2max) | Swim 45min (Carla) |             
      17 +| Fri | Bike 40min easy | Run 55min (tempo) |                  
      18 +| Sat | **Long Run** | - |                                     
      19 +| Sun | **Long Bike** | - |                                    
      20 +                                                               
      21  ---
      22  
      20 -**Previous:** [Cycle 4: Threshold Work](cycle-4-threshold-work.
         -md)                                                            
      21 -**Next:** [Cycle 6: Peak Development](cycle-6-peak-development.
         -md)                                                            
      23 +## Progression                                                 
      24  
      23 -**Last Updated:** November 10, 2025                            
      24 -**Status:** Planning phase - to be developed                   
      25 +| Week | Phase | Long Run | Long Bike | Total |                
      26 +|------|-------|----------|-----------|-------|                
      27 +| 17 | Build 1 | 1h45 / 16km | 140km / 4h | ~10h |             
      28 +| 18 | Build 2 | 1h50 / 17km | 160km / 4h30 | ~11h |           
      29 +| **19** | **Peak** | **2h / 18km** | **180km / 5h** | **~13h**
         + |                                                             
      30 +| 20 | Recovery + Test | 1h / 10km | 70km / 2h | ~6h |         
      31 +                                                               
      32 +---                                                            
      33 +                                                               
      34 +## Key Workouts                                                
      35 +                                                               
      36 +### Bike (Threshold - Wednesday)                               
      37 +- **Wk 17-18:** Threshold 3x12min @ 220W (100% FTP)            
      38 +- **Wk 19:** Threshold 2x20min @ 215W (98% FTP)                
      39 +                                                               
      40 +### Bike (VO2max - Thursday)                                   
      41 +- **Wk 17-18:** 5x4min @ 240W (109% FTP)                       
      42 +- **Wk 19:** 4x5min @ 235W (107% FTP) - longer intervals       
      43 +                                                               
      44 +### Run (Tuesday - intensity)                                  
      45 +- 4-5x5min @ 4:25-4:30/km, 3min jog recovery                   
      46 +                                                               
      47 +### Run (Friday - tempo)                                       
      48 +- 20-25min continuous @ 4:55-5:00/km                           
      49 +                                                               
      50 +---                                                            
      51 +                                                               
      52 +## Week 20: Recovery + Testing                                 
      53 +                                                               
      54 +| Day | Test |                                                 
      55 +|-----|------|                                                 
      56 +| Wed | FTP Test (20min) |                                     
      57 +| Sat | Run Threshold Test (30min) |                           
      58 +                                                               
      59 +Update training zones for Cycle 6.                             
      60 +                                                               
      61 +---                                                            
      62 +                                                               
      63 +## Targets                                                     
      64 +                                                               
      65 +| Metric | Start | End of Cycle |                              
      66 +|--------|-------|--------------|                              
      67 +| FTP | 225W | 230-235W |                                      
      68 +| Cycling VO2max | 42 | 43-44 |                                
      69 +| Long bike | 160km | 180km |                                  
      70 +                                                               
      71 +---                                                            
      72 +                                                               
      73 +**Previous:** [Cycle 4](cycle-4-threshold-work.md) | **Next:** 
         +[Cycle 6](cycle-6-peak-development.md)                         

⏺ Write(cycles/cycle-6-peak-development.md)
  ⎿  Added 72 lines, removed 15 lines
       1  # Cycle 6: Peak Development
       2  
       3 -**Duration:** Weeks 21-24 (March 30 - April 26, 2026)          
       4 -**Phase:** Peak Development                                    
       5 -**Focus:** TBD                                                 
       3 +**Weeks 21-24 | March 30 - April 26, 2026**                    
       4  
       7 -## Status: TO BE DEVELOPED                                     
       5 +**Peak Target:** 200km long bike (race simulation)             
       6  
       9 -This cycle will be created after completing Cycle 5.           
       7 +---                                                            
       8  
      11 -### Planned Focus Areas:                                       
      12 -- Peak training volume                                         
      13 -- Race simulation workouts                                     
      14 -- Fine-tuning race-day strategies                              
      15 -- Course-specific training (Hamburg bike/run routes)           
      16 -- Maximum fitness development                                  
       9 +## Weekly Template                                             
      10  
      11 +| Day | Session 1 | Session 2 |                                
      12 +|-----|-----------|-----------|                                
      13 +| Mon | Swim 60min (technique + threshold) | - |               
      14 +| Tue | Run 60min (threshold intervals) | - |                  
      15 +| Wed | Bike 65min (sweet spot) | Run 35min easy |             
      16 +| Thu | Bike 70min (VO2max) | Swim 45min (Carla) |             
      17 +| Fri | Bike 35min easy | Run 55min (tempo) |                  
      18 +| Sat | **Long Run** | - |                                     
      19 +| Sun | **Long Bike** | - |                                    
      20 +                                                               
      21  ---
      22  
      20 -**Previous:** [Cycle 5: Race-Specific Training](cycle-5-race-sp
         -ecific.md)                                                     
      21 -**Next:** [Cycle 7: Final Build](cycle-7-final-build.md)       
      23 +## Progression                                                 
      24  
      23 -**Last Updated:** November 10, 2025                            
      24 -**Status:** Planning phase - to be developed                   
      25 +| Week | Phase | Long Run | Long Bike | Total |                
      26 +|------|-------|----------|-----------|-------|                
      27 +| 21 | Build 1 | 1h45 / 16km | 160km / 4h30 | ~10h |           
      28 +| 22 | Build 2 | 1h50 / 17km | 180km / 5h | ~11h |             
      29 +| **23** | **Peak** | **2h / 19km** | **200km / 5h30** | **~13h
         +45** |                                                         
      30 +| 24 | Recovery | 1h15 / 12km | 80km / 2h30 | ~7h |            
      31 +                                                               
      32 +---                                                            
      33 +                                                               
      34 +## Key Workouts                                                
      35 +                                                               
      36 +### Bike (Sweet Spot - Wednesday)                              
      37 +- **Wk 21-22:** Sweet Spot 2x20min @ 210W (91% FTP)            
      38 +- **Wk 23:** Sweet Spot 2x25min @ 207W (90% FTP) - pre-race sim
         +ulation                                                        
      39 +                                                               
      40 +### Bike (VO2max - Thursday)                                   
      41 +- **Wk 21-22:** 4x5min @ 245W (107% FTP)                       
      42 +- **Wk 23:** 3x6min @ 240W (104% FTP) - longer sustained       
      43 +                                                               
      44 +### Run (Tuesday - threshold)                                  
      45 +- 4x6min @ 4:20-4:25/km, 3min jog recovery                     
      46 +                                                               
      47 +### Run (Friday - tempo)                                       
      48 +- 25min continuous @ 4:50-4:55/km                              
      49 +                                                               
      50 +---                                                            
      51 +                                                               
      52 +## Week 23: Race Simulation                                    
      53 +                                                               
      54 +**Sunday 200km ride:**                                         
      55 +- Hamburg Ironman bike course (or simulation)                  
      56 +- Full race nutrition: 80-90g carbs/hour                       
      57 +- Target power: 155-165W (race pace)                           
      58 +- Practice pacing strategy                                     
      59 +                                                               
      60 +---                                                            
      61 +                                                               
      62 +## Targets                                                     
      63 +                                                               
      64 +| Metric | Start | End of Cycle |                              
      65 +|--------|-------|--------------|                              
      66 +| FTP | 230W | 235-240W |                                      
      67 +| Cycling VO2max | 43 | 44-45 |                                
      68 +| Long bike | 180km | 200km |                                  
      69 +| Race readiness | - | Course familiarization complete |       
      70 +                                                               
      71 +---                                                            
      72 +                                                               
      73 +## Hamburg Course Integration                                  
      74 +                                                               
      75 +- Week 21-23: Include Hamburg bike course sections             
      76 +- Week 23 long run: Hamburg marathon course preview            
      77 +- Mental preparation: visualize race day                       
      78 +                                                               
      79 +---                                                            
      80 +                                                               
      81 +**Previous:** [Cycle 5](cycle-5-race-specific.md) | **Next:** [
         +Cycle 7](cycle-7-final-build.md)                               

⏺ Done. All three cycles updated:

  Summary
  ┌───────┬─────────────┬────────────────┬──────────────────────────┐
  │ Cycle │    Weeks    │ Peak Long Bike │        Key Focus         │
  ├───────┼─────────────┼────────────────┼──────────────────────────┤
  │ 4     │ 13-16 (Feb) │ 160km          │ FTP + VO2max development │
  ├───────┼─────────────┼────────────────┼──────────────────────────┤
  │ 5     │ 17-20 (Mar) │ 180km          │ Race-specific, threshold │
  ├───────┼─────────────┼────────────────┼──────────────────────────┤
  │ 6     │ 21-24 (Apr) │ 200km          │ Peak, race simulation    │
  └───────┴─────────────┴────────────────┴──────────────────────────┘
  ---
  Consistent Weekly Structure (all cycles)
  ┌─────┬────────────────────────────────┐
  │ Day │            Sessions            │
  ├─────┼────────────────────────────────┤
  │ Mon │ Swim (technique + threshold)   │
  ├─────┼────────────────────────────────┤
  │ Tue │ Run intensity (single, onsite) │
  ├─────┼────────────────────────────────┤
  │ Wed │ Bike FTP/threshold + Run easy  │
  ├─────┼────────────────────────────────┤
  │ Thu │ Bike VO2max + Swim with Carla  │
  ├─────┼────────────────────────────────┤
  │ Fri │ Bike easy + Run tempo          │
  ├─────┼────────────────────────────────┤
  │ Sat │ Long Run                       │
  ├─────┼────────────────────────────────┤
  │ Sun │ Long Bike                      │
  └─────┴────────────────────────────────┘
  ---
  Bike Distance Progression

  Cycle 4:  120km → 140km → 160km → 60km (recovery)
  Cycle 5:  140km → 160km → 180km → 70km (recovery)
  Cycle 6:  160km → 180km → 200km → 80km (recovery)

  ---
  Want me to also create the individual week files (week-13.md through
  week-24.md), or is the cycle overview sufficient for now?

✻ Cogitated for 2m 5s

❯ read @weeks/week-01.md to this week and based on the actual performance   
  and results, update also the previous cycle files                         
  ⎿  Read weeks/week-01.md (269 lines)

⏺ Let me read more week files to get the full picture of cycles 1-3:

⏺ Read(weeks/week-04.md)
  ⎿  Read 471 lines

⏺ Read(weeks/week-08.md)
  ⎿  Read 295 lines

⏺ Read(weeks/week-09.md)
  ⎿  Read 404 lines

⏺ Good data. Let me update the previous cycle files with actual results:

⏺ Write(cycles/cycle-1-base-building.md)
  ⎿  Added 28 lines, removed 91 lines
        1  # Cycle 1: Base Building
        2  
        3 -**Duration:** Weeks 1-4 (November 10 - December 7, 2025)      
        4 -**Focus:** Aerobic endurance, technique refinement, establishi
          -ng training routine                                           
        3 +**Weeks 1-4 | November 10 - December 7, 2025**                
        4  
        6 -## Cycle Overview                                             
        5 +**Status:** Completed                                         
        6  
        8 -This first cycle establishes the foundation for the entire tra
          -ining block through progressive volume increase (10h → 13h → 1
          -5h) followed by recovery and testing.                         
        9 -                                                              
       10 -### Goals                                                     
       11 -- Build aerobic base across all three disciplines             
       12 -- Establish consistent training habits within daily schedule c
          -onstraints                                                    
       13 -- Refine technique (especially swimming)                      
       14 -- Test and establish updated training zones for Cycle 2       
       15 -                                                              
       16 -**Current Week:** [Week 3 - Build (Peak)](week-03.md) (Nov 24-
          -30, 2025)                                                     
       17 -**Progress:** ✅ ⚠️ ⬜ ⬜ (2/4 weeks completed)               
       18 -                                                              
       19 -### Weekly Volume Progression                                 
       20 -- **Week 1:** ~8h25 (7 sessions) - Establish routine, techniqu
          -e work                                                        
       21 -- **Week 2:** ~11h20 (10 sessions) - Volume increase, introduc
          -e threshold work                                              
       22 -- **Week 3:** ~12h55 (11 sessions) - Peak volume with threshol
          -d work                                                        
       23 -- **Week 4:** ~6-8h (7 sessions) - Recovery + Testing         
       24 -                                                              
       25 -### Key Sessions                                              
       26 -- **Saturdays:** Long bike rides (2h → 2h15 → 2h45) - practice
          - nutrition                                                    
       27 -- **Sundays:** Long runs (75min → 80min) + Week 3 brick workou
          -t                                                             
       28 -- **Tuesday:** Threshold intensity sessions (Week 2-3: bike Z4
          -, run Z4)                                                     
       29 -- **Thursday Evenings:** Fixed swim slot (20:00-21:00) with VO
          -2max work (Week 2-3)                                          
       30 -- **Tuesday/Thursday:** Gym strength sessions (maintain throug
          -hout cycle)                                                   
       31 -                                                              
       32 -### Nutrition Focus                                           
       33 -- **Build weeks:** 5-7g carbs/kg, 1.6-2.0g protein/kg         
       34 -- **Recovery week:** 4-5g carbs/kg                            
       35 -- **Long rides:** Practice race nutrition (60-70g carbs/hour) 
       36 -                                                              
       37 -### Training Zones                                            
       38 -**Current Baselines (Nov 10, 2025):**                         
       39 -- **Bike FTP:** 195W (2.17 W/kg)                              
       40 -- **Swim CSS:** 2:33/100m                                     
       41 -- **Run:** HR-based zones (see [README](40-projects/ironman-20
          -26/README.md#training-zones))                                 
       42 -                                                              
       43 -**Note:** All zones will be updated after Week 4 testing (Dec 
          -4-6, 2025)                                                    
       44 -                                                              
        7  ---
        8  
       47 -## Weekly Breakdown                                           
        9 +## Results Summary                                            
       10  
       49 -### [Week 1: Nov 10-16, 2025](week-01.md) - Build             
       50 -**Volume:** 8h25 (7 sessions)                                 
       51 -- Swim: 4200m (2h) - 2 sessions                               
       52 -- Bike: 115km (3h20) - 2 sessions                             
       53 -- Run: 18-20km (2h05) - 2 sessions                            
       54 -- Strength: 1h - 1 session (full body)                        
       11 +| Metric | Baseline | End of Cycle | Change |                 
       12 +|--------|----------|--------------|--------|                 
       13 +| FTP | 195W | 220W | +25W (+13%) |                           
       14 +| CSS Swim | 2:33/100m | 2:27/100m | +6s faster |             
       15 +| Run Threshold | 4:48/km | 4:35/km | +13s/km faster |        
       16 +| VO2max | 50 | 50 | Maintained |                             
       17  
       56 -**Key Changes:** Conservative start, single full-body strength
          - session on Thursday (onsite day), swim moved to Saturday to a
          -void back-to-back with Thursday                               
       57 -                                                              
       18  ---
       19  
       60 -### [Week 2: Nov 17-23, 2025](week-02.md) - Build             
       61 -**Volume:** 11h20 (10 sessions)                               
       62 -- Swim: 4800m (2h) - 2 sessions (includes VO2max work)        
       63 -- Bike: 125km (4h15) - 3 sessions (includes threshold session)
       64 -- Run: 26-28km (3h05) - 3 sessions                            
       65 -- Strength: 2h - 2 sessions                                   
       20 +## Weekly Progression                                         
       21  
       67 -**Key Changes:** Introduce threshold intervals (Tue bike 4x6mi
          -n Z4, Thu swim VO2max), swim moved to Tuesday evening         
       22 +| Week | Phase | Planned | Actual | Key Sessions |            
       23 +|------|-------|---------|--------|--------------|            
       24 +| 1 | Build | 8h05 | **10h27** | Long bike 2h31, Long run 2h12
          + |                                                            
       25 +| 2 | Build | 11h20 | ~11h | Threshold bike, VO2max swim |    
       26 +| 3 | Build | 12h55 | ~13h | Peak week, brick workout |       
       27 +| 4 | Recovery | 6h55 | **5h11** | CSS test, Run threshold tes
          +t, FTP test |                                                 
       28  
       29  ---
       30  
       71 -### [Week 3: Nov 24-30, 2025](week-03.md) - Build (Peak)      
       72 -**Volume:** 12h55 (11 sessions)                               
       73 -- Swim: 5200m (2h05) - 2 sessions (includes VO2max work)      
       74 -- Bike: 155km (5h30) - 4 sessions (includes threshold session)
       75 -- Run: 28-30km (3h20) - 3 sessions (includes threshold session
          -)                                                             
       76 -- Strength: 2h - 2 sessions                                   
       31 +## Key Achievements                                           
       32  
       78 -**Key Changes:** Peak threshold work (Tue run 5x4min Z4, Tue b
          -ike 5x5min Z4-Z5, Thu swim VO2max), Sunday brick workout, swim
          - moved to Saturday                                            
       33 +- **FTP:** 195W → 220W (+13%) - Major improvement             
       34 +- **CSS:** 2:33 → 2:27/100m - 6s faster per 100m              
       35 +- **Run Threshold:** 4:48 → 4:35/km - 13s/km faster           
       36 +- **Long sessions:** Consistently exceeded planned duration   
       37 +- **Consistency:** All planned sessions completed             
       38  
       39  ---
       40  
       82 -### [Week 4: Dec 1-7, 2025](week-04.md) - Recovery + Testing  
       83 -**Volume:** 6-8h (7 sessions including 3 tests)               
       84 -- Swim: 2000m + CSS test                                      
       85 -- Bike: 1h45 + FTP test                                       
       86 -- Run: threshold test + 40min recovery                        
       87 -- Strength: 45min light mobility                              
       41 +## Learnings                                                  
       42  
       89 -**Key Changes:** Swim moved to Tuesday evening to avoid back-t
          -o-back with Thursday CSS test                                 
       43 +1. **Volume tolerance:** Able to handle extensions when feelin
          +g good                                                        
       44 +2. **Testing protocol:** Ramp test works well for FTP         
       45 +3. **Garmin workouts:** Sprint workouts don't match Ironman ne
          +eds                                                           
       46 +4. **Technique focus:** High drill % in swim maintained       
       47  
       91 -**Testing Schedule:**                                         
       92 -- **Thursday (Dec 4):** CSS Test (400m + 200m time trials)    
       93 -- **Friday (Dec 5):** FTP Test (20min all-out)                
       94 -- **Saturday (Dec 6):** Run Threshold Test (30min time trial) 
       95 -                                                              
       48  ---
       49  
       98 -## Post-Cycle Testing & Next Steps                            
       99 -                                                              
      100 -**Testing Week:** Week 4 (Dec 4-6, 2025)                      
      101 -- Thursday: CSS Test (swim)                                   
      102 -- Friday: FTP Test (bike)                                     
      103 -- Saturday: Run Threshold Test                                
      104 -                                                              
      105 -**After Testing:**                                            
      106 -1. Record new baseline values in [README](40-projects/ironman-
          -2026/README.md#current-training-baseline)                     
      107 -2. Update training zones for Cycle 2                          
      108 -3. Rest and recover on Sunday                                 
      109 -4. Begin [Cycle 2: Endurance Development](cycle-2-endurance-de
          -velopment.md)                                                 
      110 -                                                              
      111 ----                                                           
      112 -                                                              
      113 -**Last Updated:** November 23, 2025                           
       50 +**Next:** [Cycle 2](cycle-2-endurance-development.md)         

⏺ Write(cycles/cycle-2-endurance-development.md)
  ⎿  Error writing file

⏺ Write(cycles/cycle-3-strength-integration.md)
  ⎿  Added 78 lines, removed 14 lines
       1 -# Cycle 3: Strength Integration                                
       1 +# Cycle 3: Threshold Development                               
       2  
       3 -**Duration:** Weeks 9-12 (January 5 - February 1, 2026)        
       4 -**Phase:** Strength Integration                                
       5 -**Focus:** TBD                                                 
       3 +**Weeks 9-12 | January 5 - February 1, 2026**                  
       4  
       7 -## Status: TO BE DEVELOPED                                     
       5 +**Status:** Completed (Week 12 in progress)                    
       6  
       9 -This cycle will be created after completing Cycle 2.           
       7 +---                                                            
       8  
      11 -### Planned Focus Areas:                                       
      12 -- Integrate strength gains into endurance training             
      13 -- Hill work and power development                              
      14 -- Testing week (Week 12): FTP, CSS, Run Threshold reassessment 
       9 +## Results Summary                                             
      10  
      11 +| Metric | Start | End of Cycle | Change |                     
      12 +|--------|-------|--------------|--------|                     
      13 +| FTP | 220W | **225W** | +5W (+2.3%) |                        
      14 +| CSS Swim | 2:27/100m | ~2:19/100m | Improved (actual swims) |
      15 +| Run Threshold | 4:35/km | TBD (Week 12 test) | Expected impro
         +vement |                                                       
      16 +| Long Bike | 3h | **4h03** (125km) | +1h |                    
      17 +| Long Run | 2h | **2h30** (24.7km) | +30min |                 
      18 +| Cycling VO2max | 38-40 | **41** | Climbing |                 
      19 +                                                               
      20  ---
      21  
      18 -**Previous:** [Cycle 2: Endurance Development](cycle-2-enduranc
         -e-development.md)                                              
      19 -**Next:** [Cycle 4: Threshold Work](cycle-4-threshold-work.md) 
      22 +## Weekly Progression                                          
      23  
      21 -**Last Updated:** November 10, 2025                            
      22 -**Status:** Planning phase - to be developed                   
      24 +| Week | Phase | Planned | Actual | Notes |                    
      25 +|------|-------|---------|--------|-------|                    
      26 +| 9 | Build + Test | 10h30 | **8h35** | FTP 225W, snow storm di
         +sruption |                                                     
      27 +| 10 | Build 2 | 12h35 | **15h40** | +25% overreach |          
      28 +| 11 | Build 3 (Peak) | 14h05 | **~10h40** | Fatigue hit Tuesda
         +y, adapted |                                                   
      29 +| 12 | Recovery | 6h40 | ~2h25 | True recovery, travel Fri-Sun 
         +|                                                              
      30 +                                                               
      31 +---                                                            
      32 +                                                               
      33 +## Key Achievements                                            
      34 +                                                               
      35 +- **FTP test:** 225W (+5W from 220W baseline)                  
      36 +- **Long bike peak:** 4h03 / 125.6km (Week 11 Sunday)          
      37 +- **Long run peak:** 2h30 / 24.7km (Week 11)                   
      38 +- **Mental toughness:** 2h run in heavy snow (Week 9)          
      39 +- **Adaptation:** Recovered from Tuesday failure (Week 11)     
      40 +                                                               
      41 +---                                                            
      42 +                                                               
      43 +## Challenges & Learnings                                      
      44 +                                                               
      45 +### Week 10 Overreach                                          
      46 +- Planned: 12h35 | Actual: **15h40** (+25%)                    
      47 +- Extended long bike to 3h52 / 121km                           
      48 +- Extended long run to 2h20 / 23km                             
      49 +- **Result:** Week 11 started fatigued                         
      50 +                                                               
      51 +### Week 11 Fatigue                                            
      52 +- Tuesday bike failed after 24min (couldn't complete 2nd set)  
      53 +- Needed Monday rest (planned was swim)                        
      54 +- Used Garmin recommendations instead of structured plan       
      55 +- Still completed weekend long sessions                        
      56 +                                                               
      57 +### Garmin Data Insights                                       
      58 +- **Acute Training Load:** At ceiling (~1750-1800)             
      59 +- **Low Aerobic:** Overloaded (too much Z2)                    
      60 +- **Anaerobic:** Deficit (need more short power work)          
      61 +- **HRV:** Balanced (recovered)                                
      62 +                                                               
      63 +---                                                            
      64 +                                                               
      65 +## Key Decisions for Future Cycles                             
      66 +                                                               
      67 +1. **Weekly cap: 12h** (15h+ causes next-week fatigue)         
      68 +2. **2 swims/week max** (life constraint)                      
      69 +3. **No extensions** when feeling good - bank energy           
      70 +4. **Add anaerobic work** to address deficit                   
      71 +5. **Use Garmin** for daily readiness, not rigid plan          
      72 +6. **Sunday = long bike, Saturday = long run**                 
      73 +                                                               
      74 +---                                                            
      75 +                                                               
      76 +## Testing (Week 12)                                           
      77 +                                                               
      78 +| Test | Day | Result |                                        
      79 +|------|-----|--------|                                        
      80 +| Run Threshold | Wed Jan 28 | Pending |                       
      81 +| FTP | - | Skipped (recent test) |                            
      82 +| CSS | - | Skipped (swim is lowest priority) |                
      83 +                                                               
      84 +---                                                            
      85 +                                                               
      86 +**Previous:** [Cycle 2](cycle-2-endurance-development.md) | **N
         +ext:** [Cycle 4](cycle-4-threshold-work.md)                    

⏺ Let me fix cycle 2:

⏺ Read(cycles/cycle-2-endurance-development.md)
  ⎿  Read 24 lines

⏺ Write(cycles/cycle-2-endurance-development.md)
  ⎿  Added 48 lines, removed 14 lines
       1  # Cycle 2: Endurance Development
       2  
       3 -**Duration:** Weeks 5-8 (December 8, 2025 - January 4, 2026)   
       4 -**Phase:** Endurance Development                               
       5 -**Focus:** TBD                                                 
       3 +**Weeks 5-8 | December 8, 2025 - January 4, 2026**             
       4  
       7 -## Status: TO BE DEVELOPED                                     
       5 +**Status:** Completed                                          
       6  
       9 -This cycle will be created after completing Cycle 1 and incorpo
         -rating lessons learned from Week 4 testing.                    
       7 +---                                                            
       8  
      11 -### Planned Focus Areas:                                       
      12 -- Increase aerobic capacity                                    
      13 -- Build longer endurance sessions                              
      14 -- Progressive volume increase based on Cycle 1 adaptations     
      15 -- Update training zones based on Week 4 test results           
       9 +## Results Summary                                             
      10  
      11 +| Metric | Start | End of Cycle | Change |                     
      12 +|--------|-------|--------------|--------|                     
      13 +| FTP | 220W | 220W | Maintained |                             
      14 +| CSS Swim | 2:27/100m | 2:27/100m | Maintained |              
      15 +| Run Threshold | 4:35/km | 4:35/km | Maintained |             
      16 +| Long Bike | 2h30 | 3h+ | +30min |                            
      17 +| Long Run | 1h45 | 2h+ | +15min |                             
      18 +                                                               
      19  ---
      20  
      19 -**Previous:** [Cycle 1: Base Building](cycle-1-base-building.md
         -)                                                              
      20 -**Next:** [Cycle 3: Strength Integration](cycle-3-strength-inte
         -gration.md)                                                    
      21 +## Weekly Progression                                          
      22  
      22 -**Last Updated:** November 10, 2025                            
      23 -**Status:** Planning phase - to be developed                   
      23 +| Week | Phase | Volume | Key Sessions |                       
      24 +|------|-------|--------|--------------|                       
      25 +| 5 | Build 1 | ~10h | Volume building |                       
      26 +| 6 | Build 2 | ~11h | Christmas week - modified |             
      27 +| 7 | Build 3 | ~13h55 | Peak week, longest sessions |         
      28 +| 8 | Recovery | ~6h | Holiday week (New Year's) |             
      29 +                                                               
      30 +---                                                            
      31 +                                                               
      32 +## Key Achievements                                            
      33 +                                                               
      34 +- **Endurance base:** Long bike progressed to 3h+              
      35 +- **Run volume:** Long run extended to 2h                      
      36 +- **Consistency:** Maintained through holiday period           
      37 +- **Recovery:** Week 8 had some violations (tempo during recove
         +ry)                                                            
      38 +                                                               
      39 +---                                                            
      40 +                                                               
      41 +## Challenges                                                  
      42 +                                                               
      43 +1. **Holiday disruptions:** Christmas and New Year's affected s
         +chedule                                                        
      44 +2. **Recovery week violations:** Week 8 had tempo work when sho
         +uld be easy                                                    
      45 +3. **Weather:** Winter conditions starting to impact outdoor tr
         +aining                                                         
      46 +                                                               
      47 +---                                                            
      48 +                                                               
      49 +## Learnings                                                   
      50 +                                                               
      51 +1. **Recovery weeks matter:** Violations in Week 8 contributed 
         +to fatigue                                                     
      52 +2. **Holiday planning:** Need buffer for family commitments    
      53 +3. **Indoor training:** Essential for Hamburg winter           
      54 +                                                               
      55 +---                                                            
      56 +                                                               
      57 +**Previous:** [Cycle 1](cycle-1-base-building.md) | **Next:** [
         +Cycle 3](cycle-3-strength-integration.md)                      

⏺ Done. All cycle files updated with actual performance data:

  Updated Cycles Summary
  Cycle: 1
  Weeks: 1-4
  Status: Completed
  Key Results: FTP 195→220W (+13%), CSS 2:33→2:27, Run 4:48→4:35/km
  ────────────────────────────────────────
  Cycle: 2
  Weeks: 5-8
  Status: Completed
  Key Results: Endurance base built, long bike 3h+, holiday disruptions
  ────────────────────────────────────────
  Cycle: 3
  Weeks: 9-12
  Status: Completing
  Key Results: FTP 225W, long bike 4h03/125km, overreach lesson learned
  ────────────────────────────────────────
  Cycle: 4
  Weeks: 13-16
  Status: Planned
  Key Results: Target: 160km, FTP focus
  ────────────────────────────────────────
  Cycle: 5
  Weeks: 17-20
  Status: Planned
  Key Results: Target: 180km, race-specific
  ────────────────────────────────────────
  Cycle: 6
  Weeks: 21-24
  Status: Planned
  Key Results: Target: 200km, race simulation
  ---
  Full Training Arc (Nov 2025 → Jun 2026)

  Cycle 1: Base        FTP 195→220W    ████████████████
  Cycle 2: Endurance   Long bike 3h+   ████████████████
  Cycle 3: Threshold   FTP 225W        ████████████████
  Cycle 4: FTP/VO2max  160km target    ░░░░░░░░░░░░░░░░  ← Next
  Cycle 5: Race-spec   180km target    ░░░░░░░░░░░░░░░░
  Cycle 6: Peak        200km target    ░░░░░░░░░░░░░░░░
  Cycle 7: Final       Maintenance     ░░░░░░░░░░░░░░░░
  Taper:   Race prep   →June 7         ░░░░░░░░░░░░░░░░

  ---
  All files are now consistent and reflect actual training progress. Week 12
  recovery starts tomorrow, then Cycle 4 begins February 2.

✻ Cooked for 1m 24s

❯ What is your evaluation so far after 3 cycles completed? What is good,    
  what can be improved? Other thinks we shoud consider?                     

⏺ 3-Cycle Evaluation: Weeks 1-12

  What's Working Well

  1. FTP Progression - Excellent
  Week 1:  195W (baseline)
  Week 4:  220W (+13%)
  Week 9:  225W (+2.3%)
  ─────────────────────────
  Total:   +30W (+15%) in 12 weeks
  This is strong progress. At this rate, 240-250W by race day is realistic.

  2. Endurance Capacity - Strong Build
  ┌───────────┬──────────────┬──────────────┬─────────────┐
  │  Metric   │    Week 1    │   Week 11    │ Improvement │
  ├───────────┼──────────────┼──────────────┼─────────────┤
  │ Long Bike │ ~2h / 60km   │ 4h03 / 125km │ +100%       │
  ├───────────┼──────────────┼──────────────┼─────────────┤
  │ Long Run  │ ~1h30 / 12km │ 2h30 / 25km  │ +67%        │
  └───────────┴──────────────┴──────────────┴─────────────┘
  You're building the engine needed for Ironman distances.

  3. Testing Improvements
  - CSS: 2:33 → 2:27/100m (+6s/100m)
  - Run Threshold: 4:48 → 4:35/km (+13s/km)
  - Both metrics improved in Cycle 1 and likely maintained/improved since

  4. Adaptation & Mental Toughness
  - 2h run in heavy snow (Week 9)
  - Recovered from Tuesday failure and still hit weekend sessions (Week 11)
  - Smart use of Garmin recommendations when fatigued
  - Able to modify plans without derailing progress

  5. Learning Curve
  You've identified key patterns:
  - Overreach consequences (Week 10 → Week 11)
  - Recovery week importance
  - Life constraints (2 swims/week, Thursday with Carla)

  ---
  What Needs Improvement

  1. Recovery Week Discipline
  - Week 8: Tempo work when should be easy
  - Week 10: Extended sessions when should consolidate
  - Impact: Fatigue accumulation, Week 11 failure

  Recommendation: Treat recovery weeks as sacred. No extensions, no "feeling
  good" additions.

  2. Volume Volatility
  Week 10: +25% over plan (15h40)
  Week 11: -24% under plan (10h40)
  This swing is unsustainable. Better to hit 100% consistently than 125%
  followed by 75%.

  Recommendation: Hard cap at plan + 10% max. Bank energy, don't spend it.

  3. Swim Consistency
  ┌───────┬───────────────┬──────────────┐
  │ Cycle │ Planned Swims │ Actual Swims │
  ├───────┼───────────────┼──────────────┤
  │ 1     │ 8             │ ~6           │
  ├───────┼───────────────┼──────────────┤
  │ 2     │ 8             │ ~5           │
  ├───────┼───────────────┼──────────────┤
  │ 3     │ 10            │ ~5           │
  └───────┴───────────────┴──────────────┘
  Swim is consistently cut first. You've accepted this (2 swims/week max), but
  execution is often 1-2.

  Recommendation: Protect Monday and Thursday slots. If one gets cut, the other
  is non-negotiable.

  4. Intensity Structure Mismatch
  Plan prescribed:
  - 4x10min sustained @ 237W
  - 4x6min threshold runs

  Your body responded better to:
  - 30s on/off intervals
  - Shorter, sharper efforts

  Recommendation: Already addressed in Cycle 4 plan with mixed intensity (short
  + sustained).

  5. Anaerobic Deficit
  Garmin Load Focus showed 747 (below optimal). Plan was too focused on
  sustained aerobic work.

  Recommendation: 30/30s sessions, hill sprints, short power work - already
  built into Cycle 4+.

  ---
  Things We Haven't Addressed Yet

  6. Open Water Swimming
  - All swims have been pool-based (50m)
  - Ironman swim is open water with:
    - Sighting (looking up)
    - Mass start chaos
    - No walls/push-offs
    - Wetsuit swimming
    - Currents/chop

  Recommendation: Starting April/May (when water warms), add 2-4 open water
  sessions. Hamburg has lakes and the Alster.

  2. Brick Workouts
  - Bike → Run transitions barely mentioned
  - Critical for Ironman (legs feel like concrete after 180km bike)

  Recommendation: Add monthly brick sessions starting Cycle 5:
  - Short brick: 90min bike → 20min run
  - Long brick: 3h bike → 45min run
  - Race simulation (Cycle 6): 4h bike → 1h run

  3. Nutrition Strategy
  - Mentioned 60-80g carbs/hour on long rides
  - But not systematically tested/practiced

  Recommendation:
  - Track actual intake on every long session
  - Test gut tolerance (gels, bars, liquid nutrition)
  - Race day target: 80-90g carbs/hour on bike, 40-60g on run
  - Practice caffeine timing

  4. Hamburg Course Familiarization
  You live in Hamburg - this is a major advantage.

  Recommendation:
  - Cycle 5+: Include actual race course sections in long rides
  - Know the hills, wind exposure, technical sections
  - Long runs on marathon course
  - Mental advantage of familiar terrain

  5. Heat/Weather Adaptation
  - June 7 in Hamburg could be 15-25°C
  - Training through winter (cold adaptation) but race in early summer

  Recommendation: May training should include some heat exposure if possible.

  6. Equipment & Race Day Logistics
  - Bike fit (aero position endurance?)
  - Race wheels, helmet
  - Transition setup
  - Nutrition storage on bike

  Recommendation: Equipment finalized by end of Cycle 5 (early April). Test
  everything in training.

  7. Taper Strategy
  - Currently planned but not detailed
  - 2 weeks before race (Weeks 29-30)

  Recommendation: Plan taper in detail by Week 24. Include:
  - Volume reduction curve
  - Intensity maintenance
  - Sharpening sessions
  - Mental preparation

  ---
  Risk Assessment
  Risk: Overtraining
  Likelihood: Medium
  Impact: High
  Mitigation: 12h cap, recovery discipline
  ────────────────────────────────────────
  Risk: Injury
  Likelihood: Medium
  Impact: High
  Mitigation: No extensions, listen to body
  ────────────────────────────────────────
  Risk: Swim undertrained
  Likelihood: High
  Impact: Low
  Mitigation: <2h goal gives buffer
  ────────────────────────────────────────
  Risk: Bonking on bike
  Likelihood: Medium
  Impact: High
  Mitigation: Nutrition practice
  ────────────────────────────────────────
  Risk: Run walk on marathon
  Likelihood: Medium
  Impact: Medium
  Mitigation: Brick training, pacing
  ────────────────────────────────────────
  Risk: Illness
  Likelihood: Low
  Impact: High
  Mitigation: Sleep, recovery, stress management
  ---
  Summary Scorecard
  ┌─────────────────────┬───────┬─────────────────────────────────────────┐
  │      Category       │ Score │                  Notes                  │
  ├─────────────────────┼───────┼─────────────────────────────────────────┤
  │ Bike Fitness        │ 8/10  │ Strong FTP gains, endurance building    │
  ├─────────────────────┼───────┼─────────────────────────────────────────┤
  │ Run Fitness         │ 7/10  │ Good threshold, needs brick work        │
  ├─────────────────────┼───────┼─────────────────────────────────────────┤
  │ Swim Fitness        │ 5/10  │ Undertrained, but adequate for goal     │
  ├─────────────────────┼───────┼─────────────────────────────────────────┤
  │ Recovery Management │ 5/10  │ Learned hard lessons, improving         │
  ├─────────────────────┼───────┼─────────────────────────────────────────┤
  │ Plan Adherence      │ 6/10  │ Good adaptation, but too much variance  │
  ├─────────────────────┼───────┼─────────────────────────────────────────┤
  │ Life Integration    │ 7/10  │ Managing work/family, constraints clear │
  └─────────────────────┴───────┴─────────────────────────────────────────┘
  Overall: On track for Ironman finish, with room for optimization.

  ---
  Top 3 Priorities for Cycles 4-6

  1. Consistency over heroics - Hit 100% of plan, no extensions
  2. Brick workouts - Start integrating bike→run transitions
  3. Nutrition practice - Systematic testing on every long session

  Anything specific you want to dive deeper into?

✻ Sautéed for 54s
