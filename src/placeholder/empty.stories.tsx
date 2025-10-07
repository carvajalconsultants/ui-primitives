import { Empty } from "./empty";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Empty> = {
  title: "Components/Empty",
  component: Empty,

  parameters: {
    layout: "centered",
  },

  argTypes: {
    variant: {
      options: ["normal", "danger"],
      control: {
        type: "select",
      },
    },
    icon: {
      control: "text",
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    iconSize: {
      control: {
        type: "number",
        min: 16,
        max: 64,
        step: 4,
      },
    },
    ringCount: {
      control: {
        type: "number",
        min: 1,
        max: 10,
        step: 1,
      },
    },
    ringBaseOpacity: {
      control: {
        type: "number",
        min: 0.01,
        max: 0.2,
        step: 0.01,
      },
    },
    visualSizeMultiplier: {
      control: {
        type: "number",
        min: 8,
        max: 20,
        step: 1,
      },
    },
  },

  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Empty>;

// Base story with default props
const SingleEmpty: Story = {
  render: (args) => <Empty {...args} />,
};

// Normal variant with default settings
export const Normal = {
  ...SingleEmpty,
  args: {
    icon: "search",
    title: "No Results Found",
    description: "We couldn't find any matches for your search. Try adjusting your filters or search terms.",
  },
};

// Danger variant showing an error state
export const Danger = {
  ...SingleEmpty,
  args: {
    variant: "danger",
    icon: "x",
    title: "Error Loading Data",
    description: "There was a problem loading your content. Please try again or contact support if the issue persists.",
  },
};

// Custom sized example
export const LargeIcon = {
  ...SingleEmpty,
  args: {
    icon: "search",
    title: "Your Inbox is Empty",
    description: "No new messages to display. New messages will appear here when you receive them.",
    iconSize: 48,
    ringCount: 6,
    visualSizeMultiplier: 12,
  },
};

// Example with different ring configuration
export const CustomRings = {
  ...SingleEmpty,
  args: {
    icon: "search",
    title: "No Documents",
    description: "Start by creating your first document or uploading an existing one.",
    ringCount: 8,
    ringBaseOpacity: 0.15,
    visualSizeMultiplier: 16,
  },
};
