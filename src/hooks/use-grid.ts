/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-object-type, @typescript-eslint/unbound-method */
import { Route, RouteApi, useNavigate, useRouter, useSearch } from "@tanstack/react-router";
import { getCoreRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { useCallback } from "react";

import { snakeToCamel } from "../utils";

import type { AnyRouter, Expand, RegisteredRouter, RouteById } from "@tanstack/react-router";
import type { RowData, SortingState, Table, TableOptions } from "@tanstack/react-table";
import type { AnyContext, AnyRoute, ResolveFullPath, ResolveId, ResolveParams, RouteConstraints, StrictOrFrom } from "@tanstack/router-core";
import type { UIEvent } from "react";

// https://tanstack.com/table/latest/docs/api/core/column-def#meta
declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    sortKey: string;
  }

  interface TableState {
    isFetching?: boolean;
    totalFetched?: number;
    totalCount?: number;
  }
}

/**
 * @typedef {Object} GridHookOptions
 * Configuration options for creating a data grid with URL-synchronized sorting and infinite scroll
 * @template TData The type of data being displayed in the grid
 * @template TId The route identifier type
 * @template TRouter The router type
 *
 * @property {string} searchParamKey - The URL parameter key that will store grid state (sorting, filtering)
 * @property {Function} [onBottomReached] - Callback triggered when user scrolls near bottom - useful for loading more data
 * @property {number} [bottomThreshold=0.2] - How close to the bottom (as a percentage) before triggering onBottomReached
 */
type GridHookOptions<TData, TId, TRouter extends AnyRouter = RegisteredRouter> = Omit<TableOptions<TData>, "getCoreRowModel" | "getSortedRowModel" | "onSortingChange"> & {
  searchParamKey: keyof Expand<RouteById<TRouter["routeTree"], TId>["types"]["searchSchema"]>;
  onBottomReached?: () => void;
  bottomThreshold?: number;
};

/**
 * @typedef {Object} GridOptions
 * Enhanced table instance with infinite scroll capabilities
 * @template TData The type of data being displayed in the grid
 *
 * @property {Function} fetchMoreOnBottomReached - Event handler that manages infinite scroll behavior
 */
export type GridOptions<TData> = Table<TData> & {
  fetchMoreOnBottomReached?: (e: UIEvent<HTMLDivElement>) => void;
};

// Enables being able to use Route when using createFileRoute, could not get this to work since it breaks useSearch (returns any)
// declare module "@tanstack/router-core" {
//   interface RouteExtensions<TId extends string, TFullPath extends string> {
//     useGrid<TData, TRouter extends AnyRouter = RegisteredRouter>(
//       options: Omit<TableOptions<TData>, "getCoreRowModel" | "getSortedRowModel" | "onSortingChange"> & {
//         searchParamKey: keyof Expand<RouteById<TRouter["routeTree"], TId>["types"]["searchSchema"]>;
//       }
//     ): Table<TData>;
//   }
// }

declare module "@tanstack/react-router" {
  // Augments the RouteApi prototype to be able to use the useGrid function
  interface RouteApi<TId, TRouter extends AnyRouter = RegisteredRouter> {
    useGrid<TData>(options: GridHookOptions<TData, TId, TRouter>): Table<TData>;
  }

  // This is needed to be able to use "Route.prototype.useGrid" below
  interface Route<
    in out TParentRoute extends RouteConstraints["TParentRoute"] = AnyRoute,
    in out TPath extends RouteConstraints["TPath"] = "/",
    in out TFullPath extends RouteConstraints["TFullPath"] = ResolveFullPath<TParentRoute, TPath>,
    in out TCustomId extends RouteConstraints["TCustomId"] = string,
    in out TId extends RouteConstraints["TId"] = ResolveId<TParentRoute, TCustomId, TPath>,
    in out TSearchValidator = undefined,
    in out TParams = ResolveParams<TPath>,
    in out TRouterContext = AnyContext,
    in out TRouteContextFn = AnyContext,
    in out TBeforeLoadFn = AnyContext,
    in out TLoaderDeps extends Record<string, any> = {},
    in out TLoaderFn = undefined,
    in out TChildren = unknown,
    in out TFileRouteTypes = unknown,
  > {
    useGrid<TData, TRouter extends AnyRouter = RegisteredRouter>(options: GridHookOptions<TData, TId, TRouter>): Table<TData>;
  }
}

