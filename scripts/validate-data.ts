import { readFileSync } from 'node:fs';

const files = [
  'data/config/region-map.json',
  'data/config/assumptions.json',
  'data/config/scenario-parameters.json',
  'data/processed/central-europe-capacity.json',
  'data/processed/us-capacity.json',
  'data/processed/western-europe-capacity.json',
  'data/processed/germany-capacity.json'
];

for (const file of files) {
  JSON.parse(readFileSync(file, 'utf-8'));
  console.log(`valid ${file}`);
}
