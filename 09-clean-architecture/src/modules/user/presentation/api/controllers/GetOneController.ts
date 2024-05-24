import { type GetOneUseCase } from '@src/modules/user/application';
import { Controller } from '@src/shared/presentation';
import { type Request, type Response } from 'express';

export class GetOneController extends Controller {
  public constructor(private readonly getOneUseCase: GetOneUseCase) {
    super();
  }

  protected async executeInternal(req: Request, res: Response): Promise<void> {
    const id = req.params.id;

    if (id === undefined) {
      this.fail(res, `Path variable 'id' missing`);
      return;
    }

    try {
      const response = await this.getOneUseCase.execute({ id });

      this.ok(res, response);
    } catch (e) {
      this.notFound(res, (e as Error).message);
    }
  }
}
