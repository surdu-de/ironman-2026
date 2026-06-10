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

const data = weeks
  .filter((w) => w.ftpW !== null)
  .map((w) => ({ week: w.week, ftp: w.ftpW as number }))

export function FtpChart() {
  return (
    <section
      data-testid="ftp-chart"
      className="rounded-2xl border border-border bg-surface/50 p-4 md:p-6"
    >
      <h2 className="text-base font-medium md:text-lg 2xl:text-2xl">
        FTP progression
      </h2>
      <p className="mt-1 text-xs text-muted md:text-sm">
        195W baseline → 255W (2.93 W/kg @ 87kg)
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 16, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
          <XAxis dataKey="week" stroke="var(--color-muted)" fontSize={11} />
          <YAxis stroke="var(--color-muted)" fontSize={11} domain={[180, 280]} unit="W" />
          <Tooltip
            contentStyle={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            labelStyle={{ color: 'var(--color-text)' }}
            labelFormatter={(w) => `Week ${w}`}
          />
          <ReferenceLine y={195} stroke="var(--color-faint)" strokeDasharray="4 4" label={{ value: 'Baseline 195W', fill: 'var(--color-faint)', fontSize: 10 }} />
          <Line
            type="monotone"
            dataKey="ftp"
            stroke="#f97316"
            strokeWidth={2}
            dot={{ r: 4, fill: '#f97316' }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  )
}
