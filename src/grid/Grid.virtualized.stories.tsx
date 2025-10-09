import { getCoreRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { useCallback, useState } from "react";

import { Stack } from "../../styled-system/jsx";
import { Badge } from "../badge/Badge";
import { fetchData } from "../grid/mock-data/data";
import { useMockInfiniteQuery } from "../test/use-mock-infinite-query";
import { DataGrid } from "./DataGrid";
import { DataGridBodyCell } from "./DataGridBodyCell";
import { DataGridBodyRow } from "./DataGridBodyRow";
import { DataGridHeader } from "./DataGridHeader";
import { DataGridHeaderRow } from "./DataGridHeaderRow";
import { DataGridSortableHeaderCell } from "./DataGridSortableHeaderCell";
import { DataGridVirtualizedBody } from "./DataGridVirtualizedBody";
import { TableTitle } from "./mock-data/TableTitle";

import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ColumnDef, SortingState } from "@tanstack/react-table";
import type { UIEvent } from "react";

import type { Person } from "../grid/mock-data/data";

const meta: Meta<typeof DataGrid> = {
  title: "Components/Grid/Virtualized",
  component: DataGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

// Define columns
const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "id",
    header: "ID",
    // size: 60,
  },
  {
    accessorKey: "firstName",
    header: "First Name",
    // size: 120,
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
    // size: 120,
  },
  {
    accessorKey: "age",
    header: "Age",
    // size: 80,
  },
  {
    accessorKey: "visits",
    header: "Visits",
    // size: 80,
  },
  {
    accessorKey: "progress",
    header: "Progress",
    // size: 80,
    cell: ({ getValue }) => {
      const progress = getValue() as string;
      return `${progress}%`;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    // size: 120,
    cell: ({ getValue }) => {
      const status = getValue() as Person["status"];
      return <Badge>{status}</Badge>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    // size: 200,
    cell: ({ getValue }) => {
      const date = getValue() as Date;
      return date.toLocaleString();
    },
  },
];

const FETCH_SIZE = 500;

const VirtualizedTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const { data, fetchNextPage, hasNextPage, isLoading: isFetching, totalCount, totalFetched } = useMockInfiniteQuery(fetchData, FETCH_SIZE);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  });

  const fetchMoreOnBottomReached = useCallback(
    (e: UIEvent<HTMLDivElement>) => {
      const containerRefElement = e.currentTarget;

      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        if (scrollHeight - scrollTop - clientHeight < 500 && !isFetching && hasNextPage) {
          void fetchNextPage();
        }
      }
    },
    [fetchNextPage, isFetching, hasNextPage]
  );

  return (
    <Stack width="full">
      <TableTitle title="Virtualized Table" description={`(${totalFetched} of ${totalCount} rows fetched)`}>
        {isFetching && <div>Loading more...</div>}
      </TableTitle>

      <DataGrid
        gridOptions={{ ...table, fetchMoreOnBottomReached }}
        scrollContainerProps={{
          style: { height: "600px", width: "768px" },
        }}>
        <DataGridHeader>
          <DataGridHeaderRow gridOptions={table}>{({ key, header }) => <DataGridSortableHeaderCell key={key} header={header} />}</DataGridHeaderRow>
        </DataGridHeader>

        <DataGridVirtualizedBody gridOptions={table}>
          {({ key, row }) => (
            <DataGridBodyRow key={key} row={row}>
              {({ key, cell }) => <DataGridBodyCell key={key} cell={cell} />}
            </DataGridBodyRow>
          )}
        </DataGridVirtualizedBody>
      </DataGrid>
    </Stack>
  );
};

export const Virtualized: Story = {
  render: VirtualizedTable,
};
