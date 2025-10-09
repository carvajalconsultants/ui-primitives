import { Label } from "./Label";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "index"],
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "bold"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

const Template: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "350px", marginTop: "30px", gap: "22px", padding: "40px 30px" }}>
      <Label {...args} />
    </div>
  ),
};

export const Default = {
  ...Template,
  args: {
    children: "Default Label",
  },
};

export const Small = {
  ...Template,
  args: {
    children: "Small Label",
    size: "sm",
  },
};

export const Medium = {
  ...Template,
  args: {
    children: "Medium Label",
    size: "md",
  },
};

export const Large = {
  ...Template,
  args: {
    children: "Large Label",
    size: "lg",
  },
};

export const PrimaryColor = {
  ...Template,
  args: {
    children: "Primary Color Label",
    color: "primary",
  },
};

export const SecondaryColor = {
  ...Template,
  args: {
    children: "Secondary Color Label",
    color: "secondary",
  },
};

export const IndexColor = {
  ...Template,
  args: {
    children: "Index Color Label",
    color: "index",
  },
};

export const RegularWeight = {
  ...Template,
  args: {
    children: "Regular Weight Label",
    weight: "regular",
  },
};

export const MediumWeight = {
  ...Template,
  args: {
    children: "Medium Weight Label",
    weight: "medium",
  },
};

export const BoldWeight = {
  ...Template,
  args: {
    children: "Bold Weight Label",
    weight: "bold",
  },
};

export const CombinedVariants = {
  ...Template,
  args: {
    children: "Combined Variants Label",
    size: "lg",
    color: "primary",
    weight: "bold",
  },
};
