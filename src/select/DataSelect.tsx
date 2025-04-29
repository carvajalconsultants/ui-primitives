import { useCallback } from "react";

import { Spinner } from "../common/Spinner";
import { ListBox } from "../listbox/ListBox";
import { ListBoxItem } from "../listbox/ListBoxItem.js";
import { m } from "../paraglide/messages.js";
import { Select } from "./Select";

import type { InfiniteQueryResult } from "src/hooks/use-infinite-query";
import type { AnyVariables } from "urql";

import type { SelectProps } from "./Select";

/**
 * Configuration for a data-driven select component that handles async data loading, pagination,
 * empty states, and new item creation. Perfect for scenarios like customer selection, product picking,
 * or any form field that needs to load options from an API.
 *
 * @template TNode - The type of data objects being displayed (e.g., Product, Customer)
 * @template TNodeKey - The propert key used as the option value or label (e.g., 'id', 'code')
 */
interface DataSelectProps<TNode extends object, TNodeKey extends keyof TNode> extends Omit<SelectProps<{ value: string; label: string }>, "children" | "errorMessage"> {
  /**
   * Query result containing the data to populate the dropdown
   * Handles pagination, loading states, and error handling automatically
   */
  queryResponse: Omit<InfiniteQueryResult<TNode, object, AnyVariables>, "nodes"> & {
    nodes: TNode[];
  };

  /**
   * Custom message shown when no options exist
   * Example: "No products found", "No matching customers"
   */
  emptyText?: string;

  /**
   * Specifies which property to use as the option value
   * Example: ['id'] for database IDs, ['sku'] for product codes
   */
  //TODO In future, use Pathable from use-infinite-query to make this support nested keys using pathOr
  valuePath: [TNodeKey];

  /**
   * Specifies which property to display to users
   * Example: ['name'] to show product names, ['fullName'] for customer names
   */
  //TODO In future, use Pathable from use-infinite-query to make this support nested keys using pathOr
  labelPath: [TNodeKey];
}

/**
 * A smart dropdown component that handles data fetching, loading states, error handling, and option creation.
 * Perfect for forms that need to load options from an API, like selecting customers, products, or categories.
 *
 * Features:
 * - Automatic loading states with spinners
 * - Error handling and display
 * - Empty state handling with custom messages
 * - Optional "Add New" functionality for creating entries
 * - Configurable value and label mapping from your data
 *
 * @template TNode - The type of data objects being displayed (e.g., Product, Customer)
 * @template TNodeKey - The propert key used as the option value or label (e.g., 'id', 'code')
 *
 * @example
 * // Creating a product selector
 * <DataSelect
 *   queryResponse={productsQuery}
 *   labelPath={['name']}
 *   valuePath={['id']}
 *   placeholder="Select a product"
 *   onAddNewItem={() => openProductForm()}
 * />
 */
export const DataSelect = <TNode extends object, TNodeKey extends keyof TNode>({
  queryResponse,

  placeholder = m.selectOne(),
  emptyText = m.noDataFound(),

  valuePath,
  labelPath,
  ...props
}: DataSelectProps<TNode, TNodeKey>) => {
  const { nodes, fetching, error } = queryResponse;
  const { size } = props;

  /**
   * Generates the dropdown content based on current state
   * Handles all possible states: loading, empty, and data display
   *
   * The function follows this logic:
   * 1. Shows loading spinner during data fetch
   * 2. Maps data to dropdown options when available
   * 3. Shows empty state when no data exists
   */
  const renderContent = useCallback(() => {
    // Display loading indicator while fetching data
    if (fetching) {
      return (
        <ListBox>
          <ListBoxItem key="loading" size={size}>
            <Spinner borderColor="primary.foreground" borderTopColor="white" />
          </ListBoxItem>
        </ListBox>
      );
    }

    return (
      <ListBox renderEmptyState={() => emptyText} items={nodes}>
        {(node) => (
          <ListBoxItem key={String(node[valuePath[0]])} id={String(node[valuePath[0]])} size={size}>
            {String(node[labelPath[0]])}
          </ListBoxItem>
        )}
      </ListBox>
    );
  }, [fetching, size, nodes, emptyText, labelPath, valuePath]);

  return (
    <Select {...props} placeholder={placeholder} errorMessage={error instanceof Error ? error.message : undefined}>
      {renderContent()}
    </Select>
  );
};
