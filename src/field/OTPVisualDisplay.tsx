import { useContext } from "react";
import { InputContext } from "react-aria-components";

import { otpTextField } from "../../styled-system/recipes";

import type { FC } from "react";

/**
 * Internal component that displays the visual representation of OTP input digits.
 *
 * This component reads the value from the parent TextField's InputContext and displays
 * each character in a separate styled box. It creates the visual illusion of 6 separate
 * input fields while the actual input is a single hidden TextField.
 *
 * - Reads value from `InputContext` provided by the parent TextField
 * - Displays characters at indices 0-5 in individual styled boxes
 * - Shows active focus ring on the box corresponding to the current input position
 * - Uses a separator (dash) between the 3rd and 4th digits for better readability
 *
 * Visual Focus Indication:
 * The `focused` prop determines which digit box shows the active focus ring. The active
 * box is determined by `value.length`, which represents the current cursor position:
 * - value.length === 0 → first box is active
 * - value.length === 1 → second box is active
 * - ... and so on
 */
interface OTPVisualDisplayProps {
  focused: boolean;
}

export const OTPVisualDisplay: FC<OTPVisualDisplayProps> = ({ focused }) => {
  const inputProps = useContext(InputContext);
  const value = (inputProps as { value?: string })?.value ?? "";

  const styles = otpTextField();

  return (
    <>
      <div className={styles.visualDisplay}>
        <div className={styles.digitBox} data-active={value.length === 0 && focused ? "" : undefined}>
          {value[0] ?? ""}
        </div>
        <div className={styles.digitBox} data-active={value.length === 1 && focused ? "" : undefined}>
          {value[1] ?? ""}
        </div>
        <div className={styles.digitBox} data-active={value.length === 2 && focused ? "" : undefined}>
          {value[2] ?? ""}
        </div>
      </div>

      <div role="separator" className={styles.separator}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"></path>
        </svg>
      </div>

      <div className={styles.visualDisplay}>
        <div className={styles.digitBox} data-active={value.length === 3 && focused ? "" : undefined}>
          {value[3] ?? ""}
        </div>
        <div className={styles.digitBox} data-active={value.length === 4 && focused ? "" : undefined}>
          {value[4] ?? ""}
        </div>
        <div className={styles.digitBox} data-active={value.length >= 5 && focused ? "" : undefined}>
          {value[5] ?? ""}
        </div>
      </div>
    </>
  );
};
