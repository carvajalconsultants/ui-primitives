import { defineRecipe } from "@pandacss/dev";

/**
 * The styles for the Cell component, providing consistent styling and behavior
 * for displaying data in tables. Ensures data is presented clearly and accessibly
 * while maintaining visual consistency across the application.
 *
 * Key features:
 * - Consistent padding and vertical alignment for readable data presentation
 * - Built-in focus states for keyboard navigation accessibility
 * - Maintains visual hierarchy through standardized styling
 */
export const cellRecipe = defineRecipe({
  className: "cell",
  description: "The styles for the Cell component",
  base: {
    display: "flex",
    alignItems: "center",
    paddingX: "3",
    paddingY: "4",

    // Centers content vertically to maintain alignment with other cells, especially important for mixed content (text + icons)
    verticalAlign: "middle",

    // Removes default browser outline since we handle focus states differently
    outline: "none",

    // Styles applied when cell receives keyboard focus
    _focusVisible: {
      // Creates a clear visual indicator for keyboard users to know which cell is selected
      outlineWidth: "2",
      outlineStyle: "solid",
      outlineColor: "text.black",

      // Negative offset keeps the focus outline contained within the cell borders
      outlineOffset: "-2",
    },
  },
  variants: {
    isExpanded: {
      false: {},
      true: {
        padding: "0 !important",
      },
    },
  },
  defaultVariants: {
    isExpanded: false,
  },
});
