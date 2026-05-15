import { describe, expect, it } from 'vitest';
import { facilityPowerToItLoadGw, mwToGw } from '../../src/model/capacityNormalization';

describe('capacity normalization', () => {
  it('converts MW to GW', () => {
    expect(mwToGw(1000)).toBe(1);
  });

  it('converts facility power to IT load using PUE', () => {
    expect(facilityPowerToItLoadGw(1.35, 1.35)).toBe(1);
  });
});
