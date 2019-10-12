/**
 * @description
 * can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node).
 * @example
 * isBrowser(); // true (browser)
 * isBrowser(); // false (Node)
 */
export function isBrowser(): Boolean {
  return ![typeof window, typeof document].includes("undefined");
}
