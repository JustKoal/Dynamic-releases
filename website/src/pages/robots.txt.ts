// Crawlers only read robots.txt at a domain root: on github.io project pages this file is informative,
// and becomes effective as soon as the site moves to its own domain (BASE_PATH=/).
import type { APIRoute } from "astro";
import { asset } from "../i18n";

export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL(asset("sitemap.xml"), site).href}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
