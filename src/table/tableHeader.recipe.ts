import { defineRecipe } from "@pandacss/dev";

/**
 * The styles for the TableHeader component, providing sticky positioning and styling capabilities.
 * Particularly useful for large data tables where keeping the header visible while scrolling is important.
 *
 * Key features:
 * - Optional sticky positioning for better UX with long tables
 * - Visual distinction from table body with subtle background
 * - Proper z-indexing to prevent content overlap
 * - Support for virtualized tables
 */
export const tableHeaderRecipe = defineRecipe({
  className: "tableHeader",
  description: "The styles for the TableHeader component",
  base: {
    // Subtle grey background helps visually separate the header from the table body
    background: "bg.secondary._alt",

    // Rounded corners match the table's card-like appearance
    borderRadius: "lg",

    // This is for virtualized tables
    display: "flex",
  },
  variants: {
    isSticky: {
      true: {
        // Makes header stay visible at the top when scrolling through long tables
        position: "sticky",
        top: "0",

        // Ensures header appears above table content while scrolling to prevent visual overlap
        zIndex: "1",
      },
    },
  },
  defaultVariants: {
    isSticky: true,
  },
});
