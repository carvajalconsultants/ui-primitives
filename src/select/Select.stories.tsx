import { ListBoxItem } from "../listbox/ListBoxItem";
import { useMockFetchTodos } from "../test/use-mock-fetch-todos";
import { Select } from "./Select";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
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
type Story = StoryObj<typeof Select>;

const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Date" },
  { id: 5, name: "Elderberry" },
];

const Template: Story = {
  render: (args) => (
    <Select {...args}>
      {items.map((item) => (
        <ListBoxItem key={item.id}>{item.name}</ListBoxItem>
      ))}
    </Select>
  ),
};

export const Default = {
  ...Template,
  args: {
    label: "Fruit",
    placeholder: "Select a fruit",
  },
};

export const WithDescription = {
  ...Template,
  args: {
    ...Default.args,
    description: "Choose your favorite fruit",
  },
};

export const Disabled = {
  ...Template,
  args: {
    ...Default.args,
    isDisabled: true,
  },
};

export const Invalid = {
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
    <Select {...args} selectedKey={1}>
      {items.map((item) => (
        <ListBoxItem key={item.id} textValue={item.name}>
          {item.name} - {item.id}
        </ListBoxItem>
      ))}
    </Select>
  ),
};

export const Required = {
  ...Template,
  args: {
    ...Default.args,
    isRequired: true,
  },
};

export const WithManyItems: Story = {
  render: (args) => (
    <Select {...args}>
      {Array.from({ length: 100 }, (_, i) => (
        <ListBoxItem key={i}>{`Item ${i + 1}`}</ListBoxItem>
      ))}
    </Select>
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
    <Select {...args}>
      {items.map((item) => (
        <ListBoxItem key={item.id} textValue={item.name}>
          {item.name} - {item.id}
        </ListBoxItem>
      ))}
    </Select>
  ),
};

export const WithCustomWidth = {
  ...Template,
  args: {
    ...Default.args,
    label: "Custom Width",
    style: { width: "300px" },
  },
};

export const WithLongLabel = {
  ...Template,
  args: {
    ...Default.args,
    label: "This is a very long label that might wrap to multiple lines",
  },
};

export const WithAPIFetch: Story = {
  render: () => <FetchTodos />,
};

const FetchTodos = () => {
  const { todos, isLoading, error } = useMockFetchTodos();

  if (isLoading) return <div>Loading todos...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Select style={{ width: "450px" }} label="Todo Titles" placeholder="Select a Todo" description="Please select a todo item.">
      {todos.map((item) => (
        <ListBoxItem key={item.id}>{item.title}</ListBoxItem>
      ))}
    </Select>
  );
};