type UseSearchOptions<TRouter extends AnyRouter, TFrom, TStrict extends boolean> = StrictOrFrom<TRouter, TFrom, TStrict>;

/**
 * Creates a powerful data grid with URL-synchronized state and infinite scrolling capabilities.
 *
 * Real-world use cases:
 * - Data tables where users need to share specific views (sorted/filtered states)
 * - Grids that need to maintain state across page refreshes
 * - Tables with server-side sorting and infinite scroll pagination
 * - Enterprise applications where URL-based state is crucial for bookmarking and sharing
 *
 * @template TData Type of the data being displayed
 * @template TId Route identifier type
 * @template TRouter Router type (defaults to RegisteredRouter)
 * @template TStrict Boolean for type strictness
 *
 * @param {Object} searchOptions - Route configuration that determines where state is stored in the URL
 * @param {Object} options - Grid configuration and behavior options
 * @param {string} options.searchParamKey - URL parameter key for storing grid state
 * @param {Function} [options.onBottomReached] - Called when user scrolls near bottom (infinite scroll)
 * @param {number} [options.bottomThreshold] - Scroll threshold for triggering infinite scroll (0.2 = 20% from bottom)
 *
 * Key Features:
 * 1. URL State Synchronization
 *    - All sorting/filtering state is stored in the URL
 *    - Users can share exact grid views via URL
 *    - Browser back/forward navigation works with grid state
 *
 * 2. Infinite Scrolling
 *    - Automatically detects when user nears bottom
 *    - Triggers data fetching at optimal scroll positions
 *    - Maintains smooth scrolling experience
 *
 * 3. Server-Side Operations
 *    - Designed for server-side sorting and filtering
 *    - Converts between frontend and GraphQL sorting formats
 *    - Optimized for large datasets
 *
 * @example
 * // Creating a users grid with infinite scroll and URL-synced sorting
 * function UsersGrid() {
 *   const table = useGrid(
 *     { from: 'users' },
 *     {
 *       searchParamKey: 'gridState',
 *       onBottomReached: () => fetchNextPage(),
 *       columns: [
 *         {
 *           id: 'name',
 *           meta: { sortKey: 'NAME_ASC' }
 *         }
 *       ],
 *       data: users
 *     }
 *   );
 *
 *   return <DataGrid table={table} />;
 * }
 */
