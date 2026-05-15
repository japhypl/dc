export function formatGw(value: number | null | undefined): string {
  if (value === null || value === undefined || Number.isNaN(value)) return 'n/a';
  return `${value.toFixed(3)} GW`;
}
