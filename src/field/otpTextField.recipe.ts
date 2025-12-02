import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Style variants for OTPTextField component.
 * Creates a visual representation of 6 digit boxes with a single hidden input field.
 *
 * Slots:
 * - wrapper: Main container that holds the visual display and hidden input
 * - visualDisplay: Container for the digit boxes and separator
 * - input: Hidden input field that receives keyboard input
 * - digitBox: Individual styled box for each digit
 * - separator: Visual separator between 3rd and 4th digit
 */
export const otpTextFieldRecipe = defineSlotRecipe({
  className: "otpTextField",
  description: "Style variants for OTP input component with 6 digit boxes",
  slots: ["wrapper", "visualDisplay", "input", "digitBox", "separator"],
  base: {
    // Main wrapper container
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "2",
      position: "relative",
      cursor: "text",

      userSelect: "none",
      pointerEvents: "none",

      height: "[36px]",

      _disabled: {
        opacity: "50",
      },
    },

    // Visual display container for digit boxes
    visualDisplay: {
      display: "flex",
      alignItems: "center",
      gap: "0",
    },

    // Hidden input field
    input: {
      position: "absolute",
      inset: "0",

      // Extra width compensates for negative letter spacing
      width: "[calc(100% + 40px)]",
      height: "full",
      display: "flex",
      textAlign: "left",
      opacity: "1",

      // Transparent text so user doesn't see the actual input value
      color: "transparent",
      pointerEvents: "all",
      background: "transparent",

      // Hide caret since we show visual focus on the digit boxes instead
      caretColor: "transparent",
      border: "[0px solid transparent]",
      outline: "[transparent solid 0px]",
      boxShadow: "[none]",
      lineHeight: "[1]",

      // Negative letter spacing compresses characters so each digit aligns with its visual box
      letterSpacing: "[-0.5em]",

      // Large font size matches the visual box height for proper alignment
      fontSize: "[36px]",
      fontFamily: "[monospace]",
      fontVariantNumeric: "tabular-nums",

      // Clip the right side to hide overflow characters beyond the 6th digit
      clipPath: "[inset(0px 40px 0px 0px)]",
    },

    // Individual digit box
    digitBox: {
      position: "relative",
      display: "flex",
      height: "11",
      width: "11",
      alignItems: "center",
      justifyContent: "center",
      borderTopWidth: "1",
      borderBottomWidth: "1",
      borderRightWidth: "1",
      color: "text.primary",
      borderStyle: "solid",
      borderColor: "border.primary",
      fontSize: "lg",
      boxShadow: "[0 1px 2px 0 rgba(0, 0, 0, 0.05)]",
      transitionProperty: "[box-shadow, color]",
      _focusVisible: {
        outline: "none",
        borderColor: "border.brand",
      },
      _first: {
        roundedLeft: "lg",
        borderLeftWidth: "1",
      },
      _last: {
        roundedRight: "lg",
      },

      "&[data-active]": {
        zIndex: 10,
        boxShadow: "[0 0 0 2px var(--colors-border-brand), 0 0 0 4px var(--colors-bg-primary-index)]",
      },
    },

    // Separator between 3rd and 4th digit
    separator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      "& svg": {
        stroke: "text.white",
      },
    },
  },
});
