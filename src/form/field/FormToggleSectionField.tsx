import { ToggleSectionField } from "../../field/ToggleSectionField";
import { useFieldContext } from "../index";

import type { ToggleSectionFieldProps } from "../../field/ToggleSectionField";

/**
 * A form-integrated toggle section component that reveals/hides content based on its state.
 * Perfect for creating dynamic, conditional form sections such as:
 *
 * - Advanced settings panels that expand with additional options
 * - Optional shipping address forms that appear when "Ship to different address" is toggled
 * - Custom notification preferences that reveal detailed settings when enabled
 * - Payment method forms that show different fields based on selection
 * - Survey questions that reveal follow-up questions based on responses
 *
 * Key Features:
 * - Seamlessly integrates with form state management
 * - Maintains accessibility with ARIA attributes
 * - Animates content transitions smoothly
 * - Preserves form data even when section is hidden
 *
 * @example
 * ```tsx
 * const form = useAppForm({
 *   defaultValues: {
 *     useShippingAddress: false,
 *     shippingAddress: {
 *       street: '',
 *       city: ''
 *     }
 *   }
 * });
 *
 * return (
 *   <form.AppField name="useShippingAddress">
 *     {(field) => (
 *       <field.ToggleSectionField
 *         label="Ship to different address"
 *         description="Toggle to enter a separate shipping address"
 *       >
 *         <form.AppField name="shippingAddress.street">
 *           {(field) => <field.TextField label="Street Address" />}
 *         </form.AppField>
 *         <form.AppField name="shippingAddress.city">
 *           {(field) => <field.TextField label="City" />}
 *         </form.AppField>
 *       </field.ToggleSectionField>
 *     )}
 *   </form.AppField>
 * );
 * ```
 *
 * @param {ToggleSectionFieldProps} props - Configuration for the toggle section
 * @param {ReactNode} props.label - Clear, action-oriented label describing what the toggle controls
 * @param {string} props.description - Helpful context about what happens when the section is toggled
 * @param {ReactNode} props.children - Form fields or content to show/hide based on toggle state
 * @param {boolean} props.isDisabled - Whether the toggle control is interactive
 * @param {ElementType} [props.Field] - Custom field component to use instead of default SwitchField
 * @returns {JSX.Element} A form-connected toggle section that maintains state with the parent form
 */
export const FormToggleSectionField = (props: ToggleSectionFieldProps) => {
  const field = useFieldContext<boolean>();

  // Renders the toggle section with form integration
  // The section visibility is controlled by the form state
  // When hidden, child form fields maintain their values
  return <ToggleSectionField {...props} isSelected={field.state.value} onChange={field.handleChange} />;
};
