import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Style variants for <Input>, <TextArea>, and <ComboBox> components.
 * Styles the wrapper <div> of the input field
 * Styles the error <FieldError> component below the input field
 */
export const inputRecipe = defineSlotRecipe({
  className: "input",
  description: "The styles for Input-based components including TextField, Textarea, and SearchField",
  slots: ["wrapper", "input", "textarea", "error", "leftIcon", "clearButton"],

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
        bg: "border.primary/20",
        color: "text.secondary",
      },
    },
    // Textarea field that user types into (extends input styles)
    textarea: {
      paddingY: "2.5",
      paddingX: "4",
      bg: "text.white",
      color: "text.primary",
      borderRadius: "lg",
      width: "full",
      border: "1",
      borderStyle: "solid",
      borderColor: "bg.brand.primary",
      fontFamily: "body",
      resize: "vertical",
      minHeight: "100px",

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
        bg: "border.primary/20",
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
    variant: {
      default: {},
    },
    size: {
      sm: {
        input: {
          paddingY: "2",
          paddingX: "3",
          fontSize: "sm",
        },
        textarea: {
          paddingY: "2",
          paddingX: "3",
          fontSize: "sm",
          minHeight: "80px",
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
        textarea: {
          paddingY: "2.5",
          paddingX: "4",
          fontSize: "md",
          minHeight: "100px",
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
      lg: {
        input: {
          paddingY: "3",
          paddingX: "5",
          fontSize: "lg",
        },
        textarea: {
          paddingY: "3",
          paddingX: "5",
          fontSize: "lg",
          minHeight: "120px",
        },
        leftIcon: {
          left: "5",
          top: "4",
        },
        clearButton: {
          right: "5",
          top: "4",
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
        textarea: {
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
    variant: "default",
    size: "md",
    bordered: true,
  },
});
