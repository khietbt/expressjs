import { superHeroController } from '@src/controllers';
import { Router } from 'express';

const superHeroRouter: Router = Router();

superHeroRouter.get('/', superHeroController.getAll);
superHeroRouter.get('/:id', superHeroController.getById);

export { superHeroRouter };
