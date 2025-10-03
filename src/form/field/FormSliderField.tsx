import { SliderField } from "../../field/SliderField";
import { useFieldContext } from "../index";

import type { SliderFieldProps } from "../../field/SliderField";

/**
 * A form-integrated slider component that provides intuitive numeric value picking
 * within a form context. This component is perfect for scenarios where users need to:
 * - Adjust numeric settings (e.g., volume controls, opacity settings)
 * - Define min/max boundaries (e.g., filter criteria, preference settings)
 * - Pick exact numeric values through a visual interface
 *
 * The component automatically integrates with the parent form's state management.
 *
 * @example
 * ```tsx
 * const form = useAppForm({
 *   defaultValues: {
 *     volume: 75,            // For single value mode
 *   },
 * });
 *
 * // Single value slider example
 * return (
 *   <form.AppField name="volume">
 *     {(field) => <field.SliderField min={0} max={100} step={1} />}
 *   </form.AppField>
 * );
 * ```
 *
 * @param {Object} props - The component props
 * @param {number} props.min - The minimum value allowed for the slider
 * @param {number} props.max - The maximum value allowed for the slider
 * @param {number} [props.step=1] - The increment between valid values
 * @param {boolean} [props.disabled=false] - When true, prevents user interaction
 * @param {string} [props.label] - Accessible label for the slider
 * @param {Object} [props.style] - Custom CSS styles for the slider
 * @param {string} [props.className] - Additional CSS classes
 *
 * @returns {JSX.Element} A form-connected slider component that can operate in either single-value
 */
export const FormSliderField = (props: SliderFieldProps) => {
  // Establishes connection with the form context, managing either a single number
  const field = useFieldContext<number | number[]>();

  // Renders the base SliderField with form integration, automatically syncing
  // user interactions with the form's state management system
  return <SliderField {...props} value={field.state.value} onChange={field.handleChange} />;
};
