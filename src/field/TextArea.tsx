import { TextArea as AriaTextArea, TextField as AriaTextField, FieldError } from "react-aria-components";

import { input } from "../../styled-system/recipes";
import { Label } from "../common/Label";
import { Text } from "../typography/Text";

import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components";

import type { InputVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type TextareaProps = WithoutClassName<AriaTextFieldProps> &
  Partial<InputVariantProps> & {
    label?: string;

    /**
     * Text shown in the textarea field before it has a value
     */
    placeholder?: string;

    /**
     * Description of the field shown after the textarea field.
     */
    description?: string;

    /**
     * Ref to the underlying textarea element
     */
    ref?: React.Ref<HTMLTextAreaElement>;

    /**
     * Minimum number of rows to display
     */
    rows?: number;
  };

/**
 * TextArea component for collecting multi-line text input from users in forms, such as comments, descriptions, or feedback.
 */
export const TextArea = ({ size, bordered, variant, label, placeholder, description, ref, rows = 3, ...props }: TextareaProps) => {
  const classes = input({ variant, size, bordered });

  return (
    <AriaTextField className={classes.wrapper} {...props}>
      <Label color="primary">{label}</Label>
      <AriaTextArea ref={ref} className={classes.textarea} placeholder={placeholder} rows={rows} />

      <FieldError className={classes.error} />
      {description && <Text slot="description">{description}</Text>}
    </AriaTextField>
  );
};
