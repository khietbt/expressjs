import { AvengersService, SuperHeroService } from '@src/services';
import { ConversionUtils } from '@src/utils';
import { Request, Response } from 'express';

const superHeroService: SuperHeroService = new AvengersService();

export const superHeroController = {
  getAll: async (_req: Request, res: Response): Promise<any> => {
    res.json(await superHeroService.getAll());
    res.status(200);
  },

  getById: async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;

    res.json(await superHeroService.getById(ConversionUtils.toInteger(id)));
    res.status(200);
  }
};
