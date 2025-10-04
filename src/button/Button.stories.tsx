import { useState } from "react";

import { Spinner } from "../common/Spinner";
import { Button } from "./Button";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
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

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const SingleButton: Story = {
  render: (args) => <Button {...args}>Click Me</Button>,
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

// Variant: primary, Width: fit, Loading
export const PrimaryLoading: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isPending, setPending] = useState(false);

    const handlePress = () => {
      setPending(true);
      setTimeout(() => {
        setPending(false);
      }, 20000);
    };

    return (
      <Button {...args} isPending={isPending} onPress={handlePress}>
        {({ isPending }) => (
          <>
            {isPending && <Spinner size="4" />}
            {isPending ? "Signing In..." : "Sign In"}
          </>
        )}
      </Button>
    );
  },
  args: {
    variant: "primary",
    width: "fit",
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

// Variant: secondary, Width: fit, Loading
export const SecondaryLoading: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isPending, setPending] = useState(false);

    const handlePress = () => {
      setPending(true);
      setTimeout(() => {
        setPending(false);
      }, 2000);
    };

    return (
      <Button {...args} isPending={isPending} onPress={handlePress}>
        {({ isPending }) => (
          <>
            {isPending && <Spinner size="4" />}
            {isPending ? "Loading..." : "Load Data"}
          </>
        )}
      </Button>
    );
  },
  args: {
    variant: "secondary",
    width: "fit",
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

// Variant: ghost, Width: fit, Loading
export const GhostLoading: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isPending, setPending] = useState(false);

    const handlePress = () => {
      setPending(true);
      setTimeout(() => {
        setPending(false);
      }, 2000);
    };

    return (
      <Button {...args} isPending={isPending} onPress={handlePress}>
        {({ isPending }) => (
          <>
            {isPending && <Spinner size="4" />}
            {isPending ? "Refreshing..." : "Refresh"}
          </>
        )}
      </Button>
    );
  },
  args: {
    variant: "ghost",
    width: "fit",
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

// Variant: link, Width: fit, Loading
export const LinkLoading: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isPending, setPending] = useState(false);

    const handlePress = () => {
      setPending(true);
      setTimeout(() => {
        setPending(false);
      }, 2000);
    };

    return (
      <Button {...args} isPending={isPending} onPress={handlePress}>
        {({ isPending }) => (
          <>
            {isPending && <Spinner size="4" />}
            {isPending ? "Loading..." : "View More"}
          </>
        )}
      </Button>
    );
  },
  args: {
    variant: "link",
    width: "fit",
  },
};
