import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function productionBase(): string {
  const b = process.env.VITE_BASE;
  if (b != null && b !== "") {
    return b.endsWith("/") ? b : `${b}/`;
  }
  return "/Portfolio/";
}

// Project site: https://wild-beast-47.github.io/Portfolio/
// Custom domain at site root: set VITE_BASE=/ in the build environment
export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : productionBase(),
  plugins: [react()],
}));
