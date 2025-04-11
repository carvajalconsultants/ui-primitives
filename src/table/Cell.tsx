import { cell } from "../../styled-system/recipes";

import type { ComponentProps } from "react";

import type { CellVariantProps } from "../../styled-system/recipes";

export type CellProps = ComponentProps<"td"> & Partial<CellVariantProps>;

/**
 * A specialized table cell component that provides consistent styling and behavior
 * for displaying data in tables. Ensures data is presented clearly and accessibly
 * while maintaining visual consistency across the application.
 *
 * Key features:
 * - Consistent padding and vertical alignment for readable data presentation
 * - Built-in focus states for keyboard navigation accessibility
 * - Maintains visual hierarchy through standardized styling
 *
 * @component
 * @param {CellProps} props - Component properties
 * @param {string} [props.children] - The content to display in the cell
 * @param {React.HTMLAttributes<HTMLTableCellElement>} props.HTMLAttributes - Standard HTML td attributes
 *                                                                          like onClick, onKeyDown etc.
 * @returns {JSX.Element} A styled table cell (td) element with consistent presentation
 *
 * @example
 * // Basic usage with text content
 * <Cell>Data value</Cell>
 *
 * @example
 * // With interactive content
 * <Cell>
 *   <Button onClick={handleAction}>Action</Button>
 * </Cell>
 */
export const Cell = ({ isExpanded, ...props }: CellProps) => <td className={cell({ isExpanded })} {...props} />;
