import { ListBoxItem } from "react-aria-components";

import { ListBox } from "./ListBox";

import type { Meta, StoryObj } from "@storybook/react";
import type { CSSProperties } from "react";

const meta: Meta<typeof ListBox> = {
  title: "Components/ListBox",
  component: ListBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

const listItems = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `Item ${i}`,
  description: `Description for item ${i}`,
}));

const style: CSSProperties = {
  border: "1px solid #ccc",
  borderRadius: "4px",
  maxHeight: "400px",
  overflow: "auto",
  width: "300px",
};

const ListBoxTemplate: Story = {
  render: (args: React.ComponentProps<typeof ListBox>) => (
    <ListBox {...args} style={style}>
      {listItems.map((item) => (
        <ListBoxItem
          key={item.id}
          id={item.id.toString()}
          textValue={item.name}
          style={{
            padding: "0.75rem 1rem",
            borderBottom: "1px solid #eee",
            cursor: "pointer",
          }}>
          <div style={{ fontWeight: "bold" }}>{item.name}</div>
          <div style={{ fontSize: "0.8em", color: "#888" }}>{item.description}</div>
        </ListBoxItem>
      ))}
    </ListBox>
  ),
};

export const Default = {
  ...ListBoxTemplate,
  args: {
    "aria-label": "Default ListBox",
  },
};

export const WithSelectionMode = {
  ...ListBoxTemplate,
  args: {
    "aria-label": "ListBox with Single Selection",
    selectionMode: "single",
  },
};

export const MultipleSelection = {
  ...ListBoxTemplate,
  args: {
    "aria-label": "ListBox with Multiple Selection",
    selectionMode: "multiple",
  },
};

export const WithDisabledItems = {
  ...ListBoxTemplate,
  args: {
    "aria-label": "ListBox with Disabled Items",
    disabledKeys: ["2", "4", "6"],
  },
};

export const CustomHeight = {
  ...ListBoxTemplate,
  args: {
    "aria-label": "ListBox with Custom Height",
    style: {
      ...style,
      maxHeight: "200px",
    },
  },
};

export const CustomItemStyling: Story = {
  ...ListBoxTemplate,
  render: (args) => (
    <ListBox {...args} style={style}>
      {listItems.map((item) => (
        <ListBoxItem
          key={item.id}
          id={item.id.toString()}
          textValue={item.name}
          style={{
            padding: "1rem",
            borderBottom: "1px solid #eee",
            cursor: "pointer",
            background: item.id % 2 === 0 ? "#f0f0f0" : "white",
          }}>
          <div style={{ fontWeight: "bold", color: "#333" }}>{item.name}</div>
          <div style={{ fontSize: "0.8em", color: "#666" }}>{item.description}</div>
        </ListBoxItem>
      ))}
    </ListBox>
  ),
  args: {
    "aria-label": "ListBox with Custom Item Styling",
  },
};
