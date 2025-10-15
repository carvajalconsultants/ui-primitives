import { TextArea as AriaTextArea, TextField as AriaTextField, FieldError } from "react-aria-components";

import { input } from "../../styled-system/recipes";
import { Label } from "../common/Label";
import { Text } from "../typography/Text";

import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components";

import type { WithoutClassName } from "../types";

export type TextareaProps = WithoutClassName<AriaTextFieldProps> & {
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
   * Size variant of the textarea
   */
  size?: "sm" | "md" | "lg";

  /**
   * Whether the textarea has a border
   */
  bordered?: boolean;

  /**
   * Ref to the underlying textarea element
   */
  textareaRef?: React.Ref<HTMLTextAreaElement>;

  /**
   * Minimum number of rows to display
   */
  rows?: number;
};

/**
 * TextArea component for collecting multi-line text input from users in forms, such as comments, descriptions, or feedback.
 */
export const TextArea = ({ size = "md", label, placeholder, description, bordered = true, textareaRef, rows = 3, ...props }: TextareaProps) => {
  const classes = input({ size, bordered });

  return (
    <AriaTextField className={classes.wrapper} {...props}>
      <Label color="primary">{label}</Label>
      <AriaTextArea ref={textareaRef} className={classes.textarea} placeholder={placeholder} rows={rows} />

      <FieldError className={classes.error} />
      {description && <Text slot="description">{description}</Text>}
    </AriaTextField>
  );
};
