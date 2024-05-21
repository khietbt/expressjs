import { Controller } from '@src/shared/presentation';
import { type GetAllUseCase } from '../../../application';
import { type Request, type Response } from 'express';

export class GetAllController extends Controller {
  public constructor(public readonly getAllUseCase: GetAllUseCase) {
    super();
  }

  protected async executeInternal(_req: Request, res: Response): Promise<void> {
    const responses = await this.getAllUseCase.execute();

    this.ok(res, responses);
  }
}
