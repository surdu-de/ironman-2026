import race from '../data/race.json'
import { hmsToSeconds, secondsToHms } from './format'

export interface ForecastSplit {
  cautious: string
  target: string
  stretch: string
}

export interface Forecast {
  swim: ForecastSplit
  bike: ForecastSplit
  run: ForecastSplit
  total: ForecastSplit
  assumptions: string[]
}

const swimTarget = race.targets.swim
const bikeTarget = race.targets.bike
const runTarget = race.targets.run

function shift(time: string, deltaSeconds: number): string {
  return secondsToHms(hmsToSeconds(time) + deltaSeconds)
}

export function computeForecast(): Forecast {
  const swim: ForecastSplit = {
    cautious: shift(swimTarget, 4 * 60),
    target: swimTarget,
    stretch: shift(swimTarget, -3 * 60),
  }
  const bike: ForecastSplit = {
    cautious: shift(bikeTarget, 15 * 60),
    target: bikeTarget,
    stretch: shift(bikeTarget, -10 * 60),
  }
  const run: ForecastSplit = {
    cautious: shift(runTarget, 20 * 60),
    target: runTarget,
    stretch: shift(runTarget, -10 * 60),
  }
  const t1t2Buffer = 12 * 60
  const totalSec = (cat: keyof ForecastSplit) =>
    hmsToSeconds(swim[cat]) + hmsToSeconds(bike[cat]) + hmsToSeconds(run[cat]) + t1t2Buffer
  const total: ForecastSplit = {
    cautious: secondsToHms(totalSec('cautious')),
    target: secondsToHms(totalSec('target')),
    stretch: secondsToHms(totalSec('stretch')),
  }
  return {
    swim,
    bike,
    run,
    total,
    assumptions: [
      `FTP 255W @ ${race.weightKg}kg (${race.wPerKg} W/kg)`,
      'Bike: 145W normalized power (~57% FTP) on outdoor course',
      'Run: cap HR 148 first 30km, fade tolerance to 5:30/km after gut watchpoint',
      'Swim: CSS 2:11/100m current (Wk26 indicator); CSS retest Wk29',
      'T1 + T2 transitions: 12 min total',
    ],
  }
}
