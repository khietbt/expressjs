import { v4, validate } from 'uuid';
import { StringValueObject } from './StringValueObject';
import { isNullOrUndefined } from '@src/libs/utils';
import { InvalidParameterException } from '@src/libs/exceptions';

export class UuidValueObject extends StringValueObject {
  public constructor(value: string) {
    super(value);

    this.ensureValueIsValid();
  }

  public static random(): UuidValueObject {
    return new UuidValueObject(v4());
  }

  private ensureValueIsValid(): void {
    if (isNullOrUndefined(this.value)) {
      return;
    }

    if (!validate(this.value)) {
      throw new InvalidParameterException(
        `<${this.constructor.name}> does not allow the value <${this.value}>`,
        this.value
      );
    }
  }
}
