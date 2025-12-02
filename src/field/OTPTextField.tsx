import { useState } from "react";
import { TextField as AriaTextField, Input } from "react-aria-components";

import { css } from "../../styled-system/css";
import { otpTextField } from "../../styled-system/recipes";
import { OTPVisualDisplay } from "./OTPVisualDisplay";

import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components";

import type { WithoutClassName } from "../types";

/**
 * Props for OTPTextField component
 */
export type OTPTextFieldProps = WithoutClassName<AriaTextFieldProps> & {
  /**
   * The name of the input field
   */
  name: string;

  /**
   * The current value of the input (6-digit string)
   */
  value: string;

  /**
   * Callback fired when the value changes
   */
  onChange: (value: string) => void;

  /**
   * Pattern for validation (e.g., "^\\d+$" for digits only)
   */
  pattern?: string;

  /**
   * Whether the input is disabled
   */
  isDisabled?: boolean;
};

/**
 * OTPTextField provides a custom OTP input component with visual digit boxes.
 *
 * Uses a single hidden input field that manages all 6 digits as one string value, while
 * displaying them in separate visual boxes. This enables paste support, better accessibility,
 * and mobile keyboard optimization. Focus prevention logic prevents the hidden input from
 * stealing focus during form submission.
 */
export const OTPTextField = ({ name, value, onChange, pattern, isDisabled }: OTPTextFieldProps) => {
  const [focused, setFocused] = useState(false);
  const styles = otpTextField();

  /**
   * Blurs the input if it's currently focused.
   *
   * Used to prevent unwanted focus during form submission or browser validation.
   * The setTimeout ensures we check focus state after the browser's default focus
   * behavior has completed, allowing us to override it if needed.
   */
  const blurIfFocused = (input: HTMLInputElement) => {
    setTimeout(() => {
      if (document.activeElement === input) {
        input.blur();
      }
    }, 0);
  };

  /**
   * Checks if the form is currently submitting by checking if submit button is disabled.
   *
   * When the form is submitting, the submit button is disabled. We use this as a signal
   * to prevent the hidden input from receiving focus during submission, which would
   * interrupt the user experience.
   */
  const isFormSubmitting = (): boolean => {
    const submitButton = document.querySelector('button[type="submit"]');

    return submitButton instanceof HTMLButtonElement ? submitButton.disabled : false;
  };

  /**
   * Triggers form submission by programmatically clicking the submit button.
   *
   * Used when user presses Enter in the OTP input. Instead of letting the input submit
   * the form directly (which could cause focus issues), we delegate to the submit button
   * which handles form submission properly through react-form.
   */
  const triggerFormSubmit = () => {
    const submitButton = document.querySelector('button[type="submit"]');
    if (submitButton instanceof HTMLButtonElement && !submitButton.disabled) {
      submitButton.click();
    }
  };

  return (
    <AriaTextField name={name} value={value} onChange={onChange} isDisabled={isDisabled} className={styles.wrapper} aria-label="Enter 6-digit OTP code">
      {/* Visual layer: Displays 6 digit boxes that show each character from the input value */}
      <OTPVisualDisplay focused={focused} />

      {/* Hidden input layer: Transparent input that receives all keyboard input */}
      <div
        className={css({
          position: "absolute",
          inset: "[0px]",
          pointerEvents: "none",
        })}>
        <Input
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={(e) => {
            setFocused(true);
            // Prevent focus if form is submitting (browser might try to focus during validation)
            if (isFormSubmitting()) {
              blurIfFocused(e.target);
            }
          }}
          onBlur={() => setFocused(false)}
          onInvalid={(e) => {
            // Prevent browser validation from focusing this hidden input
            // Browser validation focuses invalid inputs, but our input is hidden and shouldn't be focused
            e.preventDefault();
            e.stopPropagation();
            blurIfFocused(e.target as HTMLInputElement);
          }}
          onKeyDown={(e) => {
            // When user presses Enter, trigger form submission via submit button
            // This ensures proper form handling and prevents focus issues
            if (e.key === "Enter") {
              e.preventDefault();
              e.stopPropagation();
              triggerFormSubmit();
            }
          }}
          inputMode="numeric"
          maxLength={6}
          autoComplete="one-time-code"
          pattern={pattern}
          tabIndex={-1}
          aria-hidden="true"
          data-form-field="otpCode"
          className={styles.input}
        />
      </div>
    </AriaTextField>
  );
};
