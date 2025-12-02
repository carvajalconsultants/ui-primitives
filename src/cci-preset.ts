import { definePreset } from "@pandacss/dev";

import { avatarRecipe } from "./avatar/avatar.recipe";
import { badgeRecipe } from "./badge/badge.recipe";
import { buttonRecipe } from "./button/button.recipe";
import { checkboxRecipe } from "./checkbox/checkbox.recipe";
import { comboBoxRecipe } from "./combobox/comboBox.recipe";
import { labelRecipe } from "./common/label.recipe";
import { datePickerRecipe } from "./datepicker/datePicker.recipe";
import { inputRecipe } from "./field/input.recipe";
import { otpTextFieldRecipe } from "./field/otpTextField.recipe";
import { sliderRecipe } from "./field/slider.recipe";
import { switchRecipe } from "./field/switch.recipe";
import { listBoxRecipe } from "./listbox/listBox.recipe";
import { listBoxItemRecipe } from "./listbox/listBoxItem.recipe";
import { dropdownItemRecipe } from "./listbox/dropdownItem.recipe";
import { dialogRecipe } from "./overlay/dialog.recipe";
import { modalRecipe } from "./overlay/modal.recipe";
import { emptyRecipe } from "./placeholder/empty.recipe";
import { radioGroupRecipe } from "./radiogroup/radioGroup.recipe";
import { selectRecipe } from "./select/select.recipe";
import { selectWithTagGroupRecipe } from "./select/selectWithTagGroup.recipe";
import { tabRecipe } from "./tab/tab.recipe";
import { cellRecipe } from "./table/cell.recipe";
import { headerCellRecipe } from "./table/headerCell.recipe";
import { rowRecipe } from "./table/row.recipe";
import { tableRecipe } from "./table/table.recipe";
import { tableBodyRecipe } from "./table/tableBody.recipe";
import { tableFooterRecipe } from "./table/tableFooter.recipe";
import { tableHeaderRecipe } from "./table/tableHeader.recipe";
import { tagGroupRecipe } from "./taggroup/tagGroup.recipe";
import { headingRecipe } from "./typography/heading.recipe";
import { textRecipe } from "./typography/text.recipe";

