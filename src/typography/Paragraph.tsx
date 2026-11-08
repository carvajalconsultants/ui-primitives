import { text } from "#styled-system/recipes";

import type { TextVariant } from "#styled-system/recipes";
import type { FC, PropsWithChildren } from "react";

type ParagraphProps = PropsWithChildren & Partial<TextVariant>;

/**
 * Renders a <p> tag with the design system.
 */
export const Paragraph: FC<ParagraphProps> = ({ size, color, weight, textTransform, ...props }) => (
  <p
    className={text({
      size,
      color,
      weight,
      textTransform,
    })}
    {...props}
  />
);
