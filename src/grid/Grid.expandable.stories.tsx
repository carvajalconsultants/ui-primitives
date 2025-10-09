import { getCoreRowModel, getExpandedRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { Fragment, useCallback, useState } from "react";

import { css } from "../../styled-system/css";
import { Stack } from "../../styled-system/jsx";
import { Badge } from "../badge/Badge";
import { fetchData, makeData } from "../grid/mock-data/data";
import { useMockInfiniteQuery } from "../test/use-mock-infinite-query";
import { DataGrid } from "./DataGrid";
import { DataGridBody } from "./DataGridBody";
import { DataGridBodyCell } from "./DataGridBodyCell";
import { DataGridBodySpanCell } from "./DataGridBodySpanCell";
import { DataGridExpandableRow } from "./DataGridExpandableRow";
import { DataGridExpandedRow } from "./DataGridExpandedRow";
import { DataGridHeader } from "./DataGridHeader";
import { DataGridHeaderRow } from "./DataGridHeaderRow";
import { DataGridSortableHeaderCell } from "./DataGridSortableHeaderCell";
import { DataGridVirtualizedBody } from "./DataGridVirtualizedBody";
import { TableTitle } from "./mock-data/TableTitle";

import type { Meta, StoryObj } from "@storybook/react";
import type { ColumnDef, SortingState } from "@tanstack/react-table";
import type { UIEvent } from "react";

import type { Person } from "../grid/mock-data/data";

const meta: Meta<typeof DataGrid> = {
  title: "Components/Grid/Expandable",
  component: DataGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

// Mock data
const mockData = makeData(10);

// Define columns
const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "id",
    header: "ID",
    size: 60,
  },
  {
    accessorKey: "firstName",
    header: "First Name",
    cell: ({ row, getValue }) => (
      <div>
        <div className={css({ display: "flex", alignItems: "center", gap: "2" })}>
          <button onClick={() => row.toggleExpanded()} className={css({ cursor: "pointer", padding: "1" })}>
            {row.getIsExpanded() ? "👇" : "👉"}
          </button>
          {getValue() as string}
        </div>
      </div>
    ),
    size: 120,
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
    size: 120,
  },
  {
    accessorKey: "age",
    header: "Age",
    size: 60,
  },
  {
    accessorKey: "visits",
    header: "Visits",
    size: 80,
  },
  {
    accessorKey: "progress",
    header: "Progress",
    size: 100,
    cell: ({ getValue }) => {
      const progress = getValue() as number;
      return `${progress}%`;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    size: 120,
    cell: ({ getValue }) => {
      const status = getValue() as string;
      return <Badge>{status}</Badge>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    size: 180,
    cell: ({ getValue }) => {
      const date = getValue() as Date;
      return date.toLocaleString();
    },
  },
];

const ExpandableTable = () => {
  const [expanded, setExpanded] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: mockData,
    columns,
    state: {
      sorting,
      expanded,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <Stack width="full">
      <TableTitle title="Expandable Table" />

      <DataGrid gridOptions={table}>
        <DataGridHeader>
          <DataGridHeaderRow gridOptions={table}>{({ key, header }) => <DataGridSortableHeaderCell key={key} header={header} />}</DataGridHeaderRow>
        </DataGridHeader>

        <DataGridBody gridOptions={table}>
          {(key, row) => (
            <Fragment key={key}>
              <DataGridExpandableRow row={row}>{({ key, cell }) => <DataGridBodyCell key={key} cell={cell} />}</DataGridExpandableRow>

              <DataGridExpandedRow row={row}>
                <DataGridBodySpanCell row={row}>
                  <div style={{ width: "100%", padding: "12px" }}>Expanded Data ads sad sa dsa dad asdasd asdsad asd asd asd sad sad ad asd asd sa das dasd asd asd sd .</div>
                </DataGridBodySpanCell>
              </DataGridExpandedRow>
            </Fragment>
          )}
        </DataGridBody>
      </DataGrid>
    </Stack>
  );
};

export const Expandable: Story = {
  render: ExpandableTable,
};

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
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: () => true,
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
            <Fragment key={key}>
              <DataGridExpandableRow row={row}>{({ key, cell }) => <DataGridBodyCell key={key} cell={cell} />}</DataGridExpandableRow>

              <DataGridExpandedRow row={row}>
                <DataGridBodySpanCell row={row}>
                  {row.original.id} {row.original.firstName}
                  func: {row.getValue("firstName")}
                  <br />
                  hello
                  <br />
                  Why not
                  <br />
                  Multiple lines
                  <br />
                </DataGridBodySpanCell>
              </DataGridExpandedRow>
            </Fragment>
          )}
        </DataGridVirtualizedBody>
      </DataGrid>
    </Stack>
  );
};

export const Virtualized: Story = {
  render: VirtualizedTable,
};
