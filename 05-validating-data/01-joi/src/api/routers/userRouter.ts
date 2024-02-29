// import { isNullOrUndefined } from '@src/utils';
import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { type UserCreationRequest } from '../requests/UserCreationRequest';
import { userCreationSchema } from '../schemas/userCreationSchema';
import { isNullOrUndefined } from '@src/utils';
import { BadRequestException } from '@src/exceptions/BadRequestException';
import { StringConstants } from '@src/constants';

const userController = new UserController();
const userRouter = Router();

userRouter.get('/', (_req, response, _next) => {
  response.json(userController.getAll());
  response.status(200);
});

userRouter.post('/', (request, response, _next) => {
  const validationResult = userCreationSchema.validate(request.body);

  if (!isNullOrUndefined(validationResult.error)) {
    throw new BadRequestException(validationResult.error?.message ?? StringConstants.EMPTY);
  }

  response.json(userController.create(validationResult.value as UserCreationRequest));
  response.status(201);
});

export { userRouter };
