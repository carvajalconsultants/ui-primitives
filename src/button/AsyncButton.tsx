import { useState } from "react";

import { Spinner } from "../common/Spinner";
import { Button } from "./Button";

import type { PressEvent } from "@react-types/shared";
import type { FC, ReactNode } from "react";
import type { ButtonProps as AriaButtonProps } from "react-aria-components";

import type { ButtonVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export interface AsyncButtonProps extends Omit<WithoutClassName<AriaButtonProps>, "onPress">, Partial<ButtonVariantProps> {
  children?: ReactNode | ((renderProps: { isPending: boolean }) => ReactNode);
  loadingText?: string;
  onPress?: (e: PressEvent) => void | Promise<void>;
}

/**
 * Async Button that manages pending state for async onPress handlers.
 * - If onPress returns a Promise, it toggles an internal isPending flag until it settles.
 * - While pending, it shows a Spinner with optional loadingText, or you can render via
 *   function-as-children to receive { isPending } for custom UI.
 * Use this when you want automatic loading UX without wiring state manually; otherwise use Button.
 */
export const AsyncButton: FC<AsyncButtonProps> = ({ variant = "primary", children, loadingText, onPress, ...props }) => {
  const [isPending, setIsPending] = useState(false);

  const handlePress: NonNullable<AriaButtonProps["onPress"]> = (...args) => {
    if (isPending || !onPress) return;

    try {
      const maybePromise = onPress(...args);

      if (maybePromise instanceof Promise) {
        setIsPending(true);

        // Explicitly ignore the promise but handle errors
        void maybePromise
          .catch((err) => {
            console.error("AsyncButton onPress error:", err);
          })
          .finally(() => setIsPending(false));
      }
    } catch (err) {
      console.error("AsyncButton sync error:", err);
    }
  };

  /**
   * Resolves what to render inside the button based on pending state and children type.
   * - If children is a function, it receives { isPending } to render custom content.
   * - If pending and children is not a function, shows Spinner and optional loadingText.
   * - Otherwise returns children as-is.
   */
  const renderChildren = () => {
    if (typeof children === "function") {
      return children({ isPending });
    }

    if (isPending) {
      return (
        <>
          <Spinner size="4" />
          {loadingText ?? children}
        </>
      );
    }

    return children;
  };

  return (
    <Button variant={variant} isPending={isPending} onPress={handlePress} {...props}>
      {renderChildren()}
    </Button>
  );
};
