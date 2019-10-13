/**
 * @description
 * can be used to check whether two dates are equal.
 * @example
 * isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
 */
export function isSameDate(dateA: Date, dateB: Date): Boolean {
  return dateA.toISOString() === dateB.toISOString();
}
