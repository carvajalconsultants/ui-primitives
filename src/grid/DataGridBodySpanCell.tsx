import { Cell } from "../table/Cell";

import type { Row as TRow } from "@tanstack/react-table";

import type { CellProps } from "../table/Cell";

interface DataGridBodySpanCellProps<TData> extends CellProps {
  /**
   * The row object from TanStack Table that contains all cells in the current row.
   * Used to calculate the total number of columns for spanning.
   */
  row: TRow<TData>;
}

/**
 * A specialized cell component that spans across all columns in a data grid row.
 * This component is typically used for empty states, loading states, or when you need
 * to display a message that should take up the full width of the grid.
 *
 * @template TData - The type of data being displayed in the grid
 * @param {DataGridBodySpanCellProps<TData>} props - Component props
 * @param {TRow<TData>} props.row - The row object containing all cells
 * @param {CellProps} props - Additional cell properties inherited from CellProps
 * @returns {JSX.Element} A cell that spans the entire width of the grid row
 *
 * @example
 * // Used in a data grid to show a "No data" message
 * <DataGridBodySpanCell row={row}>
 *   No data available
 * </DataGridBodySpanCell>
 */
export const DataGridBodySpanCell = <TData,>({ row, ...props }: DataGridBodySpanCellProps<TData>) => (
  // Spread the remaining props to the Cell component
  // Calculate colSpan by getting the total number of cells in the row
  // This ensures the cell spans across all columns in the grid
  <Cell {...props} colSpan={row.getAllCells().length} width="100%" />
);
