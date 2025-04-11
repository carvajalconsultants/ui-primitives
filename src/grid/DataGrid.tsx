import { memo, useMemo, useRef } from "react";

import { Table } from "../table/Table";
import { TableContext } from "./grid-context";

import type { ReactElement, ReactNode } from "react";
import type { GridOptions } from "src/hooks/use-grid";

import type { TableProps } from "../table/Table";

type DataGridProps<TData> = Omit<TableProps, "children"> & {
  /** The TanStack table instance with all its utilities and state */
  gridOptions: GridOptions<TData>;

  /** Content to display when the grid has no data */
  empty?: ReactNode;

  /** Render function that receives the table instance and returns grid content */
  children: ReactNode;
};

/**
 * A powerful data grid component that combines TanStack Table with a customizable UI.
 * This component handles complex data display scenarios like:
 * - Sorting and filtering large datasets
 * - Virtual scrolling for performance
 * - Custom cell rendering
 * - Empty state handling
 *
 * @template TData - The type of data being displayed in the grid
 * @param props - Component props including data, table options, and render functions
 * @returns A memoized React element representing the data grid
 */
const DataGridMemoed = memo(<TData extends object>({ gridOptions: { fetchMoreOnBottomReached, ...table }, scrollContainerProps, children, empty, ...props }: DataGridProps<TData>) => {
  // Create refs for the table and its container to enable scrolling and DOM manipulation
  const tableRef = useRef<HTMLTableElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoize scroll area props to prevent unnecessary re-renders
  const newScrollContainerProps = useMemo(() => ({ ...scrollContainerProps, ref: containerRef, onScroll: fetchMoreOnBottomReached }), [scrollContainerProps, fetchMoreOnBottomReached]);

  // Show empty state when no data is available
  if (table.getRowCount() === 0) {
    return empty;
  }

  // Render the main table with context for child components
  return (
    <Table elRef={tableRef} {...props} scrollContainerProps={newScrollContainerProps}>
      <TableContext.Provider value={{ tableRef, containerRef }}>{children}</TableContext.Provider>
    </Table>
  );
});

DataGridMemoed.displayName = "DataGrid";

/**
 * Exported DataGrid component with proper type inference.
 * This wrapper ensures the component has the correct type signature for TypeScript.
 */
export const DataGrid = DataGridMemoed as <TData extends object>(props: DataGridProps<TData>) => ReactElement;
