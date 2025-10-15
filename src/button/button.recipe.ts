import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  description: "Style variants for interactive elements like buttons and links",
  base: {
    // Creates a horizontal layout for icons and text within the button
    display: "inline-flex",
    gap: "2",
    alignItems: "center",
    justifyContent: "center",

    // Softens the button corners for a modern look
    borderRadius: "lg",

    // Ensures text is easily readable at a glance
    fontSize: "md",
    fontWeight: "medium",

    // Provides visual feedback that the element is interactive
    cursor: "pointer",

    // Ensures the icon does not shrink
    "& svg": {
      flexShrink: "0",
    },

    // Makes state changes (hover, click) feel smooth and intentional
    transition: "all",
    transitionTimingFunction: "ease-in-out",
    transitionDuration: "regular",

    _disabled: {
      // Makes it clear to users that the button cannot be interacted with
      opacity: "50",
      cursor: "not-allowed",
      outline: "0",
    },
  },
  variants: {
    variant: {
      primary: {
        // Main call-to-action button style
        background: "bg.brand.primary",
        color: "text.white",
        borderWidth: "0",
        borderColor: "transparent",
        outlineWidth: "0",
        outlineColor: "transparent",
        outlineStyle: "solid",

        // Stroke here and below is to have the same color in icons as we do the text
        "& svg": {
          stroke: "text.white",
        },

        "&:hover": {
          // Creates a subtle highlight effect to show interactivity
          outlineWidth: "3",
          outlineColor: "text.white",
          outlineStyle: "solid",
          background: "bg.primary._hover",
        },

        // Maintains the same visual feedback for keyboard navigation
        "&:focus-visible": {
          outlineWidth: "3",
          outlineColor: "text.white",
          outlineStyle: "solid",
          background: "bg.primary._hover",
        },

        // Provides tactile feedback when clicked
        "&:active": {
          outlineWidth: "3",
          outlineColor: "text.white",
          outlineStyle: "solid",
          background: "bg.primary._hover",
        },

        "&:disabled": {
          opacity: "50",
          cursor: "not-allowed",
          outlineWidth: "0",
        },

        // If an icon is present, it applies the text color to the spinner
        "& [data-spinner]": {
          borderColor: "white",
          borderTopColor: "white",
        },
      },
      secondary: {
        // Less prominent button style for secondary actions
        background: "text.white",
        color: "text.black",

        "& svg": {
          stroke: "text.black",
        },

        "&:hover": {
          outlineWidth: "0",
          color: "text.black",
          background: "text.white",

          "& svg": {
            stroke: "text.black",
          },
        },
        "&:focus-visible": {
          outlineWidth: "3",
          outlineColor: "text.white",
          outlineStyle: "solid",
          color: "text.black",
          background: "text.white",

          "& svg": {
            stroke: "text.black",
          },
        },
        "&:active": {
          color: "text.black",
          background: "text.white",

          "& svg": {
            stroke: "text.black",
          },
        },
        "&:disabled": {
          opacity: "50",
          cursor: "not-allowed",
          outlineWidth: "0",
        },

        // If an icon is present, it applies the text color to the spinner
        "& [data-spinner]": {
          borderColor: "text.black/30 !important",
          borderTopColor: "text.black !important",
        },
      },
      ghost: {
        // Minimal style for actions that shouldn't draw attention
        color: "text.black",
        border: "none",

        "& svg": {
          stroke: "text.black",
        },

        "&:hover": {
          color: "text.black",
          background: "bg.brand.secondary",

          "& svg": {
            stroke: "text.black",
          },
        },
        "&:focus-visible": {
          outlineWidth: "3",
          outlineColor: "text.white",
          outlineStyle: "solid",
          color: "text.white",
          background: "bg.brand.secondary",

          "& svg": {
            stroke: "text.white",
          },
        },
        "&:active": {
          color: "text.white",
          background: "bg.brand.secondary",

          "& svg": {
            stroke: "text.white",
          },
        },
        "&:disabled": {
          opacity: "50",
          cursor: "not-allowed",
          outlineWidth: "0",
        },

        // If an icon is present, it applies the text color to the spinner
        "& [data-spinner]": {
          borderColor: "text.black/30 !important",
          borderTopColor: "text.black !important",
        },
      },
      outline: {
        // Outlined button style with transparent background and colored border
        background: "transparent",
        color: "bg.brand.primary",
        borderWidth: "1",
        borderColor: "bg.brand.primary",
        borderStyle: "solid",

        "& svg": {
          stroke: "bg.brand.primary",
        },

        _hover: {
          background: "bg.brand.primary",
          color: "text.white",

          "& svg": {
            stroke: "text.white",
          },
        },

        _focusVisible: {
          outlineWidth: "3",
          outlineColor: "text.white",
          outlineStyle: "solid",
          background: "bg.brand.primary",
          color: "text.white",

          "& svg": {
            stroke: "text.white",
          },
        },

        _active: {
          background: "bg.brand.primary",
          color: "text.white",

          "& svg": {
            stroke: "text.white",
          },
        },

        _disabled: {
          opacity: "50",
          cursor: "not-allowed",
          outlineWidth: "0",
        },

        // If an icon is present, it applies the text color to the spinner
        "& [data-spinner]": {
          borderColor: "bg.brand.primary/30 !important",
          borderTopColor: "bg.brand.primary !important",
        },
      },
      link: {
        // Makes buttons appear and behave like hyperlinks
        color: "bg.brand.primary",
        borderWidth: "0",
        width: "fit",

        "& svg": {
          stroke: "bg.brand.primary",
        },

        "&:hover": {
          // Traditional underline feedback for link-style interactions
          textDecoration: "underline",
          textUnderlineOffset: "1px",
          textUnderlinePosition: "under",
        },
        "&:focus": {
          outlineWidth: "3",
          outlineColor: "text.white",
          outlineStyle: "solid",

          "& svg": {
            stroke: "text.white",
          },
        },

        _active: {
          outlineWidth: "0",

          "& svg": {
            stroke: "text.white",
          },
        },

        _disabled: {
          opacity: "50",
          cursor: "not-allowed",
        },

        // If an icon is present, it applies the text color to the spinner
        "& [data-spinner]": {
          borderColor: "bg.brand.primary",
          borderTopColor: "bg.brand.primary",
        },
      },
    },

    size: {
      // Different size variants to accommodate various UI contexts
      sm: {
        // Compact size for dense UIs or secondary actions
        paddingBlock: "2",
        paddingInline: "3",
        fontSize: "sm",
        lineHeight: "4",
      },
      md: {
        // Standard size for most use cases
        paddingBlock: "3",
        paddingInline: "4",
        fontSize: "md",
        lineHeight: "5",
      },
      lg: {
        // Larger size for primary calls-to-action or improved visibility
        paddingBlock: "4",
        paddingInline: "6",
        fontSize: "lg",
        lineHeight: "6",
      },
      icon: {
        // Specialized style for icon-only buttons
        width: "8 !important",
        height: "8",
      },
    },

    width: {
      // Width options for different layout needs
      full: { width: "full" }, // Takes full width of container
      fit: { width: "fit" }, // Only as wide as its content
    },
  },
  // Default configuration for most common use case
  defaultVariants: {
    variant: "primary",
    width: "fit",
    size: "md",
  },
});
