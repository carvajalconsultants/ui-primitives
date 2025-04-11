import { TableBody } from "../table/TableBody";

import type { Row as TRow, Table as TTable } from "@tanstack/react-table";
import type { ReactNode } from "react";

import type { TableBodyProps } from "../table/TableBody";

interface DataGridBodyProps<TData> extends Omit<TableBodyProps, "children"> {
  gridOptions: TTable<TData>;

  children: (key: string, row: TRow<TData>) => ReactNode;
}

/**
 * Straight passthrough, similar to TableBody
 */
export const DataGridBody = <TData,>({ gridOptions, children, ...props }: DataGridBodyProps<TData>) => {
  const { rows } = gridOptions.getRowModel();

  return <TableBody {...props}>{rows.map((row) => children(row.id, row))}</TableBody>;
};
