import { createContext, useContext } from "react";

import type { VirtualItem } from "@tanstack/react-virtual";
import type { RefObject } from "react";
import type { RowProps } from "src/table/Row";

/**
 * Represents the core data needed to manage a virtualized table's structure and rendering.
 * This context provides references to both the table element and its container, enabling
 * precise control over scrolling, sizing, and virtual rendering calculations.
 */
interface TableContextValue {
  /** Reference to the main table element, used for measuring and manipulating the table structure */
  tableRef: RefObject<HTMLTableElement | null>;

  /** Reference to the scrollable container div, essential for virtual scrolling calculations */
  containerRef: RefObject<HTMLDivElement | null>;
}

/**
 * Creates a React context for managing table state and references across components.
 * This context is crucial for virtualized tables as it enables components to access
 * shared table state without prop drilling, particularly important for performance
 * in large datasets.
 */
export const TableContext = createContext<TableContextValue | null>(null);

/**
 * Hook to access the table context, providing access to table references and state.
 * This hook is essential for components that need to interact with the table's structure,
 * such as calculating scroll positions or measuring row heights.
 *
 * @returns {TableContextValue} An object containing:
 *   - tableRef: Reference to the main table element
 *   - containerRef: Reference to the scrollable container
 *
 * @throws {Error} When used outside of a TableProvider, indicating incorrect component hierarchy
 *
 * @example
 * ```tsx
 * const MyTableComponent = () => {
 *   const { tableRef, containerRef } = useTableContext();
 *   // Use refs for measuring or scrolling
 * };
 * ```
 */
export const useTableContext = () => {
  const context = useContext(TableContext);

  // Ensure the hook is used within a provider to prevent runtime errors
  if (!context) {
    throw new Error("useTableContext must be used within a TableProvider");
  }

  return context;
};

/**
 * Represents the data needed for rendering individual rows in a table.
 * This context provides information about the virtual row's position and properties,
 * enabling efficient rendering of only visible rows.
 */
interface RowContextValue {
  /** Information about the virtual row's position and dimensions in the virtualized list */
  virtualRow?: VirtualItem;

  /** Properties passed to the row component, including data and styling options */
  props?: RowProps;
}

/**
 * Creates a React context for managing individual row state and properties.
 * This context is used to share row-specific information between row components
 * and their children, enabling efficient row rendering and interaction handling.
 */
export const RowContext = createContext<RowContextValue | null>(null);

/**
 * Hook to access row-specific context data, providing information about the current row's
 * virtual position and properties. This hook is crucial for components that need to
 * render or interact with individual rows in a virtualized table.
 *
 * @returns {RowContextValue} An object containing:
 *   - virtualRow: Information about the row's position in the virtualized list
 *   - props: Properties passed to the row component
 *
 * @example
 * ```tsx
 * const MyRowComponent = () => {
 *   const { virtualRow, props } = useRowContext();
 *   // Use virtual row info for positioning and props for rendering
 * };
 * ```
 */
export const useRowContext = () => {
  const context = useContext(RowContext);

  // Return empty object if no context is found, allowing for graceful degradation
  // This is a design choice to support both virtualized and non-virtualized row rendering
  if (!context) {
    return {};
  }

  return context;
};
