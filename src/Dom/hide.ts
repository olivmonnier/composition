/**
 * @description
 * can be used to hide all elements specified.
 * @example
 * hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
 */
export function hide(...el: Array<HTMLElement>): void {
  [...el].forEach(e => (e.style.display = "none"));
}
