import { Controller } from '@src/shared/presentation';
import { GetAllUseCase } from '../../../application';
import { Request, Response, response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export class GetAllController extends Controller {
  public constructor(public readonly getAllUseCase: GetAllUseCase) {
    super();
  }

  protected async executeInternal(
    _req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<any> {
    const responses = await this.getAllUseCase.execute();

    this.ok(res, responses);
  }
}
