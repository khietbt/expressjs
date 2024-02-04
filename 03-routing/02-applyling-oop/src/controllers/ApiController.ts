import { Request, Response, Router } from 'express';

export interface ApiController {
  get path(): string;

  get router(): Router;

  getAll(request: Request, response: Response): Promise<any>;

  getById(request: Request, response: Response): Promise<any>;
}
