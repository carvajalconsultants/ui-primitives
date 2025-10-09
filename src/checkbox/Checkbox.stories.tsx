import { Checkbox } from "./Checkbox";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    isDisabled: {
      control: "boolean",
    },
    isIndeterminate: {
      control: "boolean",
    },
    isSelected: {
      control: "boolean",
    },
    isInvalid: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    children: "Default Checkbox",
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    children: "Disabled Checkbox",
  },
};

export const Indeterminate: Story = {
  args: {
    isIndeterminate: true,
    children: "Indeterminate Checkbox",
  },
};

export const Selected: Story = {
  args: {
    isSelected: true,
    children: "Selected Checkbox",
  },
};

export const Invalid: Story = {
  args: {
    isInvalid: true,
    children: "Invalid Checkbox",
  },
};

export const InvalidAndSelected: Story = {
  args: {
    isInvalid: true,
    isSelected: true,
    children: "Invalid and Selected Checkbox",
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Checkbox>Option 1</Checkbox>
      <Checkbox>Option 2</Checkbox>
      <Checkbox>Option 3</Checkbox>
    </div>
  ),
};
