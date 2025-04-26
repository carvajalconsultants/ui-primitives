import { paraglideVitePlugin } from "@inlang/paraglide-js"
import path from "path";
import react from "@vitejs/plugin-react-swc";
import VitePluginSVGSpritemap from "@spiriit/vite-plugin-svg-spritemap";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ui-primitives",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-aria-components", "@tanstack/react-table"],
      output: {
        preserveModules: true,
        exports: "named",
      },
    },
  },
  plugins: [
    VitePluginSVGSpritemap(["./public/icons/*.svg"], {
      prefix: false,
      svgo: {
        plugins: [
          {
            name: "removeAttrs",
            params: {
              attrs: ["class"],
            }
          },
        ],
      },
    }),

    paraglideVitePlugin({ project: "./project.inlang", outdir: "./src/paraglide" }),

    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "/styled-system": path.resolve(__dirname, "./styled-system"),
    },
  },
});
