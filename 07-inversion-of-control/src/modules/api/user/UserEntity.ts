import { BaseEntity } from '@src/libs/entities';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column()
  public name: string;

  @Column()
  public email: string;
}
