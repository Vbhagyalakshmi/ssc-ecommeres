import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { categories, products } from "../lib/data.js";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const assets = [
  ...products.map(({ slug, sourceImage }) => ({
    path: `public/images/products/${slug}.jpg`,
    url: sourceImage,
  })),
  ...categories.map(({ slug, sourceHeroImage }) => ({
    path: `public/images/categories/${slug}.jpg`,
    url: sourceHeroImage,
  })),
];

let nextIndex = 0;
const worker = async () => {
  while (nextIndex < assets.length) {
    const asset = assets[nextIndex++];
    const response = await fetch(asset.url);
    if (!response.ok) throw new Error(`Image download failed (${response.status}): ${asset.url}`);
    if (!response.headers.get("content-type")?.startsWith("image/")) {
      throw new Error(`Image URL returned a non-image response: ${asset.url}`);
    }
    const target = resolve(projectRoot, asset.path);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, Buffer.from(await response.arrayBuffer()));
    console.log(`Saved ${asset.path}`);
  }
};

await Promise.all(Array.from({ length: 6 }, worker));
console.log(`Downloaded ${assets.length} local image assets.`);
