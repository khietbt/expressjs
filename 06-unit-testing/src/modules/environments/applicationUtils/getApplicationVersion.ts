import * as _package from '@topdir/package.json';

export function getApplicationVersion(): string {
  return _package.version;
}
