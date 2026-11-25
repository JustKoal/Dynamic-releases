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
| Google Search Console verification (keep name and content unchanged) | `public/googlea14030c7174ada9e.html` (skipped by `check-links.mjs`) |

## Releases

The version, date, installer link, size, SHA-256 and changelog come from the GitHub Releases API **at build time**; the browser never calls the API.
Publishing, editing or deleting a release starts the workflow, but the `github-pages` environment currently allows deployments from
`main` only: the run on the release tag builds and is then rejected. Until a `v*` tag rule is added to that environment, run the
workflow manually after a release (`gh workflow run website.yml --ref main`). If the API is unreachable, the committed snapshot is used
(refresh it with `node scripts/update-snapshot.mjs`). The workflow only reads releases: it never changes `latest.json`, installers or signatures.

## Video

Optimised copies live in `public/media/` (about 14 MB in total): the 52-second tour (`dynamic-tour.mp4` H.264 with faststart,
`dynamic-tour.webm` VP9/Opus, poster and English subtitles `dynamic-tour.en.vtt`), the real-scale hero clip and three muted previews.
They are generated from the promo project's renders with its `scripts/web-media.mjs` (Remotion's bundled ffmpeg, no installs);
the originals are not committed. The full 2-minute spot stays a release asset of v0.3.1.

Playback rules: the tour never autoplays (`preload="none"`, native controls after the first click); previews load only when visible,
play muted, pause off-screen or in a background tab, and stay on their poster with `prefers-reduced-motion` or Save-Data
(`src/components/Loop.astro` + the script in `src/layouts/Base.astro`).

## Layout rules

- Edge-to-edge media in a padded card: use the bento's `.tile-media` (it sets `width: calc(100% + 2 * var(--pad))`). Negative
  margins alone are not enough when the element is the `<img>` itself, because `max-width: 100%` keeps it at the content width.
- Grids must not leave holes: `.grid-3`/`.grid-4` stretch a lone last card across the row; the home bento pairs tiles of
  similar height on tablets (768–1080 px).
- Standalone `.link`s get a 44 px touch target from `::after`; inline code in `.prose` wraps (long hashes in release notes).
- Spacing between sibling cards comes from `--card-gap` (16 px, 20 px on phones): always larger than any gap inside a card.
  On phones bento media sit inside the card with their own corners instead of bleeding into the bottom edge.
- Files in `public/media/` keep fixed names, so reference them with `versioned()` (adds `?v=<content hash>`): GitHub Pages
  caches every file for 10 minutes. CSS and scripts are inlined and images under `_astro/` are hashed, so they never mismatch.
- Check every page at 320–430, 768–1080 and 1366–2560 px in both languages, in portrait and landscape, before pushing.

## Other scripts

- `node scripts/make-og.mjs` regenerates the social preview images (`public/og-*.png`).

## Custom domain (later)

Build with `SITE_URL=https://your.domain BASE_PATH=/` (for example as workflow env) and add the domain in the repository's Pages settings.
