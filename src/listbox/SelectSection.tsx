import { Collection, Header, ListBoxSection } from "react-aria-components";

import { cx } from "../../styled-system/css";
import { selectSection } from "../../styled-system/recipes";

import type * as React from "react";
import type { SectionProps } from "react-aria-components";

import type { WithoutClassName } from "../types";

/**
 * Props for the SelectSection component.
 */
export interface SelectSectionProps<T extends object> extends WithoutClassName<SectionProps<T>> {
  /**
   * Title text displayed in the section header.
   */
  title?: string;

  /**
   * Items to display in this section.
   */
  items?: T[];

  /**
   * Optional custom className for the section root element.
   */
  className?: string;
}

/**
 * A section component for grouping select items with a styled header.
 * Useful for organizing related items in select menus.
 *
 * @template T - The type of data items in the section
 *
 * @example
 * ```tsx
 * <ListBox>
 *   <SelectSection title="Fruits" items={fruits}>
 *     {(item) => <SelectItem>{item.name}</SelectItem>}
 *   </SelectSection>
 *   <SelectSection title="Vegetables" items={vegetables}>
 *     {(item) => <SelectItem>{item.name}</SelectItem>}
 *   </SelectSection>
 * </ListBox>
 * ```
 *
 * @param {SelectSectionProps<T>} props - Component properties
 * @param {string} [props.title] - Title text for the section header
 * @param {T[]} [props.items] - Items to display in this section
 * @returns {JSX.Element} A styled section with header for grouping select items
 */
export const SelectSection = <T extends object>({ title, items, children, className, ...props }: SelectSectionProps<T>) => {
  const classes = selectSection();

  return (
    <ListBoxSection {...props} className={cx(classes.root, className)}>
      {title && <Header className={classes.header}>{title}</Header>}

      {items ? <Collection items={items}>{children as unknown as (item: T) => React.ReactElement}</Collection> : (children as React.ReactNode)}
    </ListBoxSection>
  );
};
