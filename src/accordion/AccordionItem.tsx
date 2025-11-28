import { Disclosure as AriaDisclosure } from "react-aria-components";

import { cx } from "../../styled-system/css";
import { accordion } from "../../styled-system/recipes/accordion";

import type { FC } from "react";
import type { DisclosureProps as AriaDisclosureProps } from "react-aria-components";

import type { AccordionVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type AccordionItemProps = WithoutClassName<AriaDisclosureProps> & Partial<AccordionVariantProps>;

/**
 * ARIA compliant AccordionItem component that represents a single collapsible section.
 *
 * <AccordionItem id="item1">
 *   <AccordionHeader>Section Title</AccordionHeader>
 *   <AccordionPanel>Content</AccordionPanel>
 * </AccordionItem>
 */
export const AccordionItem: FC<AccordionItemProps> = ({ children, variant, ...props }) => {
  const classes = accordion({ variant });

  return (
    <AriaDisclosure className={cx(classes.item)} {...props}>
      {children}
    </AriaDisclosure>
  );
};
