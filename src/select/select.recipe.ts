import { defineSlotRecipe } from "@pandacss/dev";

/**
 * The styles for the Select component
 * Creates an accessible dropdown menu that allows users to choose one option from a list.
 */
export const selectRecipe = defineSlotRecipe({
  className: "select",
  description: "The styles for the Select component",
  // These slots represent different parts of a dropdown select component
  // wrapper: The container that holds the entire select component
  // button: The clickable trigger that opens the dropdown
  // value: The text showing the currently selected option
  // popover: The floating container that appears when opened
  slots: ["wrapper", "button", "value", "popover"],

  base: {
    wrapper: {
      // Creates vertical spacing between the label and the select button
      width: "full",
      color: "text.secondary",
      display: "flex",
      flexDirection: "column",
      gap: "1.5",

      // Ensures placeholder text is visually distinct from selected values
      _placeholder: {
        color: "text.placeholder",
      },
    },

    // Styles for the main clickable button that triggers the dropdown
    button: {
      width: "full",
      bg: "text.white",
      color: "text.primary",
      borderRadius: "full",
      border: "1",
      borderStyle: "solid",
      borderColor: "border.secondary._alt",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",

      // Styles for the dropdown indicator icon (usually a chevron)
      "& > svg": {
        fill: "text.white",
        stroke: "text.primary",

        // Smooth animation for the dropdown icon rotation
        transition: "all",
        transitionTimingFunction: "ease-in-out",
        transitionDuration: "fast",
      },

      // Animates the chevron to point upwards when the dropdown is open
      '&[data-rotate="true"]': {
        "& > svg": {
          transform: "rotate(180deg)",
        },
      },

      // Visual feedback when the select is disabled
      '&[data-disabled="true"]': {
        cursor: "not-allowed",
      },

      // Highlights the select when it receives focus or is clicked
      _focus: {
        outline: "0",
        borderColor: "border.brand",
      },

      _active: {
        outline: "0",
        borderColor: "border.brand",
      },

      // Shows error state with red border
      _invalid: {
        borderColor: "bg.danger.primary",

        _focus: {
          boxShadow: "shadow.danger",
        },
      },

      // Reduces opacity and changes cursor when disabled
      _disabled: {
        cursor: "not-allowed",
        borderColor: "border.secondary._alt",
        opacity: "50",
        color: "text.secondary",
      },
    },
    value: {
      // Allows the value to take up the remaining space in the button
      flex: "1",
      textAlign: "left",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
    popover: {
      // Makes the dropdown width match the button width
      width: "var(--trigger-width)",
      minWidth: "var(--trigger-width)",
      zIndex: "50",

      // Styles for ListBox within the Popover
      "& .listBox": {
        width: "unset !important",
        maxHeight: "inherit !important",
        minHeight: "unset !important",
      },
    },
  },

  variants: {
    size: {
      // Regular sized select with comfortable padding
      md: {
        button: {
          paddingY: "2.5",
          paddingX: "4",
        },
      },

      // Compact version for space-constrained layouts
      sm: {
        value: {
          fontSize: "sm",
        },

        button: {
          paddingY: "1.5",
          paddingX: "2",

          // Smaller icon size for compact layout
          "& > svg": {
            width: "5!important",
            height: "5!important",
          },
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});
