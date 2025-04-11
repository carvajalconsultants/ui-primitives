import { Label as AriaLabel } from "react-aria-components";

import { label } from "../../styled-system/recipes";

import type { FC, PropsWithChildren } from "react";
import type { LabelProps as AriaLabelProps } from "react-aria-components";

import type { LabelVariantProps } from "../../styled-system/recipes";
import type { WithoutClassName } from "../types";

type LabelProps = PropsWithChildren<Partial<LabelVariantProps>> & WithoutClassName<AriaLabelProps>;

/**
 * A fully accessible label component for form fields that provides consistent styling and behavior.
 * This component helps create a better user experience by providing clear visual hierarchy
 * and maintaining accessibility standards.
 *
 * @param {Object} props - The component properties
 * @param {('sm'|'md'|'lg')} [props.size='md'] - Controls text size for different form field contexts
 *    - sm: Compact forms or dense UIs
 *    - md: Standard forms
 *    - lg: Enhanced visibility or touch interfaces
 *
 * @param {('primary'|'secondary'|'index')} [props.color='index'] - Semantic color variations
 *    - primary: Main content labels
 *    - secondary: Supporting or less emphasized labels
 *    - index: Default style matching design system index
 *
 * @param {('regular'|'medium'|'bold')} [props.weight='regular'] - Text weight for emphasis
 *    - regular: Standard label weight
 *    - medium: Slightly enhanced visibility
 *    - bold: Strong emphasis or headers
 *
 * @param {ReactNode} props.children - The label text or nested elements
 *
 * @returns {JSX.Element} A styled, accessible label component that integrates with form controls
 *
 * @example
 * // Basic usage
 * <Label>Email Address</Label>
 *
 * @example
 * // Enhanced visibility for important fields
 * <Label size="lg" weight="bold" color="primary">Password Requirements</Label>
 */
export const Label: FC<LabelProps> = ({ size, color, weight, children, ...props }) => (
  <AriaLabel className={label({ size, color, weight })} {...props}>
    {children}
  </AriaLabel>
);
