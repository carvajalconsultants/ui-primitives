import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Defines the styles for the Empty component using the sva (styled variant API) pattern.
 * This creates a multi-slot component with different visual states and variants.
 *
 * Slots:
 * - root: Main container with centered content
 * - iconContainer: Wrapper for the icon and its decorative rings
 * - ringContainer: Individual decorative rings around the icon
 * - iconWrapper: Container for the icon with background
 * - icon: The actual icon with color manipulation
 * - content: Container for text content
 * - title: Heading text
 * - description: Supporting text
 *
 *
 * Variants:
 * - normal: Default state with brand colors
 * - danger: Error state with danger colors
 */

export const emptyRecipe = defineSlotRecipe({
  className: "empty",
  description: "Style variants for empty state component with icon and text content",
  slots: ["root", "iconContainer", "ringContainer", "iconWrapper", "icon", "content", "title", "description"],
  base: {
    // The root container for the empty state
    root: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "80",
      width: "full",
      height: "full",
      textAlign: "center",
      overflow: "hidden",
    },

    // The container for the icon and rings
    iconContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mb: "4",
    },

    // The container for the rings
    ringContainer: {
      position: "absolute",
      borderRadius: "full",
      borderWidth: "1",
      borderColor: "border.primary",
      pointerEvents: "none",
      zIndex: "0",
    },

    // The container for the icon
    iconWrapper: {
      padding: "3",
      borderRadius: "full",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    // The icon
    icon: {
      zIndex: "1",
      boxShadow: "1",
      objectFit: "contain",
      position: "relative",
      flexShrink: "0",
      display: "block",
    },

    // The content container
    content: {
      transform: "translateY(-150px)",
      paddingX: "6",
    },
    title: {},

    // The description
    description: {
      mt: "1",
      maxWidth: "80",
      textWrap: "balance",
      mx: "auto",
    },
  },
  variants: {
    variant: {
      normal: {
        iconWrapper: {
          bg: "bg.secondary._alt",
        },
        icon: {
          filter: "[brightness(0) saturate(100%) drop-shadow(0px 1000px 0 var(--colors-bg-brand-primary))]",
          transform: "translateY(-1000px)",
        },
      },
      danger: {
        iconWrapper: {
          bg: "bg.danger.primary",
        },
        icon: {
          filter: "[brightness(0) saturate(100%) drop-shadow(0px 1000px 0 var(--colors-danger-secondary))]",
          transform: "translateY(-1000px)",
        },
      },
    },
  },
  defaultVariants: {
    variant: "normal",
  },
});
