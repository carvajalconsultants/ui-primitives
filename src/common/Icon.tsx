import { styled } from "../../styled-system/jsx";

import type { HTMLStyledProps } from "../../styled-system/jsx";
import type { SystemProperties } from "../../styled-system/types";

/**
 * Supported icons in a map format so that it can be extended easily with augmentation.
 */
interface IconMap {
  "chevron-down": true;
  calendar: true;
  search: true;
  x: true;
}

//TODO Ideally we don't allow style, but cannot get animation to work when specifying the transform prop
export interface IconProps extends Omit<HTMLStyledProps<"svg">, "className"> {
  // Name of the tabler icon, from: https://tabler.io/icons
  id: keyof IconMap;

  // Size of the vector icon, we assume all icons are squared
  size?: SystemProperties["width"];
}

/**
 * Loads an SVG icon.
 *
 * If you need to an icon, add the SVG in public/icons from: https://tabler.io/icons
 * You can simply use the "Copy SVG" option and paste the content in the file.
 */
export const Icon = ({ id, size = "5", ...props }: IconProps) => (
  <styled.svg {...props} width={size} height={size}>
    <use xlinkHref={`/icons/sprite.svg#${id}`} />
  </styled.svg>
);
