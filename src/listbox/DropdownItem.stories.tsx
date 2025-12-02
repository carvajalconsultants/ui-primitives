import { useState } from "react";

import { DropdownItem } from "./DropdownItem";
import { DropdownSection } from "./DropdownSection";
import { ListBox } from "./ListBox";

import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Selection } from "react-aria-components";

const meta: Meta<typeof DropdownItem> = {
  title: "Components/DropdownItem",
  component: DropdownItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownItem>;

const items = [
  { id: "1", name: "Apple" },
  { id: "2", name: "Banana" },
  { id: "3", name: "Cherry" },
  { id: "4", name: "Date" },
  { id: "5", name: "Elderberry" },
];

const Template: Story = {
  render: (args) => (
    <div style={{ width: "200px", border: "1px solid #ccc", borderRadius: "8px", padding: "4px" }}>
      <ListBox>
        {items.map((item) => (
          <DropdownItem key={item.id} id={item.id} textValue={item.name} {...args}>
            {item.name}
          </DropdownItem>
        ))}
      </ListBox>
    </div>
  ),
};

export const Default: Story = {
  ...Template,
};

export const WithSelectedItems: Story = {
  render: () => (
    <div style={{ width: "200px", border: "1px solid #ccc", borderRadius: "8px", padding: "4px" }}>
      <ListBox defaultSelectedKeys={["1", "3"]} selectionMode="multiple">
        {items.map((item) => (
          <DropdownItem key={item.id} id={item.id} textValue={item.name}>
            {item.name}
          </DropdownItem>
        ))}
      </ListBox>
    </div>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <div style={{ width: "200px", border: "1px solid #ccc", borderRadius: "8px", padding: "4px" }}>
      <ListBox>
        {items.map((item, index) => (
          <DropdownItem key={item.id} id={item.id} textValue={item.name} isDisabled={index === 2}>
            {item.name}
          </DropdownItem>
        ))}
      </ListBox>
    </div>
  ),
};

export const WithSections: Story = {
  render: () => {
    const fruits = [
      { id: "apple", name: "Apple" },
      { id: "banana", name: "Banana" },
      { id: "cherry", name: "Cherry" },
    ];

    const vegetables = [
      { id: "carrot", name: "Carrot" },
      { id: "broccoli", name: "Broccoli" },
      { id: "spinach", name: "Spinach" },
    ];

    return (
      <div style={{ width: "200px", border: "1px solid #ccc", borderRadius: "8px", padding: "4px" }}>
        <ListBox>
          <DropdownSection title="Fruits" items={fruits}>
            {(item) => (
              <DropdownItem key={item.id} id={item.id} textValue={item.name}>
                {item.name}
              </DropdownItem>
            )}
          </DropdownSection>
          <DropdownSection title="Vegetables" items={vegetables}>
            {(item) => (
              <DropdownItem key={item.id} id={item.id} textValue={item.name}>
                {item.name}
              </DropdownItem>
            )}
          </DropdownSection>
        </ListBox>
      </div>
    );
  },
};

export const ControlledSelection: Story = {
  render: () => {
    const ControlledComponent = () => {
      const [selected, setSelected] = useState<Selection>(new Set(["1", "3"]));

      return (
        <div style={{ width: "200px", border: "1px solid #ccc", borderRadius: "8px", padding: "4px" }}>
          <ListBox selectedKeys={selected} onSelectionChange={setSelected} selectionMode="multiple">
            {items.map((item) => (
              <DropdownItem key={item.id} id={item.id} textValue={item.name}>
                {item.name}
              </DropdownItem>
            ))}
          </ListBox>
          <p style={{ fontSize: "sm", marginTop: "8px" }}>Selected: {[...selected].join(", ")}</p>
        </div>
      );
    };

    return <ControlledComponent />;
  },
};
