import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Production base:
 * - Default `./` (relative) — works for custom domains (e.g. aarogyarajkatwal.com.np) AND
 *   GitHub Pages project URLs (e.g. …/Portfolio/) without extra config.
 * - Override: VITE_BASE=/custom/ for a fixed absolute path if needed.
 */
function productionBase(): string {
  const b = process.env.VITE_BASE;
  if (b != null && b !== "") {
    return b.endsWith("/") ? b : `${b}/`;
  }
  return "./";
}

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : productionBase(),
  plugins: [react()],
}));
