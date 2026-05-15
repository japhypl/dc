import { promises as fs } from 'node:fs';
import path from 'node:path';

export function projectPath(relativePath: string): string {
  return path.join(process.cwd(), relativePath);
}

export async function readJson<T = unknown>(relativePath: string): Promise<T> {
  const file = await fs.readFile(projectPath(relativePath), 'utf-8');
  return JSON.parse(file) as T;
}

export async function readText(relativePath: string): Promise<string> {
  return fs.readFile(projectPath(relativePath), 'utf-8');
}
