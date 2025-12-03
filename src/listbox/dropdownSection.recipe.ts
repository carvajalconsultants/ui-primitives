import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Style recipe for dropdown sections with styled headers.
 * Provides visual grouping and organization for dropdown items.
 *
 * Slots:
 * - root: Main container for the dropdown section
 * - header: Styled header text for the section
 */
export const dropdownSectionRecipe = defineSlotRecipe({
  className: "dropdownSection",
  description: "A section component for grouping dropdown items with a styled header",
  slots: ["root", "header"],
  base: {
    root: {
      "&:first-child": {
        marginTop: "-5px",
      },
      "&::after": {
        content: '""',
        display: "block",
        height: "5px",
      },
    },

    header: {
      fontSize: "sm",
      fontWeight: "semiBold",
      color: "text.secondary",
      paddingX: "4",
      paddingY: "2",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      position: "sticky",
      top: "-5px",
      marginTop: "-px",
      marginX: "-px",
      zIndex: "10",
      bg: "bg.secondary.index",
      backdropFilter: "blur(8px)",
      borderTopWidth: "px",
      borderBottomWidth: "px",
      borderColor: "border.secondary._alt",
      "& + *": {
        marginTop: "1",
      },
    },
  },
  variants: {},
  defaultVariants: {},
});
