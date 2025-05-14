import { TextField as AriaTextField, FieldError, Input } from "react-aria-components";

import { input } from "../../styled-system/recipes";
import { Label } from "../common/Label";
import { Text } from "../typography/Text";

import type { FC } from "react";
import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components";

import type { InputVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type TextFieldProps = WithoutClassName<AriaTextFieldProps> &
  Partial<InputVariantProps> & {
    label?: string;

    /**
     * Text shown in the input field before it has a value
     */
    placeholder?: string;

    /**
     * Description of the field shown after the input field.
     */
    description?: string;
  };

export const TextField: FC<TextFieldProps> = ({ size, label, placeholder, description, bordered = true, ...props }) => {
  const classes = input({ size, bordered });

  return (
    <AriaTextField className={classes.wrapper} {...props}>
      <Label color="primary">{label}</Label>
      <Input className={classes.input} placeholder={placeholder} />

      <FieldError className={classes.error} />
      {description && <Text slot="description">{description}</Text>}
    </AriaTextField>
  );
};
