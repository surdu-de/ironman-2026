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
      className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 md:p-6"
    >
      <h2 className="text-base font-medium md:text-lg 2xl:text-2xl">
        Long run HR &amp; pace
      </h2>
      <p className="mt-1 text-xs text-slate-400 md:text-sm">
        HR cap 148 bpm; pace on right axis (lower = faster)
      </p>
      <ResponsiveContainer width="100%" height={240}>
        <ComposedChart data={data} margin={{ top: 16, right: 0, left: -16, bottom: 0 }}>
          <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
          <XAxis dataKey="week" stroke="#94a3b8" fontSize={11} />
          <YAxis
            yAxisId="hr"
            stroke="#22c55e"
            fontSize={11}
            domain={[130, 170]}
            unit=" bpm"
          />
          <YAxis
            yAxisId="pace"
            orientation="right"
            stroke="#a3e635"
            fontSize={11}
            domain={[300, 400]}
            tickFormatter={(v) => secondsToPace(v)}
            reversed
          />
          <Tooltip
            contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }}
            labelStyle={{ color: '#e2e8f0' }}
            labelFormatter={(w) => `Week ${w}`}
            formatter={(value, name) => {
              const v = Number(value)
              if (name === 'paceSec') return [`${secondsToPace(v)}/km`, 'Pace']
              return [`${v} bpm`, 'HR']
            }}
          />
          <ReferenceLine yAxisId="hr" y={148} stroke="#475569" strokeDasharray="4 4" label={{ value: 'Cap 148', fill: '#64748b', fontSize: 10 }} />
          <Line
            yAxisId="hr"
            type="monotone"
            dataKey="hr"
            stroke="#22c55e"
            strokeWidth={2}
            dot={{ r: 3, fill: '#22c55e' }}
            connectNulls={false}
          />
          <Line
            yAxisId="pace"
            type="monotone"
            dataKey="paceSec"
            stroke="#a3e635"
            strokeWidth={2}
            strokeDasharray="4 3"
            dot={{ r: 3, fill: '#a3e635' }}
            connectNulls={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </section>
  )
}
