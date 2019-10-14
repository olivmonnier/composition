/**
 * @description
 * can be used to do a smooth scroll to the top of the current page.
 * @example
 * scrollToTop();
 */
export function scrollToTop(): void {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}
