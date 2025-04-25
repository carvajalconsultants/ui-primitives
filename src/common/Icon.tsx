import { styled } from "../../styled-system/jsx";
import { icon } from "../../styled-system/patterns";

import type { HTMLStyledProps } from "../../styled-system/jsx";
import type { IconProperties } from "../../styled-system/patterns";

/**
 * Supported icons in a map format so that it can be extended easily with augmentation.
 */
export interface IconMap {
  "chevron-down": true;
  calendar: true;
  search: true;
  x: true;
}

//TODO Ideally we don't allow style, but cannot get animation to work when specifying the transform prop
export type IconProps = Omit<HTMLStyledProps<"svg">, "className" | "width" | "height"> &
  IconProperties & {
    // Name of the tabler icon, from: https://tabler.io/icons
    id: keyof IconMap;
  };

/**
 * Loads an SVG icon.
 *
 * If you need to an icon, add the SVG in public/icons from: https://tabler.io/icons
 * You can simply use the "Copy SVG" option and paste the content in the file.
 */
export const Icon = ({ id, size = "5", ...props }: IconProps) => (
  <styled.svg {...props} className={icon({ size })}>
    <use xlinkHref={`/icons/sprite.svg#${id}`} />
  </styled.svg>
);
