/**
 * @description
 * checks whether the parent element contains the child.
 * @example
 * elementContains(document.querySelector('head'), document.querySelector('title')); // true
 * elementContains(document.querySelector('body'), document.querySelector('body')); // false
 */
export function elementContains(
  parent: HTMLElement,
  child: HTMLElement
): Boolean {
  return parent !== child && parent.contains(child);
}
