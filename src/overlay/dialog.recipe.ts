import { defineSlotRecipe } from "@pandacss/dev";

/**
 * The styles for the Dialog component with a title, close button and content.
 */
export const dialogRecipe = defineSlotRecipe({
  className: "dialog",
  description: "The styles for the Dialog component",
  slots: ["dialog", "heading", "content", "buttons"],
  base: {
    dialog: {
      display: "flex",
      flexDirection: "column",
      borderRadius: "lg",
      bg: "text.white",

      /* Gives a glow to the dialog when it has focus. */
      _focus: {
        outline: "0",
        boxShadow: "shadow.primary",
      },

      paddingX: "8",
      paddingY: "10",
      minWidth: "100",
      maxWidth: "breakpoint-sm",
      maxHeight: "85vh",
      gap: "6",

      /* Makes the dialog use the full screen space when on mobile. */
      smDown: {
        minWidth: "screen",
        maxWidth: "auto",
        maxHeight: "svh",
        borderRadius: "none",
        height: "svh",
      },
    },

    /* Title and close button */
    heading: {
      display: "flex",
      flexDirection: "row",
      alignItems: "start",
      justifyContent: "space-between",
    },
    content: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      gap: "5.5",
      overflow: "auto",
    },
    /* Actions buttons along the bottom. */
    buttons: {
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
      gap: "4",

      /* Makes the buttons use full width and go vertical on mobile. */
      smDown: {
        flexDirection: "column",
        alignItems: "stretch",
      },
    },
  },
  variants: {
    variant: {
      default: {},
      compact: {
        dialog: {
          smDown: {
            minWidth: "screen",
            maxWidth: "auto",
            maxHeight: "70dvh",
            borderRadius: "none",
            height: "70dvh",
          },

          // smDown: {
          //   minWidth: "screen",
          //   maxWidth: "auto",
          //   height: "70vh",
          //   borderRadius: "none",
          //   paddingBottom: "safe",
          // },
        },
      },
    },
  },
  defaultVariants: {
    variant: "compact",
  },
});
