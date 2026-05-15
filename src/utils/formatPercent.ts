export function formatPercent(value: number | null | undefined): string {
  if (value === null || value === undefined || Number.isNaN(value)) return 'n/a';
  return `${Math.round(value * 100)}%`;
}
