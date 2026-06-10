import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts'
import weeks from '../data/weeks.json'
import { paceToSeconds, secondsToPace } from '../lib/format'

const data = weeks.map((w) => ({
  week: w.week,
  pace: paceToSeconds(w.swimAvgPace100m),
}))

const CSS_SEC = 147

export function SwimPaceChart() {
  return (
    <section
      data-testid="swim-pace-chart"
      className="rounded-2xl border border-border bg-surface/50 p-4 md:p-6"
    >
      <h2 className="text-base font-medium md:text-lg 2xl:text-2xl">
        Swim threshold pace
      </h2>
      <p className="mt-1 text-xs text-muted md:text-sm">
        Avg per 100m on threshold sets; lower is faster. CSS 2:27 reference.
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 16, right: 8, left: -8, bottom: 0 }}>
          <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
          <XAxis dataKey="week" stroke="var(--color-muted)" fontSize={11} />
          <YAxis
            stroke="var(--color-muted)"
            fontSize={11}
            domain={[110, 160]}
            tickFormatter={(v) => secondsToPace(v)}
            reversed
          />
          <Tooltip
            contentStyle={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            labelStyle={{ color: 'var(--color-text)' }}
            labelFormatter={(w) => `Week ${w}`}
            formatter={(value) => [`${secondsToPace(Number(value))}/100m`, 'Pace']}
          />
          <ReferenceLine y={CSS_SEC} stroke="var(--color-faint)" strokeDasharray="4 4" label={{ value: 'CSS 2:27', fill: 'var(--color-faint)', fontSize: 10 }} />
          <Line
            type="monotone"
            dataKey="pace"
            stroke="#06b6d4"
            strokeWidth={2}
            dot={{ r: 3, fill: '#06b6d4' }}
            connectNulls={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  )
}
