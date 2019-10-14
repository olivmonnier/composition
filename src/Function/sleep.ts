/**
 * @description
 * can be used to delay the execution of an asynchronous function by putting it into sleep.
 * @example
 * async function sleepyWork() {
 *   console.log("I'm going to sleep for 1 second.");
 *   await sleep(1000);
 *   console.log('I woke up after 1 second.');
 * }
 */
export function sleep(ms: number): Promise<any> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
