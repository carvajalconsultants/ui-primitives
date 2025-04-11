import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Style variants for an autocomplete/dropdown component that combines an input field with a
 * searchable dropdown list - similar to what you might see in a location search field or
 * tag selector.
 */
export const comboBoxRecipe = defineSlotRecipe({
  className: "comboBox",
  description: "The styles for the ComboBox component",
  slots: ["wrapper", "input", "button", "popover", "listBox", "listBoxItem"],
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

    // The scrollable container for dropdown options
    listBox: {
      display: "block",
      width: "full",
      bg: "text.white",
      maxHeight: "100", // Prevents extremely long lists from taking up too much screen space
      borderRadius: "lg",
      border: "none",
      overflow: "auto",
    },

    // Individual option items in the dropdown
    listBoxItem: {
      paddingBlock: "2",
      paddingInlineStart: "6",
      paddingInlineEnd: "2",
      width: "full",
      color: "text.primary",
      fontWeight: "semiBold",

      _focusVisible: {
        outline: "none",
      },

      // Highlights the currently selected/focused option for clear user feedback
      "&[data-selected]": { bg: "bg.brand.primary", color: "text.white" },
      "&[data-pressed]": { bg: "bg.brand.primary", color: "text.white" },
      "&[data-focused]": { bg: "bg.brand.primary", color: "text.white" },
    },
  },

  // Provides size variations for different use cases
  variants: {
    size: {
      // Standard size suitable for most forms
      normal: {
        input: {
          paddingY: "2.5",
          paddingX: "4",
        },
        listBoxItem: {
          paddingBlock: "2",
          paddingInlineStart: "6",
          paddingInlineEnd: "2",
        },
      },
      // Compact size for space-constrained interfaces or dense forms
      sm: {
        input: {
          paddingY: "0.5",
          paddingX: "2",
          fontSize: "sm",
        },
        listBoxItem: {
          paddingBlock: "1.5",
          paddingInlineStart: "4",
          paddingInlineEnd: "1.5",
          fontSize: "sm",
        },
      },
    },
  },
  defaultVariants: {
    size: "normal",
  },
});
