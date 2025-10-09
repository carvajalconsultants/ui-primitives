import { SwitchField } from "./SwitchField";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof SwitchField> = {
  title: "Components/SwitchField",
  component: SwitchField,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },

  argTypes: {
    onChange: { action: "onChange" },
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SwitchField>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const SingleSwitchField: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "350px", marginTop: "30px", gap: "22px", padding: "40px 30px" }}>
      <SwitchField label="Change Me" description="A short description." {...args} />
      <SwitchField label="Change Me" description="This is another very long description to see how it overflows with the rest of the field." {...args} />
      <SwitchField label="A very long label to see how it overflows" description="This is another very long description to see how it overflows with the rest of the field." {...args} />
    </div>
  ),
};

export const UncontrolledSwith = {
  ...SingleSwitchField,
  args: {
    //
  },
};

export const SelectedSwitch = {
  ...SingleSwitchField,
  args: {
    isSelected: true,
  },
};

export const UnselectedSwitch = {
  ...SingleSwitchField,
  args: {
    isSelected: false,
  },
};

export const DisabledSwitch = {
  ...SingleSwitchField,
  args: {
    isDisabled: true,
    isSelected: true,
  },
};
