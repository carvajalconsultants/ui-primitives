import { defineRecipe } from "@pandacss/dev";

export const badgeRecipe = defineRecipe({
  className: "badge",
  description: "The styles for the Badge component",
  base: {
    display: "inline-flex",
    gap: "0.5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "full",
    height: "fit",
    paddingBlock: "0.5",
    paddingInline: "3",
    fontSize: "sm",
    lineHeight: "5",
    transition: "all",
    transitionTimingFunction: "ease-in-out",
    transitionDuration: "regular",
    color: "white",

    _disabled: {
      opacity: "50",
      cursor: "not-allowed",
    },

    // Add hover styles when we it's not disabled
    "&:not": {
      _disabled: {
        _hover: {
          opacity: "90",
        },
      },
    },
  },
  variants: {
    variant: {
      success: {
        color: "fg.success.primary",
        background: "bg.success.primary",
      },
      danger: {
        color: "fg.danger.primary",
        background: "bg.danger.primary",
      },
      warning: {
        color: "fg.warning.primary",
        background: "bg.warning.primary",
      },
      badge: {
        color: "fg.warning.primary",
        background: "bg.warning.primary",
      },
    },

    width: {
      full: { width: "full" },
      fit: { width: "fit" },
    },

    weight: {
      regular: { fontWeight: "regular" },
      medium: { fontWeight: "medium" },
      semiBold: { fontWeight: "semiBold" },
      bold: { fontWeight: "bold" },
    },
  },
  defaultVariants: {
    variant: "success",
    width: "fit",
    weight: "regular",
  },
});
