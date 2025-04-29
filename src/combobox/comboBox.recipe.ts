import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Style variants for an autocomplete/dropdown component that combines an input field with a
 * searchable dropdown list - similar to what you might see in a location search field or
 * tag selector.
 */
export const comboBoxRecipe = defineSlotRecipe({
  className: "comboBox",
  description: "The styles for the ComboBox component",
  slots: ["wrapper", "input", "button", "popover"],
  base: {
    // Container that holds both the input and dropdown - ensures proper spacing and alignment
    wrapper: {
      width: "full",
      color: "text.secondary",
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
    },

    // The search/input field where users type their queries
    input: {
      width: "full",
      paddingY: "2.5",
      paddingX: "4",
      bg: "text.white",
      color: "text.primary",
      borderRadius: "full", // Creates a pill-shaped input
      border: "1",
      borderStyle: "solid",
      borderColor: "border.primary",
      _placeholder: {
        color: "text.placeholder",
      },

      // Highlights the input when users interact with it, providing clear visual feedback
      _focus: {
        outline: "0",
        borderColor: "border.brand",
        boxShadow: "shadow.primary",
      },

      _active: {
        outline: "0",
        borderColor: "border.brand",
        boxShadow: "shadow.primary",
      },

      // Shows error state visually (e.g., when invalid input is provided)
      _invalid: {
        borderColor: "border.error",
        _focus: {
          boxShadow: "shadow.danger",
        },
      },

      // Visual indication that the field cannot be interacted with
      _disabled: {
        cursor: "not-allowed",
        borderColor: "border.primary",
        bg: "border.primary",
        color: "text.disabled",
      },
    },

    // The dropdown toggle button (usually shows a chevron icon)
    button: {
      color: "text.primary",
      background: "transparent",
      marginLeft: "-9",
      width: "6",
      height: "6",
      p: "0",
      fill: "transparent",
      // Positions the button vertically centered with the input field
      transform: "translateY(5px)",
      stroke: "text.white",
      cursor: "pointer",
      transition: "all",
      transitionTimingFunction: "ease-in-out",
      transitionDuration: "fast",

      // Animates the chevron to point upwards when dropdown is open
      '&[data-rotate="true"]': {
        transform: "translateY(5px) rotate(180deg)",
      },

      // Visual indication that the button cannot be clicked
      '&[data-disabled="true"]': {
        cursor: "not-allowed",
      },
    },

    // The dropdown container that appears below the input
    popover: {
      // Ensures the dropdown width matches the input field width for clean alignment
      width: "var(--trigger-width)",
    },
  },

  // Provides size variations for different use cases
  variants: {
    size: {
      // Compact size for space-constrained interfaces or dense forms
      sm: {
        input: {
          paddingY: "0.5",
          paddingX: "2",
          fontSize: "sm",
        },
      },

      // Standard size suitable for most forms
      md: {
        input: {
          paddingY: "2.5",
          paddingX: "4",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
