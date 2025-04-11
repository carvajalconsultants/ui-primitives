import { HStack, Stack } from "../../../styled-system/jsx";
import { Heading } from "../../typography/Heading";
import { Paragraph } from "../../typography/Paragraph";

interface TableTitleProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

/**
 * TableTitle component Renders a title and description (optional) for a table
 */
export const TableTitle = ({ title, description, children }: TableTitleProps) => (
  <HStack alignItems="center" justifyContent="space-between" width="fit">
    <Stack>
      <Heading>{title}</Heading>
      {description && <Paragraph>{description}</Paragraph>}
    </Stack>

    {children}
  </HStack>
);
