import { cx } from "../../styled-system/css";
import { avatar } from "../../styled-system/recipes";

import type { ComponentProps } from "react";

import type { AvatarVariantProps } from "../../styled-system/recipes";

type AvatarProps = ComponentProps<"img"> &
  Partial<AvatarVariantProps> & {
    /**
     * Whether the avatar is disabled.
     */
    isDisabled?: boolean;

    /**
     * source of the avatar image
     * if not provided, the avatar will be a placeholder
     */
    src?: string;
  };

const FALLBACK_IMAGE = "/images/avatar-placeholder.svg";

/**
 * Displays an image or a fallback image for user avatars.
 */
export const Avatar = ({ rounded, size, borderColor, shadow, objectFit, objectPosition, isDisabled, src, className, ...rest }: AvatarProps) => (
  <img
    loading="lazy"
    aria-disabled={isDisabled}
    className={cx(
      avatar({
        rounded,
        size,
        borderColor,
        shadow,
        objectFit,
        objectPosition,
      }),
      className
    )}
    src={src ?? FALLBACK_IMAGE}
    {...rest}
  />
);
