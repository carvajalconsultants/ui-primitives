import { ListBoxItem } from "../listbox/ListBoxItem";
import { useMockFetchTodos } from "../test/use-mock-fetch-todos";
import { ComboBox } from "./ComboBox";

import type { Meta, StoryObj } from "@storybook/react-vite";

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

interface Fruit {
  id: number;
  name: string;
}

const items: Fruit[] = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Date" },
  { id: 5, name: "Elderberry" },
];

const Template: Story = {
  args: {
    defaultItems: items,
    label: "Fruit",
    placeholder: "Select a fruit",
  },
  render: (args) => (
    <ComboBox {...args}>
      {items.map((item) => (
        <ListBoxItem key={item.id} id={item.id}>
          {item.name}
        </ListBoxItem>
      ))}
    </ComboBox>
  ),
};

export const WithDescription: Story = {
  ...Template,
  args: {
    ...Template.args,
    description: "Choose your favorite fruit",
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    ...Template.args,
    isDisabled: true,
  },
};

export const Invalid: Story = {
  ...Template,
  args: {
    ...Template.args,
    isInvalid: true,
  },
};

export const WithDefaultValue: Story = {
  ...Template,
  args: {
    ...Template.args,
    defaultSelectedKey: 2,
  },
};

export const Required: Story = {
  ...Template,
  args: {
    ...Template.args,
    isRequired: true,
  },
};

export const WithCustomWidth: Story = {
  ...Template,
  args: {
    ...Template.args,
    label: "Custom Width",
    style: { width: "300px" },
  },
};

export const WithLongLabel: Story = {
  ...Template,
  args: {
    ...Template.args,
    label: "This is a very long label that might wrap to multiple lines at least it should wrap",
    style: { width: "150px" },
  },
};

const WithAPIFetchDemo = () => {
  const { todos, isLoading, error } = useMockFetchTodos();

  if (isLoading) return <div>Loading todos...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ComboBox style={{ width: "450px" }} label="Todo Titles" placeholder="Search Todos..." description="Please select a todo item." defaultItems={todos}>
      {(item) => <ListBoxItem>{item.title}</ListBoxItem>}
    </ComboBox>
  );
};

export const WithAPIFetch: Story = {
  render: () => <WithAPIFetchDemo />,
};
