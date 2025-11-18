import { defineSlotRecipe } from "@pandacss/dev";

/**
 * The styles for the RadialProgress component
 */
export const radialProgressRecipe = defineSlotRecipe({
  className: "radialProgress",
  description: "The styles for the RadialProgress component",
  slots: ["container", "svg", "centerContent", "backgroundCircle", "progressCircle"],
  base: {
    container: {
      position: "relative",
    },
    svg: {
      transform: "rotate(-90deg)",
    },
    centerContent: {
      position: "absolute",
      top: "[50%]",
      left: "[50%]",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      textAlign: "center",
      pointerEvents: "none",
    },
    backgroundCircle: {
      stroke: "bg.brand.primary",
      fill: "none",
      opacity: "0.3",
    },
    progressCircle: {
      stroke: "bg.brand.primary",
      fill: "none",
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundCircle: {
          stroke: "bg.brand.primary",
        },
        progressCircle: {
          stroke: "bg.brand.primary",
        },
      },
      success: {
        backgroundCircle: {
          stroke: "bg.success.primary",
        },
        progressCircle: {
          stroke: "bg.success.primary",
        },
      },
      warning: {
        backgroundCircle: {
          stroke: "bg.warning.primary",
        },
        progressCircle: {
          stroke: "bg.warning.primary",
        },
      },
      danger: {
        backgroundCircle: {
          stroke: "bg.danger.primary",
        },
        progressCircle: {
          stroke: "bg.danger.primary",
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
