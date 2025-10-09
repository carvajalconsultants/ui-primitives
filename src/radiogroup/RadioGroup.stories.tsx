import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";

import type { Meta, StoryObj } from "@storybook/react";

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
    <RadioGroup>
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2</Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup isDisabled>
      <Radio value="option1">Disabled Option 1</Radio>
      <Radio value="option2">Disabled Option 2</Radio>
      <Radio value="option3">Disabled Option 3</Radio>
    </RadioGroup>
  ),
};

export const Invalid: Story = {
  render: () => (
    <RadioGroup isInvalid>
      <Radio value="option1">Invalid Option 1</Radio>
      <Radio value="option2">Invalid Option 2</Radio>
      <Radio value="option3">Invalid Option 3</Radio>
    </RadioGroup>
  ),
};

export const Required: Story = {
  render: () => (
    <RadioGroup isRequired>
      <Radio value="option1">Required Option 1</Radio>
      <Radio value="option2">Required Option 2</Radio>
      <Radio value="option3">Required Option 3</Radio>
    </RadioGroup>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <RadioGroup defaultValue="option2">
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2 (Default)</Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  ),
};
