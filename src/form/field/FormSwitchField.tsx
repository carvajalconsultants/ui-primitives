import { SwitchField } from "../../field/SwitchField";
import { useFieldContext } from "../index";

import type { SwitchFieldProps } from "../../field/SwitchField";

/**
 * A form-integrated toggle switch component that automatically manages its state within a form context.
 * Perfect for scenarios where users need to make binary choices in forms, such as:
 *
 * - User preferences (e.g., "Enable notifications", "Subscribe to newsletter")
 * - Feature toggles (e.g., "Dark mode", "Advanced settings")
 * - Terms acceptance (e.g., "I agree to terms", "Opt-in to marketing")
 * - Account settings (e.g., "Make profile public", "Two-factor authentication")
 *
 * The component handles all form integration automatically, including:
 * - State synchronization with the form
 * - Form validation
 * - Form submission data inclusion
 * - Accessibility compliance
 *
 * @example
 * ```tsx
 * const form = useAppForm({
 *   defaultValues: {
 *     notifications: true,
 *     marketing: false
 *   }
 * });
 *
 * return (
 *   <form.AppField name="notifications">
 *     {(field) => (
 *       <field.SwitchField
 *         label="Enable Notifications"
 *         description="Receive updates about your account"
 *       />
 *     )}
 *   </form.AppField>
 * );
 * ```
 *
 * @param {SwitchFieldProps} props - Configuration options for the switch field
 * @param {ReactNode} props.label - User-friendly text describing the toggle option
 * @param {string} props.description - Additional context about what the toggle controls
 * @param {boolean} props.isDisabled - Whether the switch can be toggled
 * @param {string} [props.errorMessage] - Error feedback for validation issues
 * @returns {JSX.Element} A form-connected toggle switch that maintains state with the parent form
 */
export const FormSwitchField = (props: SwitchFieldProps) => {
  // Integrates with the form's state management system to handle boolean values
  // This enables the switch to participate in form validation, submission, and reset operations
  const field = useFieldContext<boolean>();

  // Renders the base switch component with form integration
  // The switch's state is controlled by the form, ensuring data consistency
  // and enabling features like form reset and programmatic value changes
  return <SwitchField {...props} isSelected={field.state.value} onChange={field.handleChange} />;
};
