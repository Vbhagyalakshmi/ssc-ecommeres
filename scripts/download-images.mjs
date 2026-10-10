// Usage: npm run images   (needs internet). Then set BASE = "" in lib/data.js
import { mkdir, writeFile } from "node:fs/promises";

const BASE = "https://storefront-spark-34.lovable.app";
const files = [
  "hero-1-B2z4lJjJ.jpg", "hero-2-DDyqZI1-.jpg", "hero-3-B6ZBs93w.jpg", "hero-4-et-rb63o.jpg",
  "p-gown-CZIofiwO.jpg", "p-coat-DW40Qt2x.jpg", "p-oxford-DHVFuLSr.jpg", "p-tote-t4q76JIN.jpg",
  "p-watch-BdWWsDxJ.jpg", "p-ring-BPEgzelO.jpg", "p-headphones-DKNrXA9w.jpg",
];
await mkdir("public/assets", { recursive: true });
for (const f of files) {
  const res = await fetch(`${BASE}/assets/${f}`);
  if (!res.ok) { console.error("Failed", f, res.status); continue; }
  await writeFile(`public/assets/${f}`, Buffer.from(await res.arrayBuffer()));
  console.log("Saved", f);
}
