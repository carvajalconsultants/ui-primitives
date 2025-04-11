import { useAnimate } from "motion/react-mini";
import { useEffect } from "react";

/**
 * Creates an animated loading indicator using a provided logo image
 * This component is useful for showing that content is being loaded while maintaining brand identity
 *
 * @param {Object} props - Component properties
 * @param {string} props.url - URL to the logo image that will be animated as a loader
 * @param {number} [props.size=40] - Size in pixels for both width and height of the loader. Defaults to 40px
 * @returns {JSX.Element} An animated image element that pulses to indicate loading state
 *
 * @example
 * // Show a loading indicator with company logo
 * <LogoLoader url="/company-logo.png" size={60} />
 */
export const LogoLoader = ({ size = 40, url: logoUrl }: { size?: number; url: string }) => {
  // Get animation controls for the image element
  const [scope, animate] = useAnimate<HTMLImageElement>();

  useEffect(() => {
    // Create a subtle "breathing" animation that draws attention without being distracting
    // The animation sequence:
    // 1. Gently shrinks and fades the logo slightly
    // 2. Adds a subtle glow effect through brightness
    // 3. Returns to original state
    // This cycle repeats infinitely to indicate ongoing loading
    animate(
      scope.current,
      {
        // Subtle size pulsing
        scale: [1, 0.85, 1],

        // Gentle fade effect
        opacity: [1, 0.7, 1],

        // Soft glow effect
        filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
      },
      {
        // Complete animation cycle takes 1.5 seconds
        duration: 1.5,

        // Smooth transition between states
        ease: "easeInOut",

        // Animation continues until component is unmounted
        repeat: Infinity,
      }
    );
  }, [animate, scope]);

  // Render the logo image with standardized dimensions
  return <img ref={scope} width={size} height={size} src={logoUrl} alt="Loading..." />;
};
