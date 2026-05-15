import { readdirSync, writeFileSync } from 'node:fs';

const sources = readdirSync('docs/sources')
  .filter((file) => file.endsWith('.md'))
  .map((file) => ({ id: file.replace(/\.md$/, ''), file: `docs/sources/${file}` }));

writeFileSync('docs/sources/index.json', JSON.stringify({ sources }, null, 2));
console.log('Wrote docs/sources/index.json');
