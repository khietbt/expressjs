import { Router, type Request, type Response } from 'express';
import { type GetAllController } from '../controllers';

export class UserRouter {
  public constructor(private readonly getAllController: GetAllController) {}

  public toRouter(): Router {
    const router = Router();

    router.get('/', (req: Request, res: Response): void => {
      this.getAllController.execute(req, res).catch((_e) => {});
    });

    return router;
  }
}
