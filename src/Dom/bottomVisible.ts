/**
 * @description
 * checks whether the bottom of a page is visible.
 * @example
 * bottomVisible(); // true
 */
export function bottomVisible(): Boolean {
  return (
    document.documentElement.clientHeight + window.scrollY >=
    (document.documentElement.scrollHeight ||
      document.documentElement.clientHeight)
  );
}
