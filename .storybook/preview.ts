import { ChakraProvider } from "@chakra-ui/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) =>
      React.createElement(
        ChakraProvider,
        null,
        React.createElement(Story, null)
      ),
    withThemeByClassName({
      defaultTheme: "light",
      themes: { light: "", dark: "dark" },
    }),
  ],
};

export default preview;
