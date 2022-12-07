/**
 * @description
 * can be used to do a redirect to a specified URL.
 * @example
 * redirect('https://google.com');
 */
export function redirect(url: string, asLink: boolean = true): void {
  asLink ? (window.location.href = url) : window.location.replace(url);
}
