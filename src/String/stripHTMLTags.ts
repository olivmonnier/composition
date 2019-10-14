/**
 * @description
 * can be used to remove HTML/XML tags from a string.
 * @example
 * stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
 */
export function stripHTMLTags(str: string): string {
  return str.replace(/<[^>]*>/g, "");
}
