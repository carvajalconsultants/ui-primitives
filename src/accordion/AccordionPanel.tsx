import { useContext } from "react";
import { DisclosurePanel as AriaDisclosurePanel, DisclosureStateContext } from "react-aria-components";

import { cx } from "../../styled-system/css";
import { accordion } from "../../styled-system/recipes/accordion";

import type { FC } from "react";
import type { DisclosurePanelProps as AriaDisclosurePanelProps } from "react-aria-components";

import type { AccordionVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type AccordionPanelProps = WithoutClassName<AriaDisclosurePanelProps> & Partial<AccordionVariantProps>;

/**
 * Contains the collapsible content that users reveal when they need more information, keeping the
 * interface clean while providing access to detailed information on demand. This helps prevent
 * information overload by hiding content until users explicitly request it.
 *
 * <AccordionPanel>Content goes here</AccordionPanel>
 */
export const AccordionPanel: FC<AccordionPanelProps> = ({ children, variant, ...props }) => {
  const classes = accordion({ variant });
  const disclosureState = useContext(DisclosureStateContext);
  const isExpanded = disclosureState?.isExpanded ?? false;

  return (
    <AriaDisclosurePanel className={cx(classes.panel)} data-expanded={isExpanded || undefined} {...props}>
      {children}
    </AriaDisclosurePanel>
  );
};
