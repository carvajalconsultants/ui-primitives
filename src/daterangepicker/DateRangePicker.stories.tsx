import { useState } from "react";

import { getLocalTimeZone, today } from "@internationalized/date";

import { DateRangePicker } from "./DateRangePicker";

import type { Meta, StoryObj } from "@storybook/react-vite";
import type { DateValue } from "react-aria-components";

const meta: Meta<typeof DateRangePicker> = {
  title: "Components/DateRangePicker",
  component: DateRangePicker,
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

type Story = StoryObj<typeof DateRangePicker>;

// Basic uncontrolled story
export const Default: Story = {
  args: {
    label: "Select Date Range",
  },
};

// Story with description and error
export const WithDescriptionAndError: Story = {
  args: {
    label: "Select Date Range",
    description: "Choose a date range for your report",
    errorMessage: "Please select a valid date range",
  },
};

// Controlled story with state management
const ControlledDateRangePicker = () => {
  const [value, setValue] = useState<{ start: DateValue; end: DateValue } | null | undefined>(null);

  return (
    <div style={{ width: "300px" }}>
      <DateRangePicker label="Controlled Date Range" value={value} onChange={setValue} description="This is a controlled component" />
      <div style={{ marginTop: "1rem", fontSize: "0.875rem" }}>Selected: {value ? `${value.start.toString()} - ${value.end.toString()}` : "No date selected"}</div>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledDateRangePicker />,
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: "Disabled Date Range",
    isDisabled: true,
  },
};

// Read-only state
export const ReadOnly: Story = {
  args: {
    label: "Read Only Date Range",
    isReadOnly: true,
    value: {
      start: today(getLocalTimeZone()).subtract({ days: 6 }),
      end: today(getLocalTimeZone()),
    },
  },
};
