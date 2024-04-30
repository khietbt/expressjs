import { type BaseEntity } from './BaseEntity';

export type Omitted<T extends Partial<BaseEntity>> = Omit<
  T,
  'id' | 'version' | 'createdAt' | 'updatedAt' | 'deletedAt'
>;
