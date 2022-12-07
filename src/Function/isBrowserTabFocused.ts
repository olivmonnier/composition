/**
 * @description
 * can be used to determine whether the browser tab is focused.
 * @example
 * isBrowserTabFocused(); // true
 */
export function isBrowserTabFocused(): Boolean {
  return !document.hidden;
}
