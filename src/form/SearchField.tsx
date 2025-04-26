import { useCallback, useEffect, useState } from "react";
import { SearchField as AriaSearchField, Button, Input } from "react-aria-components";

import { useDebounceCallback } from "usehooks-ts";

import { css, cx } from "../../styled-system/css";
import { input } from "../../styled-system/recipes";
import { Icon } from "../common/Icon";

import type { InputProps } from "react-aria-components";

import type { InputVariantProps } from "../../styled-system/recipes";

type SearchFieldProps = Omit<InputProps, "size" | "onChange"> &
  Partial<InputVariantProps> & {
    onClear?: () => void;
    debounceTime?: number;
    onDebounceChange?: (value: string | undefined) => void;
  };

export const SearchField = ({ onClear, size, debounceTime = 500, value: initialValue = "", onDebounceChange, bordered = false, ...props }: SearchFieldProps) => {
  const classes = input({ size, bordered });

  // Handle input changes
  const [value, setValue] = useState(initialValue as string);

  // Debounce the input changes
  const debounced = useDebounceCallback(setValue, debounceTime);

  // Handle clear
  const handleClear = useCallback(() => {
    setValue("");
    onClear?.();
  }, [onClear]);

  useEffect(() => {
    onDebounceChange?.(value || undefined);
  }, [onDebounceChange, value]);

  return (
    <AriaSearchField
      defaultValue={value}
      onChange={(event) => debounced(event)}
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

      <Button onPress={handleClear} aria-label="Clear search" className={classes.clearButton}>
        <Icon id="x" size="4" />
      </Button>
    </AriaSearchField>
  );
};
