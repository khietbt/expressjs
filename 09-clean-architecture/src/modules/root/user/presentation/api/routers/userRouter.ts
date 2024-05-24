import { UserRouter } from '@src/modules/user/presentation';
import { getAllController } from '../controllers';

export const userRouter: UserRouter = new UserRouter(getAllController);
