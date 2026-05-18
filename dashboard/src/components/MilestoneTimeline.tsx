import milestones from '../data/milestones.json'
import type { Filter } from '../data/schema'

const typeColor: Record<string, string> = {
  test: 'bg-orange-500',
  peak: 'bg-amber-500',
  injury: 'bg-red-500',
  phase: 'bg-slate-400',
  race: 'bg-fuchsia-500',
}

const disciplineDot: Record<string, string> = {
  swim: 'text-cyan-400',
  bike: 'text-orange-400',
  run: 'text-green-400',
  all: 'text-slate-300',
}

export function MilestoneTimeline({ filter }: { filter: Filter }) {
  const items = milestones.filter(
    (m) => filter === 'all' || m.discipline === filter || m.discipline === 'all',
  )
  return (
    <section
      data-testid="milestone-timeline"
      className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 md:p-6"
    >
      <h2 className="text-base font-medium md:text-lg 2xl:text-2xl">Milestones</h2>
      <ol className="mt-3 space-y-3">
        {items.map((m, i) => (
          <li key={i} className="flex items-start gap-3" data-testid={`milestone-${m.week}-${m.type}`}>
            <span
              className={`mt-1.5 inline-block size-2 shrink-0 rounded-full ${typeColor[m.type] ?? 'bg-slate-500'}`}
              aria-hidden
            />
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
                <span className={`text-xs font-medium ${disciplineDot[m.discipline] ?? 'text-slate-300'}`}>
                  Wk {m.week}
                </span>
                <span className="text-xs text-slate-500">{m.date}</span>
                {m.significance === 'major' && (
                  <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-slate-300">
                    major
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-200 md:text-base">{m.label}</p>
              {m.value && <p className="text-xs text-slate-400">{m.value}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
