// Static site for Dynamic, published on GitHub Pages.
// SITE_URL / BASE_PATH let a future custom domain work without code changes (e.g. SITE_URL=https://dynamic.example BASE_PATH=/).
import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://justkoal.github.io",
  base: process.env.BASE_PATH ?? "/Dynamic-releases",
  trailingSlash: "always",
  build: { format: "directory", inlineStylesheets: "always" },
  compressHTML: true,
});
