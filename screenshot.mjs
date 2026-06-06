import puppeteer from "puppeteer";
import { readdir, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const url = process.argv[2];
const label = process.argv[3];
const viewport = process.argv[4] ?? "desktop";

if (!url) {
  console.error("usage: node screenshot.mjs <url> [label] [desktop|mobile]");
  process.exit(1);
}

const OUT_DIR = resolve("temporary screenshots");
await mkdir(OUT_DIR, { recursive: true });

const existing = await readdir(OUT_DIR).catch(() => []);
const nums = existing
  .map((f) => f.match(/^screenshot-(\d+)/)?.[1])
  .filter(Boolean)
  .map(Number);
const next = (nums.length ? Math.max(...nums) : 0) + 1;
const suffix = label ? `-${label}` : "";
const fileName = `screenshot-${next}${suffix}.png`;
const filePath = resolve(OUT_DIR, fileName);

const vp =
  viewport === "mobile"
    ? { width: 390, height: 844, deviceScaleFactor: 2 }
    : { width: 1440, height: 900, deviceScaleFactor: 2 };

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});
const page = await browser.newPage();
await page.setViewport(vp);
await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

// Scroll through the page to trigger IntersectionObserver reveals,
// then return to top before snapshotting.
await page.evaluate(async () => {
  // Small steps: the IntersectionObserver reveals only fire when an element
  // is briefly in view, so large jumps skip elements and leave them at
  // opacity:0. Re-measure scrollHeight each step for lazy-loaded images.
  const step = 200;
  let y = 0;
  for (let guard = 0; guard < 2000; guard++) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 45));
    const max = document.documentElement.scrollHeight;
    if (y >= max) break;
    y += step;
  }
  window.scrollTo(0, 0);
  await new Promise((r) => setTimeout(r, 500));
});

await new Promise((r) => setTimeout(r, 600));
await page.screenshot({ path: filePath, fullPage: true });
await browser.close();

console.log(filePath);
