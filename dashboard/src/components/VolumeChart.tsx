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

const typeEmoji: Record<string, string> = {
  test: '⚡',
  peak: '📈',
  injury: '⚠️',
  illness: '🤒',
  phase: '🏁',
  race: '🏆',
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
  const emoji = typeEmoji[payload.milestoneType] ?? '📍'

  // Position the floating badge 26px above the top of the bar
  const badgeHeight = 26
  const badgeY = cy - badgeHeight

  return (
    <g>
      {/* Thin dashed guideline from top of bar to the badge */}
      <line
        x1={cx}
        y1={cy}
        x2={cx}
        y2={badgeY}
        stroke={color}
        strokeWidth={1.5}
        strokeDasharray="3 3"
      />
      {/* Badge outer circle ring */}
      <circle
        cx={cx}
        cy={badgeY}
        r={12}
        fill="#0b0d12"
        stroke={color}
        strokeWidth={2}
      />
      {/* Icon/Emoji */}
      <text
        x={cx}
        y={badgeY + 4}
        textAnchor="middle"
        fontSize={11}
        className="select-none"
      >
        {emoji}
      </text>
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
          {typeEmoji[m.type] ?? '📍'} {m.label}
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

  // Weeks that carry at least one (filtered) milestone, for the timeline strip
  const timelineWeeks = weeks.filter((w) => {
    const ms = milestonesByWeek[w.week] ?? []
    const filteredMs = filter === 'all'
      ? ms
      : ms.filter((m) => m.discipline === filter || m.discipline === 'all')
    return filteredMs.length > 0
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
                <span style={{ color }}>{typeEmoji[type]} {type}</span>
              </span>
            ))}
          </p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data} margin={{ top: 32, right: 8, left: -16, bottom: 0 }}>
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

      {/* Dedicated Milestone Timeline Strip */}
      <div className="mt-6 border-t border-slate-800 pt-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Season Milestones Timeline
          </h3>
          <span className="text-[10px] text-slate-500">Scroll horizontally →</span>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {timelineWeeks.map((w) => {
            const ms = milestonesByWeek[w.week] ?? []
            const filteredMs = filter === 'all'
              ? ms
              : ms.filter((m) => m.discipline === filter || m.discipline === 'all')

            return (
              <div
                key={w.week}
                className="w-48 flex-shrink-0 rounded-xl border border-slate-800/80 bg-slate-950/80 p-3 transition hover:border-slate-700"
              >
                <div className="mb-2 flex items-center justify-between border-b border-slate-900 pb-1.5">
                  <span className="text-xs font-bold text-slate-300">Wk {w.week}</span>
                  <span className="text-[10px] font-medium text-slate-500">{w.dateRange.split(' - ')[0]}</span>
                </div>
                <div className="space-y-2">
                  {filteredMs.map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="flex items-start gap-1.5">
                        <span className="mt-0.5 shrink-0 select-none text-xs leading-tight">
                          {typeEmoji[m.type] ?? '📍'}
                        </span>
                        <span className="text-xs font-medium leading-tight text-slate-200">
                          {m.label}
                        </span>
                      </div>
                      {'value' in m && m.value && (
                        <p className="pl-5 font-mono text-[10px] leading-normal text-slate-400">
                          {m.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
