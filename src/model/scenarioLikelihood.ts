export function normalizeLikelihood(input: { low: number; mid: number; high: number }) {
  const low = Math.max(0.01, input.low);
  const mid = Math.max(0.01, input.mid);
  const high = Math.max(0.01, input.high);
  const total = low + mid + high;
  return {
    low: low / total,
    mid: mid / total,
    high: high / total
  };
}
