import { Meta, StoryObj } from "@storybook/react";
import Customer from "../components/customer";

const meta = {
  title: "Billing/Customer",
  component: Customer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Customer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initial: Story = {
  args: {
    customer: {
      name: "",
      address: "",
      phone: "",
      email: "",
      siret: "",
    },
    updateCustomer: (name: string, value: string) => {
      console.log(`Updated ${name} to ${value}`);
    },
  },
};

export const Filled: Story = {
  args: {
    customer: {
      name: "Ma boite",
      address: "333 rue du père noel",
      phone: "0600000000",
      email: "pere@noel.com",
      siret: "3457866882672",
    },
    updateCustomer: (name: string, value: string) => {
      console.log(`Updated ${name} to ${value}`);
    },
  },
};
