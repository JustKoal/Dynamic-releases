// English is the default language at the site root; Italian lives under /it/.
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import en from "./en";
import it from "./it";

export const LANGS = ["en", "it"] as const;
export type Lang = (typeof LANGS)[number];
const dicts = { en, it };

export const t = (lang: Lang) => dicts[lang];

/** getStaticPaths() for pages under src/pages/[...lang]/: `undefined` = English at the root. */
export const langPaths = () => LANGS.map((lang) => ({ params: { lang: lang === "en" ? undefined : lang }, props: { lang } }));

const BASE = import.meta.env.BASE_URL.replace(/\/?$/, "/");

/** Site-relative URL with base path, e.g. url("it", "features/") → /Dynamic-releases/it/features/ */
export function url(lang: Lang, path = "") {
  return `${BASE}${lang === "en" ? "" : `${lang}/`}${path.replace(/^\//, "")}`;
}

/** Same page in the other language(s): { en: "...", it: "..." } */
export const alternates = (path: string) => Object.fromEntries(LANGS.map((l) => [l, url(l, path)])) as Record<Lang, string>;

/** Asset/public file URL with base path. */
export const asset = (path: string) => `${BASE}${path.replace(/^\//, "")}`;

/** public/ file URL plus a content hash. GitHub Pages caches every file for 10 minutes and these names never change, so a
    replaced video, poster or subtitle file would otherwise be served stale next to new HTML. Build-time only. */
const hashes = new Map<string, string>();
export const versioned = (path: string) => {
  if (!hashes.has(path)) hashes.set(path, createHash("sha256").update(readFileSync(join(process.cwd(), "public", path))).digest("hex").slice(0, 10));
  return `${asset(path)}?v=${hashes.get(path)}`;
};
