export function formatHours(h: number | null): string {
  if (h === null || h === undefined) return '—'
  const hours = Math.floor(h)
  const mins = Math.round((h - hours) * 60)
  return mins === 0 ? `${hours}h` : `${hours}h${mins.toString().padStart(2, '0')}`
}

export function parseRaceDate(): Date {
  return new Date('2026-06-07T00:00:00')
}

export function daysUntil(target: Date): number {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const t = new Date(target)
  t.setHours(0, 0, 0, 0)
  return Math.round((t.getTime() - today.getTime()) / 86_400_000)
}

export function hmsToSeconds(hms: string): number {
  const parts = hms.split(':').map(Number)
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2]
  if (parts.length === 2) return parts[0] * 60 + parts[1]
  return parts[0]
}

export function secondsToHms(s: number): string {
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = Math.round(s % 60)
  return `${h}:${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
}

export function paceToSeconds(p: string | null): number | null {
  if (!p) return null
  const [m, s] = p.split('/')[0].split(':').map(Number)
  return m * 60 + s
}

export function secondsToPace(s: number): string {
  const m = Math.floor(s / 60)
  const sec = Math.round(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}
