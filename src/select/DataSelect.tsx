import { Button } from "src/button/Button";

import { ListItem } from "../../src/combobox/ListItem";
import { Spinner } from "../../src/common/Spinner";
import { ListBox } from "../../src/listbox/ListBox";
import { Select } from "./Select";

import type { ReactNode } from "react";
import type { UseQueryResponse } from "urql";

import type { SelectProps } from "./Select";

interface QuerySelectProps<QueryData extends SelectOption[], SelectOption extends { value: string; label: string }> extends SelectProps<SelectOption> {
  /**
   * The query result to use for populating the select options
   */
  queryResponse: UseQueryResponse<QueryData>;

  /**
   * The content to display when the query has no data
   */
  emptyContent?: ReactNode;

  /**
   * Callback function when user wants to add a new item
   */
  onAddNewItem?: () => void;

  /**
   * Text to display for the "Add New" option
   */
  addNewText?: string;
}

/**
 * A select component that handles query results and loading states internally.
 * It takes a query result and automatically handles loading, error, and empty states.
 */
export const QuerySelect = <QueryData extends SelectOption[], SelectOption extends { value: string; label: string }>({
  label,
  size = "normal",
  queryResponse: query,
  emptyContent,
  onAddNewItem,
  addNewText = "Add New",
}: QuerySelectProps<QueryData, SelectOption>) => {
  const [{ data, fetching, error }] = query;

  /**
   * Helper function to create a ListItem with custom content
   * @param content - The content to render inside the ListItem
   * @param key - Unique key for the ListItem
   * @returns A ListItem component with the specified content
   */
  const getCustomListItem = (content: ReactNode, key: string) => (
    <ListItem key={key} size={size}>
      {content}
    </ListItem>
  );

  const EmptyState = () => (
    <ListItem key="no-data" size={size}>
      {emptyContent ?? "No data available"}
    </ListItem>
  );
  const AddNewItem = () => (
    <ListItem key="add-new" size={size}>
      <Button variant="ghost" size={size === "normal" ? "md" : size} onClick={onAddNewItem}>
        {addNewText}
      </Button>
    </ListItem>
  );

  const renderContent = () => {
    // Show loading spinner while data is being fetched
    if (fetching) {
      return getCustomListItem(<Spinner />, "loading");
    }

    // Show empty state when no data is available
    if (!data || data.length === 0) {
      return (
        <ListBox>
          <EmptyState />
          {onAddNewItem && <AddNewItem />}
        </ListBox>
      );
    }

    // Render list of items from data array
    return (
      <ListBox>
        {data.map((item) => (
          <ListItem key={item.value} size={size}>
            {item.label}
          </ListItem>
        ))}

        {onAddNewItem && <AddNewItem />}
      </ListBox>
    );
  };

  return (
    <Select label={label} size={size} placeholder={fetching ? "Loading..." : (error?.message ?? "Select an option")} errorMessage={error?.message}>
      {renderContent()}
    </Select>
  );
};
