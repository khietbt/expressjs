import * as express from 'express';

export abstract class Controller {
  protected abstract executeInternal(req: express.Request, res: express.Response): Promise<void | any>;

  public async execute(req: express.Request, res: express.Response): Promise<void> {
    try {
      await this.executeInternal(req, res);
    } catch (err) {
      console.log(`[Controller]: Uncaught controller error`);
      console.log(err);
      this.fail(res, 'An unexpected error occurred');
    }
  }

  public static jsonResponse(res: express.Response, code: number, message: string) {
    return res.status(code).json({ message });
  }

  public ok<T>(res: express.Response, dto?: T) {
    if (!!dto) {
      res.type('application/json');
      return res.status(200).json(dto);
    } else {
      return res.sendStatus(200);
    }
  }

  public created(res: express.Response) {
    return res.sendStatus(201);
  }

  public clientError(res: express.Response, message?: string) {
    return Controller.jsonResponse(res, 400, message ? message : 'Unauthorized');
  }

  public unauthorized(res: express.Response, message?: string) {
    return Controller.jsonResponse(res, 401, message ? message : 'Unauthorized');
  }

  public paymentRequired(res: express.Response, message?: string) {
    return Controller.jsonResponse(res, 402, message ? message : 'Payment required');
  }

  public forbidden(res: express.Response, message?: string) {
    return Controller.jsonResponse(res, 403, message ? message : 'Forbidden');
  }

  public notFound(res: express.Response, message?: string) {
    return Controller.jsonResponse(res, 404, message ? message : 'Not found');
  }

  public conflict(res: express.Response, message?: string) {
    return Controller.jsonResponse(res, 409, message ? message : 'Conflict');
  }

  public tooMany(res: express.Response, message?: string) {
    return Controller.jsonResponse(res, 429, message ? message : 'Too many requests');
  }

  public todo(res: express.Response) {
    return Controller.jsonResponse(res, 400, 'TODO');
  }

  public fail(res: express.Response, error: Error | string) {
    console.log(error);
    return res.status(500).json({
      message: error.toString()
    });
  }
}
