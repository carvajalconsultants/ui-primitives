import { TextArea } from "../../field/TextArea";
import { useFieldContext } from "../index";

import type { TextareaProps } from "../../field/TextArea";

/**
 * A form-aware textarea component that automatically connects to its parent form context.
 * This component simplifies form handling by managing the textarea's state and change events
 * through the form context, eliminating the need for manual state management.
 *
 * @example
 * ```tsx
 * const form = useAppForm({
 *   // Supports all useForm options
 *   defaultValues: {
 *     comments: '',
 *     description: '',
 *   },
 * });
 *
 * return <form.AppField name="comments">{(field) => <field.TextAreaField label="Comments" rows={5} />}</form.AppField>;
 * ```
 *
 * @param {Object} props - The component props inherited from TextArea
 * @param {string} [props.label] - Label text displayed above the textarea
 * @param {string} [props.placeholder] - Placeholder text shown when textarea is empty
 * @param {boolean} [props.disabled] - Whether the textarea is disabled
 * @param {boolean} [props.required] - Whether the textarea is required
 * @param {string} [props.error] - Error message to display below the textarea
 * @param {number} [props.rows] - Minimum number of rows to display
 * @returns {JSX.Element} A controlled textarea field connected to form state
 */
export const FormTextAreaField = (props: TextareaProps) => {
  // Connects to the parent form context, automatically handling form state management
  // for string-based input values
  const field = useFieldContext<string | undefined>();

  // Renders a TextArea with form-managed value and change handling
  // All props are forwarded to maintain full TextArea customization capabilities
  // while the value and onChange are managed by the form
  return <TextArea {...props} value={field.state.value} onChange={field.handleChange} />;
};