export const useGrid = <TData, TId, TRouter extends AnyRouter = RegisteredRouter, TStrict extends boolean = true>(
  searchOptions: UseSearchOptions<TRouter, TId, TStrict>,
  { searchParamKey, onBottomReached, bottomThreshold = 0.2, ...gridOptions }: GridHookOptions<TData, TId, TRouter>
): GridOptions<TData> => {
  // This is needed because the route that useNavigate uses is different than the one from useSearch
  const router = useRouter();
  const navigate = useNavigate({ from: router.routesById[searchOptions.from!].fullPath });

  /**
   * Manages infinite scroll behavior for data grids.
   *
   * Real-world benefits:
   * - Improves performance by loading data in chunks
   * - Provides smooth scrolling experience for large datasets
   * - Reduces initial page load time
   * - Saves bandwidth by only loading data when needed
   *
   * @param {UIEvent<HTMLDivElement>} e - Scroll event from the grid container
   *
   * Implementation details:
   * 1. Calculates current scroll position relative to container
   * 2. Uses dynamic threshold based on container size
   * 3. Triggers data loading before user hits bottom for seamless experience
   * 4. Debounced to prevent excessive API calls
   */
  const fetchMoreOnBottomReached = useCallback(
    (e: UIEvent<HTMLDivElement>) => {
      const containerRefElement = e.currentTarget;

      // Only proceed if we have a valid container element
      if (containerRefElement) {
        // Get scroll metrics from the container
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;

        // Calculate the threshold point based on container height
        const scrollThreshold = clientHeight * bottomThreshold;

        // Check if we've scrolled close enough to the bottom
        // scrollHeight: total scrollable height
        // scrollTop: how far we've scrolled from the top
        // clientHeight: visible height of the container
        // When (scrollHeight - scrollTop - clientHeight) is small, we're near the bottom
        if (
          onBottomReached &&
          scrollHeight - scrollTop - clientHeight < scrollThreshold &&
          !gridOptions.state?.isFetching &&
          (gridOptions.state?.totalFetched ?? 0) < (gridOptions.state?.totalCount ?? 0)
        ) {
          onBottomReached();
        }
      }
    },
    [onBottomReached, bottomThreshold, gridOptions.state?.isFetching, gridOptions.state?.totalFetched, gridOptions.state?.totalCount]
  );

  // Get current search parameters from the URL
  const searchParams = useSearch({ from: searchOptions.from! });

  // Extract the sorting configuration from search parameters
  const orderFields: [string] = searchParams[searchParamKey]?.orderBy ?? [];

  // Convert GraphQL-style sorting (e.g. ["NAME_ASC", "AGE_DESC"]) to React Table format
  // This enables compatibility between backend API sorting and frontend table sorting
  const sorting: SortingState = orderFields.map((value) => {
    // Split sorting value into field and direction (e.g. "CREATED_AT_DESC" -> ["CREATED_AT", "DESC"])
    const parts = value.split("_");
    const direction = parts.pop();
    const snakeCaseId = parts.join("_");

    return {
      id: snakeToCamel(snakeCaseId),
      desc: direction === "DESC",
    };
  });

  // Initialize and configure the table instance
  const table = useReactTable<TData>({
    ...gridOptions,

    // Core functionality providers
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),

    // Default column configuration
    defaultColumn: {
      // Sorting must be explicitly enabled per column
      enableSorting: false,
    },
    // Prevent removing sort once applied
    enableSortingRemoval: false,
    // Table won't sort data internally - sorting happens on backend
    manualSorting: true,
    // Table won't filter data internally - filtering happens on backend
    manualFiltering: true,
    // Allow sorting by multiple columns
    enableMultiSort: true,

    // Sync table state with current URL search parameters
    state: {
      ...gridOptions.state,
      sorting,
    },

    // Handle sort state changes by updating URL search parameters
    onSortingChange: (updaterFn) => {
      const value = updaterFn instanceof Function ? updaterFn(sorting) : updaterFn;

      // Convert React Table sorting state back to GraphQL format: ["NAME_ASC", "AGE_DESC"]
      const orderBy = value.map((v) => {
        const sortKey = table.getColumn(v.id)?.columnDef?.meta?.sortKey;
        return v.desc ? sortKey?.replace("_ASC", "_DESC") : sortKey;
      });

      // Update URL with new sorting state while preserving other search parameters
      navigate({
        search: (prev: any) => ({
          ...prev,
          [searchParamKey]: {
            ...prev[searchParamKey],
            orderBy,
          },
        }),
      } as any).catch(console.error);
    },
  });

  return { ...table, fetchMoreOnBottomReached };
};

/**
 * Extends TanStack Router's RouteApi prototype to provide a convenient way to use the grid functionality
 * directly with getRouteApi.
 *
 * @param {Object} tableOptions - Configuration options for the table
 * @param {string} tableOptions.searchParamKey - The key in the URL search params that will store sorting state
 * @returns {Table<TData>} A fully configured TanStack Table instance
 *
 * @example
 * ```tsx
 * const routeApi = getRouteApi("/_authenticated/users");
 *
 * function UsersPage() {
 *   const table = routeApi.useGrid({
 *     searchParamKey: 'users',
 *     columns: [...],
 *     data: users
 *   });
 * }
 * ```
 */
RouteApi.prototype.useGrid ??= function <TData, TId, TRouter extends AnyRouter = RegisteredRouter>(gridOptions: GridHookOptions<TData, TId, TRouter>): GridOptions<TData> {
  return useGrid({ from: this.id as string } as any, gridOptions);
};

/**
 * Extends TanStack Router's Route prototype to provide the same grid functionality as RouteApi when the route is defined as a file route.
 * This ensures consistent API access regardless of how you're accessing your route instance.
 *
 * @example
 * ```tsx
 * export const Route = createFileRoute("/users")({
 *   path: '/users'
 * });
 *
 * function UsersPage() {
 *   const table = Route.useGrid({
 *     searchParamKey: 'users',
 *     columns: [...],
 *     data: users
 *   });
 * }
 * ```
 */
Route.prototype.useGrid ??= function <TData, TId, TRouter extends AnyRouter = RegisteredRouter>(gridOptions: GridHookOptions<TData, TId, TRouter>): GridOptions<TData> {
  return useGrid({ from: this.id as string } as any, gridOptions);
};
