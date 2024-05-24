import { GetAllController } from '@src/modules/user/presentation';
import { getAllUseCase } from '../../../application';

export const getAllController: GetAllController = new GetAllController(getAllUseCase);
