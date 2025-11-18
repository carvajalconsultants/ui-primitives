import { Box } from "../../styled-system/jsx";
import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";
import { RadialProgress } from "./RadialProgress";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof RadialProgress> = {
  title: "Components/RadialProgress",
  component: RadialProgress,

  parameters: {
    layout: "centered",
  },

  argTypes: {
    percentage: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
    size: {
      control: {
        type: "number",
      },
      description: "Size in pixels for width and height",
    },
    strokeWidth: {
      control: {
        type: "number",
      },
      description: "Stroke width in pixels",
    },
    variant: {
      options: ["primary", "success", "warning", "danger"],
      control: {
        type: "select",
      },
      description: "Color variant for the progress indicator",
    },
  },

  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadialProgress>;

export const Default: Story = {
  args: {
    percentage: 75,
    size: 100,
    strokeWidth: 8,
    variant: "primary",
  },
};

export const Small: Story = {
  args: {
    percentage: 50,
    size: 50,
    strokeWidth: 4,
    variant: "primary",
  },
};

export const Large: Story = {
  args: {
    percentage: 80,
    size: 200,
    strokeWidth: 16,
    variant: "primary",
  },
};

export const WithCustomCenterContent: Story = {
  args: {
    percentage: 65,
    size: 120,
    strokeWidth: 10,
    variant: "primary",
    children: (
      <Box>
        <Heading size="lg" weight="bold" color="text.white">
          65
        </Heading>
        <Paragraph size="xs" color="text.white">
          Visitors
        </Paragraph>
      </Box>
    ),
  },
};

export const SuccessVariant: Story = {
  args: {
    percentage: 90,
    size: 100,
    strokeWidth: 8,
    variant: "success",
  },
};

export const DangerVariant: Story = {
  args: {
    percentage: 25,
    size: 100,
    strokeWidth: 8,
    variant: "danger",
  },
};

export const WarningVariant: Story = {
  args: {
    percentage: 60,
    size: 100,
    strokeWidth: 8,
    variant: "warning",
  },
};

export const ZeroPercent: Story = {
  args: {
    percentage: 0,
    size: 100,
    strokeWidth: 8,
    variant: "primary",
  },
};

export const HundredPercent: Story = {
  args: {
    percentage: 100,
    size: 100,
    strokeWidth: 8,
    variant: "primary",
  },
};

export const ThinStroke: Story = {
  args: {
    percentage: 75,
    size: 100,
    strokeWidth: 4,
    variant: "primary",
  },
};

export const ThickStroke: Story = {
  args: {
    percentage: 75,
    size: 100,
    strokeWidth: 16,
    variant: "primary",
  },
};
