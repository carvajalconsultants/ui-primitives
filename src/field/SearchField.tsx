import { useCallback } from "react";
import { SearchField as AriaSearchField, Button, Input } from "react-aria-components";

import { useDebounceCallback } from "usehooks-ts";

import { css, cx } from "../../styled-system/css";
import { input } from "../../styled-system/recipes";
import { Icon } from "../common/Icon";

import type { InputProps } from "react-aria-components";

import type { InputVariantProps } from "../../styled-system/recipes";

/**
 * A search input field component that provides real-time search functionality with performance optimization.
 * This component is ideal for scenarios where you need to search through large datasets or make API calls
 * based on user input, while preventing excessive server requests.
 *
 * @example
 * ```tsx
 * <SearchField
 *   onChange={(value) => searchProducts(value)}
 *   debounceTime={300}
 *   size="md"
 * />
 * ```
 */
export type SearchFieldProps = Omit<InputProps, "size" | "onChange"> &
  Partial<InputVariantProps> & {
    /**
     * The delay in milliseconds before triggering the search after the user stops typing.
     * This helps reduce server load and improve performance by preventing rapid-fire API calls.
     * @default 500
     */
    debounceTime?: number;

    /**
     * Callback function that receives the search query value.
     * This function is debounced based on the debounceTime parameter to optimize performance.
     * When the user clears the search field, the value will be undefined.
     *
     * @param value - The current search query text, or undefined when cleared
     */
    onChange?: (value: string | undefined) => void;
  };

/**
 * A modern search field component that provides an optimized search experience with built-in
 * performance considerations. It includes a search icon, clear button, and debounced input handling
 * to prevent overwhelming backend services.
 *
 * Key features:
 * - Debounced search to optimize performance
 * - Clear button that appears only when there's input
 * - Accessible through ARIA attributes
 * - Customizable styling through size and border props
 *
 * @param props - Component properties
 * @param props.size - Controls the overall size of the search field
 * @param props.debounceTime - Milliseconds to wait before triggering search (default: 500ms)
 * @param props.onChange - Handler for search value changes
 * @param props.bordered - Whether to show a border around the field
 */
export const SearchField = ({ size, debounceTime = 500, onChange, bordered = false, ...props }: SearchFieldProps) => {
  // Apply styling classes based on size and border preferences
  const classes = input({ size, bordered });

  /**
   * Creates a debounced version of the onChange handler to prevent rapid-fire API calls.
   * If no onChange handler is provided, uses an empty function as fallback.
   */
  const debounced = useDebounceCallback(
    onChange ??
      (() => {
        /* When not specified */
      }),
    debounceTime
  );

  /**
   * Handles user input changes by passing the new value through the debounced handler.
   * This ensures that rapid typing doesn't trigger multiple unnecessary search operations.
   */
  const changeHandler = useCallback(
    (value: string) => {
      debounced(value);
    },
    [debounced]
  );

  /**
   * Handles the clear button click by resetting the search field.
   * This provides users with a quick way to reset their search and start over.
   */
  const clearHandler = useCallback(() => {
    onChange?.(undefined);
  }, [onChange]);

  return (
    <AriaSearchField
      onChange={changeHandler}
      aria-label="Search"
      className={cx(
        classes.wrapper,
        css({
          position: "relative",
          width: "full",

          "&[data-empty='true'] button": {
            display: "none",
          },
        })
      )}>
      <Icon id="search" size="4" className={classes.leftIcon} />

      <Input
        className={cx(
          classes.input,
          css({
            paddingLeft: size === "sm" ? "9" : "10",
          })
        )}
        {...props}
      />

      <Button onPress={clearHandler} aria-label="Clear search" className={classes.clearButton}>
        <Icon id="x" size="4" />
      </Button>
    </AriaSearchField>
  );
};
