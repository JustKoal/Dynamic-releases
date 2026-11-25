# Dynamic website

Static site for **Dynamic**, published at <https://justkoal.github.io/Dynamic-releases/> (English at the root, Italian under `/it/`).
Built with [Astro](https://astro.build) and deployed to GitHub Pages by [`.github/workflows/website.yml`](../.github/workflows/website.yml).

## Local development

```sh
cd website
npm ci
npm run dev        # http://localhost:4321/Dynamic-releases/
npm run build      # output in dist/
node scripts/check-links.mjs   # fails on broken internal links, missing lang/canonical/hreflang
```

## Where things live

| What | Where |
|---|---|
| UI copy (both languages, same shape) | `src/i18n/en.ts`, `src/i18n/it.ts` |
| Guides | `src/content/docs/<en\|it>/<slug>.md` (same slug in both languages) |
| Pages | `src/pages/[...lang]/` (English = no prefix, Italian = `it/`) |
| Design tokens and global styles | `src/styles/global.css` |
| Screenshots (synthetic data only) | `src/assets/shots/` |
| Release data (read at build time) | `src/lib/releases.ts`, fallback snapshot `src/data/releases.json` |

## Releases

The version, date, installer link, size, SHA-256 and changelog come from the GitHub Releases API **at build time**; the browser never calls the API.
Publishing, editing or deleting a release triggers a rebuild automatically. If the API is unreachable, the committed snapshot is used
(refresh it with `node scripts/update-snapshot.mjs`). The workflow only reads releases: it never changes `latest.json`, installers or signatures.

## Other scripts

- `node scripts/make-og.mjs` regenerates the social preview images (`public/og-*.png`).

## Custom domain (later)

Build with `SITE_URL=https://your.domain BASE_PATH=/` (for example as workflow env) and add the domain in the repository's Pages settings.
