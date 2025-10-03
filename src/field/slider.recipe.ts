import { defineSlotRecipe } from "@pandacss/dev";

/**
 * The styles for the Slider component with multiple interactive parts
 */
export const sliderRecipe = defineSlotRecipe({
  className: "slider",
  description: "The styles for the Slider component",
  slots: ["field", "output", "thumb", "track", "trackBase", "fill"],
  base: {
    field: {
      width: "full",
      height: "auto",
    },

    /**
     * The sliderOutput component that shows the value of the slider.
     */
    output: {
      fontSize: "md",
      color: "bg.brand.primary",
      paddingLeft: "2",
    },

    /**
     * The sliderThumb component that represents the thumb of the slider.
     */
    thumb: {
      height: "7",
      width: "7",
      rounded: "full",
      borderWidth: "2",
      top: "[50%]",
      borderStyle: "solid",
      borderColor: "border.brand",
      bg: "bg.primary.index",
      outline: "none",
      transform: "translateY(-50%)",
      transition: "transform",
      ringColor: "text.black",
      cursor: "grab",
      _focusVisible: {
        ring: "2",
        ringColor: "border.brand",
      },

      /**
       * The thumb changes its color when it is disabled.
       */
      _disabled: {
        bg: "bg.disabled",
        borderColor: "border.disabled",
        cursor: "not-allowed",
      },
    },

    /**
     * The sliderTrack component that represents the track of the slider.
     */
    track: {
      height: "7",
      width: "full",
      position: "relative",
    },

    /**
     * The sliderTrackBase component that represents the base of the slider.
     */
    trackBase: {
      position: "absolute",
      top: "[50%]",
      height: "2",
      width: "full",
      transition: "all",
      transitionDuration: "regular",
      transform: "translateY(-50%)",
      rounded: "full",
      bg: "fg.brand.primary.index",

      _disabled: {
        bg: "border.disabled",
      },
    },

    /**
     * The sliderFill component that represents the fill of the slider.
     */
    fill: {
      position: "absolute",
      top: "[50%]",
      height: "2",
      transform: "translateY(-50%)",
      rounded: "full",
      bg: "bg.brand.primary",
    },
  },
});
