import { Paragraph } from "../typography/Paragraph";

import type { FC, PropsWithChildren } from "react";

import type { TextVariant } from "../../styled-system/recipes";

type ParagraphProps = PropsWithChildren & Partial<TextVariant>;

export type DialogDescriptionProps = ParagraphProps;

/**
 * Dialog description component displayed below the title in the dialog header.
 */
export const DialogDescription: FC<DialogDescriptionProps> = ({ children, ...props }) => <Paragraph {...props}>{children}</Paragraph>;
