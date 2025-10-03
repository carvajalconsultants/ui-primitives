import { createFormHook, createFormHookContexts } from "@tanstack/react-form";

import { FormSearchField } from "./field/FormSearchField";
import { FormSliderField } from "./field/FormSliderField";
import { FormSwitchField } from "./field/FormSwitchField";
import { FormTextField } from "./field/FormTextField";

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
export const { fieldContext, formContext, useFieldContext } = createFormHookContexts();

/**
 * Custom form hook and HOC creator configured with our form field components.
 * 
 * @typedef {Object} FormHookExports
 * @property {Function} useAppForm - Hook for creating and managing forms with built-in validation and state management
 * @property {Function} withForm - HOC to wrap components with form functionality
 * 
 * The form hook provides:
 * - Type-safe form state management
 * - Built-in validation
 * - Field error tracking
 * - Form submission handling
 * - Dirty state tracking
 * - Form reset capabilities
 * 
 * Available field components:
 * - TextField: Standard text input with validation
 * - SearchField: Text input optimized for search with debouncing
 * - SliderField: Numeric input with visual slider control
 * - SwitchField: Toggle input for boolean values
 */
export const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField: FormTextField,
    SearchField: FormSearchField,
    SliderField: FormSliderField,
    SwitchField: FormSwitchField,
  },
  formComponents: {},
});
