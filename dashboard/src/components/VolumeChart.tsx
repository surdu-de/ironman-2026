import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import weeks from '../data/weeks.json'
import milestones from '../data/milestones.json'
import type { Filter } from '../data/schema'

const typeColorHex: Record<string, string> = {
  test: '#f97316',
  peak: '#f59e0b',
  injury: '#ef4444',
  illness: '#eab308',
  phase: '#94a3b8',
  race: '#d946ef',
}

const typePriority = ['race', 'injury', 'test', 'peak', 'illness', 'phase']

const milestonesByWeek: Record<number, typeof milestones> = {}
milestones.forEach((m) => {
  if (!milestonesByWeek[m.week]) milestonesByWeek[m.week] = []
  milestonesByWeek[m.week].push(m)
})

function MilestoneDot(props: {
  cx?: number
  cy?: number
  payload?: { milestoneType: string | null }
}) {
  const { cx, cy, payload } = props
  if (!payload?.milestoneType || cx == null || cy == null) return null
  const color = typeColorHex[payload.milestoneType] ?? '#94a3b8'
  return (
    <g>
      <circle cx={cx} cy={cy - 14} r={10} fill={color} stroke="#0f172a" strokeWidth={1.5} />
    </g>
  )
}

function CustomTooltip(props: {
  active?: boolean
  payload?: { dataKey: string; value: number; fill: string; payload: Record<string, unknown> }[]
  label?: number
}) {
  const { active, payload, label } = props
  if (!active || !payload?.length) return null
  const d = payload[0]?.payload as { milestones?: typeof milestones } | undefined
  const ms = d?.milestones ?? []
  const volumeRows = payload.filter((p) => p.dataKey !== 'milestoneMarker')
  return (
    <div
      style={{
        background: '#0f172a',
        border: '1px solid #1e293b',
        padding: '8px 12px',
        borderRadius: 8,
        fontSize: 12,
        maxWidth: 260,
      }}
    >
      <p style={{ color: '#e2e8f0', marginBottom: 4, fontWeight: 600 }}>Week {label}</p>
      {volumeRows.map((p) => (
        <p key={p.dataKey} style={{ color: p.fill }}>
          {p.dataKey}: {Number(p.value).toFixed(1)}h
        </p>
      ))}
      {ms.length > 0 && (
        <hr style={{ borderColor: '#1e293b', margin: '6px 0' }} />
      )}
      {ms.map((m, i) => (
        <p key={i} style={{ color: typeColorHex[m.type] ?? '#94a3b8', marginTop: 2 }}>
          {m.label}
          {'value' in m && m.value ? ` — ${m.value}` : ''}
        </p>
      ))}
    </div>
  )
}

export function VolumeChart({ filter }: { filter: Filter }) {
  const show = (d: 'swim' | 'bike' | 'run') => filter === 'all' || filter === d

  const data = weeks.map((w) => {
    const allMs = milestonesByWeek[w.week] ?? []
    const filteredMs =
      filter === 'all'
        ? allMs
        : allMs.filter((m) => m.discipline === filter || m.discipline === 'all')
    const topType =
      typePriority.find((t) => filteredMs.some((m) => m.type === t)) ?? null
    const swim = show('swim') ? (w.swim.estimatedHours ?? 0) : 0
    const bike = show('bike') ? (w.bike.estimatedHours ?? 0) : 0
    const run = show('run') ? (w.run.estimatedHours ?? 0) : 0
    const total = swim + bike + run
    return {
      week: w.week,
      swim,
      bike,
      run,
      milestones: filteredMs,
      milestoneType: topType,
      milestoneMarker: topType ? total : undefined,
    }
  })

  return (
    <section
      data-testid="volume-chart"
      className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 md:p-6"
    >
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h2 className="text-base font-medium md:text-lg 2xl:text-2xl">
            Weekly volume (hours, estimated by discipline)
          </h2>
          <p className="mt-0.5 text-xs text-slate-400">
            Markers: {Object.entries(typeColorHex).map(([type, color], i) => (
              <span key={type}>
                {i > 0 && ' · '}
                <span style={{ color }}>{type}</span>
              </span>
            ))}
          </p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={data} margin={{ top: 24, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
          <XAxis dataKey="week" stroke="#94a3b8" fontSize={11} />
          <YAxis stroke="#94a3b8" fontSize={11} unit="h" />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          {show('swim') && <Bar dataKey="swim" stackId="v" fill="#06b6d4" />}
          {show('bike') && <Bar dataKey="bike" stackId="v" fill="#f97316" />}
          {show('run') && <Bar dataKey="run" stackId="v" fill="#22c55e" />}
          <Line
            dataKey="milestoneMarker"
            stroke="none"
            strokeWidth={0}
            dot={<MilestoneDot />}
            activeDot={false}
            legendType="none"
            isAnimationActive={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </section>
  )
}
