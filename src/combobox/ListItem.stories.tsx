import { ListBox } from "../listbox/ListBox";
import { ListItem } from "./ListItem";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ListItem> = {
  title: "Components/ComboBox/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ListBox aria-label="List box">
        <Story />
      </ListBox>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  args: {
    children: "Default List Item",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled List Item",
    isDisabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <span>🌟</span> List Item with Icon
      </>
    ),
  },
};

export const LongText: Story = {
  args: {
    children: "This is a very long list item text that might wrap to multiple lines depending on the container width",
  },
};

export const WithCustomStyling: Story = {
  args: {
    children: "Custom Styled List Item",
    style: {
      backgroundColor: "#f0f0f0",
      color: "#333",
      padding: "10px",
      borderRadius: "4px",
    },
  },
};
