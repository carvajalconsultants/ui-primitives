import { Button, Group, Input } from "react-aria-components";

import { NumberField } from "./NumberField";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof NumberField> = {
  title: "Components/NumberField",
  component: NumberField,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NumberField>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const TestField: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "350px", marginTop: "30px", gap: "22px", padding: "40px 30px" }}>
      <NumberField {...args} placeholder="Enter a number" />
      <NumberField label="Quantity" isRequired {...args} />
      <NumberField label="Price" minValue={0} step={0.01} isRequired {...args} />
      <NumberField label="Age" minValue={0} maxValue={120} description="Please enter your age in years. Must be between 0 and 120." isRequired {...args} />
      <NumberField label="Weight" minValue={0} step={0.1} description="Weight in kilograms" isRequired {...args} />
      <NumberField label="Maximum number of participants allowed in this event" minValue={1} maxValue={1000} isRequired {...args} />
      <NumberField
        label="Maximum number of participants allowed in this event"
        minValue={1}
        maxValue={1000}
        description="This number determines the total capacity for the event. Once this limit is reached, no additional registrations will be accepted."
        isRequired
        {...args}
      />
    </div>
  ),
};

export const Default: Story = {
  ...TestField,
};

export const Empty: Story = {
  ...TestField,
  args: {
    placeholder: "Enter quantity",
    validate: () => null,
  },
};

export const Error: Story = {
  ...TestField,
  args: {
    label: "Quantity",
    minValue: 1,
    isInvalid: true,
    validate: () => "Please enter a valid quantity greater than 0.",
  },
};

export const Disabled: Story = {
  ...TestField,
  args: {
    label: "Quantity",
    defaultValue: 10,
    isDisabled: true,
  },
};

export const WithStepperButtons: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "350px", marginTop: "30px", gap: "22px", padding: "40px 30px" }}>
      <NumberField {...args} label="Width" minValue={0} defaultValue={1024}>
        <Group style={{ display: "flex", borderRadius: "4px", border: "1px solid #ccc" }}>
          <Button slot="decrement" style={{ padding: "8px 12px", border: "none", background: "#f0f0f0", cursor: "pointer", borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px" }}>
            -
          </Button>
          <Input style={{ flex: 1, padding: "8px", border: "none", outline: "none", textAlign: "center" }} />
          <Button slot="increment" style={{ padding: "8px 12px", border: "none", background: "#f0f0f0", cursor: "pointer", borderTopRightRadius: "4px", borderBottomRightRadius: "4px" }}>
            +
          </Button>
        </Group>
      </NumberField>

      <NumberField {...args} label="Height" minValue={0} maxValue={1000} step={10} defaultValue={768}>
        <Group style={{ display: "flex", borderRadius: "4px", border: "1px solid #ccc" }}>
          <Button slot="decrement" style={{ padding: "8px 12px", border: "none", background: "#f0f0f0", cursor: "pointer", borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px" }}>
            -
          </Button>
          <Input style={{ flex: 1, padding: "8px", border: "none", outline: "none", textAlign: "center" }} />
          <Button slot="increment" style={{ padding: "8px 12px", border: "none", background: "#f0f0f0", cursor: "pointer", borderTopRightRadius: "4px", borderBottomRightRadius: "4px" }}>
            +
          </Button>
        </Group>
      </NumberField>
    </div>
  ),
};
