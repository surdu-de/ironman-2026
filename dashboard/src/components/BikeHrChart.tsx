import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from 'recharts'
import weeks from '../data/weeks.json'

const data = weeks.map((w) => ({
  week: w.week,
  hr: w.longBikeAvgHr,
}))

export function BikeHrChart() {
  return (
    <section
      data-testid="bike-hr-chart"
      className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 md:p-6"
    >
      <h2 className="text-base font-medium md:text-lg 2xl:text-2xl">
        Long bike avg HR
      </h2>
      <p className="mt-1 text-xs text-slate-400 md:text-sm">
        Race-target band 130-138 bpm
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 16, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
          <XAxis dataKey="week" stroke="#94a3b8" fontSize={11} />
          <YAxis stroke="#94a3b8" fontSize={11} domain={[120, 160]} unit=" bpm" />
          <Tooltip
            contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }}
            labelStyle={{ color: '#e2e8f0' }}
            labelFormatter={(w) => `Week ${w}`}
          />
          <ReferenceArea y1={130} y2={138} fill="#f97316" fillOpacity={0.12} />
          <Line
            type="monotone"
            dataKey="hr"
            stroke="#f97316"
            strokeWidth={2}
            dot={{ r: 3, fill: '#f97316' }}
            connectNulls={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  )
}
