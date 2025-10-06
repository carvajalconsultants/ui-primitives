import { forwardRef } from "react";
import { TextField as AriaTextField, FieldError, Input } from "react-aria-components";

import { input } from "../../styled-system/recipes";
import { Label } from "../common/Label";
import { Text } from "../typography/Text";

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

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ size, label, placeholder, description, bordered = true, ...props }, ref) => {
  const classes = input({ size, bordered });

  return (
    <AriaTextField className={classes.wrapper} {...props}>
      <Label color="primary">{label}</Label>
      <Input ref={ref} className={classes.input} placeholder={placeholder} />

      <FieldError className={classes.error} />
      {description && <Text slot="description">{description}</Text>}
    </AriaTextField>
  );
});

TextField.displayName = "TextField";
