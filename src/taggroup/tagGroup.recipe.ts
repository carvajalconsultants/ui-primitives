import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Defines the visual styling and interactive behavior for a group of selectable tags
 *
 * This recipe creates a consistent tag selection interface where users can:
 * - View a collection of tags in a responsive layout
 * - Select/deselect tags with visual feedback
 * - Navigate tags using keyboard with accessible focus states
 */
export const tagGroupRecipe = defineSlotRecipe({
  className: "tagGroup",
  description: "A component that manages and displays a collection of related tags with optional labeling and error states",
  slots: ["group", "tagList", "tag", "button"],
  base: {
    // Container layout for the entire tag selection component
    group: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      gap: "1",
    },

    // Responsive grid layout that wraps tags into multiple rows as needed
    tagList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1",
    },

    // Interactive tag styling with consistent spacing and clear interactive states
    tag: {
      display: "flex",
      alignItems: "center",
      gap: "1",
      color: "text.primary",
      backgroundColor: "bg.brand.secondary",
      borderRadius: "full",
      paddingX: "2",
      paddingY: "1",
      cursor: "pointer",
      fontSize: "sm",

      // Provides visual feedback when users hover over selectable tags
      _hover: {
        color: "text.white",
        backgroundColor: "bg.primary._hover",
      },

      // Ensures keyboard navigation has clear visual indicators for accessibility
      _focusVisible: {
        outline: "2",
        outlineStyle: "solid",
        outlineColor: "bg.brand.primary",
      },

      // Clearly distinguishes which tags are currently selected
      _selected: {
        color: "text.white",
        backgroundColor: "bg.brand.primary",
      },
    },

    // Remove button styling for tags that allow removal
    button: {
      cursor: "pointer",
    },
  },
});
