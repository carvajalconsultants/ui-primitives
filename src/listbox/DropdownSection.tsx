import { Collection, Header, ListBoxSection } from "react-aria-components";

import { css } from "../../styled-system/css";

import type { SectionProps } from "react-aria-components";

import type { WithoutClassName } from "../types";

/**
 * Props for the DropdownSection component.
 */
export interface DropdownSectionProps<T extends object> extends WithoutClassName<SectionProps<T>> {
  /**
   * Title text displayed in the section header.
   */
  title?: string;

  /**
   * Items to display in this section.
   */
  items?: T[];
}

/**
 * A section component for grouping dropdown items with a styled header.
 * Useful for organizing related items in dropdown menus.
 *
 * @template T - The type of data items in the section
 *
 * @example
 * ```tsx
 * <ListBox>
 *   <DropdownSection title="Fruits" items={fruits}>
 *     {(item) => <DropdownItem>{item.name}</DropdownItem>}
 *   </DropdownSection>
 *   <DropdownSection title="Vegetables" items={vegetables}>
 *     {(item) => <DropdownItem>{item.name}</DropdownItem>}
 *   </DropdownSection>
 * </ListBox>
 * ```
 *
 * @param {DropdownSectionProps<T>} props - Component properties
 * @param {string} [props.title] - Title text for the section header
 * @param {T[]} [props.items] - Items to display in this section
 * @returns {JSX.Element} A styled section with header for grouping dropdown items
 */
export const DropdownSection = <T extends object>({ title, items, children, ...props }: DropdownSectionProps<T>) => (
  <ListBoxSection
    {...props}
    className={css({
      "&:first-child": {
        marginTop: "-5px",
      },
      "&::after": {
        content: '""',
        display: "block",
        height: "5px",
      },
    })}>
    {title && (
      <Header
        className={css({
          fontSize: "sm",
          fontWeight: "semiBold",
          color: "text.secondary",
          paddingX: "4",
          paddingY: "1",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          position: "sticky",
          top: "-5px",
          marginTop: "-1px",
          marginX: "-1px",
          zIndex: "10",
          bg: "bg.secondary.index",
          backdropFilter: "blur(8px)",
          borderTopWidth: "1px",
          borderBottomWidth: "1px",
          borderColor: "border.secondary._alt",
          "& + *": {
            marginTop: "1",
          },
        })}>
        {title}
      </Header>
    )}

    {items ? <Collection items={items}>{children}</Collection> : children}
  </ListBoxSection>
);

