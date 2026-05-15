import { promises as fs } from 'node:fs';
import path from 'node:path';
import { readText } from './dataRepository';

const sourceDir = 'docs/sources';

export async function listSourceDocs() {
  const dir = path.join(process.cwd(), sourceDir);
  const files = await fs.readdir(dir);
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      id: file.replace(/\.md$/, ''),
      file: `${sourceDir}/${file}`,
      title: file.replace(/-/g, ' ').replace(/\.md$/, '')
    }));
}

export async function readSourceDoc(id: string) {
  if (!/^[a-z0-9-]+$/.test(id)) {
    throw new Error('Invalid source id');
  }
  const file = `${sourceDir}/${id}.md`;
  return { id, file, markdown: await readText(file) };
}
