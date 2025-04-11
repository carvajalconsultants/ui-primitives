import path from "path";
import react from "@vitejs/plugin-react-swc";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "cci-ui-primitives",
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
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "/styled-system": path.resolve(__dirname, "./styled-system"),
    },
  },
});
