export function toBoolean(s: string | undefined): boolean {
  return s === 'true' || s === 'TRUE';
}
