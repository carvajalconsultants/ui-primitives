import { DisclosureGroup as AriaDisclosureGroup } from "react-aria-components";

import { cx } from "../../styled-system/css";
import { accordion } from "../../styled-system/recipes/accordion";

import type { FC } from "react";
import type { DisclosureGroupProps as AriaDisclosureGroupProps } from "react-aria-components";

import type { AccordionVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type AccordionProps = WithoutClassName<AriaDisclosureGroupProps> & Partial<AccordionVariantProps>;

/**
 * ARIA compliant Accordion component that provides a group of collapsible sections.
 *
 * <Accordion>
 *   <AccordionItem id="item1">
 *     <AccordionHeader>Section 1</AccordionHeader>
 *     <AccordionPanel>Content for section 1</AccordionPanel>
 *   </AccordionItem>
 *   <AccordionItem id="item2">
 *     <AccordionHeader>Section 2</AccordionHeader>
 *     <AccordionPanel>Content for section 2</AccordionPanel>
 *   </AccordionItem>
 * </Accordion>
 */
export const Accordion: FC<AccordionProps> = ({ children, variant, ...props }) => {
  const classes = accordion({ variant });

  return (
    <AriaDisclosureGroup className={cx(classes.root)} {...props}>
      {children}
    </AriaDisclosureGroup>
  );
};
