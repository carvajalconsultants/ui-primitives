import { Button as AriaButton } from "react-aria-components";

import { Box } from "../../styled-system/jsx";
import { button } from "../../styled-system/recipes/button";
import { Spinner } from "../common/Spinner";

import type { FC } from "react";
import type { AriaButtonProps } from "react-aria";

import type { ButtonVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type ButtonProps = WithoutClassName<AriaButtonProps> &
  Partial<ButtonVariantProps> & {
    /**
     * If true, shows a loading spinner and disables the button.
     */
    isLoading?: boolean;
  };

/**
 * ARIA compliant button that calls onPress function when clicked.
 */
export const Button: FC<ButtonProps> = ({ variant = "primary", width, size, isLoading = false, isDisabled, children, ...props }) => {
  // If loading, always disable the button
  const disabled = isDisabled ?? isLoading;

  return (
    <AriaButton className={button({ variant, width, size })} isDisabled={disabled} aria-disabled={disabled} {...props}>
      {isLoading ? (
        <Box display="flex" alignItems="center" justifyContent="center" gap="2">
          <Spinner size="4" data-spinner />
          {children}
        </Box>
      ) : (
        children
      )}
    </AriaButton>
  );
};
