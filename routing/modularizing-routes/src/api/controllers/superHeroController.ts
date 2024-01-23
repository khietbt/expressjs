import { SuperHeroService } from '@services/interfaces';
import { AvengersService } from '@src/api/services';
import { Request, Response } from 'express';

const superHeroService: SuperHeroService = new AvengersService();

export const superHeroController = {
  getAll: async (req: Request, res: Response): Promise<any> => {
    res.json(await superHeroService.getAll());
    res.status(200);
  },

  getById: async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;

    res.json(await superHeroService.getById(parseInt(id, 10)));
    res.status(200);
  }
};
