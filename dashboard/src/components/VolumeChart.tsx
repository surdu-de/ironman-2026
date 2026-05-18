import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import weeks from '../data/weeks.json'
import type { Filter } from '../data/schema'

const data = weeks.map((w) => ({
  week: w.week,
  swim: w.swim.estimatedHours ?? 0,
  bike: w.bike.estimatedHours ?? 0,
  run: w.run.estimatedHours ?? 0,
}))

export function VolumeChart({ filter }: { filter: Filter }) {
  const show = (d: 'swim' | 'bike' | 'run') => filter === 'all' || filter === d
  return (
    <section
      data-testid="volume-chart"
      className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 md:p-6"
    >
      <h2 className="text-base font-medium md:text-lg 2xl:text-2xl">
        Weekly volume (hours, estimated by discipline)
      </h2>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 16, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
          <XAxis dataKey="week" stroke="#94a3b8" fontSize={11} />
          <YAxis stroke="#94a3b8" fontSize={11} unit="h" />
          <Tooltip
            contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }}
            labelStyle={{ color: '#e2e8f0' }}
            labelFormatter={(w) => `Week ${w}`}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          {show('swim') && <Bar dataKey="swim" stackId="v" fill="#06b6d4" />}
          {show('bike') && <Bar dataKey="bike" stackId="v" fill="#f97316" />}
          {show('run') && <Bar dataKey="run" stackId="v" fill="#22c55e" />}
        </BarChart>
      </ResponsiveContainer>
    </section>
  )
}
