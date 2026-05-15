export function applyAnnualCap(value: number | null, capGw: number | null, enabled: boolean): number | null {
  if (value === null) return null;
  if (!enabled || capGw === null) return value;
  return Math.min(value, capGw);
}
