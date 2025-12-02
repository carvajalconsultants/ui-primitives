import { defineRecipe } from "@pandacss/dev";

/**
 * Style recipe for dropdown items with enhanced visual feedback.
 * Features checkmark indicators for selected items and improved hover/focus states.
 */
export const dropdownItemRecipe = defineRecipe({
  className: "dropdownItem",
  description: "An enhanced dropdown item with checkmark icons for selected items and improved visual states",
  base: {
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
  },
});
