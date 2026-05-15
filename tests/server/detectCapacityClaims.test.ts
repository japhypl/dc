import { describe, expect, it } from 'vitest';
import { detectCapacityClaims } from '../../server/services/detectCapacityClaims';

describe('detectCapacityClaims', () => {
  it('detects GW claims', () => {
    const claims = detectCapacityClaims('The company announced a 1 GW data center campus in Germany for 2030.');
    expect(claims[0].capacityGw).toBe(1);
    expect(claims[0].region).toBe('Germany');
  });
});
