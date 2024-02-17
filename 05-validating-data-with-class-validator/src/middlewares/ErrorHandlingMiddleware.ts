import { NotFoundException } from '@src/exceptions';
import { Log, Logger } from '@src/loggers';
import { BadRequestError, ExpressErrorMiddlewareInterface, Middleware } from 'routing-controllers';
import { Service } from 'typedi';

@Middleware({ type: 'after' })
@Service()
export class ErrorHandlingMiddleware implements ExpressErrorMiddlewareInterface {
  private log: Logger = Log.getLogger(__filename);

  error(error: any, _request: any, response: any, next: (err?: any) => any): void {
    if (error instanceof NotFoundException) {
      response.status(404).json({ message: error.message });
    } else if (error instanceof BadRequestError) {
      response.status(400).json({
        error
      });
    }

    this.log.error(error.stack);

    next(error);
  }
}
