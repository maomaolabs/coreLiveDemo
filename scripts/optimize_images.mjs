// Script de compresión de PNGs y JPG con sharp
// Uso: node scripts/optimize_images.mjs
import sharp from "sharp";
import { stat, rename, unlink } from "fs/promises";
import path from "path";

const PUBLIC = "./public";

const targets = [
  {
    input: `${PUBLIC}/wallpaper.jpg`,
    output: `${PUBLIC}/wallpaper.jpg`,
    op: (img) => img.resize({ width: 1920, withoutEnlargement: true }).jpeg({ quality: 72, progressive: true }),
  },
  { input: `${PUBLIC}/assets/1.png`, output: `${PUBLIC}/assets/1.png`, op: (img) => img.png({ compressionLevel: 9, effort: 10 }) },
  { input: `${PUBLIC}/assets/2.png`, output: `${PUBLIC}/assets/2.png`, op: (img) => img.png({ compressionLevel: 9, effort: 10 }) },
  { input: `${PUBLIC}/assets/3.png`, output: `${PUBLIC}/assets/3.png`, op: (img) => img.png({ compressionLevel: 9, effort: 10 }) },
  { input: `${PUBLIC}/assets/6.png`, output: `${PUBLIC}/assets/6.png`, op: (img) => img.png({ compressionLevel: 9, effort: 10 }) },
  { input: `${PUBLIC}/assets/7.png`, output: `${PUBLIC}/assets/7.png`, op: (img) => img.png({ compressionLevel: 9, effort: 10 }) },
];

for (const { input, output, op } of targets) {
  const before = (await stat(input)).size;
  const tmp = output + ".tmp";
  await op(sharp(input)).toFile(tmp);
  const after = (await stat(tmp)).size;
  if (after < before) {
    await unlink(output);
    await rename(tmp, output);
    console.log(`✓ ${path.basename(input)}: ${(before / 1024).toFixed(1)}KB → ${(after / 1024).toFixed(1)}KB (-${Math.round((1 - after / before) * 100)}%)`);
  } else {
    await unlink(tmp);
    console.log(`= ${path.basename(input)}: sin mejora, se mantiene original`);
  }
}
