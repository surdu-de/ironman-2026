import milestones from '../data/milestones.json'
import type { Filter } from '../data/schema'

const typeColor: Record<string, string> = {
  test: 'bg-orange-500',
  peak: 'bg-amber-500',
  injury: 'bg-red-500',
  illness: 'bg-yellow-500',
  phase: 'bg-muted',
  race: 'bg-highlight',
}

const disciplineDot: Record<string, string> = {
  swim: 'text-cyan-400',
  bike: 'text-orange-400',
  run: 'text-green-400',
  all: 'text-muted',
}

export function MilestoneTimeline({ filter }: { filter: Filter }) {
  const items = milestones.filter(
    (m) => filter === 'all' || m.discipline === filter || m.discipline === 'all',
  )
  return (
    <section
      data-testid="milestone-timeline"
      className="rounded-2xl border border-border bg-surface/50 p-4 md:p-6"
    >
      <h2 className="text-base font-medium md:text-lg 2xl:text-2xl">Milestones</h2>
      <ol className="mt-3 space-y-3">
        {items.map((m, i) => (
          <li key={i} className="flex items-start gap-3" data-testid={`milestone-${m.week}-${m.type}`}>
            <span
              className={`mt-1.5 inline-block size-2 shrink-0 rounded-full ${typeColor[m.type] ?? 'bg-faint'}`}
              aria-hidden
            />
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
                <span className={`text-xs font-medium ${disciplineDot[m.discipline] ?? 'text-muted'}`}>
                  Wk {m.week}
                </span>
                <span className="text-xs text-faint">{m.date}</span>
                {m.significance === 'major' && (
                  <span className="rounded bg-border px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-muted">
                    major
                  </span>
                )}
              </div>
              <p className="text-sm text-text md:text-base">{m.label}</p>
              {m.value && <p className="text-xs text-muted">{m.value}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
