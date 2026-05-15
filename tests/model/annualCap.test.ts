import { describe, expect, it } from 'vitest';
import { applyAnnualCap } from '../../src/model/annualCap';

describe('annual cap', () => {
  it('caps values when enabled', () => {
    expect(applyAnnualCap(2, 1.5, true)).toBe(1.5);
  });

  it('passes values through when disabled', () => {
    expect(applyAnnualCap(2, 1.5, false)).toBe(2);
  });
});
