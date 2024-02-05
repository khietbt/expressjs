import { AvengerService, SuperHeroService } from '@src/services';
import { ConversionUtils } from '@src/utils';
import { Request, Response, Router } from 'express';

import { ApiController } from './ApiController';

export class SuperHeroController implements ApiController {
  private superHeroService: SuperHeroService = new AvengerService();

  public get path(): string {
    return '/api/super-heroes';
  }

  public get router(): Router {
    const router: Router = Router();

    router.get('/', this.getAll);
    router.get('/:id', this.getById);

    return router;
  }

  public getAll = async (_request: Request, response: Response): Promise<any> => {
    response.json(await this.superHeroService.getAll());
  };

  public getById = async (request: Request, response: Response): Promise<any> => {
    const id = request.params.id;
    const convertedId = ConversionUtils.toInteger(id);
    response.json(await this.superHeroService.getById(convertedId));
  };
}
