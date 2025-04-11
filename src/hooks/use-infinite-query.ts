/* eslint-disable func-style, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument, @typescript-eslint/prefer-nullish-coalescing */
import { useCallback, useEffect, useState } from "react";

import { pathOr } from "remeda";
import { useQuery } from "urql";

import type { AnyVariables, CombinedError, UseQueryArgs, UseQueryState } from "urql";

// Types borrowed from remeda's pathOr
/**
 * Given a union of indexable types `T`, we derive an indexable type
 * containing all of the keys of each variant of `T`. If a key is
 * present in multiple variants of `T`, then the corresponding type in
 * `Pathable<T>` will be the intersection of all types for that key.
 *
 * @example
 *    type T1 = Pathable<{a: number} | {a: string; b: boolean}>
 *    // {a: number | string; b: boolean}
 *
 *    type T2 = Pathable<{a?: {b: string}}
 *    // {a: {b: string} | undefined}
 *
 *    type T3 = Pathable<{a: string} | number>
 *    // {a: string}
 *
 *    type T4 = Pathable<{a: number} | {a: string} | {b: boolean}>
 *    // {a: number | string; b: boolean}
 *
 * This type lets us answer the questions:
 * - Given some object of type `T`, what keys might this object have?
 * - If this object did happen to have a particular key, what values
 *   might that key have?
 */
type Pathable<T> = {
  [K in AllKeys<T>]: TypesForKey<T, K>;
};
type AllKeys<T> = T extends infer I ? keyof I : never;
type TypesForKey<T, K extends PropertyKey> = T extends infer I ? (K extends keyof I ? I[K] : never) : never;
type StrictlyRequired<T> = {
  [K in keyof T]-?: NonNullable<T[K]>;
};

/**
 * Given some `A` which is a key of at least one variant of `T`, derive
 * `T[A]` for the cases where `A` is present in `T`, and `T[A]` is not
 * null or undefined.
 */
type PathValue1<T, A extends keyof Pathable<T>> = StrictlyRequired<Pathable<T>>[A];

/** As `PathValue1`, but for `T[A][B]`. */
type PathValue2<T, A extends keyof Pathable<T>, B extends keyof Pathable1<T, A>> = StrictlyRequired<Pathable1<T, A>>[B];

/** All possible options after successfully reaching `T[A]`. */
type Pathable1<T, A extends keyof Pathable<T>> = Pathable<PathValue1<T, A>>;

/** As `Pathable1`, but for `T[A][B]`. */
type Pathable2<T, A extends keyof Pathable<T>, B extends keyof Pathable1<T, A>> = Pathable<PathValue2<T, A, B>>;
// End types borrowed from remeda's pathOr

/**
 * The expected shape of paginated data from a GraphQL query.
 * This follows the Relay Cursor Connections specification for consistent pagination.
 * @see https://relay.dev/graphql/connections.htm
 */
interface RelayConnection<TNode> {
  /** All records fetched by this query (this is all pages combined) */
  nodes: TNode[];

  /** Metadata for pagination */
  pageInfo: {
    /** Whether there are more items to load */
    hasNextPage: boolean;
    /** Cursor to fetch the next page, null if no more pages */
    endCursor?: string | null;
  };

  /** Total count of all items (across all pages) */
  totalCount: number;
}

/**
 * Default empty connection for type safety and fallback
 */
const DEFAULT_CONNECTION: RelayConnection<unknown> = {
  nodes: [],
  pageInfo: { hasNextPage: false, endCursor: null },
  totalCount: 0,
};

interface InfiniteQueryResult<TData, TVariables extends AnyVariables> {
  /** Whether a request is in progress */
  fetching: boolean;

  /** Indicates if the first fetch is in progress, useful to show a skeleton or some other animation */
  initialFetching: boolean;

  /** Indicates if the next page is being fetched, useful to show a loading indicator at the bottom of the list for example */
  fetchingMore: boolean;

  /** Whether there are more items to load */
  hasNextPage: boolean;

  /** Function to load the next page */
  fetchMore: () => void;

  /** Total number of items across all pages */
  totalCount: number;

  /** Full query state for advanced use cases */
  queryState: UseQueryState<TData, TVariables>;

  /** Error state for advanced use cases */
  error: CombinedError | null;
}

