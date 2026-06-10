import { computeForecast } from '../lib/forecast'
import race from '../data/race.json'

const rowDef: { key: 'swim' | 'bike' | 'run' | 'total'; label: string; color: string }[] = [
  { key: 'swim', label: 'Swim 3.8km', color: 'text-cyan-400' },
  { key: 'bike', label: 'Bike 180km', color: 'text-orange-400' },
  { key: 'run', label: 'Run 42.2km', color: 'text-green-400' },
  { key: 'total', label: 'Total', color: 'text-fuchsia-300' },
]

export function ForecastCard() {
  const result = race.result
  if (result) {
    return (
      <section
        data-testid="result-card"
        className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 md:p-6"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-base font-medium md:text-lg 2xl:text-2xl">
            Race result: {result.outcome}, {result.outcomeDetail.toLowerCase()}
          </h2>
          <span className="text-xs text-slate-400 md:text-sm">{result.conditions}</span>
        </div>
        <div className="mt-3 overflow-hidden rounded-xl border border-slate-800">
          <table className="w-full text-xs md:text-sm 2xl:text-base">
            <thead className="bg-slate-900/60 text-slate-400">
              <tr>
                <th className="px-3 py-2 text-left font-medium">Split</th>
                <th className="px-3 py-2 text-right font-medium">Target</th>
                <th className="px-3 py-2 text-right font-medium">Actual</th>
              </tr>
            </thead>
            <tbody>
              {result.splits.map((s) => (
                <tr
                  key={s.discipline}
                  className="border-t border-slate-800"
                  data-testid={`result-${s.discipline.toLowerCase()}`}
                >
                  <td className="px-3 py-2 font-medium text-slate-200">{s.discipline}</td>
                  <td className="px-3 py-2 text-right tabular-nums text-slate-400">{s.target}</td>
                  <td
                    className={`px-3 py-2 text-right tabular-nums ${
                      s.beatTarget ? 'text-green-400' : s.actual ? 'text-slate-100' : 'text-slate-500'
                    }`}
                  >
                    {s.actual ?? 'did not start'}
                    {s.beatTarget ? ' ✓' : ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-3 space-y-1 text-xs text-slate-400">
          {result.notes.map((n, i) => (
            <li key={i}>· {n}</li>
          ))}
        </ul>
      </section>
    )
  }

  const f = computeForecast()
  return (
    <section
      data-testid="forecast-card"
      className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 md:p-6"
    >
      <div className="flex items-baseline justify-between">
        <h2 className="text-base font-medium md:text-lg 2xl:text-2xl">Total Time Target: {race.targets.total}</h2>
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border border-slate-800">
        <table className="w-full text-xs md:text-sm 2xl:text-base">
          <thead className="bg-slate-900/60 text-slate-400">
            <tr>
              <th className="px-3 py-2 text-left font-medium">Split</th>
              <th className="px-3 py-2 text-right font-medium">Cautious</th>
              <th className="px-3 py-2 text-right font-medium">Target</th>
              <th className="px-3 py-2 text-right font-medium">Stretch</th>
            </tr>
          </thead>
          <tbody>
            {rowDef.map((r) => (
              <tr key={r.key} className="border-t border-slate-800" data-testid={`forecast-${r.key}`}>
                <td className={`px-3 py-2 font-medium ${r.color}`}>{r.label}</td>
                <td className="px-3 py-2 text-right tabular-nums text-slate-300">{f[r.key].cautious}</td>
                <td className="px-3 py-2 text-right tabular-nums text-slate-100">{f[r.key].target}</td>
                <td className="px-3 py-2 text-right tabular-nums text-slate-300">{f[r.key].stretch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="mt-3 space-y-1 text-xs text-slate-400">
        {f.assumptions.map((a, i) => (
          <li key={i}>· {a}</li>
        ))}
      </ul>
    </section>
  )
}
