import { Button as AriaButton } from "react-aria-components";

import { button } from "../../styled-system/recipes/button";

import type { FC } from "react";
import type { ButtonProps as AriaButtonProps } from "react-aria-components";

import type { ButtonVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type ButtonProps = WithoutClassName<AriaButtonProps> & Partial<ButtonVariantProps>;

/**
 * ARIA compliant button that calls onPress function when clicked.
 * Supports pending state via isPending prop and render props for dynamic content.
 */
export const Button: FC<ButtonProps> = ({ variant = "primary", width, size, ...props }) => <AriaButton className={button({ variant, width, size })} {...props} />;
