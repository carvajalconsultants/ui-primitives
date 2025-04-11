import { tableHeader } from "../../styled-system/recipes";

import type { ComponentProps } from "react";

import type { TableHeaderVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type TableHeaderProps = WithoutClassName<ComponentProps<"thead">> & Partial<TableHeaderVariantProps>;

/**
 * A customizable table header component that provides sticky positioning and styling capabilities.
 * Particularly useful for large data tables where keeping the header visible while scrolling is important.
 *
 * @param {Object} props - Component properties
 * @param {boolean} [props.isSticky=true] - Controls whether the header stays fixed at the top during scroll
 *                                         Set to false if you want the header to scroll with the content
 * @param {React.HTMLAttributes<HTMLTableSectionElement>} props.HTMLAttributes - Standard HTML thead attributes
 *                                                                             like className, style, etc.
 * @returns {JSX.Element} A styled thead element with optional sticky positioning
 *
 * @example
 * // Basic sticky header
 * <TableHeader>
 *   <tr><th>Name</th><th>Age</th></tr>
 * </TableHeader>
 *
 * // Non-sticky header that scrolls with content
 * <TableHeader isSticky={false}>
 *   <tr><th>Name</th><th>Age</th></tr>
 * </TableHeader>
 */
export const TableHeader = ({ isSticky, ...props }: TableHeaderProps) => (
  <thead
    // Applies styling based on isSticky prop - if true, header stays fixed while scrolling
    className={tableHeader({ isSticky })}
    {...props}
  />
);
