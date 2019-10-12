/**
 * @description
 * can be used to check whether a date is after another date.
 * @example
 * isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
 */
export function isAfterDate(dateA: Date, dateB: Date): Boolean {
  return dateA > dateB;
}
