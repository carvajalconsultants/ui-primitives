import { useCallback } from "react";

import { Button } from "../button/Button";
import { ListItem } from "../combobox/ListItem";
import { Spinner } from "../common/Spinner";
import { ListBox } from "../listbox/ListBox";
import { m } from "../paraglide/messages.js";
import { Select } from "./Select";

import type { UseQueryResponse } from "urql";

import type { SelectProps } from "./Select";

interface AddNewListItemProps extends Pick<SelectProps<object>, "size"> {
  /**
   * Callback function when user wants to add a new item
   */
  onAddNewItem?: () => void;

  /**
   * Text to display for the "Add New" option
   */
  addNewText?: string;
}

interface EmptyStateProps extends Pick<SelectProps<object>, "size"> {
  /**
   * Text to display for the when there is no data to show.
   */
  emptyText?: string;
}

interface QuerySelectProps<QueryData extends SelectOption[], SelectOption extends { value: string; label: string }>
  extends Omit<SelectProps<SelectOption>, "errorMessage">,
    AddNewListItemProps,
    EmptyStateProps {
  /**
   * The query result to use for populating the select options
   */
  queryResponse: UseQueryResponse<QueryData>;
}

/**
 * A component that displays an "Add New" button, shown in the lst of options.
 */
const AddNewListItem = ({ size, onAddNewItem, addNewText }: AddNewListItemProps) => (
  <ListItem key="add-new" size={size}>
    <Button variant="ghost" size={size} onPress={onAddNewItem}>
      {addNewText}
    </Button>
  </ListItem>
);

/**
 * A component that displays a message when there is no data to show.
 */
const EmptyState = ({ size, emptyText }: EmptyStateProps) => (
  <ListItem key="no-data" size={size}>
    {emptyText}
  </ListItem>
);

/**I
 * A select component that handles query results and loading states internally.
 * It takes a query result and automatically handles loading, error, and empty states.
 */
export const QuerySelect = <QueryData extends SelectOption[], SelectOption extends { value: string; label: string }>({
  queryResponse: query,
  placeholder = m.selectOne(),

  emptyText = m.noDataFound(),

  onAddNewItem,
  addNewText = m.addNew(),

  ...props
}: QuerySelectProps<QueryData, SelectOption>) => {
  const [{ data, fetching, error }] = query;
  const { size } = props;

  const renderContent = useCallback(() => {
    // Show loading spinner while data is being fetched
    if (fetching) {
      return (
        <ListItem key="loading" size={size}>
          <Spinner />
        </ListItem>
      );
    }

    return (
      <ListBox>
        {/* Render list items from records (data) */}
        {data?.map((item) => (
          <ListItem key={item.value} size={size}>
            {item.label}
          </ListItem>
        ))}

        {/* Show empty state when no data is available */}
        {(!data || data.length === 0) && <EmptyState size={size} emptyText={emptyText} />}

        {/* Show "Add New" button when onAddNewItem is provided */}
        {onAddNewItem && <AddNewListItem size={size} onAddNewItem={onAddNewItem} addNewText={addNewText} />}
      </ListBox>
    );
  }, [data, fetching, onAddNewItem, addNewText, size, emptyText]);

  return (
    <Select {...props} placeholder={placeholder} errorMessage={error?.message}>
      {renderContent()}
    </Select>
  );
};
