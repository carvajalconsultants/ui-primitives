import { useVirtualizer } from "@tanstack/react-virtual";
import { memo } from "react";

import { TableBody } from "../table/TableBody";
import { RowContext, useTableContext } from "./grid-context";

import type { Row as TRow, Table as TTable } from "@tanstack/react-table";
import type { ReactElement, ReactNode } from "react";

import type { TableBodyProps } from "../table/TableBody";

interface DataGridVirtualizedBodyProps<TData> extends Omit<TableBodyProps, "children"> {
  /**
   * Estimated height of each row in pixels. This is used to calculate initial scrollbar dimensions
   * and improve scroll performance. Defaults to 33px if not specified.
   */
  estimateSize?: number;

  /**
   * The Tanstack Table instance that contains the data and row model.
   * This is used to access the rows that need to be virtualized.
   */
  gridOptions: TTable<TData>;

  /**
   * Render function that receives row data and returns the React node for each row.
   * @param props - Object containing:
   *   - key: Unique identifier for the row
   *   - row: The Tanstack Row instance containing the row's data and state
   */
  children: (props: { key: string; row: TRow<TData> }) => ReactNode;
}

/**
 * A virtualized table body component that efficiently renders only the rows visible in the viewport.
 * This component is essential for handling large datasets in tables by preventing performance issues
 * that would occur from rendering thousands of rows at once.
 *
 * It uses Tanstack Virtual for virtualization, which provides smooth scrolling and efficient DOM updates
 * by only rendering rows that are currently visible in the viewport.
 *
 * @param props - The component props
 * @returns A virtualized table body that efficiently renders visible rows
 */
const DataGridVirtualizedBodyMemoed = memo(<TData,>({ gridOptions, estimateSize = 71, children, ...props }: DataGridVirtualizedBodyProps<TData>) => {
  const { containerRef, tableRef } = useTableContext();
  const { rows } = gridOptions.getRowModel();

  const virtualizer = useVirtualizer({
    // Number of items to render outside the visible area for smooth scrolling
    overscan: 10,

    // Total number of rows to virtualize
    count: rows.length,

    // Function to estimate row height for scrollbar calculations
    estimateSize: () => estimateSize,

    // Reference to the scrollable container element
    getScrollElement: () => containerRef.current,

    // Dynamic row height measurement
    measureElement: (element) => {
      if (!element || !tableRef.current || !(typeof window !== "undefined" && !navigator.userAgent.includes("Firefox"))) return estimateSize;

      // Find all record rows and get their total height
      const dataIndex = element.getAttribute("data-index");
      const allRelatedRows = tableRef.current.querySelectorAll(`tr[data-index="${dataIndex}"]`);

      // Calculate total height including margins and padding
      const totalHeight = Array.from(allRelatedRows).reduce((sum, row) => {
        const rect = row.getBoundingClientRect();
        const style = window.getComputedStyle(row);
        const verticalMargin = parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        return sum + rect.height + verticalMargin;
      }, 0);

      return totalHeight || estimateSize;
    },
  });

  return (
    <TableBody style={{ height: `${virtualizer.getTotalSize()}px`, position: "relative" }} {...props}>
      {virtualizer.getVirtualItems().map((virtualRow) => {
        // Get the actual row data for the current virtual row
        const row = rows[virtualRow.index];

        return (
          // Provide row context with virtualization information
          <RowContext.Provider
            key={row.id}
            value={{
              virtualRow,
              props: {
                rowRef: (node) => {
                  if (node) {
                    virtualizer.measureElement(node);
                  }
                },
                style: { position: "absolute", top: 0, left: 0, width: "100%", transform: `translateY(${virtualRow.start}px)` },
              },
            }}>
            {children({ key: row.id, row })}
          </RowContext.Provider>
        );
      })}
    </TableBody>
  );
});

// Set display name for better debugging experience
DataGridVirtualizedBodyMemoed.displayName = "DataGridVirtualizedBody";

// Export the component with proper TypeScript typing
export const DataGridVirtualizedBody = DataGridVirtualizedBodyMemoed as <TData extends object>(props: DataGridVirtualizedBodyProps<TData>) => ReactElement;
