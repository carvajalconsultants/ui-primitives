import { ListBoxItem as AriaListBoxItem } from "react-aria-components";

import { comboBox } from "../../styled-system/recipes";

import type { FC } from "react";
import type { ListBoxItemProps as AriaListBoxItemProps } from "react-aria-components";

import type { ComboBoxVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

type ListItemProps = WithoutClassName<AriaListBoxItemProps> & Partial<ComboBoxVariantProps>;

/**
 * Accessible and customizable list item component for <ComboBox>.
 * Enhances user interaction by providing a selectable option within dropdown menus,
 * supporting keyboard navigation and screen reader compatibility.
 */
export const ListItem: FC<ListItemProps> = ({ size, ...props }) => {
  const classes = comboBox({ size });

  return <AriaListBoxItem {...props} className={classes.listBoxItem} />;
};
