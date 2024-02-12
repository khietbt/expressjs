import * as path from 'path';

export class PathUtils {
  public static getAbsolutePath = (relativePath: string): string => path.join(process.cwd(), relativePath);

  public static getAbsolutePaths = (relativePaths: string[]): string[] =>
    relativePaths.map((p) => this.getAbsolutePath(p));

  public static join = (...args: string[]): string => path.join(...args);

  public static getDirPath = (filepath: string): string => path.dirname(filepath);
}
