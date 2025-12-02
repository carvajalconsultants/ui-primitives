import { defineRecipe } from "@pandacss/dev";

/**
 * The styles for the Label component that provides consistent styling for form field labels.
 * Supports different sizes, colors, and font weights for various form contexts.
 */
export const labelRecipe = defineRecipe({
  className: "label",
  description: "Styles for the Label component that provides consistent styling for form field labels",
  base: {
    flex: "1",
  },
  variants: {
    size: {
      sm: { fontSize: "sm" },
      md: { fontSize: "md" },
      lg: { fontSize: "lg" },
    },
    color: {
      primary: { color: "text.primary" },
      secondary: { color: "text.secondary" },
      tertiary: { color: "text.tertiary" },
    },
    weight: {
      regular: { fontWeight: "regular" },
      medium: { fontWeight: "medium" },
      bold: { fontWeight: "bold" },
    },
  },
  defaultVariants: {
    size: "md",
    color: "tertiary",
    weight: "regular",
  },
});
