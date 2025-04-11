import { cva } from "../../styled-system/css";
import { Cell } from "../table/Cell";
import { Row } from "../table/Row";
import { TableBody } from "../table/TableBody";

import type { Table as TTable } from "@tanstack/react-table";
import type { ReactNode } from "react";

import type { RecipeVariantProps } from "../../styled-system/css";

// This style system handles the loading indicator that appears at the bottom of infinite scroll lists
const loadingVariants = cva({
  base: {
    padding: "4",
    backgroundColor: "bg.secondary._alt",
    color: "placeholder.text",
    width: "full",

    // Hidden by default until loading state is triggered
    display: "none",

    // Centers the loading spinner horizontally in the container
    justifyContent: "center",

    // Centers the loading spinner vertically in the container
    alignItems: "center",

    // Centers any text content like "Loading more..." messages
    textAlign: "center",
  },
  variants: {
    isLoading: {
      // Controls visibility of loading indicator based on data fetch state
      true: { display: "flex" },
    },
  },
});

type DataGridLoadingMoreProps<TData> = RecipeVariantProps<typeof loadingVariants> & {
  /**
   * The Tanstack Table instance that manages the grid's data and state.
   * Used to determine the full width of the loading indicator based on total columns.
   */
  gridOptions: TTable<TData>;

  /**
   * The visual loading indicator to display, such as:
   * - Animated spinner
   * - Loading text
   * - Progress bar
   * - Custom loading animation
   */
  children: ReactNode;
};

/**
 * Displays a loading indicator at the bottom of an infinite-scrolling data grid when fetching more records.
 *
 * Solves the problem of users not knowing if more content is loading when scrolling through large datasets.
 * The loading indicator provides immediate visual feedback that:
 * - The system received their scroll action
 * - More data is actively being retrieved
 * - They should wait before continuing to scroll
 *
 * This helps prevent user frustration and confusion when dealing with paginated data.
 *
 * @template TData The type of data being displayed in the grid
 * @param {Object} props Configuration options
 * @param {TTable<TData>} props.gridOptions The Tanstack Table instance managing the grid
 * @param {ReactNode} props.children Visual loading indicator like spinner/text
 * @param {boolean} props.isLoading When true, displays the loading state
 * @returns {JSX.Element} A full-width loading indicator that appears below the grid content
 */
export const DataGridLoadingMore = <TData,>({ gridOptions, children, ...props }: DataGridLoadingMoreProps<TData>) => (
  // TableBody wrapper ensures consistent styling with the main grid
  <TableBody>
    {/* Single row to contain the loading indicator */}
    <Row>
      {/*
        Cell spans all columns to create a full-width loading container
        Uses the loadingVariants styling to handle show/hide and centering
      */}
      <Cell colSpan={gridOptions.getAllColumns.length} className={loadingVariants(props)}>
        {children}
      </Cell>
    </Row>
  </TableBody>
);
