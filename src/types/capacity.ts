import type { RegionId } from './regions';

export type ForecastYear = '2026f' | '2027f' | '2028f' | '2029f' | '2030f';
export type BaselineYear = '2025e';
export type ModelYear = BaselineYear | ForecastYear;

export interface RegionSource {
  regionId: Exclude<RegionId, 'total'>;
  regionName: string;
  sourceStatus: 'populated' | 'external_input_required' | string;
  baselineYear: BaselineYear;
  years: ModelYear[];
  capacityDefinition: string;
  baseForecastGw: Record<ModelYear, number | null>;
  highForecastGw?: Record<ModelYear, number | null>;
  qualityFlags: string[];
  sourceFiles: string[];
  comments: string;
}

export interface CountrySource {
  country: string;
  qualityFlags: string[];
  capacityDefinition: string;
  valuesGw: Record<ModelYear, number | null>;
  highValuesGw?: Record<ModelYear, number | null>;
  comments: string;
}

export interface ScenarioParameter {
  regionId: Exclude<RegionId, 'total'>;
  year: ForecastYear;
  lowRealization: number;
  midRealization: number;
  highMultiplier: number;
  highUpliftGw: number;
  timingFactor: number;
  delayMonths: number;
  applyAnnualCap: boolean;
  annualCommissioningCapGw: number | null;
  comments?: string;
}

export interface ScenarioOutputRow {
  regionId: RegionId;
  regionName: string;
  year: ForecastYear;
  lowGw: number | null;
  midGw: number | null;
  highGw: number | null;
  baselineGw: number | null;
  isPartial: boolean;
  sourceStatus: string;
  qualityFlags: string[];
  comments?: string;
}

export interface CapacityApiResponse {
  regionMap: import('./regions').RegionMap;
  scenarioParameters: { parameters: ScenarioParameter[] };
  sources: RegionSource[];
  countrySources: CountrySource[];
}
