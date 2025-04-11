import { defineRecipe } from "@pandacss/dev";

/**
 * The styles for the TableFooter component, providing consistent styling and behavior
 * for displaying summary data, totals, or other concluding information at the bottom
 * of data tables.
 *
 * Key features:
 * - Sticky positioning keeps important summary data visible during table scrolling
 * - Maintains consistent styling with the rest of the table
 * - Provides semantic structure for better accessibility
 */
export const tableFooterRecipe = defineRecipe({
  className: "tableFooter",
  description: "The styles for the TableFooter component",
  variants: {
    isSticky: {
      true: {
        // Makes the footer stay fixed at the bottom of the table when scrolling, like a sticky note
        position: "sticky",

        // Anchors the sticky footer to the bottom edge
        bottom: "0",

        // Ensures the footer appears above regular table content when scrolling,
        // preventing other content from overlapping it
        zIndex: "1",
      },
    },
  },
  defaultVariants: {
    isSticky: true,
  },
});
