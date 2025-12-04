import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Style recipe for select sections with styled headers.
 * Provides visual grouping and organization for select items.
 *
 * Slots:
 * - root: Main container for the select section
 * - header: Styled header text for the section
 */
export const selectSectionRecipe = defineSlotRecipe({
  className: "selectSection",
  description: "A section component for grouping select items with a styled header",
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
      top: "[-2px]",
      marginTop: "[-1px]",
      marginX: "[-1px]",
      zIndex: "10",
      bg: "bg.secondary.index",
      backdropFilter: "blur(8px)",
      borderTopWidth: "[1px]",
      borderBottomWidth: "[1px]",
      borderColor: "border.secondary._alt",

      "& + *": {
        marginTop: "1",
      },
    },
  },
  variants: {},
  defaultVariants: {},
});
