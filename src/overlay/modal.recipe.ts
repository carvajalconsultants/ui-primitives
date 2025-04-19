import { defineSlotRecipe } from "@pandacss/dev";

/**
 * The styles for the Modal component which includes an overlay that blurs the background
 * while keeping the modal contents fully visible.
 */
export const modalRecipe = defineSlotRecipe({
  className: "modal",
  description: "The styles for the Modal component",
  slots: ["overlay", "modal"],
  base: {
    /* Overlay that covers content below the Modal. */
    overlay: {
      display: "flex",
      position: "fixed",
      inset: "0",
      backgroundColor: "overlay",

      /* Gives the blur to the content below the overlay */
      backdropFilter: "auto",
      backdropBlur: "sm",

      transition: "all",
      transitionDuration: "slow",

      "&[data-entering]": {
        animation: "fadeIn",
      },

      "&[data-exiting]": {
        animation: "fadeOut",
      },
    },
    modal: {
      "&[data-entering]": {
        animation: "scaleUp",
      },
      "&[data-exiting]": {
        animation: "scaleDown",
      },
    },
  },
  variants: {
    variant: {
      default: {
        overlay: {
          alignItems: "center",
          justifyContent: "center",
        },
      },
      compact: {
        overlay: {
          alignItems: "end",
        },
        modal: {
          "&[data-entering]": {
            animation: "slideUp",
          },
          "&[data-exiting]": {
            animation: "slideDown",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
