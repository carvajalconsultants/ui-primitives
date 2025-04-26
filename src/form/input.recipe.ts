import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Style variants for <Input> and <ComboBox> components.
 * Styles the wrapper <div> of the input field
 * Styles the error <FieldError> component below the input field
 */
export const inputRecipe = defineSlotRecipe({
  className: "input",
  description: "The styles for Input-based components including TextField and SearchField",
  slots: ["wrapper", "input", "error", "leftIcon", "clearButton"],

  base: {
    // Wrapper contains the label, input, error and description
    wrapper: {
      display: "flex",
      flexDirection: "column",
      width: "full",
      gap: "1.5",
    },

    // Field that user types into
    input: {
      paddingY: "2.5",
      paddingX: "4",
      bg: "text.white", // Updated from body.input
      color: "text.primary", // Updated from primary.text
      borderRadius: "full",
      width: "full",
      border: "1",
      borderStyle: "solid",
      borderColor: "bg.brand.primary",
      fontFamily: "body",

      _placeholder: {
        color: "text.placeholder",
      },

      _focus: {
        outline: "0",
        boxShadow: "shadow.primary",
      },

      _active: {
        outline: "0",
        boxShadow: "shadow.primary",
      },

      _invalid: {
        borderColor: "bg.danger.primary",

        _focus: {
          boxShadow: "shadow.primary",
        },
      },

      _disabled: {
        cursor: "not-allowed",
        borderColor: "border.primary",
        bg: "border.primary",
        color: "text.secondary",
      },
    },
    leftIcon: {
      position: "absolute",
      // border: "none",
      cursor: "pointer",
    },
    clearButton: {
      position: "absolute",
      border: "none",
      cursor: "pointer",
    },
    error: {
      color: "fg.danger.primary", // Updated from danger.index
    },
  },
  variants: {
    size: {
      sm: {
        input: {
          paddingY: "2",
          paddingX: "3",
          fontSize: "sm",
        },
        leftIcon: {
          left: "3.5",
          top: "2.5",
        },
        clearButton: {
          right: "2",
          top: "2",
        },
      },
      md: {
        input: {
          paddingY: "2.5",
          paddingX: "4",
          fontSize: "md",
        },
        leftIcon: {
          left: "4",
          top: "3.5",
        },
        clearButton: {
          right: "4",
          top: "3.5",
        },
      },
    },
    bordered: {
      true: {},
      false: {
        input: {
          border: "0",
          borderColor: "transparent",

          _focus: {
            borderColor: "transparent",
            boxShadow: "0",
          },

          _active: {
            borderColor: "transparent",
            boxShadow: "0",
          },
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    bordered: true,
  },
});
