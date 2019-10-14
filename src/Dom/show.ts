/**
 * @description
 * can be used to show all the elements specified.
 * @example
 * show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
 */
export function show(...el: Array<HTMLElement>): void {
  [...el].forEach(e => (e.style.display = ""));
}
