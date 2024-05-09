import { BaseModel } from '@topdir/src/libs';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UserModel extends BaseModel {
  @Column()
  public name: string;

  @Column()
  public email: string;
}
