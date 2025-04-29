import { ListBoxItem as AriaListBoxItem } from "react-aria-components";

import { listBoxItem } from "../../styled-system/recipes";

import type { FC } from "react";
import type { ListBoxItemProps as AriaListBoxItemProps } from "react-aria-components";

import type { ComboBoxVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

/**
 * Represents the properties for a ListBox item component.
 * @typedef {Object} ListBoxItemProps
 * @property {ComboBoxVariantProps['size']} [size] - Controls the visual size of the list item, affecting padding and text size
 * @property {string} [id] - Unique identifier for the list item
 * @property {string} [textValue] - The text representation of the item, used for type-to-select functionality
 * @property {boolean} [shouldSelectOnPressUp] - Whether the item should be selected when the user releases the pointer, rather than on press down
 * @property {boolean} [shouldFocusOnHover] - Whether the item should receive focus when hovered
 * @property {boolean} [isDisabled] - Whether the item is disabled from user interaction
 * @property {ReactNode} [children] - The content to be rendered within the list item
 */
type ListBoxItemProps = WithoutClassName<AriaListBoxItemProps> & Partial<ComboBoxVariantProps>;

/**
 * A selectable item within a ListBox component that provides accessible interactions and styling.
 *
 * Real-world usage:
 * - Used as individual options within dropdown menus
 * - Represents selectable choices in autocomplete fields
 * - Provides interactive items in type-ahead search results
 * - Implements keyboard navigation support for menu items
 *
 * @example
 * ```tsx
 * <ListBox>
 *   <ListBoxItem>Option 1</ListBoxItem>
 *   <ListBoxItem isDisabled>Option 2</ListBoxItem>
 *   <ListBoxItem>Option 3</ListBoxItem>
 * </ListBox>
 * ```
 *
 * @param {ListBoxItemProps} props - The component properties
 * @returns {JSX.Element} A styled and accessible list box item component
 */
export const ListBoxItem: FC<ListBoxItemProps> = ({ size, ...props }) => <AriaListBoxItem {...props} className={listBoxItem({ size })} />;
