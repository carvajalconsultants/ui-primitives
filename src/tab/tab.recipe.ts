import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Defines consistent tab styling patterns across the application.
 * This helps maintain visual hierarchy and interactive states while ensuring brand consistency.
 */
export const tabRecipe = defineSlotRecipe({
  className: "tab",
  description: "Consistent tab styling patterns for tab components across the application",
  slots: ["root", "list", "tab", "panel"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      fontFamily: "body",
      gap: "4",
      width: "full",
    },
    list: {
      display: "flex",
      gap: "1",
    },
    tab: {
      cursor: "pointer",
      outline: "none",
      paddingBlock: "1.5",
      paddingInline: "2.5",
      fontSize: "md",
      transition: "all",
      transitionDuration: "fast",
      color: "text.primary",
      fontWeight: "semiBold",
      borderRadius: "full",
      borderWidth: "1",
      borderStyle: "solid",
      borderColor: "transparent",

      _hover: {
        color: "text.primary",
      },

      _selected: {
        color: "text.primary",
        borderColor: "text.primary",
      },

      _disabled: {
        cursor: "not-allowed",
        opacity: "50",
        _hover: {
          color: "text.primary",
        },
        _selected: {
          backgroundColor: "transparent",
        },
        _active: {
          backgroundColor: "transparent",
        },
      },

      _active: {
        backgroundColor: "transparent",
      },

      _focus: {
        shadowColor: "text.primary",
      },
    },
    panel: {
      width: "full",
      marginTop: "4",
    },
  },
  variants: {
    // Controls the size of the tab component
    size: {
      sm: {
        tab: {
          fontSize: "sm",
          paddingBlock: "1",
          paddingInline: "2",
        },
      },
      md: {
        tab: {
          fontSize: "md",
          paddingBlock: "1.5",
          paddingInline: "2.5",
        },
      },
      lg: {
        tab: {
          fontSize: "lg",
          paddingBlock: "2",
          paddingInline: "3",
        },
      },
    },

    // Controls the visual style of the tab
    variant: {
      line: {
        tab: {
          borderBottomWidth: "1",
          borderBottomStyle: "solid",
          borderBottomColor: "border.secondary",
          _selected: {
            borderBottomColor: "border.brand",
            color: "text.brand",
          },
        },
      },
      enclosed: {
        tab: {
          borderWidth: "1",
          borderStyle: "solid",
          borderColor: "border.secondary",
          borderRadius: "lg",
          _selected: {
            backgroundColor: "bg.brand.primary",
            color: "text.white",
            borderColor: "border.brand",
          },
        },
      },
      unstyled: {
        tab: {
          border: "none",
          _selected: {
            color: "text.brand",
          },
        },
      },
    },

    // Controls the color scheme of the tab
    color: {
      primary: {
        tab: {
          color: "text.primary",
          _selected: {
            color: "text.brand",
          },
        },
      },
      secondary: {
        tab: {
          color: "text.secondary",
          _selected: {
            color: "text.brand",
          },
        },
      },
    },

    // Controls the alignment of tabs
    align: {
      start: {
        list: {
          justifyContent: "flex-start",
        },
      },
      center: {
        list: {
          justifyContent: "center",
        },
      },
      end: {
        list: {
          justifyContent: "flex-end",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "line",
    color: "primary",
    align: "start",
  },
});
