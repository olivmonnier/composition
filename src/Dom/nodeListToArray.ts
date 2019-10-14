/**
 * @description
 * can be used to convert a nodeList to an array.
 * @example
 * nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
 */
export function nodeListToArray(nodeList: NodeList): Array<Node> {
  return [...nodeList];
}
