import { Box } from "../../styled-system/jsx";
import { radialProgress } from "../../styled-system/recipes";

import type { BoxProps } from "../../styled-system/jsx";
import type { RadialProgressVariantProps } from "../../styled-system/recipes";

type RadialProgressProps = RadialProgressVariantProps &
  BoxProps & {
    /** Completion percentage (0-100) to display in the radial progress indicator. */
    percentage: number;

    /** Size in pixels for width and height. Defaults to 100px. */
    size?: number;

    /** Stroke width of the progress ring in pixels. Defaults to 8px. */
    strokeWidth?: number;
  };

interface CircleMetrics {
  center: number;
  radius: number;
  circumference: number;
  offset: number;
}

const calculateCircleMetrics = (size: number, strokeWidth: number, percentage: number): CircleMetrics => {
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percentage / 100);

  return { center, radius, circumference, offset };
};

/**
 * RadialProgress renders a radial progress indicator as a donut chart.
 * Always renders a full 360-degree circle with customizable size and stroke width.
 */
export const RadialProgress = ({ percentage, size = 100, strokeWidth = 8, variant = "primary", children, ...props }: RadialProgressProps) => {
  const { center, radius, circumference, offset } = calculateCircleMetrics(size, strokeWidth, percentage);

  const classes = radialProgress({ variant });

  return (
    <Box className={classes.container} style={{ width: size, height: size }} {...props}>
      <svg className={classes.svg} width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ width: size, height: size }}>
        {/* Background circle */}
        <circle className={classes.backgroundCircle} cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />

        {/* Progress circle */}
        <circle className={classes.progressCircle} cx={center} cy={center} r={radius} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
      </svg>

      {children && <Box className={classes.centerContent}>{children}</Box>}
    </Box>
  );
};
