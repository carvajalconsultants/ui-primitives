import { headerCell } from "../../styled-system/recipes";

import type { ComponentProps } from "react";

import type { HeaderCellVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type HeaderCellProps = WithoutClassName<ComponentProps<"th">> & Partial<HeaderCellVariantProps>;

/**
 * A specialized table header cell component that provides consistent styling and behavior
 * for column headers in data tables. Helps users understand the structure and content
 * of each column while maintaining visual hierarchy.
 *
 * Key features:
 * - Visually distinct from regular cells to help users identify column headers
 * - Built-in focus states for keyboard navigation accessibility
 * - Consistent padding and typography to match design system
 * - Support for sorting indicators and other header-specific icons
 *
 * @component
 * @param {HeaderCellProps} props - Component properties
 * @param {string} [props.children] - The content to display in the header cell
 * @param {React.HTMLAttributes<HTMLTableCellElement>} props.HTMLAttributes - Standard HTML th attributes
 *                                                                          like onClick, onKeyDown etc.
 * @returns {JSX.Element} A styled table header cell (th) element
 *
 * @example
 * // Basic usage
 * <HeaderCell>Column Title</HeaderCell>
 *
 * @example
 * // With click handler for sorting
 * <HeaderCell onClick={handleSort}>
 *   Title
 *   <SortIcon />
 * </HeaderCell>
 */
export const HeaderCell = (props: HeaderCellProps) => <th className={headerCell()} {...props} />;
