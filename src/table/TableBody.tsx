import { tableBody } from "../../styled-system/recipes";

import type { ComponentProps } from "react";

import type { TableBodyVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type TableBodyProps = WithoutClassName<ComponentProps<"tbody">> & Partial<TableBodyVariantProps>;

/**
 * Renders the body section of a data table, containing the main content rows.
 * This component provides semantic structure and accessibility benefits for table layouts.
 *
 * @example
 * ```tsx
 * <Table>
 *   <TableBody>
 *     <Row><Cell>Row 1 data</Cell></Row>
 *     <Row><Cell>Row 2 data</Cell></Row>
 *   </TableBody>
 * </Table>
 * ```
 *
 * @param {object} props - Standard HTML attributes for table body element
 * @param {ReactNode} props.children - The table rows and cells to be displayed
 * @returns {JSX.Element} A tbody element containing the table's main content
 */
export const TableBody = (props: TableBodyProps) => <tbody className={tableBody()} {...props} />;
