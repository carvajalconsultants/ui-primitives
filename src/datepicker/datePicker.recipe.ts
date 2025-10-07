import { defineSlotRecipe } from "@pandacss/dev";

/**
 * Style variants for a date picker component that combines an input field with a
 * calendar popup for date selection. Supports both keyboard input and visual selection.
 */
export const datePickerRecipe = defineSlotRecipe({
  className: "datePicker",
  description: "The styles for the DatePicker component",
  slots: ["group", "dateInput", "button", "popover", "calendar", "calendarHeader", "calendarHeaderBtn", "calendarGrid", "calendarCell"],
  base: {
    // Creates a contained input that looks like a single cohesive control
    group: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "full",
      minWidth: "36",
      maxWidth: "full",
      boxSizing: "border-box",
      overflow: "auto",
      position: "relative",
      paddingRight: "3",
      gap: "2",

      // If the group has a child svg, add padding left (for DateRangePicker)
      "&:has(> svg)": {
        paddingLeft: "3",
      },

      border: "1",
      borderStyle: "solid",
      borderColor: "border.secondary._alt",

      rounded: "full",
      whiteSpace: "nowrap",

      background: "text.white",

      _placeholder: {
        color: "border.secondary._alt",
      },

      // Keyboard navigation indicator
      _focusVisible: {
        outline: "2",
        outlineStyle: "solid",
        outlineColor: "bg.brand.primary",
        outlineOffset: "0",
      },

      // Visual feedback when clicking the input
      "&[data-pressed]": {
        boxShadow: "0",
        background: "bg.brand.primary",
      },

      // Highlights the input when it contains focused elements
      "&[data-focus-within]": {
        outline: "2",
        outlineColor: "bg.brand.primary",
        outlineOffset: "-1",
      },
    },

    // The text input fields where dates appear
    dateInput: {
      display: "flex",
      fontSize: "md",

      // Removes default input styling to blend seamlessly with the group container
      width: "[unset]",
      minWidth: "[unset]",
      padding: "[unset]",
      border: "[unset]",
      outline: "[unset]",

      // Removes default input styling to blend seamlessly with the group container
      "&[slot=start] + span": {
        paddingX: "1",
      },

      // Makes the end date input fill remaining space
      "&[slot=end]": {
        marginRight: "3",
        flex: "1",
      },
    },

    // The calendar toggle button
    button: {
      cursor: "pointer",
      border: "none",

      // Ensures the calendar toggle button is accessible via keyboard
      outline: "1",
      outlineColor: "bg.brand.primary",
      outlineOffset: "1",

      // Styles the calendar icon
      "& > svg": {
        fill: "text.white",
        stroke: "text.primary",
        width: "5",
        height: "5",
      },
    },

    // Creates a floating panel for the calendar
    popover: {
      // width: "var(--trigger-width)",
      background: "text.white",
      border: "1",
      borderStyle: "solid",
      borderColor: "border.secondary._alt",
      borderRadius: "lg",
      shadow: "popover",

      // Handles different corner rounding for single date vs range selection
      "&[data-trigger='DatePicker'] td div": {
        borderRadius: "lg",
      },

      // Special styling for date range selection to show connected dates
      "&[data-trigger='DateRangePicker'] td div": {
        "&[data-selection-start=true]": {
          borderTopLeftRadius: "lg",
          borderBottomLeftRadius: "lg",
          borderTopRightRadius: "none",
          borderBottomRightRadius: "none",
        },

        "&[data-selection-end=true]": {
          borderTopRightRadius: "lg",
          borderBottomRightRadius: "lg",
          borderTopLeftRadius: "none",
          borderBottomLeftRadius: "none",
        },
      },
    },

    // The calendar layout container
    calendar: {
      // Creates spacing and layout for the calendar content
      padding: "3",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "4",

      // Removes default table spacing
      "& table": {
        borderCollapse: "collapse",
      },
    },

    // Month/year navigation section
    calendarHeader: {
      // Organizes the month/year display and navigation buttons
      width: "full",
      display: "flex",
      gap: "2",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "md",
    },

    // Previous/Next month buttons
    calendarHeaderBtn: {
      // Makes month navigation buttons accessible
      outline: "1",
      outlineColor: "bg.brand.primary",
      outlineOffset: "1",
      cursor: "pointer",
      border: "none",
      borderRadius: "lg",

      // Styles and positions the navigation arrows
      "& > svg": {
        fill: "text.white",
        stroke: "text.primary",
        width: "5",
        height: "5",
        // rotate: "90deg",
      },

      // Rotates arrows for previous/next buttons
      "&[slot=previous] svg": {
        transform: "rotate(90deg)",
      },
      "&[slot=next] svg": {
        transform: "rotate(-90deg)",
      },

      // Keyboard navigation indicator
      _focusVisible: {
        outline: "2",
        outlineStyle: "solid",
        outlineColor: "black",
        outlineOffset: "0",
      },
    },

    // The day grid layout
    calendarGrid: {
      // Sets up the day grid layout
      fontSize: "md",

      "& td": {
        textAlign: "center",
        paddingY: "0.5",
        paddingX: "0",
      },
    },

    // Individual day cells
    calendarCell: {
      // Creates consistent, clickable day cells
      textAlign: "center",
      outline: "none",
      lineHeight: "[1]",
      rounded: "lg",
      fontVariantNumeric: "tabular-nums", // Ensures numbers align properly
      aspectRatio: "1/1",
      width: "8",
      padding: "2",
      cursor: "pointer",
      borderRadius: "lg",
      color: "text.primary",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      // Visual feedback for interaction
      _hover: {
        background: "bg.primary._hover",
        color: "text.white",
      },

      // Highlights selected dates
      "&[data-selected]": {
        background: "bg.brand.primary",
        color: "text.white",
        rounded: "none",
      },

      // Visually disables unavailable dates
      "&[data-disabled]": {
        color: "text.disabled",
        cursor: "not-allowed",
      },

      // Styles for unavailable dates
      "&[data-unavailable]": {
        textDecoration: "line-through",
        color: "text.disabled",
      },

      // Keyboard navigation indicator
      _focusVisible: {
        outline: "2",
        outlineStyle: "solid",
        outlineColor: "black",
        outlineOffset: "0",
      },
    },
  },

  variants: {
    size: {
      md: {
        dateInput: {
          paddingY: "2",
          paddingX: "4",
        },
      },
      sm: {
        dateInput: {
          paddingY: "0.5",
          paddingX: "2",
          fontSize: "sm",
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});
