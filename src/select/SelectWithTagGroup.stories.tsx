import { useState } from "react";

import { ListBoxItem } from "../listbox/ListBoxItem";
import { SelectWithTagGroup } from "./SelectWithTagGroup";

import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Selection } from "react-aria-components";

const meta: Meta<typeof SelectWithTagGroup> = {
  title: "Components/SelectWithTagGroup",
  component: SelectWithTagGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    description: { control: "text" },
    size: { control: "select", options: ["sm", "md"] },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SelectWithTagGroup>;

const usStateOptions = [
  { id: "AL", name: "Alabama" },
  { id: "AK", name: "Alaska" },
  { id: "AS", name: "American Samoa" },
  { id: "AZ", name: "Arizona" },
  { id: "AR", name: "Arkansas" },
  { id: "CA", name: "California" },
  { id: "CO", name: "Colorado" },
  { id: "CT", name: "Connecticut" },
  { id: "DE", name: "Delaware" },
  { id: "DC", name: "District Of Columbia" },
  { id: "FM", name: "Federated States Of Micronesia" },
  { id: "FL", name: "Florida" },
  { id: "GA", name: "Georgia" },
  { id: "GU", name: "Guam" },
  { id: "HI", name: "Hawaii" },
  { id: "ID", name: "Idaho" },
  { id: "IL", name: "Illinois" },
  { id: "IN", name: "Indiana" },
  { id: "IA", name: "Iowa" },
  { id: "KS", name: "Kansas" },
  { id: "KY", name: "Kentucky" },
  { id: "LA", name: "Louisiana" },
  { id: "ME", name: "Maine" },
  { id: "MH", name: "Marshall Islands" },
  { id: "MD", name: "Maryland" },
  { id: "MA", name: "Massachusetts" },
  { id: "MI", name: "Michigan" },
  { id: "MN", name: "Minnesota" },
  { id: "MS", name: "Mississippi" },
  { id: "MO", name: "Missouri" },
  { id: "MT", name: "Montana" },
  { id: "NE", name: "Nebraska" },
  { id: "NV", name: "Nevada" },
  { id: "NH", name: "New Hampshire" },
  { id: "NJ", name: "New Jersey" },
  { id: "NM", name: "New Mexico" },
  { id: "NY", name: "New York" },
  { id: "NC", name: "North Carolina" },
  { id: "ND", name: "North Dakota" },
  { id: "MP", name: "Northern Mariana Islands" },
  { id: "OH", name: "Ohio" },
  { id: "OK", name: "Oklahoma" },
  { id: "OR", name: "Oregon" },
  { id: "PW", name: "Palau" },
  { id: "PA", name: "Pennsylvania" },
  { id: "PR", name: "Puerto Rico" },
  { id: "RI", name: "Rhode Island" },
  { id: "SC", name: "South Carolina" },
  { id: "SD", name: "South Dakota" },
  { id: "TN", name: "Tennessee" },
  { id: "TX", name: "Texas" },
  { id: "UT", name: "Utah" },
  { id: "VT", name: "Vermont" },
  { id: "VI", name: "Virgin Islands" },
  { id: "VA", name: "Virginia" },
  { id: "WA", name: "Washington" },
  { id: "WV", name: "West Virginia" },
  { id: "WI", name: "Wisconsin" },
  { id: "WY", name: "Wyoming" },
];

const Template: Story = {
  render: (args) => (
    <SelectWithTagGroup {...args} items={usStateOptions} getItemKey={(item) => item.id} getItemText={(item) => item.name}>
      {(state) => <ListBoxItem key={state.id} id={state.id} textValue={state.name} variant="search" />}
    </SelectWithTagGroup>
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    label: "States",
    placeholder: "No selected items",
  },
};

export const WithDescription: Story = {
  ...Template,
  args: {
    ...Default.args,
    description: "Select one or more states from the list",
  },
};

export const WithSelectedItems: Story = {
  ...Template,
  args: {
    ...Default.args,
    defaultSelectedKeys: ["CA", "NY", "TX"],
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
    errorMessage: "Please select at least one state",
  },
};

export const SmallSize: Story = {
  ...Template,
  args: {
    ...Default.args,
    size: "sm",
  },
};

export const WithCustomWidth: Story = {
  ...Template,
  args: {
    ...Default.args,
    style: { width: "400px" },
  },
};

const ControlledSelectionComponent = () => {
  const [selected, setSelected] = useState<Selection>(new Set(["CA", "NY"]));

  return (
    <div>
      <SelectWithTagGroup
        label="Controlled Selection"
        placeholder="No selected items"
        items={usStateOptions}
        selectedKeys={selected}
        onSelectionChange={setSelected}
        getItemKey={(item) => item.id}
        getItemText={(item) => item.name}>
        {(state) => <ListBoxItem key={state.id} id={state.id} textValue={state.name} variant="search" />}
      </SelectWithTagGroup>
      <p style={{ fontSize: "sm", marginTop: "8px" }}>Current selection: {[...selected].join(", ")}</p>
    </div>
  );
};

export const ControlledSelection: Story = {
  render: () => <ControlledSelectionComponent />,
};

export const WithManyItems: Story = {
  render: (args) => (
    <SelectWithTagGroup {...args} items={Array.from({ length: 100 }, (_, i) => ({ id: `item-${i}`, name: `Item ${i + 1}` }))} getItemKey={(item) => item.id} getItemText={(item) => item.name}>
      {(item) => <ListBoxItem key={item.id} id={item.id} textValue={item.name} variant="search" />}
    </SelectWithTagGroup>
  ),
  args: {
    ...Default.args,
    label: "Many Items",
  },
};

