import { TextField } from "../../field/TextField";
import { useFieldContext } from "../index";

import type { TextFieldProps } from "../../field/TextField";

/**
 * A form-aware text input component that automatically connects to its parent form context.
 * This component simplifies form handling by managing the text field's state and change events
 * through the form context, eliminating the need for manual state management.
 *
 * @example
 * ```tsx
 * const form = useAppForm({
 *   // Supports all useForm options
 *   defaultValues: {
 *     firstName: 'John',
 *     lastName: 'Doe',
 *   },
 * });
 *
 * return <form.AppField name="firstName">{(field) => <field.TextField label="First Name" />}</form.AppField>;
 * ```
 *
 * @param {Object} props - The component props inherited from TextField
 * @param {string} [props.label] - Label text displayed above the input
 * @param {string} [props.placeholder] - Placeholder text shown when input is empty
 * @param {boolean} [props.disabled] - Whether the input is disabled
 * @param {boolean} [props.required] - Whether the input is required
 * @param {string} [props.error] - Error message to display below the input
 * @returns {JSX.Element} A controlled text input field connected to form state
 */
export const FormTextField = (props: TextFieldProps) => {
  // Connects to the parent form context, automatically handling form state management
  // for string-based input values
  const field = useFieldContext<string | undefined>();

  // Renders a TextField with form-managed value and change handling
  // All props are forwarded to maintain full TextField customization capabilities
  // while the value and onChange are managed by the form
  return <TextField {...props} value={field.state.value} onChange={field.handleChange} />;
};
