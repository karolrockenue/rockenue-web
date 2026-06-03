import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const distDir = join(root, "dist");

const {
  render,
  PRERENDER_PATHS,
  PAGE_SEO,
  SITE_URL,
  SITE_NAME,
  OG_IMAGE,
  pageStructuredData,
} = await import(join(root, ".ssr-dist/entry-server.js"));

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escAttr = (s) => esc(s).replace(/"/g, "&quot;");

const template = readFileSync(join(distDir, "index.html"), "utf-8");

function jsonLdScripts(path) {
  return pageStructuredData(path)
    .map((json) => `<script type="application/ld+json">${json.replace(/</g, "\\u003c")}</script>`)
    .join("\n    ");
}

function headFor(path, seo) {
  const url = SITE_URL + (path === "/" ? "/" : path);
  return [
    `<meta name="description" content="${escAttr(seo.description)}" />`,
    `<link rel="canonical" href="${escAttr(url)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escAttr(SITE_NAME)}" />`,
    `<meta property="og:title" content="${escAttr(seo.title)}" />`,
    `<meta property="og:description" content="${escAttr(seo.description)}" />`,
    `<meta property="og:url" content="${escAttr(url)}" />`,
    `<meta property="og:image" content="${escAttr(OG_IMAGE)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escAttr(seo.title)}" />`,
    `<meta name="twitter:description" content="${escAttr(seo.description)}" />`,
    `<meta name="twitter:image" content="${escAttr(OG_IMAGE)}" />`,
    jsonLdScripts(path),
  ].join("\n    ");
}

let count = 0;
for (const path of PRERENDER_PATHS) {
  const seo = PAGE_SEO[path];
  if (!seo) {
    console.warn(`[prerender] no SEO entry for ${path} — skipping`);
    continue;
  }
  const appHtml = render(path);

  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(seo.title)}</title>`)
    .replace("</head>", `    ${headFor(path, seo)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outPath =
    path === "/"
      ? join(distDir, "index.html")
      : join(distDir, path, "index.html");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  count++;
  console.log(`[prerender] ${path} -> ${outPath.replace(root + "/", "")}`);
}
console.log(`[prerender] done — ${count} pages`);

// sitemap.xml — generated from the same path list so it never drifts.
const urls = PRERENDER_PATHS.map((path) => {
  const loc = SITE_URL + (path === "/" ? "/" : path);
  const priority = path === "/" ? "1.0" : "0.7";
  return `  <url>\n    <loc>${loc}</loc>\n    <priority>${priority}</priority>\n  </url>`;
}).join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
writeFileSync(join(distDir, "sitemap.xml"), sitemap);
console.log(`[prerender] sitemap.xml -> ${PRERENDER_PATHS.length} urls`);
