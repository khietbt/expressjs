import { Router } from 'express';
import { GetAllController } from '../controllers/GetAllController';

export class UserRouter {
  public constructor(private readonly getAllController: GetAllController) {}

  public toRouter(): Router {
    const router = Router();

    router.get('/', (req, res) => this.getAllController.execute(req, res));

    return router;
  }
}

const userRouter = Router();

userRouter.get('/');

export { userRouter };
