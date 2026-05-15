export function mwToGw(valueMw: number): number {
  return valueMw / 1000;
}

export function facilityPowerToItLoadGw(facilityPowerGw: number, pue: number): number {
  if (pue <= 0) throw new Error('PUE must be greater than zero');
  return facilityPowerGw / pue;
}

export function roundGw(value: number | null, decimals = 3): number | null {
  if (value === null || !Number.isFinite(value)) return null;
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
