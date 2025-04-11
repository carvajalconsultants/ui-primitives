import { defineSlotRecipe } from "@pandacss/dev";

/**
 * The styles for the RadioGroup component with its radio buttons.
 * See this: https://panda-css.com/docs/concepts/slot-recipes#targeting-slots
 * Panda CSS uses the `__` prefix to target slots. for example `.radio-group__control`, `.radio-group__indicator`
 */
export const radioGroupRecipe = defineSlotRecipe({
  className: "radio-group",
  description: "The styles for the RadioGroup component",
  slots: ["root", "radio", "control", "indicator"],
  base: {
    // RadioGroup component
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "3",

      // If RadioGroup's orientation prop is horizontal, we set flexDirection to row
      '&[data-orientation="horizontal"]': {
        flexDirection: "row",
        gap: "8",
      },
    },

    // Radio component
    radio: {
      display: "flex",
      alignItems: "center",
      gap: "3",
      cursor: "pointer",
      color: "text.secondary", // Updated from secondary.text based on token mapping

      // Only apply styles if the radio is not disabled
      "&:not([data-disabled])": {
        // When the radio is selected or selected+pressed, set the indicator background color to bg.brand.primary
        "&:is([data-selected], [data-selected][data-pressed]) .radio-group__indicator": {
          bg: "bg.brand.primary",
        },

        // When the radio is selected or selected+pressed, set the control border color to bg.brand.primary
        "&:is([data-selected], [data-selected][data-pressed]) .radio-group__control": {
          borderColor: "bg.brand.primary",
        },

        // If invalid
        "&[data-invalid]": {
          color: "bg.danger.primary", // Updated from danger.index based on token mapping
          pointerEvents: "none",

          // When the radio is selected or selected+pressed, set the indicator background color to danger.index
          "&:is([data-selected], [data-selected][data-pressed]) .radio-group__indicator": {
            bg: "bg.danger.primary", // Updated from danger.index based on token mapping
          },

          // When the radio is selected or selected+pressed, set the control border color to danger.index
          "&:is([data-selected], [data-selected][data-pressed]) .radio-group__control": {
            borderColor: "bg.danger.primary", // Updated from danger.index based on token mapping
          },
        },

        // If invalid, we set borderColor to danger.index except the selected state
        "&:not([data-selected])[data-invalid] .radio-group__control": {
          borderColor: "bg.danger.primary", // Updated from danger.index based on token mapping
        },

        // When checkbox is focused via Keyboard, we add a glow
        "&[data-focus-visible] .radio-group__control": {
          boxShadow: "shadow.primary", // Updated from glow.index based on token mapping
        },
      },

      // When radio is disabled
      "&[data-disabled]": {
        opacity: "50",
        cursor: "not-allowed",
        userSelect: "none",
      },
    },

    // Outer ring wrapper that contains the selected indicator
    control: {
      width: "5",
      height: "5",
      borderWidth: "2",
      borderStyle: "solid",
      borderColor: "text.secondary", // Updated from secondary.text based on token mapping
      borderRadius: "full",
      transition: "all",
      transitionDuration: "fast",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    // Inner radio circle that shows when selected
    indicator: {
      width: "3",
      height: "3",
      borderRadius: "full",
      bg: "text.white", // Updated from body.bg based on token mapping
      transition: "opacity",
      transitionDuration: "fast",
    },
  },
});
