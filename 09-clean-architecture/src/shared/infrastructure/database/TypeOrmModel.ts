import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class TypeOrmModel {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  // @VersionColumn()
  // public version: number;
  //
  // @CreateDateColumn()
  // public createdAt: Date;
  //
  // @UpdateDateColumn()
  // public updatedAt: Date;
  //
  // @DeleteDateColumn()
  // public deletedAt: Date;

  public toString(): string {
    return JSON.stringify(this);
  }
}
