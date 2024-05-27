import { Strings } from '@src/libs/constants';

export function getRelativePath(path: string): string {
  return path.replace(process.cwd(), Strings.EMPTY);
}
