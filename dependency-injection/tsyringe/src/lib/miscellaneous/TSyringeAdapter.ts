import { Action, ClassConstructor, IocAdapter } from 'routing-controllers';
import DependencyContainer from 'tsyringe/dist/typings/types/dependency-container';

export class TSyringeAdapter implements IocAdapter {
  constructor(private container: DependencyContainer) {}

  get<T>(someClass: ClassConstructor<T>, action?: Action): T {
    return this.container.resolve<T>(someClass);
  }
}
