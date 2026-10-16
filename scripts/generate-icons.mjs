/**
 * Generates raster icons from `public/favicon.svg`.
 *
 * Outputs (all written to `public/`):
 * - favicon.ico           32x32, for legacy browsers and crawlers
 * - apple-touch-icon.png  180x180, iOS home screen
 * - icon-192.png          192x192, web app manifest
 * - icon-512.png          512x512, web app manifest and splash screens
 *
 * Run with `npm run icons` whenever the SVG mark changes. The generated
 * files are committed, so this script is not part of the build.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const publicDir = fileURLToPath(new URL('../public/', import.meta.url));
const svg = await readFile(`${publicDir}favicon.svg`);

/** Renders the SVG mark as a square PNG buffer of the given size. */
function renderPng(size) {
  return sharp(svg, { density: 72 * (size / 64) * 2 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/**
 * Wraps a single PNG in an ICO container. Modern ICO readers accept PNG
 * payloads, which keeps the file small and avoids a BMP encoder.
 */
function pngToIco(png, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // palette size
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(png.length, 8); // payload size
  entry.writeUInt32LE(header.length + entry.length, 12); // payload offset

  return Buffer.concat([header, entry, png]);
}

const outputs = [
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
];

for (const [fileName, size] of outputs) {
  await writeFile(`${publicDir}${fileName}`, await renderPng(size));
}

await writeFile(`${publicDir}favicon.ico`, pngToIco(await renderPng(32), 32));

console.log('Icons generated in public/');
