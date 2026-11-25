// Generates the Open Graph images (public/og-en.png, public/og-it.png) from the official logo and a real screenshot.
// Run once from website/ when the copy or the screenshot changes: node scripts/make-og.mjs
import sharp from "sharp";

const W = 1200, H = 630;
const copy = {
  en: { line1: "Your PC.", line2: "One interface.", sub: "Smart desktop assistant for Windows 11" },
  it: { line1: "Il tuo PC.", line2: "Un'unica interfaccia.", sub: "Assistente desktop per Windows 11" },
};
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/'/g, "&#39;");
const logo = await sharp("src/assets/logo.png").resize(84).png().toBuffer();
const shot = await sharp("src/assets/shots/v7-02-home.webp").resize(1000).png().toBuffer(); // 1000 × 512

for (const [lang, c] of Object.entries(copy)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs><radialGradient id="g" cx="50%" cy="100%" r="75%"><stop offset="0" stop-color="#0c1526"/><stop offset="1" stop-color="#000"/></radialGradient></defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <text x="172" y="112" font-family="Segoe UI Variable Display, Segoe UI, sans-serif" font-size="40" font-weight="700" fill="#f2f5fa">Dynamic</text>
    <text x="172" y="146" font-family="Segoe UI, sans-serif" font-size="22" fill="#8f98a6">${esc(c.sub)}</text>
    <text x="1112" y="112" text-anchor="end" font-family="Segoe UI Variable Display, Segoe UI, sans-serif" font-size="44" font-weight="700" fill="#f2f5fa">${esc(c.line1)}</text>
    <text x="1112" y="164" text-anchor="end" font-family="Segoe UI Variable Display, Segoe UI, sans-serif" font-size="44" font-weight="700" fill="#8f98a6">${esc(c.line2)}</text>
  </svg>`;
  await sharp(Buffer.from(svg))
    .composite([{ input: logo, left: 72, top: 62 }, { input: shot, left: 100, top: 230 }])
    .png({ compressionLevel: 9 })
    .toFile(`public/og-${lang}.png`);
  console.log(`public/og-${lang}.png`);
}
