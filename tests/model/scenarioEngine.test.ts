import { describe, expect, it } from 'vitest';
import { buildScenarioOutputs } from '../../src/model/scenarioEngine';
import type { RegionSource, ScenarioParameter } from '../../src/types/capacity';

const source: RegionSource = {
  regionId: 'central-europe',
  regionName: 'Central Europe',
  sourceStatus: 'populated',
  baselineYear: '2025e',
  years: ['2025e', '2026f', '2027f', '2028f', '2029f', '2030f'],
  capacityDefinition: 'IT load proxy GW (?)',
  baseForecastGw: { '2025e': 1, '2026f': 2, '2027f': 3, '2028f': 4, '2029f': 5, '2030f': 6 },
  highForecastGw: { '2025e': 1, '2026f': 2.2, '2027f': 3.2, '2028f': 4.2, '2029f': 5.2, '2030f': 6.2 },
  qualityFlags: ['Direct'],
  sourceFiles: [],
  comments: ''
};

const params: ScenarioParameter[] = ['2026f', '2027f', '2028f', '2029f', '2030f'].map((year) => ({
  regionId: 'central-europe',
  year: year as ScenarioParameter['year'],
  lowRealization: 0.5,
  midRealization: 1,
  highMultiplier: 1,
  highUpliftGw: 0,
  timingFactor: 1,
  delayMonths: 0,
  applyAnnualCap: false,
  annualCommissioningCapGw: null
}));

describe('scenario engine', () => {
  it('calculates low, mid, high and total rows', () => {
    const rows = buildScenarioOutputs([source], params);
    const row2030 = rows.find((row) => row.regionId === 'central-europe' && row.year === '2030f');
    expect(row2030?.lowGw).toBe(3.5);
    expect(row2030?.midGw).toBe(6);
    expect(row2030?.highGw).toBe(6.2);
    expect(rows.some((row) => row.regionId === 'total')).toBe(true);
  });
});
