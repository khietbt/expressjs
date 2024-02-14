import { StringConstants } from '@src/constants';
import { Router } from 'express';
import { Glob } from 'glob';

import { PathUtils } from './PathUtils';

export class RouterUtils {
  public static loadRouters(routePrefix: string, routerDir: string): Record<string, Router> {
    const baseDir: string = PathUtils.getAbsolutePath(routerDir);
    const pattern: string = `${baseDir}/**/*`;
    const glob = new Glob(pattern, {
      ignore: {
        ignored: (p) => p.isDirectory()
      }
    });

    const routers: Record<string, Router> = {};

    for (const file of glob) {
      /* eslint @typescript-eslint/no-var-requires: "off" */
      const { path, router } = require(file).default;

      const k: string = PathUtils.dirname(file).replace(baseDir, StringConstants.EMPTY);

      routers[PathUtils.join(routePrefix, k, path)] = router;
    }

    return routers;
  }
}
