import { defineRecipe } from "@pandacss/dev";

/**
 * The styles for the HeaderCell component, providing consistent styling and behavior
 * for column headers in data tables. Helps users understand the structure and content
 * of each column while maintaining visual hierarchy.
 *
 * Key features:
 * - Visually distinct from regular cells to help users identify column headers
 * - Built-in focus states for keyboard navigation accessibility
 * - Consistent padding and typography to match design system
 * - Support for sorting indicators and other header-specific icons
 */
export const headerCellRecipe = defineRecipe({
  className: "headerCell",
  description: "The styles for the HeaderCell component",
  base: {
    display: "flex",
    paddingX: "3",
    paddingY: "4",
    textAlign: "left",
    fontSize: "md",

    // Removes default focus outline since we handle focus states differently
    outline: "none",

    fontWeight: "medium",
    color: "text.black",
    background: "bg.secondary.index",

    // Centers content vertically for consistent alignment with icons
    verticalAlign: "middle",

    cursor: "default",

    // Visible focus indicator for keyboard navigation accessibility
    _focusVisible: {
      outlineWidth: "2",
      outlineStyle: "solid",
      outlineColor: "text.black",
      // Negative offset keeps outline within cell boundaries
      outlineOffset: "-2",
    },

    // Styles for sort indicators and other header icons
    "& svg": {
      // Prevents icons from being squished when cell width is constrained
      flexShrink: "0",

      // Uses branded color for icon outlines while keeping interior transparent
      stroke: "text.primary",
      fill: "transparent",
    },
  },
});
