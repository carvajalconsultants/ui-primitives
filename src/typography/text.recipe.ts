import { defineRecipe } from "@pandacss/dev";

/**
 * Defines consistent text styling (<Text> and <Paragraph> components) patterns across the application.
 * This helps maintain visual hierarchy and readability while ensuring brand consistency.
 */
export const textRecipe = defineRecipe({
  className: "text",
  description: "Consistent text styling for Text and Paragraph components across the application",
  base: {
    fontFamily: "body",
  },
  variants: {
    // Controls text size for different contexts:
    // xs: Fine print, footnotes, or supplementary information
    // sm: Secondary content or dense information areas
    // md: Standard body text
    // lg: Subheadings or emphasized content
    // xl-3xl: Various levels of headlines or attention-grabbing text
    size: {
      xs: { fontSize: "xs" },
      sm: { fontSize: "sm" },
      md: { fontSize: "md" },
      lg: { fontSize: "lg" },
      xl: { fontSize: "xl" },
      "2xl": { fontSize: "2xl" },
      "3xl": { fontSize: "3xl" },
    },

    // Semantic color system for text:
    // primary: Main content and important information
    // secondary: Supporting text or less emphasized content
    // text: General body content that needs neutral styling
    color: {
      primary: { color: "text.primary" },
      secondary: { color: "text.secondary" },
      text: { color: "text.primary" },
    },

    // Font weight options for visual emphasis:
    // regular: Standard text
    // medium: Subtle emphasis
    // semibold: Moderate emphasis for subheadings
    // bold: Strong emphasis for headlines or critical information
    weight: {
      regular: { fontWeight: "regular" },
      medium: { fontWeight: "medium" },
      semibold: { fontWeight: "semiBold" },
      bold: { fontWeight: "bold" },
    },

    // Text transformation options:
    // uppercase: For labels, buttons, or category tags
    // capitalize: For proper nouns or title-style text
    // none: Regular sentence case
    textTransform: {
      uppercase: { textTransform: "uppercase" },
      capitalize: { textTransform: "capitalize" },
      none: { textTransform: "none" },
    },
  },

  // Default styling ensures text is readable and matches brand guidelines
  // without requiring explicit variant selection
  defaultVariants: {
    size: "md",
    color: "primary",
    weight: "regular",
    textTransform: "none",
  },
});
