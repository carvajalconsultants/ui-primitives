import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    isDisabled: {
      control: "boolean",
    },
    isInvalid: {
      control: "boolean",
    },
    isRequired: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup aria-label="Options">
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2</Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup isDisabled aria-label="Disabled options">
      <Radio value="option1">Disabled Option 1</Radio>
      <Radio value="option2">Disabled Option 2</Radio>
      <Radio value="option3">Disabled Option 3</Radio>
    </RadioGroup>
  ),
};

export const Invalid: Story = {
  render: () => (
    <RadioGroup isInvalid aria-label="Invalid options">
      <Radio value="option1">Invalid Option 1</Radio>
      <Radio value="option2">Invalid Option 2</Radio>
      <Radio value="option3">Invalid Option 3</Radio>
    </RadioGroup>
  ),
};

export const Required: Story = {
  render: () => (
    <RadioGroup isRequired aria-label="Required options">
      <Radio value="option1">Required Option 1</Radio>
      <Radio value="option2">Required Option 2</Radio>
      <Radio value="option3">Required Option 3</Radio>
    </RadioGroup>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <RadioGroup defaultValue="option2" aria-label="Options with default value">
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2 (Default)</Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  ),
};
