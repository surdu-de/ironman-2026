const RACE_DATE = new Date('2026-06-07T00:00:00')

function daysUntil(target: Date): number {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const t = new Date(target)
  t.setHours(0, 0, 0, 0)
  return Math.round((t.getTime() - today.getTime()) / 86_400_000)
}

function App() {
  const daysToRace = daysUntil(RACE_DATE)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="px-4 pt-6 pb-4 md:px-8 md:pt-10 2xl:px-16 2xl:pt-16">
        <p className="text-xs uppercase tracking-widest text-slate-400 md:text-sm">
          Ironman Hamburg
        </p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight md:text-5xl 2xl:text-7xl">
          {daysToRace} days to race
        </h1>
        <p className="mt-2 text-sm text-slate-400 md:text-base 2xl:text-xl">
          Sunday, June 7, 2026
        </p>
      </header>
      <main className="px-4 py-4 md:px-8 2xl:px-16">
        <div
          data-testid="placeholder"
          className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
        >
          <h2 className="text-lg font-medium md:text-2xl">Dashboard scaffold ready</h2>
          <p className="mt-2 text-sm text-slate-400">
            Charts, milestones, and forecast coming next.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