export const cciPreset = definePreset({
  name: "cci-preset",

  // Minimal tokens as per: https://panda-css.com/docs/guides/minimal-setup
  presets: [],

  conditions: {
    light: "[data-theme=light] &",
    dark: "[data-theme=dark] &",
  },

  // We're generating all the recipes
  staticCss: {
    recipes: "*",
  },

  patterns: {
    extend: {
      square: {
        description: "Applies size to both width and height for square things like icons, spinner, etc.",
        properties: {
          size: {
            type: "token",
            value: "sizes",
            property: "width",
          },
        },
        defaultValues: {
          size: "5", // default to token "5"
        },
        transform: (props) => {
          const { size, ...rest } = props as { size: string; [key: string]: unknown };

          return {
            width: size,
            height: size,
            ...rest,
          };
        },
      },
    },
  },

  // Useful for theme customization
  theme: {
    slotRecipes: {
      checkbox: checkboxRecipe,
      comboBox: comboBoxRecipe,
      datePicker: datePickerRecipe,
      input: inputRecipe,
      otpTextField: otpTextFieldRecipe,
      slider: sliderRecipe,
      dialog: dialogRecipe,
      modal: modalRecipe,
      radioGroup: radioGroupRecipe,
      select: selectRecipe,
      selectWithTagGroup: selectWithTagGroupRecipe,
      table: tableRecipe,
      tagGroup: tagGroupRecipe,
      empty: emptyRecipe,

      // For some reason, the `switch` is not working. (maybe it's reserved word)
      switchh: switchRecipe,
    },
    recipes: {
      avatar: avatarRecipe,
      badge: badgeRecipe,
      button: buttonRecipe,
      cell: cellRecipe,
      headerCell: headerCellRecipe,
      label: labelRecipe,
      listBox: listBoxRecipe,
      listBoxItem: listBoxItemRecipe,
      dropdownItem: dropdownItemRecipe,
      row: rowRecipe,
      tableBody: tableBodyRecipe,
      tableFooter: tableFooterRecipe,
      tableHeader: tableHeaderRecipe,
      heading: headingRecipe,
      text: textRecipe,
      tab: tabRecipe,
    },

    // extend: {
    //   recipes: {
    //     badge: {
    //       base: {
    //         color: "red", // 👈 replace some part of the recipe
    //         fontSize: "lg", // or add new styles
    //       },
    //       variants: {
    //         variant: {
    //           test: {
    //             color: "blue",
    //           },
    //         },
    //       },
    //     },
    //   },
    // },

    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    keyframes: {
      scaleUp: {
        "0%": { opacity: "0", transform: "scale(0.9)" },
        "100%": { opacity: "1", transform: "scale(1)" },
      },

      scaleDown: {
        "0%": { opacity: "1", transform: "scale(1)" },
        "100%": { opacity: "0", transform: "scale(0.9)" },
      },

      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },

      fadeOut: {
        "0%": { opacity: "1" },
        "100%": { opacity: "0" },
      },
    },

    semanticTokens: {
      colors: {
        fg: {
          brand: {
            primary: {
              index: { value: { _light: "#C9DBFF", _dark: "#1c5a85" } },
              _alt: { value: { _light: "#D0D5DD", _dark: "#1c5a85" } },
            },
          },

          success: { primary: { value: { _light: "#069024", _dark: "#4EBB84" } } },
          warning: { primary: { value: { _light: "#E4A500", _dark: "#B54708" } } },
          danger: {
            primary: { value: { _light: "#EA3731", _dark: "#EF6C63" } },
            secondary: { value: { _light: "#FEE4E2", _dark: "#FEE4E2" } },
          },
        },
        bg: {
          primary: {
            index: { value: { _light: "#fff", _dark: "#0b0806" } },
            _hover: { value: { _light: "#5f81bd", _dark: "#1c5a85" } },
          },
          secondary: {
            index: { value: { _light: "#F9FAFB", _dark: "#F9FAFB" } },
            _alt: { value: { _light: "#F5F5F5", _dark: "#F5F5F5" } },
          },
          brand: {
            primary: { value: { _light: "#506FA4", _dark: "#2980b9" } },
            secondary: { value: { _light: "#EAF0FA", _dark: "#1c5a85" } },
          },
          active: { value: { _light: "#F2F5FF", _dark: "#F2F5FF" } },

          success: { primary: { value: { _light: "#E7FFDE", _dark: "#4EBB84" } } },
          warning: { primary: { value: { _light: "#FDFAEE", _dark: "#B54708" } } },
          danger: { primary: { value: { _light: "#FFE9E9", _dark: "#EF6C63" } } },
        },
        text: {
          primary: { value: { _light: "#01173B", _dark: "#FFFFFF" } },
          secondary: { value: { _light: "#4A4A4A", _dark: "#C9C2B7" } },
          tertiary: { value: { _light: "#2E2E2E", _dark: "#2E2E2E" } },
          white: { value: { _light: "#FFFFFF", _dark: "#FFFFFF" } },
          black: { value: { _light: "#000000", _dark: "#000000" } },
          placeholder: { value: { _light: "#202224", _dark: "#747474" } },
          disabled: { value: { _light: "#4A4A4A", _dark: "#C9C2B7" } },
        },
        border: {
          primary: { value: { _light: "#7A8499", _dark: "#5A5858" } },
          secondary: { _alt: { value: { _light: "#2E2E2E40", _dark: "#fff" } } },
          brand: { value: { _light: "#3E80C4", _dark: "#3E80C4" } },
          error: { value: { _light: "#FFE9E9", _dark: "#EF6C63" } },
          disabled: { value: { _light: "#8B8B8B", _dark: "#0B0806" } },
        },
        shadow: {
          primary: { value: "0px 0px 20px 2px rgba(80, 111, 164, 0.5)" },
          danger: { value: "0px 0px 20px 2px rgb(206,106,106,0.6)" },
        },

        body: {
          text: { value: { _light: "#626264", _dark: "#FFFFFF" } },
          bg: { value: { _light: "#fff", _dark: "#0b0806" } },
          selected: { value: { _light: "#F2F5FF", _dark: "#F2F5FF" } },
          input: { value: { _light: "#FFF", _dark: "#13110B" } },
        },
        // border: {
        //   card: { value: { _light: "#2E2E2E40", _dark: "#fff" } },
        // },
        placeholder: {
          input: { value: { _light: "#D0D5DD", _dark: "#D0D5DD" } },
          text: { value: { _light: "#202224", _dark: "#747474" } },
          border: { value: { _light: "#CCC", _dark: "#333" } },
          item: { value: { _light: "#667085", _dark: "#667085" } },
        },

        primary: {
          index: { value: { _light: "#506FA4", _dark: "#2980b9" } },
          text: { value: { _light: "#01173B", _dark: "#FFFFFF" } },
          foreground: { value: { _light: "#5f81bd", _dark: "#1c5a85" } },
          background: { value: { _light: "#EAF0FA", _dark: "#1c5a85" } },
          muted: { value: { _light: "#C9DBFF", _dark: "#1c5a85" } },
          light: { value: { _light: "#D0D5DD", _dark: "#1c5a85" } },
        },
        secondary: {
          index: { value: { _light: "#6599CA", _dark: "#6599CA" } },
          text: { value: { _light: "#4A4A4A", _dark: "#C9C2B7" } },
        },
        tertiary: {
          index: { value: { _light: "#C8E1EE", _dark: "#263440" } },
          bg: { value: { _light: "#F3F3F3", _dark: "#F3F3F3" } },
          bgDark: { value: { _light: "#dbdbdb", _dark: "#dbdbdb" } },
          text: { value: { _light: "#2E2E2E", _dark: "#2E2E2E" } },
          border: { value: { _light: "#D0D5DD", _dark: "#D0D5DD" } },
        },
        grey: {
          index: { value: { _light: "#F9FAFB", _dark: "#F9FAFB" } },
          tab: { value: { _light: "#F5F5F5", _dark: "#F5F5F5" } },
          1: { value: { _light: "#8B8B8B", _dark: "#0B0806" } },
          2: { value: { _light: "#7A8499", _dark: "#5A5858" } },
        },
        success: {
          index: { value: { _light: "#E7FFDE", _dark: "#4EBB84" } },
          text: { value: { _light: "#069024", _dark: "#4EBB84" } },
          secondary: { value: { _light: "#D0FFCC", _dark: "#021D0F" } },
        },
        warning: {
          index: { value: { _light: "#FDFAEE", _dark: "#B54708" } },
          text: { value: { _light: "#E4A500", _dark: "#B54708" } },
          secondary: { value: { _light: "#FFDFD4", _dark: "#1B1101" } },
          border: { value: { _light: "#FEC84B", _dark: "#FEC84B" } },
          background: { value: { _light: "#FFFCF5", _dark: "#FFFCF5" } },
        },
        danger: {
          index: { value: { _light: "#FFE9E9", _dark: "#EF6C63" } },
          text: { value: { _light: "#EA3731", _dark: "#EF6C63" } },
          secondary: { value: { _light: "#FFEEED", _dark: "#1C0503" } },
        },

        white: { value: { _light: "#fff", _dark: "#fff" } },
        black: { value: { _light: "#000 ", _dark: "#000 " } },
        transparent: { value: "transparent" },
        overlay: { value: "rgba(48, 48, 48, 0.65)" },
      },
    },

    tokens: {
      fonts: {
        body: { value: "Inter" },
      },

      sizes: {
        "0": { value: "0px" },
        px: { value: "1px" },
        "0.5": { value: "0.125rem" } /* 2px */,
        "1": { value: "0.25rem" } /* 4px */,
        "1.5": { value: "0.375rem" } /* 6px */,
        "2": { value: "0.5rem" } /* 8px */,
        "2.5": { value: "0.625rem" } /* 10px */,
        "3": { value: "0.75rem" } /* 12px */,
        "3.5": { value: "0.875rem" } /* 14px */,
        "4": { value: "1rem" } /* 16px */,
        "5": { value: "1.25rem" } /* 20px */,
        "6": { value: "1.5rem" } /* 24px */,
        "7": { value: "1.75rem" } /* 28px */,
        "8": { value: "2rem" } /* 32px */,
        "9": { value: "2.25rem" } /* 36px */,
        "10": { value: "2.5rem" } /* 40px */,
        "11": { value: "2.75rem" } /* 44px */,
        "12": { value: "3rem" } /* 48px */,
        "14": { value: "3.5rem" } /* 56px */,
        "16": { value: "4rem" } /* 64px */,
        "20": { value: "5rem" } /* 80px */,
        "24": { value: "6rem" } /* 96px */,
        "28": { value: "7rem" } /* 112px */,
        "32": { value: "8rem" } /* 128px */,
        "36": { value: "9rem" } /* 144px */,
        "40": { value: "10rem" } /* 160px */,
        "44": { value: "11rem" } /* 176px */,
        "48": { value: "12rem" } /* 192px */,
        "52": { value: "13rem" } /* 208px */,
        "56": { value: "14rem" } /* 224px */,
        "60": { value: "15rem" } /* 240px */,
        "64": { value: "16rem" } /* 256px */,
        "72": { value: "18rem" } /* 288px */,
        "80": { value: "20rem" } /* 320px */,
        "96": { value: "24rem" } /* 384px */,
        "100": { value: "30rem" } /* 484px */,
        auto: { value: "auto" },
        "1/2": { value: "50%" },
        "1/3": { value: "33.333333%" },
        "2/3": { value: "66.666667%" },
        "1/4": { value: "25%" },
        "2/4": { value: "50%" },
        "3/4": { value: "75%" },
        "1/5": { value: "20%" },
        "2/5": { value: "40%" },
        "3/5": { value: "60%" },
        "4/5": { value: "80%" },
        "1/6": { value: "16.666667%" },
        "2/6": { value: "33.333333%" },
        "3/6": { value: "50%" },
        "4/6": { value: "66.666667%" },
        "5/6": { value: "83.333333%" },
        full: { value: "100%" },
        screen: { value: "100vh" },
        svh: { value: "100svh" },
        lvh: { value: "100lvh" },
        dvh: { value: "100dvh" },
        min: { value: "min-content" },
        max: { value: "max-content" },
        fit: { value: "fit-content" },

        //Max height for dialogs
        "85vh": { value: "85vh" },
        "300": { value: "300px" },
        "content-half": { value: "calc(50% - var(--spacing-gap))" },
      },

      fontSizes: {
        xs: { value: "10px" },
        sm: { value: "12px" },
        md: { value: "14px" },
        lg: { value: "16px" },
        xl: { value: "20px" },
        "2xl": { value: "24px" },
        "3xl": { value: "30px" },
        "4xl": { value: "40px" },
      },

      fontWeights: {
        regular: { value: "400" },
        medium: { value: "500" },
        semiBold: { value: "600" },
        bold: { value: "700" },
      },

      animations: {
        opacity: {
          value: "opacity 0.3s ease",
        },

        fadeIn: { value: "fadeIn 0.3s" },
        fadeOut: { value: "fadeOut 0.3s" },
        scaleUp: { value: "scaleUp 0.3s" },
        scaleDown: { value: "scaleDown 0.3s" },
        slideUp: { value: "slideUp 0.3s" },
        slideDown: { value: "slideDown 0.3s" },
        spin: {
          value: "spin 1s linear infinite",
        },
      },

      easings: {
        ease: { value: "ease" },
        "ease-in": { value: "ease-in" },
        "ease-out": { value: "ease-out" },
        "ease-in-out": { value: "ease-in-out" },
      },

      durations: {
        fast: { value: "150ms" },
        regular: { value: "300ms" },
        slow: { value: "0.3s" },
        slowest: { value: "1.75s" },
      },

      shadows: {
        0: { value: "0px" },
        1: { value: "1px" },
        2: { value: "2px" },
        3: { value: "3px" },
        4: { value: "4px" },

        /**
         * Glow from: https://cssbud.com/css-generator/css-glow-generator/
         * This uses the primary color in our design system with the settings:
         * Blur: 30px
         * Glow range: 2px
         * Opacity: 60%
         * Color: #CEA26A
         */
        glow: {
          index: { value: "0px 0px 20px 2px rgba(80, 111, 164, 0.5)" },
          danger: { value: "0px 0px 20px 2px rgb(206,106,106,0.6)" },
        },

        popover: { value: "0px 8px 8px -4px #10182808, 0px 20px 24px -4px #184FBE33" },
      },

      borders: {
        0: { value: "0px" },
        1: { value: "1px" },
        2: { value: "2px" },
        3: { value: "3px" },
        4: { value: "4px" },
        none: { value: "none" },
      },

      borderWidths: {
        0: { value: "0px" },
        1: { value: "1px" },
        2: { value: "2px" },
        3: { value: "3px" },
        4: { value: "4px" },
      },

      radii: {
        none: { value: "0px" },
        lg: { value: "8px" },
        1: { value: "1px" },
        2: { value: "2px" },
        3: { value: "3px" },
        4: { value: "4px" },
        xl: { value: "14px" },
        full: { value: "9999px" },
      },

      lineHeights: {
        3: { value: ".75rem" },
        4: { value: "1rem" },
        5: { value: "1.25rem" },
        6: { value: "1.5rem" },
        7: { value: "1.75rem" },
        8: { value: "2rem" },
        9: { value: "2.25rem" },
        10: { value: "2.5rem" },
        none: { value: "1" },
        tight: { value: "1.25" },
        snug: { value: "1.375" },
        normal: { value: "1.5" },
        relaxed: { value: "1.625" },
        loose: { value: "2" },
      },

      opacity: {
        50: { value: "0.5" },
        60: { value: "0.6" },
        70: { value: "0.7" },
        80: { value: "0.8" },
        90: { value: "0.9" },
        100: { value: "1" },

        "0": { value: "0" },
        "1": { value: "1  " },
      },

      blurs: {
        sm: { value: "2px" },
        md: { value: "4px" },
        lg: { value: "8px" },
      },

      spacing: {
        auto: { value: "auto" },
        "0": { value: "0px" },
        "0.25": { value: "1px" },
        "0.5": { value: "2px" },
        "1": { value: "4px" },
        "1.5": { value: "6px" },
        "2": { value: "8px" },
        "2.5": { value: "10px" },
        "3": { value: "12px" },
        "3.5": { value: "14px" },
        "4": { value: "16px" },
        "5": { value: "20px" },
        "5.5": { value: "22px" },
        "6": { value: "24px" },
        "8": { value: "32px" },
        "9": { value: "36px" },
        "10": { value: "40px" },

        "38": { value: "38px" },
      },
    },
  },
});
