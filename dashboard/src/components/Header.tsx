import race from '../data/race.json'
import weeks from '../data/weeks.json'
import { daysUntil, parseRaceDate } from '../lib/format'

const TRAINING_START = new Date('2025-11-10T00:00:00')

function currentWeekIndex(): number {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const elapsedDays = Math.floor((today.getTime() - TRAINING_START.getTime()) / 86_400_000)
  const idx = Math.floor(elapsedDays / 7)
  return Math.min(weeks.length - 1, Math.max(0, idx))
}

export function Header() {
  const days = daysUntil(parseRaceDate())
  const current = weeks[currentWeekIndex()]

  return (
    <header className="px-4 pt-6 pb-4 md:px-8 md:pt-10 2xl:px-16 2xl:pt-16">
      <p className="text-xs uppercase tracking-widest text-slate-400 md:text-sm">
        Ironman {race.city}
      </p>
      <div className="mt-1 flex flex-wrap items-end gap-x-6 gap-y-2">
        <h1
          className="text-3xl font-semibold tracking-tight md:text-5xl 2xl:text-7xl"
          data-testid="days-to-race"
        >
          {days} days to race
        </h1>
        <p className="text-sm text-slate-400 md:text-base 2xl:text-xl">
          Sunday, June 7, 2026
        </p>
      </div>
      <p className="mt-2 text-sm text-slate-300 md:text-base 2xl:text-lg" data-testid="current-week">
        Week {current.week} ·{' '}
        {typeof current.cycle === 'number' ? `Cycle ${current.cycle}` : 'Taper'} · {current.phase}
      </p>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-400 md:text-sm 2xl:text-base">
        <span>
          Targets · Swim <span className="text-cyan-400">{race.targets.swim}</span> · Bike{' '}
          <span className="text-orange-400">{race.targets.bike}</span> · Run{' '}
          <span className="text-green-400">{race.targets.run}</span> · Total{' '}
          <span className="text-slate-200">{race.targets.total}</span>
        </span>
      </div>
    </header>
  )
}
