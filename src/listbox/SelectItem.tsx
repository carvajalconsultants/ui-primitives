import { ListBoxItem as AriaListBoxItem, composeRenderProps } from "react-aria-components";

import { selectItem } from "../../styled-system/recipes";
import { Icon } from "../common/Icon";

import type { FC } from "react";
import type { ListBoxItemProps as AriaListBoxItemProps } from "react-aria-components";

import type { WithoutClassName } from "../types";

/**
 * Represents the properties for a SelectItem component.
 */
type SelectItemProps = WithoutClassName<AriaListBoxItemProps>;

/**
 * An enhanced select item component with checkmark icons for selected items.
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
 *   <SelectItem id="1">Option 1</SelectItem>
 *   <SelectItem id="2" isDisabled>Option 2</SelectItem>
 *   <SelectItem id="3">Option 3</SelectItem>
 * </ListBox>
 * ```
 *
 * @param {SelectItemProps} props - The component properties
 * @returns {JSX.Element} A styled and accessible select item component with checkmark indicators
 */
export const SelectItem: FC<SelectItemProps> = (props) => {
  const textValue = props.textValue ?? (typeof props.children === "string" ? props.children : undefined);
  const classes = selectItem();

  return (
    <AriaListBoxItem {...props} textValue={textValue} className={classes.root}>
      {composeRenderProps(props.children, (children, { isSelected }) => (
        <>
          <span className={classes.content}>{children}</span>
          <span className={classes.icon}>{isSelected && <Icon id="check" size="4" />}</span>
        </>
      ))}
    </AriaListBoxItem>
  );
};
