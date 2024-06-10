import { TypeOrmModel } from '@src/shared/infrastructure';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UserModel extends TypeOrmModel {
  @Column()
  name: string;

  @Column()
  email: string;
}
