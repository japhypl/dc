import { readJson } from './dataRepository';
import type { DetectedCapacityClaim } from './detectCapacityClaims';

interface RuleConfig {
  baseLikelihood: Record<'low' | 'mid' | 'high', number>;
  rules: Array<{ id: string; patterns: string[]; effects: Record<'low' | 'mid' | 'high', number>; comment: string }>;
}

function normalize(scores: Record<'low' | 'mid' | 'high', number>) {
  const clipped = {
    low: Math.max(0.01, scores.low),
    mid: Math.max(0.01, scores.mid),
    high: Math.max(0.01, scores.high)
  };
  const sum = clipped.low + clipped.mid + clipped.high;
  return {
    low: Number((clipped.low / sum).toFixed(4)),
    mid: Number((clipped.mid / sum).toFixed(4)),
    high: Number((clipped.high / sum).toFixed(4))
  };
}

export async function scoreScenarioLikelihood(
  text: string,
  claims: DetectedCapacityClaim[],
  input: { url: string; targetYear?: number; regionHint?: string }
) {
  const config = await readJson<RuleConfig>('data/config/url-scoring-rules.json');
  const scores = { ...config.baseLikelihood };
  const lower = text.toLowerCase();
  const explanation: string[] = [];
  const flags = new Set<string>();

  for (const rule of config.rules) {
    const matched = rule.patterns.some((pattern) => lower.includes(pattern.toLowerCase()));
    if (!matched) continue;
    scores.low += rule.effects.low;
    scores.mid += rule.effects.mid;
    scores.high += rule.effects.high;
    explanation.push(rule.comment);
  }

  for (const claim of claims) {
    for (const flag of claim.flags) flags.add(flag);
    if (claim.capacityType === 'unknown') {
      scores.low += 0.08;
      scores.high -= 0.04;
      explanation.push('Capacity type is unclear, so the downside case receives more weight.');
    }
    if (claim.deliveryStage === 'commissioned' || claim.deliveryStage === 'operational') {
      scores.high += 0.08;
      scores.low -= 0.08;
      explanation.push('The source includes live, operational, or commissioned language.');
    }
    if (claim.deliveryStage === 'announced' || claim.deliveryStage === 'planned') {
      scores.low += 0.08;
      scores.high -= 0.05;
      explanation.push('The source describes future capacity rather than proven available capacity.');
    }
    if (claim.capacityGw !== null && claim.capacityGw >= 1) {
      flags.add('large_capacity_claim_requires_phasing_review');
    }
  }

  const scenarioLikelihood = normalize(scores);
  const first = claims[0];

  return {
    scenarioLikelihood,
    explanation: Array.from(new Set(explanation)).slice(0, 8),
    flags: Array.from(flags),
    suggestedInput: {
      region: input.regionHint ?? first?.region ?? null,
      yearX: first?.announcementYear ?? null,
      yearY: input.targetYear ?? first?.targetYear ?? null,
      capacityGw: first?.capacityGw ?? null,
      capacityType: first?.capacityType ?? 'unknown',
      confidence: first?.sourceConfidence ?? 'low'
    }
  };
}
