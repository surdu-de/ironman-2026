import {
  ComposedChart,
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
  hr: w.longRunAvgHr,
  paceSec: paceToSeconds(w.longRunAvgPace),
}))

export function RunHrPaceChart() {
  return (
    <section
      data-testid="run-hr-pace-chart"
      className="rounded-2xl border border-border bg-surface/50 p-4 md:p-6"
    >
      <h2 className="text-base font-medium md:text-lg 2xl:text-2xl">
        Long run HR &amp; pace
      </h2>
      <p className="mt-1 text-xs text-muted md:text-sm">
        HR cap 148 bpm; pace on right axis (lower = faster)
      </p>
      <ResponsiveContainer width="100%" height={240}>
        <ComposedChart data={data} margin={{ top: 16, right: 0, left: -16, bottom: 0 }}>
          <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
          <XAxis dataKey="week" stroke="var(--color-muted)" fontSize={11} />
          <YAxis
            yAxisId="hr"
            stroke="#ef4444"
            fontSize={11}
            domain={[130, 170]}
            unit=" bpm"
          />
          <YAxis
            yAxisId="pace"
            orientation="right"
            stroke="#3b82f6"
            fontSize={11}
            domain={[300, 400]}
            tickFormatter={(v) => secondsToPace(v)}
            reversed
          />
          <Tooltip
            contentStyle={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            labelStyle={{ color: 'var(--color-text)' }}
            labelFormatter={(w) => `Week ${w}`}
            formatter={(value, name) => {
              const v = Number(value)
              if (name === 'paceSec') return [`${secondsToPace(v)}/km`, 'Pace']
              return [`${v} bpm`, 'HR']
            }}
          />
          <ReferenceLine yAxisId="hr" y={148} stroke="var(--color-faint)" strokeDasharray="4 4" label={{ value: 'Cap 148', fill: 'var(--color-faint)', fontSize: 10 }} />
          <Line
            yAxisId="hr"
            type="monotone"
            dataKey="hr"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ r: 3, fill: '#ef4444' }}
            connectNulls={true}
          />
          <Line
            yAxisId="pace"
            type="monotone"
            dataKey="paceSec"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 3, fill: '#3b82f6' }}
            connectNulls={true}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </section>
  )
}
