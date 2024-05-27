import { Controller } from '@src/shared/presentation';
import { Router, type Request, type Response } from 'express';
import { delay, inject, injectable } from 'tsyringe';
import { GetAllController } from '../controllers';
import { GetOneController } from '../controllers/GetOneController';

@injectable()
export class UserRouter {
  public constructor(
    @inject(delay(() => GetAllController)) private readonly getAllController: Controller,
    @inject(delay(() => GetOneController)) private readonly getOneController: Controller
  ) {}

  public toRouter(): Router {
    const router = Router();

    router.get('/', (req: Request, res: Response): void => {
      this.getAllController.execute(req, res).catch((_e) => {});
    });

    router.get('/:id', (req: Request, res: Response): void => {
      this.getOneController.execute(req, res).catch((_e) => {});
    });

    return router;
  }
}
