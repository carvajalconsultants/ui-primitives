import { ListItem } from "src/combobox/ListItem";

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
   * The content to display when the query is fetching
   */
  loadingContent?: ReactNode;

  /**
   * The content to display when the query is in an error state
   */
  errorContent?: ReactNode;

  /**
   * The content to display when the query has no data
   */
  emptyContent?: ReactNode;
}

/**
 * A select component that handles query results and loading states internally.
 * It takes a query result and automatically handles loading, error, and empty states.
 */
export const QuerySelect = <QueryData, SelectOption extends object>({
  label,
  size = "normal",
  queryResponse: query,
  children,
  loadingContent,
  errorContent,
  emptyContent,
}: QuerySelectProps<QueryData, SelectOption>) => {
  const [{ data, fetching, error }] = query;

  return (
    <Select label={label} size={size} placeholder={fetching ? "Loading..." : error ? "Error" : "Select an option"}>
      {fetching ? (
        <ListItem key="loading" size={size}>
          {loadingContent ?? "Loading..."}
        </ListItem>
      ) : error ? (
        <ListItem key="error" size={size}>
          {errorContent ?? "Error loading data"}
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
