import { tableFooter } from "../../styled-system/recipes";

import type { HTMLAttributes } from "react";

import type { TableFooterVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type TableFooterProps = WithoutClassName<HTMLAttributes<HTMLTableSectionElement>> & Partial<TableFooterVariantProps>;

/**
 * A specialized table footer component that helps display summary data, totals, or
 * other concluding information at the bottom of data tables. The footer can optionally
 * remain visible while scrolling through long tables.
 *
 * Key features:
 * - Sticky positioning keeps important summary data visible during table scrolling
 * - Maintains consistent styling with the rest of the table
 * - Provides semantic structure for better accessibility
 *
 * Common use cases:
 * - Displaying total/summary rows
 * - Showing aggregated calculations
 * - Presenting footer notes or metadata
 *
 * @param {Object} props - Component properties
 * @param {boolean} [props.isSticky=true] - When true, the footer stays visible at the bottom
 *                                         during table scrolling, ideal for keeping totals
 *                                         in view for long tables
 * @param {React.HTMLAttributes<HTMLTableSectionElement>} props.HTMLAttributes - Standard HTML
 *                                                        tfoot attributes for custom behaviors
 * @returns {JSX.Element} A tfoot element with optional sticky positioning
 *
 * @example
 * // Basic usage with sticky footer showing totals
 * <TableFooter>
 *   <Row>
 *     <Cell>Total Items:</Cell>
 *     <Cell>150</Cell>
 *   </Row>
 * </TableFooter>
 */
export const TableFooter = ({ isSticky = true, ...props }: TableFooterProps) => <tfoot className={tableFooter({ isSticky })} {...props} />;
