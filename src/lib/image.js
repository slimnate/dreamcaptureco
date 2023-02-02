
import probe from "probe-image-size";
import fs from "node:fs";
import path from "node:path";

/**
 * @typedef {Object} ImageSize
 * @property {number} width
 * @property {number} height
 */

/**
 * @param {string} imgPath
 * @returns {Promise<ImageSize>}
 */
async function getSize(imgPath) {
  const absPath = path.join(process.cwd(), 'static', imgPath);
  const stream = await fs.createReadStream(absPath);
  const { width, height } = await probe(stream);
  
  return { width, height };
}

/**
 * @param {string} imgPath
 * @returns {Promise<string>}
 */
async function getOrientation(imgPath) {
  const { width, height } = await getSize(imgPath);

  return width > height ? 'landscape' : 'portrait';
}

export {
  getSize,
  getOrientation,
};