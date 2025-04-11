import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";

import { Stack } from "../../styled-system/jsx";
import { Badge } from "../badge/Badge";
import { DataGrid } from "./DataGrid";
import { DataGridBody } from "./DataGridBody";
import { DataGridBodyCell } from "./DataGridBodyCell";
import { DataGridBodyRow } from "./DataGridBodyRow";
import { DataGridHeader } from "./DataGridHeader";
import { DataGridHeaderRow } from "./DataGridHeaderRow";
import { DataGridSortableHeaderCell } from "./DataGridSortableHeaderCell";
import { TableTitle } from "./mock-data/TableTitle";

import type { Meta, StoryObj } from "@storybook/react";
import type { ColumnDef, ColumnFiltersState, SortingState, VisibilityState } from "@tanstack/react-table";

import type { Person } from "./mock-data/data";

const meta: Meta<typeof DataGrid> = {
  title: "Components/Grid/Simple",
  component: DataGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

// Mock data
const mockData: Person[] = [
  {
    id: 5,
    firstName: "Mike",
    lastName: "Brown",
    age: 35,
    visits: 12,
    status: "complicated",
    progress: 40,
    createdAt: new Date(),
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    age: 45,
    visits: 15,
    status: "single",
    progress: 90,
    createdAt: new Date(),
  },
  {
    id: 7,
    firstName: "Alex",
    lastName: "Miller",
    age: 29,
    visits: 7,
    status: "relationship",
    progress: 70,
    createdAt: new Date(),
  },
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    visits: 10,
    status: "relationship",
    progress: 50,
    createdAt: new Date(),
  },
  {
    id: 6,
    firstName: "Emily",
    lastName: "Davis",
    age: 32,
    visits: 20,
    status: "single",
    progress: 85,
    createdAt: new Date(),
  },
  {
    id: 4,
    firstName: "Sarah",
    lastName: "Wilson",
    age: 28,
    visits: 8,
    status: "relationship",
    progress: 65,
    createdAt: new Date(),
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    visits: 5,
    status: "complicated",
    progress: 75,
    createdAt: new Date(),
  },
];

// Define columns
const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "id",
    header: "ID",
    // size: 60,
    maxSize: 60,
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "age",
    header: "Age",
    // size: 50,
  },
  {
    accessorKey: "visits",
    header: "Visits",
    // size: 50,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue() as string;
      return <Badge>{status}</Badge>;
    },
  },
  {
    accessorKey: "progress",
    header: "Progress",
    // size: 80,
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ getValue }) => new Date(getValue() as string).toLocaleString(),
    // size: 200,
  },
];

const SimpleTable = () => {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const gridOptions = useReactTable<Person>({
    columns,
    data: mockData,
    state: {
      sorting,
      columnVisibility,
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
  });

  return (
    <Stack width="full">
      <TableTitle title="Simple Table" />

      <DataGrid scrollContainerProps={{ style: { width: "768px" } }} gridOptions={gridOptions}>
        <DataGridHeader>
          <DataGridHeaderRow gridOptions={gridOptions}>{({ key, header }) => <DataGridSortableHeaderCell key={key} header={header} />}</DataGridHeaderRow>
        </DataGridHeader>
        <DataGridBody gridOptions={gridOptions}>
          {(key, row) => (
            <DataGridBodyRow key={key} row={row}>
              {({ key, cell }) => <DataGridBodyCell key={key} cell={cell} />}
            </DataGridBodyRow>
          )}
        </DataGridBody>
      </DataGrid>
    </Stack>
  );
};

export const Simple: Story = {
  render: SimpleTable,
};
