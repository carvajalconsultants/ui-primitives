import { defineRecipe } from "@pandacss/dev";

/**
 * The styles for the Row component, providing consistent styling and behavior across tables.
 * Handles different visual states based on its position (header, footer, body) and user interaction.
 *
 * Key features:
 * - Automatic styling for header, body, and footer positions
 * - Hover and selection states for better user interaction
 * - Support for expandable rows to show additional content
 * - Maintains accessibility through ARIA attributes
 */
export const rowRecipe = defineRecipe({
  className: "row",
  description: "The styles for the Row component",
  base: {
    // This is needed for virtualized tables
    display: "flex",
    width: "full",

    paddingLeft: "4",
    background: "bg.secondary.index",

    // Prevents text selection which can be annoying when clicking table rows
    userSelect: "none",
    // Aligns content consistently with design system
    textAlign: "left",
    // Removes default focus outline since we handle focus states differently
    outline: "none",
    // Shows this is interactive but not text-editable
    cursor: "default",
    // Smooths color changes when hovering/selecting rows
    transition: "colors",
    // Default text color for rows
    color: "text.primary",

    // Styles specific to body rows (inside tbody)
    "tbody &": {
      // Zebra striping for better row distinction in headers
      _even: { background: "bg.secondary.index" },
      _odd: { background: "text.white" },

      // Subtle highlight when hovering header rows
      _hover: { background: "bg.secondary.index" },

      // Visual feedback for selected rows
      "&[data-selected=true]": { background: "bg.active!" },
      // The little line on the left side of the row when selected
      "&[data-selected=true]::before": {
        content: '""',
        display: "block",
        left: "0",
        top: "0",
        width: "1",
        background: "bg.brand.primary!",

        /*
        These 2 work for virtualized tables but not for non-virtualized tables.
        Using the margin nonsense works for both.
        position: "absolute",
        height: "full",
        */
        position: "relative",
        bottom: "0",
        marginLeft: "-4",
        marginRight: "3",

        roundedTopRight: "lg",
        roundedBottomRight: "lg",
      },

      //TODO These actually belong in DataGridExpandableRow and DataGridExpandedRow, if they get more complicated just separate them out
      "&[data-selected=true][data-expandable-row=true]::before": {
        roundedBottomRight: "none",
      },
      "&[data-selected=true][data-expanded-row=true]::before": {
        roundedTopRight: "none",
      },
    },

    // Footer rows get high contrast treatment for emphasis
    "tfoot &": {
      background: "text.black",
      color: "text.white",
    },
  },
});
