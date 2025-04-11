import { Row } from "../table/Row";
import { useRowContext, useTableContext } from "./grid-context";

import type { Row as TRow } from "@tanstack/react-table";
import type { CSSProperties } from "react";

import type { RowProps } from "../table/Row";

interface DataGridExpandedRowProps<TData> extends RowProps {
  /** The TanStack Table row instance containing the data and state for this row */
  row: TRow<TData>;
}

/**
 * A specialized row component for handling expanded content in a data grid.
 * This component is responsible for positioning and displaying expanded row content
 * in a virtualized table, ensuring proper positioning and visibility of expanded sections.
 *
 * The component handles:
 * - Dynamic positioning of expanded content based on virtual scrolling
 * - Proper height calculations for expanded sections
 * - Visibility toggling based on row expansion state
 *
 * @template TData - The type of data being displayed in the grid
 * @param {DataGridExpandedRowProps<TData>} props - Component props
 * @param {TRow<TData>} props.row - The TanStack Table row instance
 * @param {RowProps} props - Additional row props inherited from base Row component
 * @returns {JSX.Element} A positioned and styled row element for expanded content
 */
export const DataGridExpandedRow = <TData,>({ row, ...props }: DataGridExpandedRowProps<TData>) => {
  // Get the table reference for DOM measurements
  const { tableRef } = useTableContext();
  // Get virtual row positioning data and row-specific props
  const { virtualRow, props: rowProps } = useRowContext();

  // Initialize style object for row positioning
  let style: CSSProperties = {};

  // Apply virtual positioning if the row is using absolute positioning
  // This ensures expanded content appears in the correct location when scrolling
  if (virtualRow) {
    // Find the expandable HTML element and get its height
    const expandableRow = tableRef?.current?.querySelector(`tr[data-index="${row.index}"][data-expandable-row=true]`);
    const totalHeight = expandableRow?.getBoundingClientRect().height ?? 0;

    style = {
      ...rowProps?.style,
      // Position the expanded row below the expandable row
      transform: `translateY(${virtualRow.start + totalHeight}px)`,
      position: "absolute",
      width: "100%",
    };
  }

  // Set display style based on row expansion state
  style = { display: row.getIsExpanded() ? "flex" : "none", ...style };

  return <Row ref={rowProps?.rowRef} data-index={row.index} {...props} data-expanded-row={true} isSelected={row.getIsExpanded()} style={style} />;
};
