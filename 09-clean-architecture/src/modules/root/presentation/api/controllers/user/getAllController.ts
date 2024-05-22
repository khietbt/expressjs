import { getAllUseCase } from '@src/modules/root/application/user';
import { GetAllController } from '@src/modules/user/presentation/api/controllers';

export const getAllController = new GetAllController(getAllUseCase);
