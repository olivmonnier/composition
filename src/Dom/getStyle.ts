/**
 * @description
 * can be used to get the value of a CSS rule for a particular element.
 * @example
 * getStyle(document.querySelector('p'), 'font-size'); // '16px'
 */
export function getStyle(el: HTMLElement, ruleName: string): any {
  return getComputedStyle(el)[ruleName];
}
