import { defineRecipe } from "@pandacss/dev";

export const listBoxItemRecipe = defineRecipe({
  className: "listBoxItem",
  description: "An individual selectable option within a dropdown menu, providing visual feedback for selection, focus, and hover states",

  base: {
    // Ensures the option takes up the full width of its container, preventing awkward partial-width selections
    width: "full",
    // Uses the primary text color to maintain readability and consistency with the rest of the application
    color: "text.primary",
    // Makes options easily scannable by slightly emphasizing their text
    fontWeight: "semiBold",

    // Removes the default browser focus outline in favor of our custom styling
    _focusVisible: {
      outline: "none",
    },

    // These three states work together to provide clear visual feedback when users interact with options:
    // - Selected: When an option is currently chosen
    // - Pressed: When an option is being clicked
    // - Focused: When an option is highlighted via keyboard navigation
    // All three states use the same styling to maintain consistency and reduce user confusion
    "&[data-selected]": { bg: "bg.brand.primary", color: "text.white" },
    "&[data-pressed]": { bg: "bg.brand.primary", color: "text.white" },
    "&[data-focused]": { bg: "bg.brand.primary", color: "text.white" },
  },

  variants: {
    size: {
      // Compact size variant ideal for dense UIs like sidebars or when vertical space is limited
      sm: {
        paddingBlock: "1.5",
        paddingInlineStart: "4",
        paddingInlineEnd: "1.5",
        fontSize: "sm",
      },

      // Standard size that provides comfortable tap targets for mouse and touch interaction
      md: {
        paddingBlock: "2",
        paddingInlineStart: "6",
        paddingInlineEnd: "2",
      },
    },
  },

  // Sets medium size as default to ensure good touch targets out of the box
  defaultVariants: {
    size: "md",
  },
});
