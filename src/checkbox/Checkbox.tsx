import { Checkbox as AriaCheckbox } from "react-aria-components";

import { checkbox } from "../../styled-system/recipes";

import type { FC } from "react";
import type { CheckboxProps as AriaCheckboxProps } from "react-aria-components";

import type { CheckboxVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

type CheckboxProps = WithoutClassName<AriaCheckboxProps> & Partial<CheckboxVariantProps>;

/**
 * Creates a customizable, accessible checkbox component that follows ARIA best practices.
 * This component is designed to provide a consistent checkbox experience across different
 * platforms and assistive technologies.
 *
 * @param {Object} props - The component properties
 * @param {ReactNode} props.children - The label content to display next to the checkbox
 * @param {boolean} [props.isSelected] - Controls the checked state of the checkbox
 * @param {boolean} [props.isDisabled] - When true, prevents user interaction and shows a disabled state
 * @param {boolean} [props.isIndeterminate] - Shows a partial selection state, useful for nested checkboxes
 * @param {Function} [props.onChange] - Callback fired when the checkbox selection changes
 * @returns {JSX.Element} A fully accessible checkbox component with visual feedback states
 *
 * @example
 * // Basic usage with a label
 * <Checkbox>Accept terms and conditions</Checkbox>
 *
 * // Usage with controlled state
 * <Checkbox isSelected={isAccepted} onChange={setIsAccepted}>
 *   Subscribe to newsletter
 * </Checkbox>
 */
export const Checkbox: FC<CheckboxProps> = ({ children, ...props }) => {
  const classes = checkbox();

  return (
    <AriaCheckbox className={classes.root} {...props}>
      <>
        {/*
          The checkbox control container that handles the visual presentation
          of different states (checked, unchecked, indeterminate)
        */}
        <div className={classes.control}>
          {/*
            SVG checkmark that animates in/out based on selection state
            Uses stroke-dasharray/offset animation for smooth transitions
          */}
          <svg className={classes.indicator} viewBox="0 0 18 18" aria-hidden="true">
            <polyline points="1 9 7 14 15 4" />
          </svg>
        </div>

        {/* The checkbox label content */}
        {children}
      </>
    </AriaCheckbox>
  );
};
