/**
 * @description
 * can be used to set the value of a CSS rule for a particular element.
 * @example
 * setStyle(document.querySelector('p'), 'font-size', '20px'); // The first <p> element on the page will have a font-size of 20px
 */
export function setStyle(el: HTMLElement, ruleName: string, val: string): void {
  el.style[ruleName] = val;
}
