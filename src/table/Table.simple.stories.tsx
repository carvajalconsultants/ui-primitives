import { Cell } from "./Cell";
import { HeaderCell } from "./HeaderCell";
import { Row } from "./Row";
import { Table } from "./Table";
import { TableBody } from "./TableBody";
import { TableFooter } from "./TableFooter";
import { TableHeader } from "./TableHeader";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Table> = {
  title: "Components/Table/Simple",
  component: Table,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

const amenities = Array.from({ length: 205 }, (_, index) => ({
  id: `amenity-${index}`,
  name: `Test Amenity ${index}`,
}));

export const Default: Story = {
  render: (args) => (
    <Table {...args} scrollContainerProps={{ style: { width: "786px", height: "300px" } }}>
      <TableHeader>
        <Row>
          <HeaderCell>Tag</HeaderCell>
          <HeaderCell>Amenity</HeaderCell>
        </Row>
      </TableHeader>
      <TableBody>
        {amenities.map((amenity) => (
          <Row key={amenity.id}>
            <Cell>{amenity.id}</Cell>
            <Cell>{amenity.name}</Cell>
          </Row>
        ))}
      </TableBody>

      <TableFooter>
        <Row>
          <Cell>Total</Cell>
          <Cell>{amenities.length}</Cell>
        </Row>
      </TableFooter>
    </Table>
  ),
  args: {},
};
