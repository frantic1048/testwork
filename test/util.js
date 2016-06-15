// driver.takeScreenshot()

import fs from 'fs';
import { Buffer } from 'buffer';

/**
 * save an screenshot
 * usege:
 * 		saveShot(await driver.takeScreenshot(), 'title')
 * @param  {string} b64png base64 encoded png
 * @param  {string} title file title
 */
export function saveShot(b64png, title) {
  const f = fs.createWriteStream(`${__dirname}/../report/${title}.png`);
  f.end(new Buffer(b64png, 'base64'));
}
