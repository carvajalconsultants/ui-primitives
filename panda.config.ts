import { defineConfig } from "@pandacss/dev";

import { cciPreset } from "./src/cci-preset";

/**
 * This Panda config is used only for Storybook and the vite test app.
 * It is not used by external packages.
 */
export default defineConfig({
  // Minimal tokens as per: https://panda-css.com/docs/guides/minimal-setup
  presets: [cciPreset],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Whether to use css reset
  preflight: true,

  // Hash/Obfuscate classNames
  // hash: true,

  // Generate styled-system jsx
  jsxFramework: "react",

  // Everything must be type safe, so this makes sure nobody can add invalid values
  strictTokens: true,
  strictPropertyValues: true,

  // Instead of mjs to not have issues importing files
  outExtension: "js",

  // Files to exclude
  exclude: [],
});
