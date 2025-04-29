import { ComboBox as AriaComboBox, Button, FieldError, Input, Popover } from "react-aria-components";

import { comboBox, input } from "../../styled-system/recipes";
import { Icon } from "../common/Icon";
import { Label } from "../common/Label";
import { VirtualizedListBox } from "../listbox/VirtualizedListBox";
import { Text } from "../typography/Text";

import type { ComboBoxProps as AriaComboBoxProps } from "react-aria-components";

import type { ComboBoxVariantProps } from "../../styled-system/recipes";
import type { VirtualizedListBoxProps } from "../listbox/VirtualizedListBox";
import type { WithoutClassName } from "../types";

//TODO Add the onAddNewItem and addNewText to DataComboBox (get all this from IdeasForDataComboBox)

type BaseComboBoxProps<T extends object> = WithoutClassName<AriaComboBoxProps<T>, "children" | "items" | "defaultItems"> &
  Partial<ComboBoxVariantProps> &
  Pick<VirtualizedListBoxProps<T>, "children"> & {
    /**
     * Label of the field shown above the input field.
     */
    label: string;

    /**
     * Text shown in the input field before it has a value
     */
    placeholder?: string;

    /**
     * Description of the field shown after the input field.
     */
    description?: string;
  };

type ComboBoxPropsWithItems<T extends object> = BaseComboBoxProps<T> & {
  /**
   * The list of ComboBox items (controlled).
   */
  items: Iterable<T>;

  defaultItems?: never;
};

type ComboBoxPropsWithDefaultItems<T extends object> = BaseComboBoxProps<T> & {
  items?: never;

  /**
   * The list of ComboBox items (uncontrolled).
   */
  defaultItems: Iterable<T>;
};

type ComboBoxPropsWithoutItems<T extends object> = BaseComboBoxProps<T> & {
  items?: never;
  defaultItems?: never;
};

type ComboBoxProps<T extends object> = ComboBoxPropsWithItems<T> | ComboBoxPropsWithDefaultItems<T> | ComboBoxPropsWithoutItems<T>;

/**
 * ARIA compliant ComboBox component combining a text input with a listbox dropdown.
 */
export const ComboBox = <T extends object>({ label, description, placeholder, children, size, ...props }: ComboBoxProps<T>) => {
  const classes = comboBox({ size });
  const classesInput = input();

  return (
    <AriaComboBox className={classes.wrapper} {...props}>
      {({ isOpen }) => (
        <>
          <Label color="primary">{label}</Label>

          <div>
            <Input placeholder={placeholder} className={classes.input} />

            <Button data-rotate={isOpen} className={classes.button}>
              <Icon id="chevron-down" />
            </Button>
          </div>

          <FieldError className={classesInput.error} />
          {description && <Text slot="description">{description}</Text>}

          <Popover className={classes.popover}>
            <VirtualizedListBox>{children}</VirtualizedListBox>
          </Popover>
        </>
      )}
    </AriaComboBox>
  );
};
