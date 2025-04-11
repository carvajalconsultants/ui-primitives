import { Heading as AriaHeading } from "react-aria-components";

import { heading } from "../../styled-system/recipes";

import type { FC } from "react";
import type { HeadingProps as AriaHeadingProps } from "react-aria-components";

import type { HeadingVariant } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

type HeadingProps = Partial<HeadingVariant> & WithoutClassName<AriaHeadingProps>;

/**
 * Renders a <h1>, <h2>, <h3>, <h4>, <h5> and <h6> tags with the design system depending on the specified level.
 */
export const Heading: FC<HeadingProps> = ({ size, color, weight, textWrap, ...props }) => <AriaHeading className={heading({ size, color, weight, textWrap })} {...props} />;
