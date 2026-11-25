// Fails if any page in dist/ links to an internal URL or asset that does not exist, or lacks lang/canonical/hreflang.
// Usage (from website/, after `npm run build`): node scripts/check-links.mjs
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, relative, posix } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const BASE = (process.env.BASE_PATH ?? "/Dynamic-releases").replace(/\/$/, "");
const pages = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") && pages.push(p); });
walk(DIST);

const errors = [];
const exists = (urlPath) => {
  if (!urlPath.startsWith(BASE + "/") && urlPath !== BASE) return false;
  const rel = decodeURIComponent(urlPath.slice(BASE.length)).replace(/^\//, "");
  const target = join(DIST, rel);
  return existsSync(target) && (statSync(target).isFile() || existsSync(join(target, "index.html")));
};

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const pageUrl = BASE + "/" + relative(DIST, page).split("\\").join("/").replace(/index\.html$/, "");
  const name = relative(DIST, page);
  if (!/<html lang="(en|it)"/.test(html)) errors.push(`${name}: missing lang`);
  if (!name.startsWith("404") && !/rel="canonical"/.test(html)) errors.push(`${name}: missing canonical`);
  if (!name.startsWith("404") && (html.match(/hreflang="(en|it|x-default)"/g) ?? []).length < 3) errors.push(`${name}: missing hreflang`);
  for (const [, attr, raw] of html.matchAll(/\s(href|src|srcset)="([^"]+)"/g)) {
    for (const part of attr === "srcset" ? raw.split(",").map((s) => s.trim().split(" ")[0]) : [raw]) {
      if (/^(https?:|mailto:|data:|#)/.test(part)) continue;
      const [path] = part.split("#");
      const abs = path.startsWith("/") ? path : posix.join(pageUrl.endsWith("/") ? pageUrl : posix.dirname(pageUrl) + "/", path);
      if (!exists(abs)) errors.push(`${name}: broken ${attr} → ${part}`);
    }
  }
}
console.log(`${pages.length} pages checked`);
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("no broken internal links");
