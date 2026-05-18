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

const data = weeks.map((w) => ({
  week: w.week,
  planned: w.plannedHours ?? 0,
  actual: w.actualHours ?? 0,
  compliance: w.plannedHours && w.actualHours ? Math.round((w.actualHours / w.plannedHours) * 100) : null,
}))

export function CompletionChart() {
  return (
    <section
      data-testid="completion-chart"
      className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 md:p-6"
    >
      <h2 className="text-base font-medium md:text-lg 2xl:text-2xl">
        Planned vs Actual hours
      </h2>
      <ResponsiveContainer width="100%" height={220}>
        <ComposedChart data={data} margin={{ top: 16, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
          <XAxis dataKey="week" stroke="#94a3b8" fontSize={11} />
          <YAxis stroke="#94a3b8" fontSize={11} unit="h" />
          <Tooltip
            contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }}
            labelStyle={{ color: '#e2e8f0' }}
            labelFormatter={(w) => `Week ${w}`}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="planned" fill="#334155" />
          <Line type="monotone" dataKey="actual" stroke="#aa3bff" strokeWidth={2} dot={{ r: 3 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </section>
  )
}
