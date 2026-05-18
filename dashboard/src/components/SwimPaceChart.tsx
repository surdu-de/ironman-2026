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
      className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 md:p-6"
    >
      <h2 className="text-base font-medium md:text-lg 2xl:text-2xl">
        Swim threshold pace
      </h2>
      <p className="mt-1 text-xs text-slate-400 md:text-sm">
        Avg per 100m on threshold sets; lower is faster. CSS 2:27 reference.
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 16, right: 8, left: -8, bottom: 0 }}>
          <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
          <XAxis dataKey="week" stroke="#94a3b8" fontSize={11} />
          <YAxis
            stroke="#94a3b8"
            fontSize={11}
            domain={[110, 160]}
            tickFormatter={(v) => secondsToPace(v)}
            reversed
          />
          <Tooltip
            contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }}
            labelStyle={{ color: '#e2e8f0' }}
            labelFormatter={(w) => `Week ${w}`}
            formatter={(value) => [`${secondsToPace(Number(value))}/100m`, 'Pace']}
          />
          <ReferenceLine y={CSS_SEC} stroke="#475569" strokeDasharray="4 4" label={{ value: 'CSS 2:27', fill: '#64748b', fontSize: 10 }} />
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
