import { validate } from 'uuid';
import { StringValueObject } from './StringValueObject';
import { type Uuid } from './Uuid';
import { InvalidParameterException } from '../exceptions';

export class UuidValueObject extends StringValueObject {
  public constructor(value: Uuid) {
    super(value);

    if (!validate(value)) {
      throw new InvalidParameterException(`'${value}' is not a valid uuid`);
    }
  }
}
