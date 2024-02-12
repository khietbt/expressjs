import { StringConstants } from '@src/constants';
import * as path from 'path';

export class LogUtils {
  public static parsePathToScope(filepath: string): string {
    if (filepath.indexOf(path.sep) >= 0) {
      filepath = filepath.replace(process.cwd(), StringConstants.EMPTY);
      filepath = filepath.replace(`${path.sep}src${path.sep}`, StringConstants.EMPTY);
      filepath = filepath.replace(`${path.sep}dist${path.sep}`, StringConstants.EMPTY);
      filepath = filepath.replace('.ts', StringConstants.EMPTY);
      filepath = filepath.replace('.js', StringConstants.EMPTY);
      filepath = filepath.replace(path.sep, StringConstants.COLON);
    }

    return filepath;
  }
}
