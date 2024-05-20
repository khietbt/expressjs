import { TypeOrmModel } from '@src/shared/infrastructure';
import { Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UserModel extends TypeOrmModel {
  name: string;

  email: string;
}
