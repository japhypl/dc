import type { ForecastYear, RegionSource, ScenarioOutputRow, ScenarioParameter } from '../types/capacity';
import { applyAnnualCap } from './annualCap';
import { roundGw } from './capacityNormalization';
import { mergeQualityFlags } from './qualityFlags';

const years: ForecastYear[] = ['2026f', '2027f', '2028f', '2029f', '2030f'];

function findParameter(params: ScenarioParameter[], regionId: string, year: ForecastYear): ScenarioParameter {
  const found = params.find((param) => param.regionId === regionId && param.year === year);
  if (!found) {
    return {
      regionId: regionId as ScenarioParameter['regionId'],
      year,
      lowRealization: 0.5,
      midRealization: 1,
      highMultiplier: 1,
      highUpliftGw: 0,
      timingFactor: 1,
      delayMonths: 0,
      applyAnnualCap: false,
      annualCommissioningCapGw: null
    };
  }
  return found;
}

export function calculateRegionOutputs(sources: RegionSource[], params: ScenarioParameter[]): ScenarioOutputRow[] {
  const rows: ScenarioOutputRow[] = [];

  for (const source of sources) {
    const baseline = source.baseForecastGw['2025e'];
    for (const year of years) {
      const p = findParameter(params, source.regionId, year);
      const base = source.baseForecastGw[year];
      const highForecast = source.highForecastGw?.[year] ?? null;
      let low: number | null = null;
      let mid: number | null = null;
      let high: number | null = null;

      if (baseline !== null && base !== null) {
        const incremental = base - baseline;
        low = baseline + p.lowRealization * p.timingFactor * incremental;
        mid = base * p.midRealization;
        high = highForecast !== null ? highForecast : base * p.highMultiplier + p.highUpliftGw;
      }

      low = applyAnnualCap(roundGw(low), p.annualCommissioningCapGw, p.applyAnnualCap);
      mid = applyAnnualCap(roundGw(mid), p.annualCommissioningCapGw, p.applyAnnualCap);
      high = applyAnnualCap(roundGw(high), p.annualCommissioningCapGw, p.applyAnnualCap);

      rows.push({
        regionId: source.regionId,
        regionName: source.regionName,
        year,
        lowGw: roundGw(low),
        midGw: roundGw(mid),
        highGw: roundGw(high),
        baselineGw: roundGw(baseline),
        isPartial: baseline === null || base === null,
        sourceStatus: source.sourceStatus,
        qualityFlags: mergeQualityFlags(source.qualityFlags, base === null ? ['External', '?'] : []),
        comments: source.comments
      });
    }
  }

  return rows;
}

export function calculateTotalRows(regionRows: ScenarioOutputRow[]): ScenarioOutputRow[] {
  return years.map((year) => {
    const rows = regionRows.filter((row) => row.year === year && row.regionId !== 'total');
    const sum = (key: 'lowGw' | 'midGw' | 'highGw') => {
      const values = rows.map((row) => row[key]).filter((value): value is number => value !== null);
      return values.length === 0 ? null : roundGw(values.reduce((acc, value) => acc + value, 0));
    };
    const baselineValues = rows.map((row) => row.baselineGw).filter((value): value is number => value !== null);
    const isPartial = rows.some((row) => row.isPartial);
    return {
      regionId: 'total',
      regionName: 'Total',
      year,
      lowGw: sum('lowGw'),
      midGw: sum('midGw'),
      highGw: sum('highGw'),
      baselineGw: baselineValues.length ? roundGw(baselineValues.reduce((acc, value) => acc + value, 0)) : null,
      isPartial,
      sourceStatus: isPartial ? 'partial_total_missing_source_input' : 'complete',
      qualityFlags: isPartial ? ['Estimated', 'External', '?'] : ['Estimated'],
      comments: isPartial ? 'Total is partial because one or more regions have missing source input.' : 'Total of all regions.'
    };
  });
}

export function buildScenarioOutputs(sources: RegionSource[], params: ScenarioParameter[]): ScenarioOutputRow[] {
  const regions = calculateRegionOutputs(sources, params);
  return [...regions, ...calculateTotalRows(regions)];
}
