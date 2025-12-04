import { defineSlotRecipe } from "@pandacss/dev";

/**
 * The styles for the SelectWithTagGroup component
 * Creates an accessible multi-select dropdown that displays selected items as removable tags.
 */
export const selectWithTagGroupRecipe = defineSlotRecipe({
  className: "selectWithTagGroup",
  description: "The styles for the SelectWithTagGroup component",
  slots: ["wrapper", "trigger", "popover", "emptyState", "iconContainer"],

  base: {
    wrapper: {
      width: "full",
      color: "text.secondary",
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
    },

    trigger: {
      width: "full",
      bg: "text.white",
      color: "text.primary",
      borderRadius: "full",
      border: "1",
      borderStyle: "solid",
      borderColor: "border.secondary._alt",
      display: "flex",
      alignItems: "center",
      gap: "2",
      cursor: "pointer",
      minHeight: "10",
      paddingY: "0.5",
      paddingX: "2",

      _focus: {
        outline: "0",
        borderColor: "border.brand",
      },

      _active: {
        outline: "0",
        borderColor: "border.brand",
      },

      _invalid: {
        borderColor: "bg.danger.primary",

        _focus: {
          boxShadow: "shadow.danger",
        },
      },

      _disabled: {
        cursor: "not-allowed",
        borderColor: "border.secondary._alt",
        opacity: "50",
        color: "text.secondary",
      },
    },

    popover: {
      width: "var(--trigger-width)",
      display: "flex",
      flexDirection: "column",
      padding: "2",
      bg: "text.white",
      borderRadius: "lg",
      border: "1",
      borderStyle: "solid",
      borderColor: "border.secondary._alt",
      boxShadow: "popover",
    },

    emptyState: {
      fontSize: "sm",
      color: "text.secondary",
      fontStyle: "italic",
      paddingLeft: "2",
    },

    iconContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "8",
      height: "8",
      flexShrink: "0",
    },
  },

  variants: {
    size: {
      default: {},
    },
  },

  defaultVariants: {
    size: "default",
  },
});
