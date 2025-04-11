import { SearchField } from "./SearchField";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SearchField> = {
  title: "Components/SearchField",
  component: SearchField,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchField>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const TestField: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "350px", marginTop: "30px", gap: "22px", padding: "40px 30px" }}>
      <SearchField {...args} placeholder="Field only" />
    </div>
  ),
};

export const Default = {
  ...TestField,
};
