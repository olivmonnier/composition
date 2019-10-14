/**
 * @description
 * can be used to serialize a cookie name-value pair into a Set-Cookie header string.
 * @example
 * serializeCookie('foo', 'bar'); // 'foo=bar'
 */
export function serializeCookie(name: string, val: any): string {
  return `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
}
