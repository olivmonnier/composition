/**
 * @description
 * can be used to toggle a class for an element.
 * @example
 * toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
 */
export function toggleClass(el: HTMLElement, className: string): void {
  el.classList.toggle(className);
}
