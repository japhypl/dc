export type RegionId = 'us' | 'western-europe' | 'germany' | 'central-europe' | 'total';

export interface RegionDefinition {
  id: RegionId;
  name: string;
  countries?: string[];
  excludes?: string[];
  sourceDoc?: string;
  includedInTotal: boolean;
}

export interface RegionMap {
  years: string[];
  baselineYear: string;
  primaryUnit: string;
  regions: RegionDefinition[];
}
