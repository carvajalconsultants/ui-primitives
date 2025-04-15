import { useCallback } from "react";

import type { DependencyList } from "react";

/**
 * A tuple type that represents the previous depth levels in a recursive type.
 * This is used to limit the depth of recursive type operations to prevent infinite recursion.
 *
 * @example
 * type MyType = { a: { b: { c: string } } };
 * // Will only traverse up to depth 5
 */
type Prev = [never, 0, 1, 2, 3, 4, 5];

/**
 * Creates a type that represents all possible paths through a nested object structure.
 * This is essential for type-safe traversal of deeply nested objects in GraphQL responses.
 *
 * @template T - The type of the object to traverse
 * @template Depth - The maximum depth to traverse (defaults to 5 to prevent infinite recursion)
 *
 * @example
 * type MyType = { a: { b: string } };
 * // Results in: ["a"] | ["a", "b"]
 */
type PathTuple<T, Depth extends number = 5> = [Depth] extends [never]
  ? never
  : T extends object
    ? {
        [K in keyof T & string]: [K] | [K, ...PathTuple<NonNullable<T[K]>, Prev[Depth]>];
      }[keyof T & string]
    : [];

/**
 * Retrieves the type at a specific path in a nested object structure.
 * This enables type-safe access to deeply nested properties in GraphQL responses.
 *
 * @template T - The root type to traverse
 * @template P - The path to follow (as a tuple of property keys)
 *
 * @example
 * type MyType = { a: { b: string } };
 * type Result = GetAtPath<MyType, ["a", "b"]>; // string
 */
type GetAtPath<T, P extends PropertyKey[]> = P extends [infer K, ...infer Rest] ? (K extends keyof NonNullable<T> ? GetAtPath<NonNullable<T>[K], Extract<Rest, PropertyKey[]>> : never) : T;

/**
 * Extracts the node type from a GraphQL connection type at a specific path.
 * This is crucial for type-safe pagination in GraphQL queries that follow the Relay specification.
 *
 * @template T - The root type containing the connection
 * @template P - The path to the connection in the type structure
 *
 * @example
 * type MyType = {
 *   users: {
 *     nodes: Array<{ id: string, name: string }>,
 *     pageInfo: { hasNextPage: boolean }
 *   }
 * };
 * type User = GetNodeFromConnection<MyType, ["users"]>; // { id: string, name: string }
 */
export type GetNodeFromConnection<T, P extends PathTuple<T>> = NonNullable<GetAtPath<T, P>> extends { nodes: (infer U)[] } ? U : never;

/**
 * Transforms a database/API style snake_case string into a JavaScript friendly camelCase format.
 * This is essential for mapping backend column names to frontend property names.
 *
 * @param {string} str - The snake_case string to convert (e.g. "USER_FIRST_NAME")
 * @returns {string} The camelCase version of the input string (e.g. "userFirstName")
 */
export const snakeToCamel = (str: string): string => str.toLowerCase().replace(/_([a-z])/g, (_, letter: string) => letter.toUpperCase());

/**
 * Creates a stable callback that safely handles asynchronous functions in React event handlers.
 * This is particularly useful when you need to call async functions from synchronous event handlers
 * like onClick or onPress, where TypeScript would normally complain about Promise misuse.
 *
 * @template T - The type of arguments that the async function accepts
 * @param {(...args: T) => Promise<unknown>} asyncFn - The asynchronous function to be wrapped
 * @param {DependencyList} deps - React dependencies array that controls when the callback should be recreated
 * @returns {(...args: T) => void} A stable function that safely calls the async function without returning a Promise
 *
 * @example
 * // Usage in a component
 * const handleClick = useAsyncCallback(async (event) => {
 *   await someAsyncOperation();
 * }, []);
 *
 * <button onClick={handleClick}>Click me</button>
 */
export const useAsyncCallback = <T extends unknown[]>(asyncFn: (...args: T) => Promise<unknown>, deps: DependencyList): ((...args: T) => void) =>
  useCallback((...args: T) => {
    // Using void operator to explicitly ignore the Promise returned by asyncFn
    // This prevents TypeScript from complaining about unhandled Promises
    // while still allowing the async function to execute
    void asyncFn(...args);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
