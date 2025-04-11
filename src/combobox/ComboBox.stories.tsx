import { useMockFetchTodos } from "../test/use-mock-fetch-todos";
import { ComboBox } from "./ComboBox";
import { ListItem } from "./ListItem";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ComboBox> = {
  title: "Components/ComboBox",
  component: ComboBox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    description: { control: "text" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ComboBox>;

const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Date" },
  { id: 5, name: "Elderberry" },
];

const Template: Story = {
  render: (args) => (
    <ComboBox {...args}>
      {items.map((item) => (
        <ListItem key={item.id}>{item.name}</ListItem>
      ))}
    </ComboBox>
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    label: "Fruit",
    placeholder: "Select a fruit",
  },
};

export const WithDescription: Story = {
  ...Template,
  args: {
    ...Default.args,
    description: "Choose your favorite fruit",
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    ...Default.args,
    isDisabled: true,
  },
};

export const Invalid: Story = {
  ...Template,
  args: {
    ...Default.args,
    isInvalid: true,
  },
};

export const WithDefaultValue: Story = {
  args: {
    ...Default.args,
    label: "Custom Render",
    placeholder: "Select a fruit",
  },
  render: (args) => (
    <ComboBox {...args} items={items} defaultItems={items} selectedKey={1}>
      {(item) => (
        <ListItem key={item.id} textValue={item.name}>
          {item.name} - {item.id}
        </ListItem>
      )}
    </ComboBox>
  ),
};

export const Required: Story = {
  ...Template,
  args: {
    ...Default.args,
    isRequired: true,
  },
};

export const WithManyItems: Story = {
  render: (args) => (
    <ComboBox {...args}>
      {Array.from({ length: 100 }, (_, i) => (
        <ListItem key={i}>{`Item ${i + 1}`}</ListItem>
      ))}
    </ComboBox>
  ),
  args: {
    ...Default.args,
    label: "Long List",
    placeholder: "Select an item",
  },
};

export const WithCustomRender: Story = {
  args: {
    ...Default.args,
    label: "Custom Render",
    placeholder: "Select a fruit",
  },
  render: (args) => (
    <ComboBox {...args} items={items} defaultItems={items}>
      {(item) => (
        <ListItem textValue={item.name}>
          {item.name} - {item.id}
        </ListItem>
      )}
    </ComboBox>
  ),
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
    label: "This is a very long label that might wrap to multiple lines",
  },
};

const WithAPIFetchDemo = () => {
  const { todos, isLoading, error } = useMockFetchTodos();

  if (isLoading) return <div>Loading todos...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ComboBox style={{ width: "450px" }} label="Todo Titles" placeholder="Search Todos..." description="Please select a todo item." items={todos}>
      {(item) => <ListItem>{item.title}</ListItem>}
    </ComboBox>
  );
};

export const WithAPIFetch: Story = {
  render: () => <WithAPIFetchDemo />,
};
