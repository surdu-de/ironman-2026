import type { Filter } from '../data/schema'

const options: { value: Filter; label: string; color: string }[] = [
  { value: 'all', label: 'All', color: 'bg-info' },
  { value: 'swim', label: 'Swim', color: 'bg-cyan-600' },
  { value: 'bike', label: 'Bike', color: 'bg-orange-600' },
  { value: 'run', label: 'Run', color: 'bg-green-600' },
]

export function DisciplineFilter({
  value,
  onChange,
}: {
  value: Filter
  onChange: (v: Filter) => void
}) {
  return (
    <div
      data-testid="discipline-filter"
      className="sticky top-0 z-10 mx-4 mt-2 flex gap-2 rounded-full border border-border bg-bg/80 p-1 backdrop-blur md:mx-8 2xl:mx-16"
    >
      {options.map((opt) => {
        const active = value === opt.value
        return (
          <button
            key={opt.value}
            type="button"
            data-testid={`filter-${opt.value}`}
            onClick={() => onChange(opt.value)}
            className={`flex-1 rounded-full px-3 py-2 text-xs font-medium transition md:text-sm 2xl:text-base ${
              active
                ? `${opt.color} text-white shadow`
                : 'text-muted hover:text-text'
            }`}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
