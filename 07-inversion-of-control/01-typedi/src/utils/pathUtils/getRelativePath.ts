import { StringConstants } from '@src/constants';

export function getRelativePath(path: string): string {
  return path.replace(process.cwd(), StringConstants.EMPTY);
}
