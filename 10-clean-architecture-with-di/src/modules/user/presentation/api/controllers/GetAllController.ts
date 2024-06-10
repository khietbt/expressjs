import { Controller } from '@src/shared/presentation';
import { type Request, type Response } from 'express';
import { delay, inject, injectable } from 'tsyringe';
import { GetAllUseCase } from '../../../application';

@injectable()
export class GetAllController extends Controller {
  public constructor(@inject(delay(() => GetAllUseCase)) private readonly getAllUseCase: GetAllUseCase) {
    super();
  }

  protected async executeInternal(_request: Request, response: Response): Promise<void> {
    this.ok(response, await this.getAllUseCase.execute());
  }
}