export function useInfiniteQuery<
  TData,
  TVariables extends { after?: string | null; orderBy?: string[] },
  TDataPath1 extends keyof Pathable<TData>,
  TConnection = StrictlyRequired<Pathable1<TData, TDataPath1>>,
>({
  variables,
  dataPath,
  ...queryArgs
}: UseQueryArgs<TVariables, TData> & {
  /** The path to the connection in your GraphQL response */
  dataPath: readonly [TDataPath1];
}): InfiniteQueryResult<TData, TVariables> & {
  nodes: TConnection extends { nodes: (infer U)[] } ? U[] : never[];
};

export function useInfiniteQuery<
  TData,
  TVariables extends { after?: string | null; orderBy?: string[] },
  TDataPath1 extends keyof Pathable<TData>,
  TDataPath2 extends keyof Pathable1<TData, TDataPath1>,
  TConnection = StrictlyRequired<Pathable2<TData, TDataPath1, TDataPath2>>,
>({
  variables,
  dataPath,
  ...queryArgs
}: UseQueryArgs<TVariables, TData> & {
  /** The path to the connection in your GraphQL response */
  dataPath: readonly [TDataPath1, TDataPath2];
}): InfiniteQueryResult<TData, TVariables> & {
  nodes: TConnection extends { nodes: (infer U)[] } ? U[] : never[];
};

/**
 * A hook for implementing infinite scroll with GraphQL queries.
 *
 * Common use cases:
 * - Loading more items when scrolling to bottom of a list
 * - "Load More" buttons in feeds or search results
 * - Continuous scrolling in social media feeds
 *
 * Features:
 * - Automatic cursor management
 * - Loading state handling
 * - Type-safe pagination
 * - Automatic type inference from your GraphQL query
 *
 * Example usage:
 * ```tsx
 * const MyList = () => {
 *   const { nodes, hasNextPage, fetchMore, fetching } = useInfiniteQuery({
 *     query: MY_QUERY,
 *     dataPath: ["items"],
 *   });
 *
 *   return (
 *     <div onScroll={handleScroll}>
 *       {nodes.map(node => <Item key={node.id} {...node} />)}
 *       {hasNextPage && <LoadMoreButton onClick={fetchMore} loading={fetching} />}
 *     </div>
 *   );
 * };
 * ```
 */
// @ts-expect-error - Type is enforced by function overloads
export function useInfiniteQuery({ variables = { orderBy: [] }, dataPath, ...queryArgs }): unknown {
  // Track the cursor for the next page
  const [after, setAfter] = useState<string | null | undefined>(null);

  // First fetch done by URQL, any subsequent page is not the first fetch
  const [isFirstFetch, setIsFirstFetch] = useState<boolean>(true);

  // When the orderBy changes, we need to reset the cursor because that's how the server calculates the next page
  const hash = JSON.stringify(variables.orderBy);
  useEffect(() => {
    setAfter(null);
  }, [hash]);

  // Execute the GraphQL query with cursor-based pagination
  const [queryState] = useQuery({
    ...queryArgs,
    variables: {
      ...variables,
      // We automatically add the primary key because Graphile needs it to stabily generate the cursor
      orderBy: [...(variables.orderBy ?? []), "PRIMARY_KEY_ASC"],
      after,
    },
  } as never);

  const { data, fetching, error } = queryState;

  // Extract the connection data with fallback to empty state
  // So we are pulling the dataPath from the server response
  const connection = pathOr(data, dataPath, DEFAULT_CONNECTION);

  const { nodes, pageInfo, totalCount } = connection;
  const { hasNextPage, endCursor } = pageInfo;

  // Load next page only if:
  // 1. Not currently loading
  // 2. More items are available
  const fetchMore = useCallback(() => {
    if (fetching || !hasNextPage) return;

    setAfter(endCursor);
    setIsFirstFetch(false);
  }, [fetching, hasNextPage, endCursor]);

  return {
    nodes: nodes || [],
    fetching,
    initialFetching: isFirstFetch && fetching,
    fetchingMore: !isFirstFetch && fetching,
    hasNextPage,
    fetchMore,
    totalCount,
    totalFetched: (nodes as [])?.length ?? 0,
    queryState,
    error: error ?? null,
  };
}
