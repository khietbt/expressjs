import { deepEquals } from '@mfederczuk/deeptools';
import { InvalidParameterException } from '../exceptions';
import { isNullOrUndefined } from '../utils';
import { type Primitive } from './Primitive';
import { type Composite } from './Composite';

export class ValueObject<T extends Primitive | Composite> {
  public constructor(public value: T) {
    if (isNullOrUndefined(value)) {
      throw new InvalidParameterException(`Value must be not null or undefined`);
    }
  }

  public toString(): string {
    return JSON.stringify(this.value);
  }

  public equals(other: ValueObject<T>): boolean {
    return this.constructor.name === other.constructor.name && deepEquals(this, other);
  }
}
