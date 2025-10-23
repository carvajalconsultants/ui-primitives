import { defineSlotRecipe } from "@pandacss/dev";

/**
 * The styles for the Dialog component with a title, close button and content.
 */
export const dialogRecipe = defineSlotRecipe({
  className: "dialog",
  description: "The styles for the Dialog component",
  slots: ["dialog", "content", "buttons", "closeable"],
  base: {
    dialog: {
      position: "relative",
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
    content: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      gap: "5.5",
      overflow: "auto",
    },
    closeable: {
      position: "absolute",
      top: "3",
      right: "3",
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
            height: "fit-content",
            overflowY: "auto",

            roundedTop: "xl",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "compact",
  },
});
