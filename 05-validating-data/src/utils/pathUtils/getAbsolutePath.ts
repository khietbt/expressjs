import * as path from 'path';

export function getAbsolutePath(relativePath: string): string {
  return path.join(process.cwd(), relativePath);
}
