import { useState } from "react";
import { Button as AriaButton } from "react-aria-components";

import { Box } from "../../styled-system/jsx";
import { button } from "../../styled-system/recipes/button";
import { Spinner } from "../common/Spinner";

import type { FC, ReactNode } from "react";
import type { AriaButtonProps, PressEvent } from "react-aria";

import type { ButtonVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

type AsyncPressHandler = (e: PressEvent) => Promise<unknown> | void;

export type ButtonProps = Omit<WithoutClassName<AriaButtonProps>, "onPress"> &
  Partial<ButtonVariantProps> & {
    /**
     * Handler called when the button is pressed. Can return a Promise for async operations.
     * When a Promise is returned, the button automatically shows loading state.
     */
    onPress?: AsyncPressHandler;

    /**
     * Optional content to display when loading. If not provided, will show
     * the default children with the spinner.
     */
    loadingChildren?: ReactNode;
  };

/**
 * ARIA compliant button that calls onPress function when clicked.
 * Automatically handles loading state when onPress returns a Promise.
 */
export const Button: FC<ButtonProps> = ({ variant = "primary", width, size, isDisabled, onPress, children, loadingChildren, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = (e: PressEvent) => {
    if (!onPress) return;

    const result = onPress(e);

    if (result instanceof Promise) {
      setIsLoading(true);
      void result.finally(() => setIsLoading(false));
    }
  };

  const disabled = (isDisabled ?? false) || isLoading;

  return (
    <AriaButton className={button({ variant, width, size })} isDisabled={disabled} aria-disabled={disabled} onPress={handlePress} {...props}>
      {isLoading ? (
        <Box display="flex" alignItems="center" justifyContent="center" gap="2">
          <Spinner size="4" data-spinner />
          {loadingChildren ?? children}
        </Box>
      ) : (
        children
      )}
    </AriaButton>
  );
};
