import { defineRecipe } from "@pandacss/dev";

/**
 * The styles for the TableBody component, providing semantic structure and accessibility benefits
 * for table layouts. This component contains the main content rows of the table.
 *
 * Key features:
 * - Proper semantic structure for table body content
 * - Accessibility benefits through correct HTML table structure
 * - Maintains relative positioning for nested elements
 */
export const tableBodyRecipe = defineRecipe({
  className: "tableBody",
  description: "The styles for the TableBody component",
  base: {
    position: "relative",
  },
});
