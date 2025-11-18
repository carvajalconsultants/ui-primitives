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

/**
 * Converts percentage to SVG circle metrics for progress visualization.
 * Calculates radius accounting for stroke width, and inverts percentage for stroke-dashoffset.
 * Example: percentage 75% → offset hides 25% of circumference, showing 75% progress.
 * Example: size=100, strokeWidth=8, percentage=75 → { center: 50, radius: 46, circumference: 289, offset: 72 }
 */
const calculateCircleMetrics = (size: number, strokeWidth: number, percentage: number): CircleMetrics => {
  const center = size / 2;

  // Subtracting strokeWidth keeps the stroke within bounds since SVG strokes are centered on the path.
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Inverts percentage: offset = circumference hides stroke (0%), offset = 0 shows full stroke (100%).
  const offset = circumference * (1 - percentage / 100);

  return { center, radius, circumference, offset };
};

/**
 * RadialProgress provides a compact, visually engaging way to display completion status, task progress, or metrics.
 * Unlike linear progress bars, radial progress indicators efficiently use circular space and allow for additional
 * information (like percentages, labels, or counts) to be displayed in the center, making them ideal for dashboards,
 * file uploads, data visualizations, and status displays where space is at a premium.
 * Always renders a full 360-degree circle with customizable size and stroke width.
 */
export const RadialProgress = ({ percentage, size = 100, strokeWidth = 8, variant = "primary", children, ...props }: RadialProgressProps) => {
  const { center, radius, circumference, offset } = calculateCircleMetrics(size, strokeWidth, percentage);

  const classes = radialProgress({ variant });

  return (
    <Box className={classes.container} style={{ width: size, height: size }} {...props}>
      {/* Rotation applied in recipe file: SVG circles start at 3 o'clock, -90deg moves start to top (12 o'clock). */}
      <svg className={classes.svg} width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ width: size, height: size }}>
        {/* Background circle */}
        <circle className={classes.backgroundCircle} cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />

        {/* Progress circle - Rounded ends for better visual appearance. */}
        <circle className={classes.progressCircle} cx={center} cy={center} r={radius} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
      </svg>

      {/* Center content - Allows for custom content to be displayed in the center of the progress indicator. */}
      {children && <Box className={classes.centerContent}>{children}</Box>}
    </Box>
  );
};
