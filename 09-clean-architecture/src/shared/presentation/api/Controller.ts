import type * as express from 'express';

export abstract class Controller {
  protected abstract executeInternal(req: express.Request, res: express.Response): Promise<void>;

  public async execute(req: express.Request, res: express.Response): Promise<void> {
    try {
      await this.executeInternal(req, res);
    } catch (err) {
      console.log(`[Controller]: Uncaught controller error`);
      console.log(err);
      this.fail(res, 'An unexpected error occurred');
    }
  }

  // public static jsonResponse(res: express.Response, code: number, message: string) {
  //   return res.status(code).json({ message });
  // }

  public ok<T>(res: express.Response, dto?: T): void {
    if (dto !== null && dto !== undefined) {
      res.type('application/json');
      res.status(200).json(dto);
      return;
    }

    res.sendStatus(200);
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
  // public notFound(res: express.Response, message?: string) {
  //   return Controller.jsonResponse(res, 404, message || 'Not found');
  // }
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

  public fail(res: express.Response, error: Error | string): void {
    res.status(500).json({
      message: error.toString()
    });
  }
}
