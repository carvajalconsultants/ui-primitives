import { useState } from "react";

import { Tag } from "./Tag";
import { TagGroup } from "./TagGroup";

import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Selection } from "react-aria-components";

const meta: Meta<typeof TagGroup> = {
  title: "Components/TagGroup",
  component: TagGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    errorMessage: { control: "text" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TagGroup>;

const amenities = [
  { id: "laundry", name: "Laundry" },
  { id: "fitness", name: "Fitness center" },
  { id: "parking", name: "Parking" },
  { id: "pool", name: "Swimming pool" },
  { id: "breakfast", name: "Breakfast" },
];

const Template: Story = {
  render: (args) => (
    <TagGroup {...args}>
      {amenities.map((amenity) => (
        <Tag key={amenity.id} id={amenity.id}>
          {amenity.name}
        </Tag>
      ))}
    </TagGroup>
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    label: "Amenities",
    selectionMode: "multiple" as const,
  },
};

export const WithDescription: Story = {
  ...Template,
  args: {
    ...Default.args,
    description: "Select the amenities available at this location",
  },
};

export const WithError: Story = {
  ...Template,
  args: {
    ...Default.args,
    errorMessage: "Please select at least one amenity",
  },
};

export const SingleSelection: Story = {
  ...Template,
  args: {
    ...Default.args,
    selectionMode: "single" as const,
  },
};

export const WithManyTags: Story = {
  render: (args) => (
    <TagGroup {...args}>
      {Array.from({ length: 20 }, (_, i) => (
        <Tag key={i} id={`tag-${i}`}>
          {`Tag ${i + 1}`}
        </Tag>
      ))}
    </TagGroup>
  ),
  args: {
    ...Default.args,
    label: "Many Tags",
  },
};

const ControlledSelectionComponent = () => {
  const [selected, setSelected] = useState<Selection>(new Set(["parking"]));
  return (
    <div>
      <TagGroup label="Controlled Selection" selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}>
        {amenities.map((amenity) => (
          <Tag key={amenity.id} id={amenity.id}>
            {amenity.name}
          </Tag>
        ))}
      </TagGroup>
      <p style={{ fontSize: "sm", marginTop: "8px" }}>Current selection: {[...selected].join(", ")}</p>
    </div>
  );
};

export const ControlledSelection: Story = {
  render: () => <ControlledSelectionComponent />,
};

export const WithCustomWidth: Story = {
  ...Template,
  args: {
    ...Default.args,
    label: "Custom Width",
    style: { width: "300px" },
  },
};

export const WithLongLabel: Story = {
  ...Template,
  args: {
    ...Default.args,
    label: "This is a very long label that might wrap to multiple lines and should be handled gracefully",
  },
};
