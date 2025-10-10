import { flexRender } from "@tanstack/react-table";

import { HStack } from "../../styled-system/jsx";
import { Icon } from "../common/Icon";
import { DataGridHeaderCell } from "./DataGridHeaderCell";

import type { Header as THeader } from "@tanstack/react-table";

import type { HeaderCellProps } from "../table/HeaderCell";

interface DataGridSortableHeaderCellProps<TData> extends HeaderCellProps {
  /**
   * The header configuration from TanStack Table that contains sorting state and handlers
   */
  header: THeader<TData, unknown>;
}

/**
 * A specialized header cell component for data grids that provides built-in sorting functionality.
 * This component is used to create sortable column headers in data tables, allowing users to
 * click on headers to sort the data in ascending or descending order.
 *
 * Features:
 * - Clickable header cells that toggle sorting
 * - Visual indicator (chevron icon) showing sort direction
 * - Smooth animation for sort direction changes
 * - Proper cursor styling to indicate sortable columns
 *
 * @template TData - The type of data being displayed in the grid
 * @param {DataGridSortableHeaderCellProps<TData>} props - Component props
 * @param {THeader<TData, unknown>} props.header - Header configuration from TanStack Table
 * @returns {JSX.Element} A header cell with sorting functionality
 */
export const DataGridSortableHeaderCell = <TData,>({ header, ...props }: DataGridSortableHeaderCellProps<TData>) => (
  <DataGridHeaderCell
    onClick={header.column.getToggleSortingHandler()}
    colSpan={header.colSpan}
    style={{
      width: header.getSize(),
      cursor: header.column.getCanSort() ? "pointer" : "default",
    }}
    {...props}>
    <HStack>
      {/* Render the header content using TanStack Table's flexRender */}
      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}

      {/* Sort direction indicator icon */}
      <Icon
        id="chevron-down"
        // Hide the icon when the column is not being sorted
        display={header.column.getIsSorted() === false ? "none" : "block"}
        // Rotate the icon based on the sorting direction
        style={{ transform: `rotate(${header.column.getIsSorted() === "asc" ? "-180deg" : "0deg"})` }}
        // Add smooth animation for the rotation
        transition="transform"
        transitionDuration="regular"
        transitionTimingFunction="ease-in-out"
      />
    </HStack>
  </DataGridHeaderCell>
);
