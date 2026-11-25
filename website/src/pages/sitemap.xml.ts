// Sitemap with hreflang alternates for every page in both languages.
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { LANGS, alternates } from "../i18n";

const STATIC = ["", "features/", "companion/", "performance/", "changelog/", "download/", "docs/", "faq/", "privacy/"];

export const GET: APIRoute = async ({ site }) => {
  const slugs = [...new Set((await getCollection("docs")).map((e) => e.id.split("/")[1]))];
  const paths = [...STATIC, ...slugs.map((s) => `docs/${s}/`)];
  const abs = (p: string) => new URL(p, site).href;
  const urls = paths.flatMap((p) => {
    const alt = alternates(p);
    const links = LANGS.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${abs(alt[l])}"/>`).join("") +
      `<xhtml:link rel="alternate" hreflang="x-default" href="${abs(alt.en)}"/>`;
    return LANGS.map((l) => `<url><loc>${abs(alt[l])}</loc>${links}</url>`);
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join("")}</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
