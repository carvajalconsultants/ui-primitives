import { useContext } from "react";
import { Button, DisclosureStateContext } from "react-aria-components";

import { css, cx } from "../../styled-system/css";
import { accordion } from "../../styled-system/recipes/accordion";
import { Icon } from "../common/Icon";

import type { FC, ReactNode } from "react";
import type { ButtonProps as AriaButtonProps } from "react-aria-components";

import type { AccordionVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export interface AccordionHeaderProps extends WithoutClassName<AriaButtonProps, "children">, Partial<AccordionVariantProps> {
  /**
   * Content to display in the header. Can be a ReactNode or a render function that receives expanded state.
   */
  children?: ReactNode | ((props: { isExpanded: boolean }) => ReactNode);

  /**
   * Custom render function for the icon. Receives the expanded state and allows full customization.
   * If not provided, defaults to chevron-down icon that rotates when expanded.
   */
  renderIcon?: (props: { isExpanded: boolean }) => ReactNode;
}

/**
 * ARIA compliant AccordionHeader component that acts as the trigger button for an accordion item.
 * Supports custom content and configurable icons.
 *
 * <AccordionHeader>Section Title</AccordionHeader>
 *
 * <AccordionHeader>
 *   {({ isExpanded }) => `Section ${isExpanded ? "Expanded" : "Collapsed"}`}
 * </AccordionHeader>
 *
 * <AccordionHeader renderIcon={({ isExpanded }) => (
 *   <Icon id={isExpanded ? "minus" : "plus"} />
 * )}>
 *   Section with custom icons
 * </AccordionHeader>
 *
 * <AccordionHeader renderIcon={({ isExpanded }) => (
 *   <CustomIconComponent expanded={isExpanded} />
 * )}>
 *   Section with custom icon renderer
 * </AccordionHeader>
 */
export const AccordionHeader: FC<AccordionHeaderProps> = ({ children, variant, renderIcon, ...props }) => {
  const classes = accordion({ variant });
  const disclosureState = useContext(DisclosureStateContext);
  const isExpanded = disclosureState?.isExpanded ?? false;

  return (
    <Button slot="trigger" className={cx(classes.header)} {...props}>
      {() => {
        const content = typeof children === "function" ? children({ isExpanded }) : children;
        const iconElement = renderIcon ? (
          renderIcon({ isExpanded })
        ) : (
          <Icon
            id="chevron-down"
            className={css({
              width: "3 !important",
              height: "3 !important",
              transition: "[transform 0.2s ease-in-out]",
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
            })}
          />
        );

        return (
          <>
            {content}
            {iconElement}
          </>
        );
      }}
    </Button>
  );
};
