import { Paragraph } from "../typography/Paragraph";

import type { TextVariant } from "#styled-system/recipes";
import type { FC, PropsWithChildren } from "react";

type ParagraphProps = PropsWithChildren & Partial<TextVariant>;

export type DialogDescriptionProps = ParagraphProps;

/**
 * Dialog description component displayed below the title in the dialog header.
 */
export const DialogDescription: FC<DialogDescriptionProps> = ({ children, ...props }) => <Paragraph {...props}>{children}</Paragraph>;
