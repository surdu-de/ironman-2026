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
      className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 md:p-6"
    >
      <h2 className="text-base font-medium md:text-lg 2xl:text-2xl">
        FTP progression
      </h2>
      <p className="mt-1 text-xs text-slate-400 md:text-sm">
        195W baseline → 255W (2.93 W/kg @ 87kg)
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 16, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
          <XAxis dataKey="week" stroke="#94a3b8" fontSize={11} />
          <YAxis stroke="#94a3b8" fontSize={11} domain={[180, 280]} unit="W" />
          <Tooltip
            contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }}
            labelStyle={{ color: '#e2e8f0' }}
            labelFormatter={(w) => `Week ${w}`}
          />
          <ReferenceLine y={195} stroke="#475569" strokeDasharray="4 4" label={{ value: 'Baseline 195W', fill: '#64748b', fontSize: 10 }} />
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
