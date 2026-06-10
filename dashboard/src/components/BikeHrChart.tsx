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
      className="rounded-2xl border border-border bg-surface/50 p-4 md:p-6"
    >
      <h2 className="text-base font-medium md:text-lg 2xl:text-2xl">
        Long bike avg HR
      </h2>
      <p className="mt-1 text-xs text-muted md:text-sm">
        Race-target band 130-138 bpm
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 16, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
          <XAxis dataKey="week" stroke="var(--color-muted)" fontSize={11} />
          <YAxis stroke="var(--color-muted)" fontSize={11} domain={[120, 160]} unit=" bpm" />
          <Tooltip
            contentStyle={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            labelStyle={{ color: 'var(--color-text)' }}
            labelFormatter={(w) => `Week ${w}`}
          />
          <ReferenceArea y1={130} y2={138} fill="#f97316" fillOpacity={0.12} />
          <Line
            type="monotone"
            dataKey="hr"
            stroke="#f97316"
            strokeWidth={2}
            dot={{ r: 3, fill: '#f97316' }}
            connectNulls={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  )
}
