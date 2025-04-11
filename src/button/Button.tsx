import { Button as AriaButton } from "react-aria-components";

import { button } from "../../styled-system/recipes/button";

import type { FC } from "react";
import type { AriaButtonProps } from "react-aria";

import type { ButtonVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type ButtonProps = WithoutClassName<AriaButtonProps> & Partial<ButtonVariantProps>;

/**
 * ARIA compliant button that calls onPress function when clicked.
 */
export const Button: FC<ButtonProps> = ({ variant, width, size, ...props }) => <AriaButton className={button({ variant, width, size })} {...props} />;
