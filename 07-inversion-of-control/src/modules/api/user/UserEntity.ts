import { BaseEntity } from '@src/entities';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column({ unique: true })
  public name: string;

  @Column({ unique: true })
  public email: string;
}
