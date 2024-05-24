import { GetOneController } from '@src/modules/user/presentation/api/controllers/GetOneController';
import { getOneUseCase } from '../../../application';

export const getOneController: GetOneController = new GetOneController(getOneUseCase);
