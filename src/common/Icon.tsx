import { styled } from "../../styled-system/jsx";

import type { HTMLStyledProps } from "../../styled-system/jsx";
import type { SystemProperties } from "../../styled-system/types";

// Name of the tabler icon, from: https://tabler.io/icons
//TODO Ideally we don't allow style, but cannot get animation to work when specifying the transform prop
// Size keyword isnt' working because it's a reserved keyword in <svg> due to which we moved to width + height
export interface IconProps extends Omit<HTMLStyledProps<"svg">, "className" | "size"> {
  id:
    | "x"
    | "asterisk"
    | "filter"
    | "chevron-down"
    | "calendar"
    | "chevron-right"
    | "arrow-right"
    | "prescription"
    | "fill"
    | "prescription-match"
    | "account"
    | "user"
    | "item"
    | "logout"
    | "three-dots"
    | "search"
    | "arrow-up-down"
    | "arrow-up"
    | "arrow-down"
    | "sliders-horizontal"
    | "circle-check";

  // Size of the vector icon, we assume all icons are squared
  size?: SystemProperties["width"];
}

/**
 * Loads an SVG icon.
 *
 * If you need to an icon, add the SVG in src/assets/icons from: https://tabler.io/icons
 * You can simply use the "Copy SVG" option and paste the content in the file.
 */
export const Icon = ({ id, size = "5", ...props }: IconProps) => (
  <styled.svg {...props} width={size} height={size}>
    <use xlinkHref={`/icons/sprite.svg#${id}`} />
  </styled.svg>
);
