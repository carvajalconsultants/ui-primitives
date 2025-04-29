import { ListBox as AriaListBox, ListLayout, Virtualizer } from "react-aria-components";

import { listBox } from "../../styled-system/recipes";

import type { ListBoxProps as AriaListBoxProps } from "react-aria-components";

import type { WithoutClassName } from "../types";

export type VirtualizedListBoxProps<T> = WithoutClassName<AriaListBoxProps<T>>;

/**
 * A high-performance, accessible listbox component that efficiently handles large datasets
 * by only rendering items that are currently visible in the viewport. This prevents
 * performance issues when dealing with extensive lists like search results, dropdown menus,
 * or data tables.
 *
 * @template T - The type of data items in the list. Must be an object type.
 *
 * @param {VirtualizedListBoxProps<T>} props - Component properties including:
 *   @param {T[]} [props.items] - The data items to display in the list
 *   @param {Function} [props.children] - Render function for list items
 *   @param {string} [props.aria-label] - Accessible label for screen readers
 *   @param {Function} [props.onSelectionChange] - Handler for selection changes
 *   @param {boolean} [props.disallowEmptySelection] - Whether empty selection is allowed
 *   @param {('single' | 'multiple')} [props.selectionMode] - Single or multiple selection mode
 *
 * @returns {JSX.Element} A virtualized, accessible listbox component
 *
 * @example
 * ```tsx
 * <ListBox
 *   items={users}
 *   aria-label="Select a user"
 *   onSelectionChange={handleSelection}
 * >
 *   {(item) => <Item>{item.name}</Item>}
 * </ListBox>
 * ```
 */
export const VirtualizedListBox = <T extends object>(props: VirtualizedListBoxProps<T>) => (
  // Virtualizer handles the efficient rendering of only visible items,
  // dramatically improving performance for long lists
  <Virtualizer layout={ListLayout} layoutOptions={{ estimatedRowHeight: 40 }}>
    {/* AriaListBox provides the core accessibility features and keyboard navigation */}
    <AriaListBox {...props} className={listBox()} />
  </Virtualizer>
);
