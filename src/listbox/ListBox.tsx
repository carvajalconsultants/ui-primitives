import { ListBox as AriaListBox } from "react-aria-components";

import { listBox } from "../../styled-system/recipes";

import type { ListBoxProps as AriaListBoxProps } from "react-aria-components";

import type { WithoutClassName } from "../types";

/**
 * Represents the props for the ListBox component, excluding the className prop.
 * @template T - The type of data items the ListBox will contain
 */
export type ListBoxProps<T> = WithoutClassName<AriaListBoxProps<T>>;

/**
 * A fully accessible listbox component that provides a scrollable list of options for users to select from.
 * Perfect for dropdown menus, selection lists, and any UI that requires users to choose from a set of options.
 *
 * Key features:
 * - Full keyboard navigation (up/down arrows, home/end, type-ahead)
 * - Screen reader announcements for selection changes
 * - Support for single and multiple selection modes
 * - Automatic ARIA attribute management
 *
 * @template T - The type of data items the ListBox will contain
 * @param {ListBoxProps<T>} props - Configuration options for the ListBox
 * @param {T[]} props.items - The items to display in the list
 * @param {(item: T) => ReactNode} props.children - Render function for each item
 * @param {boolean} [props.disallowEmptySelection] - If true, prevents the user from deselecting the last selected item
 * @param {SelectionMode} [props.selectionMode] - Determines if users can select 'single' or 'multiple' items
 * @param {Selection} [props.selectedKeys] - The currently selected keys in controlled mode
 * @param {Selection} [props.defaultSelectedKeys] - The default selected keys in uncontrolled mode
 * @param {(keys: Selection) => void} [props.onSelectionChange] - Callback fired when selection changes
 *
 * @returns {JSX.Element} A fully styled and accessible listbox component
 *
 * @example
 * ```tsx
 * <ListBox
 *   items={['Apple', 'Banana', 'Orange']}
 *   onSelectionChange={selected => console.log('Selected:', selected)}
 * >
 *   {item => <ListBoxItem>{item}</ListBoxItem>}
 * </ListBox>
 * ```
 */
export const ListBox = <T extends object>(props: ListBoxProps<T>) => (
  // AriaListBox handles all accessibility features including:
  // - Keyboard navigation (up/down arrows, home/end)
  // - ARIA attributes (role="listbox", aria-selected, etc.)
  // - Selection management
  // - Focus handling
  <AriaListBox {...props} className={listBox()} />
);
