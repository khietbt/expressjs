import { type GetOneUseCase } from '@src/modules/user/application';
import { Controller } from '@src/shared/presentation';
import { type Request, type Response } from 'express';

export class GetOneController extends Controller {
  public constructor(private readonly getOneUseCase: GetOneUseCase) {
    super();
  }

  protected async executeInternal(request: Request, response: Response): Promise<void> {
    const id = request.params.id;

    if (id === undefined) {
      this.fail(response, `Path variable 'id' missing`);
      return;
    }

    this.ok(response, await this.getOneUseCase.execute({ id }));
  }
}
