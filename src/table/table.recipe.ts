import { defineSlotRecipe } from "@pandacss/dev";

/**
 * The styles for the Table component, providing a consistent, responsive table layout
 * with proper borders and scrolling behavior across all screen sizes.
 *
 * Key features:
 * - Responsive design that handles overflow on mobile devices
 * - Consistent border styling that works across browsers
 * - Proper background colors that match the application theme
 * - Accessible table structure with caption support
 */
export const tableRecipe = defineSlotRecipe({
  className: "table",
  description: "The styles for the Table component",
  slots: ["borderContainer", "scrollContainer", "table"],
  base: {
    // This is the container that handles the border styling
    borderContainer: {
      display: "flex",
      flex: "1",
      flexDirection: "column",
      overflow: "hidden",
      background: "text.white",

      // Creates a clean card-like appearance with rounded corners
      // that works across all browsers and screen sizes
      borderWidth: "1",
      borderStyle: "solid",
      borderColor: "border.secondary._alt",
      borderRadius: "xl",
      minWidth: "0",
    },

    scrollContainer: {
      flex: "1",
      minWidth: "0",

      // If on mobile view, we can scroll horizontally
      overflow: "auto",
    },

    table: {
      borderCollapse: "collapse",

      // Sets consistent text size and ensures captions appear below the table
      fontSize: "md",
      captionSide: "bottom",

      // Prevents system dark/light modes from affecting table colors
      forcedColorAdjust: "none",

      // Matches table background with rest of application
      background: "bg.brand.secondary",
    },
  },
});
