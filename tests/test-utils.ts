import fs from 'node:fs';
import path from 'node:path';

export function fsExists(relativePath: string): boolean {
  const fullPath = path.resolve(process.cwd(), relativePath);
  return fs.existsSync(fullPath);
}
