# 📊 Current Week
[[weeks/week-01|This Week]] • [[cycles/cycle-1-base-building|Cycle 1]] • [[performance-data|Training Log]] • [[training-zones|Zones]]

```dataview
TABLE WITHOUT ID
  sessions-completed + "/" + sessions-total AS "Sessions",
  round((sessions-completed / sessions-total) * 100) + "%" AS "Done",
  swim-sessions AS "🏊",
  bike-sessions AS "🚴",
  run-sessions AS "🏃",
  strength-sessions AS "💪"
FROM ""
WHERE week = 1
```

![[weeks/week-01#Weekly Schedule]]
