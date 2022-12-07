/**
 * @desscriptions
 * can be used to smoothly scroll the element on which it is called into the visible area of the browser window.
 * @example
 * smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar
 * smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
 */
export function smoothScroll(element: string): void {
  document.querySelector(element).scrollIntoView({
    behavior: "smooth"
  });
}
