export type Discipline = 'swim' | 'bike' | 'run'
export type Filter = 'all' | Discipline

export interface DisciplineWeek {
  plannedKm: number | null
  actualKm: number | null
  estimatedHours: number | null
}

export interface Week {
  week: number
  cycle: number | 'taper'
  dateRange: string
  phase: string
  plannedHours: number | null
  actualHours: number | null
  swim: DisciplineWeek
  bike: DisciplineWeek
  run: DisciplineWeek
  ftpW: number | null
  cssPace100m: string | number | null
  keySessions: string[]
  flags: string[]
  notes: string
}

export interface Cycle {
  number: number | 'taper'
  phase: string
  weeks: [number, number]
  dates: string
  goals: string[]
  results: { metric: string; baseline?: string; end: string; change?: string }[]
  achievements: string[]
  challenges: string[]
  learnings: string[]
  status: 'completed' | 'current' | 'upcoming'
}

export interface Milestone {
  date: string
  week: number
  discipline: Discipline | 'all'
  type: 'test' | 'peak' | 'injury' | 'illness' | 'phase' | 'race'
  label: string
  value?: string
  significance: 'major' | 'minor'
}

export interface Race {
  date: string
  city: string
  targets: {
    swim: string
    bike: string
    run: string
    total: string
  }
  baseline2024: {
    swim: string
    bike: string
    run: string
    total: string
  }
  ftpW: number
  weightKg: number
  wPerKg: number
  notes: string[]
}
