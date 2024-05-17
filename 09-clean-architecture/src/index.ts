import 'reflect-metadata';

import { NumberValueObject, StringValueObject } from './shared/domain/value-objects';

const x = new NumberValueObject(5);

console.log(x.toString());

console.log(new StringValueObject('abc'));
