import { Row } from "../table/Row";
import { useRowContext } from "./grid-context";

import type { Cell as TCell, Row as TRow } from "@tanstack/react-table";
import type { ReactNode } from "react";

import type { RowProps } from "../table/Row";

export interface DataGridBodyRowProps<TData> extends Omit<RowProps, "children"> {
  /** The row data from TanStack Table that contains all cell information */
  row: TRow<TData>;

  /**
   * A render function that determines how each cell in the row should be displayed.
   * This function receives each cell's properties and returns the React elements to render.
   *
   * @param {Object} cellProps - The properties for rendering a cell
   * @param {string} cellProps.key - A unique identifier for the cell, used by React for efficient updates
   * @param {TCell<TData, unknown>} cellProps.cell - The cell data and state from TanStack Table
   * @returns {ReactNode} The rendered content for the cell
   */
  children: (cellProps: { key: string; cell: TCell<TData, unknown> }) => ReactNode;
}

/**
 * A component that renders a single row in a data grid, handling the layout and context
 * for each cell within the row. This component is crucial for building interactive data tables
 * where each row can have its own styling, behavior, and cell rendering logic.
 *
 * The component uses a render prop pattern to allow for flexible cell rendering while
 * maintaining access to the cell's context and data. It also integrates with TanStack Table
 * for data management and row state handling.
 *
 * @template TData - The type of data being displayed in the grid
 * @param {Object} props - The component props
 * @param {TRow<TData>} props.row - The row data from TanStack Table containing cell information
 * @param {Function} props.children - Render function that determines how each cell should be displayed
 * @param {Object} props.children.cellProps - The properties for rendering a cell
 * @param {string} props.children.cellProps.key - Unique identifier for the cell
 * @param {TCell<TData, unknown>} props.children.cellProps.cell - Cell data and state from TanStack Table
 * @returns {JSX.Element} A rendered row component with all its cells
 */
export const DataGridBodyRow = <TData,>({ row, children, ...props }: DataGridBodyRowProps<TData>) => {
  // Retrieve any additional row props from the grid context
  // This allows virtualization for example, to set the position of the row
  const { props: rowProps } = useRowContext();

  return (
    // Render the base Row component with the row's index and any additional props
    // The data-index attribute helps with accessibility and debugging
    <Row data-index={row.index} {...rowProps} {...props}>
      {/* 
        Map through all visible cells in the row and render each one using the provided
        children render prop. This allows for custom cell rendering while maintaining
        access to the cell's data and context.
      */}
      {row.getVisibleCells().map((cell) => children({ key: cell.id, cell }))}
    </Row>
  );
};
