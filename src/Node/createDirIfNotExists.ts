import * as fs from "fs";

/**
 * @description
 * uses existsSync() to check whether a directory exists and then mkdirSync() to create it if it doesn’t.
 * @example
 * createDirIfNotExists('test'); // creates the directory 'test', if it doesn't exist
 */
export function createDirIfNotExists(dir: string): void {
  return !fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined;
}
