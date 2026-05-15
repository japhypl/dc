import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import * as XLSX from 'xlsx';

const sourcePath = path.join(process.cwd(), 'data/raw/central-europe/PMR_Deutsche_Telekom_2025_KPIs_forecast_dataset_FINAL20251029.xlsx');
const outputPath = path.join(process.cwd(), 'data/processed/central-europe-capacity.from-script.json');

const workbook = XLSX.read(readFileSync(sourcePath), { type: 'buffer' });
const countries = ['Poland', 'Austria', 'Greece', 'Czech Republic', 'Hungary', 'Slovakia', 'Croatia'];
const years = ['2025e', '2026f', '2027f', '2028f', '2029f', '2030f'];

function rowValues(sheetName: string, rowIndexOneBased: number) {
  const sheet = workbook.Sheets[sheetName];
  if (!sheet) throw new Error(`Missing sheet ${sheetName}`);
  const result: Record<string, number | null> = {};
  years.forEach((year, index) => {
    const col = 9 + index;
    const cell = sheet[XLSX.utils.encode_cell({ r: rowIndexOneBased - 1, c: col })];
    result[year] = typeof cell?.v === 'number' ? cell.v / 1000 : null;
  });
  return result;
}

const output = countries.map((country) => ({
  country,
  powerGw: rowValues(country, country === 'Greece' ? 145 : 141),
  highPowerGw: rowValues(country, country === 'Greece' ? 147 : 141)
}));

writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`Wrote ${outputPath}`);
