import type { SystemProperties } from "styled-system/types";
import { Box } from "../../styled-system/jsx";

import type { BoxProps } from "../../styled-system/jsx";

export interface SpinnerProps extends Omit<BoxProps, "width" | "height" | "borderTopColor"> {
  /**
   * The width/height of the spinner.
   */
  size?: SystemProperties["width"];
}

/**
 * A loading spinner component that provides visual feedback during asynchronous operations.
 * 
 * This spinner is designed to indicate loading states in the UI, such as during data fetching,
 * form submissions, or any async operations. It uses a circular animation to show ongoing activity.
 * 
 * @param {BoxProps} props - Styling and behavior props that extend the base Box component
 * @param {string} [props.size="4"] - Width/height of the spinner (default: 4 units)
 * @param {string} [props.borderColor="white"] - Color of the spinner's border
 * @returns {JSX.Element} A spinning circular loader component
 * 
 * @example
 * // Basic usage
 * <Spinner />
 * 
 * @example
 * // Custom size and colors
 * <Spinner size="6" borderColor="blue.500" />
 */
export const Spinner = ({size, ...props}: SpinnerProps) => (
  // Creates a circular spinning animation using border properties
  // The transparent top border creates the illusion of a rotating segment
  <Box width={size} height={size} animation="spin" borderRadius="full" border="2" borderStyle="solid" borderColor="white" borderTopColor="transparent" {...props} />
);
