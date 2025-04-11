import { Link as AriaLink } from "react-aria-components";

import { button } from "../../styled-system/recipes/button";

import type { FC } from "react";
import type { LinkProps as AriaLinkProps } from "react-aria-components";

import type { ButtonVariantProps as LinkVariants } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type LinkProps = Partial<LinkVariants> & WithoutClassName<AriaLinkProps>;

/**
 * ARIA compliant link that wraps the button component styling.
 */
export const Link: FC<LinkProps> = ({ children, ...props }) => (
  <AriaLink className={button(props)} {...props}>
    {children}
  </AriaLink>
);
