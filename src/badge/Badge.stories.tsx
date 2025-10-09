import { Badge } from "./Badge";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },

  argTypes: {
    variant: {
      options: ["success", "warning", "danger"],
      control: {
        type: "select",
      },
    },
    width: {
      options: ["full", "fit"],
      control: {
        type: "select",
      },
    },
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const SingleBadge: Story = {
  render: (args) => <Badge {...args} />,
};

export const Default = {
  ...SingleBadge,
  args: {
    children: "Success",
  },
};

export const Warning = {
  ...SingleBadge,
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const Danger = {
  ...SingleBadge,
  args: {
    variant: "danger",
    children: "Danger",
  },
};

export const Disabled = {
  ...SingleBadge,
  args: {
    variant: "danger",
    children: "Danger",
    disabled: true,
  },
};
