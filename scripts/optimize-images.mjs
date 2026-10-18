/**
 * One-off asset pipeline. Run with: npm run images
 *
 * - Creates responsive WebP + JPEG variants of the school's own photographs
 *   (public/images/*.jpeg -> public/images/opt/<name>-<width>.<ext>)
 * - Extracts the official crest bitmap embedded in src/assets/logo.svg and
 *   produces favicons, touch icons and web-sized crest images in public/brand/
 * - Builds a 1200x630 Open Graph image from the campus photograph
 *
 * Outputs are committed to the repo, so this does not run on every build.
 */
import { readFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const photosDir = path.join(root, "public", "images");
const optDir = path.join(photosDir, "opt");
const brandDir = path.join(root, "public", "brand");
const WIDTHS = [480, 960, 1280];

await mkdir(optDir, { recursive: true });
await mkdir(brandDir, { recursive: true });

// 1. Photographs
const files = (await readdir(photosDir)).filter((f) => /\.jpe?g$/i.test(f));
for (const file of files) {
  const name = file.replace(/\.jpe?g$/i, "");
  const input = path.join(photosDir, file);
  const meta = await sharp(input).metadata();
  for (const w of WIDTHS) {
    if (meta.width && w > meta.width && w !== WIDTHS[0]) continue;
    const width = Math.min(w, meta.width ?? w);
    const base = sharp(input).rotate().resize({ width, withoutEnlargement: true });
    await base.clone().webp({ quality: 74, effort: 5 }).toFile(path.join(optDir, `${name}-${w}.webp`));
    await base.clone().jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(optDir, `${name}-${w}.jpg`));
  }
  console.log(`photo: ${name} (${meta.width}x${meta.height})`);
}

// 2. Crest from the existing logo SVG (it wraps a PNG bitmap)
const svg = await readFile(path.join(root, "src", "assets", "logo.svg"), "utf8");
const match = svg.match(/data:image\/png;base64,([A-Za-z0-9+/=\s]+)/);
if (!match) throw new Error("Could not find embedded crest bitmap in logo.svg");
const crest = Buffer.from(match[1].replace(/\s/g, ""), "base64");
const trimmed = await sharp(crest).trim().png().toBuffer();

for (const h of [96, 192, 384]) {
  await sharp(trimmed).resize({ height: h }).webp({ quality: 88 }).toFile(path.join(brandDir, `crest-${h}.webp`));
  await sharp(trimmed).resize({ height: h }).png({ compressionLevel: 9 }).toFile(path.join(brandDir, `crest-${h}.png`));
}

const square = async (size, bg) =>
  sharp(trimmed)
    .resize({ width: size, height: size, fit: "contain", background: bg })
    .flatten(bg.alpha === 0 ? false : { background: bg })
    .png({ compressionLevel: 9 });

await (await square(32, { r: 0, g: 0, b: 0, alpha: 0 })).toFile(path.join(brandDir, "favicon-32.png"));
await (await square(180, { r: 247, g: 242, b: 234, alpha: 1 })).toFile(path.join(brandDir, "apple-touch-icon.png"));
await (await square(512, { r: 247, g: 242, b: 234, alpha: 1 })).toFile(path.join(brandDir, "icon-512.png"));
console.log("brand: crest + icons");

// 3. Open Graph image
await sharp(path.join(photosDir, "campus-building.jpeg"))
  .resize({ width: 1200, height: 630, fit: "cover", position: "centre" })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(path.join(brandDir, "og-image.jpg"));
console.log("brand: og-image");
