import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";
import { createRequire } from "node:module";
import path from "node:path";
import { defineConfig, normalizePath } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
const require = createRequire(import.meta.url);

const pdfjsDistPath = path.dirname(require.resolve("pdfjs-dist/package.json"));
const cMapsDir = normalizePath(path.join(pdfjsDistPath, "cmaps"));
// https://vitejs.dev/config/
export default defineConfig({
  // your vite config...
  plugins: [
    // your vite plugins...
    copy({
      targets: [
        {
          src: "node_modules/@nutrient-sdk/viewer/dist/nutrient-viewer-lib",
          dest: "public/",
        },
      ],
      hook: "buildStart",
    }),
    viteStaticCopy({
      targets: [
        {
          src: cMapsDir,
          dest: "",
        },
      ],
    }),
    react(),
  ],
  build: {
    outDir: "build",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // Ensure correct file resolution
  },
});
