import { defineRecipe } from "@pandacss/dev";

/**
 * Recipe for heading typography styles that provides consistent text styling across the application
 * with support for different sizes, colors, weights, and text wrapping behaviors.
 */
export const headingRecipe = defineRecipe({
  className: "heading",
  description: "Styles for heading elements (h1-h6) with configurable size, color, weight, and text wrapping",
  base: {
    // Base font family for all heading variants
    fontFamily: "body",
  },
  variants: {
    // Controls the visual hierarchy through different font sizes
    size: {
      sm: { fontSize: "md" },
      md: { fontSize: "xl" },
      lg: { fontSize: "2xl" },
      xl: { fontSize: "3xl" },
      "2xl": { fontSize: "4xl" },
    },
    // Defines the text color variants
    color: {
      primary: { color: "text.primary" },
      secondary: { color: "text.secondary" },
    },
    // Controls the font weight for different emphasis levels
    weight: {
      regular: { fontWeight: "regular" },
      medium: { fontWeight: "medium" },
      semiBold: { fontWeight: "semiBold" },
      bold: { fontWeight: "bold" },
    },
    // Controls how text wraps when it reaches container boundaries
    textWrap: {
      nowrap: { textWrap: "nowrap" },
      wrap: { textWrap: "wrap" },
      balance: { textWrap: "balance" },
    },
  },
  // Default styling when no variants are specified
  defaultVariants: {
    size: "md",
    color: "primary",
    weight: "bold",
    textWrap: "wrap",
  },
});
