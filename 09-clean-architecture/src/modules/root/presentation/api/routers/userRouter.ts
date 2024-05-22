import { UserRouter } from '@src/modules/user/presentation/api/routers';
import { getAllController } from '../controllers/user';

export const userRouter = new UserRouter(getAllController);
