import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";

import type { FC } from "react";

interface ContentHeaderProps {
  title: string;
  description?: string;
}

/**
 * Displays a title and an optional description paragraph right below it.
 */
export const ContentHeader: FC<ContentHeaderProps> = ({ title, description }) => (
  <div>
    <Heading level={1}>{title}</Heading>

    {description && <Paragraph>{description}</Paragraph>}
  </div>
);
