const countryRegionMap: Array<{ pattern: RegExp; country: string; region: string }> = [
  { pattern: /united states|usa|u\.s\.|us\b/i, country: 'United States', region: 'US' },
  { pattern: /germany|frankfurt|rhein-main|berlin|munich|hamburg/i, country: 'Germany', region: 'Germany' },
  { pattern: /poland|warsaw|krakow/i, country: 'Poland', region: 'Central Europe' },
  { pattern: /austria|vienna/i, country: 'Austria', region: 'Central Europe' },
  { pattern: /greece|athens/i, country: 'Greece', region: 'Central Europe' },
  { pattern: /czech|prague/i, country: 'Czech Republic', region: 'Central Europe' },
  { pattern: /hungary|budapest/i, country: 'Hungary', region: 'Central Europe' },
  { pattern: /slovakia|bratislava/i, country: 'Slovakia', region: 'Central Europe' },
  { pattern: /croatia|zagreb/i, country: 'Croatia', region: 'Central Europe' },
  { pattern: /united kingdom|uk\b|london|ireland|dublin|france|paris|netherlands|amsterdam|belgium|brussels|luxembourg|switzerland|zurich/i, country: 'Multiple or detected Western Europe country', region: 'Western Europe' }
];

export function parseRegions(text: string, regionHint?: string): { country: string | null; region: string | null } {
  if (regionHint) return { country: null, region: regionHint };
  const found = countryRegionMap.find((entry) => entry.pattern.test(text));
  return { country: found?.country ?? null, region: found?.region ?? null };
}
