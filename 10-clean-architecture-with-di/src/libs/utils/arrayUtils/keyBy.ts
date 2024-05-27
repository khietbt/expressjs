/**
 * Transforms an array into an object based on a key extractor and a value mapper.
 *
 * @template T The type of the elements in the original array.
 * @template V The type of the values in the resulting object. Defaults to T.
 * @param source The array of elements to transform.
 * @param keyMapper A function that extracts the key from an element.
 * @param valueMapper A function that maps an element to the type of the object values. Defaults to identity function.
 * @returns An object with keys being the result of the keyMapper function and values being the result of the valueMapper
 * function.
 */
export function keyBy<T, V = T>(
  source: T[],
  keyMapper: (t: T) => PropertyKey,
  valueMapper: (t: T) => V = (t: T) => t as unknown as V
): Record<PropertyKey, V> {
  // Reduce the original array into an object.
  // The reduce function takes two parameters: the accumulator (an object) and the current value (an element from the array).
  // The initial value of the accumulator is an empty object.
  return source.reduce((accumulator, t) => {
    // Extract the key from the element and use it as the key in the resulting object.
    // The value is the result of applying the valueMapper function to the element.
    (accumulator as Record<PropertyKey, V>)[keyMapper(t)] = valueMapper(t);

    // Return the modified accumulator to be used in the next iteration.
    return accumulator;
  }, {});
}
