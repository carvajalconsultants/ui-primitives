import { Heading } from "../typography/Heading";

import type { FC } from "react";

export interface DialogTitleProps {
  /**
   * Title displayed as a heading in the dialog header.
   */
  title: string;
}

/**
 * Dialog title component displayed as a heading in the dialog header.
 */
export const DialogTitle: FC<DialogTitleProps> = ({ title }) => (
  <Heading slot="title" level={1}>
    {title}
  </Heading>
);
