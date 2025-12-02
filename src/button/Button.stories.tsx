import { Icon } from "../common/Icon";
import { Button } from "./Button";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },

  argTypes: {
    variant: {
      options: ["primary", "secondary", "ghost", "outline", "link", "danger"],
      control: {
        type: "select",
      },
    },
    width: {
      options: ["fit", "full"],
      control: {
        type: "select",
      },
    },
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const SingleButton: Story = {
  render: (args) => <Button {...args}>Click Me</Button>,
};

const SingleButtonWithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <Icon id="search" size="4" />
      Search
    </Button>
  ),
};

const SingleButtonWithLargeIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <Icon id="search" size="5" />
      Search
    </Button>
  ),
};

export const PrimaryFit = {
  ...SingleButton,
  args: {
    variant: "primary",
    width: "fit",
  },
};

export const PrimaryFitFocused = {
  ...SingleButton,
  args: {
    variant: "primary",
    width: "fit",
    isFocused: true,
  },
};

export const PrimaryFitActive = {
  ...SingleButton,
  args: {
    variant: "primary",
    width: "fit",
    isActive: true,
  },
};

export const PrimaryFitDisabled = {
  ...SingleButton,
  args: {
    variant: "primary",
    width: "fit",
    isDisabled: true,
  },
};

// Variant: primary, Width: full
export const PrimaryFull = {
  ...SingleButton,
  args: {
    variant: "primary",
  },
};

export const PrimaryFullFocused = {
  ...SingleButton,
  args: {
    variant: "primary",
    isFocused: true,
  },
};

export const PrimaryFullActive = {
  ...SingleButton,
  args: {
    variant: "primary",
    isActive: true,
  },
};

export const PrimaryFullDisabled = {
  ...SingleButton,
  args: {
    variant: "primary",
    isDisabled: true,
  },
};

export const PrimaryFullWithIcon = {
  ...SingleButtonWithIcon,
  args: {
    variant: "primary",
  },
};

export const PrimaryFullWithLargeIcon = {
  ...SingleButtonWithLargeIcon,
  args: {
    variant: "primary",
  },
};

// Variant: secondary, Width: fit
export const SecondaryFit = {
  ...SingleButton,
  args: {
    variant: "secondary",
    width: "fit",
  },
};

export const SecondaryFitFocused = {
  ...SingleButton,
  args: {
    variant: "secondary",
    width: "fit",
    isFocused: true,
  },
};

export const SecondaryFitActive = {
  ...SingleButton,
  args: {
    variant: "secondary",
    width: "fit",
    isActive: true,
  },
};

export const SecondaryFitDisabled = {
  ...SingleButton,
  args: {
    variant: "secondary",
    width: "fit",
    isDisabled: true,
  },
};

export const SecondaryFitWithIcon = {
  ...SingleButtonWithIcon,
  args: {
    variant: "secondary",
    width: "fit",
  },
};

export const SecondaryFitWithLargeIcon = {
  ...SingleButtonWithLargeIcon,
  args: {
    variant: "secondary",
    width: "fit",
  },
};

// Variant: secondary, Width: full
export const SecondaryFull = {
  ...SingleButton,
  args: {
    variant: "secondary",
  },
};

export const SecondaryFullFocused = {
  ...SingleButton,
  args: {
    variant: "secondary",
    isFocused: true,
  },
};

export const SecondaryFullActive = {
  ...SingleButton,
  args: {
    variant: "secondary",
    isActive: true,
  },
};

export const SecondaryFullDisabled = {
  ...SingleButton,
  args: {
    variant: "secondary",
    isDisabled: true,
  },
};

export const SecondaryFullWithIcon = {
  ...SingleButtonWithIcon,
  args: {
    variant: "secondary",
  },
};

export const SecondaryFullWithLargeIcon = {
  ...SingleButtonWithLargeIcon,
  args: {
    variant: "secondary",
  },
};

// Variant: ghost, Width: fit
export const GhostFit = {
  ...SingleButton,
  args: {
    variant: "ghost",
    width: "fit",
  },
};

export const GhostFitFocused = {
  ...SingleButton,
  args: {
    variant: "ghost",
    width: "fit",
    isFocused: true,
  },
};

export const GhostFitActive = {
  ...SingleButton,
  args: {
    variant: "ghost",
    width: "fit",
    isActive: true,
  },
};

export const GhostFitDisabled = {
  ...SingleButton,
  args: {
    variant: "ghost",
    width: "fit",
    isDisabled: true,
  },
};

export const GhostFitWithIcon = {
  ...SingleButtonWithIcon,
  args: {
    variant: "ghost",
    width: "fit",
  },
};

export const GhostFitWithLargeIcon = {
  ...SingleButtonWithLargeIcon,
  args: {
    variant: "ghost",
    width: "fit",
  },
};

// Variant: ghost, Width: full
export const GhostFull = {
  ...SingleButton,
  args: {
    variant: "ghost",
  },
};

export const GhostFullFocused = {
  ...SingleButton,
  args: {
    variant: "ghost",
    isFocused: true,
  },
};

export const GhostFullActive = {
  ...SingleButton,
  args: {
    variant: "ghost",
    isActive: true,
  },
};

export const GhostFullDisabled = {
  ...SingleButton,
  args: {
    variant: "ghost",
    isDisabled: true,
  },
};

