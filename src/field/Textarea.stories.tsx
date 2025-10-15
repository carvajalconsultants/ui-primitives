import { TextArea } from "./TextArea";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },

  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "select",
      },
    },
    bordered: {
      control: {
        type: "boolean",
      },
    },
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const SingleTextarea: Story = {
  render: (args) => <TextArea {...args} />,
};

// Size: sm
export const SmallDefault = {
  ...SingleTextarea,
  args: {
    size: "sm",
    label: "Small Textarea",
    placeholder: "Small size textarea",
  },
};

export const SmallRequired = {
  ...SingleTextarea,
  args: {
    size: "sm",
    label: "Small Textarea",
    placeholder: "Small size textarea",
    isRequired: true,
  },
};

export const SmallWithDescription = {
  ...SingleTextarea,
  args: {
    size: "sm",
    label: "Small Textarea",
    placeholder: "Small size textarea",
    description: "This is a small textarea with description",
    isRequired: true,
  },
};

export const SmallError = {
  ...SingleTextarea,
  args: {
    size: "sm",
    label: "Small Textarea",
    placeholder: "Small size textarea",
    isInvalid: true,
    validate: () => "This is an error message.",
  },
};

export const SmallDisabled = {
  ...SingleTextarea,
  args: {
    size: "sm",
    label: "Small Textarea",
    placeholder: "Small size textarea",
    isDisabled: true,
  },
};

export const SmallNoBorder = {
  ...SingleTextarea,
  args: {
    size: "sm",
    label: "Small Textarea",
    placeholder: "Small size textarea without border",
    bordered: false,
  },
};

// Size: md (default)
export const MediumDefault = {
  ...SingleTextarea,
  args: {
    size: "md",
    label: "Medium Textarea",
    placeholder: "Medium size textarea",
  },
};

export const MediumRequired = {
  ...SingleTextarea,
  args: {
    size: "md",
    label: "Medium Textarea",
    placeholder: "Medium size textarea",
    isRequired: true,
  },
};

export const MediumWithDescription = {
  ...SingleTextarea,
  args: {
    size: "md",
    label: "Medium Textarea",
    placeholder: "Medium size textarea",
    description: "This is a medium textarea with description",
    isRequired: true,
  },
};

export const MediumError = {
  ...SingleTextarea,
  args: {
    size: "md",
    label: "Medium Textarea",
    placeholder: "Medium size textarea",
    isInvalid: true,
    validate: () => "This is an error message.",
  },
};

export const MediumDisabled = {
  ...SingleTextarea,
  args: {
    size: "md",
    label: "Medium Textarea",
    placeholder: "Medium size textarea",
    isDisabled: true,
  },
};

export const MediumNoBorder = {
  ...SingleTextarea,
  args: {
    size: "md",
    label: "Medium Textarea",
    placeholder: "Medium size textarea without border",
    bordered: false,
  },
};

export const MediumWithMinMaxRows = {
  ...SingleTextarea,
  args: {
    size: "md",
    label: "Medium Textarea with Row Limits",
    placeholder: "This textarea has min 2 rows and max 6 rows",
    minRows: 2,
    maxRows: 6,
  },
};

// Size: lg
export const LargeDefault = {
  ...SingleTextarea,
  args: {
    size: "lg",
    label: "Large Textarea",
    placeholder: "Large size textarea",
  },
};

export const LargeRequired = {
  ...SingleTextarea,
  args: {
    size: "lg",
    label: "Large Textarea",
    placeholder: "Large size textarea",
    isRequired: true,
  },
};

export const LargeWithDescription = {
  ...SingleTextarea,
  args: {
    size: "lg",
    label: "Large Textarea",
    placeholder: "Large size textarea",
    description: "This is a large textarea with description",
    isRequired: true,
  },
};

export const LargeError = {
  ...SingleTextarea,
  args: {
    size: "lg",
    label: "Large Textarea",
    placeholder: "Large size textarea",
    isInvalid: true,
    validate: () => "This is an error message.",
  },
};

export const LargeDisabled = {
  ...SingleTextarea,
  args: {
    size: "lg",
    label: "Large Textarea",
    placeholder: "Large size textarea",
    isDisabled: true,
  },
};

export const LargeNoBorder = {
  ...SingleTextarea,
  args: {
    size: "lg",
    label: "Large Textarea",
    placeholder: "Large size textarea without border",
    bordered: false,
  },
};

export const LargeWithMinMaxRows = {
  ...SingleTextarea,
  args: {
    size: "lg",
    label: "Large Textarea with Row Limits",
    placeholder: "This textarea has min 3 rows and max 8 rows",
    minRows: 3,
    maxRows: 8,
  },
};

// Legacy stories for backward compatibility
export const Default = {
  ...MediumDefault,
};

export const Disabled = {
  ...MediumDisabled,
};

export const Error = {
  ...MediumError,
};

export const Small = {
  ...SmallDefault,
};

export const Large = {
  ...LargeDefault,
};

export const NoBorder = {
  ...MediumNoBorder,
};

export const WithMinMaxRows = {
  ...MediumWithMinMaxRows,
};
