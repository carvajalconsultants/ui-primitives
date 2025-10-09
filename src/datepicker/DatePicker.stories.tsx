import { useState } from "react";

import { getLocalTimeZone, today } from "@internationalized/date";

import { DatePicker } from "./DatePicker";

import type { Meta, StoryObj } from "@storybook/react-vite";
import type { DateValue } from "react-aria-components";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    errorMessage: { control: "text" },
    isDisabled: { control: "boolean" },
    isReadOnly: { control: "boolean" },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

// Basic uncontrolled story
export const Default: Story = {
  args: {
    label: "Select Date",
  },
};

// Story with description and error
export const WithDescriptionAndError: Story = {
  args: {
    label: "Select Date",
    description: "Choose a date for your appointment",
    errorMessage: "Please select a valid date",
  },
};

// Controlled story with state management
const ControlledDatePicker = () => {
  const [value, setValue] = useState<DateValue | null>(null);

  return (
    <div style={{ width: "300px" }}>
      <DatePicker label="Controlled Date" value={value} onChange={setValue} description="This is a controlled component" />
      <div style={{ marginTop: "1rem", fontSize: "0.875rem" }}>Selected: {value ? value.toString() : "No date selected"}</div>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledDatePicker />,
};

// With default value
export const WithDefaultValue: Story = {
  args: {
    label: "Date with Default Value",
    value: today(getLocalTimeZone()),
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: "Disabled Date",
    isDisabled: true,
  },
};

// Read-only state
export const ReadOnly: Story = {
  args: {
    label: "Read Only Date",
    isReadOnly: true,
    value: today(getLocalTimeZone()),
  },
};
