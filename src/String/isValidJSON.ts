/**
 * @description
 * can be used to check whether a string is a valid JSON.
 * @example
 * isValidJSON('{"name":"Adam","age":20}'); // true
 * isValidJSON('{"name":"Adam",age:"20"}'); // false
 * isValidJSON(null); // true
 */
export function isValidJSON(str: string): Boolean {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}
