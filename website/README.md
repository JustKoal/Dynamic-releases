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

## Video

Optimised copies live in `public/media/` (about 14 MB in total): the 52-second tour (`dynamic-tour.mp4` H.264 with faststart,
`dynamic-tour.webm` VP9/Opus, poster and English subtitles `dynamic-tour.en.vtt`), the real-scale hero clip and three muted previews.
They are generated from the promo project's renders with its `scripts/web-media.mjs` (Remotion's bundled ffmpeg, no installs);
the originals are not committed. The full 2-minute spot stays a release asset of v0.3.1.

Playback rules: the tour never autoplays (`preload="none"`, native controls after the first click); previews load only when visible,
play muted, pause off-screen or in a background tab, and stay on their poster with `prefers-reduced-motion` or Save-Data
(`src/components/Loop.astro` + the script in `src/layouts/Base.astro`).

## Other scripts

- `node scripts/make-og.mjs` regenerates the social preview images (`public/og-*.png`).

## Custom domain (later)

Build with `SITE_URL=https://your.domain BASE_PATH=/` (for example as workflow env) and add the domain in the repository's Pages settings.
