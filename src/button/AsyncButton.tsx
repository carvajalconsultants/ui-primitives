import { useState } from "react";

import { Spinner } from "../common/Spinner";
import { Button } from "./Button";

import type { FC, ReactNode } from "react";
import type { ButtonProps as AriaButtonProps } from "react-aria-components";

import type { ButtonVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export interface AsyncButtonProps extends Omit<WithoutClassName<AriaButtonProps>, "onPress">, Partial<ButtonVariantProps> {
  children?: ReactNode | ((renderProps: { isPending: boolean }) => ReactNode);
  loadingText?: string;
  onPress?: (e: Parameters<NonNullable<AriaButtonProps["onPress"]>>[0]) => void | Promise<void>;
}

/**
 * Async button component that extends Button with automatic loading state handling.
 * Automatically handles loading states when onPress returns a Promise.
 */
export const AsyncButton: FC<AsyncButtonProps> = ({ variant = "primary", children, loadingText, onPress, ...props }) => {
  const [isPending, setIsPending] = useState(false);

  const handlePress = (...args: Parameters<NonNullable<typeof onPress>>) => {
    if (!onPress) return;

    const result = onPress(...args);

    if (result && typeof result === "object" && "then" in result) {
      setIsPending(true);

      void result.finally(() => {
        setIsPending(false);
      });
    }
  };

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
