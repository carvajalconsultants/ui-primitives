import { defineRecipe } from "@pandacss/dev";

export const avatarRecipe = defineRecipe({
  className: "avatar",
  description: "The styles for the Avatar component",
  base: {
    // When an avatar is disabled (e.g. for inactive users), show visual feedback by making it semi-transparent and changing cursor
    "&[aria-disabled=true]": {
      cursor: "not-allowed",
      opacity: "50",
    },
  },
  variants: {
    // Controls the corner rounding - useful for matching different UI contexts:
    // - full: Circular avatars for profile pictures
    // - fit: Square avatars for logos/brand images
    // - medium: Slightly rounded corners for cards/tiles
    rounded: {
      full: { borderRadius: "full" },
      fit: { borderRadius: "none" },
      medium: { borderRadius: "lg" },
    },

    // Predefined sizes for different contexts:
    // - smallest/smaller: For compact lists or tight spaces (10px-16px)
    // - small: For comments or secondary content (32px)
    // - medium: Default size for most contexts (48px)
    // - large: For profile pages or featured content (64px)
    size: {
      smallest: { width: "10", height: "10" },
      smaller: { width: "16", height: "16" },
      small: { width: "32", height: "32" },
      medium: { width: "48", height: "48" },
      large: { width: "64", height: "64" },
    },

    // Border colors to indicate status or hierarchy:
    // - primary: For highlighting active/selected users
    // - secondary: For indicating special status/roles
    // - none: Default state with no border
    borderColor: {
      primary: {
        borderWidth: "4",
        borderStyle: "solid",
        borderColor: "bg.brand.primary",
      },
      secondary: {
        borderWidth: "4",
        borderStyle: "solid",
        borderColor: "bg.brand.secondary",
      },
      none: { border: "none" },
    },

    // Drop shadow for depth/elevation:
    // - none: Flat appearance for inline content
    // - small: Subtle lift for interactive elements
    // - large: Prominent elevation for modals/overlays
    shadow: {
      none: { boxShadow: "0" },
      small: { boxShadow: "3" },
      large: { boxShadow: "4" },
    },

    // Image scaling behavior:
    // - cover: Fills frame while maintaining aspect ratio (best for portraits)
    // - contain: Shows full image with possible letterboxing (best for logos)
    // - fill: Stretches image to fill frame (use cautiously)
    objectFit: {
      cover: { objectFit: "cover" },
      contain: { objectFit: "contain" },
      fill: { objectFit: "fill" },
    },

    // Image alignment within frame:
    // Useful when image and frame proportions don't match
    // E.g. 'top' for headshots, 'center' for centered logos
    objectPosition: {
      center: { objectPosition: "center" },
      top: { objectPosition: "top" },
      bottom: { objectPosition: "bottom" },
      left: { objectPosition: "left" },
      right: { objectPosition: "right" },
    },
  },

  // Sensible defaults for a profile picture avatar:
  // Circular shape, medium size, no border/shadow, image covers frame and is centered
  defaultVariants: {
    rounded: "full",
    size: "medium",
    borderColor: "none",
    shadow: "none",
    objectFit: "cover",
    objectPosition: "center",
  },
});
