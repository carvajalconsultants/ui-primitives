import { ComboBox as AriaComboBox, Button, FieldError, Input, Popover } from "react-aria-components";

import { comboBox, input } from "../../styled-system/recipes";
import { Icon } from "../common/Icon";
import { Label } from "../common/Label";
import { ListBox } from "../listbox/ListBox";
import { Text } from "../typography/Text";

import type { ComboBoxProps as AriaComboBoxProps } from "react-aria-components";

import type { ComboBoxVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

type ComboBoxProps<T extends object> = WithoutClassName<AriaComboBoxProps<T>, "children"> &
  Partial<ComboBoxVariantProps> & {
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

    /**
     * The items to be displayed in the listbox.
     */
    children: React.ReactNode | ((item: T) => React.ReactNode);
  };

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
            <ListBox className={classes.listBox}>{children}</ListBox>
          </Popover>
        </>
      )}
    </AriaComboBox>
  );
};
