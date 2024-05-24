import { HttpStatuses } from '@src/libs/constants';
import { NotFoundException } from '@src/libs/exceptions';
import type * as express from 'express';

export abstract class Controller {
  protected abstract executeInternal(req: express.Request, res: express.Response): Promise<void>;

  public async execute(req: express.Request, res: express.Response): Promise<void> {
    try {
      await this.executeInternal(req, res);
    } catch (e: unknown) {
      if (e instanceof NotFoundException) {
        this.notFound(res, e);
        return;
      }

      this.fail(res, e);
    }
  }

  public static jsonResponse<T>(response: express.Response, code: number, data?: T): void {
    response.status(code).json({ data });
  }

  public ok<T>(response: express.Response, dto?: T): void {
    Controller.jsonResponse(response, HttpStatuses.OK, dto);
  }

  // public created(res: express.Response) {
  //   return res.sendStatus(201);
  // }
  //
  // public clientError(res: express.Response, message?: string) {
  //   return Controller.jsonResponse(res, 400, message || 'Unauthorized');
  // }
  //
  // public unauthorized(res: express.Response, message?: string) {
  //   return Controller.jsonResponse(res, 401, message || 'Unauthorized');
  // }
  //
  // public paymentRequired(res: express.Response, message?: string) {
  //   return Controller.jsonResponse(res, 402, message || 'Payment required');
  // }
  //
  // public forbidden(res: express.Response, message?: string) {
  //   return Controller.jsonResponse(res, 403, message || 'Forbidden');
  // }
  //
  public notFound(res: express.Response, data?: unknown): void {
    Controller.jsonResponse(res, HttpStatuses.NOT_FOUND, data);
  }
  //
  // public conflict(res: express.Response, message?: string) {
  //   return Controller.jsonResponse(res, 409, message || 'Conflict');
  // }
  //
  // public tooMany(res: express.Response, message?: string) {
  //   return Controller.jsonResponse(res, 429, message || 'Too many requests');
  // }
  //
  // public todo(res: express.Response) {
  //   return Controller.jsonResponse(res, 400, 'TODO');
  // }

  public fail(res: express.Response, data?: unknown): void {
    Controller.jsonResponse(res, HttpStatuses.INTERNAL_SERVER_ERROR, data);
  }
}
