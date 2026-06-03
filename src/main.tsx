import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AppRoutes } from "./AppRoutes";

// Client entry. The HTML for each route is prerendered at build time
// (scripts/prerender.mjs), so we hydrate the existing markup rather than
// rendering from scratch.
hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
);
