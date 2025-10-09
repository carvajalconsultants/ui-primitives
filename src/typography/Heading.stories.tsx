import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Heading> = {
  title: "Components/Typography/Heading",
  component: Heading,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Heading>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const MultipleParagraphs: Story = {
  render: (args) => (
    <>
      <Heading {...args}>Paragraph #1</Heading>
      <Paragraph>Adinventitias veritatis amita tero caelum praesentium summisse adeptio laborum solium. Aperio aequitas claustrum.</Paragraph>

      <Heading {...args}>Paragraph #2</Heading>
      <Paragraph>Contra minus cervus barba aer casus argentum tam arx autus. Nobis correptius voluntarius admiratio tyrannus talio capto coaegresco depulso bardus.</Paragraph>
    </>
  ),
};

export const Small = {
  ...MultipleParagraphs,
  args: {
    size: "sm",
    color: "primary",
    weight: "bold",
  },
};

export const Medium = {
  ...MultipleParagraphs,
  args: {
    size: "md",
    color: "primary",
    weight: "bold",
  },
};

export const Large = {
  ...MultipleParagraphs,
  args: {
    size: "lg",
    color: "primary",
    weight: "bold",
  },
};
