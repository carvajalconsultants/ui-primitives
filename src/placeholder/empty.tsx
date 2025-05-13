import { empty } from "../../styled-system/recipes";
import { Icon } from "../common/Icon";
import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";

import type { FC } from "react";

import type { EmptyVariantProps } from "../../styled-system/recipes";
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

type EmptyProps = Partial<EmptyVariantProps> & {
  // The icon to display in the empty state, using the Icon component's props interface
  icon: IconProps["id"];

  // The main heading text that appears below the icon
  title: string;

  // Additional descriptive text that provides context or guidance to the user
  description: string;

  // These are the sizes of the icon
  iconSize?: number;

  // This is the number of rings
  ringCount?: number;

  // This is the base opacity of the rings
  ringBaseOpacity?: number;

  // This is the multiplier for the visual size
  visualSizeMultiplier?: number;
};

export const Empty: FC<EmptyProps> = ({ variant, icon, title, description, iconSize = 28, ringCount = 5, ringBaseOpacity = 0.08, visualSizeMultiplier = 14 }) => {
  // The visual area for icon + rings
  const visualSize = iconSize * visualSizeMultiplier;

  // Get the classes from our recipe using the variant
  const styles = empty({ variant });

  return (
    <div className={styles.root}>
      {/* Centered visual area for icon + rings */}
      <div
        className={styles.iconContainer}
        style={{
          width: `${visualSize}px`,
          height: `${visualSize}px`,
        }}>
        {/* Background Rings */}
        {Array.from({ length: ringCount }, (_, idx) => {
          const i = idx + 1;

          return (
            <div
              key={i}
              className={styles.ringContainer}
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: `${iconSize + (i * (visualSize - iconSize)) / ringCount}px`,
                height: `${iconSize + (i * (visualSize - iconSize)) / ringCount}px`,
                opacity: ringBaseOpacity * (ringCount + 1 - i),
              }}
            />
          );
        })}

        {/* Icon */}
        <div data-variant={variant} className={styles.iconWrapper}>
          <Icon id={icon} className={styles.icon} />
        </div>
      </div>

      <div className={styles.content}>
        <Heading level={1} size="md" weight="semiBold" textWrap="balance">
          {title}
        </Heading>
        <div className={styles.description}>
          <Paragraph>{description}</Paragraph>
        </div>
      </div>
    </div>
  );
};
