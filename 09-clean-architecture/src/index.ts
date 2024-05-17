import 'reflect-metadata';

import { NumberValueObject } from './libs/types';
import { DateValueObject } from './shared/domain';

const x = new NumberValueObject(5);

console.log(x.toString());

console.log(new DateValueObject(new Date(Date.now())));
