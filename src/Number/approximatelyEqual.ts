/**
 * @description
 * checks whether two numbers are approximately equal to each other, with a small difference.
 * @example
 * approximatelyEqual(Math.PI / 2.0, 1.5708); // true
 */
export function approximatelyEqual(
  v1: number,
  v2: number,
  epsilon: number = 0.001
): Boolean {
  return Math.abs(v1 - v2) < epsilon;
}
