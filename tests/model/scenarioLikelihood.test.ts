import { describe, expect, it } from 'vitest';
import { normalizeLikelihood } from '../../src/model/scenarioLikelihood';

describe('scenario likelihood', () => {
  it('normalizes scores to one', () => {
    const result = normalizeLikelihood({ low: 2, mid: 1, high: 1 });
    expect(result.low + result.mid + result.high).toBeCloseTo(1);
  });
});
