import { Avatar } from "./Avatar";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },

  argTypes: {
    rounded: {
      options: ["fit", "full", "medium"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "select",
      },
    },
    borderColor: {
      options: ["primary", "secondary", "none"],
      control: {
        type: "select",
      },
    },
    shadow: {
      options: ["none", "small", "large"],
      control: {
        type: "select",
      },
    },
    objectFit: {
      options: ["cover", "contain", "fill"],
      control: {
        type: "select",
      },
    },
    objectPosition: {
      options: ["center", "top", "bottom", "left", "right"],
      control: {
        type: "select",
      },
    },
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const SingleAvatar: Story = {
  render: (args) => <Avatar {...args} />,
};

const avatarProps = {
  src: "https://images.pexels.com/photos/1843667/pexels-photo-1843667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  alt: "Default avatar",
};

export const Default = {
  ...SingleAvatar,
  args: {
    ...avatarProps,
  },
};

export const CustomSize: Story = {
  args: {
    ...avatarProps,
    size: "large",
  },
};

export const RoundedMedium: Story = {
  args: {
    ...avatarProps,
    rounded: "medium",
  },
};

export const RoundedFull: Story = {
  args: {
    ...avatarProps,
    rounded: "full",
  },
};

export const RoundedFit: Story = {
  args: {
    ...avatarProps,
    rounded: "fit",
  },
};

export const BorderPrimary: Story = {
  args: {
    ...avatarProps,
    borderColor: "primary",
  },
};

export const BorderSecondary: Story = {
  args: {
    ...avatarProps,
    borderColor: "secondary",
  },
};

export const ShadowNone: Story = {
  args: {
    ...avatarProps,
    shadow: "none",
  },
};

export const ShadowSmall: Story = {
  args: {
    ...avatarProps,
    shadow: "small",
  },
};

export const ShadowLarge: Story = {
  args: {
    ...avatarProps,
    shadow: "large",
  },
};

export const ObjectFitCover: Story = {
  args: {
    ...avatarProps,
    objectFit: "cover",
  },
};

export const ObjectFitContain: Story = {
  args: {
    ...avatarProps,
    objectFit: "contain",
  },
};

export const ObjectFitFill: Story = {
  args: {
    ...avatarProps,
    objectFit: "fill",
  },
};

export const ObjectPositionCenter: Story = {
  args: {
    ...avatarProps,
    objectFit: "cover",
    objectPosition: "center",
  },
};

export const ObjectPositionTop: Story = {
  args: {
    ...avatarProps,
    objectFit: "cover",
    objectPosition: "top",
  },
};

export const ObjectPositionBottom: Story = {
  args: {
    ...avatarProps,
    objectFit: "cover",
    objectPosition: "bottom",
  },
};

export const ObjectPositionLeft: Story = {
  args: {
    ...avatarProps,
    objectFit: "cover",
    objectPosition: "left",
  },
};

export const ObjectPositionRight: Story = {
  args: {
    ...avatarProps,
    objectFit: "cover",
    objectPosition: "right",
  },
};

export const Disabled: Story = {
  args: {
    ...avatarProps,
    objectPosition: "top",
    objectFit: "cover",
    isDisabled: true,
  },
};

export const Placeholder: Story = {
  args: {
    alt: "Placeholder avatar",
    objectPosition: "top",
    objectFit: "cover",
  },
};
