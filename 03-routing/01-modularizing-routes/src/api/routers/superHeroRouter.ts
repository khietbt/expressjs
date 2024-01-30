import { superHeroController } from '@controllers/superHeroController';
import { Router } from 'express';

const superHeroRouter: Router = Router();

superHeroRouter.get('/', superHeroController.getAll);
superHeroRouter.get('/:id', superHeroController.getById);

export { superHeroRouter };
