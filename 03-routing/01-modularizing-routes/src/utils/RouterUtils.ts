import { StringConstants } from '@src/constants';
import { Glob } from 'glob';

import { PathUtils } from './PathUtils';

export class RouterUtils {
  public static loadRouters(routePrefix: string, routerDir: string): any {
    const baseDir: string = PathUtils.getAbsolutePath(routerDir);
    const pattern: string = `${baseDir}/**/*`;
    const glob = new Glob(pattern, {});

    const routers: Record<string, any> = {};

    for (const file of glob) {
      /* eslint @typescript-eslint/no-var-requires: "off" */
      const { path, router } = require(file).default;

      const k: string = PathUtils.getDirPath(file).replace(baseDir, StringConstants.EMPTY);

      routers[PathUtils.join(routePrefix, k, path)] = router;
    }

    return routers;
  }
}
