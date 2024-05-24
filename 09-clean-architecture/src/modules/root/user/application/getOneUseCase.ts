import { GetOneUseCase } from '@src/modules/user/application';
import { userRepository } from '../infrastructure';

export const getOneUseCase: GetOneUseCase = new GetOneUseCase(userRepository);
