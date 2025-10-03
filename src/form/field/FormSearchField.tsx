import { SearchField } from "../../field/SearchField";
import { useFieldContext } from "../index";

import type { SearchFieldProps } from "../../field/SearchField";

/**
 * A form-integrated search input component that automatically handles state management
 * within a parent form context. This component is ideal for scenarios where you need
 * a search field as part of a larger form, such as:
 * - Filtering options in a complex form
 * - Search criteria in advanced query builders
 * - User lookup fields in registration forms
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
 * return <form.AppField name="firstName">{(field) => <field.SearchField />}</form.AppField>;
 * ```
 *
 * @param {SearchFieldProps} props - Standard search field properties like placeholder,
 *                                  aria labels, and styling. The value and onChange
 *                                  are automatically managed by the form context.
 * @returns {JSX.Element} A search input field that's connected to form state
 */
export const FormSearchField = (props: SearchFieldProps) => {
  // Connects to the parent form context, automatically handling form state management
  // for string-based input values
  const field = useFieldContext<string | undefined>();

  // Combines the form's state management with the base SearchField component
  // This integration means the field's value is tracked in the form's data
  // and will be included in form submissions automatically
  return <SearchField {...props} value={field.state.value} onChange={field.handleChange} />;
};
