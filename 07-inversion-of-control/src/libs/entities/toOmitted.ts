import { type BaseEntity } from './BaseEntity';
import { type Omitted } from './Omitted';

export function toOmitted<T extends Partial<BaseEntity>>(entity: T): Omitted<T> {
  const { id, version, createdAt, updatedAt, deletedAt, ...omitted } = entity;

  return omitted;
}
