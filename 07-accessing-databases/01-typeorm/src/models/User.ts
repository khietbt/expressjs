import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  public id: number | undefined;

  @Column()
  public name: string | undefined;

  @Column()
  public email: string | undefined;
}
