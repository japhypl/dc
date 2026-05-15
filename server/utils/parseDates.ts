export function parseFirstYear(text: string): number | null {
  const match = text.match(/\b(202[3-9]|203[0-5])\b/);
  return match ? Number(match[1]) : null;
}
