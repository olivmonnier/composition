/**
 * @description
 * converts the elements of an array into <li> tags and appends them to the list of the given ID.
 * @example
 * arrayToHtmlList(['item 1', 'item 2'], 'myListID');
 */
export function arrayToHtmlList<T>(arr: T[], listID: string): void {
  const el = document.querySelector("#" + listID);
  if (!el) return;
  el.innerHTML += arr.map((item) => `<li>${item}</li>`).join("");
}
