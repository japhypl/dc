export function deriveTimingFactor(delayMonths: number, baseFactor: number): number {
  if (delayMonths <= 0) return baseFactor;
  const penalty = Math.min(0.5, delayMonths / 120);
  return Math.max(0, baseFactor - penalty);
}
