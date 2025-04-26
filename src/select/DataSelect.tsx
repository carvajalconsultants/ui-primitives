import { useCallback } from "react";

import { Button } from "../button/Button";
import { ListItem } from "../combobox/ListItem";
import { Spinner } from "../common/Spinner";
import { ListBox } from "../listbox/ListBox";
import { m } from "../paraglide/messages.js";
import { Select } from "./Select";

import type { InfiniteQueryResult } from "src/hooks/use-infinite-query";
import type { AnyVariables } from "urql";

import type { SelectProps } from "./Select";

/**
 * Props for the "Add New" item functionality in dropdown lists
 * Enables users to create new entries directly from the dropdown interface
 */
interface AddNewListItemProps extends Pick<SelectProps<object>, "size"> {
  /**
   * Callback triggered when users want to create a new entry
   * Opens a creation form or modal based on implementation
   */
  onAddNewItem?: () => void;

  /**
   * Custom text for the "Add New" button
   * Useful for different contexts like "Add New Customer", "Create Product", etc.
   */
  addNewText?: string;
}

/**
 * Props for customizing the empty state display
 * Helps provide clear feedback when no options are available
 */
interface EmptyStateProps extends Pick<SelectProps<object>, "size"> {
  /**
   * Custom message shown when no options exist
   * Example: "No products found", "No matching customers"
   */
  emptyText?: string;
}

/**
 * Configuration for a data-driven select component that handles async data loading, pagination,
 * empty states, and new item creation. Perfect for scenarios like customer selection, product picking,
 * or any form field that needs to load options from an API.
 * 
 * @template TNode - The type of data objects being displayed (e.g., Product, Customer)
 * @template TNodeKey - The propert key used as the option value or label (e.g., 'id', 'code')
 */
interface DataSelectProps<TNode extends object, TNodeKey extends keyof TNode>
  extends Omit<SelectProps<{ value: string; label: string }>, "children" | "errorMessage">,
    AddNewListItemProps,
    EmptyStateProps {
  /**
   * Query result containing the data to populate the dropdown
   * Handles pagination, loading states, and error handling automatically
   */
  queryResponse: Omit<InfiniteQueryResult<TNode, object, AnyVariables>, "nodes"> & {
    nodes: TNode[];
  };
  // queryResponse: InfiniteQueryResult<TNode, object, AnyVariables>;

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
 * Renders a list item that allows users to create new entries directly from a dropdown list.
 * This is particularly useful in forms where users frequently need to add new options,
 * like creating a new category while filling out a product form.
 * 
 * @example
 * // Adding new customer option in a customer selector
 * <AddNewListItem 
 *   size="medium"
 *   onAddNewItem={() => openCustomerForm()}
 *   addNewText="Add New Customer"
 * />
 */
const AddNewListItem = ({ size, onAddNewItem, addNewText }: AddNewListItemProps) => (
  <ListItem key="add-new" size={size}>
    <Button variant="ghost" size={size} onPress={onAddNewItem}>
      {addNewText}
    </Button>
  </ListItem>
);

/**
 * Displays a user-friendly message when no options are available
 * Helps users understand why the list is empty and what actions they can take
 * 
 * @example
 * // Show "No matching products found" in a filtered product list
 * <EmptyState 
 *   size="medium"
 *   emptyText="No matching products found"
 * />
 */
const EmptyState = ({ size, emptyText }: EmptyStateProps) => (
  <ListItem key="no-data" size={size}>
    {emptyText}
  </ListItem>
);

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

  onAddNewItem,
  addNewText = m.addNew(),

  valuePath,
  labelPath,
  ...props
}: DataSelectProps<TNode, TNodeKey>) => {
  const { nodes, fetching, error } = queryResponse;
  const { size } = props;

  /**
   * Generates the dropdown content based on current state
   * Handles all possible states: loading, error, empty, and data display
   * 
   * The function follows this logic:
   * 1. Shows loading spinner during data fetch
   * 2. Maps data to dropdown options when available
   * 3. Shows empty state when no data exists
   * 4. Optionally shows "Add New" button if creation is allowed
   */
  const renderContent = useCallback(() => {
    // Display loading indicator while fetching data
    if (fetching) {
      return (
        <ListItem key="loading" size={size}>
          <Spinner />
        </ListItem>
      );
    }

    return (
      <ListBox>
        {/* Convert each data item into a selectable dropdown option */}
        {nodes.map((node: TNode) => (
          <ListItem key={String(node[valuePath[0]])} size={size}>
            {String(node[labelPath[0]])}
          </ListItem>
        ))}

        {/* Show helpful message when no options exist */}
        {nodes.length === 0 && <EmptyState size={size} emptyText={emptyText} />}

        {/* Provide option to create new entries if allowed */}
        {onAddNewItem && <AddNewListItem size={size} onAddNewItem={onAddNewItem} addNewText={addNewText} />}
      </ListBox>
    );
  }, [nodes, fetching, onAddNewItem, addNewText, size, emptyText, labelPath, valuePath]);

  return (
    <Select {...props} placeholder={placeholder} errorMessage={error?.message}>
      {renderContent()}
    </Select>
  );
};
