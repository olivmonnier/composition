/**
 * @description
 * can be used to insert an HTML string before a particular element.
 * @example
 * insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
 */
export function insertBefore(el: HTMLElement, htmlString: string): void {
  el.insertAdjacentHTML("beforebegin", htmlString);
}
