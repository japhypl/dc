export function normalizeCapacity(value: number, unit: 'MW' | 'GW'): number {
  if (unit === 'GW') return value;
  return value / 1000;
}
