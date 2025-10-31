import { Box, BoxProps } from "../../styled-system/jsx";
import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";

import type { FC, ReactNode } from "react";

export interface DialogHeaderProps extends Omit<BoxProps, "title"> {
  /**
   * Title displayed as a heading in the dialog header.
   */
  title?: ReactNode | string;

  /**
   * Optional description displayed below the title.
   */
  description?: ReactNode | string;
}

/**
 * Dialog header component with title and optional description.
 */
export const DialogHeader: FC<DialogHeaderProps> = ({ title, description, ...props }) => {
  if (!title && !description) {
    return null;
  }

  return (
    <Box slot="title" {...props}>
      {title &&
        (typeof title === "string" ? (
          <Heading slot="title" level={1}>
            {title}
          </Heading>
        ) : (
          title
        ))}
      {description && (typeof description === "string" ? <Paragraph>{description}</Paragraph> : description)}
    </Box>
  );
};
