import { Heading } from "../typography/Heading";

import type { FC, PropsWithChildren } from "react";
import type { HeadingProps as AriaHeadingProps } from "react-aria-components";

import type { HeadingVariant } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

type HeadingProps = Partial<HeadingVariant> & WithoutClassName<AriaHeadingProps>;

export type DialogTitleProps = HeadingProps;

/**
 * Dialog title component displayed as a heading in the dialog header.
 */
export const DialogTitle: FC<PropsWithChildren<DialogTitleProps>> = ({ children, ...props }) => (
  <Heading slot="title" level={1} {...props}>
    {children}
  </Heading>
);
