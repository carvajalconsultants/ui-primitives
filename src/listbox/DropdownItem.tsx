import { ListBoxItem as AriaListBoxItem, composeRenderProps } from "react-aria-components";

import { css, cx } from "../../styled-system/css";
import { dropdownItem } from "../../styled-system/recipes";
import { Icon } from "../common/Icon";

import type { FC } from "react";
import type { ListBoxItemProps as AriaListBoxItemProps } from "react-aria-components";

import type { WithoutClassName } from "../types";

/**
 * Represents the properties for a DropdownItem component.
 */
type DropdownItemProps = WithoutClassName<AriaListBoxItemProps>;

/**
 * An enhanced dropdown item component with checkmark icons for selected items.
 * Provides improved visual feedback with hover, focus, and selection states.
 *
 * Features:
 * - Checkmark icon displayed when item is selected
 * - Enhanced hover and focus states
 * - Disabled state styling
 * - Accessible through ARIA attributes
 *
 * @example
 * ```tsx
 * <ListBox>
 *   <DropdownItem id="1">Option 1</DropdownItem>
 *   <DropdownItem id="2" isDisabled>Option 2</DropdownItem>
 *   <DropdownItem id="3">Option 3</DropdownItem>
 * </ListBox>
 * ```
 *
 * @param {DropdownItemProps} props - The component properties
 * @returns {JSX.Element} A styled and accessible dropdown item component with checkmark indicators
 */
export const DropdownItem: FC<DropdownItemProps> = (props) => {
  const textValue = props.textValue ?? (typeof props.children === "string" ? props.children : undefined);
  const classes = dropdownItem();

  return (
    <AriaListBoxItem
      {...props}
      textValue={textValue}
      className={cx(
        classes,
        css({
          "&[data-focused]": {
            bg: "bg.brand.primary",
            color: "text.white",
          },
          "&[data-disabled]": {
            color: "text.disabled",
            cursor: "not-allowed",
            opacity: "60",
          },
          "&:not([data-focused]):hover": {
            bg: "bg.secondary.index",
          },
        })
      )}>
      {composeRenderProps(props.children, (children, { isSelected }) => (
        <>
          <span
            className={css({
              display: "flex",
              alignItems: "center",
              flex: "1",
              gap: "2",
              fontWeight: "normal",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              "[data-selected] &": {
                fontWeight: "semiBold",
              },
            })}>
            {children}
          </span>
          <span
            className={css({
              display: "flex",
              alignItems: "center",
              width: "5",
              justifyContent: "center",
              flexShrink: "0",
            })}>
            {isSelected && <Icon id="check" size="4" />}
          </span>
        </>
      ))}
    </AriaListBoxItem>
  );
};
