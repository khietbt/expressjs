import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

class Application {
  public application: Express;
  public port: number;

  public constructor(port: number) {
    this.application = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.application.get('/', (request: Request, response: Response) => {
      response.send('Hello world!');
    });

    this.application.post('/', (request: Request, response: Response) => {
      response.send({
        hostname: request.hostname,
        path: request.path,
        method: request.method,
        body: request.body
      });
    });
  }

  public listen() {
    this.application.listen(this.port, () => {});
  }

  private initializeMiddlewares() {
    this.application.use(bodyParser.json());
  }
}

export default Application;
