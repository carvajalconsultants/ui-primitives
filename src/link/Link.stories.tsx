import { Link } from "./Link";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,

  parameters: {
    layout: "centered",
  },

  argTypes: {
    variant: {
      options: ["primary", "secondary", "ghost", "link"],
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

  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Link>;

const SingleLink: Story = {
  render: (args) => (
    <Link href="#" {...args}>
      Click Me
    </Link>
  ),
};

// Variant: primary, Width: fit
export const PrimaryFit = {
  ...SingleLink,
  args: {
    variant: "primary",
    width: "fit",
  },
};

export const PrimaryFitFocused = {
  ...SingleLink,
  args: {
    variant: "primary",
    width: "fit",
    isFocused: true,
  },
};

export const PrimaryFitActive = {
  ...SingleLink,
  args: {
    variant: "primary",
    width: "fit",
    isActive: true,
  },
};

export const PrimaryFitDisabled = {
  ...SingleLink,
  args: {
    variant: "primary",
    width: "fit",
    isDisabled: true,
  },
};

// Variant: primary, Width: full
export const PrimaryFull = {
  ...SingleLink,
  args: {
    variant: "primary",
  },
};

export const PrimaryFullFocused = {
  ...SingleLink,
  args: {
    variant: "primary",
    isFocused: true,
  },
};

export const PrimaryFullActive = {
  ...SingleLink,
  args: {
    variant: "primary",
    isActive: true,
  },
};

export const PrimaryFullDisabled = {
  ...SingleLink,
  args: {
    variant: "primary",
    isDisabled: true,
  },
};

// Variant: secondary, Width: fit
export const SecondaryFit = {
  ...SingleLink,
  args: {
    variant: "secondary",
    width: "fit",
  },
};

export const SecondaryFitFocused = {
  ...SingleLink,
  args: {
    variant: "secondary",
    width: "fit",
    isFocused: true,
  },
};

export const SecondaryFitActive = {
  ...SingleLink,
  args: {
    variant: "secondary",
    width: "fit",
    isActive: true,
  },
};

export const SecondaryFitDisabled = {
  ...SingleLink,
  args: {
    variant: "secondary",
    width: "fit",
    isDisabled: true,
  },
};

// Variant: secondary, Width: full
export const SecondaryFull = {
  ...SingleLink,
  args: {
    variant: "secondary",
  },
};

export const SecondaryFullFocused = {
  ...SingleLink,
  args: {
    variant: "secondary",
    isFocused: true,
  },
};

export const SecondaryFullActive = {
  ...SingleLink,
  args: {
    variant: "secondary",
    isActive: true,
  },
};

export const SecondaryFullDisabled = {
  ...SingleLink,
  args: {
    variant: "secondary",
    isDisabled: true,
  },
};

// Variant: ghost, Width: fit
export const GhostFit = {
  ...SingleLink,
  args: {
    variant: "ghost",
    width: "fit",
  },
};

export const GhostFitFocused = {
  ...SingleLink,
  args: {
    variant: "ghost",
    width: "fit",
    isFocused: true,
  },
};

export const GhostFitActive = {
  ...SingleLink,
  args: {
    variant: "ghost",
    width: "fit",
    isActive: true,
  },
};

export const GhostFitDisabled = {
  ...SingleLink,
  args: {
    variant: "ghost",
    width: "fit",
    isDisabled: true,
  },
};

// Variant: ghost, Width: full
export const GhostFull = {
  ...SingleLink,
  args: {
    variant: "ghost",
  },
};

export const GhostFullFocused = {
  ...SingleLink,
  args: {
    variant: "ghost",
    isFocused: true,
  },
};

export const GhostFullActive = {
  ...SingleLink,
  args: {
    variant: "ghost",
    isActive: true,
  },
};

export const GhostFullDisabled = {
  ...SingleLink,
  args: {
    variant: "ghost",
    isDisabled: true,
  },
};

// Variant: link, Width: fit
export const LinkFit = {
  ...SingleLink,
  args: {
    variant: "link",
    width: "fit",
  },
};

export const LinkFitFocused = {
  ...SingleLink,
  args: {
    variant: "link",
    width: "fit",
    isFocused: true,
  },
};

export const LinkFitActive = {
  ...SingleLink,
  args: {
    variant: "link",
    width: "fit",
    isActive: true,
  },
};

export const LinkFitDisabled = {
  ...SingleLink,
  args: {
    variant: "link",
    width: "fit",
    isDisabled: true,
  },
};

// Variant: link, Width: full
export const LinkFull = {
  ...SingleLink,
  args: {
    variant: "link",
  },
};

export const LinkFullFocused = {
  ...SingleLink,
  args: {
    variant: "link",
    isFocused: true,
  },
};

export const LinkFullActive = {
  ...SingleLink,
  args: {
    variant: "link",
    isActive: true,
  },
};

export const LinkFullDisabled = {
  ...SingleLink,
  args: {
    variant: "link",
    isDisabled: true,
  },
};
