// Release data is read ONCE at build time from the GitHub API (no browser requests).
// If the API is unavailable the committed snapshot in src/data/releases.json is used, so the site always builds.
// GITHUB_TOKEN (provided by GitHub Actions) only raises the rate limit; it is never written to the output.
import { marked } from "marked";
import snapshot from "../data/releases.json";

export const REPO = "JustKoal/Dynamic-releases";
export const REPO_URL = `https://github.com/${REPO}`;
export const RELEASES_URL = `${REPO_URL}/releases`;
export const LATEST_URL = `${REPO_URL}/releases/latest`;
/** Voluntary support page: a plain link, no Buy Me a Coffee script, widget or tracking on this site. */
export const SUPPORT_URL = "https://www.buymeacoffee.com/justkoal";

export interface Release {
  tag: string;
  version: string;
  name: string;
  date: string; // ISO
  url: string;
  notes: string; // markdown as published
  installer?: { name: string; size: number; url: string; sha256?: string };
  manifest?: string; // latest.json URL (signed updater manifest)
}

type ApiRelease = {
  tag_name: string; name: string | null; html_url: string; body: string | null; draft: boolean; prerelease: boolean; published_at: string;
  assets: { name: string; size: number; browser_download_url: string; digest?: string | null }[];
};

export function normalize(list: ApiRelease[]): Release[] {
  return list
    .filter((r) => !r.draft && !r.prerelease)
    .map((r) => {
      const exe = r.assets.find((a) => /_x64-setup\.exe$/i.test(a.name));
      const manifest = r.assets.find((a) => a.name === "latest.json");
      return {
        tag: r.tag_name,
        version: r.tag_name.replace(/^v/, ""),
        name: r.name ?? r.tag_name,
        date: r.published_at,
        url: r.html_url,
        notes: r.body ?? "",
        installer: exe && {
          name: exe.name,
          size: exe.size,
          url: exe.browser_download_url,
          sha256: exe.digest?.startsWith("sha256:") ? exe.digest.slice(7) : undefined,
        },
        manifest: manifest?.browser_download_url,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

let cache: Promise<{ releases: Release[]; live: boolean }> | undefined;

export function getReleases() {
  cache ??= (async () => {
    try {
      const headers: Record<string, string> = { Accept: "application/vnd.github+json", "User-Agent": "dynamic-website-build" };
      if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
      const res = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=100`, { headers, signal: AbortSignal.timeout(15000) });
      if (!res.ok) throw new Error(`GitHub API HTTP ${res.status}`);
      const releases = normalize((await res.json()) as ApiRelease[]);
      if (!releases.length) throw new Error("no published releases");
      return { releases, live: true };
    } catch (e) {
      console.warn(`[releases] using committed snapshot: ${(e as Error).message}`);
      return { releases: snapshot as Release[], live: false };
    }
  })();
  return cache;
}

export async function getLatest() {
  const { releases } = await getReleases();
  return releases[0];
}

/** Release notes as HTML. Headings become h3 under each release h2. */
export function notesHtml(md: string) {
  const body = md.replace(/^#{1,6}\s+Dynamic\s+v?[\d.]+\s*\n+/i, "").replace(/^#{1,6}\s/gm, "### "); // h2 = release title, so notes start at h3
  return marked.parse(body, { async: false }) as string;
}

export function formatSize(bytes: number, lang: string) {
  const mb = bytes / 1e6; // SI megabytes (1 MB = 10^6 bytes); the exact byte count is shown next to it
  return `${mb.toLocaleString(lang === "it" ? "it-IT" : "en-US", { maximumFractionDigits: 0 })} MB`;
}

export function formatDate(iso: string, lang: string) {
  return new Date(iso).toLocaleDateString(lang === "it" ? "it-IT" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
