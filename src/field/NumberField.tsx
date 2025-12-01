import { NumberField as AriaNumberField, FieldError, Input } from "react-aria-components";

import { input } from "../../styled-system/recipes";
import { Label } from "../common/Label";
import { Text } from "../typography/Text";

import type { ReactNode } from "react";
import type { NumberFieldProps as AriaNumberFieldProps } from "react-aria-components";

import type { InputVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

export type NumberFieldProps = WithoutClassName<AriaNumberFieldProps> &
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

    /**
     * Ref to the underlying input element
     */
    inputRef?: React.Ref<HTMLInputElement>;
  };

/**
 * Helps users input numeric values accurately with validation, preventing errors in forms where
 * precise numbers are required. Essential for quantities, measurements, prices, dimensions, and
 * any scenario where numeric input must be validated and constrained to valid ranges. The optional
 * stepper buttons provide an intuitive way to adjust values incrementally, reducing typing errors
 * and improving user experience for numeric data entry.
 *
 * @example
 * ```tsx
 * // Simple number field
 * <NumberField label="Width" minValue={0} />
 *
 * // With stepper buttons
 * <NumberField label="Width" minValue={0}>
 *   <Group>
 *     <Button slot="decrement">-</Button>
 *     <Input />
 *     <Button slot="increment">+</Button>
 *   </Group>
 * </NumberField>
 * ```
 */
export const NumberField = ({ size, label, variant, placeholder, description, bordered = true, inputRef, children, ...props }: NumberFieldProps) => {
  const classes = input({ variant, size, bordered });

  const defaultInput = <Input ref={inputRef} className={classes.input} placeholder={placeholder} />;

  return (
    <AriaNumberField className={classes.wrapper} {...props}>
      <Label color="primary">{label}</Label>
      {(children ?? defaultInput) as ReactNode}

      <FieldError className={classes.error} />
      {description && <Text slot="description">{description}</Text>}
    </AriaNumberField>
  );
};
