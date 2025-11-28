import { createFormHookContexts } from "@tanstack/react-form";

/**
 * Form context objects used for managing form state and field interactions.
 * @typedef {Object} FormContexts
 * @property {React.Context} fieldContext - Context for individual form field state and behaviors
 * @property {React.Context} formContext - Context for overall form state management
 * @property {Function} useFieldContext - Hook to access field context within custom form components
 *
 * These contexts enable:
 * - Consistent form state management across complex forms
 * - Field-level validation and error handling
 * - Custom form field component creation
 * - Form-wide operations like reset, submit, and validation
 */
export const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts();
