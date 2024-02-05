import Path from 'path';

export class PathUtils {
  public static getAbsolutePath = (relativePath: string): string => Path.join(process.cwd(), relativePath);

  public static getAbsolutePaths = (relativePaths: string[]): string[] =>
    relativePaths.map((p) => this.getAbsolutePath(p));
}
