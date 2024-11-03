import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import NavBar from "../components/navbar";

const meta = {
  title: "Billing/NavBar",
  component: NavBar,

  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const withChakra = (StoryFn: React.ComponentType) =>
  React.createElement(
    ChakraProvider,
    null,
    React.createElement(ColorModeScript, null),
    React.createElement(StoryFn, null)
  );

export const Initial: Story = {
  args: {},
  decorators: [withChakra],
};
