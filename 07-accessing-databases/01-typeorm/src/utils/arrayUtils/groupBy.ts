/**
 * Groups an array of elements by a specified key or a mapping function.
 *
 * @param {T[]} original - The array of elements to be grouped.
 * @param {((t: T) => PropertyKey) | keyof T} mapper - The key or mapping function used to group the elements.
 *   If a key is provided, the elements will be grouped by the value of that key.
 *   If a mapping function is provided, the elements will be grouped based on the return value of the function.
 * @return {Record<PropertyKey, T[]>} - An object where the keys are the group keys and the values are arrays of elements.
 */
export function groupBy<T>(original: T[], mapper: ((t: T) => PropertyKey) | keyof T): Record<PropertyKey, T[]> {
  const keyGenerator = (x: T): PropertyKey => (typeof mapper === 'function' ? mapper(x) : (x[mapper] as PropertyKey));

  return original.reduce<Record<PropertyKey, T[]>>((accumulator, currentValue) => {
    const groupKey = keyGenerator(currentValue);

    (accumulator[groupKey] = accumulator[groupKey] ?? []).push(currentValue);

    return accumulator;
  }, {});
}
