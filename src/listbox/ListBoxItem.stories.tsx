import { ListBoxItem } from "./ListBoxItem";
import { VirtualizedListBox } from "./VirtualizedListBox";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof ListBoxItem> = {
  title: "Components/ComboBox/ListBoxItem",
  component: ListBoxItem,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <VirtualizedListBox aria-label="List box">
        <Story />
      </VirtualizedListBox>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ListBoxItem>;

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
