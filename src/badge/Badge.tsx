import { badge } from "#styled-system/recipes";

import type { BadgeVariantProps } from "#styled-system/recipes";
import type { ComponentProps } from "react";

type BadgeProps = ComponentProps<"span"> & Partial<BadgeVariantProps>;

/**
 * Used to display a small status indicator which is success, warning or danger as per Figma.
 */
export const Badge = ({ variant, width, ...props }: BadgeProps) => <span className={badge({ variant, width })} {...props} />;
