import { useState } from 'react'
import type { Filter } from './data/schema'
import { Header } from './components/Header'
import { DisciplineFilter } from './components/DisciplineFilter'
import { VolumeChart } from './components/VolumeChart'
import { FtpChart } from './components/FtpChart'
import { BikeHrChart } from './components/BikeHrChart'
import { RunHrPaceChart } from './components/RunHrPaceChart'
import { SwimPaceChart } from './components/SwimPaceChart'
import { CompletionChart } from './components/CompletionChart'
import { ForecastCard } from './components/ForecastCard'
import { CycleList } from './components/CycleList'

function App() {
  const [filter, setFilter] = useState<Filter>('all')

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      {/* Global discipline filter */}
      <div className="px-4 pt-4 md:px-8 2xl:px-16">
        <DisciplineFilter value={filter} onChange={setFilter} />
      </div>

      {/* Weekly volume — full width with milestone markers */}
      <div className="px-4 pt-4 md:px-8 md:pt-6 2xl:px-16">
        <VolumeChart filter={filter} />
      </div>

      {/* Training load + Performance trends — two columns */}
      <div className="grid gap-4 px-4 py-4 md:grid-cols-2 md:px-8 md:py-6 2xl:px-16 2xl:py-6">
        {/* Left: Race forecast + Training adherence */}
        <section className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">Race-day forecast</h3>
          <ForecastCard />
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">Training adherence</h3>
          <CompletionChart />
        </section>

        {/* Right: Performance trends */}
        <section className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">Performance trends</h3>
          {(filter === 'all' || filter === 'bike') && <FtpChart />}
          {(filter === 'all' || filter === 'bike') && <BikeHrChart />}
          {(filter === 'all' || filter === 'run') && <RunHrPaceChart />}
          {(filter === 'all' || filter === 'swim') && <SwimPaceChart />}
        </section>
      </div>

      {/* History — cycles */}
      <div className="px-4 pb-8 md:px-8 2xl:px-16">
        <CycleList filter={filter} />
      </div>

      <footer className="px-4 pb-8 text-center text-xs text-slate-500 md:px-8 2xl:px-16">
        Ironman Hamburg 2026 · personal training dashboard
      </footer>
    </div>
  )
}

export default App
