import { defineRecipe } from "@pandacss/dev";

export const listBoxRecipe = defineRecipe({
  className: "listBox",
  description: "A dropdown menu container that holds selectable options, commonly used for single or multi-select interfaces",

  base: {
    // Enables scrolling when options exceed the listbox height, keeping the UI compact and usable
    overflow: "auto",
  },

  variants: {
    variant: {
      default: {
        // Ensures the listbox takes up its own line and doesn't share space with other elements
        display: "block",
        // Makes the listbox expand to fill its parent container's width, preventing awkward partial-width dropdowns
        width: "full",
        // Creates a clean white background to ensure options are easily readable against any page background
        bg: "text.white",
        // Softens the corners to match modern UI design patterns and provide visual harmony with other components
        borderRadius: "lg",
        border: "1",
        borderStyle: "solid",
        borderColor: "border.secondary._alt",

        //TODO This feels very limited, should be a prop or something where it can be set per use case
        maxHeight: "100",
      },
      search: {
        outline: "0",
        flex: "1",

        paddingTop: "2",
        borderTopWidth: "1",
        borderTopStyle: "solid",
        borderTopColor: "border.primary",
      },
    },
  },

  defaultVariants: {
    variant: "default",
  },
});
