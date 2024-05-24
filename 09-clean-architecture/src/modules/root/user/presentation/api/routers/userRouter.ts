import { UserRouter } from '@src/modules/user/presentation';
import { getAllController, getOneController } from '../controllers';

export const userRouter: UserRouter = new UserRouter(getAllController, getOneController);
