import { Router } from 'express';
import { userRouter } from './routers';

const v1Router = Router();

v1Router.use('/users', userRouter.toRouter());

export { v1Router };
