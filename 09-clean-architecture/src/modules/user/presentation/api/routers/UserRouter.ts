import { Router, type Request, type Response } from 'express';
import { type GetAllController } from '../controllers';
import { type GetOneController } from '../controllers/GetOneController';

export class UserRouter {
  public constructor(
    private readonly getAllController: GetAllController,
    private readonly getOneController: GetOneController
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
