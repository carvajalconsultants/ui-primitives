import { sva } from "../../styled-system/css";
import { Box } from "../../styled-system/jsx";
import { Icon } from "../common/Icon";
import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";

import type * as React from "react";

import type { RecipeVariantProps } from "../../styled-system/css";
import type { IconProps } from "../common/Icon";

/**
 * Defines the styles for the Empty component using the sva (styled variant API) pattern.
 * This creates a multi-slot component with different visual states and variants.
 *
 * Slots:
 * - root: Main container with centered content
 * - iconContainer: Wrapper for the icon and its decorative rings
 * - ringContainer: Individual decorative rings around the icon
 * - iconWrapper: Container for the icon with background
 * - icon: The actual icon with color manipulation
 * - content: Container for text content
 * - title: Heading text
 * - description: Supporting text
 *
 * Variants:
 * - normal: Default state with brand colors
 * - danger: Error state with danger colors
 */
const emptyStyles = sva({
  slots: ["root", "iconContainer", "ringContainer", "iconWrapper", "icon", "content", "title", "description"],
  base: {
    root: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "80",
      width: "full",
      height: "full",
      textAlign: "center",
      overflow: "hidden",
    },
    iconContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mb: "4",
    },
    ringContainer: {
      position: "absolute",
      borderRadius: "full",
      borderWidth: "1",
      borderColor: "border.primary",
      pointerEvents: "none",
      zIndex: "0",
    },
    iconWrapper: {
      padding: "3",
      borderRadius: "full",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      zIndex: "1",
      boxShadow: "1",
      objectFit: "contain",
      position: "relative",
      flexShrink: "0",
      display: "block",
    },
    content: {
      transform: "translateY(-150px)",
      paddingX: "6",
    },
    title: {},
    description: {
      mt: "1",
      maxWidth: "80",
      textWrap: "balance",
      mx: "auto",
    },
  },
  variants: {
    variant: {
      normal: {
        iconWrapper: {
          bg: "bg.secondary._alt",
        },
        icon: {
          filter: "[brightness(0) saturate(100%) drop-shadow(0px 1000px 0 var(--colors-bg-brand-primary))]",
          transform: "translateY(-1000px)",
        },
      },
      danger: {
        iconWrapper: {
          borderColor: "fg.danger.primary",
        },
        icon: {
          filter: "[brightness(0) saturate(100%) drop-shadow(0px 1000px 0 var(--colors-fg-danger-primary))]",
          transform: "translateY(-1000px)",
        },
      },
    },
  },
  defaultVariants: {
    variant: "normal",
  },
});

type EmptyStyleProps = RecipeVariantProps<typeof emptyStyles>;

// CONFIG
const ICON_SIZE = 28;
const RING_COUNT = 5;
const RING_BASE_OPACITY = 0.08;
const VISUAL_SIZE_MULTIPLIER = 14;

type EmptyProps = EmptyStyleProps & {
  // The icon to display in the empty state, using the Icon component's props interface
  icon: IconProps;

  // The main heading text that appears below the icon
  title: string;

  // Additional descriptive text that provides context or guidance to the user
  description: string;
};

export const Empty: React.FC<EmptyProps> = ({ icon, title, description, variant = "normal" }) => {
  // The visual area for icon + rings
  const iconSize = ICON_SIZE;
  const visualSize = iconSize * VISUAL_SIZE_MULTIPLIER;

  // Get all the classes from our recipe using the variant
  const classes = emptyStyles({ variant });

  return (
    <div className={classes.root}>
      {/* Centered visual area for icon + rings */}
      <div
        className={classes.iconContainer}
        style={{
          width: `${visualSize}px`,
          height: `${visualSize}px`,
        }}>
        {/* Background Rings */}
        {Array.from({ length: RING_COUNT }, (_, idx) => {
          const i = idx + 1;

          return (
            <div
              key={i}
              className={classes.ringContainer}
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: `${iconSize + (i * (visualSize - iconSize)) / RING_COUNT}px`,
                height: `${iconSize + (i * (visualSize - iconSize)) / RING_COUNT}px`,
                opacity: RING_BASE_OPACITY * (RING_COUNT + 1 - i),
                borderStyle: "solid",
              }}
            />
          );
        })}

        {/* Icon */}
        <div className={classes.iconWrapper}>
          <Icon {...icon} className={classes.icon} />
        </div>
      </div>

      <div className={classes.content}>
        <Heading level={1} size="md" weight="semiBold" textWrap="balance">
          {title}
        </Heading>
        <Box className={classes.description}>
          <Paragraph>{description}</Paragraph>
        </Box>
      </div>
    </div>
  );
};
