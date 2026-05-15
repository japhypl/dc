import { readFileSync, writeFileSync } from 'node:fs';

const regionFiles = [
  'data/processed/us-capacity.json',
  'data/processed/western-europe-capacity.json',
  'data/processed/germany-capacity.json',
  'data/processed/central-europe-capacity.json'
];

const regions = regionFiles.map((file) => JSON.parse(readFileSync(file, 'utf-8')).regionSource);
writeFileSync('data/processed/all-regions-capacity.generated.json', JSON.stringify({ regions }, null, 2));
console.log('Wrote data/processed/all-regions-capacity.generated.json');
