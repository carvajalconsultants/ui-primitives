import { styled } from "../../styled-system/jsx";
import { square } from "../../styled-system/patterns";

import type { HTMLStyledProps } from "../../styled-system/jsx";
import type { SquareProperties } from "../../styled-system/patterns";

/**
 * Supported icons in a map format so that it can be extended easily with augmentation.
 */
export interface IconMap {
  "chevron-down": true;
  calendar: true;
  search: true;
  x: true;
  plus: true;
  check: true;
}

export type IconProps = Omit<HTMLStyledProps<"svg">, "width" | "height"> &
  SquareProperties & {
    // Name of the tabler icon, from: https://tabler.io/icons
    id: keyof IconMap;
  };

/**
 * Loads an SVG icon from the sprite map.
 *
 * Icons use `currentColor` for stroke/fill, so pass the `color` prop or set `color` via CSS
 * to control icon color. The icon inherits text color by default.
 *
 * To add an icon, add the SVG in public/icons from: https://tabler.io/icons
 * (use "Copy SVG" option). Ensure strokes/fills use `currentColor` for styleability.
 */
export const Icon = ({ id, size = "5", className = "", ...props }: IconProps) => (
  <styled.svg
      color={"currentColor" as never}
      {...props}
      className={`${square({ size })} ${className}`}
    >
    <use xlinkHref={`/__spritemap#${id}`} />
  </styled.svg>
);
