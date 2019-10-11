/**
 * @description
 * checks whether an element has a particular class.
 * @example
 * hasClass(document.querySelector('p.special'), 'special'); // true
 */
export function hasClass(el: HTMLElement, className: string) {
  return el.classList.contains(className);
}
