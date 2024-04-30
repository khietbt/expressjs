import { getAbsolutePath } from './getAbsolutePath';

export function getAbsolutePaths(relativePaths: string[]): string[] {
  return relativePaths.map((p) => getAbsolutePath(p));
}
