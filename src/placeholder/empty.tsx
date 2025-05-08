import { css } from "../../styled-system/css";
import { Box } from "../../styled-system/jsx";
import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph.js";

import type * as React from "react";

interface EmptyProps {
  icon: string; // image path
  title: string;
  description: string;
  iconAlt?: string;
  iconSize?: number;
}

export const Empty: React.FC<EmptyProps> = ({ icon, title, description, iconAlt = "", iconSize = 28 }) => {
  // The visual area for icon + rings
  const visualSize = iconSize * 14;

  return (
    <div
      className={css({
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80",
        width: "full",
        height: "full",
        textAlign: "center",
        overflow: "hidden",
      })}>
      {/* Centered visual area for icon + rings */}
      <div
        className={css({
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: "4",
        })}
        style={{
          width: `${visualSize}px`,
          height: `${visualSize}px`,
        }}>
        {/* Background Rings */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={css({
              position: "absolute",
              borderRadius: "full",
              borderWidth: "1",
              borderColor: "border.primary",
              pointerEvents: "none",
              zIndex: 0,
            })}
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: `${iconSize + (i * (visualSize - iconSize)) / 5}px`,
              height: `${iconSize + (i * (visualSize - iconSize)) / 5}px`,
              opacity: 0.08 * (6 - i),
              borderStyle: "solid",
              position: "absolute",
            }}
          />
        ))}
        {/* Icon */}
        <div
          className={css({
            backgroundColor: "primary.background",
            padding: "3",
            borderRadius: "full",
          })}>
          <img
            src={icon}
            alt={iconAlt}
            width={iconSize}
            height={iconSize}
            className={css({
              zIndex: 1,
              boxShadow: "1",
              objectFit: "contain",
              position: "relative",
              flexShrink: "0",
            })}
          />
        </div>
      </div>

      <div className={css({ transform: "translateY(-150px)" })}>
        <Heading level={1} size="md" weight="semiBold">
          {title}
        </Heading>
        <Box className={css({ mt: "2", textWrap: "balance", maxWidth: "80", mx: "auto" })}>
          <Paragraph>{description}</Paragraph>
        </Box>
      </div>
    </div>
  );
};

// could you please add a variant prop, when it's danger, then add I want stroke color of the icon #D92D20 and background #FEE4E2 and when it's normal then bg #F5F5F5 and stroke #BECFEB
