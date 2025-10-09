import { Paragraph } from "../typography/Paragraph";
import { ToggleSectionField } from "./ToggleSectionField";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof ToggleSectionField> = {
  title: "Components/ToggleSectionField",
  component: ToggleSectionField,

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
type Story = StoryObj<typeof ToggleSectionField>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const SingleToggleField: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "350px", marginTop: "30px", gap: "22px", padding: "40px 30px" }}>
      <ToggleSectionField label="A label for the toggleField" {...args}>
        <Paragraph>This section is hidden until the field is toggled ON.</Paragraph>
      </ToggleSectionField>
    </div>
  ),
};

/**
 * Component with a uncontrolled toggle field
 */
export const ToggleSimple = {
  ...SingleToggleField,
  args: {
    //
  },
};

/**
 * Component with a controlled and selected toggle field
 */
export const ToggleSelected = {
  ...SingleToggleField,
  args: {
    isSelected: true,
  },
};

/**
 * Component with a disabled toggle field
 */

export const ToggleDisabled = {
  ...SingleToggleField,
  args: {
    isDisabled: true,
  },
};
