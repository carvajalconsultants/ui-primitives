import { defineSlotRecipe } from "@pandacss/dev";

/**
 * The styles for the Checkbox component
 */
export const checkboxRecipe = defineSlotRecipe({
  className: "checkbox",
  description: "The styles for the Checkbox component",
  slots: ["root", "control", "indicator"],
  base: {
    // AriaCheckbox component
    root: {
      display: "flex",
      alignItems: "center",
      width: "fit",
      gap: "3",
      fontSize: "lg",

      // When checkbox is disabled
      // _disabled: {
      //   opacity: "50",
      //   cursor: "not-allowed",
      //   userSelect: "none",
      // },

      // When checkbox is pressed
      "&[data-pressed] .checkbox__control": {
        borderColor: "bg.brand.primary",
        bg: "bg.brand.primary",
      },

      // When checkbox is indeterminate
      "&[data-indeterminate] .checkbox__control": {
        borderColor: "bg.brand.primary",
      },

      // When checkbox is focused via Keyboard, we set outline & change borderColor
      "&[data-focus-visible] .checkbox__control": {
        outline: "2",
        outlineColor: "bg.brand.primary",
        outlineOffset: "2",
        borderColor: "bg.brand.primary",
      },

      // When checkbox is selected and pressed
      "&[data-selected] .checkbox__control, &[data-selected][data-pressed] .checkbox__control": {
        bg: "bg.brand.secondary",
      },

      // When checkbox is selected, show the checkmark
      "&[data-selected] .checkbox__indicator, &[data-indeterminate] .checkbox__indicator": {
        strokeDashoffset: "43px",
      },

      // When checkbox is selected, change checkbox border color to primary
      "&[data-selected] .checkbox__control": {
        borderColor: "bg.brand.primary",
      },

      // When checkbox is Invalid
      "&[data-invalid] .checkbox__control": {
        borderColor: "bg.danger.primary",
      },

      // When checkbox is selected and invalid
      "&[data-selected][data-invalid] .checkbox__control": {
        borderColor: "bg.danger.primary",
        bg: "bg.danger.primary",
      },

      // When checkbox is selected and pressed and invalid
      "&[data-invalid][data-selected] .checkbox__control, &[data-invalid][data-pressed] .checkbox__control": {
        bg: "bg.danger.primary",
      },
    },

    // Wrapper around the indicator (SVG icon)
    control: {
      width: "5",
      height: "5",
      borderColor: "fg.primary._alt",
      borderWidth: "2",
      borderStyle: "solid",
      transition: "all",
      transitionDuration: "fast",
      borderRadius: "4",
      padding: "0.5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    // Checkmark icon (SVG)
    indicator: {
      width: "5",
      height: "5",
      fill: "transparent",
      stroke: "bg.brand.primary",
      strokeWidth: "3",
      strokeDasharray: "22px",
      strokeDashoffset: "66px",
      transition: "all",
      transitionDuration: "regular",
    },
  },
});
