import { useCallback, useRef } from "react";
import { Button as AriaButton, Select as AriaSelect, Autocomplete, Popover, SelectValue, useFilter } from "react-aria-components";

import { css } from "../../styled-system/css";
import { selectWithTagGroup } from "../../styled-system/recipes";
import { Icon } from "../common/Icon";
import { Label } from "../common/Label";
import { SearchField } from "../field/SearchField";
import { ListBox } from "../listbox/ListBox";
import { m } from "../paraglide/messages.js";
import { Tag } from "../taggroup/Tag";
import { TagGroup } from "../taggroup/TagGroup";
import { Text } from "../typography/Text";

import type { SelectProps as AriaSelectProps, PopoverProps } from "react-aria-components";

import type { SelectWithTagGroupVariant } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type SelectWithTagGroupProps<T extends object> = Omit<WithoutClassName<AriaSelectProps<T>, "children">, "onChange" | "validate"> &
  Partial<SelectWithTagGroupVariant> &
  Pick<PopoverProps, "placement"> & {
    /**
     * Callback fired when selection changes. For multiple selection, receives an array of keys.
     */
    onChange?: (value: React.Key | React.Key[] | null) => void;

    /**
     * Label of the field shown above the select field.
     */
    label?: string;

    /**
     * Text shown when no items are selected.
     */
    placeholder?: string;

    /**
     * Description of the field shown after the select field.
     */
    description?: string;

    /**
     * Specific error message to display when a problem occurred loading data, not a validation error.
     */
    errorMessage?: string;

    /**
     * The items to display in the dropdown list.
     */
    items: T[];

    /**
     * Render function for each item in the dropdown list.
     */
    children: (item: T) => React.ReactNode;

    /**
     * Function to get a unique key from an item.
     */
    getItemKey?: (item: T) => React.Key;

    /**
     * Function to get the display text from an item.
     */
    getItemText?: (item: T) => string;
  };

/**
 * A multi-select component that displays selected items as removable tags.
 * Combines a Select dropdown with TagGroup for displaying and managing multiple selections.
 *
 * @template T - The type of data object for each selectable item
 *
 * @param {Object} props - The component props
 * @param {string} [props.label] - Text label shown above the select field
 * @param {string} [props.placeholder] - Text shown when no items are selected
 * @param {string} [props.description] - Helper text shown below the field
 * @param {string} [props.errorMessage] - Error message to display
 * @param {T[]} props.items - The items to display in the dropdown
 * @param {(item: T) => React.ReactNode} props.children - Render function for dropdown items
 * @param {(item: T) => React.Key} [props.getItemKey] - Function to get unique key from item
 * @param {(item: T) => string} [props.getItemText] - Function to get display text from item
 * @param {SelectWithTagGroupVariant} [props.size] - Size variant for styling
 * @returns {JSX.Element} A fully styled and accessible multi-select component with tags
 */
export const SelectWithTagGroup = <T extends object>({
  label,
  description,
  placeholder,
  errorMessage,
  items,
  children,
  getItemKey,
  getItemText,
  size,
  placement = "bottom end",
  ...props
}: SelectWithTagGroupProps<T>) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const filter = useFilter({ sensitivity: "base" });
  const filterFn = useCallback((text: string, filterText: string) => filter.contains(text, filterText), [filter]);
  const classes = selectWithTagGroup({ size });

  return (
    <AriaSelect className={classes.wrapper} selectionMode="multiple" {...props}>
      {label && <Label color="primary">{label}</Label>}

      <AriaButton ref={triggerRef} className={classes.trigger}>
        <SelectValue className={css({ flex: "1", display: "flex", alignItems: "center" })}>
          {({ selectedItems, state }) => {
            const selectedItemsArray = Array.from(selectedItems).filter((item) => item != null) as T[];

            return (
              <TagGroup
                aria-label={m.selectedItems()}
                items={selectedItemsArray}
                renderEmptyState={() => <span className={classes.emptyState}>{placeholder ?? m.noSelectedItems()}</span>}
                onRemove={(keys) => {
                  const currentValue = state.value;
                  if (currentValue instanceof Set) {
                    const newSet = new Set(currentValue);
                    keys.forEach((key) => newSet.delete(key));
                    state.setValue(Array.from(newSet));
                  } else if (Array.isArray(currentValue)) {
                    state.setValue(currentValue.filter((k) => !keys.has(k)));
                  }
                }}>
                {(item) => {
                  const key = getItemKey ? getItemKey(item) : ((item as { id?: React.Key }).id ?? m.unknown());
                  const displayText = getItemText ? getItemText(item) : ((item as { name?: string }).name ?? m.Unknown());

                  return (
                    <Tag key={key} id={String(key)} {...({ allowsRemoving: true } as { allowsRemoving: boolean })}>
                      {displayText}
                    </Tag>
                  );
                }}
              </TagGroup>
            );
          }}
        </SelectValue>

        <div slot="trailingIcon" className={classes.iconContainer}>
          <Icon id="plus" size="4" />
        </div>
      </AriaButton>

      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
      {description && <Text slot="description">{description}</Text>}

      <Popover triggerRef={triggerRef} placement={placement} className={classes.popover}>
        <Autocomplete filter={filterFn}>
          <SearchField autoFocus variant="search" />

          <ListBox items={items} variant="search">
            {children}
          </ListBox>
        </Autocomplete>
      </Popover>
    </AriaSelect>
  );
};
