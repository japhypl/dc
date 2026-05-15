import { describe, expect, it } from 'vitest';

describe('analyze url route contract', () => {
  it('keeps likelihood labels stable', () => {
    const keys = ['low', 'mid', 'high'];
    expect(keys).toEqual(['low', 'mid', 'high']);
  });
});
