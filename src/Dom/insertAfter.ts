/**
 * @description
 * can be used to insert an HTML string after the end of a particular element.
 * @example
 * insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
 */
export function insertAfter(el: HTMLElement, htmlString: string): void {
  el.insertAdjacentHTML("afterend", htmlString);
}
