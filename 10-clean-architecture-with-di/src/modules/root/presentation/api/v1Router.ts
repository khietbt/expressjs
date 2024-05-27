import { Router } from 'express';
import { userRouter } from '../../user/presentation/api/routers/userRouter';

const v1Router = Router();

v1Router.use('/users', userRouter.toRouter());

export { v1Router };
