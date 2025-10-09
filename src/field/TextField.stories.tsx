import { TextField } from "./TextField";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextField>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const TestField: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "350px", marginTop: "30px", gap: "22px", padding: "40px 30px" }}>
      <TextField {...args} placeholder="Field only" />
      <TextField isRequired {...args} />
      <TextField label="Short label" isRequired {...args} />
      <TextField label="Short label" description="This is another very long description to see how it overflows with the rest of the field." isRequired {...args} />
      <TextField label="Short label" description="Short description" isRequired {...args} />
      <TextField label="A very long label to see how it overflows" isRequired {...args} />
      <TextField label="A very long label to see how it overflows" description="This is another very long description to see how it overflows with the rest of the field." isRequired {...args} />{" "}
    </div>
  ),
};

export const Default: Story = {
  ...TestField,
};

export const Empty: Story = {
  ...TestField,
  args: {
    placeholder: "Placeholder on empty field",
    validate: () => null,
  },
};

export const Error: Story = {
  ...TestField,
  args: {
    isInvalid: true,
    validate: () => "This is the error message.",
  },
};

export const Disabled: Story = {
  ...TestField,
  args: {
    isDisabled: true,
  },
};
