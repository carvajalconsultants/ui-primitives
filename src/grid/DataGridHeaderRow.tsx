import { Row } from "../table/Row";

import type { Header as THeader, Table as TTable } from "@tanstack/react-table";
import type { ReactNode } from "react";

import type { RowProps } from "../table/Row";

interface DataGridHeaderRowProps<TData> extends Omit<RowProps, "children"> {
  /**
   * The table instance that manages the grid's data and state.
   * Provides access to:
   * - Column definitions and configurations
   * - Sorting/filtering state
   * - Row/cell data access methods
   */
  gridOptions: TTable<TData>;

  /**
   * Render function for customizing how each header cell is displayed.
   * Called for each column in the table.
   *
   * @param cellProps Properties needed to render a header cell
   * @param cellProps.key Unique identifier for the header cell used as the React key
   * @param cellProps.header Header instance containing column info and utilities
   * @returns A React node representing the rendered header cell
   */
  children: (cellProps: { key: string; header: THeader<TData, unknown> }) => ReactNode;
}

/**
 * A component that renders the header rows of a data grid table.
 * This component is responsible for creating the structure of table headers, which are essential
 * for displaying column titles and enabling sorting/filtering functionality.
 *
 * The component works by:
 * 1. Getting all header groups from the table instance
 * 2. Mapping over each header group to create a row
 * 3. Within each row, mapping over the headers to render individual header cells
 *
 * @template TData - The type of data being displayed in the table
 *
 * @param {DataGridHeaderRowProps<TData>} props - The component props
 * @param {TTable<TData>} props.gridOptions - The TanStack Table instance containing header configuration
 * @param {(cellProps: { key: string; header: THeader<TData, unknown> }) => ReactNode} props.children - Function to render each header cell
 * @param {Omit<RowProps, "children">} props... - Additional props passed to the underlying Row component
 *
 * @returns {JSX.Element[]} An array of header rows, where each row contains the rendered header cells
 */
export const DataGridHeaderRow = <TData,>({ gridOptions, children, ...props }: DataGridHeaderRowProps<TData>) =>
  gridOptions.getHeaderGroups().map((headerGroup) => (
    // Create a row for each header group
    <Row key={headerGroup.id} {...props}>
      {/* Map over each header in the group to render individual header cells */}
      {headerGroup.headers.map((header) => children({ key: header.id, header }))}
    </Row>
  ));
