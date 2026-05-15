import { normalizeCapacity } from '../utils/normalizeCapacity';
import { parseRegions } from '../utils/parseRegions';

export interface DetectedCapacityClaim {
  capacityValue: number | null;
  capacityUnit: 'MW' | 'GW' | 'unknown';
  capacityGw: number | null;
  capacityType: 'it_load' | 'facility_power' | 'design_capacity' | 'contracted_power' | 'unknown';
  region: string | null;
  country: string | null;
  announcementYear: number | null;
  targetYear: number | null;
  deliveryStage: 'announced' | 'planned' | 'under_construction' | 'commissioned' | 'operational' | 'unknown';
  sourceConfidence: 'high' | 'medium' | 'low';
  flags: string[];
  evidence: string;
}

const capacityRegex = /(?:up to\s+|about\s+|approximately\s+|around\s+)?(\d+(?:\.\d+)?)\s?(GW|MW|gigawatts?|megawatts?)/gi;
const yearRegex = /\b(202[3-9]|203[0-5])\b/g;

function classifyStage(text: string): DetectedCapacityClaim['deliveryStage'] {
  const lower = text.toLowerCase();
  if (/commissioned|in service|live|revenue producing/.test(lower)) return 'commissioned';
  if (/operational|operating/.test(lower)) return 'operational';
  if (/under construction|construction started|broke ground|groundbreaking/.test(lower)) return 'under_construction';
  if (/planned|proposed|permitted|seeking approval/.test(lower)) return 'planned';
  if (/announced|will build|future campus/.test(lower)) return 'announced';
  return 'unknown';
}

function classifyCapacityType(evidence: string): DetectedCapacityClaim['capacityType'] {
  const lower = evidence.toLowerCase();
  if (/it load|critical load|critical it/.test(lower)) return 'it_load';
  if (/facility power|utility power|power capacity/.test(lower)) return 'facility_power';
  if (/design capacity|designed for/.test(lower)) return 'design_capacity';
  if (/contracted power|reserved power|power reservation/.test(lower)) return 'contracted_power';
  return 'unknown';
}

function sourceConfidence(text: string): DetectedCapacityClaim['sourceConfidence'] {
  const lower = text.toLowerCase();
  if (/regulatory filing|grid document|interconnection agreement|annual report/.test(lower)) return 'high';
  if (/operator|developer|tenant|utility|press release/.test(lower)) return 'medium';
  return 'low';
}

function firstYear(text: string): number | null {
  const match = Array.from(text.matchAll(yearRegex)).map((m) => Number(m[1])).find(Boolean);
  return match ?? null;
}

export function detectCapacityClaims(text: string, options: { regionHint?: string; targetYear?: number } = {}): DetectedCapacityClaim[] {
  const claims: DetectedCapacityClaim[] = [];
  const matches = Array.from(text.matchAll(capacityRegex)).slice(0, 12);
  const region = parseRegions(text, options.regionHint);
  const stage = classifyStage(text);
  const confidence = sourceConfidence(text);
  const articleYear = firstYear(text);

  for (const match of matches) {
    const value = Number(match[1]);
    const rawUnit = match[2].toLowerCase();
    const unit = rawUnit.startsWith('g') ? 'GW' : rawUnit.startsWith('m') ? 'MW' : 'unknown';
    const start = Math.max(0, match.index ?? 0 - 180);
    const end = Math.min(text.length, (match.index ?? 0) + 220);
    const evidence = text.slice(start, end).trim();
    const capacityType = classifyCapacityType(evidence);
    const flags = [];

    if (capacityType === 'unknown') flags.push('capacity_type_unclear', '?');
    if (stage === 'announced' || stage === 'planned') flags.push('not_available_capacity');
    if (unit === 'unknown') flags.push('unit_unclear', '?');

    claims.push({
      capacityValue: Number.isFinite(value) ? value : null,
      capacityUnit: unit,
      capacityGw: Number.isFinite(value) && unit !== 'unknown' ? normalizeCapacity(value, unit) : null,
      capacityType,
      region: region.region,
      country: region.country,
      announcementYear: articleYear,
      targetYear: options.targetYear ?? articleYear,
      deliveryStage: stage,
      sourceConfidence: confidence,
      flags: Array.from(new Set(flags)),
      evidence
    });
  }

  if (claims.length === 0) {
    claims.push({
      capacityValue: null,
      capacityUnit: 'unknown',
      capacityGw: null,
      capacityType: 'unknown',
      region: region.region,
      country: region.country,
      announcementYear: articleYear,
      targetYear: options.targetYear ?? articleYear,
      deliveryStage: stage,
      sourceConfidence: confidence,
      flags: ['no_capacity_claim_detected', '?'],
      evidence: text.slice(0, 320)
    });
  }

  return claims;
}