export const GhostFullWithIcon = {
  ...SingleButtonWithIcon,
  args: {
    variant: "ghost",
  },
};

export const GhostFullWithLargeIcon = {
  ...SingleButtonWithLargeIcon,
  args: {
    variant: "ghost",
  },
};

// Variant: outline, Width: fit
export const OutlineFit = {
  ...SingleButton,
  args: {
    variant: "outline",
    width: "fit",
  },
};

export const OutlineFitFocused = {
  ...SingleButton,
  args: {
    variant: "outline",
    width: "fit",
    isFocused: true,
  },
};

export const OutlineFitActive = {
  ...SingleButton,
  args: {
    variant: "outline",
    width: "fit",
    isActive: true,
  },
};

export const OutlineFitDisabled = {
  ...SingleButton,
  args: {
    variant: "outline",
    width: "fit",
    isDisabled: true,
  },
};

export const OutlineFitWithIcon = {
  ...SingleButtonWithIcon,
  args: {
    variant: "outline",
    width: "fit",
  },
};

export const OutlineFitWithLargeIcon = {
  ...SingleButtonWithLargeIcon,
  args: {
    variant: "outline",
    width: "fit",
  },
};

// Variant: outline, Width: full
export const OutlineFull = {
  ...SingleButton,
  args: {
    variant: "outline",
  },
};

export const OutlineFullFocused = {
  ...SingleButton,
  args: {
    variant: "outline",
    isFocused: true,
  },
};

export const OutlineFullActive = {
  ...SingleButton,
  args: {
    variant: "outline",
    isActive: true,
  },
};

export const OutlineFullDisabled = {
  ...SingleButton,
  args: {
    variant: "outline",
    isDisabled: true,
  },
};

export const OutlineFullWithIcon = {
  ...SingleButtonWithIcon,
  args: {
    variant: "outline",
  },
};

export const OutlineFullWithLargeIcon = {
  ...SingleButtonWithLargeIcon,
  args: {
    variant: "outline",
  },
};

// Variant: link, Width: fit
export const LinkFit = {
  ...SingleButton,
  args: {
    variant: "link",
    width: "fit",
  },
};

export const LinkFitFocused = {
  ...SingleButton,
  args: {
    variant: "link",
    width: "fit",
    isFocused: true,
  },
};

export const LinkFitActive = {
  ...SingleButton,
  args: {
    variant: "link",
    width: "fit",
    isActive: true,
  },
};

export const LinkFitDisabled = {
  ...SingleButton,
  args: {
    variant: "link",
    width: "fit",
    isDisabled: true,
  },
};

export const LinkFitWithIcon = {
  ...SingleButtonWithIcon,
  args: {
    variant: "link",
    width: "fit",
  },
};

export const LinkFitWithLargeIcon = {
  ...SingleButtonWithLargeIcon,
  args: {
    variant: "link",
    width: "fit",
  },
};

// Variant: link, Width: full
export const LinkFull = {
  ...SingleButton,
  args: {
    variant: "link",
  },
};

export const LinkFullFocused = {
  ...SingleButton,
  args: {
    variant: "link",
    isFocused: true,
  },
};

export const LinkFullActive = {
  ...SingleButton,
  args: {
    variant: "link",
    isActive: true,
  },
};

export const LinkFullDisabled = {
  ...SingleButton,
  args: {
    variant: "link",
    isDisabled: true,
  },
};

export const LinkFullWithIcon = {
  ...SingleButtonWithIcon,
  args: {
    variant: "link",
  },
};

export const LinkFullWithLargeIcon = {
  ...SingleButtonWithLargeIcon,
  args: {
    variant: "link",
  },
};

// Variant: danger, Width: fit
export const DangerFit = {
  ...SingleButton,
  args: {
    variant: "danger",
    width: "fit",
  },
};

export const DangerFitFocused = {
  ...SingleButton,
  args: {
    variant: "danger",
    width: "fit",
    isFocused: true,
  },
};

export const DangerFitActive = {
  ...SingleButton,
  args: {
    variant: "danger",
    width: "fit",
    isActive: true,
  },
};

export const DangerFitDisabled = {
  ...SingleButton,
  args: {
    variant: "danger",
    width: "fit",
    isDisabled: true,
  },
};

export const DangerFitWithIcon = {
  ...SingleButtonWithIcon,
  args: {
    variant: "danger",
    width: "fit",
  },
};

export const DangerFitWithLargeIcon = {
  ...SingleButtonWithLargeIcon,
  args: {
    variant: "danger",
    width: "fit",
  },
};

// Variant: danger, Width: full
export const DangerFull = {
  ...SingleButton,
  args: {
    variant: "danger",
  },
};

export const DangerFullFocused = {
  ...SingleButton,
  args: {
    variant: "danger",
    isFocused: true,
  },
};

export const DangerFullActive = {
  ...SingleButton,
  args: {
    variant: "danger",
    isActive: true,
  },
};

export const DangerFullDisabled = {
  ...SingleButton,
  args: {
    variant: "danger",
    isDisabled: true,
  },
};

export const DangerFullWithIcon = {
  ...SingleButtonWithIcon,
  args: {
    variant: "danger",
  },
};

export const DangerFullWithLargeIcon = {
  ...SingleButtonWithLargeIcon,
  args: {
    variant: "danger",
  },
};
