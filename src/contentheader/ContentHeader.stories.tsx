import { ContentHeader } from "./ContentHeader";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ContentHeader> = {
  title: "Components/ContentHeader",
  component: ContentHeader,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    title: {
      defaultValue: "This is a Title",
    },
    description: {
      defaultValue: "This is a description",
    },
  },

  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ContentHeader>;

export const Default: Story = {
  args: {
    title: "Welcome to My Page",
    description: "This is a description of the page. It provides an overview of the content and purpose of the page.",
  },
};

export const WithLongDescription: Story = {
  args: {
    title: "About Us",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor suscipit. Integer vel cursus eros. Nullam ut lacus vel quam suscipit lacinia.",
  },
};

export const WithoutDescription: Story = {
  args: {
    title: "Contact Us",
    description: "",
  },
};
