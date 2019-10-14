/**
 * @description
 * can be used to get a string representation of tomorrow’s date.
 * @example
 * tomorrow(); // 2019-09-08 (if current date is 2018-09-08)
 */
export function tomorrow(): string {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split("T")[0];
}
