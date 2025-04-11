import { flexRender } from "@tanstack/react-table";

import { Cell } from "../table/Cell";

import type { Cell as TCell } from "@tanstack/react-table";

import type { CellProps } from "../table/Cell";

interface DataGridBodyCellProps<TData> extends Omit<CellProps, "children"> {
  /** The Tanstack Table cell object containing column and row data */
  cell: TCell<TData, unknown>;
}

/**
 * A specialized table cell component that renders data within a Tanstack Table grid.
 * This component is responsible for displaying individual cell content in a data grid,
 * handling both the visual presentation and data rendering of each cell.
 *
 * The component is designed to work seamlessly with Tanstack Table's rendering system,
 * allowing for flexible cell content rendering while maintaining consistent styling
 * and layout across the grid.
 *
 * @template TData - The type of data being displayed in the grid
 * @param {DataGridBodyCellProps<TData>} props - The component props
 * @param {TCell<TData, unknown>} props.cell - The Tanstack Table cell object
 * @param {CellProps} props - Additional cell props inherited from the base Cell component
 * @returns {JSX.Element} A table cell element containing the rendered content
 *
 * @example
 * ```tsx
 * <DataGridBodyCell
 *   cell={tableCell}
 * />
 * ```
 */
export const DataGridBodyCell = <TData,>({ cell, ...props }: DataGridBodyCellProps<TData>) => (
  <Cell {...props} style={{ width: cell.column.getSize() }}>
    {flexRender(cell.column.columnDef.cell, cell.getContext())}
  </Cell>
);
