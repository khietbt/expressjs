/**
 * Groups elements of an array by a key extracted from each element.
 *
 * @template T The type of the elements in the original array.
 * @template U The type of the elements in the grouped array. Defaults to T.
 * @param original The array of elements to group.
 * @param keyMapper A function that extracts the key from an element.
 * @param valueMapper A function that maps an element to the type of the grouped array. Defaults to the identity function.
 * @returns An object with the keys being the unique keys from the original array and the values being arrays of elements
 * that share that key.
 */
export function groupBy<T, U = T>(
  original: T[],
  keyMapper: (t: T) => PropertyKey,
  valueMapper: (t: T) => U = (t: T) => t as unknown as U
): Record<PropertyKey, U[]> {
  /**
   * Groups elements of an array into an object with keys corresponding to the result of the keyMapper
   * function and values being arrays of elements that share that key.
   *
   * @param accumulator The object that is being built up by this reduce function.
   * @param currentValue The current element being processed by the reduce function.
   * @returns The modified accumulator object.
   */
  return original.reduce<Record<PropertyKey, U[]>>(
    (accumulator: Record<PropertyKey, U[]>, currentValue: T): Record<PropertyKey, U[]> => {
      const key: PropertyKey = keyMapper(currentValue);
      const value: U = valueMapper(currentValue);

      // If the group for the current key does not exist, create it and add the first value to it.
      // Otherwise, add the value to the existing group.
      if (!(key in accumulator)) {
        // If the group does not exist, create it and add the first value to it.
        accumulator[key] = [value];
      } else {
        // If the group already exists, add the value to the existing group.
        accumulator[key].push(value);
      }

      return accumulator;
    },
    {}
  );
}
