// Refreshes the offline fallback (src/data/releases.json) from the GitHub API.
// Usage (from website/): node scripts/update-snapshot.mjs   — commit the result after a release if you want the fallback current.
import { writeFileSync } from "node:fs";
const res = await fetch("https://api.github.com/repos/JustKoal/Dynamic-releases/releases?per_page=100", { headers: { Accept: "application/vnd.github+json", "User-Agent": "dynamic-website-build" } });
if (!res.ok) throw new Error(`GitHub API HTTP ${res.status}`);
const out = (await res.json()).filter((r) => !r.draft && !r.prerelease).map((r) => {
  const exe = r.assets.find((a) => /_x64-setup\.exe$/i.test(a.name));
  const manifest = r.assets.find((a) => a.name === "latest.json");
  return { tag: r.tag_name, version: r.tag_name.replace(/^v/, ""), name: r.name ?? r.tag_name, date: r.published_at, url: r.html_url, notes: r.body ?? "",
    installer: exe && { name: exe.name, size: exe.size, url: exe.browser_download_url, sha256: exe.digest?.startsWith("sha256:") ? exe.digest.slice(7) : undefined },
    manifest: manifest?.browser_download_url };
}).sort((a, b) => b.date.localeCompare(a.date));
writeFileSync(new URL("../src/data/releases.json", import.meta.url), JSON.stringify(out, null, 1) + "\n");
console.log(`snapshot: ${out.length} releases, latest ${out[0]?.tag}`);
