import { defineSlotRecipe } from "@pandacss/dev";

/**
 * The styles for the Switch component
 */
export const switchRecipe = defineSlotRecipe({
  className: "switch",
  description: "The styles for the Switch component",
  slots: ["switchField", "handler", "label", "description", "error", "container"],
  base: {
    // The switch field is the main component that renders the switch.
    switchField: {
      fontSize: "md",
      color: "bg.brand.primary",
      forcedColorAdjust: "none",
      display: "flex",
      flexDirection: "column",

      _selected: {
        "& .handler": {
          backgroundColor: "bg.brand.primary",

          _before: {
            transform: "[translateX(1.5rem)]",
          },
        },
      },

      /**
       * When the switch is disabled, the cursor will be set to not-allowed.
       * The handler will also be 50% opacity.
       */
      _disabled: {
        cursor: "not-allowed",
        pointerEvents: "none",

        "& .handler": {
          opacity: "50",
        },
      },
    },

    /**
     * Wrapper for the label and the switch.
     */
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "4",
      width: "full",
    },

    // Label for the switch
    label: {
      fontSize: "md",
      color: "text.primary",
    },

    /**
     * The handler is the visual toggle element of the switch.
     * It consists of a background.
     * The background changes color when selected, and the thumb moves
     * from left to right to indicate the switch state.
     */
    handler: {
      display: "flex",
      alignItems: "center",
      flexShrink: "0",
      h: "6",
      w: "12",
      p: "1",
      bg: "fg.brand.primary.index",
      rounded: "full",
      transition: "all",
      transitionTimingFunction: "ease",
      transitionDuration: "fast",

      /**
       * This pseudo-element creates the moving thumb/circle of the switch.
       * - The thumb is styled as a white circle
       * - When the switch is selected, this element translates to the right
       *   using the transform property in the _selected state above
       */
      _before: {
        content: '""',
        display: "block",
        w: "4",
        h: "4",
        bg: "text.white",
        rounded: "full",
        transition: "all",
        transitionTimingFunction: "ease",
        transitionDuration: "fast",
      },
    },

    error: {
      color: "fg.danger.primary",
    },
  },
});
