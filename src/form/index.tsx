import { createFormHook } from "@tanstack/react-form";

import { FormNumberField } from "./field/FormNumberField";
import { fieldContext, formContext } from "./context";
import { FormSearchField } from "./field/FormSearchField";
import { FormSliderField } from "./field/FormSliderField";
import { FormSwitchField } from "./field/FormSwitchField";
import { FormTextField } from "./field/FormTextField";
import { Form } from "./Form";

export { fieldContext, formContext, useFieldContext, useFormContext } from "./context";

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
 * - NumberField: Number input with optional stepper buttons
 * - SearchField: Text input optimized for search with debouncing
 * - SliderField: Numeric input with visual slider control
 * - SwitchField: Toggle input for boolean values
 */
export const { useAppForm, withForm, withFieldGroup } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField: FormTextField,
    NumberField: FormNumberField,
    SearchField: FormSearchField,
    SliderField: FormSliderField,
    SwitchField: FormSwitchField,
  },
  formComponents: {
    Element: Form,
  },
});
