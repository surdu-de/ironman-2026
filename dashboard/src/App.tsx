import { useState } from 'react'
import type { Filter } from './data/schema'
import { Header } from './components/Header'
import { DisciplineFilter } from './components/DisciplineFilter'
import { VolumeChart } from './components/VolumeChart'
import { FtpChart } from './components/FtpChart'
import { CompletionChart } from './components/CompletionChart'
import { ForecastCard } from './components/ForecastCard'
import { MilestoneTimeline } from './components/MilestoneTimeline'
import { CycleList } from './components/CycleList'

function App() {
  const [filter, setFilter] = useState<Filter>('all')

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <DisciplineFilter value={filter} onChange={setFilter} />
      <main className="space-y-4 px-4 py-4 md:px-8 md:py-6 2xl:px-16 2xl:py-10">
        <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
          <VolumeChart filter={filter} />
          {(filter === 'all' || filter === 'bike') && <FtpChart />}
          <CompletionChart />
          <ForecastCard />
        </div>
        <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
          <MilestoneTimeline filter={filter} />
          <div className="md:col-span-1 2xl:col-span-2">
            <CycleList filter={filter} />
          </div>
        </div>
      </main>
      <footer className="px-4 pb-8 pt-4 text-center text-xs text-slate-500 md:px-8 2xl:px-16">
        Ironman Hamburg 2026 · personal training dashboard
      </footer>
    </div>
  )
}

export default App
