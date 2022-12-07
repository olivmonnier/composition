/**
 * @description
 * can be used to check whether a date is before another date.
 * @example
 * isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
 */
export function isBeforeDate(dateA: Date, dateB: Date): Boolean {
  return dateA < dateB;
}
