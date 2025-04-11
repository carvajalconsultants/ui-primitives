import { row } from "../../styled-system/recipes";

import type { ComponentProps, Ref } from "react";

import type { RowVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type RowProps = WithoutClassName<ComponentProps<"tr">> &
  Partial<RowVariantProps> & {
    /**
     * Whether the row was selected by the user for additional operation(s).
     */
    isSelected?: boolean;

    /**
     * Reference to access the underlying table row DOM element
     * Helpful for scrolling, measuring, or animating the row.
     *
     * We use our own ref due to limitations with the forwardRef API and generics: https://stackoverflow.com/a/58473012 (option 3)
     */
    rowRef?: Ref<HTMLTableRowElement>;
  };

/**
 * A table row component that provides consistent styling and behavior across tables.
 * Handles different visual states based on its position (header, footer, body) and user interaction.
 *
 * Key features:
 * - Automatic styling for header, body, and footer positions
 * - Hover and selection states for better user interaction
 * - Support for expandable rows to show additional content
 * - Maintains accessibility through ARIA attributes
 *
 * @component
 * @param {RowProps} props - Component properties
 * @param {boolean} [props.isSelected] - Whether the row was selected by the user for additional operation(s)
 * @param {React.Ref<HTMLTableRowElement>} rowRef - React ref forwarded to the underlying tr element
 * @returns {JSX.Element} A styled table row component
 *
 * @example
 * // Basic usage in a table body
 * <TableBody>
 *   <Row>
 *     <Cell>Content</Cell>
 *   </Row>
 * </TableBody>
 *
 * @example
 * // Usage with expansion
 * <TableBody>
 *   <Row isSelected>
 *     <Cell>Content</Cell>
 *   </Row>
 * </TableBody>
 */
export const Row = ({ rowRef, isSelected, ...props }: RowProps) => <tr ref={rowRef} data-selected={isSelected} className={row()} {...props} />;
