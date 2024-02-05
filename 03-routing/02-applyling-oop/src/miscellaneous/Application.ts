import { ApiController } from '@src/controllers';
import express from 'express';

export class Application {
  private readonly controllers: ApiController[];
  private readonly port: number;
  private application: express.Application;

  public constructor(controllers: ApiController[], port: number) {
    this.controllers = controllers;
    this.port = port;
    this.application = express();
  }

  private initializeRoutes() {
    this.controllers.forEach((c) => this.application.use(c.path, c.router));
  }

  public run() {
    this.initializeRoutes();

    this.application.listen(this.port, () => {
      console.log(`"Listening on the port ${this.port}"`);
    });
  }
}
