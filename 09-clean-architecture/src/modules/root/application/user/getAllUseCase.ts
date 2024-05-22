import { GetAllUseCase } from '@src/modules/user/application';
import { userRepository } from '../../infrastructure';

export const getAllUseCase = new GetAllUseCase(userRepository);
