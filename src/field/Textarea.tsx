import { TextField as AriaTextField, FieldError, TextArea as AriaTextArea } from "react-aria-components";

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
  minRows?: number;

  /**
   * Maximum number of rows to display
   */
  maxRows?: number;
};

/**
 * Textarea component that provides a complete form textarea with label, validation, and description.
 */
export const TextArea = ({ size = "md", label, placeholder, description, bordered = true, textareaRef, minRows = 3, maxRows, ...props }: TextareaProps) => {
  const classes = input({ size, bordered });

  return (
    <AriaTextField className={classes.wrapper} {...props}>
      <Label color="primary">{label}</Label>
      <AriaTextArea ref={textareaRef} className={classes.textarea} placeholder={placeholder} rows={minRows} {...(maxRows && { maxRows })} />

      <FieldError className={classes.error} />
      {description && <Text slot="description">{description}</Text>}
    </AriaTextField>
  );
};
