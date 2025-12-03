import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Style recipe for dropdown items with enhanced visual feedback.
 * Features checkmark indicators for selected items and improved hover/focus states.
 *
 * Slots:
 * - root: Main container for the dropdown item
 * - content: Container for the item text content
 * - icon: Container for the checkmark icon
 */
export const dropdownItemRecipe = defineSlotRecipe({
  className: "dropdownItem",
  description: "An enhanced dropdown item with checkmark icons for selected items and improved visual states",
  slots: ["root", "content", "icon"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      gap: "4",
      cursor: "default",
      userSelect: "none",
      paddingBlock: "2",
      paddingInlineStart: "3",
      paddingInlineEnd: "1",
      borderRadius: "lg",
      outline: "0",
      fontSize: "sm",
      width: "full",
      position: "relative",
      color: "text.primary",

      _focusVisible: {
        outline: "none",
      },

      "&[data-focused]": {
        color: "text.primary",
        bg: "bg.secondary.index",
        fontWeight: "semiBold",
      },
      "&[data-disabled]": {
        color: "text.disabled",
        cursor: "not-allowed",
        opacity: "60",
      },

      "&:not([data-focused]):hover": {
        bg: "bg.secondary.index",
      },

      "&[data-selected]": {
        bg: "bg.brand.primary",
        color: "text.white",
      },

      "&[data-selected] .dropdownItem__content": {
        fontWeight: "semiBold",
      },
    },

    content: {
      display: "flex",
      alignItems: "center",
      flex: "1",
      gap: "2",
      fontWeight: "normal",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },

    icon: {
      display: "flex",
      alignItems: "center",
      width: "5",
      justifyContent: "center",
      flexShrink: "0",
    },
  },
  variants: {},
  defaultVariants: {},
});
