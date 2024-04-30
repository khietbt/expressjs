import { StringConstants } from '@src/libs/constants';

export function getRelativePath(path: string): string {
  return path.replace(process.cwd(), StringConstants.EMPTY);
}
