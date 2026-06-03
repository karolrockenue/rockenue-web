import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes } from "./AppRoutes";

export { PRERENDER_PATHS } from "./AppRoutes";
export { PAGE_SEO, SITE_URL, SITE_NAME, OG_IMAGE, pageStructuredData } from "./seo";

// Server entry, used only at build time by scripts/prerender.mjs.
// Renders the app for a given URL to a static HTML string.
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
}
