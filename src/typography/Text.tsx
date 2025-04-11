import { text } from "../../styled-system/recipes";

import type { FC, PropsWithChildren } from "react";

import type { TextVariant } from "../../styled-system/recipes";

type TextProps = PropsWithChildren &
  Partial<TextVariant> & {
    /**
     * Allows the text to be placed in a specific named slot, used in various react-aria components.
     */
    slot?: React.HTMLAttributes<HTMLSpanElement>["slot"];
  };

/**
 * Renders a <span> tag with the design system.
 */
export const Text: FC<TextProps> = ({ size, color, weight, textTransform, ...props }) => <span className={text({ size, color, weight, textTransform })} {...props} />;
