import { Paragraph } from "../typography/Paragraph";

import type { FC } from "react";

export interface DialogDescriptionProps {
  /**
   * Description displayed below the title in the dialog header.
   */
  description: string;
}

/**
 * Dialog description component displayed below the title in the dialog header.
 */
export const DialogDescription: FC<DialogDescriptionProps> = ({ description }) => <Paragraph>{description}</Paragraph>;

