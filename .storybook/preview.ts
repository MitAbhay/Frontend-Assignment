import type { Preview } from "@storybook/react";
import "../app/globals.css";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// export const decorators = [
//   withThemeByClassName({
//     themes: {
//       light: 'light',
//       dark: 'dark',
//     },
//     defaultTheme: 'light',
//   }),
// ];

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
];

export default preview;
