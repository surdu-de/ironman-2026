import { useState } from 'react'
import cycles from '../data/cycles.json'
import weeks from '../data/weeks.json'
import type { Filter } from '../data/schema'
import { formatHours } from '../lib/format'

const statusBadge: Record<string, string> = {
  completed: 'bg-slate-700 text-slate-300',
  current: 'bg-fuchsia-700 text-fuchsia-100',
  upcoming: 'bg-slate-800 text-slate-400',
}

export function CycleList({ filter }: { filter: Filter }) {
  const [open, setOpen] = useState<number | string | null>(null)
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 md:p-6">
      <h2 className="text-base font-medium md:text-lg 2xl:text-2xl">Cycles</h2>
      <ul className="mt-3 space-y-2" data-testid="cycle-list">
        {cycles.map((c) => {
          const cyclesWeeks = weeks.filter((w) => w.cycle === c.number)
          const isOpen = open === c.number
          const id = `cycle-${c.number}`
          return (
            <li key={id} className="rounded-xl border border-slate-800 bg-slate-950/60">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : c.number)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                data-testid={`${id}-toggle`}
              >
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-medium text-slate-100 md:text-base">
                      {typeof c.number === 'number' ? `Cycle ${c.number}` : 'Taper'} · {c.phase}
                    </span>
                    <span className={`rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wider ${statusBadge[c.status]}`}>
                      {c.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">Weeks {c.weeks[0]}-{c.weeks[1]} · {c.dates}</p>
                </div>
                <span className="text-slate-500">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="space-y-3 border-t border-slate-800 px-4 py-3">
                  {c.results.length > 0 && (
                    <div>
                      <h3 className="text-xs font-medium uppercase tracking-wider text-slate-400">Results</h3>
                      <ul className="mt-1 space-y-0.5 text-sm text-slate-200">
                        {c.results.map((r, i) => (
                          <li key={i}>
                            <span className="text-slate-400">{r.metric}:</span>{' '}
                            {r.baseline && <span className="text-slate-500">{r.baseline} → </span>}
                            <span>{r.end}</span>{' '}
                            {r.change && <span className="text-slate-500">({r.change})</span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {c.achievements.length > 0 && (
                    <div>
                      <h3 className="text-xs font-medium uppercase tracking-wider text-slate-400">Achievements</h3>
                      <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-slate-200">
                        {c.achievements.map((a, i) => <li key={i}>{a}</li>)}
                      </ul>
                    </div>
                  )}
                  {c.challenges.length > 0 && (
                    <div>
                      <h3 className="text-xs font-medium uppercase tracking-wider text-slate-400">Challenges</h3>
                      <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-slate-200">
                        {c.challenges.map((a, i) => <li key={i}>{a}</li>)}
                      </ul>
                    </div>
                  )}
                  {c.learnings.length > 0 && (
                    <div>
                      <h3 className="text-xs font-medium uppercase tracking-wider text-slate-400">Learnings</h3>
                      <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-slate-200">
                        {c.learnings.map((a, i) => <li key={i}>{a}</li>)}
                      </ul>
                    </div>
                  )}
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-wider text-slate-400">Weeks</h3>
                    <ul className="mt-1 space-y-1.5">
                      {cyclesWeeks.map((w) => {
                        const sessions = filter === 'all'
                          ? w.keySessions
                          : w.keySessions.filter((s) =>
                              s.toLowerCase().includes(filter === 'bike' ? 'bike' : filter === 'run' ? 'run' : 'swim'),
                            )
                        return (
                          <li
                            key={w.week}
                            className="rounded-lg border border-slate-800 px-3 py-2 text-xs md:text-sm"
                            data-testid={`week-row-${w.week}`}
                          >
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                              <span className="font-medium text-slate-200">Wk {w.week}</span>
                              <span className="text-slate-500">{w.dateRange}</span>
                              <span className="text-slate-500">·</span>
                              <span className="text-slate-300">
                                {formatHours(w.actualHours)}
                                <span className="text-slate-500"> / {formatHours(w.plannedHours)}</span>
                              </span>
                              {w.flags.map((f) => (
                                <span key={f} className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-slate-300">
                                  {f}
                                </span>
                              ))}
                            </div>
                            {sessions.length > 0 && (
                              <ul className="mt-1 list-disc space-y-0.5 pl-5 text-slate-400">
                                {sessions.map((s, i) => <li key={i}>{s}</li>)}
                              </ul>
                            )}
                            {w.notes && <p className="mt-1 text-slate-500">{w.notes}</p>}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
