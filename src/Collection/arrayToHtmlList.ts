/**
 * @description
 * converts the elements of an array into <li> tags and appends them to the list of the given ID.
 * @example
 * arrayToHtmlList(['item 1', 'item 2'], 'myListID');
 */
export function arrayToHtmlList(arr: Array<any>, listID: string): void {
  (el => (
    (el = document.querySelector("#" + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(""))
  ))();
}
