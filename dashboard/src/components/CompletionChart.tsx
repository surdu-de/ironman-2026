import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import weeks from '../data/weeks.json'

const data = weeks.map((w) => {
  // Actual volume must match the Weekly volume chart: sum of per-discipline
  // estimated hours, not the standalone actualHours field (which drifts).
  const hasData =
    w.swim.estimatedHours != null ||
    w.bike.estimatedHours != null ||
    w.run.estimatedHours != null
  const actual = hasData
    ? (w.swim.estimatedHours ?? 0) + (w.bike.estimatedHours ?? 0) + (w.run.estimatedHours ?? 0)
    : null
  return {
    week: w.week,
    planned: w.plannedHours ?? 0,
    actual,
    compliance: w.plannedHours && actual ? Math.round((actual / w.plannedHours) * 100) : null,
  }
})

export function CompletionChart() {
  return (
    <section
      data-testid="completion-chart"
      className="rounded-2xl border border-border bg-surface/50 p-4 md:p-6"
    >
      <h2 className="text-base font-medium md:text-lg 2xl:text-2xl">
        Planned vs Actual hours
      </h2>
      <ResponsiveContainer width="100%" height={220}>
        <ComposedChart data={data} margin={{ top: 16, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
          <XAxis dataKey="week" stroke="var(--color-muted)" fontSize={11} />
          <YAxis stroke="var(--color-muted)" fontSize={11} unit="h" />
          <Tooltip
            contentStyle={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            labelStyle={{ color: 'var(--color-text)' }}
            labelFormatter={(w) => `Week ${w}`}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="actual" fill="var(--color-faint)" />
          <Line type="monotone" dataKey="planned" stroke="var(--color-highlight)" strokeWidth={2} dot={{ r: 3 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </section>
  )
}
