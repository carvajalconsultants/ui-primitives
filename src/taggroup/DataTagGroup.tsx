import { useCallback } from "react";

import { Spinner } from "../common/Spinner";
import { m } from "../paraglide/messages.js";
import { Tag } from "./Tag";
import { TagGroup } from "./TagGroup";

import type { AnyVariables } from "urql";

import type { InfiniteQueryResult } from "../hooks/use-infinite-query";
import type { TagGroupProps } from "./TagGroup";

/**
 * Configuration for a data-driven tag group component that handles async data loading,
 * empty states, and error handling. Perfect for scenarios like displaying categories,
 * filters, or any collection of tags that need to be loaded from an API.
 *
 * @template TNode - The type of data objects being displayed (e.g., Category, Filter)
 * @template TNodeKey - The property key used as the option value (e.g., 'id', 'code')
 */
interface DataTagGroupProps<TNode extends object, TNodeKey extends keyof TNode> extends Omit<TagGroupProps<TNode>, "items" | "errorMessage" | "children"> {
  /**
   * Query result containing the data to populate the tags
   * Handles loading states and error handling automatically
   */
  queryResponse: Omit<InfiniteQueryResult<TNode, object, AnyVariables>, "nodes"> & {
    nodes: TNode[];
  };

  /**
   * Specifies which property to use as the option value
   * Example: ['id'] for database IDs, ['rowId'] for database row IDs
   */
  valuePath: [TNodeKey];

  /**
   * Specifies which property to display to users
   * Example: ['name'] to show names, ['title'] for display titles
   */
  labelPath: [TNodeKey];

  /**
   * Custom message shown when no tags exist
   * Example: "No categories found", "No filters available"
   */
  emptyText?: string;
}

/**
 * A smart tag group component that handles data fetching, loading states, and error handling.
 * Perfect for displaying collections of tags loaded from an API, like categories, filters, or metadata.
 *
 * Features:
 * - Automatic loading states with spinners
 * - Error handling and display
 * - Empty state handling with custom messages
 * - Configurable value and label mapping from your data
 *
 * @template TNode - The type of data objects being displayed (e.g., Category, Filter)
 * @template TNodeKey - The property key used as the option value (e.g., 'id', 'code')
 *
 * @example
 * // Creating a location tag group
 * <DataTagGroup
 *   queryResponse={locationsQuery}
 *   valuePath={["rowId"]}
 *   labelPath={["name"]}
 *   label="Source"
 * />
 */
export const DataTagGroup = <TNode extends object, TNodeKey extends keyof TNode>({
  queryResponse,
  valuePath,
  labelPath,
  emptyText = m.noDataFound(),
  ...props
}: DataTagGroupProps<TNode, TNodeKey>) => {
  const { nodes, fetching, error } = queryResponse;

  /**
   * Generates the tag content based on current state
   * Handles all possible states: loading, empty, and data display
   */
  const renderContent = useCallback(() => {
    // Display loading indicator while fetching
    if (fetching) {
      return <Spinner borderColor="primary.foreground" borderTopColor="white" />;
    }

    // Handle error message safely
    let errorMessage: string | undefined;
    if (error) {
      errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    }

    return (
      <TagGroup {...props} errorMessage={errorMessage} renderEmptyState={() => emptyText}>
        {nodes.map((node) => {
          const value = String(node[valuePath[0]]);
          const label = String(node[labelPath[0]]);

          return (
            <Tag key={value} id={value}>
              {label}
            </Tag>
          );
        })}
      </TagGroup>
    );
  }, [fetching, error, props, nodes, valuePath, labelPath, emptyText]);

  return renderContent();
};
