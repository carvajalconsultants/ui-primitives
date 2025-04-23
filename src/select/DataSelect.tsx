import { ListItem } from "src/combobox/ListItem";
import { Spinner } from "src/common/Spinner";

import { Select } from "./Select";

import type { ReactNode } from "react";
import type { UseQueryResponse } from "urql";

import type { SelectProps } from "./Select";

interface QuerySelectProps<QueryData, SelectOption extends object> extends SelectProps<SelectOption> {
  /**
   * The query result to use for populating the select options
   */
  queryResponse: UseQueryResponse<QueryData>;

  /**
   * The content to display when the query has no data
   */
  emptyContent?: ReactNode;
}

/**
 * A select component that handles query results and loading states internally.
 * It takes a query result and automatically handles loading, error, and empty states.
 */
//TODO We might have problems with these generics and the list item component I mention beloow
export const QuerySelect = <QueryData, SelectOption extends object>({
  label,
  //TODO Fix sizing to be UntitledUI standard
  size = "normal",
  queryResponse: query,
  children,
  emptyContent,
}: QuerySelectProps<QueryData, SelectOption>) => {
  const [{ data, fetching, error }] = query;

  //TODO Can we make a function to get the list item?
  //TODO We should add 2 more components: one for when there is no data (empty) and one for when we want to ADD a new item to the list (should call mutation to create the item)
  return (
    <Select label={label} size={size} placeholder={fetching ? "Loading..." : error ? "Error" : "Select an option"} errorMessage={error?.message}>
      {fetching ? (
        <ListItem key="loading" size={size}>
          <Spinner />
        </ListItem>
      ) : !data || (Array.isArray(data) && data.length === 0) ? (
        <ListItem key="no-data" size={size}>
          {emptyContent ?? "No data available"}
        </ListItem>
      ) : (
        children
      )}
    </Select>
  );
};
