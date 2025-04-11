import { useCallback } from "react";

import { DataGridBodyRow } from "./DataGridBodyRow";

import type { Row as TRow } from "@tanstack/react-table";

import type { DataGridBodyRowProps } from "./DataGridBodyRow";

interface DataGridExpandableRowProps<TData> extends DataGridBodyRowProps<TData> {
  /**
   * Callback function triggered when a row is expanded.
   * This is commonly used to load additional data or details when a user expands a row.
   * For example, when showing a list of orders, expanding a row might load the order's line items.
   *
   * @param row - The expanded row object containing the record's data and state
   */
  onExpand?: (row: TRow<TData> | undefined) => void;
}

/**
 * A specialized grid row component that enables interactive data tables with expandable rows.
 * This component is designed for scenarios where you need to show additional details or
 * related information when a user clicks on a row, such as:
 * - Master-detail views where clicking a row shows related records (e.g., orders and their line items)
 * - Hierarchical data presentation where parent rows can expand to show child records (e.g., organizational charts)
 * - Complex data tables where additional context is needed for each record (e.g., financial reports with drill-down capabilities)
 *
 * The component handles both the visual expansion state and provides callbacks for
 * loading additional data when rows are expanded, making it perfect for building
 * interactive data exploration interfaces.
 *
 * @template TData - The type of data object being displayed in the row
 *
 * @param props - The component's props
 * @param props.row - The TanStack Table row object containing the record's data and expansion state
 * @param props.onExpand - Optional callback triggered when a row is expanded to load additional data
 * @param props.children - Render prop function that receives cell properties and renders cell content
 *
 * @returns A row component that can expand to show additional content
 */
export const DataGridExpandableRow = <TData,>({ row, onExpand, ...props }: DataGridExpandableRowProps<TData>) => {
  /**
   * Handles the row click event to toggle expansion state and trigger data loading.
   * This function is memoized to prevent unnecessary re-renders.
   */
  const clickHandler = useCallback(() => {
    // Toggle the row's expanded state using TanStack Table's built-in functionality
    // This updates the internal state of the row without triggering a re-render
    row?.toggleExpanded();

    // If expanded, trigger the onExpand callback to load additional data
    // This pattern allows for lazy loading of details only when needed
    onExpand?.(row);
  }, [row, onExpand]);

  return <DataGridBodyRow {...props} row={row} onClick={clickHandler} data-expandable-row={true} isSelected={row?.getIsExpanded()} />;
};
