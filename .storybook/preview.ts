import "@fontsource/inter/latin-400.css";
import "../src/index.css";

import { Preview } from "@storybook/react-vite";
import React from "react";

import type { ThemeConfig } from "storybook-addon-data-theme-switcher";

// Enables the why-did-you-render plugin which identifies unnecessary re-renders
if (process.env.NODE_ENV === "development") {
  import("@welldone-software/why-did-you-render").then((whyDidYouRender) => {
    whyDidYouRender.default(React, {
      // trackAllPureComponents: true,
      include: [/^DataGrid/],
    });
  });
}

export const globalTypes = {
  dataTheme: {
    defaultValue: "light",
  },
  dataThemes: {
    defaultValue: {
      list: [
        { name: "Light", dataTheme: "light", color: "#fff" },
        { name: "Dark", dataTheme: "dark", color: "#0b0806" },
      ],
      clearable: false,
      toolbar: {
        title: "Change theme",
      },
    } satisfies ThemeConfig,
  },
};

const preview: Preview = {
  parameters: {
    // We have a dark mode toggler, so we don't need this
    backgrounds: { disabled: true },

    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
