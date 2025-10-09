import { Paragraph } from "../typography/Paragraph";
import { Text } from "../typography/Text";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Text> = {
  title: "Components/Typography/Text",
  component: Text,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const MultipleParagraphs: Story = {
  render: (args) => (
    <>
      <Paragraph>
        Adinventitias veritatis amita tero caelum praesentium summisse adeptio laborum solium. <Text {...args}>Aperio aequitas claustrum.</Text>
      </Paragraph>

      <Paragraph>
        Contra minus cervus barba aer casus argentum tam arx autus. Nobis correptius <Text {...args}>voluntarius admiratio</Text> tyrannus talio capto coaegresco depulso bardus.
      </Paragraph>
    </>
  ),
};

export const ExtraSmall = {
  ...MultipleParagraphs,
  args: {
    size: "xs",
    color: "primary",
    weight: "regular",
  },
};

export const Small = {
  ...MultipleParagraphs,
  args: {
    size: "sm",
    color: "primary",
    weight: "regular",
  },
};

export const Medium = {
  ...MultipleParagraphs,
  args: {
    size: "md",
    color: "primary",
    weight: "regular",
  },
};

export const Large = {
  ...MultipleParagraphs,
  args: {
    size: "lg",
    color: "primary",
    weight: "regular",
  },
};

export const ExtraLarge = {
  ...MultipleParagraphs,
  args: {
    size: "xl",
    color: "primary",
    weight: "regular",
  },
};

export const ExtraExtraLarge = {
  ...MultipleParagraphs,
  args: {
    size: "2xl",
    color: "primary",
    weight: "regular",
  },
};
