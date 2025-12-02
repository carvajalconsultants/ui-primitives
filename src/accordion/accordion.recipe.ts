import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Defines consistent accordion styling patterns across the application.
 * This helps maintain visual hierarchy and interactive states while ensuring brand consistency.
 */
export const accordionRecipe = defineSlotRecipe({
  className: "accordion",
  description: "Consistent accordion styling patterns for accordion components across the application",
  slots: ["root", "item", "header", "panel"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "0",
      borderRadius: "lg",
      overflow: "hidden",
      width: "full",
    },
    item: {
      borderWidth: "1",
      borderStyle: "solid",
      borderColor: "border.light",
      backgroundColor: "bg.primary._alt",
      overflow: "hidden",

      "&:not(:last-child)": {
        borderBottomWidth: "0",
      },

      "&:first-child": {
        borderTopLeftRadius: "lg",
        borderTopRightRadius: "lg",
      },

      "&:last-child": {
        borderBottomLeftRadius: "lg",
        borderBottomRightRadius: "lg",
      },
    },
    header: {
      width: "full",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "4",
      cursor: "pointer",
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      transition: "background-color",
      transitionDuration: "fast",

      _hover: {
        backgroundColor: "bg.primary.active/70",
      },

      "&[data-focus-visible]": {
        outline: "none",
        borderWidth: "2",
        borderStyle: "solid",
        borderColor: "primary.index",
      },
    },
    panel: {
      backgroundColor: "bg.primary.index",

      "&[data-expanded]": {
        padding: "4",
      },
    },
  },
  variants: {
    variant: {
      default: {},
      quiet: {
        item: {
          borderWidth: "0",
          backgroundColor: "transparent",
        },
        header: {
          _hover: {
            backgroundColor: "bg.primary.active/50",
          },
        },
        panel: {
          backgroundColor: "transparent",
        },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
