import { NumberField } from "../../field/NumberField";
import { useFieldContext } from "../index";

import type { NumberFieldProps } from "../../field/NumberField";

/**
 * A form-aware number input component that automatically connects to its parent form context.
 * This component simplifies form handling by managing the number field's state and change events
 * through the form context, eliminating the need for manual state management.
 *
 * @example
 * ```tsx
 * const form = useAppForm({
 *   // Supports all useForm options
 *   defaultValues: {
 *     width: 1024,
 *     height: 768,
 *   },
 * });
 *
 * return <form.AppField name="width">{(field) => <field.NumberField label="Width" minValue={0} />}</form.AppField>;
 * ```
 *
 * @param {Object} props - The component props inherited from NumberField
 * @param {string} [props.label] - Label text displayed above the input
 * @param {string} [props.placeholder] - Placeholder text shown when input is empty
 * @param {boolean} [props.disabled] - Whether the input is disabled
 * @param {boolean} [props.required] - Whether the input is required
 * @param {number} [props.minValue] - Minimum value allowed
 * @param {number} [props.maxValue] - Maximum value allowed
 * @param {number} [props.step] - Step value for increment/decrement
 * @returns {JSX.Element} A controlled number input field connected to form state
 */
export const FormNumberField = (props: NumberFieldProps) => {
  // Connects to the parent form context, automatically handling form state management
  // for number-based input values
  const field = useFieldContext<number | undefined>();

  // Renders a NumberField with form-managed value and change handling
  // All props are forwarded to maintain full NumberField customization capabilities
  // while the value and onChange are managed by the form
  return <NumberField {...props} value={field.state.value} onChange={field.handleChange} />;
};
